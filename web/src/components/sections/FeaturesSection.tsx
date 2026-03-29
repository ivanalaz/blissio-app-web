import Image from "next/image";

import { featureScreens } from "@/lib/content/features";

const features = [
  {
    tag: "Grupe i raspored",
    title: "Raspored koji svi vide",
    body:
      "Nema više pitanja „kad je trening?“. \nČlanovi i roditelji vide tačan raspored u svakom trenutku. Promene se ažuriraju odmah za sve.",
    textPosition: "left" as const,
    imageSrc: featureScreens[0],
  },
  {
    tag: "Plaćanja",
    title: "Niko više ne juri nikoga",
    body:
      "Podsetnike za dugovanja šalje Blissio, ne ti. Admin vidi sve uplate na jednom mestu, roditelji vide svoje stanje. Bez tabela, bez nelagodnih poruka.",
    textPosition: "right" as const,
    imageSrc: featureScreens[1],
  },
  {
    tag: "Solo termini",
    title: "Privatni časovi bez razmene poruka",
    body:
      "Instruktor postavlja slobodne termine. Član bira kad mu odgovara. Sve se beleži, podsetnik stiže automatski.",
    textPosition: "left" as const,
    imageSrc: featureScreens[2],
  },
  {
    tag: "Za sve u klubu",
    title: "Roditelj i član na istoj platformi",
    body:
      "Admin, instruktor, roditelj, član — svaka uloga vidi ono što joj treba. Jedna osoba može imati više uloga gde je to potrebno.",
    textPosition: "right" as const,
    imageSrc: featureScreens[3],
  },
] as const;

export function FeaturesSection() {
  return (
    <section
      className="py-[120px]"
      style={{ backgroundColor: "#0D0C0B" }}
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <p
          className="mb-3 text-[11px] uppercase tracking-[0.2em]"
          style={{ color: "#C084FC" }}
        >
          Kako Blissio pomaže u vođenju kluba
        </p>

        <h2
          id="features-heading"
          className="mb-20 text-[36px] font-bold leading-[1.1] md:text-[48px]"
          style={{ color: "#F0EDE6" }}
        >
          Sve što klubu treba.
          <br />
          Ništa što ne treba.
        </h2>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const textLeft = feature.textPosition === "left";
            return (
              <div
                key={feature.title}
                className={`flex flex-col items-center gap-12 lg:flex-row ${
                  textLeft ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Tekst: kad je levo → ml-auto gura blok ka desnoj ivici kolone (bliže slici) */}
                <div className={`flex flex-1 ${textLeft ? "lg:justify-end" : "lg:justify-start"}`}>
                  <div className="max-w-[380px]">
                    <p
                      className="mb-4 text-[11px] uppercase tracking-[0.15em]"
                      style={{ color: "#C084FC" }}
                    >
                      {feature.tag}
                    </p>
                    <h3 className="mb-4 text-[24px] font-semibold md:text-[28px]" style={{ color: "#F0EDE6" }}>
                      {feature.title}
                    </h3>
                    <p
                      className="text-[16px] leading-[1.7]"
                      style={{ color: "rgba(240, 237, 230, 0.6)" }}
                    >
                      {feature.body}
                    </p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden lg:max-w-[min(100%,560px)]">
                  <div className="absolute inset-0 origin-top scale-[1.37]">
                    <Image
                      src={feature.imageSrc}
                      alt={`Blissio: ${feature.title}`}
                      fill
                      priority={index < 2}
                      className="object-contain object-center"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
