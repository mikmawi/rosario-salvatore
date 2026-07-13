"use client";

import { motion } from "framer-motion";
import { waLink } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import StarRating from "@/components/icons/StarRating";
import { useCanPlayVideo } from "@/lib/useCanPlayVideo";

function AppointmentCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-[24px] bg-card/95 backdrop-blur border border-line p-6 shadow-xl shadow-navy-strong/10 ${className}`}>
      <span className="mono-label">Ficha de valoración</span>
      <h3 className="mt-2 text-xl">Tu primera visita</h3>
      <p className="mt-2 text-sm text-text-mut font-light leading-relaxed">
        Cada consulta inicial incluye revisión clínica, radiografía si se
        requiere y un plan de tratamiento explicado en detalle.
      </p>
      <dl className="mt-4 divide-y divide-line text-sm">
        {[
          ["Duración", "45 min"],
          ["Incluye", "Diagnóstico + plan"],
          ["Próxima disponibilidad", "Esta semana"],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between py-2.5">
            <dt className="text-text-mut">{k}</dt>
            <dd className="font-medium text-navy">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Hero() {
  const canPlayVideo = useCanPlayVideo();

  return (
    <section className="relative overflow-hidden flex flex-col py-28 lg:py-0 lg:min-h-[720px] lg:h-screen">
      <div className="absolute inset-0">
        {/* Poster is the base layer: it's what mobile / reduced-motion visitors see, and what everyone sees before the video mounts */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-poster.jpg)" }}
        />
        {canPlayVideo && (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-navy-strong/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-strong/90 via-navy-strong/25 to-navy-strong/50" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center mx-auto max-w-[1180px] w-full px-6 sm:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-2 text-xs text-ivory/90 w-fit">
            <StarRating className="text-cyan" />
            Consultorio de confianza en <b className="font-medium text-ivory">Real Audiencia, Quito</b>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.08] text-ivory max-w-[16ch]">
            Odontología integral, con la calma de{" "}
            <em className="text-cyan">saber qué esperar.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 text-lg text-ivory/75 max-w-[46ch] font-light leading-relaxed">
            En Rosario Salvatore evaluamos cada caso con calma antes de proponer
            un tratamiento. Diagnóstico claro, planes por escrito y un equipo
            que te acompaña en cada visita.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={waLink("Hola, quiero reservar una valoración")}
              className="rounded-full bg-cyan text-navy-strong px-7 py-3.5 text-sm font-medium hover:bg-cyan-dark hover:text-ivory transition-colors shadow-lg shadow-navy-strong/30"
            >
              Reservar valoración
            </a>
            <a
              href="#servicios"
              className="rounded-full border border-ivory/30 px-7 py-3.5 text-sm font-medium text-ivory hover:bg-white/10 transition-colors"
            >
              Ver servicios
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.32} className="lg:hidden mt-8 max-w-[380px]">
          <AppointmentCard />
        </Reveal>
      </div>

      <Reveal delay={0.3} className="hidden lg:block absolute z-10 bottom-28 right-10 w-[320px]">
        <AppointmentCard />
      </Reveal>

      <motion.a
        href="#promociones"
        aria-label="Bajar para ver más"
        className="relative z-10 mb-7 mx-auto text-ivory/70 hover:text-ivory transition-colors motion-reduce:hidden"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </section>
  );
}
