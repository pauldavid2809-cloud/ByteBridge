/**
 * Catálogo maestro de datos interactivos para las 10 Demos Comerciales de ByteBridge
 * Diseñado con información real, paletas de colores extraídas y módulos especializados por sector.
 */

export type CurrencyMode = "USD" | "VES";

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  priceUSD: number;
  image?: string;
  badge?: string;
  spicy?: boolean;
  popular?: boolean;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  name: string;
  icon?: string;
  description?: string;
};

export type BookingOption = {
  id: string;
  name: string;
  description: string;
  priceUSD: number;
  unit?: string;
  badge?: string;
  features?: string[];
  maxCapacity?: number;
};

export type BusinessDemo = {
  slug: string;
  batch?: "dia1" | "dia2" | "dia3" | "dia4" | "dia5" | "dia6" | "dia7" | "dia8" | "dia9";
  archetype?: "table-ordering" | "vip-access" | "gourmet-booking" | "direct-delivery" | "gift-customizer" | "item-builder" | "wholesale-catalog" | "match-booking";
  name: string;
  handle: string;
  category: string;
  badgeText: string;
  tagline: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  logo: string;
  coverImage: string;
  palette: {
    primary: string;
    primaryHover: string;
    secondary: string;
    accent: string;
    darkBg: string;
    cardBg: string;
    textLight: string;
    textMuted: string;
    border: string;
    glow: string;
  };
  typography: {
    fontDisplay: string;
    fontBody: string;
  };
  /** Narrative intro paragraph shown between hero and booking */
  introText: string;
  /** 3 highlight stats/facts for the intro section */
  introStats: { label: string; value: string; detail: string }[];
  /** Contextual trust badges (replaces the generic ones) */
  trustBadges: string[];
  /** Tailored WhatsApp pitch copywriting for client outreach */
  whatsappPitchCopy: string;
  address: string;
  mapsUrl: string;
  hours: string;
  phone: string;
  instagramUrl: string;
  bcvRate?: number;
  bookingType: string;
  bookingTitle: string;
  bookingSubtitle: string;
  bookingOptions: BookingOption[];
  categories: MenuCategory[];
  menuItems: MenuItem[];
  managerKpis: {
    activeReservations: number;
    capacityPercentage: number;
    todaySalesUSD: number;
    avgTicketUSD: number;
  };
  sampleBookings: {
    id: string;
    clientName: string;
    details: string;
    time: string;
    status: "confirmada" | "en_mesa" | "pendiente";
    pax: number;
    totalUSD: number;
  }[];
};

export const BCV_RATE = 70.5; // Tasa de cambio referencial Bs / USD

