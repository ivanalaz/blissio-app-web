import type { StaticImageData } from "next/image";

import placanja from "@/assets/images/features/placanja.png";
import raspored from "@/assets/images/features/raspored.png";
import soloTermini from "@/assets/images/features/solo-termini.png";
import uloge from "@/assets/images/features/uloge-i-roditelji.png";

/**
 * Izvor mockupa: `src/assets/images/features/` (ne `public/`, da bi bundler video promenu fajla).
 * Redosled mora odgovarati redovima u FeaturesSection.
 */
export const featureScreens: StaticImageData[] = [
  raspored, // Grupe i raspored
  placanja, // Plaćanja / evidencija
  soloTermini,
  uloge,
];
