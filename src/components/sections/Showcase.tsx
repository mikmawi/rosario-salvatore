"use client";

import { Reveal } from "@/components/Reveal";
import { waLink } from "@/lib/site";
import { useCanPlayVideo } from "@/lib/useCanPlayVideo";

export default function Showcase() {
  const canPlayVideo = useCanPlayVideo();

  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative rounded-[28px] overflow-hidden shadow-xl shadow-navy/[0.08] aspect-video bg-card border border-line">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url(/images/implant-poster.jpg)" }}
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
              <source src="/videos/implant.mp4" type="video/mp4" />
            </video>
          )}
        </Reveal>
        <Reveal delay={0.1}>
          <span className="mono-label">Servicios</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Implantes dentales, <em>colocados con precisión.</em>
          </h2>
          <div className="mt-3 text-sm font-medium text-cyan-dark">
            Un proceso guiado, no improvisado
          </div>
          <p className="mt-5 text-text-mut font-light leading-relaxed max-w-[52ch]">
            Cada implante se planifica con imagen digital para ubicarlo donde tu
            hueso ofrece mejor soporte. Eso significa menos sorpresas,
            cicatrización más predecible y una pieza que se siente tan firme
            como la original.
          </p>
          <a
            href={waLink("Hola, quiero consultar sobre implantes")}
            className="mt-7 inline-block rounded-full bg-navy text-ivory px-7 py-3.5 text-sm font-medium hover:bg-navy-soft transition-colors"
          >
            Consultar implantes
          </a>
        </Reveal>
      </div>
    </section>
  );
}
