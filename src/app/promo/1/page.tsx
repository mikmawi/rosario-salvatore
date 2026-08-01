import type { Metadata } from "next";
import PromoLanding from "@/components/PromoLanding";
import { SITE } from "@/lib/site";
import flyer1 from "../../../../public/images/banners/flyer-1.webp";

const TITLE = "Promoción — Rosario Salvatore";
const DESCRIPTION = "Consulta esta promoción y agenda tu cita por WhatsApp.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/promo/1`,
    images: [{ url: "/images/banners/flyer-1.jpg", width: 1060, height: 1484, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/banners/flyer-1.jpg"],
  },
};

export default function Promo1Page() {
  return (
    <PromoLanding
      image={flyer1}
      alt="Promoción publicitaria 1"
      waMessage="Hola, quiero más información sobre esta promoción"
    />
  );
}
