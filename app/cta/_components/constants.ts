export const PHONE = "+917737022715";
export const PHONE_DISPLAY = "+91 77370 22715";
export const WHATSAPP = "917737022715";

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${WHATSAPP}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
