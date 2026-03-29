import { siteConfig } from "@/lib/config/site";

export type FaqItem = { question: string; answer: string };

function organizationNode() {
  return {
    "@type": "Organization" as const,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    logo: `${siteConfig.url}/opengraph-image`,
    /** Lokalni kontekst (AEO / lokalni signali) — usklađeno sa pilot tekstom na sajtu. */
    areaServed: [
      { "@type": "Country" as const, name: "Serbia" },
      { "@type": "City" as const, name: "Novi Sad" },
    ],
  };
}

function websiteNode() {
  return {
    "@type": "WebSite" as const,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.defaultDescription,
    inLanguage: siteConfig.locale,
  };
}

function faqPageNode(items: FaqItem[]) {
  return {
    "@type": "FAQPage" as const,
    mainEntity: items.map((item) => ({
      "@type": "Question" as const,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.answer,
      },
    })),
  };
}

/** Jedan JSON-LD script sa @graph za početnu stranu. */
export function homePageGraphJsonLd(faqItems: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode(), faqPageNode(faqItems)],
  };
}
