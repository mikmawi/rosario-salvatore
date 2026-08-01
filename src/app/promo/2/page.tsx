import type { Metadata } from "next";
import PromoLanding from "@/components/PromoLanding";
import { SITE } from "@/lib/site";
import flyer2 from "../../../../public/images/banners/flyer-2.webp";

const TITLE = "Promoción — Rosario Salvatore";
const DESCRIPTION = "Consulta esta promoción y agenda tu cita por WhatsApp.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/promo/2`,
    images: [{ url: "/images/banners/flyer-2.jpg", width: 1086, height: 1448, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/banners/flyer-2.jpg"],
  },
};

export default function Promo2Page() {
  return (
    <PromoLanding
      image={flyer2}
      alt="Promoción publicitaria 2"
      waMessage="Hola, quiero más información sobre esta promoción"
    />
  );
}
