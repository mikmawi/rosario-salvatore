import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
// import Promos from "@/components/sections/Promos"; // desactivado: reemplazado por Banners
import Banners from "@/components/sections/Banners";
import Intro from "@/components/sections/Intro";
import Attention from "@/components/sections/Attention";
import Showcase from "@/components/sections/Showcase";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Proceso from "@/components/sections/Proceso";
import Testimonials from "@/components/sections/Testimonials";
import ContactCta from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      {/* <Promos /> desactivado: reemplazado por Banners */}
      <Banners />
      <Intro />
      <Attention />
      <Showcase />
      <Services />
      <Gallery />
      <Proceso />
      <Testimonials />
      <ContactCta />
    </>
  );
}