export const businessDemos: BusinessDemo[] = [
  // 🌟 DÍA 6 — 10 Soluciones Comerciales Especializadas
  {
  "slug": "lolapopspaleteria",
  "batch": "dia6",
  "archetype": "item-builder",
  "name": "Lola Pops Paletería",
  "handle": "lolapopspaleteria",
  "category": "Paletería Artesanal & Catering",
  "badgeText": "Paletas 100% Fruta Natural · Barra de Baños & Toppings",
  "tagline": "Paletería artesanal gourmet con estación interactiva de toppings y carritos vintage para eventos en Maracaibo.",
  "heroTitle": "Paletas Artesanales",
  "heroHighlight": "Armadas a tu Gusto",
  "heroSubtitle": "Elige tu paleta de fruta natural o cremosa rellena, personaliza tu baño de chocolate y toppings, o cotiza el carrito paletero para tu fiesta con confirmación directa.",
  "logo": "/marcas/lolapopspaleteria.jpg",
  "coverImage": "/marcas/lolapopspaleteria-cover.jpg",
  "palette": {
    "primary": "#FF3366",
    "primaryHover": "#E02456",
    "secondary": "#FFD166",
    "accent": "#06D6A0",
    "darkBg": "#160A10",
    "cardBg": "#22101A",
    "textLight": "#FFF5F8",
    "textMuted": "#E0A8B8",
    "border": "rgba(255, 51, 102, 0.25)",
    "glow": "rgba(255, 51, 102, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Lola Pops es la paletería artesanal referente de Maracaibo: paletas de fruta 100% natural, rellenas de leche condensada y nutella, con estación de baños de chocolate caliente y toppings crocantes para disfrutar en tienda o en tu evento.",
  "introStats": [
    {
      "label": "Variedad de Sabores",
      "value": "+35 Opciones",
      "detail": "Frutales, rellenas y premium"
    },
    {
      "label": "Eventos Atendidos",
      "value": "+120 Fiestas",
      "detail": "Carritos paleteros móviles"
    },
    {
      "label": "Calidad Artesanal",
      "value": "100% Natural",
      "detail": "Sin conservantes ni esencias"
    }
  ],
  "trustBadges": [
    "Paletas 100% Fruta Natural",
    "Estación de Baños & Toppings",
    "Carritos Paleteros para Bodas & Eventos"
  ],
  "whatsappPitchCopy": "¡Hola equipo de Lola Pops Paletería! 🍦🍓 Admiramos la calidad y frescura de sus paletas artesanales en Maracaibo. Sabemos que cuando los clientes quieren personalizar su paleta con toppings y salsas, o cotizar el carrito paletero para un evento, coordinar todo por chat toma demasiado tiempo.\n\nLes diseñamos una WebApp a medida con un creador interactivo de paletas ('Item Builder': Base + Baño + Toppings) y cotizador de carritos para fiestas con cálculo automático a tasa oficial BCV.\n\nPueden probar la demo interactiva en vivo aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/lolapopspaleteria",
  "address": "Corredor Gastronómico Zona Norte / Bella Vista, Maracaibo, Zulia",
  "mapsUrl": "https://maps.google.com/?q=Lola+Pops+Paleteria+Maracaibo",
  "hours": "Martes a Domingo: 1:00 PM – 10:00 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/lolapopspaleteria/",
  "bcvRate": 64.2,
  "bookingType": "paleta-builder-events",
  "bookingTitle": "Arma tu Paleta & Carrito de Eventos",
  "bookingSubtitle": "Diseña tu combinación de paleta con baño y toppings, o aparta el carrito vintage para tu fiesta",
  "bookingOptions": [
    {
      "id": "lola-combo-4pax",
      "name": "Pack Familiar 4 Paletas + Dips",
      "description": "4 paletas artesanales a elección con 2 vasos de dips de chocolate y 2 toppings crocantes.",
      "priceUSD": 10,
      "unit": "pack",
      "badge": "Más Popular",
      "features": [
        "4 paletas surtidas",
        "2 dips de chocolate tibio",
        "2 toppings crocantes",
        "Empaque isotérmico"
      ]
    },
    {
      "id": "lola-carrito-eventos",
      "name": "Carrito Paletero Vintage (50 Paletas)",
      "description": "Carrito móvil con personal durante 2 horas, 50 paletas surtidas, 3 baños y 4 toppings para armar en vivo.",
      "priceUSD": 95,
      "unit": "evento",
      "badge": "Eventos VIP",
      "features": [
        "50 paletas artesanales",
        "Atención personalizada 2h",
        "3 baños de chocolate",
        "4 toppings variados",
        "Montaje y traslado incluido"
      ]
    },
    {
      "id": "lola-box-degustacion",
      "name": "Degustación Box 8 Mini Pops",
      "description": "Caja de regalo con 8 mini paletas de los sabores insignia de Lola Pops.",
      "priceUSD": 16,
      "unit": "caja",
      "features": [
        "8 mini paletas surtidas",
        "Caja rígida con lazo",
        "Tarjeta dedicatoria"
      ]
    }
  ],
  "categories": [
    {
      "id": "rellenas",
      "name": "Paletas Rellenas"
    },
    {
      "id": "frutales",
      "name": "Fruta Natural"
    },
    {
      "id": "toppings-baños",
      "name": "Baños & Toppings"
    },
    {
      "id": "eventos",
      "name": "Catering & Carritos"
    }
  ],
  "menuItems": [
    {
      "id": "lola-fresa-leche",
      "name": "Paleta Fresa con Leche Condensada",
      "category": "rellenas",
      "description": "Paleta de fresa natural rellena de abundante leche condensada cremosa.",
      "priceUSD": 2.4,
      "badge": "Top Seller",
      "popular": true
    },
    {
      "id": "lola-choco-brownie",
      "name": "Paleta Choco Brownie Supreme",
      "category": "rellenas",
      "description": "Base cremosa de chocolate oscuro rellena con trozos de brownie artesanal y fudge.",
      "priceUSD": 2.8,
      "popular": true
    },
    {
      "id": "lola-cheesecake-oreo",
      "name": "Paleta Cheesecake & Oreo Pop",
      "category": "rellenas",
      "description": "Base cremosa de queso crema con fondo de galleta y trozos de Oreo.",
      "priceUSD": 2.4
    },
    {
      "id": "lola-hersheys-pop",
      "name": "Paleta Hershey's Cookies & Cream",
      "category": "rellenas",
      "description": "Paleta cremosa bañada en chocolate blanco Hershey's y trozos crocantes.",
      "priceUSD": 2.8,
      "badge": "Premium"
    },
    {
      "id": "lola-parchita-citrica",
      "name": "Paleta Cítrica de Parchita Pura",
      "category": "frutales",
      "description": "Pulpas de parchita fresca sin lácteos, ultra refrescante.",
      "priceUSD": 1.8
    },
    {
      "id": "lola-limon-hierbabuena",
      "name": "Paleta Limón con Hierbabuena",
      "category": "frutales",
      "description": "Zumo de limón fresco con toques de hierbabuena natural triturada.",
      "priceUSD": 1.8
    }
  ],
  "managerKpis": {
    "activeReservations": 14,
    "capacityPercentage": 88,
    "todaySalesUSD": 1420,
    "avgTicketUSD": 38
  },
  "sampleBookings": [
    {
      "id": "LOL-01",
      "clientName": "Andrea Colmenares",
      "details": "Orden Personalizada / Pase VIP con QR",
      "time": "12:30 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 45
    },
    {
      "id": "LOL-02",
      "clientName": "Carlos Villasmil",
      "details": "Despacho Programado / Comanda a Cocina",
      "time": "03:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 88
    }
  ]
},

  {
  "slug": "keponke_ve",
  "batch": "dia6",
  "archetype": "gift-customizer",
  "name": "Ke Ponke Pastelería",
  "handle": "keponke.ve",
  "category": "Ponquecitos & Tortas de Regalo",
  "badgeText": "+40 Sabores de Ponquecitos · Cajas con Dedicatoria",
  "tagline": "Repostería boutique especializada en ponquecitos gourmet, tortas de diseño y cajas de regalo sorpresa con entrega programada.",
  "heroTitle": "Ponquecitos Gourmet &",
  "heroHighlight": "Cajas de Regalo",
  "heroSubtitle": "Arma tu Gift Box con los sabores favoritos, escribe tu dedicatoria para la tarjeta y programa la fecha y hora de entrega a domicilio con cálculo en Bs a tasa BCV.",
  "logo": "/marcas/keponke_ve.jpg",
  "coverImage": "/marcas/keponke_ve-cover.jpg",
  "palette": {
    "primary": "#D97706",
    "primaryHover": "#B45309",
    "secondary": "#F472B6",
    "accent": "#FDE047",
    "darkBg": "#17100D",
    "cardBg": "#241814",
    "textLight": "#FFF8F2",
    "textMuted": "#D6B8A2",
    "border": "rgba(217, 119, 6, 0.25)",
    "glow": "rgba(217, 119, 6, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Ke Ponke es la casa de los ponquecitos más queridos de Maracaibo y San Francisco: más de 40 combinaciones de autor, tortas húmedas de tres leches y cajas de regalo con dedicatoria para celebrar momentos especiales.",
  "introStats": [
    {
      "label": "Recetas de Autor",
      "value": "+40 Sabores",
      "detail": "Ponquecitos y tortas artesanales"
    },
    {
      "label": "Regalos Entregados",
      "value": "+5.000 Cajas",
      "detail": "Sorpresas enviadas a domicilio"
    },
    {
      "label": "Puntualidad en Entrega",
      "value": "99.4%",
      "detail": "Despacho por franja horaria"
    }
  ],
  "trustBadges": [
    "Especialistas en Regalos & Sorpresas",
    "Dedicatoria Escrita & Empaque de Lujo",
    "Delivery Programado Mcbo y San Fco"
  ],
  "whatsappPitchCopy": "¡Buenas tardes equipo de Ke Ponke! 🧁🎁 Admiramos su trayectoria y el nivel de detalle de sus ponquecitos y tortas en Maracaibo. Sabemos que vender regalos sorpresa requiere coordinar dedicatorias, sabores y horas exactas de entrega, lo que llena el chat de preguntas repetitivas.\n\nDesarrollamos una WebApp especializada con un configurador de cajas de regalo ('Gift Customizer'), donde el cliente escoge sus sabores, redacta la tarjeta de dedicatoria y agenda la fecha/hora de entrega con tasa BCV automática.\n\nLes comparto la demo interactiva en vivo:\n👉 https://byte-bridge-tau.vercel.app/demos/keponke_ve",
  "address": "Calle 165, Urb. La Coromoto / Cobertura Mcbo & San Francisco, Zulia",
  "mapsUrl": "https://maps.google.com/?q=Ke+Ponke+Maracaibo+La+Coromoto",
  "hours": "Lunes a Sábado: 9:00 AM – 9:00 PM | Domingo: 1:30 PM – 7:00 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/keponke.ve/",
  "bcvRate": 64.2,
  "bookingType": "gift-box-delivery",
  "bookingTitle": "Configura tu Gift Box & Tortas de Regalo",
  "bookingSubtitle": "Elige tu empaque, personaliza sabores y dedicatoria, y programa la fecha exacta de despacho",
  "bookingOptions": [
    {
      "id": "kp-box-6",
      "name": "Gift Box 6 Ponquecitos Gourmet",
      "description": "Caja rígida con 6 ponquecitos a elección, lazo de satén y tarjeta con mensaje personalizado.",
      "priceUSD": 12,
      "unit": "caja",
      "badge": "Más Vendido",
      "features": [
        "6 sabores a elección",
        "Tarjeta con dedicatoria",
        "Empaque de lujo con lazo",
        "Entrega programada"
      ]
    },
    {
      "id": "kp-celebration-pack",
      "name": "Set 'Celebration Deluxe' (Mini Cake + 4 Cupcakes)",
      "description": "Mini torta decorada + 4 ponquecitos surtidos + topper de cumpleaños y globo metalizado.",
      "priceUSD": 26,
      "unit": "combo",
      "badge": "Cumpleaños",
      "features": [
        "Mini Cake 4-6 porciones",
        "4 ponquecitos temáticos",
        "Topper personalizado",
        "Globo con helio"
      ]
    },
    {
      "id": "kp-party-12",
      "name": "Party Box 12 Mini Ponquecitos",
      "description": "Docena de mini ponquecitos decorados para mesas de postres o compartir en oficina.",
      "priceUSD": 15,
      "unit": "docena",
      "features": [
        "12 mini ponquecitos",
        "Hasta 4 sabores surtidos",
        "Caja expositora"
      ]
    }
  ],
  "categories": [
    {
      "id": "cajas-regalo",
      "name": "Cajas de Regalo"
    },
    {
      "id": "tortas-enteras",
      "name": "Tortas Enteras"
    },
    {
      "id": "cheesecakes",
      "name": "Cheesecakes"
    },
    {
      "id": "individuales",
      "name": "Individuales"
    }
  ],
  "menuItems": [
    {
      "id": "kp-victoria-almendras",
      "name": "Torta Victoria de Almendras (1.5 kg)",
      "category": "tortas-enteras",
      "description": "Bizcocho tres leches especial con crema de almendras y almendras tostadas fileteadas.",
      "priceUSD": 22,
      "popular": true
    },
    {
      "id": "kp-maxi-kat",
      "name": "Torta Maxi Kat Ganache (2.5 kg)",
      "category": "tortas-enteras",
      "description": "Bizcocho húmedo de chocolate con trozos de Kit Kat y ganache semi-amargo.",
      "priceUSD": 32,
      "badge": "Favorita"
    },
    {
      "id": "kp-cheesecake-ny",
      "name": "Cheesecake New York Horneado (25 cm)",
      "category": "cheesecakes",
      "description": "Tarta horneada con base crocante y coulis artesanal de fresas frescas.",
      "priceUSD": 24
    },
    {
      "id": "kp-red-velvet",
      "name": "Ponquecito Red Velvet Cream Cheese",
      "category": "individuales",
      "description": "Masa aterciopelada de cacao suave coronada con frosting de queso crema.",
      "priceUSD": 2.2
    },
    {
      "id": "kp-choco-nutella",
      "name": "Ponquecito Nutella Crunch",
      "category": "individuales",
      "description": "Ponquecito húmedo relleno de Nutella pura con topping de avellanas tostadas.",
      "priceUSD": 2.5
    }
  ],
  "managerKpis": {
    "activeReservations": 14,
    "capacityPercentage": 88,
    "todaySalesUSD": 1420,
    "avgTicketUSD": 38
  },
  "sampleBookings": [
    {
      "id": "KEP-01",
      "clientName": "Andrea Colmenares",
      "details": "Orden Personalizada / Pase VIP con QR",
      "time": "12:30 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 45
    },
    {
      "id": "KEP-02",
      "clientName": "Carlos Villasmil",
      "details": "Despacho Programado / Comanda a Cocina",
      "time": "03:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 88
    }
  ]
},

  {
  "slug": "dolcezza_ve",
  "batch": "dia6",
  "archetype": "direct-delivery",
  "name": "Dolcezza Pastelería",
  "handle": "dolcezza_ve",
  "category": "Pastelería Fina & Café",
  "badgeText": "Vitrina Diaria de Porciones · Encargos de Tortas Enteras",
  "tagline": "Pastelería fina europea, porciones húmedas del día y encargo de tortas enteras para celebraciones en Maracaibo.",
  "heroTitle": "Pastelería Fina &",
  "heroHighlight": "Tortas de Autor",
  "heroSubtitle": "Explora la vitrina del día con porciones recién horneadas para delivery inmediato o encarga tu torta entera con anticipación a tasa oficial BCV.",
  "logo": "/marcas/dolcezza_ve.jpg",
  "coverImage": "/marcas/dolcezza_ve-cover.jpg",
  "palette": {
    "primary": "#C026D3",
    "primaryHover": "#A21CAF",
    "secondary": "#F59E0B",
    "accent": "#EC4899",
    "darkBg": "#160A1A",
    "cardBg": "#23112A",
    "textLight": "#FCF5FD",
    "textMuted": "#D8B4E2",
    "border": "rgba(192, 38, 211, 0.25)",
    "glow": "rgba(192, 38, 211, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Dolcezza es el templo de la repostería fina en Maracaibo: marquesas supremas, cheesecakes vascos caramelizados, tartaletas diplomáticas y tortas enteras elaboradas artesanalmente cada mañana con ingredientes premium.",
  "introStats": [
    {
      "label": "Horneado Diario",
      "value": "100% Fresco",
      "detail": "Elaboración artesanal cada mañana"
    },
    {
      "label": "Formatos Disponibles",
      "value": "Enteras & Porciones",
      "detail": "Para antojo o grandes fiestas"
    },
    {
      "label": "Velocidad Delivery",
      "value": "30 - 45 min",
      "detail": "Despacho express refrigerado"
    }
  ],
  "trustBadges": [
    "Pastelería Fina Artesanal",
    "Encargos de Tortas con 24h de Anticipación",
    "Delivery Refrigerado en Toda la Ciudad"
  ],
  "whatsappPitchCopy": "¡Hola equipo de Dolcezza! 🍰☕ Su pastelería y repostería en Maracaibo se destacan por su calidad y presentación impecable. Para evitar que sus clientes esperen minutos en WhatsApp preguntando qué tortas o porciones quedan en vitrina, les construimos una solución a medida.\n\nEs una WebApp de 'Delivery Directo y Encargos' donde el cliente explora la vitrina en tiempo real, elige tortas enteras o porciones, selecciona si es para hoy o para encargo especial, y genera la comanda con tasa BCV automática.\n\nPueden interactuar con su demo aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/dolcezza_ve",
  "address": "Av. Bella Vista con Calle 72, Sector Tierra Negra, Maracaibo, Zulia",
  "mapsUrl": "https://maps.google.com/?q=Dolcezza+Pasteleria+Maracaibo",
  "hours": "Lunes a Domingo: 8:00 AM – 10:00 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/dolcezza_ve/",
  "bcvRate": 64.2,
  "bookingType": "cake-order-delivery",
  "bookingTitle": "Encargos de Tortas & Delivery de Vitrina",
  "bookingSubtitle": "Elige tus porciones del día para entrega express o aparta tu torta entera con fecha programada",
  "bookingOptions": [
    {
      "id": "dl-box-4porciones",
      "name": "Box Degustación 4 Porciones del Día",
      "description": "4 rebanadas surtidas de las tortas más populares de la vitrina en empaque especial para regalo.",
      "priceUSD": 16,
      "unit": "box",
      "badge": "Más Pedido",
      "features": [
        "4 porciones surtidas",
        "Empaque rígido con visor",
        "Cubiertos biodegradables"
      ]
    },
    {
      "id": "dl-torta-marquesa",
      "name": "Marquesa Suprema de Almendras (Entera)",
      "description": "Torta completa (12-14 porciones) con capas de galleta María humedecida, fudge de cacao y almendras tostadas.",
      "priceUSD": 26,
      "unit": "torta",
      "badge": "Especialidad",
      "features": [
        "12-14 porciones",
        "Elaborada con 24h de antelación",
        "Topper o mensaje de cortesía"
      ]
    },
    {
      "id": "dl-cheesecake-vasco",
      "name": "Cheesecake Vasco Caramelizado (Entero)",
      "description": "Tarta horneada a alta temperatura con corazón cremoso y superficie caramelizada.",
      "priceUSD": 28,
      "unit": "torta",
      "features": [
        "10-12 porciones",
        "Textura ultra cremosa",
        "Despacho refrigerado"
      ]
    }
  ],
  "categories": [
    {
      "id": "porciones",
      "name": "Porciones de Vitrina"
    },
    {
      "id": "tortas-completas",
      "name": "Tortas Enteras"
    },
    {
      "id": "tartaletas",
      "name": "Tartaletas & Postres"
    },
    {
      "id": "cafeteria",
      "name": "Café de Especialidad"
    }
  ],
  "menuItems": [
    {
      "id": "dl-marquesa-entera",
      "name": "Torta Marquesa de Chocolate y Almendras",
      "category": "tortas-completas",
      "description": "Capas de galleta María, ganache de cacao y almendras fileteadas tostadas.",
      "priceUSD": 26,
      "badge": "Insignia",
      "popular": true
    },
    {
      "id": "dl-vasco-entero",
      "name": "Cheesecake Vasco Caramelizado",
      "category": "tortas-completas",
      "description": "Textura cremosa horneada a alta temperatura con superficie tostada.",
      "priceUSD": 28,
      "popular": true
    },
    {
      "id": "dl-tres-leches",
      "name": "Torta Tres Leches Tradicional con Merengue",
      "category": "tortas-completas",
      "description": "Bizcocho esponjoso bañado en tres leches con merengue suizo tostado.",
      "priceUSD": 20
    },
    {
      "id": "dl-porcion-matilda",
      "name": "Porción Torta Matilda de Chocolate",
      "category": "porciones",
      "description": "Triple capa de bizcocho húmedo de cacao con relleno y cubierta de fudge.",
      "priceUSD": 4.5
    },
    {
      "id": "dl-tartaleta-frutos",
      "name": "Tartaleta de Frutos Rojos Diplomática",
      "category": "tartaletas",
      "description": "Masa quebrada crocante con crema pastelera aromatizada y frutos rojos frescos.",
      "priceUSD": 4
    },
    {
      "id": "dl-cappuccino-vainilla",
      "name": "Cappuccino Italiano con Vainilla Francesa",
      "category": "cafeteria",
      "description": "Espresso doble con leche texturizada y esencia de vainilla natural.",
      "priceUSD": 3.2
    }
  ],
  "managerKpis": {
    "activeReservations": 14,
    "capacityPercentage": 88,
    "todaySalesUSD": 1420,
    "avgTicketUSD": 38
  },
  "sampleBookings": [
    {
      "id": "DOL-01",
      "clientName": "Andrea Colmenares",
      "details": "Orden Personalizada / Pase VIP con QR",
      "time": "12:30 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 45
    },
    {
      "id": "DOL-02",
      "clientName": "Carlos Villasmil",
      "details": "Despacho Programado / Comanda a Cocina",
      "time": "03:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 88
    }
  ]
},

  {
  "slug": "tostaca_ve",
  "batch": "dia6",
  "archetype": "wholesale-catalog",
  "name": "Tostaca Snacks",
  "handle": "tostaca_",
  "category": "Snacks Zulianos & Mayorista",
  "badgeText": "Platanitos 100% Zulianos · Venta Minorista y Mayorista",
  "tagline": "Empresa procesadora de platanitos, tostones y snacks fritos con catálogo B2B de bultos y combos familiares en el Zulia.",
  "heroTitle": "Platanitos Crocantes &",
  "heroHighlight": "Venta al Mayor",
  "heroSubtitle": "Ordena combos familiares para tu hogar o pide bultos por mayor para bodegones, licorerías y supermercados con descuentos por volumen y tasa BCV oficial.",
  "logo": "/marcas/tostaca_ve.jpg",
  "coverImage": "/marcas/tostaca_ve-cover.jpg",
  "palette": {
    "primary": "#F59E0B",
    "primaryHover": "#D97706",
    "secondary": "#1E3A8A",
    "accent": "#10B981",
    "darkBg": "#0C1222",
    "cardBg": "#141E36",
    "textLight": "#F8FAFC",
    "textMuted": "#94A3B8",
    "border": "rgba(245, 158, 11, 0.25)",
    "glow": "rgba(245, 158, 11, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Tostaca es la marca de snacks de plátano verde y maduro predilecta del Zulia: platanitos extra crocantes, tostones con ajo y empaques metalizados para el hogar y abastecimiento mayorista de más de 350 comercios aliados.",
  "introStats": [
    {
      "label": "Producción Diaria",
      "value": "+10.000 Bolsas",
      "detail": "Plátano 100% del Sur del Lago"
    },
    {
      "label": "Red de Comercios",
      "value": "+350 Aliados",
      "detail": "Bodegones, abastos y licorerías"
    },
    {
      "label": "Descuento Mayor",
      "value": "Hasta -20%",
      "detail": "Escala por volumen de 5+ bultos"
    }
  ],
  "trustBadges": [
    "Snacks 100% Plátano Natural",
    "Precios Mayoristas Escalonados para Comercios",
    "Despacho Rápido en Todo el Zulia"
  ],
  "whatsappPitchCopy": "¡Buenas tardes equipo de Tostaca! 🍌📦 Su línea de platanitos y snacks de plátano en el Zulia tiene un volumen y una preferencia enorme en el mercado. Para hacer que la reposición de mercancía de sus clientes mayoristas (bodegones, abastos y licorerías) sea 100% automática, les creamos esta herramienta digital.\n\nEs una WebApp con 'Catálogo Mayorista Interactivo' donde los comercios eligen sus cajas o bultos, ven su descuento por volumen en tiempo real y envían su orden con datos fiscales listos a tasa BCV oficial.\n\nPueden ver la demo en vivo aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/tostaca_ve",
  "address": "Zona Industrial / Distribución en Maracaibo y Cabimas, Zulia",
  "mapsUrl": "https://maps.google.com/?q=Tostaca+Snacks+Maracaibo",
  "hours": "Lunes a Viernes: 7:30 AM – 5:30 PM | Sábados: 8:00 AM – 2:00 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/tostaca_/",
  "bcvRate": 64.2,
  "bookingType": "wholesale-order",
  "bookingTitle": "Cotizador Mayorista & Pedidos de Bultos",
  "bookingSubtitle": "Selecciona la cantidad de bultos, aplica descuento automático por volumen y genera tu factura proforma",
  "bookingOptions": [
    {
      "id": "tc-combo-bodegon",
      "name": "Combo Bodegón (3 Bultos = 120 Unid)",
      "description": "1 bulto Salado + 1 Maduro + 1 Ajo con descuento de distribuidor y afiche exhibidor.",
      "priceUSD": 52,
      "unit": "paquete B2B",
      "badge": "Más Rentable",
      "features": [
        "120 paquetes de 50g",
        "Margen comercial 40%+",
        "Exhibidor POP incluido",
        "Despacho prioritario"
      ]
    },
    {
      "id": "tc-fardo-familiar",
      "name": "Pack Familiar Tostaca (6 Bolsas de 150g)",
      "description": "6 bolsas grandes para compartir en reuniones familiares o parrilladas.",
      "priceUSD": 8,
      "unit": "pack",
      "features": [
        "6 bolsas de 150g",
        "Salados y sabor ajo",
        "Ahorro del 15% vs unidad"
      ]
    },
    {
      "id": "tc-granel-restaurante",
      "name": "Bolsa Institucional a Granel (2.5 kg)",
      "description": "Platanitos crocantes a granel para hamburgueserías, restaurantes y catering.",
      "priceUSD": 14,
      "unit": "saco 2.5kg",
      "features": [
        "2.5 kg netos",
        "Corte uniforme para platos",
        "Empaque hermético"
      ]
    }
  ],
  "categories": [
    {
      "id": "bultos-b2b",
      "name": "Bultos Mayoristas B2B"
    },
    {
      "id": "combos-retail",
      "name": "Combos Familiares"
    },
    {
      "id": "granel",
      "name": "Línea Restaurantes"
    }
  ],
  "menuItems": [
    {
      "id": "tc-bulto-salado",
      "name": "Bulto Platanitos Salados (40 unid x 50g)",
      "category": "bultos-b2b",
      "description": "Caja sellada con 40 bolsas de platanitos verdes tradicionales con sal marina.",
      "priceUSD": 18,
      "badge": "Líder de Ventas",
      "popular": true
    },
    {
      "id": "tc-bulto-maduro",
      "name": "Bulto Plátano Maduro Ondulado (40 unid x 50g)",
      "category": "bultos-b2b",
      "description": "Caja con 40 bolsas de tajadas finas onduladas de plátano maduro.",
      "priceUSD": 19.5,
      "popular": true
    },
    {
      "id": "tc-bulto-ajo",
      "name": "Bulto Tostones al Ajo (20 unid x 150g)",
      "category": "bultos-b2b",
      "description": "Formato mediano con sazón especial de ajo y hierbas aromáticas.",
      "priceUSD": 22
    },
    {
      "id": "tc-display-picante",
      "name": "Display Mini Picante (50 unid x 35g)",
      "category": "bultos-b2b",
      "description": "Formato de mostrador para licorerías y kioscos con toque de ají chirel.",
      "priceUSD": 16.5
    },
    {
      "id": "tc-combo-snack-party",
      "name": "Combo Snack Party Tostaca (12 Bolsas)",
      "category": "combos-retail",
      "description": "Mix de 12 bolsas surtidas (Salado, Maduro, Ajo, Picante) para el fin de semana.",
      "priceUSD": 12
    }
  ],
  "managerKpis": {
    "activeReservations": 14,
    "capacityPercentage": 88,
    "todaySalesUSD": 1420,
    "avgTicketUSD": 38
  },
  "sampleBookings": [
    {
      "id": "TOS-01",
      "clientName": "Andrea Colmenares",
      "details": "Orden Personalizada / Pase VIP con QR",
      "time": "12:30 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 45
    },
    {
      "id": "TOS-02",
      "clientName": "Carlos Villasmil",
      "details": "Despacho Programado / Comanda a Cocina",
      "time": "03:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 88
    }
  ]
},

  {
  "slug": "elvarfoodandcoffee",
  "batch": "dia6",
  "archetype": "match-booking",
  "name": "El VAR Food & Coffee",
  "handle": "elvarfoodandcoffee",
  "category": "Gastrobar Temático de Fútbol & Café",
  "badgeText": "Pantallas Gigantes · Champions & Clásicos · Auto-Pedido QR",
  "tagline": "Gastrobar temático deportivo con transmisión de los mejores partidos en pantallas gigantes, smash burgers y cerveza helada.",
  "heroTitle": "Vive el Fútbol con",
  "heroHighlight": "Reserva de Mesa & QR",
  "heroSubtitle": "Asegura tu mesa frente a la pantalla gigante para el próximo partido de Champions o Clásico y pide tus rondas de cerveza y burgers por QR sin esperar salonero.",
  "logo": "/marcas/elvarfoodandcoffee.jpg",
  "coverImage": "/marcas/elvarfoodandcoffee-cover.jpg",
  "palette": {
    "primary": "#16A34A",
    "primaryHover": "#15803D",
    "secondary": "#FACC15",
    "accent": "#2563EB",
    "darkBg": "#0B140D",
    "cardBg": "#122216",
    "textLight": "#F0FDF4",
    "textMuted": "#86EFAC",
    "border": "rgba(22, 163, 74, 0.25)",
    "glow": "rgba(22, 163, 74, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "El VAR es el gastrobar temático de referencia futbolera en Maracaibo: 8 pantallas Ultra HD, sonido de estadio, smash burgers monumentales, alitas BBQ y auto-pedido digital para no perderte ni un segundo de la jugada.",
  "introStats": [
    {
      "label": "Pantallas Ultra HD",
      "value": "8 Pantallas + Proyector",
      "detail": "Visión panorámica inmersiva"
    },
    {
      "label": "Ambiente Deportivo",
      "value": "100% Estadio",
      "detail": "Champions, La Liga y Conmebol"
    },
    {
      "label": "Velocidad de Ronda",
      "value": "< 10 min",
      "detail": "Comanda directa por QR en mesa"
    }
  ],
  "trustBadges": [
    "Transmisión en Vivo de Todo el Fútbol",
    "Reserva Garantizada Frente a Pantalla",
    "Auto-Pedido en Mesa con Código QR"
  ],
  "whatsappPitchCopy": "¡Buenas tardes equipo de El VAR Food & Coffee! ⚽🍔 Su propuesta temática deportiva en Maracaibo es el mejor punto de encuentro para vivir el fútbol. Sabemos que en partidos clave el salón se llena y los saloneros no dan abasto para atender mesas y traer rondas de cervezas a tiempo.\n\nLes diseñamos una WebApp especializada que incluye: reserva de mesa seleccionando el partido del día y un sistema de auto-pedido por código QR en mesa, para que los fanáticos pidan comida y tragos sin esperar al salonero, todo a tasa oficial BCV.\n\nPueden probar la experiencia interactiva en vivo aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/elvarfoodandcoffee",
  "address": "Sector Tierra Negra, Calle 72 con Av. 10, Maracaibo, Zulia",
  "mapsUrl": "https://maps.google.com/?q=El+VAR+Food+Coffee+Maracaibo",
  "hours": "Martes a Domingo: 11:30 AM – 12:00 AM (Días de partido desde 10:00 AM)",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/elvarfoodandcoffee/",
  "bcvRate": 64.2,
  "bookingType": "match-table-booking",
  "bookingTitle": "Reserva de Mesas por Partido & Pases VIP",
  "bookingSubtitle": "Selecciona el partido en cartelera, aparta tu mesa con visión frontal y asegura tu consumo",
  "bookingOptions": [
    {
      "id": "var-mesa-champions",
      "name": "Mesa VIP Champions League (4 Personas)",
      "description": "Mesa con vista directa al proyector principal + balde de 6 cervezas heladas + nachos mixtos.",
      "priceUSD": 25,
      "unit": "mesa/partido",
      "badge": "Día de Partido",
      "features": [
        "Visión frontal a proyector HD",
        "Balde 6 cervezas Polar",
        "Nachos supremos con queso y carne",
        "Atención prioritaria por QR"
      ]
    },
    {
      "id": "var-mesa-clasico",
      "name": "Box Grupal 'El Clásico' (6-8 Personas)",
      "description": "Salón lounge con audio dedicado + 2 baldes de cerveza + parrilla mixta para compartir.",
      "priceUSD": 50,
      "unit": "box grupal",
      "badge": "Eventos Especiales",
      "features": [
        "Espacio reservado 8 personas",
        "12 cervezas frías",
        "Parrilla mar y tierra grande",
        "Sin cola al ingreso"
      ]
    },
    {
      "id": "var-reserva-individual",
      "name": "Pase Barra Deportiva (1 Persona)",
      "description": "Asiento en barra frente a pantallas de alta definición 100% acreditable a consumo.",
      "priceUSD": 5,
      "unit": "persona",
      "features": [
        "Asiento asegurado en barra",
        "100% consumible en carta",
        "Enchufe y carga para celular"
      ]
    }
  ],
  "categories": [
    {
      "id": "smash-burgers",
      "name": "Smash Burgers"
    },
    {
      "id": "alitas-snacks",
      "name": "Alitas & Entradas"
    },
    {
      "id": "parrillas",
      "name": "Parrillas de Estadio"
    },
    {
      "id": "cervezas-tragos",
      "name": "Cervezas & Cócteles"
    }
  ],
  "menuItems": [
    {
      "id": "var-burger-fuera-lugar",
      "name": "Burger 'Fuera de Lugar' Doble Smash",
      "category": "smash-burgers",
      "description": "Doble carne angus 160g, doble cheddar, tocineta crocante y salsa VAR en pan brioche.",
      "priceUSD": 9.5,
      "badge": "Goleadora",
      "popular": true
    },
    {
      "id": "var-alitas-penal",
      "name": "Alitas 'Penal Máximo' (12 unid)",
      "category": "alitas-snacks",
      "description": "Alitas crujientes bañadas en salsa BBQ ahumada o búfalo picante con papas rústicas.",
      "priceUSD": 11,
      "popular": true
    },
    {
      "id": "var-parrilla-clasico",
      "name": "Parrilla Mixta 'El Clásico' (2 Personas)",
      "category": "parrillas",
      "description": "Punta trasera a la brasa, pechuga marinada, chorizo parrillero, tostones y queso de mano.",
      "priceUSD": 18.5
    },
    {
      "id": "var-balde-polar",
      "name": "Balde Cervecero Polar (6 unid)",
      "category": "cervezas-tragos",
      "description": "Balde metálico con hielo y 6 tercios de Polar Pilsen o Light extra fríos.",
      "priceUSD": 10,
      "popular": true
    },
    {
      "id": "var-coctel-review",
      "name": "Cóctel de Autor 'VAR Review'",
      "category": "cervezas-tragos",
      "description": "Gin macerado en frutos rojos, tónica premium, romero e infusión cítrica.",
      "priceUSD": 6.5
    }
  ],
  "managerKpis": {
    "activeReservations": 14,
    "capacityPercentage": 88,
    "todaySalesUSD": 1420,
    "avgTicketUSD": 38
  },
  "sampleBookings": [
    {
      "id": "ELV-01",
      "clientName": "Andrea Colmenares",
      "details": "Orden Personalizada / Pase VIP con QR",
      "time": "12:30 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 45
    },
    {
      "id": "ELV-02",
      "clientName": "Carlos Villasmil",
      "details": "Despacho Programado / Comanda a Cocina",
      "time": "03:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 88
    }
  ]
},

  {
  "slug": "sweetgiftve",
  "batch": "dia6",
  "archetype": "gift-customizer",
  "name": "Sweet Gift",
  "handle": "sweetgiftve",
  "category": "Regalos, Choco-Fresas & Detalles",
  "badgeText": "Fresas con Chocolate de Autor · Dedicatoria & Globos",
  "tagline": "Boutique de fresas cubiertas de chocolate gourmet, ramos de rosas, cajas sorpresa y desayunos personalizados en Maracaibo.",
  "heroTitle": "Regalos Inolvidables &",
  "heroHighlight": "Fresas de Autor",
  "heroSubtitle": "Diseña tu arreglo con dedicatoria para la tarjeta, añade globos con helio y agenda la fecha y hora exacta de entrega con pago en bolívares o divisas.",
  "logo": "/marcas/sweetgiftve.jpg",
  "coverImage": "/marcas/sweetgiftve-cover.jpg",
  "palette": {
    "primary": "#E11D48",
    "primaryHover": "#BE123C",
    "secondary": "#EC4899",
    "accent": "#FBBF24",
    "darkBg": "#160A10",
    "cardBg": "#24101A",
    "textLight": "#FFF5F8",
    "textMuted": "#DCA4B8",
    "border": "rgba(225, 29, 72, 0.25)",
    "glow": "rgba(225, 29, 72, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Sweet Gift transforma ocasiones especiales en recuerdos imborrables: fresas seleccionadas bañadas en chocolate fino con líneas doradas, ramos de rosas de exportación y cajas sorpresa con dedicatoria entregadas puntualmente en Maracaibo y San Francisco.",
  "introStats": [
    {
      "label": "Personalización",
      "value": "100% a Medida",
      "detail": "Dedicatoria, toppings y fecha exacta"
    },
    {
      "label": "Cobertura Delivery",
      "value": "Mcbo & San Fco",
      "detail": "Entregas por franjas horarias"
    },
    {
      "label": "Pagos Globales",
      "value": "Zelle & BCV",
      "detail": "Envíos directos desde el exterior"
    }
  ],
  "trustBadges": [
    "Fresas Frescas & Chocolate Fino",
    "Programación de Fecha & Hora Exacta",
    "Pagos Multimoneda (Zelle, PayPal, Pago Móvil)"
  ],
  "whatsappPitchCopy": "¡Hola equipo de Sweet Gift! 🍓🎈 Estuvimos viendo sus increíbles arreglos de fresas con chocolate y ramos en Maracaibo y San Francisco. Para que sus clientes (tanto locales como los que están en el exterior) puedan armar su arreglo a medida, escribir la dedicatoria, elegir globos y agendar fecha/hora de despacho exacta sin tener que esperar por chat, les creamos esta WebApp con personalizador interactivo y tasa BCV automática.\n\nPueden probar la demo interactiva aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/sweetgiftve",
  "address": "San Francisco & Cobertura Integral en Maracaibo, Zulia",
  "mapsUrl": "https://maps.google.com/?q=Sweet+Gift+Maracaibo+San+Francisco",
  "hours": "Lunes a Sábado: 8:00 AM – 7:00 PM | Domingos: 8:30 AM – 2:00 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/sweetgiftve/",
  "bcvRate": 64.2,
  "bookingType": "custom-gift-delivery",
  "bookingTitle": "Personaliza tu Arreglo Sorpresa & Fecha",
  "bookingSubtitle": "Elige tu modelo de arreglo, escribe la dedicatoria para la tarjeta y programa la entrega a domicilio",
  "bookingOptions": [
    {
      "id": "sg-box-chocofresas",
      "name": "Box Sweet Choco-Fresas (12 unid)",
      "description": "Caja rígida de lujo con 12 fresas bañadas en chocolate con líneas doradas y toppings finos.",
      "priceUSD": 18,
      "unit": "caja",
      "badge": "Más Vendido",
      "features": [
        "12 fresas premium seleccionadas",
        "Toppings de almendra y coco",
        "Lazo de satén con tarjeta",
        "Entrega programada"
      ]
    },
    {
      "id": "sg-bouquet-rosas",
      "name": "Bouquet Rosas & Fresas Glam",
      "description": "Cono floral con 12 rosas rojas de exportación + 8 fresas decoradas con chocolate.",
      "priceUSD": 32,
      "unit": "ramo",
      "badge": "Romántico",
      "features": [
        "12 rosas rojas frescas",
        "8 choco-fresas de autor",
        "Follaje y lazo de lujo",
        "Dedicatoria caligrafiada"
      ]
    },
    {
      "id": "sg-desayuno-sorpresa",
      "name": "Sweet Box Desayuno VIP",
      "description": "Caja decorada con taza personalizada, mini cake, sándwich gourmet, jugo natural y globo.",
      "priceUSD": 42,
      "unit": "set desayuno",
      "features": [
        "Desayuno artesanal completo",
        "Taza personalizada",
        "Globo con helio incluido",
        "Despacho matutino 8-10 AM"
      ]
    }
  ],
  "categories": [
    {
      "id": "cajas-fresas",
      "name": "Cajas de Fresas"
    },
    {
      "id": "bouquets-flores",
      "name": "Ramos & Bouquets"
    },
    {
      "id": "desayunos",
      "name": "Desayunos Sorpresa"
    },
    {
      "id": "complementos",
      "name": "Globos & Licor"
    }
  ],
  "menuItems": [
    {
      "id": "sg-torre-imperial",
      "name": "Torre Imperial Sweet Gift (Lujo)",
      "category": "cajas-fresas",
      "description": "Arreglo cilíndrico de 20 fresas marmoleadas, Ferrero Rocher y mini espumante J.P. Chenet.",
      "priceUSD": 55,
      "badge": "VIP",
      "popular": true
    },
    {
      "id": "sg-heart-box",
      "name": "Heart Box Love Edition",
      "category": "cajas-fresas",
      "description": "Caja acorazonada con 15 fresas temáticas y tarjeta con código Spotify.",
      "priceUSD": 28,
      "popular": true
    },
    {
      "id": "sg-globo-burbuja",
      "name": "Add-on Globo Burbuja con Helio & Texto",
      "category": "complementos",
      "description": "Globo cristal inflado con helio y dedicatoria en vinil dorado.",
      "priceUSD": 8
    },
    {
      "id": "sg-box-6fresas",
      "name": "Mini Box 6 Choco-Fresas Detalle",
      "category": "cajas-fresas",
      "description": "Seis fresas gourmet con chocolate belga y perlas comestibles.",
      "priceUSD": 10
    }
  ],
  "managerKpis": {
    "activeReservations": 14,
    "capacityPercentage": 88,
    "todaySalesUSD": 1420,
    "avgTicketUSD": 38
  },
  "sampleBookings": [
    {
      "id": "SWE-01",
      "clientName": "Andrea Colmenares",
      "details": "Orden Personalizada / Pase VIP con QR",
      "time": "12:30 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 45
    },
    {
      "id": "SWE-02",
      "clientName": "Carlos Villasmil",
      "details": "Despacho Programado / Comanda a Cocina",
      "time": "03:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 88
    }
  ]
},

  {
  "slug": "olis_burger",
  "batch": "dia6",
  "archetype": "table-ordering",
  "name": "Oli's Burger",
  "handle": "olis_burger",
  "category": "Smash Burgers & Street Food",
  "badgeText": "100% Costra Maillard · Auto-Pedido QR · Delivery 0% Comisión",
  "tagline": "Smash burgers artesanales con técnica de sellado a alta temperatura, pan brioche tostado y comanda digital en Maracaibo.",
  "heroTitle": "Smash Burgers Reales con",
  "heroHighlight": "Auto-Pedido en Mesa",
  "heroSubtitle": "Ordena tus smash burgers desde la mesa con código QR sin esperar meseros o pide delivery directo a WhatsApp con tasa oficial BCV.",
  "logo": "/marcas/olis_burger.jpg",
  "coverImage": "/marcas/olis_burger-cover.jpg",
  "palette": {
    "primary": "#EA580C",
    "primaryHover": "#C2410C",
    "secondary": "#FBBF24",
    "accent": "#DC2626",
    "darkBg": "#160C06",
    "cardBg": "#24150D",
    "textLight": "#FFF7ED",
    "textMuted": "#DCA785",
    "border": "rgba(234, 88, 12, 0.25)",
    "glow": "rgba(234, 88, 12, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Oli's Burger lleva el arte de la smash burger a otro nivel en Maracaibo: carne 100% fresca aplastada en plancha hirviendo para lograr la costra crujiente perfecta, queso cheddar derretido y salsas exclusivas de la casa.",
  "introStats": [
    {
      "label": "Técnica Smash",
      "value": "100% Maillard",
      "detail": "Costra crujiente y jugo sellado"
    },
    {
      "label": "Tiempo en Mesa",
      "value": "< 12 Min",
      "detail": "Comanda QR directa a cocina"
    },
    {
      "label": "Delivery Propio",
      "value": "0% Comisión",
      "detail": "Precios directos sin intermediarios"
    }
  ],
  "trustBadges": [
    "Carne 100% Res Fresca Smash",
    "Auto-Pedido en Mesa con Código QR",
    "Delivery Directo a Tasa Oficial BCV"
  ],
  "whatsappPitchCopy": "¡Buenas tardes equipo de Oli's Burger! 🍔🔥 Las smash burgers de ustedes tienen una pinta brutal y mueven una comunidad genial en Maracaibo. Para ayudarlos a agilizar el servicio en salón durante las horas pico y que sus clientes puedan ordenar desde la mesa por QR o pedir delivery directo sin pagar 25% de comisiones a terceros, les desarrollamos esta WebApp con menú interactivo y tasa BCV al día.\n\nPueden ver la demo en vivo y el Reel de 15s aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/olis_burger",
  "address": "Zona Gastronómica Bella Vista / Calle 72, Maracaibo, Zulia",
  "mapsUrl": "https://maps.google.com/?q=Olis+Burger+Maracaibo",
  "hours": "Martes a Domingo: 5:30 PM – 11:30 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/olis_burger/",
  "bcvRate": 64.2,
  "bookingType": "table-smash-order",
  "bookingTitle": "Auto-Pedido en Mesa & Delivery Directo",
  "bookingSubtitle": "Escanea y pide directo a cocina en salón o despacha a tu domicilio sin recargos",
  "bookingOptions": [
    {
      "id": "oli-combo-box",
      "name": "Combo Oli's Classic Box",
      "description": "Doble smash burger + papas rústicas sazonadas + refresco o té helado.",
      "priceUSD": 10.5,
      "unit": "combo",
      "badge": "Más Popular",
      "features": [
        "Doble carne smash 180g",
        "Papas sazonadas crujientes",
        "Bebida a elección",
        "Salsa Oli's extra"
      ]
    },
    {
      "id": "oli-truffle-experience",
      "name": "Combo Triple Smash Trufada",
      "description": "Triple carne smash ultra fina + emulsión de trufa negra + loaded fries.",
      "priceUSD": 14,
      "unit": "combo gourmet",
      "badge": "Especial Chef",
      "features": [
        "Triple carne smash 270g",
        "Mayo de trufa negra",
        "Papas bañadas en cheddar y tocineta"
      ]
    },
    {
      "id": "oli-duo-friends",
      "name": "Dúo Smash + Loaded Fries",
      "description": "2 hamburguesas clásicas + porción grande de papas cargadas para compartir.",
      "priceUSD": 19,
      "unit": "dúo",
      "features": [
        "2 burgers dobles",
        "Loaded fries con queso y tocineta",
        "2 bebidas"
      ]
    }
  ],
  "categories": [
    {
      "id": "smash-burgers",
      "name": "Smash Burgers"
    },
    {
      "id": "sides",
      "name": "Papas & Entradas"
    },
    {
      "id": "chicken",
      "name": "Crispy Chicken"
    },
    {
      "id": "bebidas",
      "name": "Bebidas & Malteadas"
    }
  ],
  "menuItems": [
    {
      "id": "oli-classic-smash",
      "name": "Oli's Classic Smash (Doble Carne)",
      "category": "smash-burgers",
      "description": "Dos carnes smash 180g con costra crocante, doble cheddar, pepinillos y salsa especial en brioche.",
      "priceUSD": 7.5,
      "badge": "Insignia",
      "popular": true
    },
    {
      "id": "oli-bacon-jam",
      "name": "Bacon Jam Smash Burger",
      "category": "smash-burgers",
      "description": "Doble carne, mermelada casera de tocineta ahumada, queso gouda y tocineta crujiente.",
      "priceUSD": 9,
      "popular": true
    },
    {
      "id": "oli-triple-trufada",
      "name": "Triple Smash Trufada",
      "category": "smash-burgers",
      "description": "Tres carnes smash, triple cheddar, cebolla caramelizada y emulsión de trufa negra.",
      "priceUSD": 11
    },
    {
      "id": "oli-loaded-fries",
      "name": "Loaded Smash Fries",
      "category": "sides",
      "description": "Papas crujientes bañadas en cheddar fundido, carne smash picada y tocineta.",
      "priceUSD": 6.5,
      "popular": true
    },
    {
      "id": "oli-crispy-chicken",
      "name": "Crispy Chicken Oli's",
      "category": "chicken",
      "description": "Pechuga extra crujiente con ensalada coleslaw, pepinillos y alioli de ajo asado.",
      "priceUSD": 8.5
    }
  ],
  "managerKpis": {
    "activeReservations": 14,
    "capacityPercentage": 88,
    "todaySalesUSD": 1420,
    "avgTicketUSD": 38
  },
  "sampleBookings": [
    {
      "id": "OLI-01",
      "clientName": "Andrea Colmenares",
      "details": "Orden Personalizada / Pase VIP con QR",
      "time": "12:30 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 45
    },
    {
      "id": "OLI-02",
      "clientName": "Carlos Villasmil",
      "details": "Despacho Programado / Comanda a Cocina",
      "time": "03:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 88
    }
  ]
},

  {
  "slug": "pokemolokai",
  "batch": "dia6",
  "archetype": "item-builder",
  "name": "Poke Molokai",
  "handle": "pokemolokai",
  "category": "Poke Bar Hawaiano & Healthy Food",
  "badgeText": "Pescados Grado Sushi · Constructor Interactivo 'Arma tu Poke'",
  "tagline": "Bar hawaiano de poke bowls y burritos saludables con ingredientes frescos y constructor paso a paso.",
  "heroTitle": "Poke Bowls Hawaianos",
  "heroHighlight": "Armados por Pasos",
  "heroSubtitle": "Crea tu bowl a medida eligiendo base, proteínas de grado sushi, mix-ins frescos, salsas de autor y crunchies, o pide los bowls insignia de la casa.",
  "logo": "/marcas/pokemolokai.jpg",
  "coverImage": "/marcas/pokemolokai-cover.jpg",
  "palette": {
    "primary": "#0D9488",
    "primaryHover": "#0F766E",
    "secondary": "#FB923C",
    "accent": "#84CC16",
    "darkBg": "#081615",
    "cardBg": "#112624",
    "textLight": "#F0FDFA",
    "textMuted": "#99F6E4",
    "border": "rgba(13, 148, 136, 0.25)",
    "glow": "rgba(13, 148, 136, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Poke Molokai trae la auténtica vibra hawaiana y comida saludable a Venezuela: salmón noruego fresco, atún rojo marinado, aguacate cremoso y salsas ponzu de la casa en bowls nutritivos y balanceados.",
  "introStats": [
    {
      "label": "Pescado Fresco",
      "value": "Salmón & Atún",
      "detail": "Procesado a diario con corte sushi"
    },
    {
      "label": "Combinaciones",
      "value": "+500 Opciones",
      "detail": "Constructor interactivo paso a paso"
    },
    {
      "label": "Comida Sana",
      "value": "100% Balanceada",
      "detail": "Proteína limpia y vegetales frescos"
    }
  ],
  "trustBadges": [
    "Pescados Frescos de Grado Sushi",
    "Constructor Interactivo 'Arma tu Poke'",
    "Delivery Rápido en Empaque Térmico"
  ],
  "whatsappPitchCopy": "¡Hola equipo de Poke Molokai! 🥗🥢 Sus bowls y burritos hawaianos son referentes de frescura y sabor en Venezuela. Para que sus clientes armen su Poke a medida paso a paso (base, proteínas, salsas y crunchies) de forma 100% interactiva y sin enredos de mensajes por chat, les diseñamos este 'Item-Builder' a medida con tasa BCV automática.\n\nPueden interactuar con la demo en vivo aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/pokemolokai",
  "address": "Food Hall / Sedes Principales & Cobertura Delivery, Venezuela",
  "mapsUrl": "https://maps.google.com/?q=Poke+Molokai+Venezuela",
  "hours": "Lunes a Domingo: 11:30 AM – 9:30 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/pokemolokai/",
  "bcvRate": 64.2,
  "bookingType": "poke-builder-order",
  "bookingTitle": "Arma tu Poke Bowl Interactivo & Packs",
  "bookingSubtitle": "Selecciona cada ingrediente en 5 pasos guiados y comanda directo a barra",
  "bookingOptions": [
    {
      "id": "pm-arma-tu-poke",
      "name": "Arma tu Poke Personalizado (Paso a Paso)",
      "description": "1 base + 2 proteínas + 4 vegetales + 1 salsa de la casa + 2 crunchies.",
      "priceUSD": 11,
      "unit": "bowl",
      "badge": "Más Elegido",
      "features": [
        "Arroz sushi o quinoa",
        "Salmón / Atún / Camarón",
        "Aguacate, edamame, wakame",
        "Toppings de plátano o sésamo"
      ]
    },
    {
      "id": "pm-combo-healthy-duo",
      "name": "Dúo Molokai + 2 Bebidas Detox",
      "description": "2 Poke bowls insignia a elección + 2 tés verdes artesanales de maracuyá y menta.",
      "priceUSD": 24,
      "unit": "combo pareja",
      "badge": "Recomendado",
      "features": [
        "2 bowls completos",
        "2 infusiones détox frías",
        "Empaque ecológico"
      ]
    },
    {
      "id": "pm-burrito-pack",
      "name": "Poke Burrito Mololove + Chips",
      "description": "Salmón y camarón tempura enrollados en alga nori y arroz sushi con salsa fuji.",
      "priceUSD": 12.5,
      "unit": "combo burrito",
      "features": [
        "Burrito de sushi gigante",
        "Chips de plátano con dip ponzu"
      ]
    }
  ],
  "categories": [
    {
      "id": "bowls-insignia",
      "name": "Bowls Insignia"
    },
    {
      "id": "burritos-sushi",
      "name": "Poke Burritos"
    },
    {
      "id": "bebidas-detox",
      "name": "Bebidas Naturales"
    }
  ],
  "menuItems": [
    {
      "id": "pm-salmon-therapy",
      "name": "Bowl Salmon Therapy",
      "category": "bowls-insignia",
      "description": "Salmón noruego fresco en salsa ponzu, arroz sushi, aguacate, edamames, pepino y sésamo.",
      "priceUSD": 12.5,
      "badge": "Top 1",
      "popular": true
    },
    {
      "id": "pm-funky-tuna",
      "name": "Bowl Funky Tuna",
      "category": "bowls-insignia",
      "description": "Atún fresco en spicy mayo y aceite de sésamo, wakame, mango maduro y plátano crocante.",
      "priceUSD": 11.5,
      "popular": true
    },
    {
      "id": "pm-burrito-mololove",
      "name": "Poke Burrito Mololove",
      "category": "burritos-sushi",
      "description": "Salmón y camarón tempura en alga nori, queso crema, aguacate, masago y salsa fuji.",
      "priceUSD": 10.5
    },
    {
      "id": "pm-kilauea-volcanico",
      "name": "Bowl Kilauea Volcánico",
      "category": "bowls-insignia",
      "description": "Camarones y atún en adobo sriracha dulce, zanahoria marinada y cebolla crispy.",
      "priceUSD": 12
    },
    {
      "id": "pm-detox-drink",
      "name": "Molokai Detox Té Verde Maracuyá",
      "category": "bebidas-detox",
      "description": "Infusión de té verde con maracuyá fresca, jengibre y menta sin azúcar.",
      "priceUSD": 3.5
    }
  ],
  "managerKpis": {
    "activeReservations": 14,
    "capacityPercentage": 88,
    "todaySalesUSD": 1420,
    "avgTicketUSD": 38
  },
  "sampleBookings": [
    {
      "id": "POK-01",
      "clientName": "Andrea Colmenares",
      "details": "Orden Personalizada / Pase VIP con QR",
      "time": "12:30 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 45
    },
    {
      "id": "POK-02",
      "clientName": "Carlos Villasmil",
      "details": "Despacho Programado / Comanda a Cocina",
      "time": "03:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 88
    }
  ]
},

  {
  "slug": "barako_rest",
  "batch": "dia6",
  "archetype": "gourmet-booking",
  "name": "Barako Restaurante & Bar",
  "handle": "barako_rest",
  "category": "Steakhouse & Gastrobar Gourmet",
  "badgeText": "Cortes Angus & Wagyu · Cava de Vinos · Terraza Climatizada",
  "tagline": "Steakhouse de alta gama con cortes madurados a la brasa, espetadas tradicionales, sommelier y terraza lounge.",
  "heroTitle": "Cortes Prime a la Brasa &",
  "heroHighlight": "Reserva de Terraza",
  "heroSubtitle": "Aparta tu mesa en la terraza climatizada o salón VIP, pre-ordena cortes madurados como Tomahawk y Bife de Chorizo, y recibe tu pase digital con código QR.",
  "logo": "/marcas/barako_rest.jpg",
  "coverImage": "/marcas/barako_rest-cover.jpg",
  "palette": {
    "primary": "#DC2626",
    "primaryHover": "#B91C1C",
    "secondary": "#D97706",
    "accent": "#F59E0B",
    "darkBg": "#120909",
    "cardBg": "#1F1010",
    "textLight": "#FEF2F2",
    "textMuted": "#ECA1A1",
    "border": "rgba(220, 38, 38, 0.25)",
    "glow": "rgba(220, 38, 38, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Barako es la máxima expresión de la parrilla y el buen corte: reses seleccionadas de Santa Bárbara del Zulia y cortes importados madurados, asados al punto exacto con carbón vegetal, acompañados de una cava de vinos de más de 80 etiquetas.",
  "introStats": [
    {
      "label": "Cortes Prime",
      "value": "Angus & Wagyu",
      "detail": "Maduración y brasa de carbón"
    },
    {
      "label": "Cava de Vinos",
      "value": "+80 Etiquetas",
      "detail": "Maridaje guiado por sommelier"
    },
    {
      "label": "Ambiente Exclusivo",
      "value": "3 Niveles & Terraza",
      "detail": "Salón VIP y Valet Parking"
    }
  ],
  "trustBadges": [
    "Cortes Madurados & Brasa Gourmet",
    "Reserva de Mesa con Código QR",
    "Cava de Vinos & Coctelería de Autor"
  ],
  "whatsappPitchCopy": "¡Estimado equipo de Barako Restaurante & Bar! 🥩🍷 El nivel gastronómico de sus cortes a la brasa y su ambiente en Altamira son de primer nivel. Para brindar una experiencia VIP a sus comensales, eliminar el cruce de reservas en terraza y permitir que sus clientes aparten su mesa o pre-ordenen cortes especiales con pase QR y tasa BCV en vivo, creamos esta WebApp de Reserva Gourmet a medida.\n\nPueden explorar la demo interactiva y su Reel comercial aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/barako_rest",
  "address": "Av. San Juan Bosco con 5ta Transversal, Altamira, Caracas",
  "mapsUrl": "https://maps.google.com/?q=Barako+Restaurante+Altamira+Caracas",
  "hours": "Lunes a Sábado: 12:00 PM – 11:30 PM | Domingos: 12:00 PM – 9:00 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/barako_rest/",
  "bcvRate": 64.2,
  "bookingType": "steakhouse-vip-table",
  "bookingTitle": "Reserva de Mesas en Terraza & Cava VIP",
  "bookingSubtitle": "Garantiza tu mesa exclusiva, pre-selecciona tu corte prime y asegura copa de bienvenida",
  "bookingOptions": [
    {
      "id": "br-mesa-terraza",
      "name": "Mesa Terraza Lounge (2-4 Personas)",
      "description": "Mesa en terraza abierta climatizada con vista panorámica y atención sommelier.",
      "priceUSD": 30,
      "unit": "mesa (consumible)",
      "badge": "Más Solicitada",
      "features": [
        "Ubicación en terraza",
        "Copa de espumante de bienvenida",
        "100% acreditable a cuenta",
        "Valet parking sin costo"
      ]
    },
    {
      "id": "br-experiencia-tomahawk",
      "name": "Experiencia Tomahawk & Maridaje (Para 2)",
      "description": "Tomahawk Steak de 1.2kg a la brasa con papas trufadas y botella de vino reserva.",
      "priceUSD": 85,
      "unit": "experiencia",
      "badge": "Gourmet VIP",
      "features": [
        "Tomahawk 1.2kg Dry Aged",
        "Botella Malbec Reserva",
        "Guarniciones premium",
        "Mesa reservada VIP"
      ]
    },
    {
      "id": "br-box-privado",
      "name": "Salón Ejecutivo / Box Privado (Hasta 10 Pax)",
      "description": "Espacio privado climatizado para reuniones corporativas y cenas de negocios.",
      "priceUSD": 100,
      "unit": "salón",
      "features": [
        "Privacidad total 10 personas",
        "Mesonero y sommelier exclusivo",
        "Pantalla para presentaciones"
      ]
    }
  ],
  "categories": [
    {
      "id": "cortes-prime",
      "name": "Cortes a la Brasa"
    },
    {
      "id": "entradas-frias",
      "name": "Carpaccios & Entradas"
    },
    {
      "id": "espetadas",
      "name": "Espetadas Tradicionales"
    },
    {
      "id": "cocteles-vinos",
      "name": "Cava & Cócteles"
    }
  ],
  "menuItems": [
    {
      "id": "br-bife-barako",
      "name": "Bife Barako Insignia (350g)",
      "category": "cortes-prime",
      "description": "Corte fino a la brasa servido en lonchas jugosas sobre plancha caliente con chimichurri.",
      "priceUSD": 24,
      "badge": "Insignia",
      "popular": true
    },
    {
      "id": "br-punta-prime",
      "name": "Punta Trasera Prime Angus (800g / 2 pax)",
      "category": "cortes-prime",
      "description": "Punta a la brasa de carbón vegetal, yuca frita, guasacaca y ensalada César de berros.",
      "priceUSD": 38,
      "popular": true
    },
    {
      "id": "br-tomahawk-steak",
      "name": "Tomahawk Steak Dry Aged (1.2kg)",
      "category": "cortes-prime",
      "description": "Corte tomahawk con hueso largo, mantequilla de romero y papas trufadas.",
      "priceUSD": 65,
      "badge": "Premium"
    },
    {
      "id": "br-espetada-lomito",
      "name": "Espetada de Lomito Tradicional",
      "category": "espetadas",
      "description": "Centro de lomito ensartado a la brasa con ajo y laurel, con milho frito.",
      "priceUSD": 18.5
    },
    {
      "id": "br-carpaccio-mixto",
      "name": "Carpaccio de Pulpo & Lomito Mixto",
      "category": "entradas-frias",
      "description": "Láminas finas con vinagreta de alcaparras, reducción balsámica y parmesano reggiano.",
      "priceUSD": 14
    },
    {
      "id": "br-smoked-old-fashioned",
      "name": "Smoked Old Fashioned Barako",
      "category": "cocteles-vinos",
      "description": "Bourbon ahumado con astillas de roble en mesa, bitter aromático y naranja flambeada.",
      "priceUSD": 9.5
    }
  ],
  "managerKpis": {
    "activeReservations": 14,
    "capacityPercentage": 88,
    "todaySalesUSD": 1420,
    "avgTicketUSD": 38
  },
  "sampleBookings": [
    {
      "id": "BAR-01",
      "clientName": "Andrea Colmenares",
      "details": "Orden Personalizada / Pase VIP con QR",
      "time": "12:30 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 45
    },
    {
      "id": "BAR-02",
      "clientName": "Carlos Villasmil",
      "details": "Despacho Programado / Comanda a Cocina",
      "time": "03:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 88
    }
  ]
},

  {
  "slug": "portovenerehotel",
  "batch": "dia6",
  "archetype": "vip-access",
  "name": "Hotel Portovenere",
  "handle": "portovenerehotel",
  "category": "Hotel Boutique & Suites",
  "badgeText": "Suites de Lujo · Day Pass Piscina con QR · Room Service 24/7",
  "tagline": "Hotel boutique de estilo mediterráneo en Maracaibo con suites ejecutivas, piscina lounge, day pass y restaurante de alta gama.",
  "heroTitle": "Hotel Boutique &",
  "heroHighlight": "Day Pass Piscina",
  "heroSubtitle": "Adquiere tu Day Pass de piscina con boleto QR instantáneo, reserva suites ejecutivas o pide Room Service con carta digital multimoneda.",
  "logo": "/marcas/portovenerehotel.jpg",
  "coverImage": "/marcas/portovenerehotel-cover.jpg",
  "palette": {
    "primary": "#0284C7",
    "primaryHover": "#0369A1",
    "secondary": "#D4AF37",
    "accent": "#38BDF8",
    "darkBg": "#07131F",
    "cardBg": "#0F2033",
    "textLight": "#F0F9FF",
    "textMuted": "#93C5FD",
    "border": "rgba(2, 132, 199, 0.25)",
    "glow": "rgba(2, 132, 199, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Hotel Portovenere es el oasis urbano boutique de Maracaibo: arquitectura señorial inspirada en la Riviera Italiana, suites con planta eléctrica continua 24/7, piscina lounge con solárium y servicio gastronómico de cinco estrellas.",
  "introStats": [
    {
      "label": "Check-in Express",
      "value": "Pase Digital QR",
      "detail": "Acceso sin colas en recepción"
    },
    {
      "label": "Confort & Suites",
      "value": "100% Equipadas",
      "detail": "Planta eléctrica y agua 24/7"
    },
    {
      "label": "Piscina Lounge",
      "value": "Day Pass Diario",
      "detail": "Ambiente exclusivo en zona norte"
    }
  ],
  "trustBadges": [
    "Planta Eléctrica & Agua Continua 24/7",
    "Pases Day Pass & Check-in con Código QR",
    "Room Service & Estacionamiento Privado"
  ],
  "whatsappPitchCopy": "¡Estimado equipo de gerencia de Hotel Portovenere! 🏨✨ Su concepto boutique y área de piscina en Maracaibo son un verdadero oasis urbano. Para modernizar la experiencia de sus huéspedes, permitir la venta de Day Pass de piscina con boleto QR digital, y habilitar room service con menú interactivo y tasa BCV automática, les desarrollamos esta WebApp a medida.\n\nPueden probar la demo interactiva y ver el Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/portovenerehotel",
  "address": "Sector La Virginia / Zona Norte Bella Vista, Maracaibo, Zulia",
  "mapsUrl": "https://maps.google.com/?q=Hotel+Portovenere+Maracaibo",
  "hours": "Recepción 24 Horas | Piscina Day Pass: 10:00 AM – 7:00 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/portovenerehotel/",
  "bcvRate": 64.2,
  "bookingType": "hotel-suite-daypass",
  "bookingTitle": "Reserva de Suites & Day Pass de Piscina",
  "bookingSubtitle": "Compra tu pase QR de piscina o aparta tu habitación ejecutiva con check-in express",
  "bookingOptions": [
    {
      "id": "pv-daypass-adulto",
      "name": "Day Pass Piscina & Solárium (Adulto)",
      "description": "Acceso a piscina, toallas, tumbona, wifi y $5 consumible en pool bar.",
      "priceUSD": 15,
      "unit": "pase/persona",
      "badge": "Más Vendido",
      "features": [
        "Acceso piscina 10AM-7PM",
        "$5 de crédito en pool bar",
        "Toalla y vestidores",
        "Boleto digital con QR"
      ]
    },
    {
      "id": "pv-daypass-parejas",
      "name": "Day Pass Parejas All-Inclusive",
      "description": "2 pases de piscina + picada gourmet Portovenere + 2 cócteles de autor en pool bar.",
      "priceUSD": 45,
      "unit": "pareja",
      "badge": "Plan Relax",
      "features": [
        "2 pases piscina completos",
        "Tabla mixta mar y tierra",
        "2 cócteles de la casa",
        "Tumbona reservada"
      ]
    },
    {
      "id": "pv-suite-ejecutiva",
      "name": "Noche en Suite Ejecutiva King",
      "description": "Cama King Size, Smart TV 55', ducha de lluvia, desayuno buffet y acceso a piscina.",
      "priceUSD": 85,
      "unit": "noche",
      "badge": "Hospedaje",
      "features": [
        "Cama King Size",
        "Desayuno buffet incluido",
        "Planta eléctrica 24/7",
        "Late check-out 1:00 PM"
      ]
    }
  ],
  "categories": [
    {
      "id": "day-pass",
      "name": "Day Pass Piscina"
    },
    {
      "id": "suites",
      "name": "Hospedaje & Suites"
    },
    {
      "id": "room-service",
      "name": "Room Service & Bar"
    }
  ],
  "menuItems": [
    {
      "id": "pv-master-suite",
      "name": "Master Suite con Jacuzzi Privado",
      "category": "suites",
      "description": "Sala de estar, jacuzzi, minibar surtido, copa de bienvenida y late check-out.",
      "priceUSD": 130,
      "badge": "Lujo",
      "popular": true
    },
    {
      "id": "pv-parrilla-mar-tierra",
      "name": "Parrilla Mar y Tierra Portovenere",
      "category": "room-service",
      "description": "Lomito a la plancha, camarones al ajillo, tostones y ensalada fresca en suite.",
      "priceUSD": 22,
      "popular": true
    },
    {
      "id": "pv-coctel-portovenere",
      "name": "Cóctel Portovenere Sunset Spritz",
      "category": "room-service",
      "description": "Aperol, prosecco italiano, toque de frutos rojos y soda de naranja.",
      "priceUSD": 7
    },
    {
      "id": "pv-desayuno-americano",
      "name": "Desayuno Americano Express",
      "category": "room-service",
      "description": "Huevos al gusto, tocineta crocante, tostadas francesas y café recién colado.",
      "priceUSD": 8.5
    }
  ],
  "managerKpis": {
    "activeReservations": 14,
    "capacityPercentage": 88,
    "todaySalesUSD": 1420,
    "avgTicketUSD": 38
  },
  "sampleBookings": [
    {
      "id": "POR-01",
      "clientName": "Andrea Colmenares",
      "details": "Orden Personalizada / Pase VIP con QR",
      "time": "12:30 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 45
    },
    {
      "id": "POR-02",
      "clientName": "Carlos Villasmil",
      "details": "Despacho Programado / Comanda a Cocina",
      "time": "03:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 88
    }
  ]
},

  // 🌟 DÍA 7 — 10 Soluciones Comerciales Especializadas (San Cristóbal & Venezuela)
  {
  "slug": "sybarisrest",
  "batch": "dia7",
  "archetype": "gourmet-booking",
  "name": "Sybaris Restaurante - Grill",
  "handle": "sybarisrest",
  "category": "Cortes Prime · Terraza Lounge · Cocina Internacional",
  "badgeText": "🥩 #SybarisExperience · Cortes Prime al Grill & Vinos",
  "tagline": "Alta cocina a la brasa, pastas artesanales y coctelería de autor en La Lago",
  "heroTitle": "La máxima experiencia de parrilla prime y",
  "heroHighlight": "terraza gourmet",
  "heroSubtitle": "Reserva tu mesa en terraza o salón climatizado, preselecciona tus cortes prime madurados y recibe confirmación con pase QR inmediato.",
  "logo": "/marcas/sybarisrest.jpg",
  "coverImage": "/marcas/sybarisrest-cover.jpg",
  "palette": {
    "primary": "#0D5C46",
    "primaryHover": "#083C2D",
    "secondary": "#B45309",
    "accent": "#E5A93C",
    "darkBg": "#051A14",
    "cardBg": "rgba(8, 44, 34, 0.85)",
    "textLight": "#ECFDF5",
    "textMuted": "#A7F3D0",
    "border": "rgba(229, 169, 60, 0.25)",
    "glow": "rgba(229, 169, 60, 0.2)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Sybaris es el restaurante grill de referencia en el sector La Lago. Una propuesta que fusiona cortes de carne Angus importados, pastas italianas elaboradas al día, pescados frescos a la plancha y una cava de vinos curada en un ambiente refinado.",
  "introStats": [
    {
      "label": "Maduración Prime",
      "value": "28 Días",
      "detail": "Cortes Angus dry-aged certificados"
    },
    {
      "label": "Cava de Vinos",
      "value": "45+",
      "detail": "Etiquetas de España, Italia y Argentina"
    },
    {
      "label": "Ambientes",
      "value": "2",
      "detail": "Terraza lounge al aire libre + Salón VIP"
    }
  ],
  "trustBadges": [
    "Cortes Angus Certificados",
    "Sommelier en Sala",
    "Estacionamiento Privado con Valet"
  ],
  "whatsappPitchCopy": "Hola equipo de Sybaris! 👋 ¿Cuántas reservas se les pierden los fines de semana cuando el chat de WhatsApp se llena y no dan abasto para responder a tiempo?\n\nLes preparé una prueba directa con su menú y cortes de carne para que sus clientes elijan su mesa en terraza y reciban su confirmación al instante:\n👉 https://byte-bridge-tau.vercel.app/demos/sybarisrest\n\n¿Les muestro en 5 minutos cómo funciona?",
  "address": "Calle 77 (5 de Julio) con Av. 3G, Sector La Lago, Maracaibo, Zulia",
  "mapsUrl": "https://maps.google.com/?q=Sybaris+Restaurant+Maracaibo",
  "hours": "Lunes a Domingo: 12:00 PM - 11:00 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/sybarisrest/",
  "bookingType": "reserva-gourmet",
    "bookingTitle": "Reserva tu Mesa Gourmet & Selección de Cava",
  "bookingSubtitle": "Asegura tu ubicación preferencial en terraza o salón privado con pase digital",
  "bookingOptions": [
    {
      "id": "mesa-terraza",
      "name": "Mesa Terraza Lounge",
      "description": "Ubicación al aire libre con ambiente lounge, música selecta y vista a la avenida.",
      "priceUSD": 0,
      "unit": "por reserva",
      "badge": "Más Solicitada",
      "features": [
        "Ubicación en terraza",
        "Servicio de sommelier",
        "Carta digital interactiva"
      ],
      "maxCapacity": 6
    },
    {
      "id": "salon-vip",
      "name": "Chef's Table Salón VIP",
      "description": "Salón climatizado íntimo con atención exclusiva del chef parrillero y maridaje guiado.",
      "priceUSD": 25,
      "unit": "depósito consumible",
      "badge": "Experiencia Exclusiva",
      "features": [
        "Mesa VIP climatizada",
        "Copa de cortesía",
        "Menú degustación asistido"
      ],
      "maxCapacity": 12
    }
  ],
  "categories": [
    {
      "id": "carnes",
      "name": "Cortes Prime a la Brasa",
      "icon": "🥩"
    },
    {
      "id": "pastas",
      "name": "Pastas & Risottos",
      "icon": "🍝"
    },
    {
      "id": "mariscos",
      "name": "Entradas & Mar",
      "icon": "🍤"
    },
    {
      "id": "cocteles",
      "name": "Mixología & Vinos",
      "icon": "🍷"
    }
  ],
  "menuItems": [
    {
      "id": "tomahawk-prime",
      "name": "Tomahawk Prime Angus (1.2 kg)",
      "category": "carnes",
      "description": "Corte imponente a las brasas de carbón vegetal, servido sobre piedra caliente con sal marina y mantequilla de romero.",
      "priceUSD": 44,
      "badge": "Plato Insignia",
      "popular": true,
      "tags": [
        "Angus",
        "Gluten Free",
        "Recomendado"
      ]
    },
    {
      "id": "ojo-bife-sybaris",
      "name": "Ribeye / Ojo de Bife 400g",
      "category": "carnes",
      "description": "Jugoso corte madurado al punto deseado, acompañado de papas trufadas y vegetales grillados.",
      "priceUSD": 26,
      "popular": true,
      "tags": [
        "Dry-Aged",
        "Grill"
      ]
    },
    {
      "id": "risotto-di-mare",
      "name": "Risotto Frutos del Mar",
      "category": "pastas",
      "description": "Arroz arborio en bisque de langostinos, calamares sellados, camarones y mejillones con toque de vino blanco.",
      "priceUSD": 18,
      "tags": [
        "Mariscos",
        "Chef's Choice"
      ]
    },
    {
      "id": "fettuccine-tartufo",
      "name": "Fettuccine al Tartufo con Lomito",
      "category": "pastas",
      "description": "Pasta artesanal fresca salteada en salsa de crema de trufas negras y medallones de lomito sellados.",
      "priceUSD": 19,
      "badge": "Especialidad",
      "popular": true,
      "tags": [
        "Pasta Fresca",
        "Trufa"
      ]
    },
    {
      "id": "carpaccio-lomito",
      "name": "Carpaccio de Lomito Clásico",
      "category": "mariscos",
      "description": "Láminas finas de solomo con alcaparras crocantes, virutas de parmesano reggiano y reducción balsámica.",
      "priceUSD": 12,
      "tags": [
        "Entrada Fría"
      ]
    },
    {
      "id": "coctel-sybaris-gold",
      "name": "Sybaris Gold Smoked",
      "category": "cocteles",
      "description": "Bourbon infusionado con higos secos, bitter aromático, toque de miel orgánica y ahumado con corteza de roble.",
      "priceUSD": 9,
      "badge": "Coctel de Autor",
      "popular": true,
      "tags": [
        "Mixología"
      ]
    }
  ],
  "managerKpis": {
      "activeReservations": 14,
    "capacityPercentage": 88,
    "todaySalesUSD": 1840,
    "avgTicketUSD": 46
  },
  "sampleBookings": [
    {
      "id": "SYB-101",
      "clientName": "Carlos Eduardo Mendoza",
      "details": "Terraza Lounge (4 pax) · Cena Ejecutiva",
      "time": "08:00 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 180
    },
    {
      "id": "SYB-102",
      "clientName": "Mariana Rivas",
      "details": "Salón VIP (8 pax) · Aniversario",
      "time": "09:00 PM",
      "status": "en_mesa",
      "pax": 8,
      "totalUSD": 360
    },
    {
      "id": "SYB-103",
      "clientName": "Alejandro Colina",
      "details": "Mesa Terraza (2 pax) · Degustación Tomahawk",
      "time": "07:30 PM",
      "status": "pendiente",
      "pax": 2,
      "totalUSD": 95
    }
  ]
},

  {
  "slug": "srtruhan",
  "batch": "dia7",
  "archetype": "table-ordering",
  "name": "Sr. Truhán Gastrobar",
  "handle": "srtruhan",
  "category": "Gastrobar · Tapas de Autor · Noches de Stand-Up & Música",
  "badgeText": "🍸 #ElTruhan · Tapas, Tragos de Autor & Buena Vibra",
  "tagline": "El punto de encuentro bohemio en San Cristóbal con tapas creativas y mixología",
  "heroTitle": "Cócteles de autor, tapas irreverentes y",
  "heroHighlight": "pedido en mesa por QR",
  "heroSubtitle": "Escanea el código QR de tu mesa, pide rondas de tragos y tapas directo a barra y divide la cuenta sin esperar mesoneros.",
  "logo": "/marcas/srtruhan.jpg",
  "coverImage": "/marcas/srtruhan-cover.jpg",
  "palette": {
    "primary": "#D97706",
    "primaryHover": "#B45309",
    "secondary": "#475569",
    "accent": "#FBBF24",
    "darkBg": "#0F172A",
    "cardBg": "rgba(30, 41, 59, 0.85)",
    "textLight": "#F8FAFC",
    "textMuted": "#CBD5E1",
    "border": "rgba(251, 191, 36, 0.25)",
    "glow": "rgba(251, 191, 36, 0.2)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Sr. Truhán es el gastrobar más auténtico y bohemio de San Cristóbal. Un espacio donde las noches cobran vida con tapas fusión venezolanas, mixología creativa y eventos en vivo que llenan el local cada semana.",
  "introStats": [
    {
      "label": "Tragos de Autor",
      "value": "14",
      "detail": "Mixología propia con destilados premium"
    },
    {
      "label": "Noches con Show",
      "value": "3/sem",
      "detail": "Stand-up comedy, acústicos y DJs"
    },
    {
      "label": "Velocidad de Barra",
      "value": "3 min",
      "detail": "Comanda directa a bartender por QR"
    }
  ],
  "trustBadges": [
    "Auto-Pedido QR sin Esperas",
    "Mixología de Vanguardia",
    "Ambiente Climatizado & Terraza"
  ],
  "whatsappPitchCopy": "Hola amigos de Sr. Truhán! 🍸 ¿Cuánto tiempo pierden sus clientes esperando que les tomen otra ronda de tragos cuando el local está lleno en plena noche de show?\n\nLes diseñé una prueba con sus tapas y cócteles para que cada mesa pida directo a la barra escaneando un código QR y divida la cuenta sin esperar mesoneros:\n👉 https://byte-bridge-tau.vercel.app/demos/srtruhan\n\n¿Les muestro cómo se siente en el teléfono en 5 minutos?",
  "address": "Sector Pueblo Nuevo / Barrio Obrero, San Cristóbal, Táchira",
  "mapsUrl": "https://maps.google.com/?q=Sr+Truhan+San+Cristobal",
  "hours": "Miércoles a Sábado: 6:00 PM - 2:00 AM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/srtruhan/",
  "bookingType": "comanda-mesa",
    "bookingTitle": "Reserva de Mesa & Auto-Pedido con QR",
  "bookingSubtitle": "Comanda tus cócteles y tapas en segundos desde tu smartphone",
  "bookingOptions": [
    {
      "id": "mesa-lounge",
      "name": "Mesa Gastrobar",
      "description": "Acceso garantizado para grupos con comanda QR directo a barra y cocina.",
      "priceUSD": 0,
      "unit": "por reserva",
      "badge": "Acceso Libre",
      "features": [
        "Menú QR en mesa",
        "Comanda sin mesero",
        "División de cuenta fácil"
      ]
    },
    {
      "id": "mesa-show",
      "name": "Mesa VIP Noche de Show",
      "description": "Mesa frente a tarima en noches de stand-up comedy o música en vivo con trago de bienvenida.",
      "priceUSD": 10,
      "unit": "cover canjeable",
      "badge": "Días de Evento",
      "features": [
        "Ubicación preferencial",
        "1 Cóctel de autor incluido",
        "Atención prioritaria"
      ]
    }
  ],
  "categories": [
    {
      "id": "tapas",
      "name": "Tapas & Picadas",
      "icon": "🍢"
    },
    {
      "id": "hamburguesas",
      "name": "Burgers & Sandwiches",
      "icon": "🍔"
    },
    {
      "id": "cocteles",
      "name": "Cócteles Insignia",
      "icon": "🍸"
    },
    {
      "id": "shots",
      "name": "Cervezas & Shots",
      "icon": "🍻"
    }
  ],
  "menuItems": [
    {
      "id": "tequenos-truhan",
      "name": "Tequeños Truhán Trufados (6 uds)",
      "category": "tapas",
      "description": "Masa hojaldrada artesanal rellena de queso gouda y pincelada con aceite de trufa blanca y dip de papelón con maracuyá.",
      "priceUSD": 7,
      "badge": "Top Ventas",
      "popular": true,
      "tags": [
        "Tapas",
        "Para Compartir"
      ]
    },
    {
      "id": "tapas-ibericas",
      "name": "Tabla Mixta El Truhán",
      "category": "tapas",
      "description": "Jamón serrano, queso manchego curado, aceitunas marinadas, chorizo ibérico y tostadas campesinas al ajo.",
      "priceUSD": 15,
      "popular": true,
      "tags": [
        "Picada"
      ]
    },
    {
      "id": "burger-truhan",
      "name": "Burger Truhán Doble Smash",
      "category": "hamburguesas",
      "description": "Doble carne smash 100% de res, queso americano fundido, mermelada de tocineta casera y alioli de ajo asado en pan brioche.",
      "priceUSD": 10.5,
      "badge": "Estrella",
      "popular": true,
      "tags": [
        "Smash",
        "Burger"
      ]
    },
    {
      "id": "coctel-el-truhan",
      "name": "El Truhán Signature Cocktail",
      "category": "cocteles",
      "description": "Gin macerado en cardamomo, licor de flor de saúco, reducción de frutos rojos y splash de prosecco.",
      "priceUSD": 8,
      "badge": "De la Casa",
      "popular": true,
      "tags": [
        "Gin",
        "Signature"
      ]
    },
    {
      "id": "mojito-maracuya",
      "name": "Mojito de Parchita Ahumado",
      "category": "cocteles",
      "description": "Ron añejo venezolano, pulpa natural de maracuyá, hierbabuena fresca y golpe ahumado en copa balón.",
      "priceUSD": 6.5,
      "tags": [
        "Refrescante"
      ]
    },
    {
      "id": "costillas-bbq-ron",
      "name": "Costillitas Glaseadas al Ron Santa Teresa",
      "category": "tapas",
      "description": "Costillas de cerdo tiernas cocinadas 6 horas a baja temperatura con salsa BBQ artesanal al ron y semillas de sésamo.",
      "priceUSD": 14,
      "popular": true,
      "tags": [
        "Carnes",
        "Gourmet"
      ]
    }
  ],
  "managerKpis": {
      "activeReservations": 12,
    "capacityPercentage": 92,
    "todaySalesUSD": 1420,
    "avgTicketUSD": 24
  },
  "sampleBookings": [
    {
      "id": "TRU-201",
      "clientName": "Gabriel Pernía",
      "details": "Mesa Gastrobar (5 pax) · Cumpleaños",
      "time": "08:30 PM",
      "status": "confirmada",
      "pax": 5,
      "totalUSD": 120
    },
    {
      "id": "TRU-202",
      "clientName": "Andrea Chacón",
      "details": "Mesa VIP Noche de Show (4 pax)",
      "time": "09:30 PM",
      "status": "en_mesa",
      "pax": 4,
      "totalUSD": 95
    },
    {
      "id": "TRU-203",
      "clientName": "José Manuel Silva",
      "details": "Barra Cócteles (2 pax) · After-work",
      "time": "07:00 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 48
    }
  ]
},

  {
  "slug": "crispys_ve",
  "batch": "dia7",
  "archetype": "direct-delivery",
  "name": "Crispy's Fried Chicken",
  "handle": "crispys.ve",
  "category": "Pollo Frito Crujiente · Smash Chicken · Combos Familiares",
  "badgeText": "🍗 #ElPolloMasCrujiente · Receta Secreta 11 Especias",
  "tagline": "El auténtico pollo frito crujiente americano y chicken burgers en San Cristóbal",
  "heroTitle": "Pollo ultra crujiente, salsas caseras y",
  "heroHighlight": "delivery directo 0% comisión",
  "heroSubtitle": "Pide tus tenders, buckets familiares y chicken sandwiches directo desde nuestra WebApp oficial sin pagar sobreprecios en apps de terceros.",
  "logo": "/marcas/crispys_ve.jpg",
  "coverImage": "/marcas/crispys_ve-cover.jpg",
  "palette": {
    "primary": "#DC2626",
    "primaryHover": "#B91C1C",
    "secondary": "#D97706",
    "accent": "#F59E0B",
    "darkBg": "#180808",
    "cardBg": "rgba(45, 12, 12, 0.85)",
    "textLight": "#FEF2F2",
    "textMuted": "#FECACA",
    "border": "rgba(220, 38, 38, 0.25)",
    "glow": "rgba(220, 38, 38, 0.2)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Crispy's es el templo del pollo frito estilo sureño americano en Táchira. Pollo marinado por 24 horas en buttermilk con 11 especias secretas, rebozado a mano y frito al momento para lograr ese crocante dorado irresistible.",
  "introStats": [
    {
      "label": "Marinado Secreto",
      "value": "24 Horas",
      "detail": "Buttermilk y especias para máxima jugosidad"
    },
    {
      "label": "Tiempo de Entrega",
      "value": "25 min",
      "detail": "Despacho térmico directo a domicilio"
    },
    {
      "label": "Ahorro en Delivery",
      "value": "100%",
      "detail": "Cero comisiones abusivas para el cliente"
    }
  ],
  "trustBadges": [
    "100% Pollo Fresco Jamás Congelado",
    "Despacho Térmico Garantizado",
    "Tasa BCV Oficial en Vivo"
  ],
  "whatsappPitchCopy": "Hola equipo de Crispy's! 🍗 ¿Cuánto margen están perdiendo al mes pagando hasta 25% de comisión por cada combo que despachan por apps de terceros?\n\nLes armé un ejemplo con sus tenders y combos familiares para que sus clientes pidan directo sin intermediarios y con total transparencia a tasa oficial:\n👉 https://byte-bridge-tau.vercel.app/demos/crispys_ve\n\n¿Les muestro en 5 minutos cómo se vería para su delivery?",
  "address": "Av. Principal Pueblo Nuevo, San Cristóbal, Táchira",
  "mapsUrl": "https://maps.google.com/?q=Crispys+San+Cristobal",
  "hours": "Martes a Domingo: 11:30 AM - 10:30 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/crispys.ve/",
  "bookingType": "delivery-pickup",
    "bookingTitle": "Pide a Domicilio o Retiro Pick-Up",
  "bookingSubtitle": "Comanda tu combo favorito en 3 clics con cálculo BCV al instante",
  "bookingOptions": [
    {
      "id": "delivery-express",
      "name": "Delivery Directo a Casa",
      "description": "Envío en empaque térmico con motorizado propio para que llegue caliente y crujiente.",
      "priceUSD": 2,
      "unit": "costo de envío",
      "badge": "Más Rápido",
      "features": [
        "Empaque térmico sellado",
        "Seguimiento en WhatsApp",
        "Pago móvil o divisas"
      ]
    },
    {
      "id": "pickup-tienda",
      "name": "Retiro Pick-Up Express",
      "description": "Haz tu pedido online y retíralo en mostrador en 15 minutos sin hacer fila en caja.",
      "priceUSD": 0,
      "unit": "sin costo",
      "badge": "Cero Colas",
      "features": [
        "Listo en 15 minutos",
        "Entrega prioritaria",
        "Ahorro total"
      ]
    }
  ],
  "categories": [
    {
      "id": "sandwiches",
      "name": "Crispy Sandwiches",
      "icon": "🍔"
    },
    {
      "id": "buckets",
      "name": "Buckets & Combos",
      "icon": "🍗"
    },
    {
      "id": "tenders",
      "name": "Tenders & Alitas",
      "icon": "🍟"
    },
    {
      "id": "sides",
      "name": "Acompañantes & Dips",
      "icon": "🥤"
    }
  ],
  "menuItems": [
    {
      "id": "crispy-deluxe-burger",
      "name": "Crispy Deluxe Chicken Sandwich",
      "category": "sandwiches",
      "description": "Pechuga de pollo mega crujiente, ensalada coleslaw fresca, pepinillos encurtidos y salsa Crispy secreta en pan brioche artesanal.",
      "priceUSD": 7.5,
      "badge": "El Más Vendido",
      "popular": true,
      "tags": [
        "Favorito",
        "Pollo Crujiente"
      ]
    },
    {
      "id": "spicy-nashville-burger",
      "name": "Spicy Nashville Hot Chicken",
      "category": "sandwiches",
      "description": "Pechuga bañada en aceite especiado Nashville estilo Tennessee, queso derretido y aderezo ranch para balancear.",
      "priceUSD": 8,
      "popular": true,
      "spicy": true,
      "tags": [
        "Picante",
        "Nashville"
      ]
    },
    {
      "id": "bucket-familiar-12",
      "name": "Bucket Familiar Crispy (12 Piezas)",
      "category": "buckets",
      "description": "12 piezas mixtas de pollo súper crocante, 4 bollitos de pan de maíz, ración grande de papas y 4 salsas a elección.",
      "priceUSD": 19.99,
      "badge": "Para la Familia",
      "popular": true,
      "tags": [
        "Familiar",
        "Económico"
      ]
    },
    {
      "id": "tenders-box-6",
      "name": "Crispy Tenders Box (6 Piezas)",
      "category": "tenders",
      "description": "Tiras de pechuga pura rebozadas a mano con papas fritas sazonadas y 2 dips caseros (Honey Mustard y BBQ Ahumada).",
      "priceUSD": 8.5,
      "tags": [
        "Tenders",
        "Papas"
      ]
    },
    {
      "id": "loaded-fries-crispy",
      "name": "Loaded Crispy Fries",
      "category": "sides",
      "description": "Papas fritas crocantes bañadas en salsa cheddar tibia, trocitos de crispy tenders y tocineta ahumada crujiente.",
      "priceUSD": 6,
      "popular": true,
      "tags": [
        "Para Picar"
      ]
    },
    {
      "id": "alitas-crispy-8",
      "name": "Crispy Wings x8 con Salsa Honey BBQ",
      "category": "tenders",
      "description": "Alitas de pollo extra crujientes glaseadas con salsa de miel y BBQ o salsa Buffalo picante.",
      "priceUSD": 7.5,
      "tags": [
        "Alitas"
      ]
    }
  ],
  "managerKpis": {
      "activeReservations": 8,
    "capacityPercentage": 75,
    "todaySalesUSD": 980,
    "avgTicketUSD": 18
  },
  "sampleBookings": [
    {
      "id": "CRP-301",
      "clientName": "Daniela Moncada",
      "details": "Bucket Familiar 12 Pzas · Delivery Pueblo Nuevo",
      "time": "01:15 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 24
    },
    {
      "id": "CRP-302",
      "clientName": "Luis Fernando Rojas",
      "details": "2x Crispy Deluxe + Loaded Fries · Pick-Up",
      "time": "07:45 PM",
      "status": "en_mesa",
      "pax": 2,
      "totalUSD": 21
    },
    {
      "id": "CRP-303",
      "clientName": "Marcos Vivas",
      "details": "Tenders Box x6 · Delivery Barrio Obrero",
      "time": "08:30 PM",
      "status": "pendiente",
      "pax": 1,
      "totalUSD": 10.5
    }
  ]
},

  {
  "slug": "enigmacafe_sc",
  "batch": "dia7",
  "archetype": "item-builder",
  "name": "Enigma Café & Brunch",
  "handle": "enigmacafe.sc",
  "category": "Café de Especialidad · Brunch Moderno · Espacio Co-Working",
  "badgeText": "☕ #DesvelaElEnigma · Café de Finca & Brunches Estéticos",
  "tagline": "El spot estético de café de especialidad y brunch de vanguardia en Barrio Obrero",
  "heroTitle": "Café de especialidad, brunches estéticos y",
  "heroHighlight": "creador de bowls a tu medida",
  "heroSubtitle": "Diseña tu tostada o açaí bowl ingrediente por ingrediente, elige tu método de filtrado de café y retira sin colas en mostrador.",
  "logo": "/marcas/enigmacafe_sc.jpg",
  "coverImage": "/marcas/enigmacafe_sc-cover.jpg",
  "palette": {
    "primary": "#7C3AED",
    "primaryHover": "#6D28D9",
    "secondary": "#3B82F6",
    "accent": "#A78BFA",
    "darkBg": "#0D0A14",
    "cardBg": "rgba(30, 18, 54, 0.85)",
    "textLight": "#F5F3FF",
    "textMuted": "#DDD6FE",
    "border": "rgba(167, 139, 250, 0.25)",
    "glow": "rgba(124, 58, 237, 0.25)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Enigma Café es el espacio de referencia para los amantes del buen café y el teletrabajo en San Cristóbal. Granos de origen tachirense tostados artesanalmente, desayunos aesthetic, opciones keto y veganas, y Wi-Fi de alta velocidad.",
  "introStats": [
    {
      "label": "Puntaje SCA Café",
      "value": "86+",
      "detail": "Café de especialidad de micro-lotes andinos"
    },
    {
      "label": "Opciones Brunch",
      "value": "20+",
      "detail": "Tostadas, bowls, pancakes y waffles"
    },
    {
      "label": "Wi-Fi Fibra",
      "value": "300 Mbps",
      "detail": "Espacio habilitado para trabajo remoto"
    }
  ],
  "trustBadges": [
    "Café de Finca Tostado Semanalmente",
    "Baristas Certificados",
    "Espacio Pet Friendly & Co-Working"
  ],
  "whatsappPitchCopy": "Hola equipo de Enigma! ☕ ¿Cuántos mensajes y audios cruzan a diario solo para coordinar cómo un cliente quiere personalizar su tostada o bowl de açaí?\n\nLes preparé un ejemplo interactivo con sus desayunos y métodos de café para que el cliente arme su combinación en segundos desde el móvil:\n👉 https://byte-bridge-tau.vercel.app/demos/enigmacafe_sc\n\n¿Les muestro en 5 minutos cómo les ahorraría tiempo en el chat?",
  "address": "Carrera 21 con Calle 10, Barrio Obrero, San Cristóbal, Táchira",
  "mapsUrl": "https://maps.google.com/?q=Enigma+Cafe+San+Cristobal",
  "hours": "Lunes a Domingo: 8:00 AM - 9:00 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/enigmacafe.sc/",
  "bookingType": "brunch-builder",
    "bookingTitle": "Personaliza tu Brunch & Reserva Espacio",
  "bookingSubtitle": "Elige tus ingredientes paso a paso o agenda tu mesa co-working",
  "bookingOptions": [
    {
      "id": "brunch-builder",
      "name": "Arma tu Brunch & Café",
      "description": "Constructor personalizado de tostadas, bowls saludables o waffles con café especial.",
      "priceUSD": 0,
      "unit": "pedido online",
      "badge": "Interactivo",
      "features": [
        "Base a elección",
        "Toppings y proteínas",
        "Café de origen incluido"
      ]
    },
    {
      "id": "coworking-pass",
      "name": "Pase Co-Working + Café Ilimitado",
      "description": "Jornada de 4 horas con mesa ergonómica, conexión fibra óptica y café americano ilimitado.",
      "priceUSD": 10,
      "unit": "por jornada",
      "badge": "Productividad",
      "features": [
        "Café americano refill",
        "Wi-Fi dedicado alta velocidad",
        "Toma corriente exclusivo"
      ]
    }
  ],
  "categories": [
    {
      "id": "cafe",
      "name": "Café de Especialidad",
      "icon": "☕"
    },
    {
      "id": "tostadas",
      "name": "Tostadas & Brunches",
      "icon": "🥑"
    },
    {
      "id": "bowls",
      "name": "Açaí & Bowls Saludables",
      "icon": "🍓"
    },
    {
      "id": "postres",
      "name": "Repostería de Vitrina",
      "icon": "🥐"
    }
  ],
  "menuItems": [
    {
      "id": "tostada-salmon-enigma",
      "name": "Tostada Nórdica de Salmón & Aguacate",
      "category": "tostadas",
      "description": "Pan de masa madre tostado con queso crema de eneldo, láminas de salmón curado, aguacate hass y huevo pochado.",
      "priceUSD": 8.5,
      "badge": "Favorito Brunch",
      "popular": true,
      "tags": [
        "Masa Madre",
        "Salmón"
      ]
    },
    {
      "id": "acai-bowl-enigma",
      "name": "Enigma Açaí Bowl Silvestre",
      "category": "bowls",
      "description": "Base cremosa de açaí puro con fresas frescas, arándanos, granola artesanal de almendras y llovizna de mantequilla de maní.",
      "priceUSD": 6.5,
      "popular": true,
      "tags": [
        "Superfood",
        "Vegano"
      ]
    },
    {
      "id": "flat-white-especialidad",
      "name": "Flat White Micro-Lote Táchira",
      "category": "cafe",
      "description": "Doble espresso de café lavado de altura con leche texturizada sedosa y arte latte.",
      "priceUSD": 3.5,
      "badge": "Barista Pick",
      "popular": true,
      "tags": [
        "Especialidad"
      ]
    },
    {
      "id": "french-toast-brioche",
      "name": "Tostadas Francesas de Brioche Enigma",
      "category": "tostadas",
      "description": "Pan brioche bañado en crema de vainilla y canela, sellado a la mantequilla con frutos rojos y sirope de maple puro.",
      "priceUSD": 7,
      "popular": true,
      "tags": [
        "Dulce",
        "Brunch"
      ]
    },
    {
      "id": "matcha-latte-vainilla",
      "name": "Ceremonial Matcha Latte Vainilla",
      "category": "cafe",
      "description": "Té verde matcha ceremonial japonés batido al momento con leche de avena o almendras y vainilla de Madagascar.",
      "priceUSD": 4,
      "tags": [
        "Antioxidante",
        "Matcha"
      ]
    },
    {
      "id": "croissant-almendras-enigma",
      "name": "Croissant Relleno de Frangipane & Almendras",
      "category": "postres",
      "description": "Hojaldre 100% mantequilla relleno de crema de almendras tostadas y cubierto de almendras laminadas.",
      "priceUSD": 4.5,
      "tags": [
        "Pastelería"
      ]
    }
  ],
  "managerKpis": {
      "activeReservations": 10,
    "capacityPercentage": 82,
    "todaySalesUSD": 890,
    "avgTicketUSD": 14
  },
  "sampleBookings": [
    {
      "id": "ENI-401",
      "clientName": "Valeria Contreras",
      "details": "Tostada Nórdica + Flat White · Pick-Up",
      "time": "09:00 AM",
      "status": "confirmada",
      "pax": 1,
      "totalUSD": 12
    },
    {
      "id": "ENI-402",
      "clientName": "Sebastián Guerrero",
      "details": "Pase Co-Working (2 personas)",
      "time": "10:30 AM",
      "status": "en_mesa",
      "pax": 2,
      "totalUSD": 20
    },
    {
      "id": "ENI-403",
      "clientName": "Camila Bautista",
      "details": "Mesa Brunch Terraza (3 pax)",
      "time": "11:15 AM",
      "status": "pendiente",
      "pax": 3,
      "totalUSD": 32
    }
  ]
},

  {
  "slug": "beaucoffee_sc",
  "batch": "dia7",
  "archetype": "table-ordering",
  "name": "Beau Coffee & Bakery",
  "handle": "beaucoffee.sc",
  "category": "Bistró Minimalista · Masa Madre · Croissants de Especialidad",
  "badgeText": "🥐 #BeauMoments · Panadería Artesanal & Café Contemporáneo",
  "tagline": "El encanto de la panadería europea y el café de autor en Pueblo Nuevo",
  "heroTitle": "Panadería de masa madre, croissants de autor y",
  "heroHighlight": "auto-pedido en mesa con QR",
  "heroSubtitle": "Escanea el código QR de tu mesa, explora los croissants recién horneados y bebidas frías, y ordena a barista en segundos.",
  "logo": "/marcas/beaucoffee_sc.jpg",
  "coverImage": "/marcas/beaucoffee_sc-cover.jpg",
  "palette": {
    "primary": "#0284C7",
    "primaryHover": "#0369A1",
    "secondary": "#64748B",
    "accent": "#38BDF8",
    "darkBg": "#0B1528",
    "cardBg": "rgba(15, 30, 50, 0.85)",
    "textLight": "#F0F9FF",
    "textMuted": "#BAE6FD",
    "border": "rgba(56, 189, 248, 0.25)",
    "glow": "rgba(2, 132, 199, 0.2)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Beau Coffee combina la estética nórdica minimalista con la tradición panadera francesa en San Cristóbal. Hogar de los croissants de pistacho más virales de la ciudad, desayunos ejecutivos elegantes y cold brews infusionados.",
  "introStats": [
    {
      "label": "Horneado Diario",
      "value": "3 Tandas",
      "detail": "Croissants y panes recién salidos del horno"
    },
    {
      "label": "Fermentación Lenta",
      "value": "48 Horas",
      "detail": "Masa madre natural para digestión perfecta"
    },
    {
      "label": "Mesa Express",
      "value": "QR Inmediato",
      "detail": "Sin esperas para pedir café o desayunos"
    }
  ],
  "trustBadges": [
    "Mantequilla 100% Neozelandesa",
    "Masa Madre 48h Fermentación",
    "Atención Ágil sin Filas"
  ],
  "whatsappPitchCopy": "Hola amigos de Beau Coffee! 🥐 En las mañanas cuando la vitrina se llena, ¿cuántos clientes pierden tiempo haciendo fila solo para pedir un croissant y un café?\n\nLes diseñé una prueba en vivo para que el cliente se siente en mesa, ordene al instante con código QR y pague a tasa oficial sin levantarse:\n👉 https://byte-bridge-tau.vercel.app/demos/beaucoffee_sc\n\n¿Les muestro en 5 minutos cómo funciona?",
  "address": "Av. Principal de Pueblo Nuevo, Edif. Boutique, San Cristóbal, Táchira",
  "mapsUrl": "https://maps.google.com/?q=Beau+Coffee+San+Cristobal",
  "hours": "Martes a Domingo: 7:30 AM - 8:30 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/beaucoffee.sc/",
  "bookingType": "comanda-mesa",
    "bookingTitle": "Comanda en Mesa por QR & Pedidos para Llevar",
  "bookingSubtitle": "Elige tus favoritos de panadería y café sin demoras",
  "bookingOptions": [
    {
      "id": "mesa-beau",
      "name": "Mesa Bistró Beau",
      "description": "Ordena en sala a través del código QR con servicio directo a tu mesa.",
      "priceUSD": 0,
      "unit": "por orden",
      "badge": "En Sala",
      "features": [
        "Menú QR en mesa",
        "Muestra de vitrina en tiempo real",
        "Pago sin levantarse"
      ]
    },
    {
      "id": "box-takeaway",
      "name": "Caja de Croissants Pick-Up",
      "description": "Caja surtida de 4 croissants gourmet recién horneados para llevar a casa o la oficina.",
      "priceUSD": 18,
      "unit": "box surtido",
      "badge": "Para Llevar",
      "features": [
        "4 Croissants gourmet",
        "Empaque de lujo",
        "Retiro sin cola"
      ]
    }
  ],
  "categories": [
    {
      "id": "croissants",
      "name": "Croissants & Bollería",
      "icon": "🥐"
    },
    {
      "id": "desayunos",
      "name": "Huevos & Desayunos",
      "icon": "🍳"
    },
    {
      "id": "cafes",
      "name": "Espressos & Bebidas",
      "icon": "☕"
    },
    {
      "id": "panaderia",
      "name": "Hogazas Masa Madre",
      "icon": "🍞"
    }
  ],
  "menuItems": [
    {
      "id": "croissant-pistacho-beau",
      "name": "Croissant Supreme de Pistacho",
      "category": "croissants",
      "description": "Croissant hojaldrado con crema pastelera de pistacho siciliano puro, topping de ganache blanco y pistachos triturados.",
      "priceUSD": 5.5,
      "badge": "Estrella Viral",
      "popular": true,
      "tags": [
        "Pistacho",
        "Top Seller"
      ]
    },
    {
      "id": "huevos-benedictinos-beau",
      "name": "Beau Eggs Benedict en Brioche",
      "category": "desayunos",
      "description": "Huevos poché sobre tostadas brioche caseras, jamón de pavo ahumado y salsa holandesa tibia con toque de cebollín.",
      "priceUSD": 8,
      "popular": true,
      "tags": [
        "Desayuno Gourmet"
      ]
    },
    {
      "id": "cold-brew-nitro",
      "name": "Nitro Cold Brew Infusionado",
      "category": "cafes",
      "description": "Café extraído en frío durante 18 horas y presurizado con nitrógeno para una textura cremosa similar a una cerveza stout.",
      "priceUSD": 4,
      "tags": [
        "Cold Brew",
        "Refrescante"
      ]
    },
    {
      "id": "croissant-almendras-beau",
      "name": "Croissant Doble Almendras",
      "category": "croissants",
      "description": "Bañado en almíbar ligero de vainilla, relleno con frangipane y cubierto de finas almendras tostadas.",
      "priceUSD": 4.5,
      "popular": true,
      "tags": [
        "Clásico Francés"
      ]
    },
    {
      "id": "avocado-toast-beau",
      "name": "Avocado Toast en Pan Campesino",
      "category": "desayunos",
      "description": "Rebanada gruesa de masa madre con emulsión de aguacate, tomates cherry confitados, queso feta y semillas de sésamo.",
      "priceUSD": 6.5,
      "tags": [
        "Saludable"
      ]
    },
    {
      "id": "torta-vasca-quemada",
      "name": "Basque Burnt Cheesecake",
      "category": "croissants",
      "description": "Tarta de queso caramelizada al estilo San Sebastián con centro cremoso que se derrite al corte.",
      "priceUSD": 5,
      "tags": [
        "Postre"
      ]
    }
  ],
  "managerKpis": {
      "activeReservations": 11,
    "capacityPercentage": 85,
    "todaySalesUSD": 1120,
    "avgTicketUSD": 16
  },
  "sampleBookings": [
    {
      "id": "BEA-501",
      "clientName": "Mauricio Albarrán",
      "details": "Mesa Bistró (2 pax) · Desayuno",
      "time": "08:15 AM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 24
    },
    {
      "id": "BEA-502",
      "clientName": "Paola Zambrano",
      "details": "Box de Croissants x4 · Pick-Up",
      "time": "09:45 AM",
      "status": "en_mesa",
      "pax": 1,
      "totalUSD": 18
    },
    {
      "id": "BEA-503",
      "clientName": "Ignacio Ferrer",
      "details": "Mesa Bistró (4 pax) · Merienda",
      "time": "04:30 PM",
      "status": "pendiente",
      "pax": 4,
      "totalUSD": 36
    }
  ]
},

  {
  "slug": "bruselas_sc",
  "batch": "dia7",
  "archetype": "item-builder",
  "name": "Bruselas Chocolatería & Waffles",
  "handle": "bruselas_sc",
  "category": "Chocolatería · Wafles Belgas · Crepería Artesanal & Fondues",
  "badgeText": "🧇 #SaborBelga · Wafles Auténticos & Chocolate Puro",
  "tagline": "Wafles belgas artesanales, fondues de chocolate y crepes para endulzar tus tardes",
  "heroTitle": "Chocolates belgas, wafles dorados y",
  "heroHighlight": "constructor de wafles interactivo",
  "heroSubtitle": "Arma tu wafle belga perfecto: elige la masa, el baño de chocolate tibio, frutas frescas y toppings crujientes en 3 clics.",
  "logo": "/marcas/bruselas_sc.jpg",
  "coverImage": "/marcas/bruselas_sc-cover.jpg",
  "palette": {
    "primary": "#854D0E",
    "primaryHover": "#713F12",
    "secondary": "#D97706",
    "accent": "#FBBF24",
    "darkBg": "#170F07",
    "cardBg": "rgba(40, 25, 12, 0.85)",
    "textLight": "#FEFCE8",
    "textMuted": "#FEF08A",
    "border": "rgba(251, 191, 36, 0.25)",
    "glow": "rgba(217, 119, 6, 0.25)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Bruselas es el rincón más dulce de San Cristóbal. Inspirado en las chocolaterías de Bélgica, elabora wafles lieja caramelizados, crepes dulces y saladas, fondues para compartir y chocolates calientes espesos.",
  "introStats": [
    {
      "label": "Masa Belga",
      "value": "100% Original",
      "detail": "Con perlas de azúcar importadas que caramelizan"
    },
    {
      "label": "Toppings & Baños",
      "value": "18+",
      "detail": "Chocolates belgas, avellanas, frutas y helados"
    },
    {
      "label": "Fondues",
      "value": "Para 2 y 4",
      "detail": "Con frutas frescas y masmelos tostados"
    }
  ],
  "trustBadges": [
    "Chocolate Belga Genuino",
    "Wafles Horneados al Minuto",
    "Opciones Saladas y Dulces"
  ],
  "whatsappPitchCopy": "Hola equipo de Bruselas! 🧇 En horas de merienda, ¿cuántos minutos pierden en WhatsApp cuadrando si el cliente quiere salsa belga, Nutella, fresas o helado en su wafle?\n\nLes preparé un ejemplo visual donde el cliente diseña su wafle paso a paso y la comanda les entra perfecta a cocina:\n👉 https://byte-bridge-tau.vercel.app/demos/bruselas_sc\n\n¿Les muestro cómo funciona en 5 minutos?",
  "address": "Sector Barrio Obrero, San Cristóbal, Táchira",
  "mapsUrl": "https://maps.google.com/?q=Bruselas+San+Cristobal",
  "hours": "Lunes a Domingo: 1:00 PM - 9:30 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/bruselas_sc/",
  "bookingType": "waffle-builder",
    "bookingTitle": "Diseña tu Wafle o Crepe Belga",
  "bookingSubtitle": "Selecciona tu base, coberturas y toppings paso a paso",
  "bookingOptions": [
    {
      "id": "waffle-builder",
      "name": "Arma tu Wafle Belga",
      "description": "Constructor interactivo: Wafle Lieja o Clásico + Baño de Chocolate + Frutas + Toppings.",
      "priceUSD": 0,
      "unit": "por orden",
      "badge": "El Más Popular",
      "features": [
        "Masa caramelizada caliente",
        "Salsa a elección",
        "2 Toppings incluidos"
      ]
    },
    {
      "id": "fondue-parejas",
      "name": "Fondue de Chocolate para Dos",
      "description": "Olla de fondue con chocolate belga fundido, fresas, bananos, masmelos y trozos de wafle.",
      "priceUSD": 14,
      "unit": "para 2 personas",
      "badge": "Ideal Parejas",
      "features": [
        "Chocolate de origen",
        "Frutas frescas",
        "Mesa reservada"
      ]
    }
  ],
  "categories": [
    {
      "id": "wafles",
      "name": "Wafles Belgas de Autor",
      "icon": "🧇"
    },
    {
      "id": "crepes",
      "name": "Crepes Dulces & Saladas",
      "icon": "🥞"
    },
    {
      "id": "fondues",
      "name": "Fondues & Chocolates",
      "icon": "🫕"
    },
    {
      "id": "malteadas",
      "name": "Bebidas & Malteadas",
      "icon": "🥤"
    }
  ],
  "menuItems": [
    {
      "id": "wafle-bruselas-supreme",
      "name": "Wafle Bruselas Supremo",
      "category": "wafles",
      "description": "Wafle belga caramelizado con baño de Nutella, fresas frescas, helado artesanal de vainilla y lluvia de avellanas tostadas.",
      "priceUSD": 6.5,
      "badge": "Insignia",
      "popular": true,
      "tags": [
        "Nutella",
        "Wafle"
      ]
    },
    {
      "id": "fondue-chocolate-belga",
      "name": "Fondue de Chocolate Belga para Dos",
      "category": "fondues",
      "description": "Cazuela de chocolate semi-amargo derretido con brochetas de fresa, banano, masmelos y barquillas crujientes.",
      "priceUSD": 14,
      "badge": "Para Compartir",
      "popular": true,
      "tags": [
        "Fondue",
        "Parejas"
      ]
    },
    {
      "id": "crepe-pollo-champinones",
      "name": "Crepe Salada de Pollo & Champiñones",
      "category": "crepes",
      "description": "Crepe francesa rellena de pechuga desmechada en salsa bechamel de champiñones frescos y queso gratinado.",
      "priceUSD": 7.5,
      "popular": true,
      "tags": [
        "Salado",
        "Crepe"
      ]
    },
    {
      "id": "chocolate-espeso-belga",
      "name": "Submarino de Chocolate Caliente Belga",
      "category": "fondues",
      "description": "Leche vaporizada caliente servida con barra entera de chocolate belga para fundir en taza y crema chantilly.",
      "priceUSD": 4,
      "tags": [
        "Caliente",
        "Chocolate"
      ]
    },
    {
      "id": "wafle-kinder-bueno",
      "name": "Wafle Kinder & Crema de Avellana",
      "category": "wafles",
      "description": "Cubierto con crema de chocolate blanco, trozos de Kinder Bueno, sirope de caramelo y helado de chocolate.",
      "priceUSD": 7,
      "tags": [
        "Especial"
      ]
    },
    {
      "id": "malteada-artesanal-bruselas",
      "name": "Malteada Artesanal de Ferrero",
      "category": "malteadas",
      "description": "Helado artesanal batido con bombones Ferrero Rocher, borde de Nutella y crema batida.",
      "priceUSD": 5.5,
      "tags": [
        "Bebida Fría"
      ]
    }
  ],
  "managerKpis": {
      "activeReservations": 15,
    "capacityPercentage": 90,
    "todaySalesUSD": 940,
    "avgTicketUSD": 12
  },
  "sampleBookings": [
    {
      "id": "BRU-601",
      "clientName": "Yolanda Cárdenas",
      "details": "Fondue para Dos · Reserva Mesa",
      "time": "05:00 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 18
    },
    {
      "id": "BRU-602",
      "clientName": "Carlos Duque",
      "details": "2x Wafle Bruselas Supremo · Pick-Up",
      "time": "06:15 PM",
      "status": "en_mesa",
      "pax": 2,
      "totalUSD": 13
    },
    {
      "id": "BRU-603",
      "clientName": "Nathaly Mora",
      "details": "Mesa Cumpleaños Wafles (6 pax)",
      "time": "07:00 PM",
      "status": "pendiente",
      "pax": 6,
      "totalUSD": 42
    }
  ]
},

  {
  "slug": "momentossc",
  "batch": "dia7",
  "archetype": "gift-customizer",
  "name": "Momentos San Cristóbal",
  "handle": "momentossc_",
  "category": "Lounge de Celebraciones · Desayunos Sorpresa · Eventos Íntimos",
  "badgeText": "✨ #CelebraMomentos · Espacios Soñados & Detalles Únicos",
  "tagline": "El lugar perfecto para celebrar cumpleaños, desayunos sorpresa y momentos mágicos",
  "heroTitle": "Celebraciones íntimas, desayunos sorpresa y",
  "heroHighlight": "cotizador de eventos con pase QR",
  "heroSubtitle": "Diseña tu paquete de celebración o desayuno sorpresa: personaliza dedicatoria, globos, pastelería y agenda la fecha de entrega en minutos.",
  "logo": "/marcas/momentossc.jpg",
  "coverImage": "/marcas/momentossc-cover.jpg",
  "palette": {
    "primary": "#E11D48",
    "primaryHover": "#BE123C",
    "secondary": "#F43F5E",
    "accent": "#FDA4AF",
    "darkBg": "#170A10",
    "cardBg": "rgba(45, 15, 28, 0.85)",
    "textLight": "#FFF1F2",
    "textMuted": "#FECDD3",
    "border": "rgba(253, 164, 175, 0.25)",
    "glow": "rgba(225, 29, 72, 0.25)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Momentos San Cristóbal es el espacio boutique preferido para aniversarios, pedidas de mano, desayunos de cumpleaños y talleres en Táchira. Un ambiente cálido y fotogénico que transforma cualquier fecha en un recuerdo inolvidable.",
  "introStats": [
    {
      "label": "Eventos Realizados",
      "value": "350+",
      "detail": "Cumpleaños, pedidas de mano y baby showers"
    },
    {
      "label": "Boxes Sorpresa",
      "value": "100% Personalizados",
      "detail": "Con dedicatoria caligrafiada y globos"
    },
    {
      "label": "Reserva VIP",
      "value": "Pase QR",
      "detail": "Acceso privado garantizado para tu grupo"
    }
  ],
  "trustBadges": [
    "Coordinadora de Eventos Dedicada",
    "Decoración & Globos Incluidos",
    "Pagos Multimoneda Zelle y BCV"
  ],
  "whatsappPitchCopy": "Hola gente de Momentos! ✨ Cuando un cliente les pide cotizar un desayuno sorpresa o cumpleaños, ¿cuántos mensajes tienen que intercambiar para cuadrar fecha, hora y dedicatoria?\n\nLes armé una propuesta interactiva con sus paquetes para que el cliente elija detalles, agende su día y reciba confirmación al momento:\n👉 https://byte-bridge-tau.vercel.app/demos/momentossc\n\n¿Les muestro en 5 minutos cómo les liberaría horas de chat?",
  "address": "Urbanización Las Lomas / Pueblo Nuevo, San Cristóbal, Táchira",
  "mapsUrl": "https://maps.google.com/?q=Momentos+San+Cristobal",
  "hours": "Lunes a Sábado: 9:00 AM - 8:00 PM (Bajo Reserva)",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/momentossc_/",
  "bookingType": "evento-regalo",
    "bookingTitle": "Cotiza tu Celebración o Desayuno Sorpresa",
  "bookingSubtitle": "Elige tu paquete temático con fecha y hora garantizadas",
  "bookingOptions": [
    {
      "id": "desayuno-sorpresa",
      "name": "Box Desayuno Sorpresa Deluxe",
      "description": "Caja de madera con sándwich gourmet, waffles, jugo de naranja natural, rosas y tarjeta con dedicatoria.",
      "priceUSD": 25,
      "unit": "por arreglo",
      "badge": "El Más Pedido",
      "features": [
        "Tarjeta caligrafiada",
        "Globo con helio",
        "Entrega a domicilio puntual"
      ]
    },
    {
      "id": "paquete-cumpleanos",
      "name": "Celebración Cumpleaños Íntimo en Sala",
      "description": "Mesa decorada con globos, mini cake temático, tabla de quesos y brindis con vino espumante para 4 personas.",
      "priceUSD": 45,
      "unit": "paquete 4 personas",
      "badge": "Experiencia VIP",
      "features": [
        "Mesa decorada exclusiva",
        "Mini cake incluido",
        "Brindis con espumante"
      ]
    }
  ],
  "categories": [
    {
      "id": "celebraciones",
      "name": "Paquetes de Eventos",
      "icon": "🎂"
    },
    {
      "id": "desayunos",
      "name": "Desayunos Sorpresa",
      "icon": "🎁"
    },
    {
      "id": "tablas",
      "name": "Tablas & Picadas",
      "icon": "🧀"
    },
    {
      "id": "tortas",
      "name": "Tortas & Dulces",
      "icon": "🍰"
    }
  ],
  "menuItems": [
    {
      "id": "box-desayuno-deluxe",
      "name": "Box Desayuno Cumpleaños Momentos",
      "category": "desayunos",
      "description": "Croissant relleno de jamón serrano, bowl de frutas frescas, mini wafles con miel, café cold brew, jugo natural y rosas frescas.",
      "priceUSD": 25,
      "badge": "Top Regalo",
      "popular": true,
      "tags": [
        "Desayuno",
        "Regalo"
      ]
    },
    {
      "id": "paquete-cumpleanos-lounge",
      "name": "Paquete Celebración Cumpleaños (4 Pax)",
      "category": "celebraciones",
      "description": "Mesa reservada decorada con arco orgánico de globos, velita volcán, torta decorada y cóctel de bienvenida para los 4 invitados.",
      "priceUSD": 45,
      "badge": "Insignia",
      "popular": true,
      "tags": [
        "Celebración",
        "Sala"
      ]
    },
    {
      "id": "tabla-charcuteria-momentos",
      "name": "Tabla de Quesos & Frutas Momentos",
      "category": "tablas",
      "description": "Selección de quesos brie y madurados, jamón serrano, uvas sin semilla, fresas, frutos secos y galletas artesanales.",
      "priceUSD": 18,
      "popular": true,
      "tags": [
        "Picada"
      ]
    },
    {
      "id": "mini-cake-momentos",
      "name": "Bento Cake de Cumpleaños Personalizado",
      "category": "tortas",
      "description": "Torta pequeña de vainilla rellena de arequipe con mensaje manuscrito en buttercream a elección del cliente.",
      "priceUSD": 12,
      "tags": [
        "Torta"
      ]
    },
    {
      "id": "caja-dulce-fresas",
      "name": "Box de 12 Fresas Bañadas en Chocolate",
      "category": "desayunos",
      "description": "Fresas gigantes seleccionadas bañadas en chocolate blanco y de leche con detalles dorados comestibles.",
      "priceUSD": 15,
      "tags": [
        "Chocolates"
      ]
    },
    {
      "id": "alquiler-sala-taller",
      "name": "Alquiler de Espacio Privado (Por Hora)",
      "category": "celebraciones",
      "description": "Salón climatizado para talleres, lanzamientos de marca o sesiones fotográficas con mobiliario aesthetic.",
      "priceUSD": 30,
      "tags": [
        "Alquiler"
      ]
    }
  ],
  "managerKpis": {
      "activeReservations": 9,
    "capacityPercentage": 78,
    "todaySalesUSD": 680,
    "avgTicketUSD": 32
  },
  "sampleBookings": [
    {
      "id": "MOM-701",
      "clientName": "Karla Cárdenas",
      "details": "Celebración Cumpleaños 4 Pax · Sala",
      "time": "04:00 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 45
    },
    {
      "id": "MOM-702",
      "clientName": "Franklin Useche",
      "details": "Box Desayuno Sorpresa · Envío Pueblo Nuevo",
      "time": "08:00 AM",
      "status": "en_mesa",
      "pax": 1,
      "totalUSD": 25
    },
    {
      "id": "MOM-703",
      "clientName": "Mariángel Gómez",
      "details": "Alquiler Sala para Taller de Maquillaje (3h)",
      "time": "02:00 PM",
      "status": "pendiente",
      "pax": 8,
      "totalUSD": 90
    }
  ]
},

  {
  "slug": "fratellopizzas_sc",
  "batch": "dia7",
  "archetype": "direct-delivery",
  "name": "Fratello Pizzas Artesanales",
  "handle": "fratellopizzas.sc",
  "category": "Pizzería al Horno de Piedra · Masa Madre · Delivery & Comanda QR",
  "badgeText": "🍕 #FratelloPizzas · Masa Fina, Borde Inflado & Queso Fundido",
  "tagline": "Auténtica pizza artesanal al horno de piedra con ingredientes frescos en San Cristóbal",
  "heroTitle": "Pizzas artesanales al horno de piedra y",
  "heroHighlight": "delivery directo sin sobreprecio",
  "heroSubtitle": "Pide tus pizzas familiares, calzones y panes de ajo directo a nuestra pizzería con cálculo automático a tasa oficial BCV y despacho express.",
  "logo": "/marcas/fratellopizzas_sc.jpg",
  "coverImage": "/marcas/fratellopizzas_sc-cover.jpg",
  "palette": {
    "primary": "#E11D48",
    "primaryHover": "#BE123C",
    "secondary": "#16A34A",
    "accent": "#22C55E",
    "darkBg": "#15080C",
    "cardBg": "rgba(40, 15, 22, 0.85)",
    "textLight": "#FFF1F2",
    "textMuted": "#FECDD3",
    "border": "rgba(34, 197, 94, 0.25)",
    "glow": "rgba(225, 29, 72, 0.2)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Fratello Pizzas rescata la tradición de la pizza napolitana y contemporánea en San Cristóbal. Masa fermentada durante 48 horas, salsa de tomates San Marzano y cocción a más de 400°C en horno de piedra.",
  "introStats": [
    {
      "label": "Masa Fermentada",
      "value": "48 Horas",
      "detail": "Ligera, crocante y de fácil digestión"
    },
    {
      "label": "Horno de Piedra",
      "value": "400°C",
      "detail": "Borde inflado y queso mozzarella fundido al punto"
    },
    {
      "label": "Comisión Delivery",
      "value": "0%",
      "detail": "Canal propio directo a tu WhatsApp"
    }
  ],
  "trustBadges": [
    "Horno de Piedra a la Leña",
    "Ingredientes de Calidad Superior",
    "Entrega Rápida en Empaque Térmico"
  ],
  "whatsappPitchCopy": "Buenas noches equipo de Fratello Pizzas! 🍕 Los fines de semana en la noche, ¿cuántos clientes se cansan de esperar respuesta en WhatsApp para saber qué pizzas tienen y cuánto es en bolívares?\n\nLes preparé un menú directo con sus pizzas para que el cliente pida en 3 clics y el pedido les llegue listo a cocina sin errores de cálculo:\n👉 https://byte-bridge-tau.vercel.app/demos/fratellopizzas_sc\n\n¿Les muestro en 5 minutos cómo les evitaría perder pedidos?",
  "address": "Av. 19 de Abril frente al Parque Quinimarí, San Cristóbal, Táchira",
  "mapsUrl": "https://maps.google.com/?q=Fratello+Pizzas+San+Cristobal",
  "hours": "Miércoles a Lunes: 5:00 PM - 11:00 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/fratellopizzas.sc/",
  "bookingType": "delivery-mesa",
    "bookingTitle": "Pide tu Pizza a Domicilio o Mesa en Sala",
  "bookingSubtitle": "Elige sabores clásicos o especiales con masa artesanal",
  "bookingOptions": [
    {
      "id": "delivery-pizza",
      "name": "Delivery a Casa Caliente",
      "description": "Envío express en caja térmica para conservar el queso derretido y borde crujiente.",
      "priceUSD": 2,
      "unit": "tarifa de envío",
      "badge": "A Domicilio",
      "features": [
        "Caja térmica sellada",
        "Confirmación automática",
        "Pago móvil o divisas"
      ]
    },
    {
      "id": "mesa-pizzeria",
      "name": "Mesa en Pizzería",
      "description": "Auto-pedido en sala escaneando el código QR de la mesa con entrega al minuto.",
      "priceUSD": 0,
      "unit": "sin costo",
      "badge": "En Sala",
      "features": [
        "Orden directa a pizzero",
        "Cero colas en caja",
        "División de cuenta fácil"
      ]
    }
  ],
  "categories": [
    {
      "id": "especiales",
      "name": "Pizzas de la Casa",
      "icon": "🍕"
    },
    {
      "id": "clasicas",
      "name": "Pizzas Tradicionales",
      "icon": "🧀"
    },
    {
      "id": "calzones",
      "name": "Calzones & Panes",
      "icon": "🥖"
    },
    {
      "id": "bebidas",
      "name": "Bebidas & Cervezas",
      "icon": "🥤"
    }
  ],
  "menuItems": [
    {
      "id": "pizza-fratello-especial",
      "name": "Pizza Fratello de Autor (Grande)",
      "category": "especiales",
      "description": "Salsa de tomate casera, mozzarella fior di latte, tocineta ahumada, jamón serrano, champiñones salteados y rúgula fresca con reducción balsámica.",
      "priceUSD": 13,
      "badge": "Insignia",
      "popular": true,
      "tags": [
        "Especialidad",
        "Gourmet"
      ]
    },
    {
      "id": "pizza-pepperoni-lovers",
      "name": "Pepperoni Supremo Familiar",
      "category": "clasicas",
      "description": "Doble porción de pepperoni crujiente, queso mozzarella fundido y orégano seco sobre masa fina y crocante.",
      "priceUSD": 11.5,
      "popular": true,
      "tags": [
        "Pepperoni",
        "Top Ventas"
      ]
    },
    {
      "id": "pizza-margherita-bufala",
      "name": "Margherita Tradizionale",
      "category": "clasicas",
      "description": "Tomates San Marzano triturados, mozzarella fresca, hojas de albahaca fresca y chorrito de aceite de oliva extra virgen.",
      "priceUSD": 9.5,
      "tags": [
        "Vegetariana",
        "Clásica"
      ]
    },
    {
      "id": "calzone-cuatro-quesos",
      "name": "Calzone Relleno 4 Quesos & Jamón",
      "category": "calzones",
      "description": "Masa plegada y horneada al punto rellena de mozzarella, provolone, gorgonzola, queso crema y jamón pierna.",
      "priceUSD": 8.5,
      "popular": true,
      "tags": [
        "Calzone"
      ]
    },
    {
      "id": "pan-ajo-gratinado",
      "name": "Pan de Ajo con Mozzarella Gratinada",
      "category": "calzones",
      "description": "Pan de pizza artesanal pincelado con mantequilla de ajo y perejil, cubierto de queso derretido.",
      "priceUSD": 4.5,
      "tags": [
        "Entrada"
      ]
    },
    {
      "id": "pizza-cuatro-estaciones",
      "name": "Pizza Cuatro Estaciones",
      "category": "especiales",
      "description": "Cuatro cuadrantes de sabor: jamón cocido, alcachofas, champiñones y aceitunas negras con queso mozzarella.",
      "priceUSD": 12,
      "tags": [
        "Variedad"
      ]
    }
  ],
  "managerKpis": {
      "activeReservations": 18,
    "capacityPercentage": 86,
    "todaySalesUSD": 1380,
    "avgTicketUSD": 22
  },
  "sampleBookings": [
    {
      "id": "FRA-801",
      "clientName": "José Gregorio Colmenares",
      "details": "Pizza Fratello Grande + Pan de Ajo · Delivery",
      "time": "07:15 PM",
      "status": "confirmada",
      "pax": 3,
      "totalUSD": 19.5
    },
    {
      "id": "FRA-802",
      "clientName": "Mariana Barillas",
      "details": "2x Pepperoni Supremo · Mesa Sala (5 pax)",
      "time": "08:30 PM",
      "status": "en_mesa",
      "pax": 5,
      "totalUSD": 28
    },
    {
      "id": "FRA-803",
      "clientName": "David Zambrano",
      "details": "Calzone 4 Quesos · Pick-Up",
      "time": "09:00 PM",
      "status": "pendiente",
      "pax": 1,
      "totalUSD": 8.5
    }
  ]
},

  {
  "slug": "kala_cafesc",
  "batch": "dia7",
  "archetype": "table-ordering",
  "name": "Kala Café de Origen",
  "handle": "kala.cafesc",
  "category": "Café de Origen Tachirense · Pastelería Artesanal · Terraza & Brunch",
  "badgeText": "🌿 #KalaCafe · Granos de Altura & Dulces Hechos con Amor",
  "tagline": "El sabor auténtico de la montaña andina en cada taza de café y postre artesanal",
  "heroTitle": "Café de origen tachirense, repostería y",
  "heroHighlight": "auto-pedido en terraza con QR",
  "heroSubtitle": "Disfruta de la brisa andina en terraza: escanea el código QR en mesa, ordena lattes de autor y sándwiches gourmet al instante.",
  "logo": "/marcas/kala_cafesc.jpg",
  "coverImage": "/marcas/kala_cafesc-cover.jpg",
  "palette": {
    "primary": "#059669",
    "primaryHover": "#047857",
    "secondary": "#10B981",
    "accent": "#34D399",
    "darkBg": "#061811",
    "cardBg": "rgba(6, 40, 28, 0.85)",
    "textLight": "#ECFDF5",
    "textMuted": "#A7F3D0",
    "border": "rgba(52, 211, 153, 0.25)",
    "glow": "rgba(5, 150, 105, 0.2)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Kala Café es un homenaje al café andino de altura y a la pastelería hecha en casa. Un rincón acogedor en San Cristóbal con vista privilegiada, donde las tardes se acompañan de café bombón, tortas de queso y mocktails herbales.",
  "introStats": [
    {
      "label": "Altura de Cultivo",
      "value": "1.650 msnm",
      "detail": "Micro-lotes de café de Rubio y Bramón"
    },
    {
      "label": "Tartas del Día",
      "value": "8+",
      "detail": "Repostería horneada cada mañana sin conservantes"
    },
    {
      "label": "Velocidad de Sala",
      "value": "QR Express",
      "detail": "Comanda enviada a barra al instante"
    }
  ],
  "trustBadges": [
    "Café 100% Tachirense de Origen",
    "Pastelería Recién Horneada",
    "Terraza con Vista a la Montaña"
  ],
  "whatsappPitchCopy": "Buenas tardes equipo de Kala Café! 🌿 Cuando la terraza se llena en la tarde, ¿cuántos comensales se quedan esperando varios minutos a que alguien les acerque la carta?\n\nLes preparé una prueba con sus cafés de altura y repostería para que el comensal pida directo desde su mesa escaneando un código QR:\n👉 https://byte-bridge-tau.vercel.app/demos/kala_cafesc\n\n¿Les muestro en 5 minutos cómo agiliza la rotación de mesas?",
  "address": "Sector Pirineos / Pueblo Nuevo, San Cristóbal, Táchira",
  "mapsUrl": "https://maps.google.com/?q=Kala+Cafe+San+Cristobal",
  "hours": "Martes a Domingo: 2:00 PM - 9:30 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/kala.cafesc/",
  "bookingType": "comanda-terraza",
    "bookingTitle": "Reserva de Terraza & Auto-Pedido con QR",
  "bookingSubtitle": "Comanda tu café de altura y postres favoritos sin esperas",
  "bookingOptions": [
    {
      "id": "mesa-terraza-kala",
      "name": "Mesa Terraza Mirador",
      "description": "Mesa al aire libre con vista a la cordillera y comanda digital directa por QR.",
      "priceUSD": 0,
      "unit": "sin costo",
      "badge": "Vista Andina",
      "features": [
        "Menú QR en mesa",
        "Servicio a la mesa ágil",
        "Wi-Fi libre"
      ]
    },
    {
      "id": "combo-merienda",
      "name": "Combo Merienda Andina para Dos",
      "description": "2 Cafés especiales a elección + 2 Porciones de tarta artesanal + Agua mineral.",
      "priceUSD": 14,
      "unit": "para 2 personas",
      "badge": "Recomendado",
      "features": [
        "2 Cafés de especialidad",
        "2 Porciones de torta",
        "Mesa reservada"
      ]
    }
  ],
  "categories": [
    {
      "id": "cafes",
      "name": "Cafés de Altura",
      "icon": "☕"
    },
    {
      "id": "tortas",
      "name": "Repostería Artesanal",
      "icon": "🍰"
    },
    {
      "id": "salados",
      "name": "Sándwiches & Salados",
      "icon": "🥪"
    },
    {
      "id": "frias",
      "name": "Bebidas Frías & Mocktails",
      "icon": "🍹"
    }
  ],
  "menuItems": [
    {
      "id": "cafe-bombon-kala",
      "name": "Café Bombón Kala Tricolor",
      "category": "cafes",
      "description": "Capas de leche condensada artesanal, espresso doble de altura y espuma cremosa de leche con toque de canela.",
      "priceUSD": 3.5,
      "badge": "Favorito",
      "popular": true,
      "tags": [
        "Insignia",
        "Café Dulce"
      ]
    },
    {
      "id": "cheesecake-frutos-rojos",
      "name": "Cheesecake Horneado con Frutos Rojos",
      "category": "tortas",
      "description": "Tarta de queso crema suave horneada sobre base de galleta de mantequilla, bañada en coulis de fresas y moras andinas.",
      "priceUSD": 5.5,
      "badge": "Top Ventas",
      "popular": true,
      "tags": [
        "Postre",
        "Cheesecake"
      ]
    },
    {
      "id": "sandwich-roastbeef-kala",
      "name": "Sándwich de Roast Beef & Cebollas Caramelizadas",
      "category": "salados",
      "description": "Pan ciabatta rústico con láminas de carne magra al horno, queso suizo, rúgula y mayonesa de mostaza dijon.",
      "priceUSD": 7,
      "popular": true,
      "tags": [
        "Gourmet",
        "Salado"
      ]
    },
    {
      "id": "frappe-caramelo-salado",
      "name": "Frappé de Café con Caramelo Salado",
      "category": "frias",
      "description": "Café espresso batido con hielo, leche entera, jarabe de caramelo salado casero y chantilly.",
      "priceUSD": 4.5,
      "tags": [
        "Frappé",
        "Frío"
      ]
    },
    {
      "id": "torta-zanahoria-nueces",
      "name": "Carrot Cake Andina con Nueces",
      "category": "tortas",
      "description": "Bizcocho húmedo de zanahoria, nueces y especias con cobertura clásica de frosting de queso crema.",
      "priceUSD": 5,
      "tags": [
        "Torta Clásica"
      ]
    },
    {
      "id": "te-chai-artesanal",
      "name": "Chai Latte Especiado Caliente",
      "category": "cafes",
      "description": "Té negro infusionado con canela, clavo, cardamomo y jengibre fresco con leche cremada.",
      "priceUSD": 3.5,
      "tags": [
        "Té",
        "Sin Café"
      ]
    }
  ],
  "managerKpis": {
      "activeReservations": 7,
    "capacityPercentage": 80,
    "todaySalesUSD": 760,
    "avgTicketUSD": 11
  },
  "sampleBookings": [
    {
      "id": "KAL-901",
      "clientName": "Silvia Colmenares",
      "details": "Combo Merienda para Dos · Terraza",
      "time": "04:30 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 14
    },
    {
      "id": "KAL-902",
      "clientName": "Manuel Chacón",
      "details": "Mesa Terraza (4 pax) · Café y Postres",
      "time": "05:45 PM",
      "status": "en_mesa",
      "pax": 4,
      "totalUSD": 26
    },
    {
      "id": "KAL-903",
      "clientName": "Diana Rodríguez",
      "details": "Cheesecake + Café Bombón · Pick-Up",
      "time": "06:15 PM",
      "status": "pendiente",
      "pax": 1,
      "totalUSD": 9
    }
  ]
},

  {
  "slug": "pa_picar_mas",
  "batch": "dia7",
  "archetype": "gift-customizer",
  "name": "Pa' Picar Más",
  "handle": "pa_picar.mas",
  "category": "Catering de Pasapalos · Tablas Gourmet · Bandejas para Eventos",
  "badgeText": "🥟 #PaPicarMas · Los Mejores Pasapalos & Picadas para Fiestas",
  "tagline": "Bandejas de pasapalos calientes, fríos y tablas de picadas para celebrar en grande",
  "heroTitle": "Pasapalos crujientes para tus eventos y",
  "heroHighlight": "cotizador de bandejas en segundos",
  "heroSubtitle": "Calcula y personaliza las bandejas de pasapalos para tu fiesta o reunión: tequeños, pastelitos, alitas y empanaditas con entrega programada.",
  "logo": "/marcas/pa_picar_mas.jpg",
  "coverImage": "/marcas/pa_picar_mas-cover.jpg",
  "palette": {
    "primary": "#F59E0B",
    "primaryHover": "#D97706",
    "secondary": "#0284C7",
    "accent": "#38BDF8",
    "darkBg": "#13151D",
    "cardBg": "rgba(25, 30, 45, 0.85)",
    "textLight": "#FFFBEB",
    "textMuted": "#FDE68A",
    "border": "rgba(245, 158, 11, 0.25)",
    "glow": "rgba(245, 158, 11, 0.25)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Pa' Picar Más es la solución líder de catering de pasapalos y picadas en Táchira. Especialistas en bandejas surtidas para cumpleaños, reuniones corporativas, bodas y encuentros familiares con entrega caliente y puntual.",
  "introStats": [
    {
      "label": "Pasapalos Elaborados",
      "value": "50.000+",
      "detail": "Tequeños, empanaditas, tartaletas y pastelitos"
    },
    {
      "label": "Bandejas para Eventos",
      "value": "25 a 100",
      "detail": "Combos ajustados al número de invitados"
    },
    {
      "label": "Entrega Programada",
      "value": "Puntual",
      "detail": "Llegan calientes listos para servir en mesa"
    }
  ],
  "trustBadges": [
    "Entrega Caliente y Sellada",
    "Ingredientes de Calidad Superior",
    "Cotización Automática por Cantidad"
  ],
  "whatsappPitchCopy": "Hola amigos de Pa' Picar Más! 🥟 Cuando les piden cotización para una fiesta o reunión, ¿cuántos audios y mensajes tienen que cruzar para ponerse de acuerdo en cantidades, salsas y hora de despacho?\n\nLes armé un cotizador con sus bandejas para que el cliente calcule su fiesta y agende la entrega en 3 clics:\n👉 https://byte-bridge-tau.vercel.app/demos/pa_picar_mas\n\n¿Les muestro en 5 minutos cómo les facilitaría cotizar eventos?",
  "address": "Zona Metropolitana de San Cristóbal / Táriba, Táchira",
  "mapsUrl": "https://maps.google.com/?q=Pa+Picar+San+Cristobal",
  "hours": "Lunes a Domingo: 8:00 AM - 8:00 PM (Pedidos con 24h anticipación)",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/pa_picar.mas/",
  "bookingType": "catering-fiestas",
    "bookingTitle": "Cotiza tu Bandeja de Pasapalos para Fiestas",
  "bookingSubtitle": "Elige la cantidad de piezas y fecha de despacho para tu reunión",
  "bookingOptions": [
    {
      "id": "combo-fiesta-50",
      "name": "Bandeja Fiesta 50 Pasapalos",
      "description": "50 piezas calientes surtidas: 20 tequeños, 15 empanaditas de carne, 15 pastelitos de queso con 2 salsas grandes.",
      "priceUSD": 22,
      "unit": "bandeja 50 pzas",
      "badge": "Más Vendido",
      "features": [
        "50 Pasapalos surtidos",
        "2 Salsas caseras (Tártara y Ajo)",
        "Empaque térmico para servir"
      ]
    },
    {
      "id": "combo-mega-100",
      "name": "Bandeja Mega Evento 100 Piezas",
      "description": "100 piezas mixtas: tequeños, pastelitos, bolitas de carne, empanaditas y salchichas hojaldradas con 4 salsas.",
      "priceUSD": 40,
      "unit": "bandeja 100 pzas",
      "badge": "Para Fiestas Grandes",
      "features": [
        "100 Piezas surtidas",
        "4 Salsas a elección",
        "Despacho programado garantizado"
      ]
    }
  ],
  "categories": [
    {
      "id": "bandejas",
      "name": "Bandejas para Fiestas",
      "icon": "🎉"
    },
    {
      "id": "tequenos",
      "name": "Tequeños & Pastelitos",
      "icon": "🥟"
    },
    {
      "id": "alitas",
      "name": "Alitas & Nuggets",
      "icon": "🍗"
    },
    {
      "id": "tablas",
      "name": "Tablas Frías de Quesos",
      "icon": "🧀"
    }
  ],
  "menuItems": [
    {
      "id": "bandeja-fiesta-50",
      "name": "Bandeja Fiesta 50 Pasapalos Calientes",
      "category": "bandejas",
      "description": "20 Tequeños de queso blanco, 15 empanaditas doradas de carne mechada, 15 pastelitos de pollo y 2 dips tártara.",
      "priceUSD": 22,
      "badge": "Top Ventas",
      "popular": true,
      "tags": [
        "Bandeja",
        "Fiesta"
      ]
    },
    {
      "id": "bandeja-mega-100",
      "name": "Bandeja Mega Celebración 100 Piezas",
      "category": "bandejas",
      "description": "El combo definitivo: 35 tequeños, 25 pastelitos de queso, 20 empanaditas y 20 bolitas de carne con salsa tártara y picante suave.",
      "priceUSD": 40,
      "badge": "Mejor Precio",
      "popular": true,
      "tags": [
        "Mega Fiesta"
      ]
    },
    {
      "id": "caja-tequenos-gourmet-30",
      "name": "Caja de Tequeños Artesanales x30",
      "category": "tequenos",
      "description": "30 Tequeños dorados rellenos de queso blanco llanero en masa crujiente con dip de papelón con maracuyá.",
      "priceUSD": 13,
      "popular": true,
      "tags": [
        "Tequeños"
      ]
    },
    {
      "id": "alitas-bbq-crispy-12",
      "name": "Combo Alitas Glaseadas BBQ x12",
      "category": "alitas",
      "description": "12 Alitas jugosas cocidas al horno y glaseadas con salsa barbacoa artesanal con bastones de apio y aderezo blue cheese.",
      "priceUSD": 11,
      "tags": [
        "Alitas"
      ]
    },
    {
      "id": "tabla-charcuteria-picar",
      "name": "Tabla de Picada Gourmet Fría",
      "category": "tablas",
      "description": "Quesos madurados, salchichón, jamón de pierna, aceitunas rellenas, frutos secos y grisines de pan.",
      "priceUSD": 24,
      "popular": true,
      "tags": [
        "Tabla Gourmet"
      ]
    },
    {
      "id": "pastelitos-andinos-20",
      "name": "Caja de Pastelitos Andinos Tradicionales x20",
      "category": "tequenos",
      "description": "Pastelitos tachirenses de masa crocante rellenos de carne con arroz y huevo o pollo guisado.",
      "priceUSD": 12,
      "tags": [
        "Táchira",
        "Tradición"
      ]
    }
  ],
  "managerKpis": {
      "activeReservations": 16,
    "capacityPercentage": 94,
    "todaySalesUSD": 1250,
    "avgTicketUSD": 36
  },
  "sampleBookings": [
    {
      "id": "PIC-1001",
      "clientName": "Carolina Vivas",
      "details": "Bandeja Fiesta 50 Pzas · Despacho Cumpleaños",
      "time": "06:00 PM",
      "status": "confirmada",
      "pax": 15,
      "totalUSD": 24
    },
    {
      "id": "PIC-1002",
      "clientName": "José Alberto Sánchez",
      "details": "Bandeja Mega 100 Pzas · Evento Corporativo",
      "time": "07:30 PM",
      "status": "en_mesa",
      "pax": 30,
      "totalUSD": 42
    },
    {
      "id": "PIC-1003",
      "clientName": "Valeria Parra",
      "details": "Caja Tequeños x30 + Alitas BBQ · Pick-Up",
      "time": "05:00 PM",
      "status": "pendiente",
      "pax": 8,
      "totalUSD": 24
    }
  ]
},

  // 🌟 DÍA 8 — 9 Soluciones Comerciales (Caracas, Barquisimeto & Venezuela)
  {
  "slug": "rutarestaurante",
  "batch": "dia8",
  "archetype": "table-ordering",
  "name": "RUTA Restaurante Comfort Food",
  "handle": "rutarestaurante",
  "category": "Comfort Food · Burgers Gourmet · Costillas & Cervezas",
  "badgeText": "🍴 #RutaComfortFood · Cocina Reconfortante & Cervezas Artesanales",
  "tagline": "El punto de encuentro para disfrutar hamburguesas de autor, costillas BBQ y picadas",
  "heroTitle": "Platos reconfortantes, porciones generosas y",
  "heroHighlight": "pedido en mesa por código QR",
  "heroSubtitle": "Escanea el código QR de tu mesa, explora nuestra carta de burgers y cervezas, y envía la orden a cocina sin esperar mesoneros.",
  "logo": "/marcas/rutarestaurante.jpg",
  "coverImage": "/marcas/rutarestaurante-cover.jpg",
  "palette": {
    "primary": "#0284C7",
    "primaryHover": "#0369A1",
    "secondary": "#D97706",
    "accent": "#38BDF8",
    "darkBg": "#05131D",
    "cardBg": "rgba(10, 30, 45, 0.85)",
    "textLight": "#F0F9FF",
    "textMuted": "#BAE6FD",
    "border": "rgba(56, 189, 248, 0.25)",
    "glow": "rgba(2, 132, 199, 0.2)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "RUTA Restaurante es el templo del confort food contemporáneo: recetas caseras elevadas a la excelencia, hamburguesas jugosas con pan artesanal, costillas ahumadas que se desprenden del hueso y ambiente relajado para compartir con amigos o en familia.",
  "introStats": [
    {
      "label": "Cocción Lenta",
      "value": "8 Horas",
      "detail": "Costillas glaseadas a fuego lento"
    },
    {
      "label": "Carne Certificada",
      "value": "100% Angus",
      "detail": "Blend exclusivo molido diariamente"
    },
    {
      "label": "Tiempo en Mesa",
      "value": "QR Rápido",
      "detail": "Sin esperas para pedir comida o bebida"
    }
  ],
  "trustBadges": [
    "Cocina Abierta Continua",
    "Comanda Directa a Cocina",
    "Tasa BCV Oficial en Tiempo Real"
  ],
  "whatsappPitchCopy": "Hola equipo de RUTA Restaurante! 🍴 ¿Cuántos clientes se impacientan en sus mesas esperando que un mesonero les tome otra ronda de cervezas o hamburguesas cuando el salón se llena en horas pico?\\n\\nLes preparé un ejemplo exacto con su menú para que cada mesa pida directo desde el teléfono con código QR, vea el total en bolívares a tasa oficial y la orden les llegue limpia a cocina sin esperas:\\n👉 https://byte-bridge-tau.vercel.app/demos/rutarestaurante\\n\\n¿Les muestro en 5 minutos cómo funciona?",
  "address": "Zona Gastronómica Principal, Caracas / Miranda",
  "mapsUrl": "https://maps.google.com/?q=Ruta+Restaurante+Venezuela",
  "hours": "Martes a Domingo: 12:00 PM - 11:00 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/rutarestaurante/",
  "bookingType": "comanda-mesa",
  "bookingTitle": "Comanda en Mesa & Reserva de Grupo",
  "bookingSubtitle": "Ordena en sala al minuto o asegura mesa para tu reunión",
  "bookingOptions": [
    {
      "id": "mesa-comanda",
      "name": "Mesa en Sala Comfort",
      "description": "Auto-pedido en mesa escaneando código QR con entrega directa del camarero.",
      "priceUSD": 0,
      "unit": "sin costo",
      "badge": "En Sala",
      "features": [
        "Menú QR en mesa",
        "División de cuenta fácil",
        "Servicio rápido"
      ]
    },
    {
      "id": "mesa-amigos",
      "name": "Mesa para Grupos (6+ pax)",
      "description": "Mesa amplia reservada con combo de alitas y tabla de picadas lista a la llegada.",
      "priceUSD": 15,
      "unit": "abono consumible",
      "badge": "Para Grupos",
      "features": [
        "Ubicación preferencial",
        "1 Ración de alitas incluida",
        "Atención prioritaria"
      ]
    }
  ],
  "categories": [
    {
      "id": "burgers",
      "name": "Burgers Comfort",
      "icon": "🍔"
    },
    {
      "id": "ribs",
      "name": "Costillas & Ahumados",
      "icon": "🍖"
    },
    {
      "id": "picadas",
      "name": "Entradas para Picar",
      "icon": "🍟"
    },
    {
      "id": "bebidas",
      "name": "Cervezas & Cócteles",
      "icon": "🍻"
    }
  ],
  "menuItems": [
    {
      "id": "ruta-monster-burger",
      "name": "RUTA Monster Bacon Double",
      "category": "burgers",
      "description": "Doble carne Angus 150g, triple queso cheddar madurado, tocineta crocante caramelizada y salsa secreta RUTA en pan brioche artesanal.",
      "priceUSD": 11.5,
      "badge": "Insignia",
      "popular": true,
      "tags": [
        "Angus",
        "Favorita"
      ]
    },
    {
      "id": "costillas-bbq-glaze",
      "name": "Baby Back Ribs Ahumadas (Full Rack)",
      "category": "ribs",
      "description": "Costillas de cerdo horneadas 8 horas a baja temperatura, glaseadas con salsa BBQ casera al bourbon y papas rústicas.",
      "priceUSD": 18.5,
      "popular": true,
      "tags": [
        "Ahumado",
        "Especialidad"
      ]
    },
    {
      "id": "ruta-loaded-nachos",
      "name": "Nachos RUTA Supremos",
      "category": "picadas",
      "description": "Totopos crocantes con queso fundido, carne mechada sazonada, frijoles negros, pico de gallo, guacamole fresco y crema agria.",
      "priceUSD": 9.5,
      "popular": true,
      "tags": [
        "Para Compartir"
      ]
    },
    {
      "id": "crispy-chicken-burger",
      "name": "Crispy Sriracha Chicken Burger",
      "category": "burgers",
      "description": "Pechuga crujiente marinada en buttermilk, ensalada coleslaw fresca, pepinillos y mayonesa spicy sriracha.",
      "priceUSD": 9,
      "tags": [
        "Pollo"
      ]
    },
    {
      "id": "alitas-ruta-12",
      "name": "Alitas Glaseadas x12 Piezas",
      "category": "picadas",
      "description": "Alitas doradas en salsa BBQ dulce o picante búfalo, servidas con apio fresco y aderezo ranch de la casa.",
      "priceUSD": 10,
      "tags": [
        "Alitas"
      ]
    },
    {
      "id": "jarra-cerveza-artesanal",
      "name": "Jarra de Cerveza Artesanal 1.5L",
      "category": "bebidas",
      "description": "Cerveza rubia o IPA bien helada servida en jarra de vidrio esmerilada con 4 vasos fríos.",
      "priceUSD": 8.5,
      "tags": [
        "Bebidas"
      ]
    }
  ],
  "managerKpis": {
    "activeReservations": 12,
    "capacityPercentage": 84,
    "todaySalesUSD": 1340,
    "avgTicketUSD": 26
  },
  "sampleBookings": [
    {
      "id": "RUT-101",
      "clientName": "Eduardo Castillo",
      "details": "Mesa Comfort (4 pax) · Almuerzo",
      "time": "01:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 46
    },
    {
      "id": "RUT-102",
      "clientName": "Valeria Mendoza",
      "details": "Mesa Grupo (8 pax) · After-Office",
      "time": "07:30 PM",
      "status": "en_mesa",
      "pax": 8,
      "totalUSD": 110
    },
    {
      "id": "RUT-103",
      "clientName": "Ricardo Padrón",
      "details": "Baby Back Ribs + Monster Burger · Takeaway",
      "time": "08:15 PM",
      "status": "pendiente",
      "pax": 2,
      "totalUSD": 30
    }
  ]
},

  {
  "slug": "vistabarccs",
  "batch": "dia8",
  "archetype": "gourmet-booking",
  "name": "Vista Bar Caracas Rooftop",
  "handle": "vistabarccs",
  "category": "Rooftop Lounge · Sunset & Ávila · Coctelería de Autor & Sushi",
  "badgeText": "🌆 #LaMejorVista · Terraza Panorámica al Ávila & Noches de DJ",
  "tagline": "El rooftop con la vista más imponente de Caracas, alta coctelería y gastronomía fusión",
  "heroTitle": "Atardeceres frente al Ávila, coctelería y",
  "heroHighlight": "reserva de mesa con vista garantizada",
  "heroSubtitle": "Asegura tu mesa en primera fila para el sunset o la noche, preselecciona tus cócteles y recibe confirmación con pase digital de acceso inmediato.",
  "logo": "/marcas/vistabarccs.jpg",
  "coverImage": "/marcas/vistabarccs-cover.jpg",
  "palette": {
    "primary": "#E11D48",
    "primaryHover": "#BE123C",
    "secondary": "#475569",
    "accent": "#F43F5E",
    "darkBg": "#0B0B0E",
    "cardBg": "rgba(25, 20, 26, 0.85)",
    "textLight": "#FFF1F2",
    "textMuted": "#FECDD3",
    "border": "rgba(244, 63, 94, 0.25)",
    "glow": "rgba(225, 29, 72, 0.25)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Vista Bar Caracas es la terraza en las alturas más codiciada de la capital. Situada con vista frontal sin obstáculos al Parque Nacional El Ávila, combina sesiones de DJ internacionales, barra de mixología premium y un menú de sushi rolls y tapas contemporáneas.",
  "introStats": [
    {
      "label": "Vista al Ávila",
      "value": "Panorámica",
      "detail": "Sin obstáculos frente a la montaña"
    },
    {
      "label": "Hora Sunset",
      "value": "5:30 PM",
      "detail": "Atardeceres mágicos con música en vivo"
    },
    {
      "label": "Acceso VIP",
      "value": "Pase QR",
      "detail": "Entrada sin cola directo al ascensor"
    }
  ],
  "trustBadges": [
    "Mesa en Primera Fila Garantizada",
    "Mixología de Clase Mundial",
    "Valet Parking & Seguridad Privada"
  ],
  "whatsappPitchCopy": "Hola equipo de Vista Bar Caracas! 🌆 ¿Cuántos clientes VIP se les quedan sin mesa para el atardecer o noche de fin de semana simplemente porque el chat de WhatsApp se satura y no dan abasto para confirmar?\\n\\nLes preparé una solución directa con su concepto donde el cliente reserva su mesa en primera fila frente al Ávila, recibe su pase digital con código QR para entrar sin colas y ustedes controlan el aforo en tiempo real:\\n👉 https://byte-bridge-tau.vercel.app/demos/vistabarccs\\n\\n¿Les muestro en 5 minutos cómo funciona?",
  "address": "Piso Rooftop Torre Financiera, Las Mercedes / Altamira, Caracas",
  "mapsUrl": "https://maps.google.com/?q=Vista+Bar+Caracas",
  "hours": "Miércoles a Domingo: 5:00 PM - 3:00 AM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/vistabarccs/",
  "bookingType": "reserva-gourmet",
  "bookingTitle": "Reserva de Mesas Sunset & VIP Lounge",
  "bookingSubtitle": "Elige tu ubicación preferencial con confirmación digital",
  "bookingOptions": [
    {
      "id": "mesa-front-avila",
      "name": "Mesa Frontal al Ávila (Sunset)",
      "description": "Ubicación en primera línea de baranda con vista panorámica abierta al Ávila durante el atardecer.",
      "priceUSD": 30,
      "unit": "consumo mínimo",
      "badge": "Más Exclusiva",
      "features": [
        "Vista 180° garantizada",
        "Copa de espumante bienvenida",
        "Pase QR directo"
      ],
      "maxCapacity": 4
    },
    {
      "id": "lounge-dj-vip",
      "name": "Lounge VIP Zona DJ",
      "description": "Muebles lounge confortables cerca de la cabina del DJ para grupos de amigos y noche de fiesta.",
      "priceUSD": 50,
      "unit": "consumo mínimo",
      "badge": "Noche de Fiesta",
      "features": [
        "Servicio de botellas",
        "Mesa para 6 a 8 personas",
        "Acceso prioritario"
      ],
      "maxCapacity": 8
    }
  ],
  "categories": [
    {
      "id": "cocteles",
      "name": "Mixología de Altura",
      "icon": "🍸"
    },
    {
      "id": "sushi",
      "name": "Sushi & Rolls",
      "icon": "🍣"
    },
    {
      "id": "tapas",
      "name": "Tapas & Crudos",
      "icon": "🍤"
    },
    {
      "id": "botellas",
      "name": "Servicio de Botellas",
      "icon": "🍾"
    }
  ],
  "menuItems": [
    {
      "id": "coctel-avila-sunset",
      "name": "Ávila Sunset Signature",
      "category": "cocteles",
      "description": "Gin infusionado con pétalos de rosa, licor de flor de saúco, reducción de maracuyá y burbujas de cava brut.",
      "priceUSD": 10,
      "badge": "Insignia",
      "popular": true,
      "tags": [
        "Signature",
        "Sunset"
      ]
    },
    {
      "id": "roll-vista-trufa",
      "name": "Vista Truffled Salmon Roll (10 bocados)",
      "category": "sushi",
      "description": "Relleno de aguacate y langostino crocante, cubierto de salmón fresco flameado al soplete con aceite de trufa blanca y caviar tobiko.",
      "priceUSD": 16.5,
      "badge": "Favorito",
      "popular": true,
      "tags": [
        "Sushi",
        "Trufa"
      ]
    },
    {
      "id": "tiradito-pez-blanco",
      "name": "Tiradito Nikkei de Mero",
      "category": "tapas",
      "description": "Finas láminas de mero fresco en leche de tigre de ají amarillo, maíz chulpi crocante y emulsión de cilantro.",
      "priceUSD": 13,
      "tags": [
        "Crudo",
        "Nikkei"
      ]
    },
    {
      "id": "coctel-smoke-fashion",
      "name": "Smoked Old Fashioned Vista",
      "category": "cocteles",
      "description": "Bourbon premium ahumado con virutas de cerezo, bitter angostura, piel de naranja caramelizada y hielo tallado a mano.",
      "priceUSD": 11,
      "popular": true,
      "tags": [
        "Bourbon",
        "Ahumado"
      ]
    },
    {
      "id": "tabla-tapas-rooftop",
      "name": "Tabla Degustación Rooftop",
      "category": "tapas",
      "description": "Mini brochetas de lomito al grill, croquetas de jamón ibérico con emulsión alioli y bao buns de panceta glaseada.",
      "priceUSD": 19,
      "tags": [
        "Para Compartir"
      ]
    },
    {
      "id": "champagne-moet-chandon",
      "name": "Moët & Chandon Impérial Brut",
      "category": "botellas",
      "description": "Botella fría 750ml servida en cubitera con bengala y copas de cristal.",
      "priceUSD": 95,
      "tags": [
        "Champagne"
      ]
    }
  ],
  "managerKpis": {
    "activeReservations": 16,
    "capacityPercentage": 92,
    "todaySalesUSD": 2450,
    "avgTicketUSD": 48
  },
  "sampleBookings": [
    {
      "id": "VIS-201",
      "clientName": "Alejandro Vollmer",
      "details": "Mesa Frontal Ávila (4 pax) · Sunset 05:30 PM",
      "time": "05:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 120
    },
    {
      "id": "VIS-202",
      "clientName": "Camila Stolk",
      "details": "Lounge VIP Zona DJ (6 pax) · Cumpleaños",
      "time": "09:30 PM",
      "status": "en_mesa",
      "pax": 6,
      "totalUSD": 220
    },
    {
      "id": "VIS-203",
      "clientName": "Héctor Boulton",
      "details": "Mesa Frontal Ávila (2 pax) · Aniversario",
      "time": "08:00 PM",
      "status": "pendiente",
      "pax": 2,
      "totalUSD": 85
    }
  ]
},

  {
  "slug": "vizio_ristorante",
  "batch": "dia8",
  "archetype": "gourmet-booking",
  "name": "Vizio Ristorante Italiano",
  "handle": "vizio_ristorante",
  "category": "Alta Cocina Italiana · Pastas Frescas · Cava de Vinos",
  "badgeText": "🍝 #IlVizioDelGusto · Tradizione Italiana & Vini Selezionati",
  "tagline": "Auténtica gastronomía italiana de autor, pastas hechas a mano y maridaje de excepción",
  "heroTitle": "Auténtica cucina italiana, pastas frescas y",
  "heroHighlight": "reserva con sommelier digital",
  "heroSubtitle": "Elige tu mesa en salón climatizado o terraza, preselecciona tu pasta rellena o risotto y asegura tu experiencia gastronómica sin demoras.",
  "logo": "/marcas/vizio_ristorante.jpg",
  "coverImage": "/marcas/vizio_ristorante-cover.jpg",
  "palette": {
    "primary": "#CA8A04",
    "primaryHover": "#A16207",
    "secondary": "#334155",
    "accent": "#EAB308",
    "darkBg": "#0A0F1A",
    "cardBg": "rgba(18, 25, 38, 0.85)",
    "textLight": "#FEFCE8",
    "textMuted": "#FEF08A",
    "border": "rgba(234, 179, 8, 0.25)",
    "glow": "rgba(202, 138, 4, 0.2)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Vizio Ristorante rinde tributo a las recetas centenarias de la gastronomía italiana con técnicas contemporáneas. Pastas amasadas a la vista cada mañana, salsas de cocción lenta con tomates San Marzano DOP y una selección de vinos de la Toscana y Piamonte.",
  "introStats": [
    {
      "label": "Pasta al Huevo",
      "value": "100% Fresca",
      "detail": "Amasada al día con sémola italiana"
    },
    {
      "label": "Cava Italiana",
      "value": "50+ Vinos",
      "detail": "Chianti, Barolo, Brunello y Prosecco"
    },
    {
      "label": "Experiencia",
      "value": "Chef a Mesa",
      "detail": "Pasta flambeada en rueda de parmesano"
    }
  ],
  "trustBadges": [
    "Ingredientes Importados DOP",
    "Sommelier en Sala",
    "Salón Climatizado & Valet"
  ],
  "whatsappPitchCopy": "Hola equipo de Vizio Ristorante! 🍝 ¿Cuántas reservas de cenas familiares o de negocios se les quedan sin atender los fines de semana cuando el chat de WhatsApp se satura?\\n\\nLes armé una propuesta interactiva con su carta donde sus comensales reservan su mesa, exploran las pastas frescas con maridaje de vinos y reciben confirmación automática con pase digital:\\n👉 https://byte-bridge-tau.vercel.app/demos/vizio_ristorante\\n\\n¿Les muestro en 5 minutos cómo funciona?",
  "address": "Calle Madrid con Av. Trinidad, Las Mercedes, Caracas",
  "mapsUrl": "https://maps.google.com/?q=Vizio+Ristorante+Caracas",
  "hours": "Lunes a Domingo: 12:30 PM - 11:30 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/vizio_ristorante/",
  "bookingType": "reserva-gourmet",
  "bookingTitle": "Reserva de Mesas & Menú Degustación",
  "bookingSubtitle": "Asegura tu ubicación en salón principal o terraza",
  "bookingOptions": [
    {
      "id": "mesa-ristorante",
      "name": "Mesa Salón Principal",
      "description": "Mesa confortable en salón climatizado con atención personalizada del sommelier.",
      "priceUSD": 0,
      "unit": "por reserva",
      "badge": "Clásica",
      "features": [
        "Ubicación en salón",
        "Servicio de sommelier",
        "Carta digital interactiva"
      ]
    },
    {
      "id": "rueda-parmesano",
      "name": "Experiencia Ruota di Parmigiano",
      "description": "Mesa frente al carrito de flambeado donde el chef prepara la pasta dentro de la rueda de queso Grana Padano.",
      "priceUSD": 20,
      "unit": "depósito consumible",
      "badge": "Show Gastronómico",
      "features": [
        "Flambeado a la vista",
        "Copa de Prosecco cortesía",
        "Mesa preferencial"
      ]
    }
  ],
  "categories": [
    {
      "id": "pastas",
      "name": "Primi Piatti & Pastas",
      "icon": "🍝"
    },
    {
      "id": "carni",
      "name": "Secondi & Carnes",
      "icon": "🥩"
    },
    {
      "id": "antipasti",
      "name": "Antipasti & Carpaccios",
      "icon": "🥗"
    },
    {
      "id": "dolci",
      "name": "Dolci Tradizionali",
      "icon": "🍮"
    }
  ],
  "menuItems": [
    {
      "id": "tagliolini-ruota-tartufo",
      "name": "Tagliolini al Tartufo in Ruota di Parmigiano",
      "category": "pastas",
      "description": "Pasta fresca al huevo salteada con mantequilla de trufa negra, emulsionada dentro de la rueda de queso Grana Padano de 24 meses.",
      "priceUSD": 21,
      "badge": "Insignia",
      "popular": true,
      "tags": [
        "Trufa",
        "Pasta Fresca"
      ]
    },
    {
      "id": "ossobuco-milanesa-vizio",
      "name": "Ossobuco alla Milanese con Risotto allo Zafferano",
      "category": "carni",
      "description": "Garrón de ternera braseado 6 horas en vino blanco y vegetales, servido sobre risotto clásico al azafrán con gremolata cítrica.",
      "priceUSD": 24,
      "badge": "Especialidad",
      "popular": true,
      "tags": [
        "Carne",
        "Risotto"
      ]
    },
    {
      "id": "ravioli-ricotta-spinaci",
      "name": "Ravioli di Ricotta e Spinaci al Pomodoro Fresco",
      "category": "pastas",
      "description": "Raviolis artesanales rellenos de ricotta de búfala y espinacas tiernas con salsa de tomates San Marzano confitados y albahaca.",
      "priceUSD": 15.5,
      "tags": [
        "Vegetariano",
        "Casero"
      ]
    },
    {
      "id": "carpaccio-polpo-vizio",
      "name": "Carpaccio di Polpo Mediterraneo",
      "category": "antipasti",
      "description": "Láminas prensadas de pulpo cocido al punto con emulsión de limón amarillo, alcaparras baby crocantes y brotes verdes.",
      "priceUSD": 14,
      "popular": true,
      "tags": [
        "Mariscos"
      ]
    },
    {
      "id": "tiramisu-tradizionale-vizio",
      "name": "Tiramisù Tradizionale al Mascarpone",
      "category": "dolci",
      "description": "Bizcochos savoiardi embebidos en espresso italiano y licor Amaretto, crema de queso mascarpone puro y cacao amargo espolvoreado.",
      "priceUSD": 7.5,
      "tags": [
        "Postre"
      ]
    },
    {
      "id": "burrata-pugliese-vizio",
      "name": "Burrata Pugliese con Prosciutto di Parma",
      "category": "antipasti",
      "description": "Corazón cremoso de burrata fresca con lonjas de jamón de Parma curado 18 meses, tomates cherry glaseados y pesto genovés.",
      "priceUSD": 16,
      "tags": [
        "Entrada"
      ]
    }
  ],
  "managerKpis": {
    "activeReservations": 14,
    "capacityPercentage": 88,
    "todaySalesUSD": 2180,
    "avgTicketUSD": 44
  },
  "sampleBookings": [
    {
      "id": "VIZ-301",
      "clientName": "Giancarlo Benítez",
      "details": "Mesa Ristorante (4 pax) · Almuerzo Corporativo",
      "time": "01:00 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 140
    },
    {
      "id": "VIZ-302",
      "clientName": "Antonella Ruggiero",
      "details": "Experiencia Ruota di Parmigiano (2 pax)",
      "time": "08:30 PM",
      "status": "en_mesa",
      "pax": 2,
      "totalUSD": 75
    },
    {
      "id": "VIZ-303",
      "clientName": "Federico Zuloaga",
      "details": "Mesa Ristorante (6 pax) · Cena Familiar",
      "time": "09:00 PM",
      "status": "pendiente",
      "pax": 6,
      "totalUSD": 190
    }
  ]
},

  {
  "slug": "crepusculobistro",
  "batch": "dia8",
  "archetype": "table-ordering",
  "name": "Crepúsculo Bistró & Café",
  "handle": "crepusculobistro",
  "category": "Bistró de Autor · Desayunos & Brunches · Coctelería de Atardecer",
  "badgeText": "🌅 #TierraDeCrepusculos · Sabores de Barquisimeto & Café de Altura",
  "tagline": "El encanto de los atardeceres larenses en cada desayuno gourmet, pasta y cóctel",
  "heroTitle": "Brunches larenses, cocina fusión y",
  "heroHighlight": "pedido en mesa por código QR",
  "heroSubtitle": "Escanea el código QR de tu mesa, explora nuestras opciones de desayunos, platos fuertes y bebidas, y envía la orden a cocina sin esperar que llegue el salonero.",
  "logo": "/marcas/crepusculobistro.jpg",
  "coverImage": "/marcas/crepusculobistro-cover.jpg",
  "palette": {
    "primary": "#C2410C",
    "primaryHover": "#9A3412",
    "secondary": "#D97706",
    "accent": "#FB923C",
    "darkBg": "#180D06",
    "cardBg": "rgba(38, 20, 12, 0.85)",
    "textLight": "#FFF7ED",
    "textMuted": "#FFEDD5",
    "border": "rgba(251, 146, 60, 0.25)",
    "glow": "rgba(194, 65, 12, 0.25)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Crepúsculo Bistró captura la magia de la ciudad de los crepúsculos en Barquisimeto. Un rincón acogedor donde convergen ingredientes autóctonos larenses con cocina internacional: desayunos criollos gourmet, cafés de origen andino y cócteles al atardecer.",
  "introStats": [
    {
      "label": "Origen Local",
      "value": "Quesos de Lara",
      "detail": "Queso de cabra artesanal de Carora"
    },
    {
      "label": "Horario Corrido",
      "value": "8AM–10PM",
      "detail": "Desayuno, almuerzo ejecutivo y cena"
    },
    {
      "label": "Mesa Express",
      "value": "Código QR",
      "detail": "Sin esperas para ordenar o pagar"
    }
  ],
  "trustBadges": [
    "Ingredientes de Finca Larense",
    "Café de Especialidad Filtrado",
    "Ambiente Climatizado & Terraza"
  ],
  "whatsappPitchCopy": "Hola equipo de Crepúsculo Bistró! 🌅 En las mañanas de desayuno o en la tarde cuando la terraza se llena, ¿cuántos clientes se impacientan esperando que el mesonero les acerque la carta o tome su pedido de café y tostadas?\\n\\nLes preparé una prueba directa con su menú para que el comensal ordene desde su mesa con código QR, vea el precio en bolívares a tasa oficial y la comanda entre lista a cocina:\\n👉 https://byte-bridge-tau.vercel.app/demos/crepusculobistro\\n\\n¿Les muestro en 5 minutos cómo funciona?",
  "address": "Zona Este / Nueva Segovia, Barquisimeto, Estado Lara",
  "mapsUrl": "https://maps.google.com/?q=Crepusculo+Bistro+Barquisimeto",
  "hours": "Lunes a Domingo: 8:00 AM - 10:00 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/crepusculobistro/",
  "bookingType": "comanda-mesa",
  "bookingTitle": "Auto-Pedido en Mesa & Reserva Bistró",
  "bookingSubtitle": "Comanda tu brunch o merienda sin esperar por atención",
  "bookingOptions": [
    {
      "id": "mesa-bistro",
      "name": "Mesa en Bistró",
      "description": "Ordena en sala con código QR con despacho rápido a tu mesa.",
      "priceUSD": 0,
      "unit": "sin costo",
      "badge": "En Sala",
      "features": [
        "Menú QR en mesa",
        "Pago a tasa oficial",
        "Servicio ágil"
      ]
    },
    {
      "id": "desayuno-degustacion",
      "name": "Brunch Crepúsculo Degustación (2 pax)",
      "description": "Mesa reservada con 2 platos brunch a elección, café especial ilimitado y jugo natural.",
      "priceUSD": 16,
      "unit": "para 2 personas",
      "badge": "Recomendado",
      "features": [
        "2 Platos de brunch",
        "Café refill",
        "Mesa preferencial"
      ]
    }
  ],
  "categories": [
    {
      "id": "brunches",
      "name": "Desayunos & Brunches",
      "icon": "🍳"
    },
    {
      "id": "pastas",
      "name": "Pastas & Fuertes",
      "icon": "🍝"
    },
    {
      "id": "tostadas",
      "name": "Sandwiches & Tostadas",
      "icon": "🥪"
    },
    {
      "id": "bebidas",
      "name": "Cafés & Crepúsculos",
      "icon": "🍹"
    }
  ],
  "menuItems": [
    {
      "id": "desayuno-crepusculo-larense",
      "name": "Desayuno Criollo Crepúsculo",
      "category": "brunches",
      "description": "Carne desmechada jugosa, caraotas negras refritas con queso de cabra caroreño rallado, huevos revueltos con tomate y arepas de maíz pilado calientes.",
      "priceUSD": 7.5,
      "badge": "Insignia",
      "popular": true,
      "tags": [
        "Criollo",
        "Desayuno"
      ]
    },
    {
      "id": "tostada-cabra-miel",
      "name": "Tostada de Masa Madre con Queso de Cabra & Miel",
      "category": "tostadas",
      "description": "Pan rústico tostado con queso de cabra artesanal de Carora, nueces caramelizadas, higos y llovizna de miel orgánica.",
      "priceUSD": 6.5,
      "badge": "Favorita",
      "popular": true,
      "tags": [
        "Gourmet",
        "Larense"
      ]
    },
    {
      "id": "fettuccine-lomito-crepusculo",
      "name": "Fettuccine al Ragú de Lomito Larense",
      "category": "pastas",
      "description": "Pasta fresca salteada con puntas de lomito selladas en mantequilla de romero y reducción de vino tinto con champiñones.",
      "priceUSD": 12.5,
      "tags": [
        "Pasta",
        "Lomito"
      ]
    },
    {
      "id": "coctel-crepusculo-sunset",
      "name": "Cóctel Crepúsculo Cardenal",
      "category": "bebidas",
      "description": "Cocuy de penca artesanal premium macerado con mora silvestre, sirope de papelón con limón y tónica fría.",
      "priceUSD": 5.5,
      "popular": true,
      "tags": [
        "Cocuy",
        "Signature"
      ]
    },
    {
      "id": "pancakes-frutos-rojos-bistro",
      "name": "Torre de Pancakes Crepúsculo",
      "category": "brunches",
      "description": "Pancakes esponjosos con coulis casero de fresas y moras, queso crema batido y miel de maple.",
      "priceUSD": 6,
      "tags": [
        "Dulce"
      ]
    },
    {
      "id": "cappuccino-origen-andino",
      "name": "Cappuccino Micro-Lote Especial",
      "category": "bebidas",
      "description": "Espresso doble con leche cremada y cacao larense fino de aroma espolvoreado.",
      "priceUSD": 3,
      "tags": [
        "Café"
      ]
    }
  ],
  "managerKpis": {
    "activeReservations": 10,
    "capacityPercentage": 82,
    "todaySalesUSD": 980,
    "avgTicketUSD": 18
  },
  "sampleBookings": [
    {
      "id": "CRE-401",
      "clientName": "Gustavo Rivero",
      "details": "Brunch Crepúsculo (2 pax) · Terraza",
      "time": "09:00 AM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 16
    },
    {
      "id": "CRE-402",
      "clientName": "Daniela Falcón",
      "details": "Mesa Bistró (4 pax) · Almuerzo",
      "time": "01:15 PM",
      "status": "en_mesa",
      "pax": 4,
      "totalUSD": 42
    },
    {
      "id": "CRE-403",
      "clientName": "Simón Yépez",
      "details": "Tostada de Cabra + Cappuccino · Pick-Up",
      "time": "10:30 AM",
      "status": "pendiente",
      "pax": 1,
      "totalUSD": 9.5
    }
  ]
},

  {
  "slug": "humosbistro_bar",
  "batch": "dia8",
  "archetype": "table-ordering",
  "name": "Humos Bistro & Bar",
  "handle": "humosbistro_bar",
  "category": "Cocina al Fuego · Carnes Ahumadas · Coctelería de Autor",
  "badgeText": "🔥 #PasionPorElFuego · Carnes a la Leña, Ahumados & Brasas",
  "tagline": "El sabor del humo y las brasas en cortes selectos, smash burgers y cócteles ahumados",
  "heroTitle": "Parrilla a la leña, cortes ahumados y",
  "heroHighlight": "auto-pedido en mesa por código QR",
  "heroSubtitle": "Escanea el código QR de tu mesa, pide tus cortes a la brasa y cócteles ahumados directo a la estación de parrilla sin esperas.",
  "logo": "/marcas/humosbistro_bar.jpg",
  "coverImage": "/marcas/humosbistro_bar-cover.jpg",
  "palette": {
    "primary": "#EA580C",
    "primaryHover": "#C2410C",
    "secondary": "#27272A",
    "accent": "#F97316",
    "darkBg": "#09090B",
    "cardBg": "rgba(24, 24, 27, 0.85)",
    "textLight": "#FAFAFA",
    "textMuted": "#E4E4E7",
    "border": "rgba(249, 115, 22, 0.25)",
    "glow": "rgba(234, 88, 12, 0.25)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Humos Bistro & Bar es el santuario de las carnes cocinadas a la leña de roble y manzano. Una experiencia donde el ahumado lento transforma cortes de res, costillares y hamburguesas en piezas jugosas acompañadas de mixología teatral.",
  "introStats": [
    {
      "label": "Madera de Humo",
      "value": "Roble & Manzano",
      "detail": "Ahumado artesanal sin aditivos químicos"
    },
    {
      "label": "Parrilla Abierta",
      "value": "Fuego Vivo",
      "detail": "Carbón vegetal y cortes premium"
    },
    {
      "label": "Tiempo de Barra",
      "value": "Express QR",
      "detail": "Comanda enviada al instante a cocina"
    }
  ],
  "trustBadges": [
    "Ahumador de Carbón y Leña",
    "Cortes Angus Nacionales e Importados",
    "Terraza Climatizada & Bar"
  ],
  "whatsappPitchCopy": "Hola equipo de Humos Bistro & Bar! 🔥 ¿Cuánto tiempo pierden sus clientes en mesa esperando otra ronda de tragos o carnes cuando la sala y la terraza se llenan los fines de semana?\\n\\nLes preparé un ejemplo directo con sus carnes ahumadas y cócteles para que cada mesa pida con código QR directo a parrilla, divida la cuenta al instante y el personal no se sature tomando comandas a mano:\\n👉 https://byte-bridge-tau.vercel.app/demos/humosbistro_bar\\n\\n¿Les muestro en 5 minutos cómo funciona?",
  "address": "Avenida Principal Gastronómica, Maracay / Valencia / Caracas",
  "mapsUrl": "https://maps.google.com/?q=Humos+Bistro+Bar+Venezuela",
  "hours": "Miércoles a Domingo: 1:00 PM - 12:00 AM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/humosbistro_bar/",
  "bookingType": "comanda-mesa",
  "bookingTitle": "Comanda en Mesa & Reserva de Parrilla",
  "bookingSubtitle": "Ordena a la brasa en segundos desde tu smartphone",
  "bookingOptions": [
    {
      "id": "mesa-humos",
      "name": "Mesa Salón Humos",
      "description": "Comanda digital directa a la estación de fuegos y barra.",
      "priceUSD": 0,
      "unit": "sin costo",
      "badge": "En Sala",
      "features": [
        "Menú QR en mesa",
        "Comanda sin demoras",
        "División de cuenta fácil"
      ]
    },
    {
      "id": "mesa-parrillera-vip",
      "name": "Mesa VIP Parrillera (4 a 6 pax)",
      "description": "Ubicación preferencial con tabla de degustación de cortes ahumados servida sobre leña encendida.",
      "priceUSD": 25,
      "unit": "abono consumible",
      "badge": "Experiencia Fuego",
      "features": [
        "Servicio sobre brasas",
        "Ronda de cócteles cortesía",
        "Atención prioritaria"
      ]
    }
  ],
  "categories": [
    {
      "id": "carnes",
      "name": "Cortes a la Leña",
      "icon": "🥩"
    },
    {
      "id": "burgers",
      "name": "Smash al Humo",
      "icon": "🍔"
    },
    {
      "id": "picadas",
      "name": "Tablas & Entradas",
      "icon": "🍢"
    },
    {
      "id": "cocteles",
      "name": "Coctelería Ahumada",
      "icon": "🥃"
    }
  ],
  "menuItems": [
    {
      "id": "brisket-ahumado-humos",
      "name": "Brisket Ahumado 12 Horas (350g)",
      "category": "carnes",
      "description": "Pecho de res Angus con anillo de humo perfecto, corteza de pimienta negra y corte suave como mantequilla con mazorca grillada.",
      "priceUSD": 18,
      "badge": "Plato Insignia",
      "popular": true,
      "tags": [
        "Ahumado",
        "Angus"
      ]
    },
    {
      "id": "smash-humos-burger",
      "name": "Burger Humos Black Smoke",
      "category": "burgers",
      "description": "Doble carne smash sellada a la plancha de carbón, queso gouda ahumado fundido, cebollas caramelizadas al bourbon y tocino crujiente.",
      "priceUSD": 10.5,
      "badge": "Top Seller",
      "popular": true,
      "tags": [
        "Smash",
        "Burger"
      ]
    },
    {
      "id": "tabla-humos-mixta",
      "name": "Gran Tabla Humos para Dos",
      "category": "picadas",
      "description": "Selección de costillitas BBQ, pulled pork jugoso, chorizo ahumado artesanal, papas rústicas con queso cheddar y panes brioche.",
      "priceUSD": 25,
      "popular": true,
      "tags": [
        "Para Compartir"
      ]
    },
    {
      "id": "old-fashioned-humos",
      "name": "Old Fashioned en Campana de Humo",
      "category": "cocteles",
      "description": "Ron añejo venezolano servido dentro de campana de cristal ahumada con canela y corteza de roble que se destapa en mesa.",
      "priceUSD": 8.5,
      "badge": "Coctel Show",
      "popular": true,
      "tags": [
        "Mixología"
      ]
    },
    {
      "id": "picanha-fuego-vivo",
      "name": "Picaña Prime a la Brasa (400g)",
      "category": "carnes",
      "description": "Corte de picaña gruesa con su capa dorada de grasa crujiente, servido sobre piedra caliente con sal marina gruesa.",
      "priceUSD": 21,
      "tags": [
        "Parrilla"
      ]
    },
    {
      "id": "tequenos-humos-tocineta",
      "name": "Tequeños Rellenos de Queso & Tocineta Ahumada",
      "category": "picadas",
      "description": "6 Tequeños hojaldrados rellenos de queso gouda y trocitos de tocineta ahumada con mermelada de ají dulce.",
      "priceUSD": 7,
      "tags": [
        "Entrada"
      ]
    }
  ],
  "managerKpis": {
    "activeReservations": 11,
    "capacityPercentage": 86,
    "todaySalesUSD": 1620,
    "avgTicketUSD": 32
  },
  "sampleBookings": [
    {
      "id": "HUM-501",
      "clientName": "Mauricio Bencomo",
      "details": "Mesa Humos (4 pax) · Cena de Amigos",
      "time": "08:00 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 75
    },
    {
      "id": "HUM-502",
      "clientName": "Javier Arismendi",
      "details": "Mesa VIP Parrillera (6 pax) · Cumpleaños",
      "time": "09:30 PM",
      "status": "en_mesa",
      "pax": 6,
      "totalUSD": 160
    },
    {
      "id": "HUM-503",
      "clientName": "Patricia Escalona",
      "details": "Brisket + Smash Humos · Takeaway",
      "time": "07:15 PM",
      "status": "pendiente",
      "pax": 2,
      "totalUSD": 28.5
    }
  ]
},

  {
  "slug": "lafelicittave",
  "batch": "dia8",
  "archetype": "item-builder",
  "name": "La Felicittà Gelatería & Dolci",
  "handle": "lafelicittave",
  "category": "Gelato Artesanal Italiano · Crepería · Postres de Diseño",
  "badgeText": "🍦 #PuraFelicitta · Auténtico Gelato Italiano & Pastelería Fina",
  "tagline": "El sabor de la felicidad en gelatos artesanales italianos, crepes y copas de autor",
  "heroTitle": "Gelato italiano 100% artesanal y",
  "heroHighlight": "constructor de copas y cajas para llevar",
  "heroSubtitle": "Diseña tu copa de gelato o caja para llevar en pantalla: elige sabores de vitrina, siropes tibios y toppings crujientes en 3 clics.",
  "logo": "/marcas/lafelicittave.jpg",
  "coverImage": "/marcas/lafelicittave-cover.jpg",
  "palette": {
    "primary": "#DB2777",
    "primaryHover": "#BE185D",
    "secondary": "#F472B6",
    "accent": "#F472B6",
    "darkBg": "#1A0812",
    "cardBg": "rgba(45, 12, 30, 0.85)",
    "textLight": "#FDF2F8",
    "textMuted": "#FBCFE8",
    "border": "rgba(244, 114, 182, 0.25)",
    "glow": "rgba(219, 39, 119, 0.25)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "La Felicittà es la embajada del auténtico gelato cremoso italiano. Elaborado diariamente con leche fresca entera, pastas puras de pistacho de Bronte y avellanas del Piamonte, sin grasas hidrogenadas ni conservantes artificiales.",
  "introStats": [
    {
      "label": "Elaboración",
      "value": "Diaria en Sala",
      "detail": "Cremado fresco en mantecadora italiana"
    },
    {
      "label": "Sabores en Vitrina",
      "value": "24+",
      "detail": "Gelatos de leche y sorbettos de pura fruta"
    },
    {
      "label": "Cajas Térmicas",
      "value": "0.5kg y 1kg",
      "detail": "Empaque especial que conserva el frío 2 horas"
    }
  ],
  "trustBadges": [
    "Pastas Italianas Puras Importadas",
    "Opciones Sin Azúcar & Sin Lácteos",
    "Cajas Térmicas Selladas"
  ],
  "whatsappPitchCopy": "Hola equipo de La Felicittà! 🍦 ¿Cuántos clientes se van o pierden tiempo en la fila de vitrina los fines de semana preguntando qué sabores quedan o cómo armar sus copas y cajas de medio kilo?\\n\\nLes creé un personalizador visual para que sus clientes elijan sabores, barquillas y toppings desde el teléfono, o pidan su caja para retirar sin hacer cola:\\n👉 https://byte-bridge-tau.vercel.app/demos/lafelicittave\\n\\n¿Les muestro en 5 minutos cómo funciona?",
  "address": "Boulevard Gastronómico, Caracas / Valencia",
  "mapsUrl": "https://maps.google.com/?q=La+Felicitta+Gelateria+Venezuela",
  "hours": "Lunes a Domingo: 12:00 PM - 10:30 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/lafelicittave/",
  "bookingType": "item-builder",
  "bookingTitle": "Arma tu Copa o Caja de Gelato",
  "bookingSubtitle": "Elige sabores de vitrina, salsas y toppings paso a paso",
  "bookingOptions": [
    {
      "id": "gelato-box-builder",
      "name": "Caja Térmica para Llevar (0.5 kg o 1 kg)",
      "description": "Elige hasta 3 o 4 sabores de gelato con espátula y barquillas crujientes incluidas.",
      "priceUSD": 0,
      "unit": "pedido online",
      "badge": "Más Vendido",
      "features": [
        "Hasta 4 sabores a elección",
        "Caja isotérmica de regalo",
        "Retiro express en mostrador"
      ]
    },
    {
      "id": "copa-felicitta",
      "name": "Copa Especial La Felicittà en Sala",
      "description": "3 Bolas de gelato premium con salsa tibia de chocolate belga, crema chantilly fresca y avellanas.",
      "priceUSD": 6.5,
      "unit": "por copa",
      "badge": "Favorito en Sala",
      "features": [
        "3 Sabores gourmet",
        "Salsa tibia de chocolate",
        "Barquilla waffle artesanal"
      ]
    }
  ],
  "categories": [
    {
      "id": "gelatos",
      "name": "Sabores de Gelato",
      "icon": "🍨"
    },
    {
      "id": "cajas",
      "name": "Cajas Térmicas Takeaway",
      "icon": "📦"
    },
    {
      "id": "crepes",
      "name": "Crepes & Waffles",
      "icon": "🥞"
    },
    {
      "id": "cafes",
      "name": "Café & Affogato",
      "icon": "☕"
    }
  ],
  "menuItems": [
    {
      "id": "caja-gelato-1kg",
      "name": "Caja Térmica Gelato Familiar (1 kg)",
      "category": "cajas",
      "description": "Hasta 4 sabores de gelato artesanal en empaque térmico con 6 conos de barquilla dulce y servilletas.",
      "priceUSD": 16,
      "badge": "Para la Casa",
      "popular": true,
      "tags": [
        "Familiar",
        "Takeaway"
      ]
    },
    {
      "id": "gelato-pistacchio-puro",
      "name": "Gelato Puro Pistacchio di Bronte",
      "category": "gelatos",
      "description": "La joya de la corona: pasta pura de pistachos sicilianos tostados con trocitos crocantes de pistacho.",
      "priceUSD": 4.5,
      "badge": "Estrella",
      "popular": true,
      "tags": [
        "Pistacho",
        "Top Seller"
      ]
    },
    {
      "id": "affogato-al-caffe-felicitta",
      "name": "Affogato Tradizionale al Caffè",
      "category": "cafes",
      "description": "Una bola cremosa de gelato de flor de leche o vainilla ahogada en una taza con espresso caliente recién extraído.",
      "priceUSD": 4,
      "tags": [
        "Café",
        "Postre"
      ]
    },
    {
      "id": "gelato-nocciola-piemonte",
      "name": "Gelato di Nocciola Piemonte IGP",
      "category": "gelatos",
      "description": "Avellanas tostadas del norte de Italia caramelizadas en base de leche cremosa.",
      "priceUSD": 4.5,
      "popular": true,
      "tags": [
        "Avellana"
      ]
    },
    {
      "id": "crepe-nutella-gelato",
      "name": "Crepe Caliente con Nutella & Gelato",
      "category": "crepes",
      "description": "Crepe recién hecha rellena de Nutella tibia con una bola de gelato a elección y fresas frescas laminadas.",
      "priceUSD": 6.5,
      "tags": [
        "Dulce",
        "Crepe"
      ]
    },
    {
      "id": "caja-gelato-medio-kilo",
      "name": "Caja Térmica Gelato (0.5 kg)",
      "category": "cajas",
      "description": "Hasta 3 sabores de gelato en caja isotérmica con 3 barquillas dulces.",
      "priceUSD": 9.5,
      "tags": [
        "Para Llevar"
      ]
    }
  ],
  "managerKpis": {
    "activeReservations": 18,
    "capacityPercentage": 90,
    "todaySalesUSD": 870,
    "avgTicketUSD": 14
  },
  "sampleBookings": [
    {
      "id": "FEL-601",
      "clientName": "Lorena Pietri",
      "details": "Caja Térmica 1 kg (Pistacho, Nocciola, Frutos) · Pick-Up",
      "time": "03:30 PM",
      "status": "confirmada",
      "pax": 1,
      "totalUSD": 16
    },
    {
      "id": "FEL-602",
      "clientName": "Carlos Febres",
      "details": "2x Copa Especial en Sala",
      "time": "05:15 PM",
      "status": "en_mesa",
      "pax": 2,
      "totalUSD": 13
    },
    {
      "id": "FEL-603",
      "clientName": "Valentina Sosa",
      "details": "Caja Térmica 0.5 kg · Pick-Up Express",
      "time": "06:00 PM",
      "status": "pendiente",
      "pax": 1,
      "totalUSD": 9.5
    }
  ]
},

  {
  "slug": "aprile_ccs",
  "batch": "dia8",
  "archetype": "gourmet-booking",
  "name": "Aprile Ristorante Caracas",
  "handle": "aprile_ccs",
  "category": "Alta Gastronomía Italiana · Salones Privados · Cava de Colección",
  "badgeText": "🍷 #AprileCaracas · El Clásico de la Alta Cocina en Altamira",
  "tagline": "El referente por excelencia de la alta gastronomía italiana y diplomática en Caracas",
  "heroTitle": "Tradición gastronómica de alto nivel y",
  "heroHighlight": "reserva de salones y mesas ejecutivas",
  "heroSubtitle": "Asegura tu mesa en salón principal o reserva salones privados para almuerzos de negocios, con atención directa del maitre y sommelier.",
  "logo": "/marcas/aprile_ccs.jpg",
  "coverImage": "/marcas/aprile_ccs-cover.jpg",
  "palette": {
    "primary": "#0F172A",
    "primaryHover": "#020617",
    "secondary": "#64748B",
    "accent": "#94A3B8",
    "darkBg": "#0B0F19",
    "cardBg": "rgba(15, 23, 42, 0.85)",
    "textLight": "#F8FAFC",
    "textMuted": "#CBD5E1",
    "border": "rgba(148, 163, 184, 0.25)",
    "glow": "rgba(15, 23, 42, 0.3)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Aprile es una institución viva de la alta cocina en Caracas. Ubicado en una distinguida casona de Altamira, ha sido el escenario de encuentros diplomáticos, corporativos y familiares de alto perfil durante décadas, respaldado por un servicio de guante blanco impecable.",
  "introStats": [
    {
      "label": "Trayectoria",
      "value": "Icono Ccs",
      "detail": "Décadas de excelencia en Altamira"
    },
    {
      "label": "Salones VIP",
      "value": "3 Privados",
      "detail": "Climatizados con acústica reservada"
    },
    {
      "label": "Cava de Vinos",
      "value": "Gran Reserva",
      "detail": "Etiquetas clásicas del viejo y nuevo mundo"
    }
  ],
  "trustBadges": [
    "Servicio de Maitre y Guante Blanco",
    "Salones Privados para Negocios",
    "Valet Parking Vigilado"
  ],
  "whatsappPitchCopy": "Estimado equipo de Aprile Ristorante: ¿Cuántas solicitudes de almuerzos corporativos o cenas en salones privados se demoran en coordinar por mensajes de texto entre asistentes y el maitre?\\n\\nLes preparé una propuesta digital sobria donde sus clientes ejecutivos eligen su salón privado, confirman comensales con pase formal con código QR y seleccionan maridajes sin fricción:\\n👉 https://byte-bridge-tau.vercel.app/demos/aprile_ccs\\n\\n¿Cuándo tendrían 5 minutos para ver cómo funciona?",
  "address": "4ta Avenida entre 5ta y 6ta Transversal, Altamira, Caracas",
  "mapsUrl": "https://maps.google.com/?q=Aprile+Restaurante+Altamira+Caracas",
  "hours": "Lunes a Domingo: 12:00 PM - 11:00 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/aprile_ccs/",
  "bookingType": "reserva-gourmet",
  "bookingTitle": "Reserva de Mesas & Salones Privados",
  "bookingSubtitle": "Atención ejecutiva con confirmación confidencial",
  "bookingOptions": [
    {
      "id": "mesa-salongourmet",
      "name": "Mesa Salón Principal Aprile",
      "description": "Mesa con mantel largo en salón histórico con servicio clásico de sala.",
      "priceUSD": 0,
      "unit": "por reserva",
      "badge": "Clásica",
      "features": [
        "Servicio de maitre",
        "Sommelier en mesa",
        "Pase de confirmación"
      ]
    },
    {
      "id": "salon-privado-ejecutivo",
      "name": "Salón Privado de Negocios (Hasta 12 pax)",
      "description": "Espacio totalmente privado y climatizado para reuniones de directorio o celebraciones íntimas.",
      "priceUSD": 50,
      "unit": "depósito reserva",
      "badge": "Exclusivo",
      "features": [
        "Privacidad total acústica",
        "Menú degustación asistido",
        "Atención dedicada"
      ]
    }
  ],
  "categories": [
    {
      "id": "pastas",
      "name": "Pastas Clásicas Aprile",
      "icon": "🍝"
    },
    {
      "id": "carni",
      "name": "Cortes & Ternera",
      "icon": "🥩"
    },
    {
      "id": "pesce",
      "name": "Pescados Frescos del Día",
      "icon": "🐟"
    },
    {
      "id": "vini",
      "name": "Cava de Grandes Vinos",
      "icon": "🍷"
    }
  ],
  "menuItems": [
    {
      "id": "linguine-aragosta-aprile",
      "name": "Linguine all'Aragosta Fresca",
      "category": "pesce",
      "description": "Linguine al dente en reducción de bisque de langosta caribeña fresca, tomates cherry salteados y perejil italiano.",
      "priceUSD": 26,
      "badge": "Plato Insignia",
      "popular": true,
      "tags": [
        "Langosta",
        "Mariscos"
      ]
    },
    {
      "id": "scaloppine-tartufo-aprile",
      "name": "Scaloppine di Vitello al Tartufo Nero",
      "category": "carni",
      "description": "Finas escalopas de ternera de leche salteadas al vino blanco con salsa de trufas negras y puré de papas trufado.",
      "priceUSD": 23,
      "popular": true,
      "tags": [
        "Ternera",
        "Trufa"
      ]
    },
    {
      "id": "risotto-frutti-mare-aprile",
      "name": "Risotto ai Frutti di Mare Tradizionale",
      "category": "pastas",
      "description": "Arroz carnaroli cremoso con calamares baby, langostinos, almejas y mejillones con toque de vino bianco.",
      "priceUSD": 20,
      "tags": [
        "Risotto"
      ]
    },
    {
      "id": "carpaccio-solomo-aprile",
      "name": "Carpaccio di Manzo alla Cipriani",
      "category": "pastas",
      "description": "Láminas de lomo de res con la salsa original Cipriani, hojas de rúgula fresca y lajas de parmesano reggiano.",
      "priceUSD": 13.5,
      "tags": [
        "Entrada Fría"
      ]
    },
    {
      "id": "robalo-crosta-sale",
      "name": "Róbalo Fresco en Costra de Sal Marina",
      "category": "pesce",
      "description": "Filete entero de róbalo fresco del mar horneado en costra de sal marina, abierto y desespinado en mesa por el maitre.",
      "priceUSD": 22,
      "badge": "Clásico de Sala",
      "tags": [
        "Pescado"
      ]
    },
    {
      "id": "barolo-serralunga-vinos",
      "name": "Barolo DOCG Fontanafredda (750ml)",
      "category": "vini",
      "description": "Vino tinto italiano estructurado de la región del Piamonte con notas de ciruela, violetas y especias.",
      "priceUSD": 85,
      "tags": [
        "Vino Tinto"
      ]
    }
  ],
  "managerKpis": {
    "activeReservations": 12,
    "capacityPercentage": 78,
    "todaySalesUSD": 2850,
    "avgTicketUSD": 58
  },
  "sampleBookings": [
    {
      "id": "APR-701",
      "clientName": "Dr. Gustavo Mendoza",
      "details": "Salón Privado (8 pax) · Directorio Médico",
      "time": "01:00 PM",
      "status": "confirmada",
      "pax": 8,
      "totalUSD": 360
    },
    {
      "id": "APR-702",
      "clientName": "Sra. María Teresa Herrera",
      "details": "Mesa Salón Principal (4 pax) · Almuerzo",
      "time": "01:30 PM",
      "status": "en_mesa",
      "pax": 4,
      "totalUSD": 180
    },
    {
      "id": "APR-703",
      "clientName": "Embajador Jean-Luc Moreau",
      "details": "Salón Privado (6 pax) · Cena Protocolar",
      "time": "08:30 PM",
      "status": "pendiente",
      "pax": 6,
      "totalUSD": 290
    }
  ]
},

  {
  "slug": "rutac4_",
  "batch": "dia8",
  "archetype": "direct-delivery",
  "name": "Ruta C4 Street Food & Burgers",
  "handle": "rutac4_",
  "category": "Street Food Gourmet · Smash Burgers · Combos & Delivery",
  "badgeText": "🍔 #RutaC4 · Hamburguesas Explosivas, Alitas & Delivery Express",
  "tagline": "Comida callejera de alto impacto con porciones brutales y delivery directo",
  "heroTitle": "Smash burgers explosivas, combos brutales y",
  "heroHighlight": "delivery directo 0% comisión",
  "heroSubtitle": "Pide tus hamburguesas favoritas, alitas y papas cargadas directo desde nuestro menú digital sin pagar recargos de intermediarios.",
  "logo": "/marcas/rutac4_.jpg",
  "coverImage": "/marcas/rutac4_-cover.jpg",
  "palette": {
    "primary": "#881337",
    "primaryHover": "#4C0519",
    "secondary": "#E11D48",
    "accent": "#FB7185",
    "darkBg": "#14050A",
    "cardBg": "rgba(35, 10, 20, 0.85)",
    "textLight": "#FFF1F2",
    "textMuted": "#FECDD3",
    "border": "rgba(251, 113, 133, 0.25)",
    "glow": "rgba(136, 19, 55, 0.25)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Ruta C4 es la explosión del sabor urbano callejero llevado a su máxima potencia. Carnes smash aplastadas al punto con costra crujiente, quesos derretidos que desbordan el pan brioche y empaques térmicos diseñados para que el delivery llegue intacto.",
  "introStats": [
    {
      "label": "Sabor Explosivo",
      "value": "C4 Smash",
      "detail": "Doble carne con costra caramelizada"
    },
    {
      "label": "Ahorro Delivery",
      "value": "0% Comisión",
      "detail": "Canal propio directo a tu WhatsApp"
    },
    {
      "label": "Despacho",
      "value": "25 min",
      "detail": "Empaque térmico con sellos de seguridad"
    }
  ],
  "trustBadges": [
    "100% Carne de Res Seleccionada",
    "Empaque Térmico Sellado",
    "Tasa BCV Oficial en Tiempo Real"
  ],
  "whatsappPitchCopy": "Hola equipo de Ruta C4! 🍔 ¿Cuánto dinero se les va al mes en comisiones de apps de delivery o cuántos clientes se van porque tardan en responder el WhatsApp en pleno viernes o sábado por la noche?\\n\\nLes preparé un catálogo directo con sus hamburguesas y combos para que el cliente pida en 30 segundos, calcule a tasa oficial en bolívares y la orden les llegue lista para despachar sin intermediarios:\\n👉 https://byte-bridge-tau.vercel.app/demos/rutac4_\\n\\n¿Les muestro en 5 minutos cómo funciona?",
  "address": "Zona Urbana Gastronómica, Venezuela",
  "mapsUrl": "https://maps.google.com/?q=Ruta+C4+Street+Food",
  "hours": "Martes a Domingo: 5:00 PM - 12:00 AM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/rutac4_/",
  "bookingType": "delivery-pickup",
  "bookingTitle": "Pide tu Combo a Domicilio o Pick-Up",
  "bookingSubtitle": "Comanda tus burgers en 3 clics con cálculo oficial al instante",
  "bookingOptions": [
    {
      "id": "delivery-c4",
      "name": "Delivery Directo a Domicilio",
      "description": "Envío express sellado con motorizado propio sin comisiones abusivas.",
      "priceUSD": 2,
      "unit": "tarifa de envío",
      "badge": "A Domicilio",
      "features": [
        "Empaque térmico sellado",
        "Seguimiento en WhatsApp",
        "Pago móvil o divisas"
      ]
    },
    {
      "id": "pickup-c4",
      "name": "Retiro en Local Pick-Up",
      "description": "Pide online y retira en mostrador en 15 minutos sin hacer cola.",
      "priceUSD": 0,
      "unit": "sin costo",
      "badge": "Cero Esperas",
      "features": [
        "Listo en 15 minutos",
        "Entrega prioritaria",
        "Ahorro total"
      ]
    }
  ],
  "categories": [
    {
      "id": "smash",
      "name": "Smash Burgers C4",
      "icon": "🍔"
    },
    {
      "id": "combos",
      "name": "Combos Explosivos",
      "icon": "🔥"
    },
    {
      "id": "papas",
      "name": "Papas Cargadas & Alitas",
      "icon": "🍟"
    },
    {
      "id": "bebidas",
      "name": "Bebidas & Refrescos",
      "icon": "🥤"
    }
  ],
  "menuItems": [
    {
      "id": "burger-c4-bomba",
      "name": "Burger C4 Bomba Explosiva",
      "category": "smash",
      "description": "Triple carne smash crocante, triple queso americano, tocineta ahumada en tiras, aros de cebolla crocantes y salsa barbacoa C4.",
      "priceUSD": 10,
      "badge": "Insignia Brutal",
      "popular": true,
      "tags": [
        "Triple Smash",
        "Top Ventas"
      ]
    },
    {
      "id": "combo-dupleta-c4",
      "name": "Combo Dupleta C4 para Dos",
      "category": "combos",
      "description": "2 Burgers clásicas de doble carne con queso, ración grande de papas fritas con queso cheddar y 2 refrescos fríos.",
      "priceUSD": 16.5,
      "badge": "Para Dos",
      "popular": true,
      "tags": [
        "Combo",
        "Económico"
      ]
    },
    {
      "id": "c4-loaded-fries",
      "name": "Papas Fritas Dinamita C4",
      "category": "papas",
      "description": "Papas fritas crujientes bañadas en queso cheddar fundido, carne picada al grill, tocineta y jalapeños encurtidos.",
      "priceUSD": 6,
      "popular": true,
      "tags": [
        "Para Compartir"
      ]
    },
    {
      "id": "alitas-buffalo-c4",
      "name": "Alitas Spicy Buffalo x10",
      "category": "papas",
      "description": "Alitas crujientes con salsa búfalo picante casera y aderezo de queso azul.",
      "priceUSD": 8.5,
      "tags": [
        "Alitas"
      ]
    },
    {
      "id": "chicken-crispy-c4",
      "name": "Chicken C4 Bacon Ranch",
      "category": "smash",
      "description": "Milanesa de pollo súper crujiente con queso derretido, tocineta y salsa ranch en pan brioche.",
      "priceUSD": 8.5,
      "tags": [
        "Pollo"
      ]
    },
    {
      "id": "combo-familiar-4burgers",
      "name": "Mega Combo Cuarteto C4",
      "category": "combos",
      "description": "4 Hamburguesas dobles smash + 2 raciones grandes de papas + 4 bebidas.",
      "priceUSD": 28,
      "tags": [
        "Familiar"
      ]
    }
  ],
  "managerKpis": {
    "activeReservations": 15,
    "capacityPercentage": 85,
    "todaySalesUSD": 1140,
    "avgTicketUSD": 19
  },
  "sampleBookings": [
    {
      "id": "RC4-801",
      "clientName": "Jhonathan Rivas",
      "details": "Combo Dupleta C4 + Loaded Fries · Delivery",
      "time": "07:30 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 24.5
    },
    {
      "id": "RC4-802",
      "clientName": "Kelly Zambrano",
      "details": "2x Burger C4 Bomba · Pick-Up Express",
      "time": "08:15 PM",
      "status": "en_mesa",
      "pax": 2,
      "totalUSD": 20
    },
    {
      "id": "RC4-803",
      "clientName": "Marcos Díaz",
      "details": "Mega Combo Cuarteto · Delivery",
      "time": "09:00 PM",
      "status": "pendiente",
      "pax": 4,
      "totalUSD": 30
    }
  ]
},

  {
  "slug": "tepuy_360",
  "batch": "dia8",
  "archetype": "gourmet-booking",
  "name": "Tepuy 360 Restaurant Mirador",
  "handle": "tepuy.360",
  "category": "Restaurante Mirador 360° · Cortes a la Brasa · Atardeceres & Montaña",
  "badgeText": "🌄 #Tepuy360 · Vista Panorámica 360 Grados, Fogata & Cortes Prime",
  "tagline": "Una experiencia gastronómica sobre las nubes con vista panorámica 360 y parrilla de autor",
  "heroTitle": "Gastronomía sobre las nubes, fogata y",
  "heroHighlight": "reserva de mesa con vista 360 garantizada",
  "heroSubtitle": "Asegura tu mesa en terraza mirador con vista 360°, preselecciona tus cortes a la brasa y recibe tu pase digital con código QR para ingreso directo.",
  "logo": "/marcas/tepuy_360.jpg",
  "coverImage": "/marcas/tepuy_360-cover.jpg",
  "palette": {
    "primary": "#9A3412",
    "primaryHover": "#7C2D12",
    "secondary": "#0284C7",
    "accent": "#EA580C",
    "darkBg": "#140905",
    "cardBg": "rgba(35, 18, 10, 0.85)",
    "textLight": "#FFF7ED",
    "textMuted": "#FED7AA",
    "border": "rgba(234, 88, 12, 0.25)",
    "glow": "rgba(154, 52, 18, 0.25)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Tepuy 360 es una experiencia gastronómica que domina el horizonte desde las alturas. Con una perspectiva de 360 grados sobre el valle y las montañas, ofrece cortes de carne a las brasas, fogatas nocturnas al aire libre y una propuesta de coctelería para contemplar los atardeceres.",
  "introStats": [
    {
      "label": "Perspectiva",
      "value": "360 Grados",
      "detail": "Vista panorámica total sobre el valle"
    },
    {
      "label": "Ambiente",
      "value": "Fogata & Brasa",
      "detail": "Clima fresco de montaña con fogatas"
    },
    {
      "label": "Control de Acceso",
      "value": "Pase QR",
      "detail": "Reserva garantizada sin esperas en subida"
    }
  ],
  "trustBadges": [
    "Mesa Panorámica Garantizada",
    "Cortes Prime a la Brasa",
    "Estacionamiento Privado con Vigilancia"
  ],
  "whatsappPitchCopy": "Hola equipo de Tepuy 360! 🌄 ¿Cuántos clientes que suben al mirador se quedan sin mesa o se van frustrados porque el chat de reservas colapsa y no confirman a tiempo los turnos de atardecer?\\n\\nLes preparé una solución donde sus visitantes eligen su mesa con vista 360 garantizada, reciben su pase con código QR para entrar directo y ustedes controlan el aforo sin perder tiempo en mensajes sueltos:\\n👉 https://byte-bridge-tau.vercel.app/demos/tepuy_360\\n\\n¿Les muestro en 5 minutos cómo funciona?",
  "address": "Alturas de Hoyo de la Puerta / Galipán / El Hatillo, Caracas",
  "mapsUrl": "https://maps.google.com/?q=Tepuy+360+Caracas",
  "hours": "Jueves a Domingo: 12:00 PM - 11:00 PM",
  "phone": "+58 412-0308674",
  "instagramUrl": "https://www.instagram.com/tepuy.360/",
  "bookingType": "reserva-gourmet",
  "bookingTitle": "Reserva de Mesas Mirador & Fogata",
  "bookingSubtitle": "Asegura tu ubicación en terraza panorámica con pase digital",
  "bookingOptions": [
    {
      "id": "mesa-mirador-360",
      "name": "Mesa Mirador 360° (Sunset)",
      "description": "Mesa en baranda con vista despejada de 360 grados durante el atardecer y anochecer.",
      "priceUSD": 20,
      "unit": "depósito consumible",
      "badge": "Más Solicitada",
      "features": [
        "Vista 360° panorámica",
        "Pase QR directo",
        "Copa de bienvenida"
      ]
    },
    {
      "id": "mesa-fogata-nocturna",
      "name": "Zona Fogata Nocturna VIP (6 pax)",
      "description": "Lounge al aire libre alrededor de la fogata con mantas térmicas y servicio de parrillada.",
      "priceUSD": 40,
      "unit": "depósito consumible",
      "badge": "Experiencia Montaña",
      "features": [
        "Fogata encendida privada",
        "Malvaviscos para asar",
        "Atención prioritaria"
      ]
    }
  ],
  "categories": [
    {
      "id": "carnes",
      "name": "Parrilla de Altura",
      "icon": "🥩"
    },
    {
      "id": "tablas",
      "name": "Tablas & Entradas",
      "icon": "🧀"
    },
    {
      "id": "fogata",
      "name": "Experiencia Fogata",
      "icon": "🔥"
    },
    {
      "id": "cocteles",
      "name": "Coctelería Mirador",
      "icon": "🍸"
    }
  ],
  "menuItems": [
    {
      "id": "parrillada-tepuy-prime",
      "name": "Gran Parrillada Tepuy 360 (Para Dos)",
      "category": "carnes",
      "description": "Solomo prime a la brasa, chorizo criollo ahumado, pollo marinado, yuca frita crocante, nata llanera y ensalada fresca.",
      "priceUSD": 28,
      "badge": "Insignia",
      "popular": true,
      "tags": [
        "Parrilla",
        "Para Compartir"
      ]
    },
    {
      "id": "tomahawk-tepuy-brasa",
      "name": "Tomahawk al Carbón de Leña (1 kg)",
      "category": "carnes",
      "description": "Imponente corte de res sellado a las brasas con sal gruesa y chimichurri casero, servido sobre tabla de madera.",
      "priceUSD": 38,
      "popular": true,
      "tags": [
        "Cortes Prime"
      ]
    },
    {
      "id": "fondue-quesos-tepuy",
      "name": "Fondue de Quesos Andinos en Cazuela",
      "category": "tablas",
      "description": "Queso ahumado fundido con vino blanco servido en cazuela de hierro caliente con trocitos de pan campesino y salchichas.",
      "priceUSD": 14,
      "badge": "Clima Frío",
      "popular": true,
      "tags": [
        "Queso",
        "Caliente"
      ]
    },
    {
      "id": "kit-malvaviscos-fogata",
      "name": "Kit de Malvaviscos para la Fogata",
      "category": "fogata",
      "description": "Pinchos de madera con malvaviscos gigantes, galletas de miel y chocolate derretido para dorar al fuego vivo.",
      "priceUSD": 8,
      "tags": [
        "Fogata",
        "Experiencia"
      ]
    },
    {
      "id": "coctel-niebla-tepuy",
      "name": "Cóctel Niebla del Tepuy",
      "category": "cocteles",
      "description": "Ron reserva venezolano con zumo de piña asada al carbón, licor de naranja y humo de romero fresco.",
      "priceUSD": 8.5,
      "popular": true,
      "tags": [
        "Signature"
      ]
    },
    {
      "id": "tequenos-tepuy-guayaba",
      "name": "Tequeños Rellenos de Queso & Guayaba",
      "category": "tablas",
      "description": "8 Tequeños dorados con mezcla dulce y salada de queso llanero y dulce de guayaba artesanal.",
      "priceUSD": 7,
      "tags": [
        "Entrada"
      ]
    }
  ],
  "managerKpis": {
    "activeReservations": 15,
    "capacityPercentage": 91,
    "todaySalesUSD": 1980,
    "avgTicketUSD": 42
  },
  "sampleBookings": [
    {
      "id": "TEP-901",
      "clientName": "Gonzalo Henriquez",
      "details": "Mesa Mirador 360° (4 pax) · Sunset",
      "time": "05:00 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 110
    },
    {
      "id": "TEP-902",
      "clientName": "Mariana Capriles",
      "details": "Zona Fogata Nocturna VIP (6 pax) · Cumpleaños",
      "time": "08:00 PM",
      "status": "en_mesa",
      "pax": 6,
      "totalUSD": 180
    },
    {
      "id": "TEP-903",
      "clientName": "Carlos Aristeguieta",
      "details": "Mesa Mirador 360° (2 pax) · Aniversario",
      "time": "06:30 PM",
      "status": "pendiente",
      "pax": 2,
      "totalUSD": 70
    }
  ]
}
,

  // 🌟 DÍA 9 — 10 Soluciones Comerciales Top Caracas
  {
  "slug": "ilduomodeisapori",
  "batch": "dia9",
  "archetype": "gourmet-booking",
  "name": "Il Duomo Dei Sapori",
  "handle": "ilduomodeisapori",
  "category": "Alta Cocina Italiana & Cava",
  "badgeText": "Cucina a Vista · Chef Tony Maldonado · El Hatillo",
  "tagline": "Alta cocina italiana de autor con cocina abierta, pastas frescas artesanales hechas al día y maridaje exclusivo en El Hatillo.",
  "heroTitle": "Cucina Italiana di Autore",
  "heroHighlight": "Experiencia Gourmet",
  "heroSubtitle": "Degusta pastas estiradas a mano, maridajes de etiquetas italianas y recetas del chef en un ambiente íntimo con cocina a la vista.",
  "logo": "/marcas/ilduomodeisapori.jpg",
  "coverImage": "/marcas/ilduomodeisapori-cover.jpg",
  "palette": {
    "primary": "#C49A45",
    "primaryHover": "#AA8232",
    "secondary": "#8B1E24",
    "accent": "#E5B95C",
    "darkBg": "#120F0D",
    "cardBg": "#1C1714",
    "textLight": "#FBF7F0",
    "textMuted": "#B8A898",
    "border": "rgba(196, 154, 69, 0.25)",
    "glow": "rgba(196, 154, 69, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Il Duomo Dei Sapori es el rincón de alta cocina italiana del Chef Tony Maldonado en El Hatillo: cocina abierta donde cada plato se ejecuta al momento con ingredientes importados, trufa fresca y pastas elaboradas a diario.",
  "introStats": [
    {
      "label": "Ocupación de Turnos",
      "value": "95%",
      "detail": "En cenas de viernes y domingos"
    },
    {
      "label": "Ticket Promedio",
      "value": "$55 USD",
      "detail": "Por comensal con maridaje"
    },
    {
      "label": "Cocina Abierta",
      "value": "100% Viva",
      "detail": "Chef Tony Maldonado en sala"
    }
  ],
  "trustBadges": [
    "Cocina Abierta de Autor",
    "Pastas Frescas Hechas al Día",
    "Maridaje con Vinos Italianos"
  ],
  "whatsappPitchCopy": "Buenas tardes, Chef Tony y equipo de Il Duomo Dei Sapori 👋 Les saluda Paul David de ByteBridge.\n\nSabemos que en El Hatillo los fines de semana el salón y la cocina abierta andan a tope, y cuando entran 10 personas a la vez al WhatsApp pidiendo mesa, responder rápido se vuelve imposible sin descuidar el servicio.\n\nPor eso les diseñé una prueba interactiva con su estética, sus pastas estrella y un sistema de reserva directa que confirma comensales, turno y maridaje en 1 solo clic:\n👉 https://byte-bridge-tau.vercel.app/demos/ilduomodeisapori\n\n¿Les parece bien si le echan un vistazo de 2 minutos?",
  "address": "Calle Sucre c/ Calle J, Casco Colonial de El Hatillo, Caracas",
  "mapsUrl": "https://maps.google.com/?q=Il+Duomo+Dei+Sapori+El+Hatillo+Caracas",
  "hours": "Miércoles a Domingo: 12:30 PM – 10:30 PM",
  "phone": "+58 412-2118928",
  "instagramUrl": "https://www.instagram.com/ilduomodeisapori",
  "bcvRate": 70.5,
  "bookingType": "table-reservation",
  "bookingTitle": "Reserva tu Mesa & Experiencia de Cocina Abierta",
  "bookingSubtitle": "Asegura tu turno exclusivo de almuerzo o cena con selección de maridaje guiado",
  "bookingOptions": [
    {
      "id": "duomo-pareja",
      "name": "Mesa Íntima Parejas (Cucina a Vista)",
      "description": "Ubicación preferencial frente a la cocina abierta con copa de Prosecco de bienvenida.",
      "priceUSD": 110,
      "maxCapacity": 2
    },
    {
      "id": "duomo-degustacion",
      "name": "Experiencia Degustación Chef Maldonado (4 Tiempos)",
      "description": "Entrada trufada, 2 pastas artesanales, plato fuerte y postre con maridaje recomendado.",
      "priceUSD": 65,
      "maxCapacity": 6
    },
    {
      "id": "duomo-salon",
      "name": "Mesa Familiar / Ejecutiva (4-6 pax)",
      "description": "Reserva de mesa central para almuerzo dominical o cena corporativa con selección de cava.",
      "priceUSD": 240,
      "maxCapacity": 6
    }
  ],
  "categories": [
    {
      "id": "antipasti",
      "name": "Antipasti & Crudi",
      "description": "Entradas tradicionales con producto de origen"
    },
    {
      "id": "paste",
      "name": "Paste Artigianali",
      "description": "Pastas frescas elaboradas a mano cada mañana"
    },
    {
      "id": "secondi",
      "name": "Secondi Piatti",
      "description": "Cortes nobles y pesca del día"
    }
  ],
  "menuItems": [
    {
      "id": "duo-vitello",
      "name": "Vitello Tonnato Tradizionale",
      "description": "Finas láminas de ternera con crema emulsionada de atún, alcaparras de Pantelleria y microgreens.",
      "priceUSD": 18,
      "category": "antipasti",
      "popular": true
    },
    {
      "id": "duo-gnocchi",
      "name": "Gnocchi al Tartufo e Funghi Porcini",
      "description": "Ñoquis de papa hechos a mano, salsa de trufa negra, setas silvestres y Parmigiano 24 meses.",
      "priceUSD": 22,
      "category": "paste",
      "popular": true
    },
    {
      "id": "duo-tortelli",
      "name": "Tortelli di Zucca & Mantequilla de Salvia",
      "description": "Pasta fresca rellena tradicional lombarda con toque crocante de amaretto.",
      "priceUSD": 20,
      "category": "paste"
    },
    {
      "id": "duo-carbonara",
      "name": "Spaghetti alla Carbonara Auténtica",
      "description": "Guanciale curado, yemas de huevo frescas, pecorino romano DOP y pimienta tostada.",
      "priceUSD": 21,
      "category": "paste",
      "popular": true
    },
    {
      "id": "duo-filetto",
      "name": "Filetto di Manzo al Barolo",
      "description": "Medallón de lomito en salsa cremosa de pimienta verde con reducción de vino Barolo.",
      "priceUSD": 32,
      "category": "secondi"
    },
    {
      "id": "duo-tiramisu",
      "name": "Tiramisú Tradizionale della Nonna",
      "description": "Savoiardi al café espresso Illy, crema de mascarpone auténtico y cacao amargo.",
      "priceUSD": 12,
      "category": "antipasti"
    }
  ],
  "managerKpis": {
    "activeReservations": 9,
    "capacityPercentage": 92,
    "todaySalesUSD": 2150,
    "avgTicketUSD": 55
  },
  "sampleBookings": [
    {
      "id": "DUO-101",
      "clientName": "Alejandro Vollmer",
      "details": "Mesa Frente a Cocina (2 pax) · Aniversario",
      "time": "08:30 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 130
    },
    {
      "id": "DUO-102",
      "clientName": "Valentina Mendoza",
      "details": "Menú Degustación Chef (4 pax)",
      "time": "02:00 PM",
      "status": "en_mesa",
      "pax": 4,
      "totalUSD": 260
    },
    {
      "id": "DUO-103",
      "clientName": "Carlos Zuloaga",
      "details": "Mesa Terraza Privada (6 pax)",
      "time": "09:00 PM",
      "status": "pendiente",
      "pax": 6,
      "totalUSD": 330
    }
  ]
},

  {
  "slug": "urrutia_rest",
  "batch": "dia9",
  "archetype": "table-ordering",
  "name": "Urrutia Restaurante Vasco",
  "handle": "urrutia_rest",
  "category": "Cocina Vasca & Marisquería",
  "badgeText": "Patrimonio Gastronómico de Caracas desde 1962 (+62 Años)",
  "tagline": "El gran templo de la cocina vasca y española en Sabana Grande: bacalao a la vizcaína, mariscos frescos y almuerzos ejecutivos de tradición.",
  "heroTitle": "Tradición Vasca",
  "heroHighlight": "Desde 1962",
  "heroSubtitle": "Pescados frescos del día, calamares en su tinta, pimientos rellenos y la más clásica atención de mantel en Sabana Grande.",
  "logo": "/marcas/urrutia_rest.jpg",
  "coverImage": "/marcas/urrutia_rest-cover.jpg",
  "palette": {
    "primary": "#9E2A2B",
    "primaryHover": "#7F1D1D",
    "secondary": "#2E5266",
    "accent": "#E09F3E",
    "darkBg": "#111417",
    "cardBg": "#1A1F24",
    "textLight": "#F5F5F5",
    "textMuted": "#A3ACB9",
    "border": "rgba(158, 42, 43, 0.3)",
    "glow": "rgba(224, 159, 62, 0.3)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Fundado en 1962, Urrutia es una institución viva de la gastronomía en Caracas. Reconocido por generaciones de comensales, diplomáticos y empresarios por su maestría inalterable en arroces, bacalaos y mariscos.",
  "introStats": [
    {
      "label": "Trayectoria",
      "value": "+62 Años",
      "detail": "Sirviendo en Caracas desde 1962"
    },
    {
      "label": "Ticket Promedio",
      "value": "$42 USD",
      "detail": "Almuerzos ejecutivos y familiares"
    },
    {
      "label": "Especialidad",
      "value": "Pescados & Mariscos",
      "detail": "Entradas diarias de costa"
    }
  ],
  "trustBadges": [
    "Patrimonio Gastronómico Caraqueño",
    "Pescados y Mariscos Frescos",
    "Servicio Tradicional de Mantel"
  ],
  "whatsappPitchCopy": "Estimado equipo del Restaurante Urrutia 👋 Les saluda Paul David de ByteBridge.\n\nEs un orgullo ver cómo mantienen viva la auténtica cocina vasca en Sabana Grande desde hace más de 60 años. En horas pico de almuerzo, atender llamadas y pasar el menú de mariscos por chat a clientes que piden para llevar o quieren reservar mesa satura al personal.\n\nDiseñamos una prueba interactiva con el sello de Urrutia (bacalao a la vizcaína, pimientos, mero) y un catálogo digital que envía el pedido o reserva estructurado a WhatsApp en 1 clic:\n👉 https://byte-bridge-tau.vercel.app/demos/urrutia_rest\n\n¿Tienen 2 minutos para ver cómo funciona?",
  "address": "Av. Francisco Solano López c/ Calle Los Manguitos, Sabana Grande, Caracas",
  "mapsUrl": "https://maps.google.com/?q=Restaurante+Urrutia+Sabana+Grande+Caracas",
  "hours": "Lunes a Domingo: 12:00 PM – 10:00 PM",
  "phone": "+58 414-1330300",
  "instagramUrl": "https://www.instagram.com/urrutia_rest",
  "bcvRate": 70.5,
  "bookingType": "table-ordering-and-reservations",
  "bookingTitle": "Reserva tu Mesa o Pide Comanda Directa",
  "bookingSubtitle": "Coordina tu almuerzo corporativo o pide platos insignia para llevar a tasa oficial",
  "bookingOptions": [
    {
      "id": "urr-almuerzo-ejecutivo",
      "name": "Almuerzo Ejecutivo de Negocios (4 pax)",
      "description": "Mesa en salón principal con pimientos de piquillo, arroz con mariscos y jarra de sangría.",
      "priceUSD": 160,
      "maxCapacity": 4
    },
    {
      "id": "urr-familiar-domingo",
      "name": "Reserva Familiar Tradicional (6-8 pax)",
      "description": "Mesa amplia para domingos familiares con selección de bacalaos y pescados a la vasca.",
      "priceUSD": 280,
      "maxCapacity": 8
    },
    {
      "id": "urr-mesa-pareja",
      "name": "Mesa Clásica Pareja (2 pax)",
      "description": "Almuerzo o cena íntima con plato de marisco fresco y crema catalana.",
      "priceUSD": 85,
      "maxCapacity": 2
    }
  ],
  "categories": [
    {
      "id": "entradas",
      "name": "Entradas & Tapas Vascas",
      "description": "Pimientos de piquillo, pulpos y calamares"
    },
    {
      "id": "pescados",
      "name": "Pescados & Bacalao",
      "description": "Nuestra gran especialidad de mar"
    },
    {
      "id": "arroces",
      "name": "Arroces & Mariscos",
      "description": "Guisos lentos y caldos marineros"
    }
  ],
  "menuItems": [
    {
      "id": "urr-piquillo",
      "name": "Pimientos del Piquillo Rellenos",
      "description": "Rellenos de bacalao o mero en reducción de salsa vizcaína tradicional.",
      "priceUSD": 15,
      "category": "entradas",
      "popular": true
    },
    {
      "id": "urr-pulpo",
      "name": "Pulpo a la Gallega Tradicional",
      "description": "Láminas tiernas sobre patatas al vapor, pimentón de la Vera y aceite virgen extra.",
      "priceUSD": 22,
      "category": "entradas",
      "popular": true
    },
    {
      "id": "urr-calamares",
      "name": "Calamares en su Tinta con Arroz",
      "description": "Guisados a fuego lento en su tinta natural con arroz blanco aromatizado.",
      "priceUSD": 24,
      "category": "pescados",
      "popular": true
    },
    {
      "id": "urr-bacalao",
      "name": "Bacalao a la Vizcaína Clásico",
      "description": "Lomo de bacalao desalado con confitura de pimiento choricero y cebolla caramelizada.",
      "priceUSD": 28,
      "category": "pescados",
      "popular": true
    },
    {
      "id": "urr-mero",
      "name": "Mero en Salsa Verde con Almejas",
      "description": "Lomo fresco ligado con caldo de marisco, almejas vivas y espárragos verdes.",
      "priceUSD": 32,
      "category": "pescados"
    },
    {
      "id": "urr-crema",
      "name": "Crema Catalana Quemada al Momento",
      "description": "Postre tradicional con fina costra de caramelo crujiente.",
      "priceUSD": 10,
      "category": "entradas"
    }
  ],
  "managerKpis": {
    "activeReservations": 12,
    "capacityPercentage": 88,
    "todaySalesUSD": 2890,
    "avgTicketUSD": 42
  },
  "sampleBookings": [
    {
      "id": "URR-201",
      "clientName": "Dr. Fernando Arreaza",
      "details": "Almuerzo Corporativo (4 pax) · Bacalao",
      "time": "01:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 175
    },
    {
      "id": "URR-202",
      "clientName": "Familia Echeverría",
      "details": "Mesa Central Domingo (6 pax)",
      "time": "02:00 PM",
      "status": "en_mesa",
      "pax": 6,
      "totalUSD": 290
    },
    {
      "id": "URR-203",
      "clientName": "Ignacio Goicoechea",
      "details": "Reserva de Cena (2 pax)",
      "time": "08:00 PM",
      "status": "pendiente",
      "pax": 2,
      "totalUSD": 95
    }
  ]
},

  {
  "slug": "restaurantsanpietro",
  "batch": "dia9",
  "archetype": "gourmet-booking",
  "name": "San Pietro Restaurante",
  "handle": "restaurantsanpietro",
  "category": "Ristorante Italiano & Terraza",
  "badgeText": "Alta Cocina Mediterránea en Las Mercedes (+16 Años)",
  "tagline": "El auténtico sabor del sur de Italia y Sicilia en Las Mercedes: carpaccios, pastas caseras, pesca fresca a la brasa y cava de vinos.",
  "heroTitle": "Sapore di Sicilia",
  "heroHighlight": "En Las Mercedes",
  "heroSubtitle": "A 50 metros de la Plaza Alfredo Sadel. Disfruta de fettuccine alle vongole, risottos de mariscos y carnes selectas con servicio de terraza.",
  "logo": "/marcas/restaurantsanpietro.jpg",
  "coverImage": "/marcas/restaurantsanpietro-cover.jpg",
  "palette": {
    "primary": "#1A365D",
    "primaryHover": "#102A4C",
    "secondary": "#B8860B",
    "accent": "#2B6CB0",
    "darkBg": "#0C131D",
    "cardBg": "#141D2B",
    "textLight": "#FFFFFF",
    "textMuted": "#94A3B8",
    "border": "rgba(184, 134, 11, 0.3)",
    "glow": "rgba(43, 108, 176, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Con más de 16 años de trayectoria ininterrumpida en Las Mercedes, San Pietro representa la elegancia clásica de la cocina mediterránea e italiana del sur, con una de las cavas de vinos más respetadas de Caracas.",
  "introStats": [
    {
      "label": "Experiencia",
      "value": "+16 Años",
      "detail": "Líder en Las Mercedes desde 2008"
    },
    {
      "label": "Ticket Promedio",
      "value": "$48 USD",
      "detail": "Por comensal con vino y postre"
    },
    {
      "label": "Ubicación",
      "value": "Plaza Sadel",
      "detail": "Calle Londres con Valet Parking"
    }
  ],
  "trustBadges": [
    "Cocina del Sur de Italia & Sicilia",
    "Terraza Exclusiva Las Mercedes",
    "Cava de Vinos & Valet Parking"
  ],
  "whatsappPitchCopy": "Buenas tardes, equipo de San Pietro Restaurante 👋 Les saluda Paul David de ByteBridge.\n\nSabemos que en Las Mercedes el servicio de cena es muy exigente y cuando el salón está lleno, nadie tiene tiempo de contestar de inmediato las reservas que entran por WhatsApp. En esa zona, un comensal que espera 15 minutos suele irse a otro sitio a pie de calle.\n\nLes construí una prueba interactiva adaptada a San Pietro con su menú de pescados y pastas, selección de turnos de reserva y cálculo a tasa oficial BCV listo para despachar en 1 clic:\n👉 https://byte-bridge-tau.vercel.app/demos/restaurantsanpietro\n\n¿Les parece bien si le dan un vistazo rápido?",
  "address": "Final Calle Londres c/ Calle Trinidad (a 50m Plaza Alfredo Sadel), Las Mercedes, Caracas",
  "mapsUrl": "https://maps.google.com/?q=Restaurant+San+Pietro+Las+Mercedes+Caracas",
  "hours": "Lunes a Domingo: 12:00 PM – 11:30 PM",
  "phone": "+58 412-4513645",
  "instagramUrl": "https://www.instagram.com/restaurantsanpietro",
  "bcvRate": 70.5,
  "bookingType": "gourmet-table-reservation",
  "bookingTitle": "Reserva tu Mesa en Terraza o Salón Clásico",
  "bookingSubtitle": "Disfruta de la mejor cocina italiana con maridaje a pasos de la Plaza Sadel",
  "bookingOptions": [
    {
      "id": "sp-terraza-vip",
      "name": "Mesa Terraza Exterior VIP (2-4 pax)",
      "description": "Ubicación al aire libre con ambiente nocturno y servicio prioritario de sommelier.",
      "priceUSD": 100,
      "maxCapacity": 4
    },
    {
      "id": "sp-degustacion-mar",
      "name": "Menú Marinero San Pietro (Carpaccio + Risotto)",
      "description": "Carpaccio de pez espada, risotto frutti di mare y copa de vino blanco italiano.",
      "priceUSD": 52,
      "maxCapacity": 6
    },
    {
      "id": "sp-salon-corporativo",
      "name": "Mesa Corporativa / Familiar (6-8 pax)",
      "description": "Mesa reservada en salón interior climatizado con valet parking garantizado.",
      "priceUSD": 320,
      "maxCapacity": 8
    }
  ],
  "categories": [
    {
      "id": "antipasti",
      "name": "Antipasti & Carpaccios",
      "description": "Cortes finos marinados al estilo mediterráneo"
    },
    {
      "id": "primi",
      "name": "Primi Piatti & Risottos",
      "description": "Pastas frescas caseras y arroces del mar"
    },
    {
      "id": "carni",
      "name": "Carni & Pesce alla Griglia",
      "description": "Carnes nobles y pescados del día"
    }
  ],
  "menuItems": [
    {
      "id": "sp-carpaccio",
      "name": "Carpaccio de Pez Espada",
      "description": "Láminas finas marinadas al limón, alcaparras baby, pimienta rosa y aceite virgen extra.",
      "priceUSD": 18,
      "category": "antipasti",
      "popular": true
    },
    {
      "id": "sp-vongole",
      "name": "Fettuccine alle Vongole Veraci",
      "description": "Pasta fresca al dente salteada con almejas vivas, vino blanco, ajo confitado y perejil.",
      "priceUSD": 24,
      "category": "primi",
      "popular": true
    },
    {
      "id": "sp-risotto",
      "name": "Risotto Frutti di Mare al Pomodoro",
      "description": "Arroz carnaroli con calamares, camarones, mejillones y albahaca fresca.",
      "priceUSD": 26,
      "category": "primi",
      "popular": true
    },
    {
      "id": "sp-lasagna",
      "name": "Lasaña Clásica Ragú de Cordero",
      "description": "Capas de pasta casera, bechamel ligera y reducción prolongada de cordero.",
      "priceUSD": 22,
      "category": "primi"
    },
    {
      "id": "sp-chuletas",
      "name": "Chuletas de Cordero a la Brasa",
      "description": "Cortes tiernos a la parrilla con hierbas provenzales y patatas rústicas.",
      "priceUSD": 35,
      "category": "carni",
      "popular": true
    },
    {
      "id": "sp-profiteroles",
      "name": "Profiteroles con Chocolate Caliente",
      "description": "Rellenos de crema pastelera artesanal y bañados en chocolate oscuro fundido.",
      "priceUSD": 11,
      "category": "antipasti"
    }
  ],
  "managerKpis": {
    "activeReservations": 14,
    "capacityPercentage": 90,
    "todaySalesUSD": 3120,
    "avgTicketUSD": 48
  },
  "sampleBookings": [
    {
      "id": "SP-301",
      "clientName": "Mauricio Benítez",
      "details": "Mesa Terraza Pareja (2 pax) · Carpaccio & Vinos",
      "time": "08:00 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 115
    },
    {
      "id": "SP-302",
      "clientName": "Dra. Carolina Sosa",
      "details": "Almuerzo Ejecutivo (4 pax)",
      "time": "01:30 PM",
      "status": "en_mesa",
      "pax": 4,
      "totalUSD": 210
    },
    {
      "id": "SP-303",
      "clientName": "Grupo Corporativo Banesco",
      "details": "Cena de Cierre (8 pax)",
      "time": "09:00 PM",
      "status": "pendiente",
      "pax": 8,
      "totalUSD": 440
    }
  ]
},

  {
  "slug": "corderoccs",
  "batch": "dia9",
  "archetype": "gourmet-booking",
  "name": "Cordero Caracas",
  "handle": "corderoccs",
  "category": "Alta Cocina de Autor · 50 Best",
  "badgeText": "Latin America's 50 Best Discovery · Farm to Table",
  "tagline": "El restaurante de alta cocina que redefinió la gastronomía en Venezuela: cocina de autor con cordero de pastoreo en alianza con Proyecto Ubre.",
  "heroTitle": "Alta Cocina de Autor",
  "heroHighlight": "50 Best Restaurants",
  "heroSubtitle": "Chef Issam Koteich y Pedro Khalil en el Piso 5 del Tolón Fashion Mall. Menú degustación guiado y coctelería botánica.",
  "logo": "/marcas/corderoccs.jpg",
  "coverImage": "/marcas/corderoccs-cover.jpg",
  "palette": {
    "primary": "#2B2D2F",
    "primaryHover": "#1F2022",
    "secondary": "#C2A676",
    "accent": "#D4AF37",
    "darkBg": "#0E0F10",
    "cardBg": "#17181A",
    "textLight": "#F8F8F8",
    "textMuted": "#A8A8A8",
    "border": "rgba(212, 175, 55, 0.25)",
    "glow": "rgba(212, 175, 55, 0.35)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Cordero Caracas es un hito de la gastronomía venezolana contemporánea. Galardonado en Latin America's 50 Best Restaurants, su propuesta 'farm-to-table' aprovecha de forma sostenible el cordero criado en Finca Ubre (Yaracuy).",
  "introStats": [
    {
      "label": "50 Best Discovery",
      "value": "Ranked",
      "detail": "Latin America's 50 Best Restaurants"
    },
    {
      "label": "Ticket Promedio",
      "value": "$70 USD",
      "detail": "Menú degustación con maridaje de autor"
    },
    {
      "label": "Sostenibilidad",
      "value": "Km 0",
      "detail": "Alianza directa con Proyecto Ubre"
    }
  ],
  "trustBadges": [
    "Latin America's 50 Best Discovery",
    "Farm to Table con Proyecto Ubre",
    "Alta Cocina de Issam Koteich"
  ],
  "whatsappPitchCopy": "Buenas tardes, Chef Issam y equipo de Cordero Caracas 👋 Les saluda Paul David de ByteBridge.\n\nFelicitaciones por el inmenso impacto que están logrando con la cocina de autor de cordero y Proyecto Ubre. Con esa demanda, sabemos el reto que representa coordinar por WhatsApp turnos de menú degustación, preferencias y confirmaciones sin quitarle tiempo valioso al equipo de sala en pleno servicio.\n\nLes preparé una demo interactiva pensada exclusivamente para Cordero: una experiencia digital donde el comensal agenda su turno, selecciona el menú degustación y recibe su confirmación formal en 1 clic:\n👉 https://byte-bridge-tau.vercel.app/demos/corderoccs\n\n¿Les parece bien si le echan una mirada rápida de 2 minutos?",
  "address": "Tolón Fashion Mall, Piso 5 (Terraza Gourmet), Av. Principal de Las Mercedes, Caracas",
  "mapsUrl": "https://maps.google.com/?q=Cordero+Restaurante+Tolon+Fashion+Mall+Caracas",
  "hours": "Martes a Domingo: 12:30 PM – 11:00 PM",
  "phone": "+58 412-3764580",
  "instagramUrl": "https://www.instagram.com/corderoccs",
  "bcvRate": 70.5,
  "bookingType": "degustation-booking",
  "bookingTitle": "Reserva tu Experiencia Gastronómica en Cordero",
  "bookingSubtitle": "Elige entre el menú degustación guiado o la carta de autor con maridaje botánico",
  "bookingOptions": [
    {
      "id": "cor-degustacion",
      "name": "Menú Degustación Signature (6 Tiempos)",
      "description": "Viaje gastronómico por los diferentes cortes del cordero con técnicas de vanguardia.",
      "priceUSD": 75,
      "maxCapacity": 4
    },
    {
      "id": "cor-mesa-barra",
      "name": "Experiencia en Barra con el Chef (2 pax)",
      "description": "Servicio interactivo frente a la cocina con maridaje de cócteles de autor.",
      "priceUSD": 160,
      "maxCapacity": 2
    },
    {
      "id": "cor-mesa-saloon",
      "name": "Mesa Principal Salón (4-6 pax)",
      "description": "Para grupos y cenas corporativas con paletilla confitada y selección de bodega.",
      "priceUSD": 360,
      "maxCapacity": 6
    }
  ],
  "categories": [
    {
      "id": "crudos",
      "name": "Crudos & Entradas de Vanguardia",
      "description": "Técnicas contemporáneas y curados propios"
    },
    {
      "id": "principales",
      "name": "Platos Fuertes & Cortes Nobles",
      "description": "Cocciones lentas y brasa de cordero"
    },
    {
      "id": "cocteleria",
      "name": "Coctelería Botánica",
      "description": "Destilados infusionados y autoría de barra"
    }
  ],
  "menuItems": [
    {
      "id": "cor-tartar",
      "name": "Tartar de Cordero al Cuchillo",
      "description": "Aliñado al momento con emulsiones cítricas, mostaza en grano y tostas crujientes.",
      "priceUSD": 17,
      "category": "crudos",
      "popular": true
    },
    {
      "id": "cor-tonnata",
      "name": "Lingua Tonnata a Baja Temperatura",
      "description": "Lengua de cordero confitada con emulsión clásica tonnata y alcaparras fritas.",
      "priceUSD": 16,
      "category": "crudos"
    },
    {
      "id": "cor-arroz",
      "name": "Arroz Meloso de Cordero & Morcilla",
      "description": "Fondo denso de cordero de granja, setas silvestres y sofrito criollo.",
      "priceUSD": 26,
      "category": "principales",
      "popular": true
    },
    {
      "id": "cor-paletilla",
      "name": "Paletilla de Cordero Lechal Glaseada",
      "description": "Horneada durante 16 horas en sus propios jugos con puré rústico trufado.",
      "priceUSD": 36,
      "category": "principales",
      "popular": true
    },
    {
      "id": "cor-rack",
      "name": "Rack de Cordero en Costra de Hierbas",
      "description": "Costillar tierno a la brasa con jugo de carne reducido y vegetales glaseados.",
      "priceUSD": 39,
      "category": "principales",
      "popular": true
    },
    {
      "id": "cor-coctel",
      "name": "Cóctel Botánico Ubre Spritz",
      "description": "Ginebra artesanal, cordial de hierbas del huerto, licor de saúco y espumoso brut.",
      "priceUSD": 14,
      "category": "cocteleria"
    }
  ],
  "managerKpis": {
    "activeReservations": 16,
    "capacityPercentage": 96,
    "todaySalesUSD": 4200,
    "avgTicketUSD": 70
  },
  "sampleBookings": [
    {
      "id": "COR-401",
      "clientName": "Gustavo Cisneros Jr.",
      "details": "Menú Degustación Maridado (4 pax)",
      "time": "08:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 360
    },
    {
      "id": "COR-402",
      "clientName": "Patricia Phelps de Cisneros",
      "details": "Mesa Salón Terraza (2 pax)",
      "time": "02:00 PM",
      "status": "en_mesa",
      "pax": 2,
      "totalUSD": 150
    },
    {
      "id": "COR-403",
      "clientName": "Jean-Luc Dupont (Embajada)",
      "details": "Cena Protocolar (6 pax)",
      "time": "09:00 PM",
      "status": "pendiente",
      "pax": 6,
      "totalUSD": 510
    }
  ]
},

  {
  "slug": "casacanela_ve",
  "batch": "dia9",
  "archetype": "table-ordering",
  "name": "Casa Canela Café & Bakery",
  "handle": "casacanela.ve",
  "category": "Café de Especialidad & Bakery",
  "badgeText": "The World's 100 Best Coffee Shops · Masa Madre",
  "tagline": "Cafetería de especialidad de nivel mundial, panadería artesanal de fermentación lenta, pastelería y brunch en El Hatillo y Las Mercedes.",
  "heroTitle": "Especialidad & Bakery",
  "heroHighlight": "Top 100 Coffee Shops",
  "heroSubtitle": "Prueba croissants hojaldrados al 100% mantequilla, métodos filtrados con café venezolano de origen y tostadas en pan de masa madre.",
  "logo": "/marcas/casacanela_ve.jpg",
  "coverImage": "/marcas/casacanela_ve-cover.jpg",
  "palette": {
    "primary": "#C86D51",
    "primaryHover": "#B35A3E",
    "secondary": "#4A3525",
    "accent": "#E6A15C",
    "darkBg": "#17120F",
    "cardBg": "#231B16",
    "textLight": "#FFF8F2",
    "textMuted": "#C2AEA0",
    "border": "rgba(200, 109, 81, 0.3)",
    "glow": "rgba(230, 161, 92, 0.35)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Incluida en el ranking The World's 100 Best Coffee Shops, Casa Canela es un paraíso para los amantes del café de origen y la repostería artesanal. Su masa madre y hojaldres marcan el estándar del brunch en Caracas.",
  "introStats": [
    {
      "label": "Reconocimiento",
      "value": "Top 100",
      "detail": "The World's 100 Best Coffee Shops"
    },
    {
      "label": "Ticket Promedio",
      "value": "$16 USD",
      "detail": "Por persona en brunch y pastelería"
    },
    {
      "label": "Masa Madre",
      "value": "48 Horas",
      "detail": "Fermentación natural sin químicos"
    }
  ],
  "trustBadges": [
    "The World's 100 Best Coffee Shops",
    "Café de Especialidad Venezolano",
    "Panadería 100% Masa Madre"
  ],
  "whatsappPitchCopy": "Buenos días, equipo de Casa Canela Café & Bakery 👋 Les saluda Paul David de ByteBridge.\n\nFelicitaciones por ser un referente indiscutible del café de especialidad y la pastelería en Caracas. Sin embargo, los fines de semana la vitrina y el salón andan a millón, y estar enviando fotos de tortas, explicando sabores y calculando la tasa del día por WhatsApp le quita horas al personal.\n\nLes construí una vitrina digital interactiva para Casa Canela donde sus clientes pueden ver los cafés de especialidad, armar sus cajas de croissants o pedir brunch con cálculo automático a tasa oficial BCV y despacho en 1 clic a su WhatsApp:\n👉 https://byte-bridge-tau.vercel.app/demos/casacanela_ve\n\n¿Les parece si le echan un vistazo de 2 minutos?",
  "address": "Calle Bolívar c/ Calle El Progreso, Casco Colonial de El Hatillo (y La Grand Plaz Las Mercedes), Caracas",
  "mapsUrl": "https://maps.google.com/?q=Casa+Canela+El+Hatillo+Caracas",
  "hours": "Martes a Domingo: 8:00 AM – 8:00 PM",
  "phone": "+58 424-1343300",
  "instagramUrl": "https://www.instagram.com/casacanela.ve",
  "bcvRate": 70.5,
  "bookingType": "brunch-table-and-pickup",
  "bookingTitle": "Pide en Mesa o Encarga tu Box de Brunch",
  "bookingSubtitle": "Disfruta de café de especialidad y pastelería recién horneada sin colas en caja",
  "bookingOptions": [
    {
      "id": "can-box-brunch",
      "name": "Box Brunch Casa Canela para Dos",
      "description": "2 cafés de especialidad, 2 croissants de almendras, tostada de salmón y bowl de frutas.",
      "priceUSD": 28,
      "maxCapacity": 2
    },
    {
      "id": "can-box-pasteleria",
      "name": "Caja Surtida de Hojaldres (6 unid)",
      "description": "Selección de croissants de chocolate, almendras, rollos de canela y pain au chocolat.",
      "priceUSD": 18,
      "maxCapacity": 1
    },
    {
      "id": "can-mesa-terraza",
      "name": "Mesa Terraza Desayuno Fin de Semana (4 pax)",
      "description": "Reserva de mesa en el patio colonial de El Hatillo para desayuno o merienda.",
      "priceUSD": 60,
      "maxCapacity": 4
    }
  ],
  "categories": [
    {
      "id": "cafe",
      "name": "Café de Especialidad & Métodos",
      "description": "Granos de fincas venezolanas tostados artesanalmente"
    },
    {
      "id": "panaderia",
      "name": "Panadería de Masa Madre & Croissants",
      "description": "Hojaldres 100% mantequilla pura"
    },
    {
      "id": "brunch",
      "name": "Tostadas & Brunch Salado",
      "description": "Opciones saladas gourmet para cualquier hora"
    }
  ],
  "menuItems": [
    {
      "id": "can-v60",
      "name": "Café Filtrado V60 Grano de Origen",
      "description": "Extracción artesanal con notas florales, chocolate oscuro y cuerpo limpio.",
      "priceUSD": 4.5,
      "category": "cafe",
      "popular": true
    },
    {
      "id": "can-croissant",
      "name": "Croissant de Almendras & Frangipane",
      "description": "Hojaldrado 100% mantequilla relleno de crema de almendras tostadas.",
      "priceUSD": 5.5,
      "category": "panaderia",
      "popular": true
    },
    {
      "id": "can-salmon",
      "name": "Tostada de Salmón Ahumado & Aguacate",
      "description": "En pan de masa madre con queso crema a las finas hierbas y huevo poché.",
      "priceUSD": 12,
      "category": "brunch",
      "popular": true
    },
    {
      "id": "can-pancakes",
      "name": "Pancakes Esponjosos con Frutos Rojos",
      "description": "Con sirope de arce puro, crema batida de vainilla y arándanos frescos.",
      "priceUSD": 9.5,
      "category": "brunch",
      "popular": true
    },
    {
      "id": "can-sandwich",
      "name": "Sándwich Roast Beef & Queso Gruyère",
      "description": "En baguette de masa madre crujiente con cebollas caramelizadas al balsámico.",
      "priceUSD": 11.5,
      "category": "brunch"
    },
    {
      "id": "can-zanahoria",
      "name": "Torta Húmeda de Zanahoria & Nuez",
      "description": "Con generoso frosting artesanal de queso mascarpone y canela de Ceylán.",
      "priceUSD": 6,
      "category": "panaderia"
    }
  ],
  "managerKpis": {
    "activeReservations": 18,
    "capacityPercentage": 94,
    "todaySalesUSD": 1860,
    "avgTicketUSD": 16
  },
  "sampleBookings": [
    {
      "id": "CAN-501",
      "clientName": "Valeria Brandt",
      "details": "Mesa Patio Colonial (2 pax) · Brunch",
      "time": "10:30 AM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 35
    },
    {
      "id": "CAN-502",
      "clientName": "Sebastián Pardo",
      "details": "Box Surtido Pastelería para Llevar",
      "time": "11:15 AM",
      "status": "en_mesa",
      "pax": 1,
      "totalUSD": 24
    },
    {
      "id": "CAN-503",
      "clientName": "Camila Rivas",
      "details": "Brunch Familiar (4 pax)",
      "time": "09:45 AM",
      "status": "pendiente",
      "pax": 4,
      "totalUSD": 68
    }
  ]
},

  {
  "slug": "modoccs",
  "batch": "dia9",
  "archetype": "table-ordering",
  "name": "MoDo Caracas",
  "handle": "modoccs",
  "category": "Complejo Gastronómico & MoDo Bowling",
  "badgeText": "2.800 m² · 5 Conceptos · Bowling Profesional · Chacao",
  "tagline": "El distrito gastronómico y de entretenimiento más vibrante de Caracas: Kibun Sushi, Mondano Pizza, LeBleu Brasserie, tacos y bowling profesional.",
  "heroTitle": "Distrito Gastronómico",
  "heroHighlight": "& MoDo Bowling",
  "heroSubtitle": "2.800 m² en Chacao con 5 cocinas, coctelería de autor, música en vivo y pistas de bowling. Pide a cualquier barra desde tu mesa en 1 clic.",
  "logo": "/marcas/modoccs.jpg",
  "coverImage": "/marcas/modoccs-cover.jpg",
  "palette": {
    "primary": "#E63946",
    "primaryHover": "#D62828",
    "secondary": "#457B9D",
    "accent": "#A8DADC",
    "darkBg": "#0B0F14",
    "cardBg": "#141A22",
    "textLight": "#F1FAEE",
    "textMuted": "#8D99AE",
    "border": "rgba(230, 57, 70, 0.3)",
    "glow": "rgba(230, 57, 70, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "MoDo Caracas reúne bajo un mismo techo una experiencia social inigualable en Chacao: Kibun (nikkei), Mondano (pizzería napolitana), LeBleu (carnes y brasserie), El Piquín (taquería), bowling profesional y shows en vivo.",
  "introStats": [
    {
      "label": "Espacio Total",
      "value": "2.800 m²",
      "detail": "5 conceptos culinarios y tarima en vivo"
    },
    {
      "label": "Pistas Bowling",
      "value": "4 Líneas",
      "detail": "Pistas Brunswick profesionales"
    },
    {
      "label": "Capacidad",
      "value": "+450 Pax",
      "detail": "Alto flujo en sala y terraza"
    }
  ],
  "trustBadges": [
    "Complejo Multiconcepto Centralizado",
    "Pistas Profesionales MoDo Bowling",
    "Shows y Música en Vivo"
  ],
  "whatsappPitchCopy": "Hola equipo de MoDo Caracas! 👋 ¿Cuántas reservas de bowling y pedidos de grupos se les quedan fríos los fines de semana en WhatsApp porque el chat se desborda y no dan abasto para responder?\n\nCon 2.800 m² y 5 cocinas distintas, coordinar comandas y turnos a mano cuesta comensales. Les preparé una prueba directa con su oferta de MoDo Bowling, Kibun y Mondano para que cada mesa pida su ronda o reserve su pista en 3 clics sin esperar mesoneros:\n👉 https://byte-bridge-tau.vercel.app/demos/modoccs\n\n¿Les muestro en 5 minutos cómo funciona?",
  "address": "Entre Calle Mata de Coco y Av. Mohedano (frente al Mercado Municipal), Chacao, Caracas",
  "mapsUrl": "https://maps.google.com/?q=MoDo+Caracas+Chacao",
  "hours": "Miércoles a Domingo: 12:00 PM – 02:00 AM",
  "phone": "+58 412-6173395",
  "instagramUrl": "https://www.instagram.com/modoccs",
  "bcvRate": 70.5,
  "bookingType": "bowling-and-table-order",
  "bookingTitle": "Reserva Pistas de Bowling o Pide en Mesa",
  "bookingSubtitle": "Comanda pizzas, sushi y cócteles desde tu asiento o aparta tu línea de bowling",
  "bookingOptions": [
    {
      "id": "modo-bowling-1h",
      "name": "1 Hora de MoDo Bowling (hasta 6 jugadores)",
      "description": "Incluye alquiler de pista profesional Brunswick y calzado especial para hasta 6 personas.",
      "priceUSD": 35,
      "maxCapacity": 6
    },
    {
      "id": "modo-combo-amigos",
      "name": "Pack Bowling + Pizza Mondano + Cervezas",
      "description": "1 hora de pista + 1 Pizza Trufada Mondano + balde de 6 cervezas importadas.",
      "priceUSD": 60,
      "maxCapacity": 6
    },
    {
      "id": "modo-mesa-lounge",
      "name": "Mesa VIP Lounge frente a Tarima (6-8 pax)",
      "description": "Consumo mínimo concertado con servicio de botella y rolls Kibun para la noche.",
      "priceUSD": 180,
      "maxCapacity": 8
    }
  ],
  "categories": [
    {
      "id": "bowling",
      "name": "MoDo Bowling & Pistas",
      "description": "Líneas de boliche por hora con calzado"
    },
    {
      "id": "kibun",
      "name": "Kibun Sushi & Nikkei",
      "description": "Rolls de autor, tiraditos y tatakis"
    },
    {
      "id": "mondano",
      "name": "Mondano Pizza Napolitana",
      "description": "Masa madre madurada 48h al horno"
    }
  ],
  "menuItems": [
    {
      "id": "modo-pista",
      "name": "Hora de Pista MoDo Bowling (hasta 6 pax)",
      "description": "Línea Brunswick profesional por 60 min con calzado desinfectado incluido.",
      "priceUSD": 35,
      "category": "bowling",
      "popular": true
    },
    {
      "id": "modo-trufada",
      "name": "Pizza Trufada Mondano Napolitana",
      "description": "Masa madre madurada 48h, fior di latte, crema de trufas, hongos y aceite de trufa blanca.",
      "priceUSD": 18,
      "category": "mondano",
      "popular": true
    },
    {
      "id": "modo-tataki",
      "name": "Roll Tataki Truffle Kibun",
      "description": "Langostino crocante y aguacate coronado con atún sellado al soplete y ponzu.",
      "priceUSD": 16,
      "category": "kibun",
      "popular": true
    },
    {
      "id": "modo-lomito",
      "name": "Lomito Café de París LeBleu",
      "description": "Medallón a la parrilla bañado en mantequilla Café de París con papas rústicas.",
      "priceUSD": 26,
      "category": "mondano",
      "popular": true
    },
    {
      "id": "modo-tacos",
      "name": "Tacos de Lechón en Caja China (3 unid)",
      "description": "Cerdo tierno cocido en caja china, piel crujiente, cebolla encurtida y salsa verde.",
      "priceUSD": 13.5,
      "category": "mondano"
    },
    {
      "id": "modo-coctel",
      "name": "Cóctel MoDo Signature Spritz",
      "description": "Aperol, cordial de maracuyá, espumoso brut y perfume de romero tostado.",
      "priceUSD": 9,
      "category": "bowling"
    }
  ],
  "managerKpis": {
    "activeReservations": 24,
    "capacityPercentage": 92,
    "todaySalesUSD": 6850,
    "avgTicketUSD": 38
  },
  "sampleBookings": [
    {
      "id": "MOD-601",
      "clientName": "Rodrigo Tinoco",
      "details": "Pista 2 Bowling (6 pax) · 1 Hora",
      "time": "07:00 PM",
      "status": "confirmada",
      "pax": 6,
      "totalUSD": 60
    },
    {
      "id": "MOD-602",
      "clientName": "Andrea Carvallo",
      "details": "Mesa Terraza Kibun (4 pax)",
      "time": "09:00 PM",
      "status": "en_mesa",
      "pax": 4,
      "totalUSD": 145
    },
    {
      "id": "MOD-603",
      "clientName": "Empresa Mercantil (Evento)",
      "details": "Pistas 3 y 4 + Lounge VIP (12 pax)",
      "time": "08:30 PM",
      "status": "pendiente",
      "pax": 12,
      "totalUSD": 380
    }
  ]
},

  {
  "slug": "lacastanuelave",
  "batch": "dia9",
  "archetype": "gourmet-booking",
  "name": "La Castañuela",
  "handle": "lacastanuelave",
  "category": "Templo Ibérico & Marisquería",
  "badgeText": "Alta Cocina Española en Las Mercedes (+30 Años)",
  "tagline": "El gran templo de la cocina española e ibérica en Las Mercedes: paellas valencianas a la leña, asopados marineros y salones privados.",
  "heroTitle": "Tradición Española",
  "heroHighlight": "En Las Mercedes",
  "heroSubtitle": "Más de 30 años celebrando la gastronomía ibérica: arroces bomba, pulpo a la gallega, cochinillo y la más selecta cava de Riojas y Riberas.",
  "logo": "/marcas/lacastanuelave.jpg",
  "coverImage": "/marcas/lacastanuelave-cover.jpg",
  "palette": {
    "primary": "#8B1E0F",
    "primaryHover": "#6B1409",
    "secondary": "#D4A373",
    "accent": "#E76F51",
    "darkBg": "#120B09",
    "cardBg": "#1E130F",
    "textLight": "#FAF3EE",
    "textMuted": "#B8A49C",
    "border": "rgba(139, 30, 15, 0.3)",
    "glow": "rgba(231, 111, 81, 0.35)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "La Castañuela es un símbolo de abolengo culinario en la Calle París de Las Mercedes. Famoso por sus paellas maestras a fuego lento, mariscos traídos de costa a diario y salones privados para encuentros corporativos y diplomáticos.",
  "introStats": [
    {
      "label": "Trayectoria",
      "value": "+30 Años",
      "detail": "Referente ibérico indiscutible"
    },
    {
      "label": "Ticket Promedio",
      "value": "$55 USD",
      "detail": "Por comensal con paella y reserva de vino"
    },
    {
      "label": "Espacios",
      "value": "Salones VIP",
      "detail": "Áreas privadas para eventos formales"
    }
  ],
  "trustBadges": [
    "Templo Ibérico en Las Mercedes",
    "Paellas Tradicionales con Arroz Bomba",
    "Cava de Vinos Españoles & Flamenco"
  ],
  "whatsappPitchCopy": "Estimado equipo de La Castañuela 👋 ¿Cuántas reservas de familias y almuerzos corporativos se les escapan los fines de semana cuando el WhatsApp se llena de mensajes pidiendo presupuesto de paellas y disponibilidad de salones?\n\nPara un templo gastronómico como el suyo, la confirmación debe ser impecable e inmediata. Les preparé una propuesta exclusiva con su carta ibérica, selección de cavas y reserva de salones privados con cálculo automático a tasa oficial:\n👉 https://byte-bridge-tau.vercel.app/demos/lacastanuelave\n\n¿Les muestro en 5 minutos cómo funciona?",
  "address": "Calle París, entre Av. La Trinidad y Calle Mucuchíes, Las Mercedes, Caracas",
  "mapsUrl": "https://maps.google.com/?q=La+Castañuela+Las+Mercedes+Caracas",
  "hours": "Martes a Domingo: 12:00 PM – 11:00 PM",
  "phone": "+58 414-7868373",
  "instagramUrl": "https://www.instagram.com/lacastanuelave",
  "bcvRate": 70.5,
  "bookingType": "paella-and-saloon-booking",
  "bookingTitle": "Reserva tu Paella o Salón Privado",
  "bookingSubtitle": "Asegura la preparación de tu arroz y salón exclusivo para almuerzos o cenas familiares",
  "bookingOptions": [
    {
      "id": "cas-paella-pareja",
      "name": "Paella Valenciana Tradicional para Dos (2 pax)",
      "description": "Elaborada con arroz bomba español, pollo de granja, azafrán puro y socarrat crujiente.",
      "priceUSD": 42,
      "maxCapacity": 2
    },
    {
      "id": "cas-asopado-mariscos",
      "name": "Asopado Marinero Especial La Castañuela",
      "description": "Langosta, mero, calamar y mejillones aromatizados al vino blanco.",
      "priceUSD": 64,
      "maxCapacity": 4
    },
    {
      "id": "cas-salon-privado",
      "name": "Salón Privado Protocolar (6-10 pax)",
      "description": "Espacio reservado con atención exclusiva de camarero y servicio de sommelier.",
      "priceUSD": 450,
      "maxCapacity": 10
    }
  ],
  "categories": [
    {
      "id": "tapas",
      "name": "Tapas & Mariscos de Costa",
      "description": "Pulpo, jamón ibérico de bellota y chipirones"
    },
    {
      "id": "arroces",
      "name": "Arroces Maestros & Paellas",
      "description": "Cocinados a fuego lento con arroz bomba"
    },
    {
      "id": "carnes",
      "name": "Carnes Nobles & Pescados",
      "description": "Cochinillo segoviano y rueda de mero"
    }
  ],
  "menuItems": [
    {
      "id": "cas-valenciana",
      "name": "Paella Valenciana a la Leña (2 pax)",
      "description": "Arroz bomba, pollo de granja, conejo, judías verdes, azafrán español y socarrat.",
      "priceUSD": 42,
      "category": "arroces",
      "popular": true
    },
    {
      "id": "cas-marinera",
      "name": "Arroz a la Marinera Meloso",
      "description": "Caldo concentrado de crustáceos, calamares en su tinta, langostinos y alioli.",
      "priceUSD": 38,
      "category": "arroces",
      "popular": true
    },
    {
      "id": "cas-pulpo",
      "name": "Pulpo a la Gallega Tradicional",
      "description": "Pulpo tierno sobre patatas pochadas, pimentón de la Vera agridulce y sal marina.",
      "priceUSD": 24,
      "category": "tapas",
      "popular": true
    },
    {
      "id": "cas-asopado",
      "name": "Asopado de Mariscos Especial",
      "description": "Caldo de langosta, rueda de mero, calamar, almejas vivas y mejillones.",
      "priceUSD": 32,
      "category": "arroces",
      "popular": true
    },
    {
      "id": "cas-mero",
      "name": "Mero al Horno con Patatas Panaderas",
      "description": "Rueda de mero fresco a la espalda con ajos dorados y emulsión de oliva virgen.",
      "priceUSD": 28,
      "category": "carnes"
    },
    {
      "id": "cas-crema",
      "name": "Crema Catalana Caramelizada",
      "description": "Receta tradicional con costra de azúcar flambeada al momento de servir.",
      "priceUSD": 9,
      "category": "tapas"
    }
  ],
  "managerKpis": {
    "activeReservations": 11,
    "capacityPercentage": 88,
    "todaySalesUSD": 3450,
    "avgTicketUSD": 55
  },
  "sampleBookings": [
    {
      "id": "CAS-701",
      "clientName": "Ing. Gonzalo Sucre",
      "details": "Paella Valenciana (2 pax) · Aniversario",
      "time": "02:00 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 90
    },
    {
      "id": "CAS-702",
      "clientName": "Familia Boulton",
      "details": "Salón Privado Domingo (8 pax)",
      "time": "01:30 PM",
      "status": "en_mesa",
      "pax": 8,
      "totalUSD": 480
    },
    {
      "id": "CAS-703",
      "clientName": "Alberto Cárdenas",
      "details": "Almuerzo Ejecutivo (4 pax)",
      "time": "02:30 PM",
      "status": "pendiente",
      "pax": 4,
      "totalUSD": 220
    }
  ]
},

  {
  "slug": "casapuglia_ve",
  "batch": "dia9",
  "archetype": "gourmet-booking",
  "name": "Casa Puglia Trattoria",
  "handle": "casapuglia.ve",
  "category": "Trattoria Tradicional & Pastas",
  "badgeText": "Cucina Tipica Pugliese · Horno de Piedra · El Hatillo",
  "tagline": "Auténtica trattoria italiana en el corazón de El Hatillo frente a la Plaza Sucre: orecchiette estiradas a mano, burrata fresca y pizzas a la piedra.",
  "heroTitle": "Sapore di Puglia",
  "heroHighlight": "En El Hatillo",
  "heroSubtitle": "Platos tradicionales del sur de Italia en una casona colonial íntima frente a la Plaza Sucre. Pastas frescas diarias y horno de piedra.",
  "logo": "/marcas/casapuglia_ve.jpg",
  "coverImage": "/marcas/casapuglia_ve-cover.jpg",
  "palette": {
    "primary": "#2E5B88",
    "primaryHover": "#23466A",
    "secondary": "#D48B38",
    "accent": "#E67E22",
    "darkBg": "#0F141C",
    "cardBg": "#17202C",
    "textLight": "#F8FAFC",
    "textMuted": "#94A3B8",
    "border": "rgba(46, 91, 136, 0.3)",
    "glow": "rgba(230, 126, 34, 0.35)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Casa Puglia rinde homenaje a la cocina campesina y costera de la región de Apulia (Italia) en pleno casco colonial de El Hatillo. Especialistas en orecchiette artesanales, quesos frescos de leche entera y cocciones al horno de piedra.",
  "introStats": [
    {
      "label": "Autenticidad",
      "value": "100% Puglia",
      "detail": "Recetas tradicionales de la nonna"
    },
    {
      "label": "Ticket Promedio",
      "value": "$26 USD",
      "detail": "Pastas frescas, vino de la casa y postre"
    },
    {
      "label": "Ubicación",
      "value": "Plaza Sucre",
      "detail": "En el corazón colonial de El Hatillo"
    }
  ],
  "trustBadges": [
    "Pastas Artesanales de la Puglia",
    "Pizzas al Horno de Piedra",
    "Casona Colonial Frente a Plaza Sucre"
  ],
  "whatsappPitchCopy": "Hola amigos de Casa Puglia! 🇮🇹 Los fines de semana cuando El Hatillo se colapsa de visitantes, ¿cuántas mesas y pedidos de delivery se les caen en WhatsApp porque el equipo está en sala y no da abasto para responder a tiempo?\n\nLes preparé una solución interactiva con sus pastas frescas, pizzas al horno y antipasti para que el comensal reserve su mesa o pida para pick up en 3 clics y a tasa oficial BCV:\n👉 https://byte-bridge-tau.vercel.app/demos/casapuglia_ve\n\n¿Les muestro en 5 minutos cómo funciona?",
  "address": "Calle Comercio, Quinta D, Unidad 15-2 (Frente a Plaza Sucre), El Hatillo, Caracas",
  "mapsUrl": "https://maps.google.com/?q=Casa+Puglia+El+Hatillo+Caracas",
  "hours": "Miércoles a Domingo: 12:00 PM – 10:00 PM",
  "phone": "+58 412-2889771",
  "instagramUrl": "https://www.instagram.com/casapuglia.ve",
  "bcvRate": 70.5,
  "bookingType": "table-and-pickup-reservation",
  "bookingTitle": "Reserva tu Mesa Frente a la Plaza",
  "bookingSubtitle": "Evita colas en la entrada los fines de semana y asegura tus platos italianos favoritos",
  "bookingOptions": [
    {
      "id": "pug-mesa-terraza",
      "name": "Mesa Terraza Colonial Pareja (2 pax)",
      "description": "Vista a la Plaza Sucre con copa de vino tinto Primitivo di Manduria.",
      "priceUSD": 55,
      "maxCapacity": 2
    },
    {
      "id": "pug-combo-familiar",
      "name": "Almuerzo Familiar Pugliese (4 pax)",
      "description": "Burrata artesanal grande + 2 pastas orecchiette + 1 pizza al horno de piedra.",
      "priceUSD": 72,
      "maxCapacity": 4
    },
    {
      "id": "pug-box-takeaway",
      "name": "Combo Trattoria para Retirar / Delivery",
      "description": "2 pastas frescas a elección + focaccia al romero + tiramisú casero.",
      "priceUSD": 36,
      "maxCapacity": 1
    }
  ],
  "categories": [
    {
      "id": "antipasti",
      "name": "Antipasti & Burratas",
      "description": "Quesos frescos, foccacias y vegetales confitados"
    },
    {
      "id": "paste",
      "name": "Paste Fatte a Mano",
      "description": "Orecchiette y pastas frescas estiradas al día"
    },
    {
      "id": "pizze",
      "name": "Pizze al Forno di Pietra",
      "description": "Masa de fermentación lenta y salsa San Marzano"
    }
  ],
  "menuItems": [
    {
      "id": "pug-orecchiette",
      "name": "Orecchiette alla Pugliese",
      "description": "Pasta típica estirada a mano con estofado de ternera, tomates secos y pecorino.",
      "priceUSD": 16.5,
      "category": "paste",
      "popular": true
    },
    {
      "id": "pug-burrata",
      "name": "Burrata Fresca Casa Puglia",
      "description": "Burrata cremosa sobre rúgula, cherrys confitados, balsámico de Módena y focaccia.",
      "priceUSD": 14,
      "category": "antipasti",
      "popular": true
    },
    {
      "id": "pug-pizza",
      "name": "Pizza Prosciutto & Funghi a la Piedra",
      "description": "Pomodoro San Marzano, fior di latte, prosciutto di Parma y champiñones frescos.",
      "priceUSD": 15.5,
      "category": "pizze",
      "popular": true
    },
    {
      "id": "pug-ossobuco",
      "name": "Ossobuco con Risotto alla Milanese",
      "description": "Jarrete braseado lentamente al vino tinto servido sobre risotto al azafrán.",
      "priceUSD": 22,
      "category": "paste",
      "popular": true
    },
    {
      "id": "pug-ravioli",
      "name": "Ravioli Ricotta e Spinaci Porcini",
      "description": "Pasta rellena fresca con mantequilla de salvia y emulsión de hongos porcini.",
      "priceUSD": 17,
      "category": "paste"
    },
    {
      "id": "pug-tiramisu",
      "name": "Tiramisú Tradicional Pugliese",
      "description": "Savoiardi empapados en espresso italiano con crema de mascarpone y cacao.",
      "priceUSD": 7.5,
      "category": "antipasti"
    }
  ],
  "managerKpis": {
    "activeReservations": 15,
    "capacityPercentage": 88,
    "todaySalesUSD": 1680,
    "avgTicketUSD": 26
  },
  "sampleBookings": [
    {
      "id": "PUG-801",
      "clientName": "Mariana Alfonzo",
      "details": "Mesa Terraza Plaza (2 pax) · Almuerzo",
      "time": "01:30 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 58
    },
    {
      "id": "PUG-802",
      "clientName": "Dr. Roberto Ponte",
      "details": "Almuerzo Familiar Domingo (4 pax)",
      "time": "02:15 PM",
      "status": "en_mesa",
      "pax": 4,
      "totalUSD": 85
    },
    {
      "id": "PUG-803",
      "clientName": "Daniela Velutini",
      "details": "Cena Íntima en Salón (2 pax)",
      "time": "08:00 PM",
      "status": "pendiente",
      "pax": 2,
      "totalUSD": 62
    }
  ]
},

  {
  "slug": "miso_ccs",
  "batch": "dia9",
  "archetype": "gourmet-booking",
  "name": "Miso Caracas",
  "handle": "miso_ccs",
  "category": "Japonés de Autor & Rooftop",
  "badgeText": "Rooftop La Grand Plaz · Vista 360° Ávila · Omakase",
  "tagline": "Experiencia culinaria japonesa de vanguardia en las alturas de Las Mercedes: Omakase bar, robata grill a la brasa y coctelería molecular frente al Ávila.",
  "heroTitle": "Japonés de Vanguardia",
  "heroHighlight": "& Rooftop Omakase",
  "heroSubtitle": "En el último piso del Centro Comercial La Grand Plaz. Nigiris de wagyu A5, atún toro, robata japonesa y las puestas de sol más codiciadas de Caracas.",
  "logo": "/marcas/miso_ccs.jpg",
  "coverImage": "/marcas/miso_ccs-cover.jpg",
  "palette": {
    "primary": "#D90429",
    "primaryHover": "#EF233C",
    "secondary": "#2B2D42",
    "accent": "#EDF2F4",
    "darkBg": "#0B0C10",
    "cardBg": "#161820",
    "textLight": "#FFFFFF",
    "textMuted": "#8D99AE",
    "border": "rgba(217, 4, 41, 0.35)",
    "glow": "rgba(217, 4, 41, 0.45)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Ubicado en el rooftop del CC La Grand Plaz en Las Mercedes, Miso Caracas combina la mística del Omakase japonés con la energía vibrante de un mirador panorámico con vista abierta hacia el Cerro El Ávila.",
  "introStats": [
    {
      "label": "Ubicación",
      "value": "Rooftop Ávila",
      "detail": "Vista 360° en La Grand Plaz"
    },
    {
      "label": "Ticket Promedio",
      "value": "$65 USD",
      "detail": "Nigiris premium, robata y sakes"
    },
    {
      "label": "Cortes Nobles",
      "value": "Wagyu A5",
      "detail": "Pesca fresca y cortes certificados"
    }
  ],
  "trustBadges": [
    "Rooftop Exclusivo La Grand Plaz",
    "Barra Omakase & Robata Grill",
    "Vista Panorámica al Ávila"
  ],
  "whatsappPitchCopy": "Hola equipo de Miso Caracas! 🥢 ¿Cuántos clientes de alto ticket que buscan mesa en terraza con vista al Ávila para el atardecer se van a otro lugar de Las Mercedes porque tardan más de 15 minutos en responderles la disponibilidad por WhatsApp?\n\nEn alta cocina japonesa, el servicio digital debe ser tan impecable como el corte de un sashimi. Les armé una demo visual con sus nigiris de autor, robata y selección de mesas en rooftop:\n👉 https://byte-bridge-tau.vercel.app/demos/miso_ccs\n\n¿Les muestro en 5 minutos cómo funciona?",
  "address": "CC La Grand Plaz, Nivel Terraza Rooftop, Av. Río de Janeiro c/ Calle Nueva York, Las Mercedes, Caracas",
  "mapsUrl": "https://maps.google.com/?q=Miso+Caracas+La+Grand+Plaz+Las+Mercedes",
  "hours": "Martes a Domingo: 12:30 PM – 01:00 AM",
  "phone": "+58 412-5861709",
  "instagramUrl": "https://www.instagram.com/miso_ccs",
  "bcvRate": 70.5,
  "bookingType": "rooftop-omakase-booking",
  "bookingTitle": "Reserva tu Mesa Sunset o Barra Omakase",
  "bookingSubtitle": "Asegura ubicación perimetral con vista panorámica al Ávila durante el atardecer",
  "bookingOptions": [
    {
      "id": "miso-sunset-avila",
      "name": "Mesa Perimetral Sunset Ávila (2-4 pax)",
      "description": "Ubicación de primera fila para el atardecer (5:30 PM a 7:30 PM) con coctelería de autor.",
      "priceUSD": 140,
      "maxCapacity": 4
    },
    {
      "id": "miso-omakase-experience",
      "name": "Barra Omakase del Chef (2 pax)",
      "description": "Servicio exclusivo directo del Itamae con 12 piezas de nigiris de lujo y sake.",
      "priceUSD": 160,
      "maxCapacity": 2
    },
    {
      "id": "miso-lounge-vip",
      "name": "Mesa Lounge Nocturna VIP (6 pax)",
      "description": "Mesa perimetral para cena nocturna con robata grill y selección de destilados.",
      "priceUSD": 360,
      "maxCapacity": 6
    }
  ],
  "categories": [
    {
      "id": "nigiris",
      "name": "Nigiris de Autor & Omakase",
      "description": "Wagyu A5, foie gras, toro y trufas frescas"
    },
    {
      "id": "robata",
      "name": "Robata Grill a la Brasa",
      "description": "Brochetas y cortes cocinados sobre carbón japonés"
    },
    {
      "id": "cocteles",
      "name": "Coctelería Molecular & Sakes",
      "description": "Bebidas de autor con botánicos y whisky japonés"
    }
  ],
  "menuItems": [
    {
      "id": "miso-trilogia",
      "name": "Nigiri Trilogía de Lujo (3 piezas)",
      "description": "Wagyu A5 con trufa negra, Toro con foie flambeado y Pez Mantequilla al chimichurri.",
      "priceUSD": 28,
      "category": "nigiris",
      "popular": true
    },
    {
      "id": "miso-tiradito",
      "name": "Tiradito Nikkei de Medregal",
      "description": "Láminas finas en leche de tigre al ají amarillo, trufa blanca y maíz chulpi.",
      "priceUSD": 19,
      "category": "nigiris",
      "popular": true
    },
    {
      "id": "miso-handroll",
      "name": "Handroll Crocante Salmón Trufado (2 unid)",
      "description": "Alga nori crujiente con tartar fresco, aguacate, tobiko y mayonesa trufada.",
      "priceUSD": 15,
      "category": "nigiris",
      "popular": true
    },
    {
      "id": "miso-risotto",
      "name": "Risotto de Langostinos al Miso Rojo",
      "description": "Arroz carnaroli al dente mantecado con pasta de miso y langostinos gigantes a la robata.",
      "priceUSD": 24,
      "category": "robata",
      "popular": true
    },
    {
      "id": "miso-pulpo",
      "name": "Robata Skewers de Pulpo Anticuchero",
      "description": "Brochetas a la brasa glaseadas en salsa anticuchera con puré de camote.",
      "priceUSD": 21,
      "category": "robata"
    },
    {
      "id": "miso-sakura",
      "name": "Cóctel de Autor Sakura Gin",
      "description": "Ginebra Roku, cordial de cerezo, lychee, tónica botánica y perfume de yuzu.",
      "priceUSD": 13,
      "category": "cocteles",
      "popular": true
    }
  ],
  "managerKpis": {
    "activeReservations": 18,
    "capacityPercentage": 95,
    "todaySalesUSD": 5120,
    "avgTicketUSD": 65
  },
  "sampleBookings": [
    {
      "id": "MIS-901",
      "clientName": "Guillermo Capriles",
      "details": "Mesa Perimetral Sunset (2 pax) · Vista Ávila",
      "time": "05:45 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 160
    },
    {
      "id": "MIS-902",
      "clientName": "Valeria Pietri",
      "details": "Barra Omakase Chef (2 pax)",
      "time": "08:30 PM",
      "status": "en_mesa",
      "pax": 2,
      "totalUSD": 180
    },
    {
      "id": "MIS-903",
      "clientName": "Corporativo Polar (Lounge)",
      "details": "Mesa Lounge Nocturno (6 pax)",
      "time": "09:30 PM",
      "status": "pendiente",
      "pax": 6,
      "totalUSD": 420
    }
  ]
},

  {
  "slug": "humboldtrestaurant",
  "batch": "dia9",
  "archetype": "vip-access",
  "name": "Restaurante Hotel Humboldt",
  "handle": "humboldtrestaurant",
  "category": "Ícono Turístico & Alta Gastronomía",
  "badgeText": "Cima del Ávila (2.140 m s.n.m.) · Vista al Mar y Caracas",
  "tagline": "El restaurante más alto y legendario de Venezuela: alta cocina internacional a 2.140 metros de altura en la cima del Ávila con acceso coordinado por teleférico.",
  "heroTitle": "La Cima de Caracas",
  "heroHighlight": "A 2.140 Metros",
  "heroSubtitle": "Obra maestra de Tomás Sanabria en el Parque Nacional Waraira Repano. Carnes a la brasa, pizzas a la leña, fondue suizo y vistas infinitas al Caribe.",
  "logo": "/marcas/humboldtrestaurant.jpg",
  "coverImage": "/marcas/humboldtrestaurant-cover.jpg",
  "palette": {
    "primary": "#1D3557",
    "primaryHover": "#14213D",
    "secondary": "#A8DADC",
    "accent": "#E63946",
    "darkBg": "#0B111A",
    "cardBg": "#121C2B",
    "textLight": "#FFFFFF",
    "textMuted": "#8E9AAF",
    "border": "rgba(168, 218, 220, 0.3)",
    "glow": "rgba(230, 57, 70, 0.35)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Construido en 1956 en la cresta del Cerro Ávila, el Restaurante del Hotel Humboldt ofrece una experiencia inigualable a 2.140 metros sobre el nivel del mar, combinando alta cocina, patrimonio arquitectónico y teleférico.",
  "introStats": [
    {
      "label": "Altitud",
      "value": "2.140 m",
      "detail": "El restaurante más alto de Venezuela"
    },
    {
      "label": "Ticket Promedio",
      "value": "$48 USD",
      "detail": "Por comensal con vistas al Caribe"
    },
    {
      "label": "Patrimonio",
      "value": "Año 1956",
      "detail": "Diseño del Arq. Tomás Sanabria"
    }
  ],
  "trustBadges": [
    "Ícono Turístico Nacional Cima del Ávila",
    "Acceso Coordinado con Teleférico",
    "Vistas al Mar Caribe y Valle de Caracas"
  ],
  "whatsappPitchCopy": "Buenas tardes equipo del Restaurante Hotel Humboldt! ⛰️ ¿Cuánto tiempo pierde a diario su equipo en WhatsApp explicando a cada visitante cómo coordinar el teleférico de Maripérez, los horarios y los precios del menú?\n\nSubir al ícono de Caracas debería ser una experiencia fascinante desde el primer clic, sin fricciones de chat. Les preparé una demo interactiva que integra reserva de mesa en la cima con información logística de subida y su carta gastronómica:\n👉 https://byte-bridge-tau.vercel.app/demos/humboldtrestaurant\n\n¿Les muestro en 5 minutos cómo les ahorraría horas de atención?",
  "address": "Cima del Cerro Ávila (Parque Nacional Waraira Repano), Cota 2.140 m s.n.m., Caracas",
  "mapsUrl": "https://maps.google.com/?q=Hotel+Humboldt+Caracas+Avila",
  "hours": "Miércoles a Domingo: 11:30 AM – 11:00 PM",
  "phone": "+58 424-1274645",
  "instagramUrl": "https://www.instagram.com/humboldtrestaurant",
  "bcvRate": 70.5,
  "bookingType": "mountain-teleferico-booking",
  "bookingTitle": "Reserva tu Mesa en la Cima & Acceso VIP",
  "bookingSubtitle": "Coordina tu subida en teleférico desde Maripérez o traslados 4x4 y asegura tu mesa con vista",
  "bookingOptions": [
    {
      "id": "hum-pareja-mar",
      "name": "Mesa Panorámica Vista al Mar (2 pax)",
      "description": "Mesa junto al ventanal norte con vista al Caribe, fondue suizo y botella de vino.",
      "priceUSD": 95,
      "maxCapacity": 2
    },
    {
      "id": "hum-familiar-avila",
      "name": "Almuerzo Familiar Humboldt (4-6 pax)",
      "description": "Reserva de salón histórico con parrillada Mar y Tierra y fresas de Galipán con crema.",
      "priceUSD": 180,
      "maxCapacity": 6
    },
    {
      "id": "hum-pase-boite",
      "name": "Cena & Noche de Copas en Salón La Boite (4 pax)",
      "description": "Servicio nocturno con coctelería de autor y vista a las luces de Caracas.",
      "priceUSD": 160,
      "maxCapacity": 4
    }
  ],
  "categories": [
    {
      "id": "montana",
      "name": "Especialidades de Montaña & Fondue",
      "description": "Platos reconfortantes a 2.140 metros de altura"
    },
    {
      "id": "brasa",
      "name": "Parrilla a la Brasa & Pescados",
      "description": "Cortes importados y mariscos nobles"
    },
    {
      "id": "horno",
      "name": "Pastas Frescas & Pizzas a la Leña",
      "description": "Hechas en casa al calor del horno"
    }
  ],
  "menuItems": [
    {
      "id": "hum-fondue",
      "name": "Fondue de Queso Tradicional para Dos",
      "description": "Emulsión de Gruyère y Emmental con vino blanco, kirsch, cubos de pan y embutidos.",
      "priceUSD": 32,
      "category": "montana",
      "popular": true
    },
    {
      "id": "hum-lomito",
      "name": "Lomito al Grill con Hongos del Ávila",
      "description": "Medallón a las brasas de carbón vegetal con salsa cremosa de hongos y puré trufado.",
      "priceUSD": 26,
      "category": "brasa",
      "popular": true
    },
    {
      "id": "hum-pappardelle",
      "name": "Pappardelle al Ragú de Ternera",
      "description": "Pasta fresca estirada en casa con ragú de cocción lenta de 6 horas y parmesano.",
      "priceUSD": 18.5,
      "category": "horno",
      "popular": true
    },
    {
      "id": "hum-pizza",
      "name": "Pizza a la Leña Humboldt Especial",
      "description": "Masa madre madurada al horno con prosciutto crudo, fior di latte y rúgula fresca.",
      "priceUSD": 17,
      "category": "horno",
      "popular": true
    },
    {
      "id": "hum-parrilla",
      "name": "Parrilla Mar y Tierra Humboldt",
      "description": "Lomito angus y langostinos gigantes a la parrilla con chimichurri andino.",
      "priceUSD": 35,
      "category": "brasa"
    },
    {
      "id": "hum-fresas",
      "name": "Sinfonía de Fresas de Galipán con Crema",
      "description": "Fresas recién cosechadas con crema batida de montaña y merengue crujiente.",
      "priceUSD": 8.5,
      "category": "montana",
      "popular": true
    }
  ],
  "managerKpis": {
    "activeReservations": 22,
    "capacityPercentage": 96,
    "todaySalesUSD": 4890,
    "avgTicketUSD": 48
  },
  "sampleBookings": [
    {
      "id": "HUM-1001",
      "clientName": "Leopoldo López Gil",
      "details": "Mesa Ventanal Mar Caribe (2 pax) · Almuerzo",
      "time": "01:30 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 110
    },
    {
      "id": "HUM-1002",
      "clientName": "Familia Zarikian",
      "details": "Almuerzo Familiar en Salón (6 pax)",
      "time": "02:00 PM",
      "status": "en_mesa",
      "pax": 6,
      "totalUSD": 310
    },
    {
      "id": "HUM-1003",
      "clientName": "Federico Machado",
      "details": "Cena Mirador La Boite (4 pax)",
      "time": "08:00 PM",
      "status": "pendiente",
      "pax": 4,
      "totalUSD": 220
    }
  ]
}
];

export function getDemoBySlug(slug: string): BusinessDemo | undefined {
  return businessDemos.find((d) => d.slug === slug);
}
