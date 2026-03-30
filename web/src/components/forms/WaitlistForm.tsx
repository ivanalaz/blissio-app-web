"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const company = String(fd.get("company") ?? "");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
      };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Došlo je do greške. Pokušajte ponovo.");
        return;
      }
      setStatus("success");
      setMessage(
        typeof data.message === "string" && data.message.length > 0
          ? data.message
          : "Hvala — zabeležila sam tvoju adresu.",
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Mrežna greška. Pokušajte ponovo.");
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mb-4 flex flex-col items-center justify-center gap-3 md:flex-row"
        noValidate
      >
        <label htmlFor="waitlist-email" className="sr-only">
          E-adresa za listu čekanja
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="tvoj@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          required
          disabled={status === "loading"}
          className="w-full rounded-lg px-5 py-3.5 text-[16px] outline-none md:w-[320px] disabled:opacity-60"
          style={{
            backgroundColor: "#1A1917",
            border: "0.5px solid #C084FC",
            color: "#F0EDE6",
            transition: "box-shadow 0.2s ease",
            boxShadow: inputFocused ? "0 0 0 2px #C084FC" : "none",
          }}
        />
        {/* Honeypot */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
          aria-hidden
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full cursor-pointer rounded-lg px-7 py-3.5 text-[16px] font-medium transition-all duration-200 hover:-translate-y-0.25 hover:bg-[#A855F7] hover:shadow-lg hover:shadow-[#C084FC]/30 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]/50 md:w-auto disabled:cursor-not-allowed disabled:opacity-60"
          style={{
            backgroundColor: "#C084FC",
            color: "#0D0C0B",
          }}
        >
          {status === "loading" ? "Šaljem…" : "Prijavi se"}
        </button>
      </form>
      {message ? (
        <p
          className="text-center text-sm"
          style={{
            color: status === "success" ? "rgba(192, 132, 252, 0.95)" : "#fca5a5",
          }}
          role={status === "error" ? "alert" : "status"}
        >
          {message}
        </p>
      ) : (
        <p className="text-center text-[12px]" style={{ color: "rgba(240, 237, 230, 0.35)" }}>
          Bez spam poruka. Samo obaveštenje kada aplikacija bude dostupna.
        </p>
      )}
    </div>
  );
}
