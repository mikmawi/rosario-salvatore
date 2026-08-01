"use client";

import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { waLink } from "@/lib/site";
import flyer1 from "../../../public/images/banners/flyer-1.webp";
import flyer2 from "../../../public/images/banners/flyer-2.webp";
import flyer3 from "../../../public/images/banners/flyer-3.webp";

const BANNERS = [
  { image: flyer1, alt: "Promoción publicitaria 1", waMessage: "Hola, quiero más información sobre esta promoción" },
  { image: flyer2, alt: "Promoción publicitaria 2", waMessage: "Hola, quiero más información sobre esta promoción" },
  { image: flyer3, alt: "Promoción publicitaria 3", waMessage: "Hola, quiero más información sobre esta promoción" },
];

async function shareBanner(imageSrc: string, message: string) {
  try {
    const response = await fetch(imageSrc);
    const blob = await response.blob();
    const file = new File([blob], "promocion.webp", { type: blob.type || "image/webp" });

    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], text: message });
      return;
    }
  } catch {
    // el usuario canceló el share o el navegador falló: cae al enlace de WhatsApp
  }
  window.open(waLink(message), "_blank");
}

export default function Banners() {
  return (
    <section className="py-24 sm:py-28 bg-ivory-2/60">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <div className="max-w-[52ch] mb-14">
          <span className="mono-label">Ofertas</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">Promociones destacadas</h2>
          <p className="mt-4 text-text-mut font-light">
            Toca una promoción para enviarla por WhatsApp.
          </p>
        </div>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.06}>
          {BANNERS.map((banner, i) => (
            <RevealItem key={i}>
              <button
                type="button"
                onClick={() => shareBanner(banner.image.src, banner.waMessage)}
                className="group block w-full text-left rounded-[24px] bg-card border border-line overflow-hidden shadow-sm hover:shadow-xl hover:shadow-navy/[0.08] transition-shadow cursor-pointer"
              >
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
