const painPoints = [
  {
    title: "Ručno praćenje plaćanja",
    body:
      "Ko je platio članarinu, ko duguje, ko kasni — pratiš u tabeli ili pamtiš u glavi. Lako se pogreši, teško je imati pregled.",
  },
  // {
  //   title: "Zakazivanje solo termina",
  //   body:
  //     "Koordinacija privatnih časova ide kroz poruke. Termini se gube, članovi zaboravljaju, instruktori se bune.",
  // },
  {
    title: "Informacije koje nestaju u grupi",
    body:
      "Važna obaveštenja se izgube između poruka. Roditelji pitaju ponovo. Instruktori odgovaraju ponovo. Telefon nikad ne miruje.",
  },
  // {
  //   title: "Obaveštenja koja ne stižu na vreme",
  //   body:
  //     "Otkazani trening, promenjen termin, podsetnik za uplatu — sve ručno, svaki put iznova.",
  // },
  {
    title: "Evidencija prisutnosti na papiru",
    body:
      "Ko je bio na treningu, ko nije, ko je opravdano izostao — piše se u svesku ili beleške. Nema istorije, nema pregleda, nema analize.",
  },
] as const;

export function PainSection() {
  return (
    <section
      className="py-[120px]"
      style={{ backgroundColor: "#0D0C0B" }}
      aria-labelledby="pain-heading"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <p
          className="mb-3 text-[11px] uppercase tracking-[0.2em]"
          style={{ color: "#C084FC" }}
        >
          Poznato?
        </p>

        <h2
          id="pain-heading"
          className="mb-12 text-[36px] font-bold leading-[1.1] md:text-[48px]"
          style={{ color: "#F0EDE6" }}
        >
          Vodiš klub kroz
          <br />
          Viber grupe i Excel tabele.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {painPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-lg p-7 transition-all duration-200"
              style={{
                backgroundColor: "#1A1917",
                border: "0.5px solid rgba(255, 255, 255, 0.08)",
                backgroundImage:
                  "linear-gradient(rgba(192, 132, 252, 0.06), rgba(192, 132, 252, 0.06))",
              }}
            >
              <div className="mb-4 text-[24px]" style={{ color: "#C084FC" }} aria-hidden>
                ×
              </div>
              <h3 className="mb-3 text-[16px] font-medium" style={{ color: "#F0EDE6" }}>
                {point.title}
              </h3>
              <p className="text-[14px] leading-[1.7]" style={{ color: "rgba(240, 237, 230, 0.55)" }}>
                {point.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
