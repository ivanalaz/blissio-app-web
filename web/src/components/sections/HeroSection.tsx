import Link from "next/link";

import { PhoneMockup } from "@/components/ui/PhoneMockup";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ backgroundColor: "#0D0C0B" }}
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-12">
        <div className="relative max-w-[680px] lg:ml-[10%]">
          <p
            className="mb-6 text-[11px] uppercase tracking-[0.2em]"
            style={{ color: "#C084FC" }}
          >
            Za plesne studije i klubove · Srbija
          </p>

          <h1
            id="hero-heading"
            className="mb-6 text-[40px] font-bold leading-[1.1] md:text-[72px]"
            style={{ color: "#F0EDE6" }}
          >
            Manje haosa.
            <br />
            Više plesa.
          </h1>

          <p
            className="mb-10 max-w-[480px] text-[20px] leading-normal"
            style={{ color: "rgba(240, 237, 230, 0.6)", fontWeight: 400 }}
          >
            Blissio zamenjuje Viber grupe i Excel tabele — jedno mesto za rasporede, plaćanja i obaveštenja za sve članove kluba.          
          </p>
          <Link
            href="#lista-cekanja"
            className="inline-block cursor-pointer rounded-lg px-8 py-3.5 text-[16px] font-medium transition-all duration-200 hover:-translate-y-0.25 hover:bg-[#A855F7] hover:shadow-lg hover:shadow-[#C084FC]/30 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]/50"
            style={{
              backgroundColor: "#C084FC",
              color: "#0D0C0B",
            }}
          >
            Prijavi se na listu čekanja
          </Link>

          {/* <p className="mt-4 text-[12px]" style={{ color: "rgba(240, 237, 230, 0.4)" }}>
            Već koriste: Studio 5 i Project 567, Novi Sad
          </p> */}
        </div>

        <PhoneMockup />
      </div>
    </section>
  );
}
