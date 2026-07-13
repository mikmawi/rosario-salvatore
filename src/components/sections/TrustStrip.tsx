import { RevealGroup, RevealItem } from "@/components/Reveal";

const STATS = [
  { num: "12+", label: "Años de práctica" },
  { num: "10", label: "Especialidades" },
  { num: "4.9", label: "Calificación de pacientes" },
  { num: "3.400+", label: "Tratamientos realizados" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-line bg-card/50">
      <RevealGroup className="mx-auto max-w-[1180px] px-6 sm:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <RevealItem key={s.label} className="text-center md:text-left">
            <div className="font-serif text-3xl sm:text-4xl text-navy">{s.num}</div>
            <div className="mt-1 text-sm text-text-mut">{s.label}</div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
