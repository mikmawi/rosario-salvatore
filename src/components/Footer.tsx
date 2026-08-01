import { SITE } from "@/lib/site";

const SERVICE_LINKS = [
  "Odontología general",
  "Ortodoncia",
  "Implantes",
  "Estética dental",
];

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="font-serif text-xl mb-3">{SITE.name}</div>
          <p className="text-sm leading-relaxed text-ivory/60 max-w-[280px] font-light">
            Consultorio de odontología integral. Diagnóstico claro, tratamientos
            explicados, sin letra pequeña.
          </p>
        </div>
        <div>
          <h5 className="mono-label !text-cyan mb-4">Servicios</h5>
          <ul className="space-y-2.5">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a href="#servicios" className="text-sm text-ivory/70 hover:text-cyan transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="mono-label !text-cyan mb-4">Consultorio</h5>
          <ul className="space-y-2.5">
            <li><a href="#proceso" className="text-sm text-ivory/70 hover:text-cyan transition-colors">Cómo funciona</a></li>
            <li><a href="#opiniones" className="text-sm text-ivory/70 hover:text-cyan transition-colors">Opiniones</a></li>
            <li><a href="#contacto" className="text-sm text-ivory/70 hover:text-cyan transition-colors">Reservar valoración</a></li>
          </ul>
        </div>
        <div>
          <h5 className="mono-label !text-cyan mb-4">Contacto</h5>
          <ul className="space-y-2.5 text-sm text-ivory/70">
            <li>{SITE.address.street}</li>
            <li>{SITE.address.line2} — {SITE.address.city}</li>
            <li><a href={`tel:${SITE.phoneIntl}`} className="hover:text-cyan transition-colors">{SITE.phoneDisplay}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="hover:text-cyan transition-colors">{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-ivory/50">
        <span>© {new Date().getFullYear()} {SITE.name} | desarrollado por <a href="https://www.instagram.com/mikmawi/" target="_blank" rel="noopener noreferrer">@mikmawi</a></span> 
          <span>
            {SITE.hours.map((h) => `${h.label} ${h.value}`).join(" · ")}
          </span>
        </div>
      </div>
    </footer>
  );
}
