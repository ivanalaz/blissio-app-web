import { WaitlistForm } from "@/components/forms/WaitlistForm";

export function WaitlistSection() {
  return (
    <section
      id="lista-cekanja"
      className="scroll-mt-24 py-[140px]"
      style={{ backgroundColor: "#0D0C0B" }}
      aria-labelledby="waitlist-heading"
    >
      <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-12">
        <h2
          id="waitlist-heading"
          className="mb-5 text-[40px] font-bold leading-[1.1] md:text-[56px]"
          style={{ color: "#F0EDE6" }}
        >
          Spremna da prestaneš
          <br />
          da vodiš klub na Viberu?
        </h2>

        <p
          className="mx-auto mb-10 max-w-[440px] text-[18px]"
          style={{ color: "rgba(240, 237, 230, 0.55)" }}
        >
          Prijavi se na listu čekanja. Javiću ti se pre nego što otvorim pristup.
        </p>

        <WaitlistForm />
      </div>
    </section>
  );
}
