import { NextResponse } from "next/server";

import { getSupabaseAdmin } from "@/lib/waitlist/supabase-admin";
import type { WaitlistPayload } from "@/lib/waitlist/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MSG_INVALID_EMAIL = "Unesi ispravnu e-adresu.";
const MSG_SUCCESS = "Hvala — zabeležila sam tvoju adresu.";
const MSG_DUPLICATE = "Već si na listi — javiću ti se čim aplikacija bude spremna.";
const MSG_SERVER = "Došlo je do greške. Pokušaj ponovo za trenutak.";
const MSG_BAD_REQUEST = "Neispravan zahtev.";
const MSG_CONFIG = "Konfiguracija servera nije kompletna. Kontaktiraj podršku.";

const SOURCE_MAX = 64;

function normalizeSource(raw: unknown): string {
  if (typeof raw !== "string") return "landing_page";
  const t = raw.trim().slice(0, SOURCE_MAX);
  if (!t) return "landing_page";
  if (!/^[a-zA-Z0-9_-]+$/.test(t)) return "landing_page";
  return t;
}

function isUniqueViolation(err: { code?: string; message?: string }): boolean {
  if (err.code === "23505") return true;
  const m = err.message?.toLowerCase() ?? "";
  return m.includes("duplicate") || m.includes("unique");
}

/**
 * POST /api/waitlist
 * Inserts into Supabase `waitlist_emails` using the service role (server only).
 */
export async function POST(request: Request) {
  let body: WaitlistPayload;
  try {
    body = (await request.json()) as WaitlistPayload;
  } catch {
    return NextResponse.json({ error: MSG_BAD_REQUEST }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const rawEmail = typeof body.email === "string" ? body.email.trim() : "";
  const email = rawEmail.toLowerCase();

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: MSG_INVALID_EMAIL }, { status: 400 });
  }

  const source = normalizeSource(body.source);

  let supabase;
  try {
    supabase = getSupabaseAdmin();
  } catch {
    return NextResponse.json({ error: MSG_CONFIG }, { status: 503 });
  }

  const { error } = await supabase.from("waitlist_emails").insert({
    email,
    source,
  });

  if (!error) {
    return NextResponse.json({ ok: true, message: MSG_SUCCESS }, { status: 201 });
  }

  if (isUniqueViolation(error)) {
    return NextResponse.json({ ok: true, message: MSG_DUPLICATE }, { status: 200 });
  }

  if (process.env.NODE_ENV === "development") {
    console.error("[waitlist]", error);
  }

  return NextResponse.json({ error: MSG_SERVER }, { status: 500 });
}
