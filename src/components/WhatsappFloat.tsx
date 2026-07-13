import { waLink } from "@/lib/site";

export default function WhatsappFloat() {
  return (
    <a
      href={waLink("Hola, quiero reservar una valoración")}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-navy/20 flex items-center justify-center animate-[wa-pulse_2.4s_ease-in-out_infinite] motion-reduce:animate-none"
    >
      <svg viewBox="0 0 32 32" fill="#fff" className="w-7 h-7">
        <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.9 6.5L4 29l7.7-1.9c1.8 1 3.9 1.5 6.3 1.5 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22c-2 0-3.9-.5-5.5-1.5l-.4-.2-4.6 1.2 1.2-4.4-.3-.4C5.3 18 4.6 16.5 4.6 15 4.6 9.2 9.8 4 16 4s11.4 5.2 11.4 11-5.2 10-11.4 10zm6-8.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4z" />
      </svg>
    </a>
  );
}
