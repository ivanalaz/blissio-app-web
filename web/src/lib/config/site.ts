import { primaryHtmlLang, primaryLocale } from "@/lib/locale/sr-RS";

/**
 * Central site configuration for URLs, locale, and branding.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://blissio.rs).
 */
export const siteConfig = {
  name: "Blissio",
  shortName: "Blissio",
  /** Default when env is missing (local dev). */
  get url() {
    return (
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
      "http://localhost:3000"
    );
  },
  locale: primaryLocale,
  htmlLang: primaryHtmlLang,
  defaultTitle: "Blissio — Aplikacija za upravljanje plesnim studijem | Srbija",
  defaultDescription:
    "Blissio zamenjuje Viber grupe i Excel tabele — jedno mesto za rasporede, plaćanja i obaveštenja za sve članove kluba.",
  contactEmail: "contact@blissio.app",
  twitterHandle: "@blissio",
} as const;
