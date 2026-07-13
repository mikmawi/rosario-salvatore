import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/Reveal";

const PHOTOS = [
  { file: "atencion-profesional.webp", label: "Atención profesional", alt: "Odontóloga realizando un procedimiento clínico" },
  { file: "diagnostico-compartido.webp", label: "Diagnóstico compartido", alt: "Odontóloga explicando una radiografía a la paciente" },
  { file: "diagnostico-digital.webp", label: "Diagnóstico digital", alt: "Radiografía panorámica dental en pantalla" },
  { file: "procedimiento-clinico.webp", label: "Precisión clínica", alt: "Procedimiento dental en curso" },
  { file: "laboratorio-dental.webp", label: "Laboratorio dental", alt: "Trabajo de laboratorio sobre un modelo dental" },
  { file: "protesis-a-medida.webp", label: "Prótesis a medida", alt: "Modelo de prótesis dental hecha a medida" },
];

export default function Gallery() {
  return (
    <section className="py-24 sm:py-28 bg-ivory-2/60">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <div className="max-w-[56ch] mb-14">
          <span className="mono-label">Nuestro consultorio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">Tecnología y cuidado, en cada rincón.</h2>
          <p className="mt-4 text-text-mut font-light">
            Un vistazo a cómo trabajamos: diagnóstico digital, laboratorio propio
            y un equipo presente en cada procedimiento.
          </p>
        </div>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.06}>
          {PHOTOS.map((photo) => (
            <RevealItem
              key={photo.file}
              className="group relative rounded-[24px] overflow-hidden aspect-[4/5] shadow-sm"
            >
              <Image
                src={`/images/gallery/${photo.file}`}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-strong/70 via-navy-strong/0 to-transparent" />
              <span className="absolute bottom-4 left-4 mono-label !text-ivory">{photo.label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
