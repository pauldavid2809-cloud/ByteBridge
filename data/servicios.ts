/**
 * ============================================================
 *  SERVICIOS Y PRECIOS — Paquetes renovados (desde $100) y bilingües
 * ============================================================
 */

export type PaqueteMultiLang = {
  nombre: { es: string; en: string };
  precio: { es: string; en: string };
  notaPrecio: { es: string; en: string };
  descripcion: { es: string; en: string };
  incluye: { es: string[]; en: string[] };
  destacado?: boolean;
  badge?: { es: string; en: string };
  ctaMensaje: { es: string; en: string };
};

export const paquetesMultiLang: PaqueteMultiLang[] = [
  {
    nombre: {
      es: "Landing Express",
      en: "Landing Express",
    },
    precio: {
      es: "$100–180",
      en: "$100–180",
    },
    notaPrecio: {
      es: "pago único",
      en: "one-time payment",
    },
    descripcion: {
      es: "Una página a medida para presentar tu negocio, captar prospectos y validar ofertas rápido.",
      en: "A sleek custom 1-page site to showcase your business, capture leads, and test offers fast.",
    },
    badge: {
      es: "Ideal para empezar",
      en: "Starter friendly",
    },
    incluye: {
      es: [
        "1 página con diseño a medida",
        "Botón directo a WhatsApp y formulario",
        "Optimizada para teléfonos y computadoras",
        "Entrega rápida en 3 a 5 días",
      ],
      en: [
        "1 custom designed landing page",
        "Direct WhatsApp button & contact form",
        "Optimized for mobile and desktop",
        "Fast 3 to 5 business days delivery",
      ],
    },
    ctaMensaje: {
      es: "Hola, me interesa la Landing Express de $100.",
      en: "Hi! I'm interested in the $100 Landing Express package.",
    },
  },
  {
    nombre: {
      es: "Web Completa",
      en: "Full Website",
    },
    precio: {
      es: "$250–450",
      en: "$250–450",
    },
    notaPrecio: {
      es: "pago único",
      en: "one-time payment",
    },
    descripcion: {
      es: "Tu presencia profesional: quién eres, qué ofreces, catálogo/servicios y contacto directo.",
      en: "Your complete digital presence: identity, services, catalog, and automated lead forms.",
    },
    destacado: true,
    badge: {
      es: "Más elegido",
      en: "Most Popular",
    },
    incluye: {
      es: [
        "4 a 6 páginas o secciones a medida",
        "Formulario de contacto a tu email / Supabase",
        "Optimizada para posicionar en Google (SEO)",
        "Carga instantánea en menos de 1 segundo",
      ],
      en: [
        "4 to 6 custom sections / pages",
        "Contact form routed to your email / Supabase",
        "Google SEO optimization included",
        "Instant load speed under 1 second",
      ],
    },
    ctaMensaje: {
      es: "Hola, me interesa el paquete de Web Completa.",
      en: "Hi! I'm interested in the Full Website package.",
    },
  },
  {
    nombre: {
      es: "Sistema a Medida",
      en: "Custom Web App",
    },
    precio: {
      es: "desde $800",
      en: "from $800",
    },
    notaPrecio: {
      es: "cotización por proyecto",
      en: "custom quote",
    },
    descripcion: {
      es: "Software web para tu operación: portales de usuarios, reservas, inventarios o flujos únicos.",
      en: "Custom web software tailored to your workflow: client portals, booking, CRM, or inventory.",
    },
    badge: {
      es: "Para empresas",
      en: "Enterprise",
    },
    incluye: {
      es: [
        "Login de usuarios y roles con permisos",
        "Base de datos propia y segura",
        "Lógica hecha para la medida de tu negocio",
        "Panel para administrar todo",
      ],
      en: [
        "User auth & role-based permissions",
        "Dedicated secure database setup",
        "Tailored logic for your exact business flow",
        "Intuitive admin control dashboard",
      ],
    },
    ctaMensaje: {
      es: "Hola, quiero cotizar un sistema a medida.",
      en: "Hi! I'd like to get a quote for a custom web app.",
    },
  },
];

export const mantenimientoMultiLang = {
  nombre: {
    es: "Mantenimiento opcional",
    en: "Optional maintenance",
  },
  precio: {
    es: "$25–50/mes",
    en: "$25–50/mo",
  },
  descripcion: {
    es: "Hosting, respaldos de seguridad, cambios de contenido y soporte técnico sin complicaciones.",
    en: "Hosting management, security backups, content changes, and hassle-free technical support.",
  },
  ctaMensaje: {
    es: "Hola, me interesa el plan de mantenimiento mensual.",
    en: "Hi! I'm interested in the monthly maintenance plan.",
  },
};

export const notaPagoMultiLang = {
  es: "50% de adelanto · Pagos en USD (Zelle, Binance, PayPal) o moneda local a tasa del día",
  en: "50% upfront deposit · Payments accepted via USD (Zelle, Binance, PayPal) or local transfer",
};
