import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { SITE, waLink } from "@/lib/site";
import flyer1 from "../../../public/images/banners/flyer-1.webp";
import flyer2 from "../../../public/images/banners/flyer-2.webp";
import flyer3 from "../../../public/images/banners/flyer-3.webp";

const BANNERS = [
  { image: flyer1, alt: "Promoción publicitaria 1", jpgPath: "/images/banners/flyer-1.jpg" },
  { image: flyer2, alt: "Promoción publicitaria 2", jpgPath: "/images/banners/flyer-2.jpg" },
  { image: flyer3, alt: "Promoción publicitaria 3", jpgPath: "/images/banners/flyer-3.jpg" },
];

export default function Banners() {
  return (
    <section className="py-24 sm:py-28 bg-ivory-2/60">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <div className="max-w-[52ch] mb-14">
          <span className="mono-label">Ofertas</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">Promociones destacadas</h2>
          <p className="mt-4 text-text-mut font-light">
            Reserva cualquiera de estas ofertas por WhatsApp.
          </p>
        </div>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.06}>
          {BANNERS.map((banner, i) => (
            <RevealItem key={i}>
              <a
                href={waLink(
                  `Hola, quiero más información sobre esta promoción: ${SITE.url}${banner.jpgPath}`
                )}
                className="group block rounded-[24px] bg-card border border-line overflow-hidden shadow-sm hover:shadow-xl hover:shadow-navy/[0.08] transition-shadow"
              >
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
