import { Reveal } from "@/components/Reveal";

export default function Intro() {
  return (
    <section className="py-24 sm:py-28 bg-ivory-2/60">
      <Reveal className="mx-auto max-w-[1180px] px-6 sm:px-10 text-center">
        <span className="mono-label">Bienvenido a Rosario Salvatore</span>
        <h2 className="mt-4 text-3xl sm:text-4xl max-w-[24ch] mx-auto">
          Donde cada diagnóstico se explica antes de tratarse.
        </h2>
        <p className="mt-5 text-lg text-text-mut font-light max-w-[62ch] mx-auto leading-relaxed">
          Creemos que la tranquilidad empieza con la información: por eso cada
          visita comienza con una valoración honesta, sin apuros y sin letra
          pequeña, para que decidas con calma el camino de tu tratamiento.
        </p>
      </Reveal>
    </section>
  );
}
