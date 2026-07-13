import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { waLink } from "@/lib/site";
import clinicaAdulto from "../../../public/images/clinica-adulto.webp";
import clinicaPediatrico from "../../../public/images/clinica-pediatrico.webp";

const PROMOS = [
  {
    image: clinicaAdulto,
    alt: "Limpieza dental y restauraciones en Rosario Salvatore",
    items: ["Limpieza dental", "2 restauraciones simples"],
    price: "49,99",
    waMessage: "Hola, quiero agendar la promo de limpieza + 2 restauraciones por $49.99",
  },
  {
    image: clinicaPediatrico,
    alt: "Odontopediatría preventiva en Rosario Salvatore",
    items: ["Limpieza dental", "Fluorización", "2 sellantes"],
    price: "39,99",
    waMessage: "Hola, quiero agendar la promo de limpieza + fluorización + 2 sellantes por $39.99",
  },
];

export default function Promos() {
  return (
    <section id="promociones" className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <div className="max-w-[52ch] mb-14">
          <span className="mono-label">Promociones</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">Ofertas activas este mes</h2>
          <p className="mt-4 text-text-mut font-light">
            Aprovecha estos beneficios reservando tu cita por WhatsApp.
          </p>
        </div>

        <RevealGroup className="grid sm:grid-cols-2 gap-8">
          {PROMOS.map((promo) => (
            <RevealItem
              key={promo.price}
              className="group rounded-[28px] bg-card border border-line overflow-hidden shadow-sm hover:shadow-xl hover:shadow-navy/[0.08] transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={promo.image}
                  alt={promo.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-strong/60 to-transparent" />
                <span className="absolute top-4 left-4 mono-label !text-cyan bg-navy-strong/60 backdrop-blur px-3 py-1.5 rounded-full">
                  Promo de verano
                </span>
              </div>
              <div className="p-7">
                <ul className="space-y-1.5">
                  {promo.items.map((item, i) => (
                    <li key={item} className="flex items-baseline gap-2 text-navy">
                      {i > 0 && <span className="text-cyan-dark text-xs">+</span>}
                      <span className={i === 0 ? "font-medium" : ""}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-end justify-between">
                  <div className="font-serif text-3xl text-navy">
                    <span className="text-base align-top mr-0.5">$</span>
                    {promo.price}
                  </div>
                  <a
                    href={waLink(promo.waMessage)}
                    className="rounded-full bg-navy text-ivory px-5 py-2.5 text-sm font-medium hover:bg-navy-soft transition-colors"
                  >
                    Reservar
                  </a>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
