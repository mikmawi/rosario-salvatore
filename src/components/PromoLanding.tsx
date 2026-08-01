import Image, { type StaticImageData } from "next/image";
import { waLink } from "@/lib/site";

export default function PromoLanding({
  image,
  alt,
  waMessage,
}: {
  image: StaticImageData;
  alt: string;
  waMessage: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-[480px] px-6">
        <div className="rounded-[24px] overflow-hidden border border-line shadow-sm">
          <Image
            src={image}
            alt={alt}
            placeholder="blur"
            sizes="(min-width: 640px) 480px, 100vw"
            className="w-full h-auto"
          />
        </div>
        <a
          href={waLink(waMessage)}
          className="mt-6 block text-center rounded-full bg-navy text-ivory px-7 py-3.5 text-sm font-medium hover:bg-navy-soft transition-colors"
        >
          Reservar por WhatsApp
        </a>
      </div>
    </section>
  );
}
