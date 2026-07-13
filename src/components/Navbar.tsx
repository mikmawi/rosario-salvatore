"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SITE, waLink } from "@/lib/site";
import logoMark from "../../public/images/logo-mark.png";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#promociones", label: "Promociones" },
  { href: "#opiniones", label: "Opiniones" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Transparent over the hero video, solid once scrolled past it.
  const solid = scrolled || open;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solid ? "bg-ivory/90 backdrop-blur border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 h-[76px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Image src={logoMark} alt="" aria-hidden width={40} height={40} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full" priority />
          <span
            className={`font-serif text-lg tracking-tight transition-colors ${solid ? "text-navy" : "text-ivory"}`}
          >
            Rosario Salvatore
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm hover:text-cyan-dark transition-colors ${solid ? "text-navy-soft" : "text-ivory/90"}`}
            >
              {link.label}
            </a>
          ))}
          <details className="relative">
            <summary
              className={`text-sm hover:text-cyan-dark transition-colors list-none cursor-pointer ${solid ? "text-navy-soft" : "text-ivory/90"}`}
            >
              Horario
            </summary>
            <div className="absolute right-0 mt-3 w-56 rounded-2xl bg-card shadow-xl border border-line p-4 space-y-2">
              {SITE.hours.map((h) => (
                <div key={h.label} className="flex justify-between text-sm text-navy-soft">
                  <span>{h.label}</span>
                  <span>{h.value}</span>
                </div>
              ))}
              <a
                href={`tel:${SITE.phoneIntl}`}
                className="block pt-2 mt-2 border-t border-line text-sm font-medium text-cyan-dark"
              >
                📞 {SITE.phoneDisplay}
              </a>
            </div>
          </details>
          <a
            href={waLink("Hola, quiero reservar una valoración")}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              solid ? "bg-navy text-ivory hover:bg-navy-soft" : "bg-cyan text-navy-strong hover:bg-cyan-dark hover:text-ivory"
            }`}
          >
            Reservar valoración
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
        >
          <span className="sr-only">Menú</span>
          <div className="w-6 flex flex-col gap-1.5">
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              className={`h-[1.5px] w-full origin-center transition-colors ${solid ? "bg-navy" : "bg-ivory"}`}
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className={`h-[1.5px] w-full transition-colors ${solid ? "bg-navy" : "bg-ivory"}`}
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              className={`h-[1.5px] w-full origin-center transition-colors ${solid ? "bg-navy" : "bg-ivory"}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-line bg-ivory"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-navy-soft"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-line space-y-2">
                {SITE.hours.map((h) => (
                  <div key={h.label} className="flex justify-between text-sm text-navy-soft">
                    <span>{h.label}</span>
                    <span>{h.value}</span>
                  </div>
                ))}
              </div>
              <a
                href={waLink("Hola, quiero reservar una valoración")}
                onClick={() => setOpen(false)}
                className="rounded-full bg-navy text-ivory px-5 py-3 text-sm font-medium text-center"
              >
                Reservar valoración
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
