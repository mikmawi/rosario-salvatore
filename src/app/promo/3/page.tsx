import type { Metadata } from "next";
import PromoLanding from "@/components/PromoLanding";
import { SITE } from "@/lib/site";
import flyer3 from "../../../../public/images/banners/flyer-3.webp";

const TITLE = "Promoción — Rosario Salvatore";
const DESCRIPTION = "Consulta esta promoción y agenda tu cita por WhatsApp.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/promo/3`,
    images: [{ url: "/images/banners/flyer-3.jpg", width: 1024, height: 1536, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/banners/flyer-3.jpg"],
  },
};

export default function Promo3Page() {
  return (
    <PromoLanding
      image={flyer3}
      alt="Promoción publicitaria 3"
      waMessage="Hola, quiero más información sobre esta promoción"
    />
  );
}
