"use client";

import { Reveal } from "@/components/Reveal";
import { waLink } from "@/lib/site";
import { useCanPlayVideo } from "@/lib/useCanPlayVideo";

export default function Attention() {
  const canPlayVideo = useCanPlayVideo();

  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative rounded-[28px] overflow-hidden shadow-xl shadow-navy/[0.08] aspect-[4/3] order-2 lg:order-1">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url(/images/attention-poster.jpg)" }}
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
              <source src="/videos/attention.mp4" type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-strong/40 to-transparent" />
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <span className="mono-label">Nuestro equipo</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Atención profesional, <em>presente en cada visita.</em>
          </h2>
          <p className="mt-5 text-text-mut font-light leading-relaxed max-w-[52ch]">
            Cada procedimiento se realiza con protocolos de bioseguridad
            estrictos y tiempo dedicado a resolver tus dudas antes, durante y
            después del tratamiento. No apuramos consultas: las adaptamos a lo
            que tu caso necesita.
          </p>
          <a
            href={waLink("Hola, quiero reservar una valoración")}
            className="mt-7 inline-block rounded-full bg-navy text-ivory px-7 py-3.5 text-sm font-medium hover:bg-navy-soft transition-colors"
          >
            Reservar valoración
          </a>
        </Reveal>
      </div>
    </section>
  );
}
