import type { FaqItem } from "@/lib/seo/structured-data";

export const faqItems: FaqItem[] = [
  {
    question: "Šta je Blissio?",
    answer:
      "Blissio je softver za upravljanje plesnim studijima i takmičarskim klubovima u Srbiji. Objedinjuje rasporede časova, evidenciju prisutnosti, praćenje članarina i dugovanja, automatske podsetnike za uplatu i komunikaciju između admina, instruktora, roditelja i članova — u jednoj mobilnoj aplikaciji.",
  },
  {
    question: "Za koje vrste klubova je namenjen?",
    answer:
      "Blissio je trenutno fokusiran na plesne studije i takmičarske plesne klubove u Srbiji — posebno one koji rade sa savremenim plesom i jazz baletom. Aplikacija podržava grupe, individualne termine, više uloga i evidenciju za klubove registrovane pri plesnom savezu.",
  },
  {
    question: "Kada će biti dostupno?",
    answer:
      "Prijavite se na listu čekanja — javiću ti se kada otvorim pristup.",
  },
  {
    question: "Koliko košta?",
    answer:
      "Blissio je trenutno u pilot fazi. Prijavite se na listu čekanja — javiću vam se lično sa detaljima pre nego što otvorimo pristup.",
  },
  {
    question: "Da li aplikaciju mogu da koriste i roditelji i članovi, ne samo admin?",
    answer:
      "Da. Svaki član kluba dobija pristup aplikaciji — admin, instruktor, roditelj i polaznik imaju svoje prikaze i dozvole. Admin aktivira svakog korisnika i dodeljuje mu ulogu i grupe.",
  },
  {
    question: "Da li su podaci bezbedni?",
    answer:
      "Blissio koristi Supabase infrastrukturu sa serverima u EU, enkripcijom podataka i kontrolom pristupa po ulogama. Aplikacija je usklađena sa Zakonom o zaštiti podataka o ličnosti Republike Srbije.",
  },
];
