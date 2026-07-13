import { Reveal } from "@/components/Reveal";
import StarRating from "@/components/icons/StarRating";

const TESTIMONIALS = [
  {
    quote:
      "Fue la primera clínica que me mostró la radiografía y me explicó pieza por pieza qué necesitaba y qué podía esperar. Ninguna sorpresa en la factura.",
    author: "Paciente de ortodoncia, tratamiento en curso",
  },
];

export default function Testimonials() {
  return (
    <section id="opiniones" className="py-24 sm:py-28">
      <div className="mx-auto max-w-[760px] px-6 sm:px-10 text-center">
        {TESTIMONIALS.map((t) => (
          <Reveal key={t.author}>
            <StarRating className="justify-center text-cyan-dark" />
            <blockquote className="mt-6 font-serif text-2xl sm:text-3xl leading-snug text-navy">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <cite className="mt-5 block not-italic text-sm text-text-mut">— {t.author}</cite>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
