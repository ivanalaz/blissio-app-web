import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainSection } from "@/components/sections/PainSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { faqItems } from "@/lib/content/home";
import { siteConfig } from "@/lib/config/site";
import { JsonLd } from "@/lib/seo/json-ld";
import { homePageGraphJsonLd } from "@/lib/seo/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageGraphJsonLd(faqItems)} />
      <SiteHeader />
      <main id="sadrzaj" className="flex-1">
        <HeroSection />
        <PainSection />
        <FeaturesSection />
        <SocialProofSection />
        <WaitlistSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}

export const metadata = {
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
};
