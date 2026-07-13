export const SITE = {
  name: "Rosario Salvatore",
  url: "https://www.rosario-salvatore.com",
  phoneDisplay: "095 881 5466",
  phoneIntl: "+593958815466",
  whatsappNumber: "593958815466",
  email: "hola@rosariosalvatore.ec",
  address: {
    street: "Real Audiencia Oe3-152 y de los Ciruelos",
    line2: "Torres Vista Real, Local #1",
    city: "Quito",
  },
  hours: [
    { label: "Lun–Vie", value: "10:00–20:00" },
    { label: "Sábados", value: "08:00–13:00" },
  ],
} as const;

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
