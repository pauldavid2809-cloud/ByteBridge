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
};

export type BookingOption = {
  id: string;
  name: string;
  description: string;
  priceUSD: number;
  unit: string;
  badge?: string;
  features?: string[];
  maxCapacity?: number;
};

export type BusinessDemo = {
  slug: string;
  batch?: "dia1" | "dia2" | "dia3" | "dia4" | "dia5" | "dia6";
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
}
];

export function getDemoBySlug(slug: string): BusinessDemo | undefined {
  return businessDemos.find((d) => d.slug === slug);
}
