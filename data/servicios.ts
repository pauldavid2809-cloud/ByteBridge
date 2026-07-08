/**
 * ============================================================
 *  SERVICIOS Y PRECIOS — ✏️ EDITA AQUÍ paquetes y montos
 *  Cada objeto es una tarjeta de la sección "Servicios".
 *  `ctaMensaje` es el texto prellenado que abre WhatsApp.
 * ============================================================
 */

export type Paquete = {
  nombre: string;
  precio: string;
  /** Texto pequeño bajo el precio (ej. "por proyecto") */
  notaPrecio: string;
  descripcion: string;
  incluye: string[];
  /** true = tarjeta resaltada como "Recomendado" */
  destacado?: boolean;
  /** Mensaje prellenado del botón de WhatsApp de este paquete */
  ctaMensaje: string;
};

export const paquetes: Paquete[] = [
  {
    nombre: "Landing page",
    precio: "$150–300",
    notaPrecio: "pago único",
    descripcion: "Una página a medida para presentar tu negocio y captar clientes.",
    incluye: [
      "1 página con diseño propio",
      "Impecable en teléfono y computadora",
      "Botón de WhatsApp y formulario",
      "Entrega en días, no meses",
    ],
    ctaMensaje: "Hola, me interesa una landing page para mi negocio.",
  },
  {
    nombre: "Web completa",
    precio: "$300–600",
    notaPrecio: "pago único",
    descripcion: "Tu presencia completa: quién eres, qué ofreces y cómo contactarte.",
    incluye: [
      "4 a 6 páginas con diseño propio",
      "Formulario de contacto que llega a tu correo",
      "Optimizada para aparecer en Google",
      "Carga en menos de 1 segundo",
    ],
    destacado: true,
    ctaMensaje: "Hola, me interesa una web completa para mi negocio.",
  },
  {
    nombre: "Sistema a medida",
    precio: "desde $1,000",
    notaPrecio: "cotización por proyecto",
    descripcion: "Software hecho para tu operación: portales, pedidos, reservas, lo que necesites.",
    incluye: [
      "Login y usuarios con permisos",
      "Base de datos propia",
      "Lógica hecha para tu negocio",
      "Panel para administrar todo",
    ],
    ctaMensaje: "Hola, quiero cotizar un sistema a medida para mi negocio.",
  },
];

/** Línea de mantenimiento mensual que aparece debajo de los paquetes */
export const mantenimiento = {
  nombre: "Mantenimiento mensual",
  precio: "$30–80/mes",
  descripcion: "Hosting, cambios de contenido y soporte para que tu web nunca se quede sola.",
  ctaMensaje: "Hola, me interesa el plan de mantenimiento mensual.",
};

/** Nota de condiciones de pago (visible bajo los paquetes) */
export const notaPago = "50% de adelanto · Pago en USD (Zelle, Binance) o Bs a tasa del día";
