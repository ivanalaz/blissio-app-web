"use client";

import { useEffect, useState } from "react";

import { Logo } from "@/components/ui/Logo";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? "rgba(13, 12, 11, 0.85)" : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
        }}
        aria-label="Glavna navigacija"
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 lg:px-12">
          <Logo />

          <a
            href="#lista-cekanja"
            className="hidden cursor-pointer rounded-lg px-5 py-2.5 text-[13px] transition-all duration-200 hover:-translate-y-0.25 hover:bg-[#C084FC]/15 hover:shadow-lg hover:shadow-[#C084FC]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]/40 md:inline-flex"
            style={{
              color: "#C084FC",
              border: "1px solid #C084FC",
              backgroundColor: "transparent",
            }}
          >
            Prijavi se na listu čekanja
          </a>

          <span
            className="md:hidden h-3 w-3 rounded-full"
            style={{ backgroundColor: "#C084FC" }}
            aria-hidden
          />
        </div>
      </nav>
    </header>
  );
}
