import { faqItems } from "@/lib/content/home";

export function FaqSection() {
  return (
    <section
      className="py-[100px]"
      style={{ backgroundColor: "#0D0C0B" }}
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[800px] px-6 lg:px-12">
        <p
          className="mb-3 text-center text-[11px] uppercase tracking-[0.2em]"
          style={{ color: "#C084FC" }}
        >
          Pitanja
        </p>
        <h2
          id="faq-heading"
          className="mb-12 text-center text-[32px] font-bold leading-[1.1] md:text-[40px]"
          style={{ color: "#F0EDE6" }}
        >
          Često postavljana pitanja
        </h2>

        <div className="space-y-8">
          {faqItems.map((item) => (
            <article
              key={item.question}
              className="rounded-2xl border border-white/[0.08] bg-[#1A1917]/80 p-6 md:p-8"
            >
              <h3 className="mb-3 text-lg font-semibold text-[#F0EDE6]">{item.question}</h3>
              <p className="text-[15px] leading-relaxed text-[rgba(240,237,230,0.65)]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
