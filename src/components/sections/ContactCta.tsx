import { Reveal } from "@/components/Reveal";
import { SITE, waLink } from "@/lib/site";

export default function ContactCta() {
  return (
    <section id="contacto" className="py-6 sm:py-10">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal className="rounded-[32px] bg-navy text-ivory px-8 py-16 sm:py-20 text-center">
          <span className="mono-label !text-cyan">Reserva tu valoración</span>
          <h2 className="mt-4 text-3xl sm:text-4xl text-ivory max-w-[24ch] mx-auto">
            Tu primera visita puede ser esta semana.
          </h2>
          <a
            href={waLink("Hola, quiero reservar una valoración")}
            className="mt-8 inline-block rounded-full bg-cyan text-navy-strong px-8 py-4 text-sm font-medium hover:bg-cyan-dark hover:text-ivory transition-colors"
          >
            Agendar por WhatsApp
          </a>
          <p className="mt-6 text-sm text-ivory/60">
            {SITE.address.street} · {SITE.address.line2} · {SITE.address.city}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
