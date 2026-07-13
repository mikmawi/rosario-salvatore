import { RevealGroup, RevealItem } from "@/components/Reveal";

const ICON_PROPS = { viewBox: "0 0 42 42", fill: "none" as const, stroke: "#1FADA5", strokeWidth: 1.6 };

const SERVICES = [
  {
    title: "Odontología general",
    description: "Revisión, diagnóstico y tratamiento de las necesidades más comunes, con controles periódicos.",
    tag: "Valoración inicial",
    path: "M15 22c1.2 2.6 3.2 4 6 4s4.8-1.4 6-4",
    extra: <circle cx="21" cy="21" r="13" />,
  },
  {
    title: "Odontopediatría",
    description: "Atención a los más pequeños en un espacio pensado para bajar la ansiedad antes de la primera caries.",
    tag: "Desde 3 años",
    path: "M13 15c3-4 6-6 8-6s5 2 8 6M13 15c0 9 3.5 16 8 18 4.5-2 8-9 8-18",
  },
  {
    title: "Cirugía maxilofacial",
    description: "Corrección de alteraciones óseas y estructurales de mandíbula y rostro con equipo especializado.",
    tag: "Evaluación por imagen",
    path: "M15 18v-3a3.5 3.5 0 0 1 3.5-3.5h5a3.5 3.5 0 0 1 3.5 3.5v3",
    extra: <rect x="11" y="18" width="20" height="12" rx="4" />,
  },
  {
    title: "Estética dental",
    description: "Blanqueamiento, carillas y ajustes de forma para una sonrisa más pareja y luminosa.",
    tag: "1–3 sesiones",
    path: "M16 20c1 3 2.8 4.5 5 4.5s4-1.5 5-4.5M17 15.5l1 1.5M25 15.5l-1 1.5",
    extra: <circle cx="21" cy="21" r="13" />,
  },
  {
    title: "Ortodoncia",
    description: "Brackets tradicionales o alineadores transparentes, con control mensual de avance del arco dental.",
    tag: "Desde 18 meses",
    path: "M17 21h8M21 17v8",
    extra: <rect x="12" y="12" width="18" height="18" rx="5" />,
  },
  {
    title: "Rehabilitación oral",
    description: "Reconstrucción integral de la boca cuando varias piezas necesitan tratamiento a la vez.",
    tag: "Plan personalizado",
    path: "M12 27 C12 18 16 13 21 13 C26 13 30 18 30 27 M15 27v2.5a2.5 2.5 0 0 0 2.5 2.5h7a2.5 2.5 0 0 0 2.5-2.5V27",
  },
  {
    title: "Cirugía oral",
    description: "Extracciones simples y complejas, incluidas muelas del juicio, con recuperación guiada.",
    tag: "Sedación disponible",
    path: "M21 10v22M14 17l7-7 7 7",
    linecap: true,
  },
  {
    title: "Prótesis dental",
    description: "Prótesis fijas o removibles hechas a medida para recuperar función y estética.",
    tag: "Fijas y removibles",
    path: "M13 26c0-7 3.5-12 8-12s8 5 8 12 M14.5 26h13v2.5a2.5 2.5 0 0 1-2.5 2.5h-8a2.5 2.5 0 0 1-2.5-2.5V26z",
  },
  {
    title: "Implantes dentales",
    description: "Reemplazo de piezas perdidas con titanio de alta integración ósea y seguimiento fotográfico.",
    tag: "Garantía de 5 años",
    path: "M21 10v22M14 17l7-7 7 7",
    linecap: true,
    extra: <circle cx="21" cy="9" r="2.6" fill="#1FADA5" />,
  },
  {
    title: "Periodoncia",
    description: "Tratamiento de encías para frenar la pérdida ósea antes de que comprometa tus dientes.",
    tag: "Diagnóstico temprano",
    path: "",
    extra: (
      <>
        <circle cx="21" cy="21" r="10" />
        <circle cx="21" cy="21" r="2.8" fill="#1FADA5" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <div className="max-w-[56ch] mb-14">
          <span className="mono-label">Servicios</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Un tratamiento para cada etapa de tu salud dental.
          </h2>
          <p className="mt-4 text-text-mut font-light">
            Desde una limpieza de rutina hasta una rehabilitación completa: todo
            empieza con la misma valoración inicial.
          </p>
        </div>

        <RevealGroup
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.06}
        >
          {SERVICES.map((s) => (
            <RevealItem
              key={s.title}
              className="rounded-[24px] bg-card border border-line p-7 hover:shadow-lg hover:shadow-navy/[0.06] hover:-translate-y-0.5 transition-all"
            >
              <div className="w-[42px] h-[42px] rounded-full bg-cyan-soft/60 flex items-center justify-center">
                <svg {...ICON_PROPS} className="w-6 h-6" strokeLinecap={s.linecap ? "round" : undefined}>
                  {s.path && <path d={s.path} />}
                  {s.extra}
                </svg>
              </div>
              <h3 className="mt-5 text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-text-mut font-light leading-relaxed">{s.description}</p>
              <div className="mt-4 mono-label !text-cyan-dark">{s.tag}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
