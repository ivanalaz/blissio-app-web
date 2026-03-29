import { siteConfig } from "@/lib/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-8"
      style={{
        backgroundColor: "#0D0C0B",
        borderTop: "0.5px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 md:flex-row lg:px-12">
        <p className="text-[13px]" style={{ color: "rgba(240, 237, 230, 0.35)" }}>
          {siteConfig.name} · {year}
        </p>
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="text-[13px] underline-offset-4 hover:underline"
          style={{ color: "rgba(240, 237, 230, 0.35)" }}
        >
          {siteConfig.contactEmail}
        </a>
      </div>
    </footer>
  );
}
