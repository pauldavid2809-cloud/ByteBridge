/**
 * ============================================================
 *  CONFIGURACIÓN DEL SITIO — byte/bridge
 *  Este es el único archivo que necesitas tocar para cambiar
 *  datos de contacto y textos de marca.
 * ============================================================
 */

/**
 * 📱 EDITA AQUÍ tu número de WhatsApp.
 * Formato internacional SIN "+" ni espacios. Ej. Venezuela: "584121234567"
 */
export const WHATSAPP_NUMBER = "584120308674";

/** Mensaje por defecto al abrir WhatsApp desde el sitio */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, vi tu página de byte/bridge y quiero cotizar un proyecto.";

/** URL pública del sitio (cámbiala cuando tengas dominio propio) */
export const SITE_URL = "https://bytebridge.vercel.app";

export const SITE_NAME = "ByteBridge";

/**
 * Construye un enlace de WhatsApp con mensaje prellenado.
 * Se usa en el Hero, en los paquetes de precios y en el botón flotante.
 */
export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
