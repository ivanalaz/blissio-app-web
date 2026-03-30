import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { siteConfig } from "@/lib/config/site";

import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
    languages: {
      "sr-RS": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.htmlLang} className="h-full">
      <body
        className={`${fontSans.variable} min-h-full flex flex-col bg-[#0D0C0B] font-sans text-[#F0EDE6] antialiased`}
      >
        <a
          href="#sadrzaj"
          className="skip-link rounded-lg bg-[#C084FC] px-4 py-2 text-[#0D0C0B] focus:outline-none focus:ring-2 focus:ring-[#C084FC] focus:ring-offset-2 focus:ring-offset-[#0D0C0B]"
        >
          Preskoči na sadržaj
        </a>
        {children}
      </body>
    </html>
  );
}
