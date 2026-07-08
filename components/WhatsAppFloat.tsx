import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/config";

/**
 * Botón flotante de WhatsApp: discreto, esquina inferior derecha,
 * visible en todo el sitio. Solo ícono, con aria-label para lectores
 * de pantalla.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-ink shadow-lg shadow-black/40 transition-transform duration-200 hover:scale-105 hover:bg-accent-strong sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
