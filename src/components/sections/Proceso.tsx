import { RevealGroup, RevealItem } from "@/components/Reveal";

const STEPS = [
  { num: "Paso uno", title: "Valoración y radiografía", text: "Revisamos tu historial y tomamos una imagen digital de baja radiación." },
  { num: "Paso dos", title: "Plan de tratamiento", text: "Te mostramos opciones, tiempos y costos por escrito, sin letra pequeña." },
  { num: "Paso tres", title: "Procedimiento", text: "Ejecutamos con anestesia calibrada y control de dolor en cada sesión." },
  { num: "Paso cuatro", title: "Seguimiento", text: "Revisión a los 15 días y recordatorio automático de tu próxima limpieza." },
];

export default function Proceso() {
  return (
    <section id="proceso" className="py-24 sm:py-28 bg-ivory-2/60">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <div className="max-w-[56ch] mb-14">
          <span className="mono-label">Cómo funciona</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">De la primera cita al alta, sin sorpresas.</h2>
          <p className="mt-4 text-text-mut font-light">
            Cuatro pasos, siempre en el mismo orden, para que sepas exactamente qué esperar en cada visita.
          </p>
        </div>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10" stagger={0.08}>
          {STEPS.map((step, i) => (
            <RevealItem key={step.num} className="relative">
              <span className="mono-label">{step.num}</span>
              <h4 className="mt-3 text-lg">{step.title}</h4>
              <p className="mt-2 text-sm text-text-mut font-light leading-relaxed">{step.text}</p>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-2 -right-5 w-3 h-3 rounded-full bg-cyan/40" />
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
