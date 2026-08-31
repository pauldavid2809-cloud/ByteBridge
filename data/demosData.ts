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
  batch?: "dia1" | "dia2" | "dia3" | "dia4" | "dia5";
  archetype?: "table-ordering" | "vip-access" | "gourmet-booking" | "direct-delivery";
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
  // 1. ECOLAND CLUB
  {
    slug: "ecoland",
    batch: "dia1",
    archetype: "vip-access",
    name: "Ecoland Club",
    handle: "ecoland.club",
    category: "Hotel · Restaurante · Gimnasio · Piscina",
    badgeText: "🌴 #ElOasisEnMaracaibo",
    tagline: "Vive una experiencia única sin salir de la ciudad",
    heroTitle: "Tu refugio de bienestar, gastronomía y",
    heroHighlight: "relajación total",
    heroSubtitle:
      "Reserva tu Day Pass para la piscina, gestiona tu membresía de gimnasio, hospédate en nuestras suites y disfruta de nuestro restaurante.",
    logo: "/marcas/ecoland.jpg",
    coverImage: "/marcas/ecoland-cover.jpg",
    palette: {
      primary: "#0284C7",
      primaryHover: "#0369A1",
      secondary: "#0F766E",
      accent: "#38BDF8",
      darkBg: "#0B1528",
      cardBg: "rgba(15, 23, 42, 0.75)",
      textLight: "#F8FAFC",
      textMuted: "#94A3B8",
      border: "rgba(56, 189, 248, 0.2)",
      glow: "rgba(2, 132, 199, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans",
    },
    introText: "Ecoland Club es el único complejo turístico urbano de Maracaibo que integra hotel boutique, restaurante de parrilla, gimnasio completo y zona de piscinas — todo en un solo lugar, sin salir de la ciudad.",
    introStats: [
      { label: "Áreas de Piscina", value: "3", detail: "Olímpica, recreativa e infantil" },
      { label: "Suites Disponibles", value: "12", detail: "Equipadas con A/A y Smart TV" },
      { label: "Horario Continuo", value: "7AM–10PM", detail: "Los 7 días de la semana" },
    ],
    trustBadges: ["Check-in Digital con QR", "Pagos Multimoneda", "Valet Parking Incluido"],
    whatsappPitchCopy: "Hola equipo de Ecoland Club! 🌴 Estuvimos analizando cómo optimizar la experiencia de sus visitantes y desarrollamos esta WebApp a medida con reservaciones para Day Pass de piscina con código QR, registro de membresías de gimnasio, reserva de suites y menú digital con tasa BCV automática.\n\nPueden probar la demo interactiva y ver el Reel comercial de 15 segundos aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/ecoland",
    address: "Av. Principal La Rinconada, Maracaibo, Zulia",
    mapsUrl: "https://maps.google.com/?q=Maracaibo",
    hours: "Lunes a Domingo: 7:00 AM - 10:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/ecoland.club/",
    bookingType: "resort-pass",
    bookingTitle: "Pases de Piscina, Hospedaje & Gimnasio",
    bookingSubtitle: "Elige tu plan y obtén tu pase digital con código QR para acceso instantáneo.",
    bookingOptions: [
      {
        id: "day-pass-adulto",
        name: "Day Pass Piscina (Adultos)",
        description: "Acceso ilimitado a piscinas, toallas, tumbona y uso de áreas recreativas.",
        priceUSD: 15,
        unit: "por persona",
        badge: "Más Popular",
        features: ["Acceso a piscina olímpica", "Tumbona garantizada", "Wi-Fi de alta velocidad", "Valet Parking"],
      },
      {
        id: "cabana-vip",
        name: "Cabaña VIP Oasis (4 a 6 Personas)",
        description: "Cabaña privada con sombra, atención de camarero exclusivo y welcome drinks.",
        priceUSD: 60,
        unit: "por grupo",
        badge: "Exclusivo",
        features: ["Cabaña privada con cortinaje", "Servicio exclusivo de mesonero", "Balde con 6 aguas/refrescos", "Acceso preferencial"],
      },
      {
        id: "gym-mensualidad",
        name: "Membresía Mensual Gimnasio Ecoland",
        description: "Acceso total a máquinas de fuerza, cardio, vestidores y asesoría de entrenadores.",
        priceUSD: 35,
        unit: "mensual",
        features: ["Área de pesas y máquinas", "Acceso a sauna y vestidores", "Evaluación física mensual", "Horario flexible"],
      },
      {
        id: "suite-hotel",
        name: "Suite Confort Hotel (Noche para 2)",
        description: "Habitación equipada con cama King, A/A premium, TV streaming y desayuno incluido.",
        priceUSD: 75,
        unit: "por noche",
        features: ["Cama King Size", "Desayuno buffet para 2", "Acceso full a piscina y gym", "Check-out tardío 2:00 PM"],
      },
    ],
    categories: [
      { id: "platos-fuertes", name: "Restaurante & Parrilla", icon: "🍖" },
      { id: "cocteles", name: "Bebidas & Piscina", icon: "🍹" },
      { id: "fitness", name: "Snacks & Fitness", icon: "🥗" },
    ],
    menuItems: [
      {
        id: "ecoland-parrilla-mar-tierra",
        name: "Parrilla Mixta Oasis",
        category: "platos-fuertes",
        description: "Corte de solomo de cuerito (300g), pechuga a la brasa, chorizo artesanal, yuca al vapor y guasacaca.",
        priceUSD: 24,
        badge: "Recomendado",
        popular: true,
      },
      {
        id: "hamburguesa-ecoland",
        name: "Ecoland Smash Burger",
        category: "platos-fuertes",
        description: "Doble carne Angus smash, queso cheddar madurado, tocineta crocante y salsa especial en pan brioche.",
        priceUSD: 12,
      },
      {
        id: "mojito-maracuya",
        name: "Mojito Tropical Maracuyá",
        category: "cocteles",
        description: "Ron blanco añejo, hierbabuena fresca, pulpa natural de parchita y soda bien fría.",
        priceUSD: 6,
        popular: true,
      },
      {
        id: "smoothie-protein",
        name: "Smoothie Proteico Green Power",
        category: "fitness",
        description: "Espinaca baby, manzana verde, leche de almendras y 25g de proteína isolatada.",
        priceUSD: 5.5,
      },
    ],
    managerKpis: {
      activeReservations: 18,
      capacityPercentage: 78,
      todaySalesUSD: 940,
      avgTicketUSD: 38,
    },
    sampleBookings: [
      { id: "ECO-104", clientName: "Carlos Mendoza", details: "Cabaña VIP Oasis (5 pax)", time: "11:30 AM", status: "en_mesa", pax: 5, totalUSD: 85 },
      { id: "ECO-105", clientName: "Mariana Silva", details: "Day Pass Piscina (3 pax)", time: "01:00 PM", status: "confirmada", pax: 3, totalUSD: 45 },
      { id: "ECO-106", clientName: "Alejandro Pérez", details: "Suite Hotel + Desayuno", time: "03:00 PM", status: "pendiente", pax: 2, totalUSD: 75 },
    ],
  },

  // 2. GRAND CHEF
  {
    slug: "grandchef",
    batch: "dia1",
    archetype: "gourmet-booking",
    name: "Grand Chef",
    handle: "grandchefmaracaibo",
    category: "Restaurante Mediterráneo",
    badgeText: "🌉 Vista Privilegiada al Puente",
    tagline: "El sabor auténtico del Mediterráneo frente al Lago de Maracaibo",
    heroTitle: "Gastronomía mediterránea de autor con",
    heroHighlight: "la mejor vista al lago",
    heroSubtitle:
      "Reserva tu mesa en primera fila, selecciona tu maridaje de vinos y disfruta de risottos, mariscos y cortes preparados por chefs expertos.",
    logo: "/marcas/grandchef.jpg",
    coverImage: "/marcas/grandchef-cover.jpg",
    palette: {
      primary: "#C5A880",
      primaryHover: "#B59468",
      secondary: "#0F2847",
      accent: "#E2BA76",
      darkBg: "#0A1320",
      cardBg: "rgba(15, 29, 50, 0.8)",
      textLight: "#F8FAFC",
      textMuted: "#CBD5E1",
      border: "rgba(226, 186, 118, 0.25)",
      glow: "rgba(197, 168, 128, 0.2)",
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans",
    },
    introText: "Grand Chef es el restaurante mediterráneo con la vista más privilegiada de Maracaibo: mesas en primera fila frente al Puente sobre el Lago con atardeceres que transforman cada cena en una experiencia cinematográfica.",
    introStats: [
      { label: "Vista al Puente", value: "180°", detail: "Panorámica sin obstáculos" },
      { label: "Carta de Vinos", value: "40+", detail: "Etiquetas seleccionadas por sommelier" },
      { label: "Años de Trayectoria", value: "8+", detail: "Referente gastronómico zuliano" },
    ],
    trustBadges: ["Mesa Garantizada con Reserva", "Sommelier en Sala", "Estacionamiento Privado"],
    whatsappPitchCopy: "Hola equipo de Grand Chef! 🌉 Diseñamos una propuesta y WebApp exclusiva para ustedes: permite a sus comensales reservar mesas en primera fila frente al Puente sobre el Lago, elegir paquetes románticos de degustación y ordenar su carta mediterránea con conversión automática a tasa oficial.\n\nPrueben la demo en vivo y vean su video comercial aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/grandchef",
    address: "San Francisco, Sector El Manzanillo frente al Lago, Edo. Zulia",
    mapsUrl: "https://maps.google.com/?q=Grand+Chef+San+Francisco+Zulia",
    hours: "Miércoles a Domingo: 12:00 PM - 11:30 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/grandchefmaracaibo/",
    bookingType: "lakeview-table",
    bookingTitle: "Reserva de Mesas Frente al Puente",
    bookingSubtitle: "Garantiza tu ubicación preferencial para aniversarios, cenas románticas y reuniones.",
    bookingOptions: [
      {
        id: "mesa-terraza-puente",
        name: "Mesa Terraza Primera Fila (Vista al Puente)",
        description: "Ubicación exterior sin obstáculos con vista panorámica a las luces del Puente sobre el Lago.",
        priceUSD: 20,
        unit: "abono a consumo",
        badge: "Más Solicitada",
        features: ["Vista 100% despejada al Lago", "Vela aromática y mesa decorada", "Prioridad de cocina", "100% abonable a la cuenta"],
      },
      {
        id: "experiencia-romantica-chef",
        name: "Experiencia Romántica Grand Chef (2 Pax)",
        description: "Menú degustación de 4 tiempos con botella de vino blanco o tinto reserva y mesa decorada con rosas.",
        priceUSD: 85,
        unit: "por pareja",
        badge: "Gourmet",
        features: ["Mesa exclusiva con pétalos", "Entrada, 2 Platos Fuertes y Postre", "Botella de Vino selección Sommelier", "Foto de recuerdo digital"],
      },
      {
        id: "salon-climatizado",
        name: "Salón Principal Climatizado (4 a 8 Pax)",
        description: "Ambiente íntimo con aire acondicionado de alta capacidad, música ambiental suave y servicio de sommelier.",
        priceUSD: 25,
        unit: "abono a consumo",
        features: ["Climatización óptima", "Mesa amplia para grupos", "Carta de habanos y digestivos", "Servicio dedicado"],
      },
    ],
    categories: [
      { id: "entradas-mar", name: "Entradas & Tapas", icon: "🦪" },
      { id: "principales-med", name: "Platos Mediterráneos", icon: "🐟" },
      { id: "vinos-cocteles", name: "Vinos & Coctelería", icon: "🍷" },
    ],
    menuItems: [
      {
        id: "pulpo-a-la-gallega-gc",
        name: "Pulpo Braseado al Pimentón de la Vera",
        category: "entradas-mar",
        description: "Tentáculos de pulpo suave a la parrilla sobre cama de papas confitadas, aceite de oliva virgen extra y sal marina.",
        priceUSD: 19,
        badge: "Especialidad",
        popular: true,
      },
      {
        id: "risotto-frutti-di-mare",
        name: "Risotto Frutti di Mare",
        category: "principales-med",
        description: "Arroz arborio en bisque de langostinos con calamares, mejillones frescos, camarones jumbo y toque de vino blanco.",
        priceUSD: 22,
        popular: true,
      },
      {
        id: "pesca-del-dia-mediterranea",
        name: "Róbalo en Costra de Almendras",
        category: "principales-med",
        description: "Filete de róbalo fresco con mantequilla de alcaparras, espárragos grillados y puré trufado.",
        priceUSD: 21,
      },
      {
        id: "sangria-tinta-artesanal",
        name: "Jarra de Sangría Grand Chef",
        category: "vinos-cocteles",
        description: "Vino tinto joven macerado con frutas cítricas, canela en rama, brandy y toque de soda.",
        priceUSD: 16,
      },
    ],
    managerKpis: {
      activeReservations: 14,
      capacityPercentage: 85,
      todaySalesUSD: 1420,
      avgTicketUSD: 62,
    },
    sampleBookings: [
      { id: "GC-501", clientName: "Dr. Roberto Urdaneta", details: "Mesa Terraza Primera Fila (4 pax)", time: "07:30 PM", status: "confirmada", pax: 4, totalUSD: 110 },
      { id: "GC-502", clientName: "Valeria Chacín", details: "Experiencia Romántica Grand Chef", time: "08:15 PM", status: "en_mesa", pax: 2, totalUSD: 85 },
      { id: "GC-503", clientName: "Ing. Fernando Morán", details: "Salón Climatizado (6 pax)", time: "09:00 PM", status: "pendiente", pax: 6, totalUSD: 160 },
    ],
  },

  // 3. ZU HOUSE
  {
    slug: "zuhouse",
    batch: "dia1",
    archetype: "table-ordering",
    name: "Zu House",
    handle: "zuhousemaracaibo",
    category: "Restaurante & Steakhouse Nocturno",
    badgeText: "🥩 5 de Julio · C.C. Terraza 77",
    tagline: "Sabores auténticos a las brasas que conquistan tu noche",
    heroTitle: "Cortes de carne premium y coctelería",
    heroHighlight: "a partir de las 5:00 PM",
    heroSubtitle:
      "El punto de encuentro en 5 de Julio. Reserva tu mesa para after-work o cenas especiales, pide tus cortes y disfruta del mejor ambiente nocturno.",
    logo: "/marcas/zuhouse.jpg",
    coverImage: "/marcas/zuhouse-cover.jpg",
    palette: {
      primary: "#D97706",
      primaryHover: "#B45309",
      secondary: "#991B1B",
      accent: "#FBBF24",
      darkBg: "#0F0F12",
      cardBg: "rgba(24, 24, 27, 0.8)",
      textLight: "#FAFAFA",
      textMuted: "#A1A1AA",
      border: "rgba(217, 119, 6, 0.25)",
      glow: "rgba(217, 119, 6, 0.2)",
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans",
    },
    introText: "Zu House es el steakhouse nocturno de referencia en 5 de Julio. A partir de las 5:00 PM, sus brasas encienden cortes premium importados en un ambiente que combina terraza urbana con energía de after-work.",
    introStats: [
      { label: "Apertura Diaria", value: "5 PM", detail: "Ideal para after-work" },
      { label: "Cortes Premium", value: "12+", detail: "Importados y nacionales" },
      { label: "Ubicación", value: "T-77", detail: "C.C. Terraza 77, 5 de Julio" },
    ],
    trustBadges: ["Acceso Directo sin Cola", "Coctelería de Autor", "Ambiente Nocturno Premium"],
    whatsappPitchCopy: "Hola amigos de Zu House! 🥩 Estuvimos preparando esta WebApp personalizada para su steakhouse en 5 de Julio (Terraza 77). Automatiza reservas after-work desde las 5:00 PM, comanda directa de cortes de carne a la brasa y control de aforo en tiempo real para el gerente.\n\nMiren la demo interactiva y el Reel vertical aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/zuhouse",
    address: "Calle 77 (5 de Julio), al lado del C.C. Terraza 77, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Terraza+77+Maracaibo",
    hours: "Todos los días a partir de las 5:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/zuhousemaracaibo/",
    bookingType: "steakhouse-vip",
    bookingTitle: "Reserva de Mesas & After-Work VIP",
    bookingSubtitle: "Asegura tu ubicación sin esperas para grupos, cumpleaños o cenas de negocios.",
    bookingOptions: [
      {
        id: "mesa-standard-zh",
        name: "Mesa Terraza After-Work (2 a 4 Pax)",
        description: "Mesa en la terraza abierta con vista al movimiento de 5 de Julio y música ambiental.",
        priceUSD: 15,
        unit: "abono a consumo",
        features: ["Ubicación en terraza", "Servicio rápido de barra", "Acceso directo sin cola", "100% abonable a la cuenta"],
      },
      {
        id: "lounge-carnes-grupo",
        name: "Mesa Lounge Carnes & Brasa (5 a 8 Pax)",
        description: "Mesa tipo lounge semicircular con comodidad máxima para compartir parrillas y tablas de degustación.",
        priceUSD: 30,
        unit: "abono a consumo",
        badge: "Grupos",
        features: ["Mesa lounge con sofás", "Servicio dedicado de mesonero", "Tabla de picar de cortesía", "Abonable a tu consumo"],
      },
    ],
    categories: [
      { id: "cortes-brasa", name: "Cortes a la Brasa", icon: "🥩" },
      { id: "hamburguesas-zh", name: "Burgers & Sandwiches", icon: "🍔" },
      { id: "cocteles-zh", name: "Tragos de Autor", icon: "🍸" },
    ],
    menuItems: [
      {
        id: "picanha-prime-zh",
        name: "Picanha Prime a la Espada (400g)",
        category: "cortes-brasa",
        description: "Corte grueso importado sellado al carbón con sal marina en grano, servido con hallaquitas y chimichurri casero.",
        priceUSD: 25,
        badge: "Top Seller",
        popular: true,
      },
      {
        id: "tomahawk-steak-zh",
        name: "Tomahawk Steak para Compartir (800g)",
        category: "cortes-brasa",
        description: "Imponente corte con hueso largo madurado, bañado en mantequilla de romero y ajo asado con papas trufadas.",
        priceUSD: 42,
        badge: "Corte Estrella",
      },
      {
        id: "smoked-old-fashioned",
        name: "Smoked Bourbon Old Fashioned",
        category: "cocteles-zh",
        description: "Bourbon premium ahumado en madera de roble al momento, bitter aromático y cáscara de naranja caramelizada.",
        priceUSD: 8,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 12,
      capacityPercentage: 72,
      todaySalesUSD: 890,
      avgTicketUSD: 45,
    },
    sampleBookings: [
      { id: "ZH-201", clientName: "Gustavo Guanipa", details: "Lounge Carnes & Brasa (6 pax)", time: "06:30 PM", status: "confirmada", pax: 6, totalUSD: 140 },
      { id: "ZH-202", clientName: "Andrea Colina", details: "Mesa Terraza After-Work (4 pax)", time: "07:15 PM", status: "en_mesa", pax: 4, totalUSD: 65 },
    ],
  },

  // 4. TANNOUS
  {
    slug: "tannous",
    batch: "dia1",
    archetype: "gourmet-booking",
    name: "Tannous Bar & Lounge",
    handle: "tannous_ve",
    category: "Restaurante Fusión & Eventos Exclusivos",
    badgeText: "🍽️ Fusión Gastronómica Única",
    tagline: "Experiencias gastronómicas de alto nivel, almuerzos ejecutivos y momentos memorables",
    heroTitle: "Fusión culinaria, menús ejecutivos y",
    heroHighlight: "eventos inolvidables",
    heroSubtitle:
      "Desde almuerzos ejecutivos de lunes a viernes hasta pedidas de mano personalizadas y celebraciones íntimas en Av. 13 con calle 74.",
    logo: "/marcas/tannous.jpg",
    coverImage: "/marcas/tannous-cover.jpg",
    palette: {
      primary: "#14B8A6",
      primaryHover: "#0D9488",
      secondary: "#1E293B",
      accent: "#2DD4BF",
      darkBg: "#0C191E",
      cardBg: "rgba(15, 30, 36, 0.8)",
      textLight: "#F0FDFA",
      textMuted: "#99F6E4",
      border: "rgba(45, 212, 191, 0.25)",
      glow: "rgba(20, 184, 166, 0.2)",
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans",
    },
    introText: "Tannous Bar & Lounge fusiona gastronomía de alto nivel con momentos inolvidables: desde almuerzos ejecutivos ágiles de lunes a viernes hasta pedidas de mano con decoración personalizada, velas y champaña.",
    introStats: [
      { label: "Menú Ejecutivo", value: "$14", detail: "3 tiempos + bebida incluida" },
      { label: "Eventos Privados", value: "100%", detail: "Coordinación integral" },
      { label: "Capacidad", value: "80+", detail: "Interior climatizado" },
    ],
    trustBadges: ["Servicio Express 20 min", "Coordinador de Eventos", "Factura Digital"],
    whatsappPitchCopy: "Hola equipo de Tannous! 🥂 Creamos una WebApp especializada para sus dos grandes fortalezas: reserva express de almuerzos ejecutivos de lunes a viernes (en menos de 20 min) y cotización automática de paquetes exclusivos para pedidas de mano y eventos privados con pase QR.\n\nLes comparto la demo y el video promocional:\n👉 https://byte-bridge-tau.vercel.app/demos/tannous",
    address: "Av. 13 con calle 74, C.C. Grupo 3965, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Maracaibo+Av+13+calle+74",
    hours: "Lunes a Domingo desde las 11:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/tannous_ve/",
    bookingType: "executive-events",
    bookingTitle: "Reservas de Eventos, Pedidas de Mano & Almuerzos",
    bookingSubtitle: "Elige tu tipo de ocasión y personaliza los detalles con confirmación instantánea por QR.",
    bookingOptions: [
      {
        id: "pedida-mano-tannous",
        name: "Paquete Pedida de Mano Exclusiva",
        description: "Espacio privado decorado con velas, flores, letras iluminadas 'Marry Me', champaña y cena de 3 tiempos.",
        priceUSD: 120,
        unit: "paquete completo",
        badge: "Momentos Mágicos",
        features: ["Área reservada 100% privada", "Decoración con velas y flores", "Botella de Espumante Brut", "Cena de 3 tiempos para 2", "Coordinador de sorpresa"],
      },
      {
        id: "almuerzo-ejecutivo-reserva",
        name: "Reserva Almuerzo Ejecutivo (11:30 AM - 3:30 PM)",
        description: "Mesa preferencial con servicio ágil en menos de 20 minutos, menú de 3 tiempos y bebida incluida.",
        priceUSD: 14,
        unit: "por persona",
        features: ["Servicio express garantizado", "Entrada + Plato Fuerte + Bebida", "Wi-Fi de alta velocidad para trabajo", "Factura digital instantánea"],
      },
    ],
    categories: [
      { id: "ejecutivos-tn", name: "Almuerzos Ejecutivos", icon: "🥗" },
      { id: "fusion-tn", name: "Fusión Tannous", icon: "🍱" },
      { id: "cocteles-tn", name: "Coctelería & Copas", icon: "🍸" },
    ],
    menuItems: [
      {
        id: "salmon-teriyaki-tannous",
        name: "Salmón Glaseado en Miso & Maracuyá",
        category: "fusion-tn",
        description: "Filete de salmón fresco sobre arroz jazmín con wok de vegetales orientales y crujiente de ajonjolí.",
        priceUSD: 23,
        badge: "Chef Signature",
        popular: true,
      },
      {
        id: "menu-ejecutivo-lomo",
        name: "Menú Ejecutivo: Medallón de Res al Oporto",
        category: "ejecutivos-tn",
        description: "Medallón tierno con reducción de vino oporto, puré rústico y ensalada capresa de entrada.",
        priceUSD: 14,
      },
      {
        id: "tannous-passion-gin",
        name: "Tannous Passion Gin Tonic",
        category: "cocteles-tn",
        description: "Ginebra infusionada con frutos rojos, tónica premium, romero flameado y bayas de enebro.",
        priceUSD: 7.5,
      },
    ],
    managerKpis: {
      activeReservations: 9,
      capacityPercentage: 68,
      todaySalesUSD: 640,
      avgTicketUSD: 36,
    },
    sampleBookings: [
      { id: "TN-301", clientName: "Mauricio Benítez", details: "Paquete Pedida de Mano Exclusiva", time: "08:00 PM", status: "confirmada", pax: 2, totalUSD: 120 },
      { id: "TN-302", clientName: "Dra. Carolina Rivas", details: "Almuerzo Ejecutivo (4 pax)", time: "01:00 PM", status: "en_mesa", pax: 4, totalUSD: 56 },
    ],
  },

  // 5. ROOM 101 RESTOBAR
  {
    slug: "room101",
    batch: "dia1",
    archetype: "vip-access",
    name: "Room 101",
    handle: "room101bar",
    category: "Restobar & Hookah Lounge",
    badgeText: "🍸 Good Drinks, Better Vibes",
    tagline: "Noches temáticas, coctelería de autor y hookah sessions en un ambiente underground premium",
    heroTitle: "Hookah, coctelería de autor y",
    heroHighlight: "noches temáticas",
    heroSubtitle:
      "Disfruta de nuestros tragos insignia como el 101 Mule y The Magic Love, sabores premium de Hookah y reserva tu lounge con código QR.",
    logo: "/marcas/room101.jpg",
    coverImage: "/marcas/room101-cover.jpg",
    palette: {
      primary: "#EAB308",
      primaryHover: "#CA8A04",
      secondary: "#713F12",
      accent: "#FDE047",
      darkBg: "#09090B",
      cardBg: "rgba(24, 24, 27, 0.85)",
      textLight: "#FAFAFA",
      textMuted: "#A1A1AA",
      border: "rgba(234, 179, 8, 0.3)",
      glow: "rgba(234, 179, 8, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans uppercase tracking-widest font-black",
      fontBody: "font-sans",
    },
    introText: "Room 101 es el restobar underground de Maracaibo donde la coctelería de autor se encuentra con hookah sessions premium y noches temáticas. Un concepto que mezcla mixología artesanal con experiencias sensoriales únicas.",
    introStats: [
      { label: "Tragos Insignia", value: "6", detail: "101 Mule, Magic Love y más" },
      { label: "Sabores Hookah", value: "20+", detail: "Premium con carbón de coco" },
      { label: "Noches Temáticas", value: "3/sem", detail: "Jue-Vie-Sáb rotativos" },
    ],
    trustBadges: ["Reserva de Lounge con QR", "Shisha Master Dedicado", "Acceso VIP sin Fila"],
    whatsappPitchCopy: "Hola gente de Room 101! 🍸 Desarrollamos una WebApp con su identidad underground: reserva de lounges VIP con hookahs, carta de cócteles insignia (101 Mule, Magic Love) y pases con código QR para noches temáticas sin cola en la entrada.\n\nPueden probar la demo y ver su Reel animado aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/room101",
    address: "Sector Tierra Negra, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Maracaibo+Tierra+Negra",
    hours: "Dom-Jue: 4:00 PM - 12:00 AM | Vie-Sáb: 4:00 PM - 3:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/room101bar/",
    bookingType: "hookah-lounge",
    bookingTitle: "Reserva de Lounges & Hookah Sessions",
    bookingSubtitle: "Elige tu zona favorita para noches temáticas, karaoke o plan con amigos con pase QR.",
    bookingOptions: [
      {
        id: "lounge-hookah-vip",
        name: "Lounge VIP + Hookah Premium (4 a 6 Pax)",
        description: "Mesa con sofás estilo lounge, 1 Hookah con sabor a elección y 2 cócteles de la casa de bienvenida.",
        priceUSD: 45,
        unit: "por grupo",
        badge: "Top Noches",
        features: ["Lounge VIP garantizado", "1 Hookah Premium con carbón de coco", "2 Cócteles Insignia incluidos", "Atención prioritaria de Shisha Master"],
      },
      {
        id: "mesa-cocktails-bar",
        name: "Mesa Alta Bar & Noches Temáticas (2 a 4 Pax)",
        description: "Ubicación central frente a la cabina del DJ y barra de mixología.",
        priceUSD: 20,
        unit: "abono a consumo",
        features: ["Ubicación en zona central DJ", "Abonable 100% en tragos y comida", "Acceso directo sin fila"],
      },
    ],
    categories: [
      { id: "signature-drinks", name: "Tragos Insignia Room 101", icon: "🍸" },
      { id: "hookahs-menu", name: "Hookahs & Sabores", icon: "💨" },
      { id: "tapas-night", name: "Tapas & Bites", icon: "🍟" },
    ],
    menuItems: [
      {
        id: "the-101-mule",
        name: "101 Mule (Signature)",
        category: "signature-drinks",
        description: "Vodka premium, reducción de jengibre artesanal, jugo de limón fresco y ginger beer servido en jarro de cobre.",
        priceUSD: 7,
        badge: "Insignia",
        popular: true,
      },
      {
        id: "the-magic-love",
        name: "The Magic Love",
        category: "signature-drinks",
        description: "Ginebra rosa, cordial de flor de saúco, jugo de arándanos y esfera mágica de humo aromático que explota en la mesa.",
        priceUSD: 8.5,
        badge: "Espectáculo",
        popular: true,
      },
      {
        id: "mojito-clasico-room",
        name: "Mojito Clásico Room",
        category: "signature-drinks",
        description: "Ron añejo venezolano, hierbabuena macerada a mano, azúcar morena y soda bien efervescente.",
        priceUSD: 6,
      },
      {
        id: "hookah-love-66",
        name: "Hookah Sabor Love 66 & Menta Helada",
        category: "hookahs-menu",
        description: "Mezcla de melón, maracuyá, menta y hielo con base iluminada LED.",
        priceUSD: 20,
        popular: true,
      },
      {
        id: "tequenos-truffle-room",
        name: "Tequeños Gourmet con Salsa de Trufa",
        category: "tapas-night",
        description: "6 tequeños gigantes rellenos de queso de mano y toque de aceite de trufa blanca.",
        priceUSD: 8,
      },
    ],
    managerKpis: {
      activeReservations: 16,
      capacityPercentage: 90,
      todaySalesUSD: 1120,
      avgTicketUSD: 42,
    },
    sampleBookings: [
      { id: "R101-401", clientName: "Gabriel Villalobos", details: "Lounge VIP + Hookah Premium", time: "09:30 PM", status: "confirmada", pax: 5, totalUSD: 75 },
      { id: "R101-402", clientName: "Camila Nuñez", details: "Mesa Alta Bar (3 pax)", time: "10:00 PM", status: "en_mesa", pax: 3, totalUSD: 45 },
    ],
  },

  // 6. LA BARRA VENTURA
  {
    slug: "labarraventura",
    batch: "dia1",
    archetype: "vip-access",
    name: "La Barra Ventura",
    handle: "labarraventura",
    category: "Restaurante & Discoteca",
    badgeText: "🪩 Food · Drinks · Nightlife",
    tagline: "El epicentro de la rumba y gastronomía nocturna en Maracaibo",
    heroTitle: "Restaurante, discoteca, pases VIP y",
    heroHighlight: "servicios de botellas",
    heroSubtitle:
      "Emisión instantánea de entradas y covers por QR, reserva de mesas de discoteca y carta de bebidas para vivir la noche sin complicaciones.",
    logo: "/marcas/labarraventura.jpg",
    coverImage: "/marcas/labarraventura-cover.jpg",
    palette: {
      primary: "#EC4899",
      primaryHover: "#DB2777",
      secondary: "#8B5CF6",
      accent: "#F472B6",
      darkBg: "#050505",
      cardBg: "rgba(20, 20, 25, 0.9)",
      textLight: "#FFFFFF",
      textMuted: "#D1D5DB",
      border: "rgba(236, 72, 153, 0.3)",
      glow: "rgba(236, 72, 153, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans uppercase font-black tracking-wider",
      fontBody: "font-sans",
    },
    introText: "La Barra Ventura es el epicentro de la vida nocturna de Maracaibo: restaurante de calidad que se transforma en la discoteca más activa de la ciudad con DJs residentes, servicio de botellas y pases VIP digitales.",
    introStats: [
      { label: "Capacidad", value: "400+", detail: "Personas por noche" },
      { label: "Servicio Botellas", value: "15+", detail: "Marcas premium disponibles" },
      { label: "Horario", value: "8PM–5AM", detail: "Jueves a Sábado" },
    ],
    trustBadges: ["Pase VIP Express Digital", "Entrada sin Cola", "DJ Residentes Internacionales"],
    whatsappPitchCopy: "Hola equipo de La Barra Ventura! 🪩 Preparamos una solución para agilizar el acceso nocturno: venta y emisión de pases VIP express con código QR (validación en puerta en 1 segundo), reserva de mesas de discoteca y servicios de botellas sin tickets de papel.\n\nVean la demo en vivo y el video promocional:\n👉 https://byte-bridge-tau.vercel.app/demos/labarraventura",
    address: "Sector Bella Vista / Av. 4, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Bella+Vista+Maracaibo",
    hours: "Jueves a Sábado: 8:00 PM - 5:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/labarraventura/",
    bookingType: "nightclub-vip",
    bookingTitle: "Pases de Entrada, Covers & Mesas VIP",
    bookingSubtitle: "Evita colas en la puerta y asegura tu pase digital con validación óptica QR en segundos.",
    bookingOptions: [
      {
        id: "cover-vip-barra",
        name: "Pase VIP Express con QR (1 Persona)",
        description: "Acceso sin fila por la puerta VIP + 1 trago de cortesía en barra.",
        priceUSD: 10,
        unit: "por persona",
        badge: "Acceso Rápido",
        features: ["Entrada sin hacer cola", "Trago de cortesía incluido", "Pase descargable en el teléfono", "Validación instantánea en puerta"],
      },
      {
        id: "mesa-disco-servicio",
        name: "Mesa VIP Discoteca + Servicio de Botella (6 Pax)",
        description: "Mesa en zona preferencial, 6 entradas VIP incluidas y 1 botella de whisky o ron premium con descorche y hielo.",
        priceUSD: 110,
        unit: "por grupo",
        badge: "Full Rumba",
        features: ["Mesa reservada toda la noche", "6 Entradas VIP incluidas", "Botella de Whisky 12 Años o Ron Reserva", "Refrescos y hielo continuo"],
      },
    ],
    categories: [
      { id: "servicios-botellas", name: "Servicio de Botellas", icon: "🍾" },
      { id: "cocktails-shots", name: "Coctelería & Shots", icon: "🍹" },
      { id: "late-bites", name: "Munchies & Fast Food", icon: "🍕" },
    ],
    menuItems: [
      {
        id: "servicio-whisky-black",
        name: "Servicio Black Label 12 Años",
        category: "servicios-botellas",
        description: "Botella 750ml con 4 aguas, hielera grande y servicio en mesa.",
        priceUSD: 65,
        badge: "Favorito",
        popular: true,
      },
      {
        id: "shots-tequila-ronda",
        name: "Ronda de 5 Shots Don Julio Blanco",
        category: "cocktails-shots",
        description: "5 shots de tequila blanco con limón y sal de gusano.",
        priceUSD: 18,
      },
      {
        id: "pizza-after-party",
        name: "Pizza Gigante After-Party",
        category: "late-bites",
        description: "Masa crujiente con extra queso mozzarella, jamón ahumado y pepperoni.",
        priceUSD: 14,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 24,
      capacityPercentage: 94,
      todaySalesUSD: 2350,
      avgTicketUSD: 85,
    },
    sampleBookings: [
      { id: "LBV-601", clientName: "Santiago Bermúdez", details: "Mesa VIP + Servicio Whisky (6 pax)", time: "11:00 PM", status: "confirmada", pax: 6, totalUSD: 110 },
      { id: "LBV-602", clientName: "Dayana Morales", details: "4x Pases VIP Express QR", time: "11:30 PM", status: "en_mesa", pax: 4, totalUSD: 40 },
    ],
  },

  // 7. CIAO GASTROBAR
  {
    slug: "ciaogastrobar",
    batch: "dia1",
    archetype: "gourmet-booking",
    name: "Ciao Gastrobar",
    handle: "ciaogastrobar",
    category: "Alta Cocina Italiana & Gastrobar",
    badgeText: "🇮🇹 L'arte della vera cucina italiana",
    tagline: "Pastas artesanales, pizzas napolitanas y digestivos en un rincón italiano único",
    heroTitle: "El arte de la auténtica cocina",
    heroHighlight: "italiana en Maracaibo",
    heroSubtitle:
      "Ubicado en el C.C. Terraza 77 (Nivel 2). Reserva tu mesa en terraza o salón y disfruta de pastas hechas a mano y pizzas al horno.",
    logo: "/marcas/ciaogastrobar.jpg",
    coverImage: "/marcas/ciaogastrobar-cover.jpg",
    palette: {
      primary: "#15803D",
      primaryHover: "#166534",
      secondary: "#991B1B",
      accent: "#FBBF24",
      darkBg: "#111827",
      cardBg: "rgba(31, 41, 55, 0.8)",
      textLight: "#F9FAFB",
      textMuted: "#D1D5DB",
      border: "rgba(34, 197, 94, 0.25)",
      glow: "rgba(21, 128, 61, 0.2)",
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans",
    },
    introText: "Ciao Gastrobar trae el arte de la auténtica cocina italiana al segundo nivel del C.C. Terraza 77: pastas hechas a mano cada mañana, pizzas napolitanas al horno de leña y una carta de vinos italianos curada por el chef.",
    introStats: [
      { label: "Pastas Frescas", value: "100%", detail: "Hechas a mano cada día" },
      { label: "Nivel", value: "2do", detail: "C.C. Terraza 77" },
      { label: "Especialidad", value: "Napoli", detail: "Pizza al horno de leña" },
    ],
    trustBadges: ["Ingredientes Importados", "Chef Italiano en Cocina", "Terraza con Brisa"],
    whatsappPitchCopy: "Ciao equipo de Ciao Gastrobar! 🍝 Diseñamos una WebApp a la altura de su cocina italiana en el nivel 2 de Terraza 77: reserva de mesas en terraza, carta interactiva de pastas frescas y pizzas napolitanas con maridaje de vinos y conversión en USD/Bs oficial.\n\nExploren la demo interactiva y el Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/ciaogastrobar",
    address: "C.C. Terraza 77, Nivel 2, Calle 77 (5 de Julio), Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Terraza+77+Nivel+2+Maracaibo",
    hours: "Martes a Domingo: 12:30 PM - 11:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/ciaogastrobar/",
    bookingType: "italian-terrace",
    bookingTitle: "Reserva de Mesas en Terraza & Salón",
    bookingSubtitle: "Disfruta de almuerzos familiares, cenas íntimas y veladas gastronómicas.",
    bookingOptions: [
      {
        id: "mesa-terraza-ciao",
        name: "Mesa Terraza C.C. Terraza 77 (2 a 4 Pax)",
        description: "Ambiente al aire libre en el segundo nivel con brisa y vista agradable.",
        priceUSD: 15,
        unit: "abono a consumo",
        features: ["Ubicación en terraza", "100% abonable a la cuenta", "Pan de la casa y mantequilla de hierbas"],
      },
      {
        id: "mesa-degustacion-italiana",
        name: "Mesa Experiencia Degustación Italiana (2 Pax)",
        description: "Menú de 4 tiempos: Antipasto italiano, Pasta fresca rellena, Plato de carne y Tiramisú clásico.",
        priceUSD: 55,
        unit: "por pareja",
        badge: "Chef Choice",
        features: ["Antipasto di Parma e Burrata", "Pasta fresca hecha al día", "Postre Tiramisú al Mascarpone", "2 Copas de Vino Prosecco"],
      },
    ],
    categories: [
      { id: "pastas-frescas", name: "Pastas Hechas a Mano", icon: "🍝" },
      { id: "pizzas-napoli", name: "Pizzas al Horno", icon: "🍕" },
      { id: "antipasti-dolci", name: "Antipasti & Postres", icon: "🍨" },
    ],
    menuItems: [
      {
        id: "fettuccine-tartufo-ciao",
        name: "Fettuccine al Tartufo e Funghi",
        category: "pastas-frescas",
        description: "Pasta artesanal fresca con salsa cremosa de hongos porcini, crema de trufa negra y queso Parmigiano Reggiano 24 meses.",
        priceUSD: 18,
        badge: "Estrella",
        popular: true,
      },
      {
        id: "pizza-margherita-burrata",
        name: "Pizza Margherita con Burrata Fresca",
        category: "pizzas-napoli",
        description: "Salsa de tomates San Marzano D.O.P., mozzarella fior di latte, burrata fresca entera al centro y albahaca fresca.",
        priceUSD: 16,
        popular: true,
      },
      {
        id: "tiramisu-tradizionale",
        name: "Tiramisù Tradizionale della Nonna",
        category: "antipasti-dolci",
        description: "Savoiardi italianos embebidos en espresso Illy, crema de queso mascarpone y cacao amargo espolvoreado.",
        priceUSD: 7,
      },
    ],
    managerKpis: {
      activeReservations: 11,
      capacityPercentage: 75,
      todaySalesUSD: 780,
      avgTicketUSD: 48,
    },
    sampleBookings: [
      { id: "CIAO-701", clientName: "Franco Di Martino", details: "Mesa Degustación Italiana (2 pax)", time: "07:45 PM", status: "confirmada", pax: 2, totalUSD: 55 },
      { id: "CIAO-702", clientName: "Lorena Montiel", details: "Mesa Terraza (4 pax)", time: "08:30 PM", status: "en_mesa", pax: 4, totalUSD: 85 },
    ],
  },

  // 8. BLAO MCBO
  {
    slug: "blaomcbo",
    batch: "dia1",
    archetype: "table-ordering",
    name: "BLAO Maracaibo",
    handle: "blaomcbo",
    category: "Gastronomía · Tragos · Música",
    badgeText: "🌆 Una terraza para cualquier plan",
    tagline: "¿Qué hacemos? BLAO. Almuerzos B-Lunch, noches de Blaoke y fiesta de terraza",
    heroTitle: "Almuerzos B-Lunch, noches de Blaoke y",
    heroHighlight: "la terraza más activa",
    heroSubtitle:
      "Ubicado en Plaza 75. Disfruta de gastronomía mar y tierra, cócteles de autor y reserva tu mesa para almuerzos o eventos nocturnos.",
    logo: "/marcas/blaomcbo.jpg",
    coverImage: "/marcas/blaomcbo-cover.jpg",
    palette: {
      primary: "#0284C7",
      primaryHover: "#0369A1",
      secondary: "#0F172A",
      accent: "#38BDF8",
      darkBg: "#0A1220",
      cardBg: "rgba(15, 23, 42, 0.8)",
      textLight: "#F8FAFC",
      textMuted: "#CBD5E1",
      border: "rgba(56, 189, 248, 0.25)",
      glow: "rgba(2, 132, 199, 0.2)",
    },
    typography: {
      fontDisplay: "font-sans uppercase font-bold tracking-tight",
      fontBody: "font-sans",
    },
    introText: "BLAO es la terraza más versátil de Maracaibo: almuerzos ejecutivos B-Lunch al mediodía, cócteles al atardecer y noches de Blaoke con karaoke en vivo. Fusión gastronómica de mar y tierra en Plaza 75.",
    introStats: [
      { label: "Concepto Dual", value: "2 en 1", detail: "Almuerzo ejecutivo + Rumba" },
      { label: "Terraza", value: "Plaza 75", detail: "Al aire libre" },
      { label: "Blaoke", value: "Vie-Sáb", detail: "Karaoke en vivo + DJ" },
    ],
    trustBadges: ["B-Lunch Express 15 min", "Wi-Fi para Trabajo", "Terraza al Aire Libre"],
    whatsappPitchCopy: "Hola amigos de BLAO! 🌆 Creamos una WebApp interactiva pensada para su concepto dual en Plaza 75: reservas rápidas de B-Lunch para almuerzos corporativos y mesas de terraza para las noches de Blaoke y fiesta con cócteles de autor.\n\nPrueben la experiencia digital y el Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/blaomcbo",
    address: "Plaza 75, Calle 75 con Av. 3Y, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Plaza+75+Maracaibo",
    hours: "Lunes a Domingo: 12:00 PM - 2:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/blaomcbo/",
    bookingType: "terrace-blunch",
    bookingTitle: "Reserva de Terraza & Noches Temáticas",
    bookingSubtitle: "Asegura tu lugar para B-Lunch (almuerzos), tardes de cócteles o noches de Blaoke.",
    bookingOptions: [
      {
        id: "b-lunch-reserva",
        name: "Reserva B-Lunch (Almuerzos Ejecutivos 12-4 PM)",
        description: "Menú especial del día con platos de autor, atención rápida y ambiente tranquilo para reuniones.",
        priceUSD: 12,
        unit: "por persona",
        badge: "Almuerzos",
        features: ["Plato principal + Bebida", "Atención express en 15 minutos", "Wi-Fi y enchufes para laptop"],
      },
      {
        id: "mesa-blaoke-noche",
        name: "Mesa Terraza Blaoke & Rumba (4 a 6 Pax)",
        description: "Mesa en la zona principal para la noche de karaoke, DJ en vivo y coctelería.",
        priceUSD: 25,
        unit: "abono a consumo",
        badge: "Noche Blao",
        features: ["Mesa frente al escenario", "Abonable 100% en comida y tragos", "Turno preferencial en Blaoke"],
      },
    ],
    categories: [
      { id: "mar-tierra-blao", name: "Fusión Mar & Tierra", icon: "🍤" },
      { id: "tragos-blao", name: "Tragos de Terraza", icon: "🍹" },
      { id: "picaderas-blao", name: "Tablas & Picaderas", icon: "🌮" },
    ],
    menuItems: [
      {
        id: "ceviche-blao-tropical",
        name: "Ceviche Blao Mango & Aguacate",
        category: "mar-tierra-blao",
        description: "Pescado blanco fresco curado en leche de tigre con dados de mango dulce, aguacate cremoso y chips de plátano verde.",
        priceUSD: 14,
        badge: "Favorito",
        popular: true,
      },
      {
        id: "angus-burger-blao",
        name: "Burger Angus Mar y Tierra",
        category: "mar-tierra-blao",
        description: "Carne Angus certificada, camarones al ajillo salteados, queso cheddar fundido y salsa tártara de la casa.",
        priceUSD: 15,
        popular: true,
      },
      {
        id: "blao-colada-frozen",
        name: "Blao Colada Azul Frozen",
        category: "tragos-blao",
        description: "Ron blanco, crema de coco, curaçao azul, piña colada frappeada y cereza al marrasquino.",
        priceUSD: 7,
      },
    ],
    managerKpis: {
      activeReservations: 15,
      capacityPercentage: 82,
      todaySalesUSD: 1250,
      avgTicketUSD: 39,
    },
    sampleBookings: [
      { id: "BLAO-801", clientName: "José Leonardo Paz", details: "Mesa Terraza Blaoke (6 pax)", time: "09:00 PM", status: "confirmada", pax: 6, totalUSD: 95 },
      { id: "BLAO-802", clientName: "Sofía Arrieta", details: "2x B-Lunch Almuerzo Ejecutivo", time: "01:30 PM", status: "en_mesa", pax: 2, totalUSD: 24 },
    ],
  },

  // 9. PITTS BOWLING
  {
    slug: "pittsbowling",
    batch: "dia1",
    archetype: "vip-access",
    name: "Pitts Bowling",
    handle: "pittsbowling",
    category: "Bowling Profesional · Restaurante & Bar",
    badgeText: "🎳 Único Centro Federado en Maracaibo",
    tagline: "BOWL LIKE A PRO: Pistas profesionales, torneos y comida a la pista",
    heroTitle: "Pistas profesionales de bowling,",
    heroHighlight: "comida gourmet y bar",
    heroSubtitle:
      "Ubicado en la Planta Alta del C.C. Costa Verde. Reserva tus pistas por hora, calzado profesional y pide directo a tu mesa con tasa oficial.",
    logo: "/marcas/pittsbowling.jpg",
    coverImage: "/marcas/pittsbowling-cover.jpg",
    palette: {
      primary: "#2563EB",
      primaryHover: "#1D4ED8",
      secondary: "#DC2626",
      accent: "#60A5FA",
      darkBg: "#0B0F19",
      cardBg: "rgba(17, 24, 39, 0.85)",
      textLight: "#F9FAFB",
      textMuted: "#9CA3AF",
      border: "rgba(37, 99, 235, 0.3)",
      glow: "rgba(37, 99, 235, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans uppercase font-black tracking-wider",
      fontBody: "font-sans",
    },
    introText: "Pitts Bowling es el único centro de bowling federado de Maracaibo, ubicado en la planta alta del C.C. Costa Verde. Pistas profesionales con puntuación digital, restaurante con comida a la pista y bar deportivo.",
    introStats: [
      { label: "Pistas Profesionales", value: "8", detail: "Con puntuación digital HD" },
      { label: "Precio/Hora", value: "$30", detail: "Hasta 6 jugadores" },
      { label: "Centro Federado", value: "Único", detail: "En toda la ciudad" },
    ],
    trustBadges: ["Calzado Desinfectado", "Comanda a la Pista", "Torneos Oficiales"],
    whatsappPitchCopy: "Hola equipo de Pitts Bowling! 🎳 Desarrollamos una WebApp a medida para el único centro de bowling federado de Maracaibo (C.C. Costa Verde): reserva de pistas por hora + calzado profesional, comanda de comida directo a la pista y tasa BCV en vivo.\n\nMiren la demo y el video comercial de 15s aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/pittsbowling",
    address: "Planta Alta C.C. Costa Verde, Av. Bella Vista, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=CC+Costa+Verde+Maracaibo",
    hours: "Lunes a Domingo: 2:00 PM - 12:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/pittsbowling/",
    bookingType: "bowling-lanes",
    bookingTitle: "Reserva de Pistas de Bowling & Calzado",
    bookingSubtitle: "Selecciona tu pista, duración en horas y número de jugadores con confirmación instantánea.",
    bookingOptions: [
      {
        id: "pista-1-hora",
        name: "1 Hora de Pista de Bowling (Hasta 6 Jugadores)",
        description: "Pista profesional con puntuación digital automática, bolas de distintos pesos y asistencia en pista.",
        priceUSD: 30,
        unit: "por hora",
        badge: "Más Popular",
        features: ["Hasta 6 jugadores en pista", "Puntuación en pantallas HD", "Mesa y sofás privados de pista", "Servicio de comida a la pista"],
      },
      {
        id: "combo-strike-2horas",
        name: "Combo Strike: 2 Horas + Calzado (4 a 6 Jugadores)",
        description: "2 horas continuas de juego con alquiler de zapatos especiales para bowling incluido para todo el grupo.",
        priceUSD: 65,
        unit: "combo completo",
        badge: "Ahorro",
        features: ["2 horas completas de juego", "Alquiler de zapatos para hasta 6 pax", "Bandeja de snacks de cortesía", "Pista preferencial"],
      },
      {
        id: "alquiler-zapatos-par",
        name: "Alquiler de Zapatos Profesionales (Por Par)",
        description: "Calzado reglamentario desinfectado en todas las tallas para niños y adultos.",
        priceUSD: 2.5,
        unit: "por persona",
        features: ["Calzado desinfectado", "Tallas del 30 al 46"],
      },
    ],
    categories: [
      { id: "comida-pista", name: "Snacks & Burgers de Pista", icon: "🍔" },
      { id: "bebidas-pitts", name: "Cervezas & Tragos", icon: "🍺" },
      { id: "pizzas-pitts", name: "Pizzas de Pista", icon: "🍕" },
    ],
    menuItems: [
      {
        id: "combo-alitas-pitts",
        name: "Cesta de 12 Alitas Buffalo / BBQ",
        category: "comida-pista",
        description: "Alitas de pollo extra crujientes bañadas en salsa BBQ ahumada o picante buffalo con bastones de apio y aderezo ranch.",
        priceUSD: 13,
        badge: "Recomendado",
        popular: true,
      },
      {
        id: "balde-polar-pitts",
        name: "Balde de 6 Cervezas Polar Pilsen / Light",
        category: "bebidas-pitts",
        description: "Balde de hielo con 6 botellitas bien vestidas de novia.",
        priceUSD: 9,
        popular: true,
      },
      {
        id: "pizza-strike-pepperoni",
        name: "Pizza Familiar Strike Pepperoni",
        category: "pizzas-pitts",
        description: "8 porciones con doble mozzarella fundida y abundante pepperoni horneado al momento.",
        priceUSD: 14,
      },
    ],
    managerKpis: {
      activeReservations: 10,
      capacityPercentage: 80,
      todaySalesUSD: 980,
      avgTicketUSD: 52,
    },
    sampleBookings: [
      { id: "PITTS-901", clientName: "Héctor Cardozo", details: "Combo Strike 2 Horas + Zapatos (6 pax)", time: "05:00 PM", status: "en_mesa", pax: 6, totalUSD: 65 },
      { id: "PITTS-902", clientName: "Karla Urdaneta", details: "Pista 1 Hora (4 pax)", time: "07:30 PM", status: "confirmada", pax: 4, totalUSD: 40 },
    ],
  },

  // 10. THE CORNER
  {
    slug: "corner",
    batch: "dia1",
    archetype: "table-ordering",
    name: "The Corner",
    handle: "cornermcbo",
    category: "Drinks · Board Games & Entertainment",
    badgeText: "🎲 Ready, Set, Drink! 💥",
    tagline: "Tragos, juegos de mesa, música, comedia en vivo y eventos privados",
    heroTitle: "Catálogo de 50+ juegos de mesa,",
    heroHighlight: "tragos y eventos privados",
    heroSubtitle:
      "El punto de entretenimiento más divertido de Maracaibo. Reserva salones para eventos privados, explora el menú de juegos y cócteles temáticos.",
    logo: "/marcas/corner.jpg",
    coverImage: "/marcas/corner-cover.jpg",
    palette: {
      primary: "#F97316",
      primaryHover: "#EA580C",
      secondary: "#EAB308",
      accent: "#FB923C",
      darkBg: "#0D0D11",
      cardBg: "rgba(24, 24, 30, 0.85)",
      textLight: "#FFFFFF",
      textMuted: "#CBD5E1",
      border: "rgba(249, 115, 22, 0.3)",
      glow: "rgba(249, 115, 22, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans uppercase font-black tracking-tight",
      fontBody: "font-sans",
    },
    introText: "The Corner es el bar de entretenimiento donde los juegos de mesa se encuentran con tragos temáticos y comedia en vivo. Más de 50 juegos con Game Masters que explican las reglas, salón para eventos privados y stand-up comedy.",
    introStats: [
      { label: "Juegos de Mesa", value: "50+", detail: "Con Game Master dedicado" },
      { label: "Tragos Temáticos", value: "12", detail: "Pociones con glitter UV" },
      { label: "Eventos", value: "Privados", detail: "Hasta 15 personas" },
    ],
    trustBadges: ["Game Master Incluido", "Sin Límite de Tiempo", "Stand-Up Comedy Semanal"],
    whatsappPitchCopy: "Hola gente de The Corner! 🎲 Preparamos una WebApp temática con su ludoteca digital interactiva: catálogo de más de 50 juegos de mesa con filtros por jugadores y tiempo, carta de pociones/tragos y reserva de salón para eventos privados.\n\nLes comparto la demo y el Reel animado:\n👉 https://byte-bridge-tau.vercel.app/demos/corner",
    address: "Calle 72 con Av. 10, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Calle+72+Maracaibo",
    hours: "Miércoles a Domingos: 5:30 PM - 12:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/cornermcbo/",
    bookingType: "boardgames-events",
    bookingTitle: "Reserva de Mesas de Juegos & Eventos Privados",
    bookingSubtitle: "Asegura tu mesa con acceso a la ludoteca o cotiza tu evento privado con pase QR.",
    bookingOptions: [
      {
        id: "mesa-board-games-pass",
        name: "Mesa Gamer con Ludoteca Ilimitada (2 a 6 Pax)",
        description: "Acceso libre a los más de 50 juegos de mesa (Catan, Dixit, Codenames, Exploding Kittens, etc.) con asesor de juego.",
        priceUSD: 10,
        unit: "por grupo",
        badge: "Favorito Gamer",
        features: ["Acceso ilimitado a 50+ juegos", "Explicación de reglas por Game Master", "Mesa amplia con portavasos", "Sin límite de tiempo"],
      },
      {
        id: "evento-privado-corner",
        name: "Reserva Salón para Evento Privado / Cumpleaños",
        description: "Espacio reservado exclusivo, decoración gamer/party, juego temático guiado y ronda de cócteles.",
        priceUSD: 70,
        unit: "paquete base",
        badge: "Eventos",
        features: ["Área reservada hasta 15 personas", "Game Master dedicado 100%", "2 Rondas de Tequeños gigantes", "Descuento en carta de tragos"],
      },
    ],
    categories: [
      { id: "juegos-destacados", name: "Catálogo de Juegos de Mesa", icon: "🎲" },
      { id: "tragos-tematicos", name: "Cócteles Temáticos & Drinks", icon: "🧪" },
      { id: "comida-corner", name: "Burgers & Munchies", icon: "🍔" },
    ],
    menuItems: [
      {
        id: "juego-catan",
        name: "Juego: Los Colonos de Catan",
        category: "juegos-destacados",
        description: "Estrategia y negociación (3 a 4 jugadores | 60-90 min | Dificultad: Media). El rey de los juegos de mesa modernos.",
        priceUSD: 0,
        badge: "Top 1 Ludoteca",
        tags: ["3-4 Jugadores", "Estrategia", "60 min"],
      },
      {
        id: "juego-codenames",
        name: "Juego: Codenames (Código Secreto)",
        category: "juegos-destacados",
        description: "Juego de deducción y palabras por equipos (4 a 8+ jugadores | 15-30 min | Dificultad: Fácil y divertido).",
        priceUSD: 0,
        badge: "Party Game",
        tags: ["Grupos", "Palabras", "15 min"],
      },
      {
        id: "potion-cocktail-corner",
        name: "Poción Mana Blue (Signature Drink)",
        category: "tragos-tematicos",
        description: "Ginebra, licor de moras azules, tónica y glitter comestible que brilla bajo luz ultravioleta.",
        priceUSD: 7,
        popular: true,
      },
      {
        id: "nachos-supremos-corner",
        name: "Nachos Volcánicos con Carne & Queso",
        category: "comida-corner",
        description: "Totopos crujientes con queso cheddar fundido, carne sazonada, jalapeños, pico de gallo y guacamole.",
        priceUSD: 11,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 13,
      capacityPercentage: 88,
      todaySalesUSD: 740,
      avgTicketUSD: 31,
    },
    sampleBookings: [
      { id: "CRN-1001", clientName: "Luis Ignacio Torres", details: "Mesa Gamer + Catan (4 pax)", time: "06:30 PM", status: "en_mesa", pax: 4, totalUSD: 35 },
      { id: "CRN-1002", clientName: "Mariana Albornoz", details: "Reserva Salón Evento Privado (12 pax)", time: "08:00 PM", status: "confirmada", pax: 12, totalUSD: 95 },
    ],
  },

  // 11. ESTACIÓN HOLIDAYS
  {
    slug: "estacionholidays",
    batch: "dia2",
    archetype: "gourmet-booking",
    name: "Estación Holidays",
    handle: "estacionholidays",
    category: "Restaurante Continental · Cocina Fusión · Coctelería",
    badgeText: "🚂 #ViajeGastronómico",
    tagline: "Un viaje sensorial por la cocina del mundo en Maracaibo",
    heroTitle: "Sube a bordo de una experiencia gastronómica",
    heroHighlight: "por 3 continentes",
    heroSubtitle:
      "Estación Asia, América y Europa en un solo lugar. Reserva tu mesa, estampa tu Pasaporte Digital y disfruta de alta cocina continental.",
    logo: "/marcas/estacionholidays.jpg",
    coverImage: "/marcas/estacionholidays-cover.jpg",
    palette: {
      primary: "#D97706",
      primaryHover: "#B45309",
      secondary: "#0284C7",
      accent: "#FBBF24",
      darkBg: "#0B0F17",
      cardBg: "rgba(15, 23, 42, 0.85)",
      textLight: "#F8FAFC",
      textMuted: "#94A3B8",
      border: "rgba(245, 158, 11, 0.25)",
      glow: "rgba(245, 158, 11, 0.25)",
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans",
    },
    introText:
      "Estación Holidays es el restaurante de cocina continental de autor inspirado en una estación ferroviaria de lujo en C.C. Bahía del Lago. Su propuesta divide el menú en tres grandes rutas sensoriales: Estación Asia, Estación América y Estación Europa.",
    introStats: [
      { label: "Rutas del Menú", value: "3", detail: "Asia, América & Europa" },
      { label: "Ticket Promedio", value: "$18", detail: "Alta cocina accesible" },
      { label: "Ubicación", value: "Bahía del Lago", detail: "Milagro Norte" },
    ],
    trustBadges: ["Pasaporte Digital con Sellos", "Menú Multimoneda en Tiempo Real", "Estacionamiento Bahía del Lago"],
    whatsappPitchCopy:
      "Hola equipo de Estación Holidays! 🚂 Analizamos su concepto único de cocina continental inspirada en estaciones ferroviarias del mundo y diseñamos esta WebApp a su medida: incluye el Pasaporte Digital Gamificado con sellos por continentes, reservas online y menú interactivo con tasa BCV automática.\n\nPueden probar la demo interactiva y ver su Reel animado aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/estacionholidays",
    address: "C.C. Bahía del Lago, Av. Milagro Norte, Maracaibo, Zulia",
    mapsUrl: "https://maps.google.com/?q=Estacion+Holidays+Maracaibo",
    hours: "Lunes a Domingo: 8:00 AM - 1:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/estacionholidays/",
    bookingType: "train-station-table",
    bookingTitle: "Reserva de Mesas & Pasaporte Gastronómico",
    bookingSubtitle: "Aparta tu mesa en la estación y recibe tu confirmación digital con código QR instantáneo.",
    bookingOptions: [
      {
        id: "mesa-continental-holidays",
        name: "Mesa Salón Principal (2 a 4 Pax)",
        description: "Ubicación en salón climatizado con ambientación ferroviaria de lujo y servicio guiado.",
        priceUSD: 0,
        unit: "reserva gratuita",
        badge: "Más Solicitado",
        features: ["Mesa reservada sin espera", "Pasaporte digital incluido", "Valet parking en C.C."],
      },
      {
        id: "degustacion-3-rutas",
        name: "Experiencia 3 Continentes (Degustación para 2)",
        description: "Recorrido guiado de 3 tiempos: Entrada Asia + Principal América/Europa + Postre de autor + Copa de vino.",
        priceUSD: 45,
        unit: "para 2 personas",
        badge: "Exclusivo",
        features: ["Menú 3 tiempos para 2", "2 Copas de vino selección", "Sello completo en Pasaporte", "Mesa preferencial"],
      },
      {
        id: "area-eventos-holidays",
        name: "Reserva Área Corporativa / Cumpleaños (8 a 15 Pax)",
        description: "Mesa imperial para grupos con atención dedicada y facilidades para brindis y celebraciones.",
        priceUSD: 80,
        unit: "consumo mínimo",
        features: ["Espacio reservado para grupos", "Atención de mesero exclusivo", "Brindis con champaña o cócteles", "Factura digital corporativa"],
      },
    ],
    categories: [
      { id: "estacion-asia", name: "Estación Asia 🥢", icon: "🥢" },
      { id: "estacion-america", name: "Estación América 🍔", icon: "🍔" },
      { id: "estacion-europa", name: "Estación Europa 🍝", icon: "🍝" },
      { id: "cocteleria-viajera", name: "Coctelería de Autor 🍸", icon: "🍸" },
    ],
    menuItems: [
      {
        id: "bao-pork-holidays",
        name: "Baos de Pork Belly Glaseado (Asia)",
        category: "estacion-asia",
        description: "Pan bao al vapor relleno de panceta crujiente glaseada en teriyaki de la casa, pepino encurtido y mayonesa de sésamo.",
        priceUSD: 9,
        badge: "Fusión Asia",
        popular: true,
      },
      {
        id: "burger-holidays-express",
        name: "Orient Express Burger (América)",
        category: "estacion-america",
        description: "Doble carne Angus, queso gouda ahumado, tocineta caramelizada en bourbon y cebolla crujiente en pan brioche.",
        priceUSD: 13,
        badge: "Chef Signature",
        popular: true,
      },
      {
        id: "pasta-trufa-holidays",
        name: "Tagliatelle al Tartufo & Funghi (Europa)",
        category: "estacion-europa",
        description: "Pasta fresca artesanal salteada en mantequilla de trufa negra, setas silvestres y queso Parmigiano Reggiano 24 meses.",
        priceUSD: 16,
      },
      {
        id: "cocktail-transiberiano",
        name: "Cóctel Transiberiano Smokey",
        category: "cocteleria-viajera",
        description: "Bourbon infusionado, cordial de moras silvestres, bíter ahumado y romero flameado servido en campana de cristal.",
        priceUSD: 8,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 16,
      capacityPercentage: 82,
      todaySalesUSD: 890,
      avgTicketUSD: 28,
    },
    sampleBookings: [
      { id: "HOL-201", clientName: "Eduardo González", details: "Experiencia 3 Continentes (2 pax)", time: "07:30 PM", status: "en_mesa", pax: 2, totalUSD: 45 },
      { id: "HOL-202", clientName: "Valeria Montiel", details: "Mesa Salón Principal (4 pax)", time: "08:30 PM", status: "confirmada", pax: 4, totalUSD: 72 },
    ],
  },

  // 12. MOSAICO RESTO-BAR
  {
    slug: "mosaico_mcbo",
    batch: "dia2",
    archetype: "table-ordering",
    name: "Mosaico Resto-Bar",
    handle: "mosaico_mcbo",
    category: "Buffet Criollo · Almuerzos Ejecutivos · Karaoke Bar",
    badgeText: "🎨 #ElBuffetDeTierraNegra",
    tagline: "Comida casera criolla de día, cócteles y karaoke de noche",
    heroTitle: "El mejor buffet criollo y las mejores",
    heroHighlight: "noches de karaoke",
    heroSubtitle:
      "Almuerzos ejecutivos con 1 proteína y 3 contornos, asado negro zuliano, costillas al barril y noches de micrófono abierto.",
    logo: "/marcas/mosaico_mcbo.jpg",
    coverImage: "/marcas/mosaico_mcbo-cover.jpg",
    palette: {
      primary: "#EC4899",
      primaryHover: "#DB2777",
      secondary: "#8B5CF6",
      accent: "#F472B6",
      darkBg: "#0D0714",
      cardBg: "rgba(26, 12, 38, 0.85)",
      textLight: "#FDF4FF",
      textMuted: "#C084FC",
      border: "rgba(236, 72, 153, 0.25)",
      glow: "rgba(236, 72, 153, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans",
    },
    introText:
      "Mosaico Restaurant combina el almuerzo buffet más completo de Tierra Negra durante el día con noches vibrantes de karaoke, picaderas criollas y promociones de cerveza artesanal y nacional frente al C.C. Aventura.",
    introStats: [
      { label: "Menú Buffet", value: "$6-8", detail: "Proteína + 3 contornos + sopa" },
      { label: "Noches Karaoke", value: "Jue-Sáb", detail: "Micrófono abierto y promos" },
      { label: "Ubicación", value: "Tierra Negra", detail: "Frente al C.C. Aventura" },
    ],
    trustBadges: ["BuffetBot con Menú del Día", "Turnero Digital de Karaoke", "Plancha y Costillas al Barril"],
    whatsappPitchCopy:
      "Hola equipo de Mosaico Restaurant! 🎨 Desarrollamos una WebApp a medida para automatizar el menú diario de su buffet (responde automáticamente qué hay hoy por WhatsApp) y gestionar turnos digitales para sus noches de karaoke sin papelitos ni confusiones.\n\nPueden ver la demo interactiva y su video promocional aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/mosaico_mcbo",
    address: "Av. 12 con Calle 74, Sector Tierra Negra, frente a C.C. Aventura, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Mosaico+Maracaibo+Tierra+Negra",
    hours: "Lunes a Sábado: 8:30 AM - 10:00 PM · Domingos: 9:00 AM - 6:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/mosaico_mcbo/",
    bookingType: "buffet-karaoke",
    bookingTitle: "Pases de Buffet & Reservas de Karaoke",
    bookingSubtitle: "Reserva tu almuerzo corporativo o asegura tu mesa con micrófono prioritario para la noche.",
    bookingOptions: [
      {
        id: "buffet-ejecutivo-mosaico",
        name: "Combo Almuerzo Buffet Completo",
        description: "1 Proteína a elegir + 3 contornos del día + sopa/hervido + bebida natural refrescante.",
        priceUSD: 7.5,
        unit: "por persona",
        badge: "Más Vendido",
        features: ["Servicio express en menos de 10 min", "Sopa del día incluida", "Bebida natural fría", "Comedor climatizado"],
      },
      {
        id: "mesa-karaoke-night",
        name: "Mesa VIP Noche de Karaoke (4 a 6 Pax)",
        description: "Mesa reservada para la noche de karaoke con balde de cervezas frías + bandeja de tequeños.",
        priceUSD: 25,
        unit: "por grupo",
        badge: "Jue-Sáb",
        features: ["Balde de 8 cervezas Polar", "Ración de 12 tequeños", "Turnos prioritarios en tarima", "Sin límite de tiempo"],
      },
      {
        id: "costillas-barril-combo",
        name: "Combo Parrilla / Costillas al Barril (2 Pax)",
        description: "Medio costillar de cerdo ahumado al barril con salsa BBQ de la casa, tostones y queso frito.",
        priceUSD: 18,
        unit: "para 2 personas",
        features: ["Costillitas ahumadas 500g", "Tostones con queso costeño", "Ensalada rallada criolla", "Salsa tártara"],
      },
    ],
    categories: [
      { id: "buffet-dia", name: "Buffet & Criollo del Día 🍲", icon: "🍲" },
      { id: "barril-parrilla", name: "Costillas al Barril & Parrilla 🍖", icon: "🍖" },
      { id: "picadas-karaoke", name: "Picaderas & Bebidas 🍻", icon: "🍻" },
    ],
    menuItems: [
      {
        id: "asado-negro-mosaico",
        name: "Asado Negro Zuliano Tradicional",
        category: "buffet-dia",
        description: "Lomo tierno en reducción de papelón, vino tinto y especias criollas, acompañado de arroz y plátano horneado.",
        priceUSD: 8,
        badge: "Especialidad",
        popular: true,
      },
      {
        id: "costillas-mosaico-barril",
        name: "Costillitas de Cerdo al Barril BBQ",
        category: "barril-parrilla",
        description: "Ahumadas lentamente a leña con glaseado agridulce BBQ, servidas con tostones dorados y salsa tártara.",
        priceUSD: 12,
        popular: true,
      },
      {
        id: "balde-cerveza-mosaico",
        name: "Balde Polar Polar Pilsen / Light (10 Und)",
        category: "picadas-karaoke",
        description: "Diez botellas bien frías en frapera con hielo para disfrutar durante el karaoke.",
        priceUSD: 14,
        popular: true,
      },
      {
        id: "tequenos-mosaico-jumbo",
        name: "Ración de Tequeños Artesanales (10 Und)",
        category: "picadas-karaoke",
        description: "Rellenos de abundante queso semiduro fundido con salsa tártara de la casa.",
        priceUSD: 6,
      },
    ],
    managerKpis: {
      activeReservations: 22,
      capacityPercentage: 90,
      todaySalesUSD: 680,
      avgTicketUSD: 16,
    },
    sampleBookings: [
      { id: "MOS-301", clientName: "José Ramón Morales", details: "Mesa VIP Karaoke (6 pax)", time: "08:00 PM", status: "en_mesa", pax: 6, totalUSD: 42 },
      { id: "MOS-302", clientName: "Clínica Falcón (Empresa)", details: "Almuerzos Buffet Delivery (10 pax)", time: "12:15 PM", status: "confirmada", pax: 10, totalUSD: 75 },
    ],
  },

  // 13. INCONTRO TRATTORIA
  {
    slug: "incontrotrattoria",
    batch: "dia2",
    archetype: "gourmet-booking",
    name: "Incontro Trattoria",
    handle: "incontrotrattoria",
    category: "Trattoria Italiana · Pastas Artesanales · Cava de Vinos",
    badgeText: "🍝 #AutenticaCucinaItaliana",
    tagline: "Pastas frescas hechas a mano y maridaje de vinos en Torre Tendencia",
    heroTitle: "El auténtico encuentro con la cocina",
    heroHighlight: "italiana de autor",
    heroSubtitle:
      "Risottos cremosos, pizza Abruzzo con miel de trufa, pastas al dente hechas cada mañana y sommelier digital para una velada perfecta.",
    logo: "/marcas/incontrotrattoria.jpg",
    coverImage: "/marcas/incontrotrattoria-cover.jpg",
    palette: {
      primary: "#B91C1C",
      primaryHover: "#991B1B",
      secondary: "#15803D",
      accent: "#FDE047",
      darkBg: "#120909",
      cardBg: "rgba(30, 15, 15, 0.85)",
      textLight: "#FFF1F2",
      textMuted: "#FECDD3",
      border: "rgba(185, 28, 28, 0.25)",
      glow: "rgba(185, 28, 28, 0.25)",
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans",
    },
    introText:
      "Incontro Trattoria es el templo de la gastronomía italiana contemporánea en la Planta Baja de Torre Tendencia. Miembro de CAVENIT, ofrece pastas caseras amasadas al día, carpaccios gourmet y una selección de vinos europeos con atención ejecutiva de alto nivel.",
    introStats: [
      { label: "Pasta Fresca", value: "100%", detail: "Amasada a mano cada día" },
      { label: "Ubicación", value: "PB Torre", detail: "Torre Tendencia, El Milagro" },
      { label: "Cava de Vinos", value: "35+", detail: "Etiquetas italianas e internacionales" },
    ],
    trustBadges: ["Convenio CAVENIT Seccional Zulia", "Sommelier AI de Maridaje", "Estacionamiento Torre Tendencia"],
    whatsappPitchCopy:
      "Ciao equipo de Incontro Trattoria! 🍝 Diseñamos una WebApp exclusiva para su restaurante en Torre Tendencia: incluye Sommelier Digital con sugerencias de maridaje de vino para cada pasta y pizza, sistema de reservas con plano de mesas y Club VIP para ejecutivos de la torre.\n\nPueden explorar la demo y ver su Reel animado aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/incontrotrattoria",
    address: "PB Torre Tendencia, Av. 2 El Milagro, Sector Gonzaga, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Torre+Tendencia+Maracaibo",
    hours: "Martes a Sábado: 12:00 PM - 11:00 PM · Domingos: 12:00 PM - 9:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/incontrotrattoria/",
    bookingType: "italian-sommelier",
    bookingTitle: "Reserva de Mesas & Menú Maridaje",
    bookingSubtitle: "Reserva tu mesa en salón o terraza y disfruta de una experiencia gastronómica italiana.",
    bookingOptions: [
      {
        id: "mesa-romantica-incontro",
        name: "Cena Romántica / Maridaje (2 Pax)",
        description: "Mesa con velas, selección de 2 platos de pasta artesanal + 2 copas de vino italiano Chianti.",
        priceUSD: 40,
        unit: "para 2 personas",
        badge: "Recomendado",
        features: ["Mesa reservada con mantel de lino", "2 Platos de pasta a elegir", "2 Copas de vino italiano", "Tiramisú de cortesía"],
      },
      {
        id: "almuerzo-ejecutivo-tendencia",
        name: "Almuerzo de Negocios Torre Tendencia (2 a 4 Pax)",
        description: "Servicio ágil de antipasti al centro + plato principal por persona + café espresso italiano.",
        priceUSD: 18,
        unit: "por persona",
        badge: "Corporativo",
        features: ["Servicio garantizado en 25 min", "Antipasto mixto al centro", "Café espresso Illy", "Factura fiscal"],
      },
      {
        id: "degustacion-chef-incontro",
        name: "Menú Degustación 4 Tiempos Incontro",
        description: "Carpaccio di Manzo + Risotto Funghi + Scaloppine al Marsala + Cannoli siciliano.",
        priceUSD: 32,
        unit: "por persona",
        features: ["4 Tiempos de autor", "Maridaje sugerido por tiempo", "Atención del chef en mesa"],
      },
    ],
    categories: [
      { id: "pastas-artesanales", name: "Pastas Frescas & Risottos 🍝", icon: "🍝" },
      { id: "pizzas-antipasti", name: "Pizzas al Horno & Carpaccios 🍕", icon: "🍕" },
      { id: "vinos-dolci", name: "Cava de Vinos & Dolci 🍷", icon: "🍷" },
    ],
    menuItems: [
      {
        id: "pizza-abruzzo-incontro",
        name: "Pizza Abruzzo con Miel de Trufa (Firma)",
        category: "pizzas-antipasti",
        description: "Base blanca con mozzarella fior di latte, queso gorgonzola cremoso, prosciutto crudo, nueces y miel de trufa.",
        priceUSD: 15,
        badge: "Plato Insignia",
        popular: true,
      },
      {
        id: "risotto-funghi-incontro",
        name: "Risotto de Champiñones & Tomates Secos",
        category: "pastas-artesanales",
        description: "Arroz arborio mantecado con mantequilla de hierbas, mix de setas silvestres, tomates secos y Parmigiano Reggiano.",
        priceUSD: 14,
        popular: true,
      },
      {
        id: "fettuccine-frutti-mare",
        name: "Fettuccine ai Frutti di Mare",
        category: "pastas-artesanales",
        description: "Pasta fresca al huevo salteada con camarones jumbo, calamares, mejillones al vino blanco y pomodoro san marzano.",
        priceUSD: 17,
        popular: true,
      },
      {
        id: "tiramisu-incontro",
        name: "Tiramisú Tradizionale al Mascarpone",
        category: "vinos-dolci",
        description: "Bizcochos savoiardi bañados en café espresso y licor de café con crema aterciopelada de queso mascarpone y cacao amargo.",
        priceUSD: 6,
      },
    ],
    managerKpis: {
      activeReservations: 14,
      capacityPercentage: 76,
      todaySalesUSD: 1120,
      avgTicketUSD: 44,
    },
    sampleBookings: [
      { id: "INC-401", clientName: "Ing. Giancarlo Di Martino", details: "Almuerzo Negocios (4 pax)", time: "01:00 PM", status: "en_mesa", pax: 4, totalUSD: 72 },
      { id: "INC-402", clientName: "Dra. Sofía Colmenares", details: "Cena Romántica Maridaje (2 pax)", time: "08:00 PM", status: "confirmada", pax: 2, totalUSD: 40 },
    ],
  },

  // 14. PINZULIA BOWLING
  {
    slug: "pinzulia",
    batch: "dia2",
    archetype: "vip-access",
    name: "PinZulia Bowling",
    handle: "pinzulia",
    category: "Bowling Boutique · Gastropub · Ocio Nocturno",
    badgeText: "🎳 #LaLeyendaRegreso",
    tagline: "14 pistas de bowling computarizadas, gastropub y fiesta nocturna",
    heroTitle: "La leyenda del bowling de Maracaibo",
    heroHighlight: "renacida con alta tecnología",
    heroSubtitle:
      "Reserva tu pista en tiempo real, pide comida directo a tu carril con QR y disfruta de noches de Glow Bowling con DJ en vivo.",
    logo: "/marcas/pinzulia.jpg",
    coverImage: "/marcas/pinzulia-cover.jpg",
    palette: {
      primary: "#0284C7",
      primaryHover: "#0369A1",
      secondary: "#EF4444",
      accent: "#38BDF8",
      darkBg: "#070F1E",
      cardBg: "rgba(11, 25, 44, 0.85)",
      textLight: "#F0F9FF",
      textMuted: "#7DD3FC",
      border: "rgba(2, 132, 199, 0.25)",
      glow: "rgba(2, 132, 199, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans",
    },
    introText:
      "Fundado en 1963 y totalmente reconstruido en 2026, Pin Zulia es el ícono del bowling marabino en el C.C. Internacional de 5 de Julio. Con 14 pistas de última generación, pantallas aéreas LED, street food americana y cócteles de autor.",
    introStats: [
      { label: "Pistas Profesionales", value: "14", detail: "Retorno automático y pantallas LED" },
      { label: "Precio Pista/Hora", value: "$25", detail: "Hasta 6 jugadores por pista" },
      { label: "Horario Nocturno", value: "3:00 AM", detail: "Viernes a Domingo con DJ" },
    ],
    trustBadges: ["Reserva de Pistas en Tiempo Real", "Comanda Directa al Carril con QR", "Calzado Desinfectado Incluido"],
    whatsappPitchCopy:
      "Hola equipo de PinZulia! 🎳 ¡Felicitaciones por la reapertura de esta leyenda! Para evitar colas de 2 horas los fines de semana y acelerar los pedidos de comida a las pistas, desarrollamos esta WebApp con reservas en tiempo real por pista, comanda QR directa a carril y split bill automático.\n\nPrueben la demo interactiva y vean su Reel promocional aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/pinzulia",
    address: "C.C. Internacional, Calle 77 (Av. 5 de Julio) esq. con Av. 13, frente al SENIAT, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=CC+Internacional+Maracaibo+5+de+Julio",
    hours: "Lunes a Jueves: 4:00 PM - 11:00 PM · Viernes a Domingo: 1:00 PM - 3:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/pinzulia/",
    bookingType: "pinzulia-lanes",
    bookingTitle: "Reserva de Pistas de Bowling & Paquetes",
    bookingSubtitle: "Elige tu horario y asegura tu pista sin hacer colas los fines de semana.",
    bookingOptions: [
      {
        id: "pista-1-hora-pinzulia",
        name: "1 Hora de Bowling (Hasta 6 Jugadores)",
        description: "Pista computarizada con conteo digital en pantallas LED + calzado reglamentario desinfectado.",
        priceUSD: 25,
        unit: "por hora de juego",
        badge: "Más Popular",
        features: ["Hasta 6 jugadores incluidos", "Calzado profesional para todos", "Servicio de comida a la pista", "Pantallas con estadísticas"],
      },
      {
        id: "combo-strike-pinzulia",
        name: "Combo Strike Night (2 Horas + Comida)",
        description: "2 Horas continuas de juego + Balde de 6 cervezas o refrescos + 2 Hamburguesas Smash con papas.",
        priceUSD: 65,
        unit: "por grupo",
        badge: "Mejor Valor",
        features: ["2 Horas de pista", "Balde de 6 bebidas frías", "2 Smash burgers + papas", "Glow bowling con DJ"],
      },
      {
        id: "cumpleanos-bowling-pinzulia",
        name: "Paquete Cumpleaños / Corporativo (2 Pistas - 12 Pax)",
        description: "2 Pistas contiguas por 2 horas + picadas gigantes para compartir + anfitrión dedicado.",
        priceUSD: 130,
        unit: "paquete 12 pax",
        features: ["2 Pistas por 2 horas", "Bandeja XXL de tequeños y alitas", "Calzado para 12 personas", "Mención del DJ en cabina"],
      },
    ],
    categories: [
      { id: "street-food-bowling", name: "Burgers & Pinsas Romanas 🍕", icon: "🍕" },
      { id: "snacks-pistas", name: "Alitas, Tequeños & Snacks 🍗", icon: "🍗" },
      { id: "cocteles-cervezas", name: "Bar de Pista & Cócteles 🍺", icon: "🍺" },
    ],
    menuItems: [
      {
        id: "pinsa-romana-pinzulia",
        name: "Pinsa Romana Cuatro Quesos & Pepperoni",
        category: "street-food-bowling",
        description: "Masa ligera de fermentación lenta (72h), salsa pomodoro, mozzarella, provolone, gorgonzola y pepperoni crispy.",
        priceUSD: 11,
        badge: "Especialidad",
        popular: true,
      },
      {
        id: "strike-burger-pinzulia",
        name: "Strike Smash Burger Doble",
        category: "street-food-bowling",
        description: "Doble carne prensada a fuego alto, queso cheddar derretido, tocineta ahumada y salsa tártara PinZulia.",
        priceUSD: 9.5,
        popular: true,
      },
      {
        id: "alitas-buffalo-pinzulia",
        name: "Alitas Buffalo Crispy (10 Und)",
        category: "snacks-pistas",
        description: "Alitas bañadas en salsa búfalo picante con bastones de apio y aderezo blue cheese.",
        priceUSD: 8.5,
      },
      {
        id: "coctel-glow-strike",
        name: "Cóctel Glow Strike Neón",
        category: "cocteles-cervezas",
        description: "Vodka, blue curaçao, jugo de piña, tónica y borde con azúcar fluorescente que brilla en luces UV.",
        priceUSD: 6.5,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 19,
      capacityPercentage: 94,
      todaySalesUSD: 1450,
      avgTicketUSD: 36,
    },
    sampleBookings: [
      { id: "PIN-501", clientName: "Mauricio Urdaneta", details: "Pista 07 (1 Hora - 5 pax)", time: "07:00 PM", status: "en_mesa", pax: 5, totalUSD: 25 },
      { id: "PIN-502", clientName: "Banco Occidental (Grupo)", details: "Combo Strike Night (2 Pistas)", time: "08:30 PM", status: "confirmada", pax: 10, totalUSD: 130 },
    ],
  },

  // 15. ALFRED'S COFFEE BAR
  {
    slug: "alfredscoffeebar",
    batch: "dia2",
    archetype: "direct-delivery",
    name: "Alfred's Coffee Bar",
    handle: "alfredscoffeebar",
    category: "Cafetería de Especialidad · Bakehouse · Menú Ejecutivo",
    badgeText: "☕ #EspecialidadYBakehouse",
    tagline: "Café de especialidad, donas gourmet y almuerzos ejecutivos de 3 tiempos",
    heroTitle: "El latte de pistacho insignia y el mejor",
    heroHighlight: "bakehouse artesanal de 5 de Julio",
    heroSubtitle:
      "Pide to-go sin filas, consulta el stock en tiempo real de nuestra vitrina de donas gourmet y reserva tu almuerzo ejecutivo de 3 tiempos.",
    logo: "/marcas/alfredscoffeebar.jpg",
    coverImage: "/marcas/alfredscoffeebar-cover.jpg",
    palette: {
      primary: "#92400E",
      primaryHover: "#78350F",
      secondary: "#D97706",
      accent: "#FBBF24",
      darkBg: "#140C08",
      cardBg: "rgba(35, 20, 12, 0.85)",
      textLight: "#FFFBEB",
      textMuted: "#FDE68A",
      border: "rgba(217, 119, 6, 0.25)",
      glow: "rgba(217, 119, 6, 0.22)",
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans",
    },
    introText:
      "Alfred's Coffee Bar fusiona la cultura del café de especialidad con un bakehouse artesanal de donas rellenas, cinnamon rolls gigantes y un menú ejecutivo de 3 tiempos en la esquina más transitada de 5 de Julio con Bella Vista y sede express en Sambil.",
    introStats: [
      { label: "Menú Ejecutivo", value: "$12", detail: "Entrada + Plato + Postre + Café" },
      { label: "Sedes Activas", value: "2", detail: "5 de Julio y Sambil Maracaibo" },
      { label: "Latte Insignia", value: "Pistacho", detail: "Crema artesanal 100% natural" },
    ],
    trustBadges: ["Vitrina con Stock en Vivo", "Coffee Pass Digital para Oficinas", "Retiro To-Go Express"],
    whatsappPitchCopy:
      "Hola equipo de Alfred's Coffee Bar! ☕ Diseñamos una WebApp pensada para sus 2 sedes: muestra el stock en tiempo real de su vitrina de donas, permite a los ejecutivos de 5 de Julio pedir almuerzos to-go sin hacer colas e integra el Coffee Pass digital en Apple/Google Wallet.\n\nVean la demo y el video comercial de 15 segundos aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/alfredscoffeebar",
    address: "Av. 5 de Julio con Av. Bella Vista (Sede Principal) · C.C. Sambil Local F-83, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=5+de+Julio+Bella+Vista+Maracaibo",
    hours: "Lunes a Sábado: 7:30 AM - 8:30 PM · Domingos: 8:00 AM - 7:30 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/alfredscoffeebar/",
    bookingType: "coffee-bakehouse",
    bookingTitle: "Almuerzos Ejecutivos & Cajas de Donas To-Go",
    bookingSubtitle: "Reserva tu almuerzo de 3 tiempos o encarga tu caja surtida para retirar sin colas.",
    bookingOptions: [
      {
        id: "menu-ejecutivo-alfreds",
        name: "Menú Ejecutivo 3 Tiempos + Espresso",
        description: "Entrada (crema del día / croquetas) + Plato fuerte (pasta artesanal / pollo grill) + Postre + Café espresso.",
        priceUSD: 12,
        unit: "por persona",
        badge: "L-V 11AM-4PM",
        features: ["Servicio en menos de 15 min", "Entrada gourmet + plato + postre", "Café espresso de especialidad", "Factura digital"],
      },
      {
        id: "caja-donas-gourmet-6",
        name: "Caja Gourmet de 6 Donas & Rolls",
        description: "6 Unidades a elegir: Donas rellenas de Nutella, crema de pistacho, Boston cream y cinnamon roll gigante.",
        priceUSD: 14,
        unit: "por caja",
        badge: "Para Llevar",
        features: ["Empaque rígido para regalo", "Selección personalizada en vitrina", "Retiro express sin fila", "Recién horneadas"],
      },
      {
        id: "coffee-meeting-table",
        name: "Mesa Reservada para Reunión / Trabajo (2 a 4 Pax)",
        description: "Mesa con tomas eléctricas, Wi-Fi de alta velocidad y 2 bebidas de especialidad a elegir.",
        priceUSD: 10,
        unit: "consumo mínimo",
        features: ["Wi-Fi de fibra óptica", "Conectores para laptops", "Ambiente climatizado", "Café servido a la mesa"],
      },
    ],
    categories: [
      { id: "cafe-especialidad", name: "Café de Especialidad & Lattes ☕", icon: "☕" },
      { id: "donas-bakehouse", name: "Donas Gourmet & Bakehouse 🍩", icon: "🍩" },
      { id: "almuerzos-brunch", name: "Almuerzos & Sándwiches 🥪", icon: "🥪" },
    ],
    menuItems: [
      {
        id: "pistachio-latte-alfreds",
        name: "Pistachio Cream Latte (Insignia)",
        category: "cafe-especialidad",
        description: "Doble shot de espresso de especialidad, leche vaporizada sedosa y crema artesanal de pistacho tostado 100% natural.",
        priceUSD: 5.5,
        badge: "Top Ventas",
        popular: true,
      },
      {
        id: "dona-pistacho-alfreds",
        name: "Dona Gourmet Rellena de Crema de Pistacho",
        category: "donas-bakehouse",
        description: "Masa brioche suave y esponjosa, abundante relleno de crema de pistacho y topping de pistacho picado.",
        priceUSD: 2.8,
        popular: true,
      },
      {
        id: "cinnamon-roll-alfreds",
        name: "Cinnamon Roll Gigante con Cream Cheese",
        category: "donas-bakehouse",
        description: "Recién horneado con canela de Ceilán, azúcar morena y abundante glaseado tibio de queso crema.",
        priceUSD: 3.5,
      },
      {
        id: "pasta-carbonara-alfreds",
        name: "Fettuccine Carbonara Clásica (Menú Ejecutivo)",
        category: "almuerzos-brunch",
        description: "Pasta artesanal con tocineta crujiente, yema de huevo pasteurizada, pimienta negra recién molida y parmesano.",
        priceUSD: 8.5,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 18,
      capacityPercentage: 86,
      todaySalesUSD: 820,
      avgTicketUSD: 14,
    },
    sampleBookings: [
      { id: "ALF-601", clientName: "Lic. Andrea Carrizo", details: "Menú Ejecutivo (2 pax)", time: "12:30 PM", status: "en_mesa", pax: 2, totalUSD: 24 },
      { id: "ALF-602", clientName: "Carlos Villalobos", details: "Caja 6 Donas Gourmet To-Go", time: "04:15 PM", status: "confirmada", pax: 1, totalUSD: 14 },
    ],
  },

  // 16. LAKE BISTRO
  {
    slug: "lakebistro",
    batch: "dia2",
    archetype: "gourmet-booking",
    name: "Lake Bistro",
    handle: "lake.bistro",
    category: "Waterfront Dining · Seafood & Prime Steaks · Sunset Lounge",
    badgeText: "🌊 #AtardeceresFrenteAlLago",
    tagline: "Cevichería de autor, cortes a la leña y coctelería frente al Puente",
    heroTitle: "La experiencia gastronómica con la mejor vista",
    heroHighlight: "al atardecer del Lago",
    heroSubtitle:
      "Reserva tu mesa en primera fila para el Sunset, degusta ceviches al ají dulce, cortes Tomahawk a la brasa y coctelería ahumada.",
    logo: "/marcas/lakebistro.jpg",
    coverImage: "/marcas/lakebistro-cover.jpg",
    palette: {
      primary: "#0D9488",
      primaryHover: "#0F766E",
      secondary: "#0284C7",
      accent: "#2DD4BF",
      darkBg: "#061316",
      cardBg: "rgba(10, 30, 35, 0.85)",
      textLight: "#F0FDFA",
      textMuted: "#99F6E4",
      border: "rgba(13, 148, 136, 0.25)",
      glow: "rgba(13, 148, 136, 0.25)",
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans",
    },
    introText:
      "Lake Bistro es el destino culinario por excelencia en la ribera lacustre de Maracaibo. Combina una barra de cevichería fresca del Caribe con cortes de carne Angus certificados a la leña y coctelería de autor para contemplar la caída del sol sobre el Puente.",
    introStats: [
      { label: "Vista al Puente", value: "Frontal", detail: "Mesas en primera fila de muelle" },
      { label: "Ticket Promedio", value: "$45", detail: "Gastronomía Mar y Tierra" },
      { label: "Sunset Sessions", value: "4-7 PM", detail: "DJ y coctelería de autor" },
    ],
    trustBadges: ["Mesa Frontal Sunset Garantizada", "Cava de Vinos Internacional", "Muelle para Embarcaciones"],
    whatsappPitchCopy:
      "Hola equipo de Lake Bistro! 🌊 Creamos una WebApp exclusiva para su restaurante frente al lago: incluye el Selector 3D de Mesas con vista al atardecer para eliminar no-shows, menú interactivo con maridajes y cotizador de eventos privados y bodas boutique.\n\nPueden probar la demo en vivo y ver el Reel cinematográfico aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/lakebistro",
    address: "Corredor Costero El Milagro / San Francisco frente al Lago, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Lago+de+Maracaibo+El+Milagro",
    hours: "Miércoles a Viernes: 4:00 PM - 1:00 AM · Sábados: 12:00 PM - 2:00 AM · Domingos: 12:00 PM - 11:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/lake.bistro/",
    bookingType: "waterfront-sunset",
    bookingTitle: "Reservas de Mesas Sunset & Cenas Maridaje",
    bookingSubtitle: "Asegura tu ubicación en primera fila frente al lago con confirmación digital.",
    bookingOptions: [
      {
        id: "mesa-front-sunset-lake",
        name: "Mesa Primera Fila Sunset View (2 a 4 Pax)",
        description: "Ubicación garantizada en la baranda del muelle durante la franja de oro (5:00 PM - 7:30 PM).",
        priceUSD: 20,
        unit: "depósito consumible",
        badge: "Golden Hour",
        features: ["Vista 180° frontal al Lago y Puente", "100% abonable a la cuenta de consumo", "Sin riesgo de pérdida de mesa", "Atención preferencial"],
      },
      {
        id: "experiencia-mar-tierra-2pax",
        name: "Experiencia Mar y Tierra Lake Bistro (2 Pax)",
        description: "Ceviche tradicional al ají dulce + Corte Ribeye Angus a la leña (500g) + 2 Cócteles Lake Sunset Spritz.",
        priceUSD: 58,
        unit: "para 2 personas",
        badge: "Recomendado",
        features: ["Ceviche fresco de pesca blanca", "Ribeye Angus 500g a la leña", "2 Cócteles de autor incluidos", "Mesa con vista al atardecer"],
      },
      {
        id: "mesa-corporativa-lake",
        name: "Mesa Lounge Ejecutiva / Cumpleaños (6 a 10 Pax)",
        description: "Zona lounge en terraza con tablas mixtas de mariscos y cortes para compartir + botella de espumante.",
        priceUSD: 110,
        unit: "consumo mínimo",
        features: ["Zona lounge reservada", "Tabla XXL Mar y Tierra", "Botella de espumante brut", "Factura corporativa"],
      },
    ],
    categories: [
      { id: "cevicheria-mar", name: "Cevichería & Fondos de Mar 🍤", icon: "🍤" },
      { id: "cortes-parrilla", name: "Cortes Angus a la Leña 🥩", icon: "🥩" },
      { id: "sunset-cocktails", name: "Coctelería Sunset & Vinos 🍸", icon: "🍸" },
    ],
    menuItems: [
      {
        id: "ceviche-aji-dulce-lake",
        name: "Ceviche Tradicional al Ají Dulce Zuliano",
        category: "cevicheria-mar",
        description: "Pesca blanca del día marinada en leche de tigre con toques de ají dulce, cebolla morada crujiente y tostones finos.",
        priceUSD: 14,
        badge: "Firma Lake",
        popular: true,
      },
      {
        id: "pulpo-brazas-lake",
        name: "Pulpo Braseado al Carbón",
        category: "cevicheria-mar",
        description: "Tentáculos de pulpo en salsa anticuchera sobre papas rústicas al romero y emulsión de pimientos asados.",
        priceUSD: 19,
        popular: true,
      },
      {
        id: "ribeye-angus-lake",
        name: "Ribeye Angus Certified (500g a la Leña)",
        category: "cortes-parrilla",
        description: "Sellado al grill con astillas de roble, mantequilla de hierbas y sal marina ahumada, con papas trufadas.",
        priceUSD: 28,
        popular: true,
      },
      {
        id: "sunset-spritz-lake",
        name: "Lake Sunset Spritz (Cocktail Insignia)",
        category: "sunset-cocktails",
        description: "Aperol, cordial de maracuyá fresca, espumante prosecco, soda y romero flameado.",
        priceUSD: 8.5,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 12,
      capacityPercentage: 74,
      todaySalesUSD: 1380,
      avgTicketUSD: 52,
    },
    sampleBookings: [
      { id: "LAK-701", clientName: "Dr. Roberto Bracho", details: "Mesa Frontal Sunset View (2 pax)", time: "05:30 PM", status: "en_mesa", pax: 2, totalUSD: 58 },
      { id: "LAK-702", clientName: "Ing. Beatriz Semprún", details: "Cena Mar y Tierra (4 pax)", time: "08:00 PM", status: "confirmada", pax: 4, totalUSD: 125 },
    ],
  },

  // 17. BRO GASTROBAR
  {
    slug: "bromcbo",
    batch: "dia2",
    archetype: "table-ordering",
    name: "BRO GastroBar",
    handle: "bromcbo",
    category: "Smash Burgers · Gastrobar Urbano · Eventos & Raves",
    badgeText: "🍔 #SmashAndBeers",
    tagline: "Smash burgers con costra crocante, cervezas bajo cero y cultura urbana",
    heroTitle: "El punto de encuentro urbano de Cecilio Acosta para",
    heroHighlight: "smash burgers y buena música",
    heroSubtitle:
      "Pide directo a la mesa con QR, compra entradas para Asian Raves y batallas de rap, y disfruta de cervezas a temperatura glacial.",
    logo: "/marcas/bromcbo.jpg",
    coverImage: "/marcas/bromcbo-cover.jpg",
    palette: {
      primary: "#EA580C",
      primaryHover: "#C2410C",
      secondary: "#EAB308",
      accent: "#F97316",
      darkBg: "#120904",
      cardBg: "rgba(35, 18, 10, 0.85)",
      textLight: "#FFF7ED",
      textMuted: "#FDBA74",
      border: "rgba(234, 88, 12, 0.25)",
      glow: "rgba(234, 88, 12, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans",
    },
    introText:
      "BRO GastroBar es el epicentro de la movida juvenil y alternativa en plena Av. Cecilio Acosta. Reconocido por sus smash burgers en pan brioche, alitas BBQ, cervezas ultra frías y eventos culturales como Asian Raves y competencias de freestyle.",
    introStats: [
      { label: "Reseñas Google", value: "4.4★", detail: "Más de 360 opiniones verificadas" },
      { label: "Promo Grilled", value: "$8", detail: "Smash burger + papas + bebida" },
      { label: "Cultura Urbana", value: "100%", detail: "Raves, freestyle y música en vivo" },
    ],
    trustBadges: ["Auto-Pedido con QR en Mesa", "Tickets QR para Eventos", "Delivery Directo sin Comisiones"],
    whatsappPitchCopy:
      "Hola gente de BRO GastroBar! 🍔 Diseñamos una WebApp para potenciar su local en Cecilio Acosta: permite auto-pedido con QR en mesa para agilizar las noches de conciertos/raves, vende entradas para sus eventos con código QR y fideliza a su comunidad con el Bro Club.\n\nLes comparto la demo interactiva y el Reel animado:\n👉 https://byte-bridge-tau.vercel.app/demos/bromcbo",
    address: "Calle 67 (Av. Cecilio Acosta), entre Av. 4 Bella Vista y Av. 8 Santa Rita, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Cecilio+Acosta+Bella+Vista+Maracaibo",
    hours: "Jueves a Sábado: 5:00 PM - 3:00 AM · Domingos: 1:00 PM - 12:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/bromcbo/",
    bookingType: "smash-event-flow",
    bookingTitle: "Tickets de Eventos & Reservas de Mesas",
    bookingSubtitle: "Compra tus brazaletes para las raves o aparta mesa para tu grupo de amigos.",
    bookingOptions: [
      {
        id: "mesa-smash-bro",
        name: "Reserva de Mesa Grupo (4 a 6 Pax)",
        description: "Mesa en salón o terraza para cena y previas con balde de cerveza Polar bien fría.",
        priceUSD: 15,
        unit: "consumo mínimo",
        badge: "Más Pedido",
        features: ["Mesa reservada sin cola", "Balde de 6 cervezas incluido", "Auto-pedido QR en mesa", "Música DJ en vivo"],
      },
      {
        id: "ticket-asian-rave-bro",
        name: "Ticket QR / Brazalete Asian Rave & Electronic Night",
        description: "Entrada general con pase digital QR para eventos de DJ y fiesta electrónica temática.",
        priceUSD: 10,
        unit: "por persona",
        badge: "Eventos",
        features: ["Acceso sin fila en puerta", "1 Trago de bienvenida", "Código QR en WhatsApp", "Aforo garantizado"],
      },
      {
        id: "combo-bro-squad",
        name: "Combo Bro Squad (4 Smash Burgers + Papas + Balde)",
        description: "4 Smash Burgers clásicas + 2 porciones grandes de papas rústicas + Balde de 8 cervezas.",
        priceUSD: 38,
        unit: "para 4 personas",
        features: ["4 Smash burgers completas", "Papas con queso cheddar fundido", "Balde de 8 cervezas", "Ahorro del 20%"],
      },
    ],
    categories: [
      { id: "smash-burgers-bro", name: "Smash Burgers & Sandwiches 🍔", icon: "🍔" },
      { id: "alitas-munchies", name: "Alitas, Nachos & Papas 🍟", icon: "🍟" },
      { id: "cervezas-tragos", name: "Cervezas Glaciales & Cócteles 🍺", icon: "🍺" },
    ],
    menuItems: [
      {
        id: "bro-smash-classic",
        name: "BRO Smash Classic Doble",
        category: "smash-burgers-bro",
        description: "Doble carne smash crocante, doble queso cheddar americano, tocineta ahumada, pepinillos y salsa secreta BRO en pan brioche.",
        priceUSD: 8.5,
        badge: "Top 1",
        popular: true,
      },
      {
        id: "pulled-pork-bro",
        name: "Sándwich Pulled Pork BBQ",
        category: "smash-burgers-bro",
        description: "Cerdo desmechado cocinado a fuego lento por 8 horas, bañado en salsa BBQ artesanal con ensalada coleslaw.",
        priceUSD: 9,
      },
      {
        id: "nachos-vulcano-bro",
        name: "Nachos Vulcano Especiales",
        category: "alitas-munchies",
        description: "Totopos crujientes con abundante chili con carne, queso fundido, guacamole fresco, pico de gallo y jalapeños.",
        priceUSD: 10,
        popular: true,
      },
      {
        id: "balde-glacial-bro",
        name: "Balde Glacial Polar Pilsen (8 Botellas)",
        category: "cervezas-tragos",
        description: "Ocho botellas vestidas de novia servidas a temperatura bajo cero.",
        priceUSD: 12,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 25,
      capacityPercentage: 92,
      todaySalesUSD: 910,
      avgTicketUSD: 22,
    },
    sampleBookings: [
      { id: "BRO-801", clientName: "Gabriel Rincón", details: "Mesa Grupo Previa (5 pax)", time: "09:00 PM", status: "en_mesa", pax: 5, totalUSD: 38 },
      { id: "BRO-802", clientName: "Mariángel Parra", details: "Ticket QR Asian Rave (3 pax)", time: "11:00 PM", status: "confirmada", pax: 3, totalUSD: 30 },
    ],
  },

  // 18. APART HOTEL PRESIDENTE
  {
    slug: "ahpresidente",
    batch: "dia2",
    archetype: "vip-access",
    name: "Apart Hotel Presidente",
    handle: "ahpresidente",
    category: "Apartotel · Day Pass Piscina · Resto-Bar Meat House",
    badgeText: "🏨 #TuOasisUrbano",
    tagline: "Piscina, suites equipadas, parrilladas Meat House y eventos en Tierra Negra",
    heroTitle: "Hospedaje de lujo, Day Pass con piscina y",
    heroHighlight: "la mejor parrilla de Maracaibo",
    heroSubtitle:
      "Compra tu pase de piscina con QR, pide comida desde tu tumbona, haz check-in digital y hospédate con planta eléctrica 100% continua.",
    logo: "/marcas/ahpresidente.jpg",
    coverImage: "/marcas/ahpresidente-cover.jpg",
    palette: {
      primary: "#CA8A04",
      primaryHover: "#A16207",
      secondary: "#059669",
      accent: "#FACC15",
      darkBg: "#0F0E08",
      cardBg: "rgba(28, 25, 15, 0.85)",
      textLight: "#FEFCE8",
      textMuted: "#FEF08A",
      border: "rgba(202, 138, 4, 0.25)",
      glow: "rgba(202, 138, 4, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans",
    },
    introText:
      "Apart Hotel Presidente es el complejo multi-propósito más vibrante de Tierra Negra con 75.000 seguidores en Instagram. Integra suites familiares equipadas, zona de piscina con música y Day Pass, restaurante Meat House Bar & Grill y respaldo eléctrico continuo 24/7.",
    introStats: [
      { label: "Comunidad Digital", value: "75K+", detail: "Líder de audiencia hotelera" },
      { label: "Day Pass Piscina", value: "$5-10", detail: "Acceso a piscina y áreas sociales" },
      { label: "Respaldo Total", value: "100%", detail: "Planta eléctrica y pozo propio" },
    ],
    trustBadges: ["Day Pass Digital con QR Instantáneo", "Pedidos desde la Tumbona con QR", "Afiliados a Cashea (3 Cuotas)"],
    whatsappPitchCopy:
      "Hola equipo de AH Presidente! 🏨 Vimos su enorme comunidad de más de 74.000 seguidores y desarrollamos la Suite Digital que su operación necesita: venta online de Day Pass con boleto QR (cero colas en recepción), pedidos desde las tumbonas con QR y motor de reservas para suites sin comisiones.\n\nPueden probar la demo y ver su video comercial aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/ahpresidente",
    address: "Av. 11 entre calles 68 y 69, Sector Tierra Negra, Maracaibo, Zulia",
    mapsUrl: "https://maps.google.com/?q=Apart+Hotel+Presidente+Maracaibo",
    hours: "Recepción 24 Horas · Piscina: 10:00 AM - 6:00 PM (Eventos hasta 12:00 AM)",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/ahpresidente/",
    bookingType: "pool-daypass-suites",
    bookingTitle: "Day Pass Piscina & Reservas de Suites",
    bookingSubtitle: "Compra tu pase digital para la piscina o reserva tu apartamento equipado en minutos.",
    bookingOptions: [
      {
        id: "day-pass-piscina-ah",
        name: "Day Pass Piscina (Acceso Adulto)",
        description: "Acceso a piscina climatizada, tumbonas, sombrillas, música ambiental y servicio de comida al agua.",
        priceUSD: 7,
        unit: "por persona",
        badge: "Más Vendido",
        features: ["Uso libre de piscina de 10AM a 6PM", "Tumbona garantizada", "Wi-Fi y planta eléctrica 24/7", "Boleto digital QR"],
      },
      {
        id: "suite-ejecutiva-ah",
        name: "Suite Apartotel Equipada (Noche para 2)",
        description: "Apartamento con kitchenette, nevera, cama King, sala con Smart TV, A/A integral y piscina incluida.",
        priceUSD: 55,
        unit: "por noche",
        badge: "Cashea Disponible",
        features: ["Kitchenette equipada completa", "Planta eléctrica 100% garantizada", "Acceso gratis a piscina", "Estacionamiento privado 24h"],
      },
      {
        id: "pool-party-combo",
        name: "Combo Pool Day Familiar (4 Pax + Parrilla Meat House)",
        description: "4 Entradas de piscina + Parrilla Mixta Meat House para 4 personas + Balde de 8 refrescos o cervezas.",
        priceUSD: 48,
        unit: "para 4 personas",
        badge: "Familiar",
        features: ["4 Pases de piscina", "Parrilla mixta abundante", "Balde de 8 bebidas frías", "Churuata privada reservada"],
      },
    ],
    categories: [
      { id: "parrillas-meat-house", name: "Parrillas & Carnes Meat House 🥩", icon: "🥩" },
      { id: "snacks-piscina", name: "Burgers & Snacks de Piscina 🍔", icon: "🍔" },
      { id: "bebidas-pool-bar", name: "Baldes & Cócteles Pool Bar 🍹", icon: "🍹" },
    ],
    menuItems: [
      {
        id: "parrilla-presidente-meat",
        name: "Parrilla Mixta Presidente Especial",
        category: "parrillas-meat-house",
        description: "Corte de solomo de cuerito a la brasa, pechuga marinada, chorizo parrillero, tostones con queso y guasacaca.",
        priceUSD: 22,
        badge: "Firma Meat House",
        popular: true,
      },
      {
        id: "burger-poolside-ah",
        name: "Presidente Burger con Queso Cheddar",
        category: "snacks-piscina",
        description: "Carne de res a la parrilla, queso cheddar fundido, tocineta crocante y vegetales frescos en pan brioche.",
        priceUSD: 9,
        popular: true,
      },
      {
        id: "balde-cerveza-ah",
        name: "Balde de Piscina (10 Cervezas Polar)",
        category: "bebidas-pool-bar",
        description: "Diez cervezas nacionales bien frías en frapera con hielo directo a tu tumbona.",
        priceUSD: 14,
        popular: true,
      },
      {
        id: "tequenos-ah-pool",
        name: "Tequeños Rellenos de Queso (12 Und)",
        category: "snacks-piscina",
        description: "Dorados y crujientes con abundante queso semiduro fundido y salsa tártara.",
        priceUSD: 6.5,
      },
    ],
    managerKpis: {
      activeReservations: 31,
      capacityPercentage: 89,
      todaySalesUSD: 1650,
      avgTicketUSD: 34,
    },
    sampleBookings: [
      { id: "AHP-901", clientName: "Ing. Marcos Fuenmayor", details: "Suite Equipada 2 Noches", time: "03:00 PM", status: "en_mesa", pax: 2, totalUSD: 110 },
      { id: "AHP-902", clientName: "Patricia Villasmil", details: "Day Pass Piscina (4 pax)", time: "11:00 AM", status: "confirmada", pax: 4, totalUSD: 28 },
    ],
  },

  // 19. MYKONOS CONCEPT
  {
    slug: "mykonosconceptve",
    batch: "dia2",
    archetype: "vip-access",
    name: "Mykonos Concept",
    handle: "mykonosconceptve",
    category: "Beach Club Griego · Sushi Lounge · Hookahs & Nightclub",
    badgeText: "🏖️ #MykonosInMaracaibo",
    tagline: "Atardeceres frente al lago, sushi fusión, shishas y noches de fiesta temática",
    heroTitle: "La vibra del Mediterráneo y las mejores",
    heroHighlight: "noches frente al Lago",
    heroSubtitle:
      "Cotiza tu cumpleaños con botellas y bengalas, reserva lounges VIP frente al lago y accede sin filas con tu pase FastPass QR.",
    logo: "/marcas/mykonosconceptve.jpg",
    coverImage: "/marcas/mykonosconceptve-cover.jpg",
    palette: {
      primary: "#0284C7",
      primaryHover: "#0369A1",
      secondary: "#F8FAFC",
      accent: "#38BDF8",
      darkBg: "#040C16",
      cardBg: "rgba(8, 24, 45, 0.85)",
      textLight: "#F0F9FF",
      textMuted: "#BAE6FD",
      border: "rgba(56, 189, 248, 0.25)",
      glow: "rgba(56, 189, 248, 0.25)",
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans",
    },
    introText:
      "Ubicado en las instalaciones del Tibisay Hotel del Lago, Mykonos Concept recrea la estética de las islas griegas frente al Lago de Maracaibo: sushi lounge de autor, shishas con carbón de coco, shows de bengalas y los mejores DJs de Afro House y música electrónica.",
    introStats: [
      { label: "Ubicación", value: "Tibisay", detail: "Hotel del Lago, Av. El Milagro" },
      { label: "Hookah Lounge", value: "20+", detail: "Sabores frutales y mezclas de autor" },
      { label: "Vibra Sunset", value: "5 PM", detail: "De tardeo relajado a nightclub VIP" },
    ],
    trustBadges: ["FastPass VIP con Validación QR", "Cotizador de Cumpleaños 24/7", "Valet Parking Tibisay"],
    whatsappPitchCopy:
      "Hola gente de Mykonos Concept! 🏛️ Diseñamos una WebApp a la altura de su concepto frente al Lago: incluye Cotizador Automático de Cumpleaños y paquetes VIP (con botellas y shishas), FastPass con código QR para ingreso sin colas y plano interactivo de mesas frente al agua.\n\nLes comparto la demo y el Reel promocional:\n👉 https://byte-bridge-tau.vercel.app/demos/mykonosconceptve",
    address: "Tibisay Hotel del Lago, Av. 2 El Milagro, Sector Bella Vista, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Tibisay+Hotel+del+Lago+Maracaibo",
    hours: "Jueves a Domingo: 5:00 PM - 4:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/mykonosconceptve/",
    bookingType: "mykonos-vip-lounge",
    bookingTitle: "Mesas VIP, Shishas & Paquetes de Cumpleaños",
    bookingSubtitle: "Personaliza tu paquete con botellas, sushi rolls y servicio de bengalas garantizado.",
    bookingOptions: [
      {
        id: "mesa-sunset-mykonos",
        name: "Mesa Sunset Lounge Frente al Lago (2 a 4 Pax)",
        description: "Ubicación en terraza blanca frente al agua + Combo 2 Sushi Rolls de autor + 2 Cócteles Mykonos.",
        priceUSD: 45,
        unit: "para 2 a 4 pax",
        badge: "Sunset 5-9PM",
        features: ["Mesa con vista al atardecer lacustre", "2 Rolls de autor incluidos", "2 Cócteles de autor", "Acceso prioritario"],
      },
      {
        id: "cumpleanos-vip-mykonos",
        name: "Paquete Cumpleaños VIP (Botella + Bengala + Hookah)",
        description: "Mesa VIP reservada + Servicio de botella premium con bengalas + Shisha frutal con carbón de coco.",
        priceUSD: 120,
        unit: "paquete grupo",
        badge: "Más Vendido",
        features: ["Botella Old Parr / Buchanans", "Show de bengalas en la mesa", "Hookah con sabor a elección", "Pases FastPass QR para 8 personas"],
      },
      {
        id: "lounge-dj-exclusive",
        name: "Lounge VIP Zona DJ (8 a 12 Pax)",
        description: "Espacio exclusivo al lado de la cabina de DJ con atención de mesonero y seguridad privada.",
        priceUSD: 250,
        unit: "consumo mínimo",
        features: ["Ubicación contigua a DJ", "Mesonero exclusivo", "2 Botellas premium + mixers", "Acceso VIP sin fila"],
      },
    ],
    categories: [
      { id: "sushi-lounge-mykonos", name: "Sushi Nikkei & Ceviches 🍣", icon: "🍣" },
      { id: "hookahs-premium", name: "Hookahs & Shishas de Autor 💨", icon: "💨" },
      { id: "bottle-service-mykonos", name: "Bottle Service & Cócteles 🍾", icon: "🍾" },
    ],
    menuItems: [
      {
        id: "mykonos-roll-special",
        name: "Mykonos Signature Roll (10 Bocados)",
        category: "sushi-lounge-mykonos",
        description: "Camarón tempura, queso crema, aguacate, coronado con atún fresco flameado, salsa anguila trufada y masago.",
        priceUSD: 15,
        badge: "Top 1",
        popular: true,
      },
      {
        id: "ceviche-grecia-fusion",
        name: "Ceviche Mixto Fusión Griega",
        category: "sushi-lounge-mykonos",
        description: "Corvina y camarón en leche de tigre de maracuyá, cebolla morada, queso feta crujiente y tostones.",
        priceUSD: 14,
        popular: true,
      },
      {
        id: "hookah-love-66-mykonos",
        name: "Hookah Premium Love 66 & Menta Glacial",
        category: "hookahs-premium",
        description: "Mezcla de melón, maracuyá y menta fresca con carbón de coco natural de larga duración.",
        priceUSD: 25,
        popular: true,
      },
      {
        id: "coctel-santorini-blue",
        name: "Cóctel Santorini Blue Lagoon",
        category: "bottle-service-mykonos",
        description: "Ginebra premium, licor de curazao azul, zumo de lima recién exprimido y tónica botánica.",
        priceUSD: 10,
      },
    ],
    managerKpis: {
      activeReservations: 20,
      capacityPercentage: 91,
      todaySalesUSD: 2100,
      avgTicketUSD: 68,
    },
    sampleBookings: [
      { id: "MYK-1001", clientName: "Valeria Benítez", details: "Paquete Cumpleaños VIP (8 pax)", time: "10:30 PM", status: "en_mesa", pax: 8, totalUSD: 145 },
      { id: "MYK-1002", clientName: "Guillermo Pineda", details: "Lounge VIP Zona DJ (10 pax)", time: "11:30 PM", status: "confirmada", pax: 10, totalUSD: 250 },
    ],
  },

  // 20. TERRAZA RESTOBAR
  {
    slug: "terraza_restobar",
    batch: "dia2",
    archetype: "gourmet-booking",
    name: "Terraza Restobar",
    handle: "terraza_restobar",
    category: "Restobar de Terraza · Sushi Fusión · Parrilla & DJ",
    badgeText: "🌅 #TerrazaFrenteAlPuente",
    tagline: "Vista al Puente sobre el Lago, sushi rolls de autor, parrillas y DJ en vivo",
    heroTitle: "La terraza panorámica con la vista más",
    heroHighlight: "espectacular al Puente",
    heroSubtitle:
      "Reserva tu mesa mirador frente a la brisa lacustre, ordena sushi flameado y tablas de carne a la parrilla con coctelería tropical.",
    logo: "/marcas/terraza_restobar.jpg",
    coverImage: "/marcas/terraza_restobar-cover.jpg",
    palette: {
      primary: "#7C3AED",
      primaryHover: "#6D28D9",
      secondary: "#EC4899",
      accent: "#A78BFA",
      darkBg: "#0A0512",
      cardBg: "rgba(22, 12, 38, 0.85)",
      textLight: "#FAF5FF",
      textMuted: "#E9D5FF",
      border: "rgba(124, 58, 237, 0.25)",
      glow: "rgba(124, 58, 237, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans",
    },
    introText:
      "Terraza Restobar es el punto de encuentro por excelencia en la ribera de San Francisco con vista frontal al Puente General Rafael Urdaneta. Ofrece una carta dual de sushi fusión nikkei y cortes de carne al grill, acompañada de coctelería y música con DJ residente.",
    introStats: [
      { label: "Vista al Puente", value: "180°", detail: "Terraza abierta frente al agua" },
      { label: "Carta Dual", value: "Sushi+Parrilla", detail: "Rolls de autor y tablas de carne" },
      { label: "Música en Vivo", value: "Vie-Sáb", detail: "DJs residentes y presentaciones" },
    ],
    trustBadges: ["Mesa Mirador VIP Garantizada", "Menú con Fotos Ultra HD", "Estacionamiento Privado Vigilado"],
    whatsappPitchCopy:
      "Hola equipo de Terraza Restobar! 🌅 Creamos una WebApp pensada para monetizar su vista privilegiada al Puente: incluye reserva de mesas mirador con mapa interactivo de la terraza, menú digital con fotos HD de sushi y parrillas, y CRM para invitaciones a eventos con DJ.\n\nPueden probar la demo y ver su video comercial aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/terraza_restobar",
    address: "Av. San Francisco frente al Lago de Maracaibo, Municipio San Francisco, Zulia",
    mapsUrl: "https://maps.google.com/?q=San+Francisco+Zulia+Puente+sobre+el+Lago",
    hours: "Domingo a Jueves: 11:30 AM - 11:00 PM · Viernes y Sábados: 11:30 AM - 1:30 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/terraza_restobar/",
    bookingType: "terrace-sunset-view",
    bookingTitle: "Reservas de Mesas Mirador & Tablas para Compartir",
    bookingSubtitle: "Aparta tu mesa en primera línea de terraza y disfruta de la vista iluminada al Puente.",
    bookingOptions: [
      {
        id: "mesa-mirador-puente",
        name: "Mesa Mirador Primera Línea (2 a 4 Pax)",
        description: "Ubicación en primera fila de la terraza con vista directa al Puente iluminado.",
        priceUSD: 15,
        unit: "depósito consumible",
        badge: "Vista Puente",
        features: ["Mesa frente a la baranda", "Abonable 100% al consumo", "Foto panorámica de recuerdo", "Atención preferencial"],
      },
      {
        id: "combo-dual-sushi-parrilla",
        name: "Combo Degustación Dual Terraza (2 a 3 Pax)",
        description: "1 Barco de 20 piezas de sushi especial + Tabla de parrilla mixta con tostones y queso fundido.",
        priceUSD: 42,
        unit: "para 2 a 3 personas",
        badge: "Recomendado",
        features: ["Barco 20 bocados sushi", "Tabla mixta solomo + pechuga", "Tostones con salsa tártara", "Mesa mirador incluida"],
      },
      {
        id: "celebracion-terraza-vip",
        name: "Paquete Celebración Cumpleaños (6 a 10 Pax)",
        description: "Mesa imperial en terraza + Botella de ron o whisky nacional + Barco de 30 piezas de sushi.",
        priceUSD: 95,
        unit: "por grupo",
        features: ["Botella + mixers y hielo", "Barco gigante de 30 piezas", "Mención del DJ en cabina", "Reserva garantizada"],
      },
    ],
    categories: [
      { id: "sushi-fusion-terraza", name: "Sushi Rolls & Barcos 🍣", icon: "🍣" },
      { id: "tablas-parrilla-terraza", name: "Tablas de Parrilla & Cortes 🥩", icon: "🥩" },
      { id: "cocteles-sunset-terraza", name: "Coctelería Tropical & Licores 🍹", icon: "🍹" },
    ],
    menuItems: [
      {
        id: "puente-roll-terraza",
        name: "Puente Sobre el Lago Roll (Firma Terraza)",
        category: "sushi-fusion-terraza",
        description: "Roll tempurizado relleno de salmón, queso crema y plátano maduro, bañado en salsa dinamita gratinada.",
        priceUSD: 12.5,
        badge: "Plato Insignia",
        popular: true,
      },
      {
        id: "tabla-parrilla-maracaibo",
        name: "Tabla de Parrilla Mixta al Carbón",
        category: "tablas-parrilla-terraza",
        description: "Solomo de cuerito tierno, pechuga de pollo marinada, chorizo parrillero, tostones con queso blanco rallado y tártara.",
        priceUSD: 24,
        popular: true,
      },
      {
        id: "mojito-pasion-terraza",
        name: "Mojito Pasión Tropical (2x1 en Sunset)",
        category: "cocteles-sunset-terraza",
        description: "Ron añejo, hierbabuena fresca machacada, zumo de parchita natural, jarabe de azúcar y soda.",
        priceUSD: 7,
        popular: true,
      },
      {
        id: "tequenos-gourmet-terraza",
        name: "Tequeños con Salsa Tártara y Guasacaca (10 Und)",
        category: "tablas-parrilla-terraza",
        description: "Queso blanco semiduro fundido con masa crujiente y salsas especiales de la casa.",
        priceUSD: 6,
      },
    ],
    managerKpis: {
      activeReservations: 17,
      capacityPercentage: 85,
      todaySalesUSD: 1190,
      avgTicketUSD: 38,
    },
    sampleBookings: [
      { id: "TER-1101", clientName: "Carlos Almarza", details: "Mesa Mirador Puente (2 pax)", time: "07:30 PM", status: "en_mesa", pax: 2, totalUSD: 42 },
      { id: "TER-1102", clientName: "Natalia Finol", details: "Paquete Cumpleaños VIP (8 pax)", time: "09:30 PM", status: "confirmada", pax: 8, totalUSD: 95 },
    ],
  },
  // ==========================================
  // DÍA 3: 10 NUEVAS DEMOS COMERCIALES MARACAIBO
  // ==========================================

  // 21. RANCHO GALIPÁN
  {
    slug: "ranchogalipan",
    batch: "dia3",
    archetype: "vip-access",
    name: "Rancho Galipán",
    handle: "ranchogalipan",
    category: "Finca Turística · Parrilladas al Carbón · Day Pass & Eventos",
    badgeText: "🌴 #TuEscapadaCampestre",
    tagline: "Día de campo familiar, piscinas, caballos y la mejor parrilla llanera en Maracaibo",
    heroTitle: "Tu escapada campestre familiar sin salir del Zulia con",
    heroHighlight: "Day Pass y piscina",
    heroSubtitle:
      "Compra tu Day Pass con QR, reserva cabañas privadas con parrillada al carbón, paseos a caballo y piscina para toda la familia.",
    logo: "/marcas/ranchogalipan.jpg",
    coverImage: "/marcas/ranchogalipan-cover.jpg",
    palette: {
      primary: "#16A34A",
      primaryHover: "#15803D",
      secondary: "#CA8A04",
      accent: "#4ADE80",
      darkBg: "#05130A",
      cardBg: "rgba(10, 30, 15, 0.85)",
      textLight: "#F0FDF4",
      textMuted: "#86EFAC",
      border: "rgba(22, 163, 74, 0.25)",
      glow: "rgba(22, 163, 74, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans",
    },
    introText:
      "Rancho Galipán es el complejo agroturístico y campestre predilecto de las familias zulianas. Ofrece amplias áreas verdes, piscina con tobogán, paseos guiados a caballo, bohíos privados con parrilla llanera y actividades recreativas en un entorno natural seguro.",
    introStats: [
      { label: "Áreas de Piscina", value: "2", detail: "Adultos y tobogán infantil" },
      { label: "Pase Day Pass", value: "$8", detail: "Acceso a piscina y áreas verdes" },
      { label: "Cabañas Privadas", value: "15", detail: "Con parrillera y bohío exclusivo" },
    ],
    trustBadges: ["Day Pass Digital con Boleto QR", "Parrilla Llanera a la Leña", "Estacionamiento Privado Vigilado"],
    whatsappPitchCopy:
      "Hola equipo de Rancho Galipán! 🌴 Analizamos su concepto agroturístico y campestre y diseñamos esta WebApp a su medida: permite comprar Day Pass con código QR (cero colas en la entrada), cotizar cabañas familiares con parrilladas y reservar eventos corporativos con cálculo automático a tasa oficial.\n\nPueden probar la demo y ver su Reel animado aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/ranchogalipan",
    address: "Carretera Vía La Concepción / Palito Blanco, Maracaibo, Zulia",
    mapsUrl: "https://maps.google.com/?q=Rancho+Galipan+Maracaibo",
    hours: "Viernes a Domingo y Feriados: 9:00 AM - 6:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/ranchogalipan/",
    bookingType: "ranch-daypass",
    bookingTitle: "Pases Day Pass & Reserva de Cabañas",
    bookingSubtitle: "Adquiere tus entradas digitales para la piscina o reserva una cabaña con parrillera para tu grupo.",
    bookingOptions: [
      {
        id: "day-pass-rancho-adulto",
        name: "Day Pass Piscina & Finca (Acceso General)",
        description: "Uso libre de piscinas, áreas verdes, canchas deportivas, zona infantil y estacionamiento.",
        priceUSD: 8,
        unit: "por persona",
        badge: "Más Vendido",
        features: ["Acceso a piscinas de 9AM a 6PM", "Boleto digital QR instantáneo", "Áreas verdes y canchas", "Estacionamiento privado"],
      },
      {
        id: "cabana-familiar-rancho",
        name: "Bohío Familiar VIP (Hasta 10 Personas)",
        description: "Bohío exclusivo con parrillera privada, mesa con sillas, toma eléctrica, enfriador y acceso a piscina.",
        priceUSD: 45,
        unit: "por día",
        badge: "Familiar",
        features: ["Bohío techado privado", "Parrillera y mesón exclusivo", "Acceso a piscina para el grupo", "Atención preferencial"],
      },
      {
        id: "combo-parrilla-rancho",
        name: "Combo Rancho Fest (Parrillada 4 Pax + 4 Pases)",
        description: "4 Day Pass de piscina + Parrilla Llanera completa al carbón (1kg de cortes, yuca, queso de mano y guasacaca).",
        priceUSD: 55,
        unit: "para 4 personas",
        features: ["4 Entradas de piscina", "1kg de carne llanera a la brasa", "Guarniciones criollas completas", "Ahorro del 25%"],
      },
    ],
    categories: [
      { id: "parrilladas-rancho", name: "Parrillas & Carnes a la Brasa 🥩", icon: "🥩" },
      { id: "criollo-snacks", name: "Cachapas & Comida Criolla 🌽", icon: "🌽" },
      { id: "bebidas-campo", name: "Baldes Fríos & Bebidas 🍺", icon: "🍺" },
    ],
    menuItems: [
      {
        id: "parrilla-llanera-rancho",
        name: "Parrilla Llanera Galipán (Especial al Carbón)",
        category: "parrilladas-rancho",
        description: "Punta trasera y solomo al grill, chorizo ahumado, queso de mano fresco, tostones con queso y guasacaca criolla.",
        priceUSD: 24,
        badge: "Firma Rancho",
        popular: true,
      },
      {
        id: "cachapa-queso-mano",
        name: "Cachapa de Maíz Dulce con Queso de Mano y Pernil",
        category: "criollo-snacks",
        description: "Masa de maíz tierno recién molido con mantequilla criolla, abundante queso de mano y pernil horneado.",
        priceUSD: 9.5,
        popular: true,
      },
      {
        id: "balde-cervezas-rancho",
        name: "Balde Campestre (8 Cervezas Polar Pilsen)",
        category: "bebidas-campo",
        description: "Ocho cervezas servidas bajo cero en hielera con hielo para disfrutar junto a la piscina.",
        priceUSD: 11,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 28,
      capacityPercentage: 88,
      todaySalesUSD: 1450,
      avgTicketUSD: 36,
    },
    sampleBookings: [
      { id: "RAN-101", clientName: "José Gregorio Rincón", details: "Bohío Familiar VIP (8 pax)", time: "10:00 AM", status: "en_mesa", pax: 8, totalUSD: 45 },
      { id: "RAN-102", clientName: "Mariana Albornoz", details: "Combo Rancho Fest (4 pax)", time: "11:30 AM", status: "confirmada", pax: 4, totalUSD: 55 },
    ],
  },

  // 22. NOMI SAKE BAR
  {
    slug: "nomi_sakebar",
    batch: "dia3",
    archetype: "table-ordering",
    name: "Nomi Sake Bar",
    handle: "nomi.sakebar",
    category: "Izakaya Japonés · Sake Bar · Street Food Asiático",
    badgeText: "🏮 #TokyoVibesMcbo",
    tagline: "Ramen artesanal, robata al carbón, coctelería con sake y cultura izakaya",
    heroTitle: "La auténtica taberna japonesa en Maracaibo con",
    heroHighlight: "auto-pedido en barra y mesa",
    heroSubtitle:
      "Escanea el QR en tu mesa para pedir brochetas yakitori, ramen con caldo de 18 horas y cócteles de autor sin esperar al mesonero.",
    logo: "/marcas/nomi_sakebar.jpg",
    coverImage: "/marcas/nomi_sakebar-cover.jpg",
    palette: {
      primary: "#E11D48",
      primaryHover: "#BE123C",
      secondary: "#F43F5E",
      accent: "#FDA4AF",
      darkBg: "#0F0407",
      cardBg: "rgba(30, 8, 15, 0.85)",
      textLight: "#FFF1F2",
      textMuted: "#FECDD3",
      border: "rgba(225, 29, 72, 0.25)",
      glow: "rgba(225, 29, 72, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans",
    },
    introText:
      "Nomi Sake Bar trae la energía de los callejones gastronómicos de Tokio al corazón de Maracaibo. Un izakaya contemporáneo con barra robatayaki al carbón japonés binchotan, selección de sakes premium importados y ramen artesanal con fideos frescos elaborados al día.",
    introStats: [
      { label: "Caldo de Ramen", value: "18h", detail: "Cocción lenta tradicional" },
      { label: "Variedad de Sakes", value: "12+", detail: "Junmai, Ginjo y Daiginjo" },
      { label: "Parrilla Robata", value: "Binchotan", detail: "Carbón blanco japonés" },
    ],
    trustBadges: ["Auto-Pedido en Mesa con QR", "Sake Flights de Degustación", "Barra Omakase Abierta"],
    whatsappPitchCopy:
      "Konnichiwa equipo de Nomi Sake Bar! 🏮 Diseñamos una WebApp a la medida de su izakaya: permite auto-pedido con código QR en mesa y barra para acelerar la rotación de comensales, muestra catas de sake con maridaje y convierte automáticamente a tasa oficial.\n\nPrueben la demo interactiva y vean su Reel promocional aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/nomi_sakebar",
    address: "Av. 3Y con Calle 78 (Dr. Portillo), Sector Bella Vista, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Bella+Vista+Dr+Portillo+Maracaibo",
    hours: "Martes a Domingo: 6:00 PM - 1:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/nomi.sakebar/",
    bookingType: "izakaya-order",
    bookingTitle: "Reserva de Mesas & Catas de Sake",
    bookingSubtitle: "Asegura tu lugar en la barra robata o reserva mesa para tu grupo con comanda QR.",
    bookingOptions: [
      {
        id: "mesa-izakaya-nomi",
        name: "Mesa Salón Izakaya (2 a 4 Pax)",
        description: "Ubicación en salón con luces de neón y lámparas de papel japonesas + auto-pedido en mesa.",
        priceUSD: 0,
        unit: "reserva gratuita",
        badge: "Popular",
        features: ["Mesa reservada sin espera", "Auto-pedido QR en mesa", "Selección musical Lo-Fi / Tokyo Beats"],
      },
      {
        id: "degustacion-sake-flight",
        name: "Experiencia Sake Flight & Yakitori (2 Pax)",
        description: "Degustación de 3 sakes premium guiados + 4 brochetas robata mixtas (pork belly, pollo tsukune y hongos shiitake).",
        priceUSD: 36,
        unit: "para 2 personas",
        badge: "Exclusivo",
        features: ["3 Copas de sake por persona", "4 Brochetas robata al carbón", "Explicación de maridaje"],
      },
      {
        id: "nomi-party-lounge",
        name: "Lounge VIP Nomi Squad (6 a 10 Pax)",
        description: "Mesa lounge reservada con 2 botellas de sake o cócteles de autor + combo XXL de dumplings y baos.",
        priceUSD: 95,
        unit: "consumo mínimo",
        features: ["Lounge privado para grupos", "2 Botellas de sake premium", "Platillos izakaya para compartir"],
      },
    ],
    categories: [
      { id: "ramen-bowls", name: "Ramen & Fideos Artesanales 🍜", icon: "🍜" },
      { id: "robata-yakitori", name: "Robatayaki & Baos 🍢", icon: "🍢" },
      { id: "sake-cocktails", name: "Sake & Coctelería de Autor 🍶", icon: "🍶" },
    ],
    menuItems: [
      {
        id: "tonkotsu-ramen-nomi",
        name: "Tonkotsu Black Garlic Ramen",
        category: "ramen-bowls",
        description: "Caldo espeso de cerdo cocido por 18h con aceite de ajo negro quemado, chashu tierno, huevo ajitama marinado y fideos frescos.",
        priceUSD: 14,
        badge: "Top 1",
        popular: true,
      },
      {
        id: "yakitori-pork-belly",
        name: "Kushiyaki de Pork Belly al Miso Rojo (2 Und)",
        category: "robata-yakitori",
        description: "Panceta de cerdo asada al carbón binchotan con glaseado de miso rojo dulce, cebollín y semillas de sésamo.",
        priceUSD: 8,
        popular: true,
      },
      {
        id: "tokyo-mule-cocktail",
        name: "Tokyo Mule con Sake & Jengibre",
        category: "sake-cocktails",
        description: "Sake Junmai, cordial de jengibre fresco, jugo de yuzu japonés y soda servido en jarro de cobre.",
        priceUSD: 9,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 19,
      capacityPercentage: 84,
      todaySalesUSD: 1150,
      avgTicketUSD: 31,
    },
    sampleBookings: [
      { id: "NOM-201", clientName: "Alejandro Morillo", details: "Experiencia Sake Flight (2 pax)", time: "08:00 PM", status: "en_mesa", pax: 2, totalUSD: 36 },
      { id: "NOM-202", clientName: "Claudia Bracho", details: "Mesa Salón Izakaya (4 pax)", time: "09:30 PM", status: "confirmada", pax: 4, totalUSD: 68 },
    ],
  },

  // 23. DA ETTORE RISTORANTE
  {
    slug: "da_ettore",
    batch: "dia3",
    archetype: "gourmet-booking",
    name: "Da Ettore Ristorante",
    handle: "da_ettore",
    category: "Ristorante Italiano Clásico · Tradición & Pastas Frescas",
    badgeText: "🏛️ #TradicionItaliana",
    tagline: "Más de 30 años de auténtica tradición italiana y recetas de nonna en Maracaibo",
    heroTitle: "La mesa italiana por excelencia en Maracaibo con",
    heroHighlight: "recetas clásicas y sommelier",
    heroSubtitle:
      "Pastas frescas al huevo, ossobuco alla milanese, carpaccios de lomo y una cava de vinos clásicos italianos para veladas inolvidables.",
    logo: "/marcas/da_ettore.jpg",
    coverImage: "/marcas/da_ettore-cover.jpg",
    palette: {
      primary: "#991B1B",
      primaryHover: "#7F1D1D",
      secondary: "#15803D",
      accent: "#FDE047",
      darkBg: "#120606",
      cardBg: "rgba(28, 10, 10, 0.85)",
      textLight: "#FFF1F2",
      textMuted: "#FECDD3",
      border: "rgba(153, 27, 27, 0.25)",
      glow: "rgba(153, 27, 27, 0.25)",
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans",
    },
    introText:
      "Da Ettore es un baluarte de la alta gastronomía italiana clásica en Maracaibo. Con décadas de trayectoria, mantiene vivas las técnicas culinarias del norte y sur de Italia: servicio señorial en sala, pastas caseras amasadas diariamente y maridaje con etiquetas consagradas.",
    introStats: [
      { label: "Años de Tradición", value: "30+", detail: "Referente culinario italiano" },
      { label: "Pastas Frescas", value: "100%", detail: "Amasadas a mano cada mañana" },
      { label: "Cava de Vinos", value: "45+", detail: "Selección de uvas italianas" },
    ],
    trustBadges: ["Mesa con Reserva Garantizada", "Servicio Sommelier en Sala", "Valet Parking Privado"],
    whatsappPitchCopy:
      "Buonasera equipo de Da Ettore! 🍝 Reconociendo su impecable trayectoria de más de 30 años en Maracaibo, diseñamos una WebApp a la altura de su prestigio: reserva digital de mesas con plano de sala, carta interactiva de pastas y sommelier digital de vinos italianos.\n\nPueden probar la experiencia digital aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/da_ettore",
    address: "Av. 4 (Bella Vista) con Calle 67 (Cecilio Acosta), Maracaibo, Zulia",
    mapsUrl: "https://maps.google.com/?q=Da+Ettore+Maracaibo",
    hours: "Martes a Domingo: 12:00 PM - 11:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/da_ettore/",
    bookingType: "italian-classic",
    bookingTitle: "Reserva de Mesas & Cenas de Autor",
    bookingSubtitle: "Asegura tu mesa en salón principal o área reservada con atención señorial.",
    bookingOptions: [
      {
        id: "mesa-tradicion-ettore",
        name: "Mesa Salón Principal (2 a 4 Pax)",
        description: "Mesa con mantel de hilo, servicio de panera caliente de la casa con mantequilla de hierbas y carta guiada.",
        priceUSD: 0,
        unit: "reserva gratuita",
        badge: "Más Solicitado",
        features: ["Mesa reservada sin espera", "Panera artesanal y antipasto de cortesía", "Atención de maître en mesa"],
      },
      {
        id: "cena-degustacion-ettore",
        name: "Cena Romántica / Aniversario Da Ettore (2 Pax)",
        description: "Carpaccio di Manzo + 2 Platos de pasta fresca a elegir + 2 Copas de vino Chianti Classico + Tiramisú tradicional.",
        priceUSD: 52,
        unit: "para 2 personas",
        badge: "Recomendado",
        features: ["Menú 4 tiempos para 2", "2 Copas de vino italiano", "Tiramisú de la casa", "Mesa preferencial con velas"],
      },
      {
        id: "salon-familiar-ettore",
        name: "Salón Privado Familiar / Negocios (6 a 12 Pax)",
        description: "Espacio reservado para almuerzos o cenas familiares y corporativas con atención exclusiva.",
        priceUSD: 120,
        unit: "consumo mínimo",
        features: ["Salón climatizado privado", "Mesonero y sommelier dedicado", "Factura fiscal corporativa"],
      },
    ],
    categories: [
      { id: "pastas-frescas-ettore", name: "Pastas Frescas & Risottos 🍝", icon: "🍝" },
      { id: "carni-pesce", name: "Carni, Pesce & Carpaccios 🥩", icon: "🥩" },
      { id: "dolci-vini", name: "Dolci Tradizionali & Vini 🍷", icon: "🍷" },
    ],
    menuItems: [
      {
        id: "fettuccine-ettore",
        name: "Fettuccine ai Funghi Porcini & Tartufo",
        category: "pastas-frescas-ettore",
        description: "Pasta fresca al huevo salteada con setas porcini italianas, crema de trufa negra y queso Parmigiano Reggiano 24 meses.",
        priceUSD: 16,
        badge: "Plato Insignia",
        popular: true,
      },
      {
        id: "ossobuco-milanese",
        name: "Ossobuco alla Milanese con Risotto allo Zafferano",
        category: "carni-pesce",
        description: "Corte de ternera estofado lentamente en vino blanco y hierbas toscanas, servido sobre risotto cremoso al azafrán.",
        priceUSD: 22,
        popular: true,
      },
      {
        id: "carpaccio-manzo-ettore",
        name: "Carpaccio di Manzo Classico",
        category: "carni-pesce",
        description: "Finas láminas de lomo de res con rúcula fresca, lascas de parmesano, alcaparras baby y reducción de balsámico de Módena.",
        priceUSD: 12,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 15,
      capacityPercentage: 78,
      todaySalesUSD: 1320,
      avgTicketUSD: 48,
    },
    sampleBookings: [
      { id: "ETT-301", clientName: "Dr. Luigi Bellini", details: "Cena Romántica (2 pax)", time: "08:00 PM", status: "en_mesa", pax: 2, totalUSD: 52 },
      { id: "ETT-302", clientName: "Ing. Fernando Urdaneta", details: "Mesa Salón Principal (4 pax)", time: "01:30 PM", status: "confirmada", pax: 4, totalUSD: 94 },
    ],
  },

  // 24. O SOLE MIO CUCINA E BAR
  {
    slug: "solemiocucinaebar",
    batch: "dia3",
    archetype: "gourmet-booking",
    name: "O Sole Mio Cucina e Bar",
    handle: "solemiocucinaebar",
    category: "Cucina Italiana Contemporánea · Terraza & Coctelería",
    badgeText: "☀️ #SaporeDiNapoli",
    tagline: "Pastas de autor, pizzas napolitanas al horno de piedra y terraza nocturna",
    heroTitle: "El sabor del sur de Italia con la mejor",
    heroHighlight: "coctelería y brisa en terraza",
    heroSubtitle:
      "Pizzas con fermentación de 48h, pastas rellenas de autor, sangrías artesanales y mesas en terraza al aire libre.",
    logo: "/marcas/solemiocucinaebar.jpg",
    coverImage: "/marcas/solemiocucinaebar-cover.jpg",
    palette: {
      primary: "#D97706",
      primaryHover: "#B45309",
      secondary: "#B91C1C",
      accent: "#F59E0B",
      darkBg: "#0F0A05",
      cardBg: "rgba(30, 20, 10, 0.85)",
      textLight: "#FEF3C7",
      textMuted: "#FDE68A",
      border: "rgba(217, 119, 6, 0.25)",
      glow: "rgba(217, 119, 6, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans",
    },
    introText:
      "O Sole Mio Cucina e Bar fusiona la autenticidad culinaria napolitana con una vibrante atmósfera contemporánea. Su horno de leña hornea pizzas de borde inflado y masa ligera, mientras su barra de mixología prepara aperitivos italianos para disfrutar en la terraza.",
    introStats: [
      { label: "Masa Napolitana", value: "48h", detail: "Fermentación natural en frío" },
      { label: "Horno de Piedra", value: "450°C", detail: "Cocción napolitana en 90s" },
      { label: "Ambiente Terraza", value: "Outdoor", detail: "Música y coctelería italiana" },
    ],
    trustBadges: ["Mesa en Terraza Garantizada", "Masa Madre 100% Italiana", "Mixología de Autor"],
    whatsappPitchCopy:
      "Ciao equipo de O Sole Mio! ☀️ Diseñamos una WebApp especializada para su restaurante: permite reservar mesas en terraza, ordenar su carta de pizzas napolitanas y pastas rellenas con cálculo automático en Bs oficial y gestionar comandas sin confusiones.\n\nLes comparto la demo y el video promocional:\n👉 https://byte-bridge-tau.vercel.app/demos/solemiocucinaebar",
    address: "Calle 72 con Av. 3F, Sector La Lago, Maracaibo, Zulia",
    mapsUrl: "https://maps.google.com/?q=Calle+72+con+3F+La+Lago+Maracaibo",
    hours: "Lunes a Domingo: 12:00 PM - 12:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/solemiocucinaebar/",
    bookingType: "sole-mio-table",
    bookingTitle: "Reserva de Mesas en Salón & Terraza",
    bookingSubtitle: "Elige tu ambiente preferido y recibe confirmación instantánea con código QR.",
    bookingOptions: [
      {
        id: "mesa-terraza-solemio",
        name: "Mesa Terraza al Aire Libre (2 a 4 Pax)",
        description: "Ubicación en terraza con brisa, luces cálidas y música ambiental italiana.",
        priceUSD: 0,
        unit: "reserva gratuita",
        badge: "Más Pedido",
        features: ["Mesa reservada en terraza", "Jarra de agua aromatizada de cortesía", "Auto-pedido QR disponible"],
      },
      {
        id: "combo-pizza-wine-sole",
        name: "Noche de Pizza Napolitana & Vino (2 Pax)",
        description: "1 Pizza Napolitana de autor a elegir + 1 Ensalada Caprese al pesto + 1 Botella de vino tinto o blanco de la casa.",
        priceUSD: 38,
        unit: "para 2 personas",
        badge: "Recomendado",
        features: ["Pizza napolitana artesanal", "Caprese con mozzarella fior di latte", "Botella de vino incluida", "Mesa preferencial"],
      },
      {
        id: "cumpleanos-solemio",
        name: "Reserva Cumpleaños / Grupo (6 a 12 Pax)",
        description: "Mesa amplia con 2 pizzas grandes para compartir + jarra de Sangría Sole Mio + postre con bengala.",
        priceUSD: 70,
        unit: "paquete grupo",
        features: ["Mesa decorada para cumpleaños", "2 Pizzas napolitanas familiares", "Jarra de Sangría artesanal", "Postre con bengala"],
      },
    ],
    categories: [
      { id: "pizzas-napolitanas", name: "Pizzas al Horno de Leña 🍕", icon: "🍕" },
      { id: "pastas-sole", name: "Pastas Rellenas & Risottos 🍝", icon: "🍝" },
      { id: "cocteles-sangrias", name: "Cócteles, Sangrías & Vinos 🍷", icon: "🍷" },
    ],
    menuItems: [
      {
        id: "pizza-sole-speciale",
        name: "Pizza O Sole Mio (Burrata & Prosciutto)",
        category: "pizzas-napolitanas",
        description: "Base pomodoro San Marzano, mozzarella fresca, coronada con burrata cremosa entera, prosciutto di Parma y rúcula.",
        priceUSD: 16,
        badge: "Firma de la Casa",
        popular: true,
      },
      {
        id: "ravioli-ricotta-espinaca",
        name: "Ravioloni de Ricotta & Espinaca a la Mantequilla de Salvia",
        category: "pastas-sole",
        description: "Raviolis gigantes rellenos de ricotta fresca y espinaca salteada, bañados en mantequilla dorada con salvia y nueces.",
        priceUSD: 14,
        popular: true,
      },
      {
        id: "sangria-sole-mio",
        name: "Jarra de Sangría Sole Mio (Tinta o Blanca)",
        category: "cocteles-sangrias",
        description: "Vino seleccionado, frutas de temporada maceradas en licor de naranja, canela y toque espumoso.",
        priceUSD: 15,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 22,
      capacityPercentage: 86,
      todaySalesUSD: 1280,
      avgTicketUSD: 35,
    },
    sampleBookings: [
      { id: "SOL-401", clientName: "Valeria Montero", details: "Mesa Terraza (4 pax)", time: "08:00 PM", status: "en_mesa", pax: 4, totalUSD: 65 },
      { id: "SOL-402", clientName: "Gabriel Villalobos", details: "Noche Pizza & Vino (2 pax)", time: "09:00 PM", status: "confirmada", pax: 2, totalUSD: 38 },
    ],
  },

  // 25. DELISH BAKERY & BRUNCH
  {
    slug: "somos_delish",
    batch: "dia3",
    archetype: "direct-delivery",
    name: "Delish Bakery & Brunch",
    handle: "somos.delish",
    category: "Bakery Artesanal · Brunch Gourmet · Cajas de Dulces & Delivery",
    badgeText: "🧁 #SweetAndBrunch",
    tagline: "Rolls de canela recién horneados, brunch de autor, café de especialidad y cajas de regalo",
    heroTitle: "Tu bakery y brunch favorito directo a tu puerta",
    heroHighlight: "sin comisiones del 25%",
    heroSubtitle:
      "Pide cajas de repostería para regalar, combos de brunch gourmet y café de especialidad con checkout directo a WhatsApp y cálculo en Bs BCV.",
    logo: "/marcas/somos_delish.jpg",
    coverImage: "/marcas/somos_delish-cover.jpg",
    palette: {
      primary: "#F43F5E",
      primaryHover: "#E11D48",
      secondary: "#FB7185",
      accent: "#FEE2E2",
      darkBg: "#140508",
      cardBg: "rgba(35, 12, 18, 0.85)",
      textLight: "#FFF1F2",
      textMuted: "#FECDD3",
      border: "rgba(244, 63, 94, 0.25)",
      glow: "rgba(244, 63, 94, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans",
    },
    introText:
      "Delish Bakery es el rincón más dulce de Maracaibo para los amantes de la pastelería artesanal y el brunch contemporáneo. Famosos por sus cinnamon rolls esponjosos, galletas rellenas estilo Nueva York, tostadas francesas y cajas de regalo personalizadas.",
    introStats: [
      { label: "Horneado Diario", value: "100%", detail: "Frescura desde las 7:00 AM" },
      { label: "Cajas de Regalo", value: "500+", detail: "Entregadas para ocasiones especiales" },
      { label: "Ticket Delivery", value: "$18", detail: "Sin comisiones de apps externas" },
    ],
    trustBadges: ["Delivery Directo sin Comisiones", "Cajas de Regalo con Dedicatoria", "Café de Especialidad 100% Arábica"],
    whatsappPitchCopy:
      "Hola equipo de Delish! 🧁 Amamos sus postres y brunch en Maracaibo. Para que dejen de perder el 25% de comisión en apps de terceros y reciban pedidos de cajas de regalo organizados por WhatsApp con tasa BCV automática, diseñamos esta WebApp a su medida.\n\nMiren la demo y el video promocional aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/somos_delish",
    address: "Av. 13A entre Calles 69 y 70, Sector Tierra Negra, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Tierra+Negra+Maracaibo+Delish",
    hours: "Lunes a Domingo: 8:00 AM - 8:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/somos.delish/",
    bookingType: "bakery-delivery",
    bookingTitle: "Cajas de Regalo & Pedidos para Llevar",
    bookingSubtitle: "Arma tu caja personalizada o reserva mesa para tu brunch de fin de semana.",
    bookingOptions: [
      {
        id: "delish-box-regalo",
        name: "Delish Gift Box Especial (6 Piezas Surtidas)",
        description: "2 Cinnamon Rolls con frosting de queso crema + 2 Cookies NY rellenas + 2 Brownies fudgy en caja de lujo con lazo.",
        priceUSD: 18,
        unit: "por caja",
        badge: "Más Vendido",
        features: ["Caja de regalo decorada con lazo", "Tarjeta con dedicatoria personalizada", "Envío express o retiro en tienda", "Cero comisiones"],
      },
      {
        id: "brunch-box-duo",
        name: "Brunch Box para 2 (Dulce & Salado)",
        description: "2 Tostadas de aguacate y huevo poché + 2 Croissants rellenos + 2 Parfaits de yogurt con granola + 2 Iced Lattes.",
        priceUSD: 26,
        unit: "para 2 personas",
        badge: "Brunch",
        features: ["Combo completo para 2", "2 Cafés de especialidad incluidos", "Empaque térmico para delivery"],
      },
      {
        id: "reserva-mesa-brunch",
        name: "Reserva Mesa Brunch Salón Delish (2 a 4 Pax)",
        description: "Asegura tu mesa en salón climatizado para disfrutar de tu desayuno o merienda sin hacer fila.",
        priceUSD: 0,
        unit: "reserva gratuita",
        features: ["Mesa reservada en salón", "Menú digital con QR", "Wi-Fi de alta velocidad para trabajo"],
      },
    ],
    categories: [
      { id: "bakery-dulce", name: "Cinnamon Rolls & Cookies 🥐", icon: "🥐" },
      { id: "brunch-salado", name: "Brunch, Tostadas & Huevos 🥑", icon: "🥑" },
      { id: "cafe-especialidad", name: "Café de Especialidad & Bebidas ☕", icon: "☕" },
    ],
    menuItems: [
      {
        id: "cinnamon-roll-delish",
        name: "Classic Cinnamon Roll con Cream Cheese Frosting",
        category: "bakery-dulce",
        description: "Masa brioche esponjosa enrollada con canela de Ceilán y azúcar morena, bañada en glaseado tibio de queso crema.",
        priceUSD: 4.5,
        badge: "Favorito",
        popular: true,
      },
      {
        id: "avocado-toast-delish",
        name: "Avocado Toast con Huevo Poché & Semillas",
        category: "brunch-salado",
        description: "Pan de masa madre tostado con puré de aguacate aliñado, huevo poché con yema líquida, microgreens y semillas de chía.",
        priceUSD: 8,
        popular: true,
      },
      {
        id: "iced-pistachio-latte",
        name: "Iced Pistachio Latte de Especialidad",
        category: "cafe-especialidad",
        description: "Espresso doble de café arábica, leche cremada, pasta artesanal de pistacho y hielo con crema batida.",
        priceUSD: 5.5,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 34,
      capacityPercentage: 92,
      todaySalesUSD: 940,
      avgTicketUSD: 19,
    },
    sampleBookings: [
      { id: "DEL-501", clientName: "Andrea Quintero", details: "Delish Gift Box (Envío)", time: "11:00 AM", status: "en_mesa", pax: 1, totalUSD: 18 },
      { id: "DEL-502", clientName: "Mariángel Rivas", details: "Brunch Box para 2", time: "10:30 AM", status: "confirmada", pax: 2, totalUSD: 26 },
    ],
  },

  // 26. YELLOWSTONE STEAKHOUSE
  {
    slug: "yellowstonemcbo",
    batch: "dia3",
    archetype: "vip-access",
    name: "Yellowstone Steakhouse",
    handle: "yellowstonemcbo",
    category: "Western Steakhouse · Ribs & Smoked Meats · Rock & Country Nights",
    badgeText: "🤠 #WildWestSteakhouse",
    tagline: "Costillas ahumadas en leña de roble, cortes Tomahawk, cervezas artesanales y música en vivo",
    heroTitle: "El auténtico sabor del salvaje oeste en Maracaibo con",
    heroHighlight: "pases VIP para conciertos",
    heroSubtitle:
      "Reserva tus boletos QR para las noches de Rock & Country en vivo, degusta costillares ahumados y cortes Tomahawk a la brasa.",
    logo: "/marcas/yellowstonemcbo.jpg",
    coverImage: "/marcas/yellowstonemcbo-cover.jpg",
    palette: {
      primary: "#B45309",
      primaryHover: "#92400E",
      secondary: "#78350F",
      accent: "#F59E0B",
      darkBg: "#140A04",
      cardBg: "rgba(35, 18, 8, 0.85)",
      textLight: "#FEF3C7",
      textMuted: "#FDE68A",
      border: "rgba(180, 83, 9, 0.25)",
      glow: "rgba(180, 83, 9, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans",
    },
    introText:
      "Yellowstone Steakhouse recrea la rudeza y calidez de un rancho de Montana en pleno corazón de Maracaibo. Especialistas en carnes ahumadas a baja temperatura durante 12 horas, costillas bañadas en BBQ artesanal de bourbon y noches de música country y rock en vivo.",
    introStats: [
      { label: "Ahumado a Leña", value: "12h", detail: "Roble y maderas nobles" },
      { label: "Música en Vivo", value: "Vie-Sáb", detail: "Bandas de rock y country" },
      { label: "Cortes Premium", value: "Tomahawk", detail: "Certificados Angus Prime" },
    ],
    trustBadges: ["Pases VIP para Conciertos QR", "Costillas al Estilo Texas Smoked", "Amplio Estacionamiento Privado"],
    whatsappPitchCopy:
      "Howdy equipo de Yellowstone! 🤠 Su concepto de steakhouse western en Maracaibo es brutal. Para organizar el acceso en sus noches de música en vivo y vender combos de costillas y cortes sin colas en puerta, desarrollamos esta WebApp con pases VIP por código QR.\n\nPueden probar la demo y ver su video aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/yellowstonemcbo",
    address: "Av. 3F entre Calles 74 y 75, Sector La Lago, Maracaibo, Zulia",
    mapsUrl: "https://maps.google.com/?q=La+Lago+Maracaibo+Yellowstone",
    hours: "Miércoles a Domingo: 5:00 PM - 2:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/yellowstonemcbo/",
    bookingType: "western-events",
    bookingTitle: "Tickets de Conciertos & Reservas de Mesas",
    bookingSubtitle: "Compra tus entradas digitales para las noches temáticas o asegura tu mesa parrillera.",
    bookingOptions: [
      {
        id: "mesa-western-yellow",
        name: "Reserva de Mesa Salón Western (4 a 6 Pax)",
        description: "Mesa de madera rústica en salón principal con vista a la tarima musical y servicio de barril.",
        priceUSD: 20,
        unit: "consumo mínimo",
        badge: "Más Solicitado",
        features: ["Mesa reservada frente a tarima", "Balde de 6 cervezas artesanales", "Auto-pedido QR en mesa"],
      },
      {
        id: "ticket-rock-night-yellow",
        name: "Pase VIP QR / Noche de Rock & Country en Vivo",
        description: "Entrada con acceso preferencial sin fila + 1 Trago de bourbon de bienvenida para la noche de concierto.",
        priceUSD: 10,
        unit: "por persona",
        badge: "Eventos",
        features: ["Acceso sin fila en puerta", "1 Trago de bienvenida", "Boleto digital QR en WhatsApp", "Aforo garantizado"],
      },
      {
        id: "combo-yellowstone-feast",
        name: "Yellowstone Ribs Feast (4 Pax + Costillar XXL)",
        description: "Costillar entero de cerdo ahumado 12h en salsa BBQ bourbon + Mazorcas asadas + Papas rústicas + Balde de cervezas.",
        priceUSD: 65,
        unit: "para 4 personas",
        features: ["Costillar XXL ahumado", "Guarniciones western completas", "Balde de 8 cervezas frías", "Mesa reservada"],
      },
    ],
    categories: [
      { id: "ahumados-ribs", name: "Costillas & Carnes Ahumadas 🍖", icon: "🍖" },
      { id: "cortes-tomahawk", name: "Cortes Angus al Grill 🥩", icon: "🥩" },
      { id: "bourbon-beers", name: "Bourbon, Tragos & Cervezas 🥃", icon: "🥃" },
    ],
    menuItems: [
      {
        id: "texas-smoked-ribs",
        name: "Texas Smoked Pork Ribs (Costillar Completo)",
        category: "ahumados-ribs",
        description: "Costillas de cerdo ahumadas durante 12 horas con astillas de roble, glaseadas en salsa BBQ de bourbon y azúcar morena.",
        priceUSD: 24,
        badge: "Especialidad",
        popular: true,
      },
      {
        id: "tomahawk-yellowstone",
        name: "Tomahawk Steak Prime (1.2 Kg)",
        category: "cortes-tomahawk",
        description: "Impresionante corte de carne con hueso largo sellado a la brasa, acompañado de mantequilla de romero y papas al plomo.",
        priceUSD: 45,
        popular: true,
      },
      {
        id: "bourbon-smoked-oldfashioned",
        name: "Smokey Montana Old Fashioned",
        category: "bourbon-beers",
        description: "Bourbon añejo, bíter aromático, piel de naranja caramelizada y humo de canela servido en vaso con hielo esférico.",
        priceUSD: 9,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 24,
      capacityPercentage: 90,
      todaySalesUSD: 1680,
      avgTicketUSD: 42,
    },
    sampleBookings: [
      { id: "YEL-601", clientName: "Guillermo Parra", details: "Mesa Salón Western (6 pax)", time: "09:00 PM", status: "en_mesa", pax: 6, totalUSD: 65 },
      { id: "YEL-602", clientName: "Beatriz Soto", details: "Pase VIP Rock Night (4 pax)", time: "10:30 PM", status: "confirmada", pax: 4, totalUSD: 40 },
    ],
  },

  // 27. MORE CHEESE MARACAIBO
  {
    slug: "morecheese_mcbo",
    batch: "dia3",
    archetype: "table-ordering",
    name: "More Cheese Maracaibo",
    handle: "morecheese.mcbo",
    category: "Burgers con Piscina de Cheddar · Tequeños XXL · Fast Casual",
    badgeText: "🧀 #AmantesDelQueso",
    tagline: "El templo del queso fundido: smash burgers bañadas en cheddar, tequeñones y finger food",
    heroTitle: "Sumérgete en la experiencia de queso fundido con",
    heroHighlight: "auto-pedido en mesa con QR",
    heroSubtitle:
      "Pide hamburguesas con cascada de queso cheddar fundido, tequeñones gigantes y tablas de snacks directo a tu mesa sin hacer cola.",
    logo: "/marcas/morecheese_mcbo.jpg",
    coverImage: "/marcas/morecheese_mcbo-cover.jpg",
    palette: {
      primary: "#EAB308",
      primaryHover: "#CA8A04",
      secondary: "#EA580C",
      accent: "#FEF08A",
      darkBg: "#120E04",
      cardBg: "rgba(35, 28, 10, 0.85)",
      textLight: "#FEFCE8",
      textMuted: "#FEF08A",
      border: "rgba(234, 179, 8, 0.25)",
      glow: "rgba(234, 179, 8, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans",
    },
    introText:
      "More Cheese es el paraíso gastronómico para los fanáticos del queso en Maracaibo. Pioneros en hamburguesas servidas con piscina de queso cheddar derretido al momento en mesa, tequeños gigantes rellenos de mezclas gourmet y porciones abundantes pensadas para compartir.",
    introStats: [
      { label: "Cheddar Derretido", value: "100%", detail: "Cascada de queso en mesa" },
      { label: "Tequeñones XXL", value: "25cm", detail: "Rellenos de queso fundido" },
      { label: "Auto-Pedido", value: "0.8s", detail: "Comanda enviada a cocina" },
    ],
    trustBadges: ["Auto-Pedido con QR en Mesa", "Piscina de Queso Cheddar en Vivo", "Delivery Rápido en Empaque Térmico"],
    whatsappPitchCopy:
      "Hola gente de More Cheese! 🧀 Su concepto con la piscina de queso cheddar en Maracaibo es una locura visual. Para evitar las colas de gente esperando mesa y mesoneros en horas pico, les creamos esta WebApp con auto-pedido por código QR directo a cocina y menú multimoneda.\n\nLes comparto la demo y el Reel animado:\n👉 https://byte-bridge-tau.vercel.app/demos/morecheese_mcbo",
    address: "Av. 8 (Santa Rita) con Calle 67 (Cecilio Acosta), Maracaibo, Zulia",
    mapsUrl: "https://maps.google.com/?q=Santa+Rita+Cecilio+Acosta+Maracaibo",
    hours: "Lunes a Domingo: 12:00 PM - 12:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/morecheese.mcbo/",
    bookingType: "cheese-order-flow",
    bookingTitle: "Combos Cheddar & Reservas de Mesas",
    bookingSubtitle: "Elige tu combo con piscina de queso o aparta mesa para tu grupo de amigos.",
    bookingOptions: [
      {
        id: "mesa-cheddar-more",
        name: "Reserva de Mesa Cheese Squad (4 a 6 Pax)",
        description: "Mesa reservada para grupo con servicio prioritario de piscina de queso cheddar y bebidas.",
        priceUSD: 10,
        unit: "consumo mínimo",
        badge: "Más Pedido",
        features: ["Mesa reservada sin hacer cola", "Auto-pedido QR en mesa", "Servicio de cascada de queso garantizado"],
      },
      {
        id: "combo-cheese-mountain",
        name: "Combo Cheese Mountain (4 Burgers + Cascada Cheddar)",
        description: "4 Smash Burgers dobles + Porción XXL de papas fritas con tocineta + Olla de queso cheddar fundido para bañar.",
        priceUSD: 36,
        unit: "para 4 personas",
        badge: "Firma",
        features: ["4 Smash burgers completas", "Cascada de queso cheddar derretido", "Papas XXL con tocineta", "Ahorro del 20%"],
      },
      {
        id: "pack-tequenones-xxl",
        name: "Pack Tequeñones XXL (6 Unidades Gigantes)",
        description: "6 Tequeños de 25cm rellenos de queso semiduro fundido, tocineta y maíz dulce con salsa de ajo.",
        priceUSD: 15,
        unit: "para compartir",
        features: ["6 Tequeños gigantes de 25cm", "Salsa tártara y salsa de maíz dulce", "Masa crujiente artesanal"],
      },
    ],
    categories: [
      { id: "burgers-cheddar", name: "Burgers con Piscina de Queso 🍔", icon: "🍔" },
      { id: "tequenas-snacks", name: "Tequeñones XXL & Fries 🍟", icon: "🍟" },
      { id: "bebidas-shakes", name: "Bebidas & Milkshakes 🥤", icon: "🥤" },
    ],
    menuItems: [
      {
        id: "more-cheese-burger-volcano",
        name: "Volcano Cheese Burger (Doble Smash con Cascada)",
        category: "burgers-cheddar",
        description: "Doble carne smash Angus, tocineta crujiente, cebolla caramelizada, servida dentro de una torre de queso cheddar fundido.",
        priceUSD: 9.5,
        badge: "Top 1 Viral",
        popular: true,
      },
      {
        id: "tequenon-guayanes-bacon",
        name: "Tequeñón XXL con Queso Guayanés y Tocineta",
        category: "tequenas-snacks",
        description: "Tequeño gigante de 25 cm relleno de queso guayanés derretido y trozos de tocineta ahumada.",
        priceUSD: 3.5,
        popular: true,
      },
      {
        id: "papas-cheese-overload",
        name: "Papas Fritas Cheese Overload",
        category: "tequenas-snacks",
        description: "Papas fritas crujientes bañadas en abundante salsa cheddar, carne molida especiada y cebollín fresco.",
        priceUSD: 7.5,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 30,
      capacityPercentage: 94,
      todaySalesUSD: 1120,
      avgTicketUSD: 21,
    },
    sampleBookings: [
      { id: "MCH-701", clientName: "Nelson Bermúdez", details: "Combo Cheese Mountain (4 pax)", time: "08:00 PM", status: "en_mesa", pax: 4, totalUSD: 36 },
      { id: "MCH-702", clientName: "Gabriela Prieto", details: "Mesa Cheese Squad (5 pax)", time: "09:30 PM", status: "confirmada", pax: 5, totalUSD: 45 },
    ],
  },

  // 28. SALÓN CANTÓN MARACAIBO
  {
    slug: "saloncanton_mcbo",
    batch: "dia3",
    archetype: "gourmet-booking",
    name: "Salón Cantón Maracaibo",
    handle: "saloncanton_mcbo",
    category: "Alta Gastronomía Cantonesa · Banquetes Tradicionales · Pato Laqueado",
    badgeText: "🥢 #AltaCocinaChina",
    tagline: "La cúspide de la cocina china tradicional en Venezuela: mesas giratorias, dim sum y pato Pekín",
    heroTitle: "Banquetes legendarios de la alta cocina cantonesa con",
    heroHighlight: "mesas giratorias y salones VIP",
    heroSubtitle:
      "Reserva tu mesa giratoria para banquetes familiares, degusta pato laqueado Pekín de piel crujiente y arroces al wok de alta gama.",
    logo: "/marcas/saloncanton_mcbo.jpg",
    coverImage: "/marcas/saloncanton_mcbo-cover.jpg",
    palette: {
      primary: "#DC2626",
      primaryHover: "#B91C1C",
      secondary: "#B45309",
      accent: "#FBBF24",
      darkBg: "#140505",
      cardBg: "rgba(35, 10, 10, 0.85)",
      textLight: "#FEF2F2",
      textMuted: "#FECACA",
      border: "rgba(220, 38, 38, 0.25)",
      glow: "rgba(220, 38, 38, 0.25)",
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans",
    },
    introText:
      "Salón Cantón es la institución gastronómica cantonesa por excelencia en Venezuela. En Maracaibo, ofrece una experiencia imperial con salones privados climatizados, mesas redondas giratorias para banquetes familiares, maestros chefs cantoneses y platos icónicos de la cocina imperial china.",
    introStats: [
      { label: "Tradición Cantonesa", value: "40+", detail: "Años de excelencia en el país" },
      { label: "Mesas Giratorias", value: "Lazy Susan", detail: "Para banquetes de 6 a 12 pax" },
      { label: "Pato Pekín", value: "Auténtico", detail: "Asado a leña con piel crocante" },
    ],
    trustBadges: ["Mesa Giratoria de Banquete Reservada", "Maestros Chefs de Cantón", "Salones VIP Ejecutivos Climatizados"],
    whatsappPitchCopy:
      "Ni hao equipo de Salón Cantón! 🥢 Para honrar su prestigio como el máximo referente de alta cocina cantonesa en Maracaibo, diseñamos esta WebApp: permite reservar mesas giratorias familiares y salones privados VIP, ordenar menús de banquete con maridaje y conversión multimoneda en tiempo real.\n\nPueden explorar la demo y su Reel animado aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/saloncanton_mcbo",
    address: "Av. 3Y (San Martín) entre Calles 74 y 75, Sector La Lago, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Salon+Canton+Maracaibo",
    hours: "Lunes a Domingo: 11:30 AM - 11:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/saloncanton_mcbo/",
    bookingType: "cantonese-banquet",
    bookingTitle: "Reserva de Mesas Giratorias & Banquetes VIP",
    bookingSubtitle: "Reserva tu mesa imperial con Lazy Susan para compartir en familia o eventos corporativos.",
    bookingOptions: [
      {
        id: "mesa-banquete-canton",
        name: "Mesa Giratoria Banquete Imperial (6 a 10 Pax)",
        description: "Mesa redonda con centro giratorio Lazy Susan en salón principal con servicio de té jazmín de cortesía.",
        priceUSD: 0,
        unit: "reserva gratuita",
        badge: "Más Solicitado",
        features: ["Mesa giratoria familiar garantizada", "Servicio de té de jazmín en tetera", "Atención guiada por capitán de sala"],
      },
      {
        id: "banquete-imperial-4pax",
        name: "Banquete Imperial Cantón Completo (4 Pax)",
        description: "Pato Laqueado Pekín con crepes + Arroz Cantón Especial + Lumpias crocantes + Pollo con almendras + Costillitas agridulces.",
        priceUSD: 68,
        unit: "para 4 personas",
        badge: "Recomendado",
        features: ["5 Platos icónicos para compartir", "Pato Pekín con crepes y salsa hoisin", "Porciones abundantes", "Ahorro del 25%"],
      },
      {
        id: "salon-vip-imperial",
        name: "Salón Privado Dinastía VIP (8 a 15 Pax)",
        description: "Salón exclusivo climatizado con pantalla para reuniones corporativas o celebraciones íntimas.",
        priceUSD: 150,
        unit: "consumo mínimo",
        features: ["Salón privado con puerta acústica", "Mesonero exclusivo", "Facturación corporativa"],
      },
    ],
    categories: [
      { id: "pato-especialidades", name: "Pato Pekín & Especialidades 🦆", icon: "🦆" },
      { id: "arroces-fideos-wok", name: "Arroces al Wok & Dim Sum 🍚", icon: "🍚" },
      { id: "carnes-mariscos-canton", name: "Carnes, Pollo & Mariscos 🍤", icon: "🍤" },
    ],
    menuItems: [
      {
        id: "pato-pekin-canton",
        name: "Pato Laqueado Pekín Imperial (Medio Pato)",
        category: "pato-especialidades",
        description: "Pato asado tradicional con piel ultra crujiente, servido con finas crepes al vapor, cebollín fresco, pepino y salsa hoisin.",
        priceUSD: 26,
        badge: "Plato Supremo",
        popular: true,
      },
      {
        id: "arroz-canton-especial",
        name: "Arroz Frito Especial Salón Cantón",
        category: "arroces-fideos-wok",
        description: "Arroz al wok con camarones jumbo, lechón ahumado cantones, pollo marinado, brotes de soja y cebollín.",
        priceUSD: 12.5,
        popular: true,
      },
      {
        id: "costillitas-sal-pimienta",
        name: "Costillitas de Cerdo a la Sal y Pimienta de Sichuan",
        category: "carnes-mariscos-canton",
        description: "Crujientes bocados de costilla de cerdo salteados al wok con ajo dorado, pimientos verdes y pimienta aromática de Sichuan.",
        priceUSD: 14,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 18,
      capacityPercentage: 82,
      todaySalesUSD: 1850,
      avgTicketUSD: 54,
    },
    sampleBookings: [
      { id: "CAN-801", clientName: "Ing. Roberto Wong", details: "Banquete Imperial (4 pax)", time: "01:30 PM", status: "en_mesa", pax: 4, totalUSD: 68 },
      { id: "CAN-802", clientName: "Dra. Carolina Guanipa", details: "Mesa Giratoria (8 pax)", time: "08:30 PM", status: "confirmada", pax: 8, totalUSD: 140 },
    ],
  },

  // 29. HOLY SUSHI MARACAIBO
  {
    slug: "holysushi_mcbo",
    batch: "dia3",
    archetype: "direct-delivery",
    name: "Holy Sushi Maracaibo",
    handle: "holysushi_mcbo",
    category: "Sushi Fusión Nikkei · Barcos de Sushi · Delivery WhatsApp",
    badgeText: "🍣 #HolyExperience",
    tagline: "Rolls de autor con topping flameados, ceviches nikkei, barcos para fiestas y delivery veloz",
    heroTitle: "Sushi gourmet en tu mesa y barcos para fiestas",
    heroHighlight: "sin comisiones de apps",
    heroSubtitle:
      "Pide barcos de sushi de 30 a 50 piezas para tus reuniones, rolls flameados al soplete y ceviches nikkei con entrega express a domicilio.",
    logo: "/marcas/holysushi_mcbo.jpg",
    coverImage: "/marcas/holysushi_mcbo-cover.jpg",
    palette: {
      primary: "#4F46E5",
      primaryHover: "#4338CA",
      secondary: "#818CF8",
      accent: "#A5B4FC",
      darkBg: "#070614",
      cardBg: "rgba(18, 15, 40, 0.85)",
      textLight: "#EEF2FF",
      textMuted: "#C7D2FE",
      border: "rgba(79, 70, 229, 0.25)",
      glow: "rgba(79, 70, 229, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans",
    },
    introText:
      "Holy Sushi es el referente del sushi nikkei contemporáneo y delivery premium en Maracaibo. Destaca por sus rolls con toppings flameados al soplete, salsas de autor artesanales, imponentes barcos de sushi para eventos y empaques térmicos de alta calidad.",
    introStats: [
      { label: "Piezas por Barco", value: "30-50", detail: "Ideal para fiestas y reuniones" },
      { label: "Topping Flameado", value: "Torched", detail: "Salmón y atún al soplete" },
      { label: "Delivery Express", value: "35 min", detail: "Empaque sellado de alta gama" },
    ],
    trustBadges: ["Delivery WhatsApp sin Comisiones", "Barcos de Sushi para Eventos", "Pescados Frescos Grado Sashimi"],
    whatsappPitchCopy:
      "Hola equipo de Holy Sushi! 🍣 Amamos sus rolls flameados y barcos para eventos en Maracaibo. Diseñamos una WebApp especializada para potenciar su delivery: catálogo con fotos HD, cotizador de barcos de 30/50 piezas y checkout directo a WhatsApp con tasa BCV automática.\n\nLes comparto la demo y el Reel animado:\n👉 https://byte-bridge-tau.vercel.app/demos/holysushi_mcbo",
    address: "Av. 3F con Calle 70, Sector La Lago, Maracaibo, Zulia",
    mapsUrl: "https://maps.google.com/?q=La+Lago+Calle+70+Maracaibo+Sushi",
    hours: "Martes a Domingo: 12:00 PM - 11:30 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/holysushi_mcbo/",
    bookingType: "sushi-party-delivery",
    bookingTitle: "Barcos para Eventos & Delivery Express",
    bookingSubtitle: "Ordena tu barco de sushi para fiestas o reserva mesa en nuestra barra nikkei.",
    bookingOptions: [
      {
        id: "holy-boat-party",
        name: "Holy Boat Party Pack (40 Piezas Surtidas)",
        description: "10 Fuji Flame + 10 Ebi Crunchy + 10 Tuna Nikkei + 10 Alaska Especial en barco decorativo de presentación.",
        priceUSD: 38,
        unit: "barco 40 piezas",
        badge: "Más Vendido",
        features: ["Barco decorativo incluido", "4 Rolls de autor variados", "Salsas de autor (anguila trufada, fuji y soya)", "Ideal para 4 personas"],
      },
      {
        id: "combo-sushi-duo",
        name: "Combo Holy Duo (20 Piezas + Ceviche Nikkei)",
        description: "2 Rolls de autor de 10 bocados + Ceviche de pesca blanca y camarón al ají amarillo + 2 Bebidas.",
        priceUSD: 24,
        unit: "para 2 personas",
        badge: "Recomendado",
        features: ["20 Bocados de sushi fresco", "Ceviche nikkei abundante", "2 Bebidas frías"],
      },
      {
        id: "reserva-barra-sushi",
        name: "Mesa Salón / Barra Sushi Holy (2 a 4 Pax)",
        description: "Reserva tu mesa en salón climatizado con ambientación moderna y atención directa de sushiman.",
        priceUSD: 0,
        unit: "reserva gratuita",
        features: ["Mesa reservada sin espera", "Auto-pedido QR en mesa", "Atención preferencial"],
      },
    ],
    categories: [
      { id: "rolls-flameados", name: "Rolls de Autor Flameados 🍣", icon: "🍣" },
      { id: "barcos-party", name: "Barcos & Combos de Fiesta 🍱", icon: "🍱" },
      { id: "ceviches-entradas", name: "Ceviches Nikkei & Gyozas 🥟", icon: "🥟" },
    ],
    menuItems: [
      {
        id: "holy-fuji-roll",
        name: "Holy Fuji Roll (10 Bocados Flameados)",
        category: "rolls-flameados",
        description: "Camarón tempura, queso crema, aguacate, cubierto de salmón fresco flameado al soplete con salsa fuji y masago.",
        priceUSD: 11,
        badge: "Top 1 Viral",
        popular: true,
      },
      {
        id: "ceviche-nikkei-holy",
        name: "Ceviche Nikkei al Ají Amarillo",
        category: "ceviches-entradas",
        description: "Pesca blanca del día, calamares crocantes y aguacate en leche de tigre al ají amarillo con batata glaseada y canchita.",
        priceUSD: 13,
        popular: true,
      },
      {
        id: "gyozas-cerdo-holy",
        name: "Gyozas de Cerdo y Cebollín al Vapor y Grill (5 Und)",
        category: "ceviches-entradas",
        description: "Empanaditas japonesas artesanales rellenas de cerdo especiado con salsa ponzu de la casa.",
        priceUSD: 7,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 26,
      capacityPercentage: 89,
      todaySalesUSD: 1420,
      avgTicketUSD: 29,
    },
    sampleBookings: [
      { id: "HOL-901", clientName: "Paola Villasmil", details: "Holy Boat Party 40 Pzs", time: "08:30 PM", status: "en_mesa", pax: 4, totalUSD: 38 },
      { id: "HOL-902", clientName: "Mauricio Faria", details: "Combo Holy Duo (2 pax)", time: "07:30 PM", status: "confirmada", pax: 2, totalUSD: 24 },
    ],
  },

  // 30. VIVE MATCHA BAR
  {
    slug: "vivematcha",
    batch: "dia3",
    archetype: "table-ordering",
    name: "Vive Matcha Bar",
    handle: "vivematcha",
    category: "Matcha Bar de Especialidad · Açaí Bowls · Wellness & Healthy Food",
    badgeText: "🍵 #MatchaLoverMcbo",
    tagline: "Matcha ceremonial japonés grado Uji, latte art, bowls energéticos y repostería saludable sin azúcar",
    heroTitle: "Tu dosis diaria de energía verde con",
    heroHighlight: "auto-pedido en barra y pick-up express",
    heroSubtitle:
      "Pide matcha lattes ceremoniales de Kioto, açaí bowls con frutas frescas y postres keto sin hacer fila en el mostrador.",
    logo: "/marcas/vivematcha.jpg",
    coverImage: "/marcas/vivematcha-cover.jpg",
    palette: {
      primary: "#65A30D",
      primaryHover: "#4D7C0F",
      secondary: "#84CC16",
      accent: "#BEF264",
      darkBg: "#071203",
      cardBg: "rgba(15, 30, 8, 0.85)",
      textLight: "#F7FEE7",
      textMuted: "#D9F99D",
      border: "rgba(101, 163, 13, 0.25)",
      glow: "rgba(101, 163, 13, 0.25)",
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans",
    },
    introText:
      "Vive Matcha es el primer matcha bar de especialidad en Maracaibo, dedicado al bienestar y la nutrición consciente. Importa directamente matcha ceremonial de grado ceremonial de Uji (Kioto), combinándolo con leches vegetales, adaptógenos, açaí bowls orgánicos y pastelería sin gluten ni azúcar refinada.",
    introStats: [
      { label: "Origen del Matcha", value: "Uji, Japón", detail: "100% Ceremonial Grade" },
      { label: "Bebidas Saludables", value: "20+", detail: "Lattes, cold brews y tonics" },
      { label: "Opciones Wellness", value: "Keto & Vegan", detail: "Sin gluten ni azúcares añadidos" },
    ],
    trustBadges: ["Auto-Pedido en Barra & Mesa con QR", "Matcha Ceremonial 100% Orgánico", "Pick-up Express sin Colas"],
    whatsappPitchCopy:
      "Hola equipo de Vive Matcha! 🍵 Su propuesta de bienestar y matcha ceremonial en Maracaibo es increíble. Para que su comunidad de clientes pida rápido desde la mesa o barra sin hacer cola en el mostrador y ordene pick-up express antes del gimnasio, diseñamos esta WebApp a su medida.\n\nMiren la demo interactiva y su Reel animado aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/vivematcha",
    address: "Av. 10 entre Calles 66 y 67, Sector Cecilio Acosta, Maracaibo",
    mapsUrl: "https://maps.google.com/?q=Cecilio+Acosta+Av+10+Maracaibo+Matcha",
    hours: "Lunes a Sábado: 7:30 AM - 7:30 PM · Domingos: 8:30 AM - 4:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/vivematcha/",
    bookingType: "matcha-wellness",
    bookingTitle: "Combos Energy & Pick-up Express",
    bookingSubtitle: "Ordena tu latte ceremonial para llevar o reserva mesa en nuestro espacio zen.",
    bookingOptions: [
      {
        id: "combo-matcha-bowl",
        name: "Combo Energy Morning (Matcha Latte + Açaí Bowl)",
        description: "1 Ceremonial Iced Matcha Latte con leche de almendras + 1 Tropical Açaí Bowl con fresas, arándanos, coco y granola.",
        priceUSD: 12,
        unit: "combo completo",
        badge: "Más Vendido",
        features: ["Matcha ceremonial Uji grado A", "Açaí orgánico con superfoods", "Pick-up express en 5 min o consumo en local"],
      },
      {
        id: "tasting-flight-matcha",
        name: "Matcha Tasting Flight (3 Variedades)",
        description: "3 Mini lattes de autor: Ceremonial Classic + Strawberry Vanilla Matcha + Blue Spirulina Cloud.",
        priceUSD: 14,
        unit: "degustación",
        badge: "Experiencia",
        features: ["3 Lattes de especialidad", "Mini cookie keto de cortesía", "Explicación de beneficios y antioxidantes"],
      },
      {
        id: "reserva-espacio-zen",
        name: "Reserva Mesa Zen / Coworking (1 a 4 Pax)",
        description: "Mesa en salón con luz natural, Wi-Fi ultra rápido, enchufes y música relajante para trabajar.",
        priceUSD: 0,
        unit: "reserva gratuita",
        features: ["Mesa reservada para trabajo/estudio", "Wi-Fi de alta velocidad", "Auto-pedido QR directo a mesa"],
      },
    ],
    categories: [
      { id: "matcha-lattes", name: "Matcha Ceremonial & Lattes 🍵", icon: "🍵" },
      { id: "acai-bowls", name: "Açaí Bowls & Superfoods 🫐", icon: "🫐" },
      { id: "bakery-healthy", name: "Postres Saludables & Keto 🥑", icon: "🥑" },
    ],
    menuItems: [
      {
        id: "iced-strawberry-matcha",
        name: "Iced Strawberry Cloud Matcha Latte",
        category: "matcha-lattes",
        description: "Compota artesanal de fresas naturales, leche de avena fría y capa superior de matcha ceremonial batido a mano.",
        priceUSD: 6.5,
        badge: "Top 1 Viral",
        popular: true,
      },
      {
        id: "acai-power-bowl",
        name: "Tropical Açaí Power Bowl",
        category: "acai-bowls",
        description: "Base cremosa de açaí orgánico coronada con fresas, banano, arándanos, semillas de chía, coco tostado y mantequilla de almendras.",
        priceUSD: 8.5,
        popular: true,
      },
      {
        id: "matcha-cookie-keto",
        name: "Galleta Keto de Matcha & Chocolate Blanco",
        category: "bakery-healthy",
        description: "Elaborada con harina de almendras, matcha ceremonial y chips de chocolate blanco sin azúcar.",
        priceUSD: 3.5,
        popular: true,
      },
    ],
    managerKpis: {
      activeReservations: 20,
      capacityPercentage: 86,
      todaySalesUSD: 820,
      avgTicketUSD: 16,
    },
    sampleBookings: [
      { id: "MAT-1001", clientName: "Daniela Casanova", details: "Combo Energy Morning", time: "09:00 AM", status: "en_mesa", pax: 1, totalUSD: 12 },
      { id: "MAT-1002", clientName: "Santiago Vera", details: "Matcha Tasting Flight (2 pax)", time: "11:00 AM", status: "confirmada", pax: 2, totalUSD: 14 },
    ],
  },

  // SAUKO RESTAURANT
  {
  slug: "saukorestaurant",
  batch: "dia4",
  archetype: "table-ordering",
  name: "Sauko Restaurant",
  handle: "saukorestaurant",
  category: "Bistró & Coctelería de Autor",
  badgeText: "Bistró Bar & Fusión en Valera",
  tagline: "Bistró de autor con carnes a la brasa, mariscos, pastas frescas y coctelería botánica frente al Parque Los Ilustres.",
  heroTitle: "La Experiencia Gastronómica y Coctelera",
  heroHighlight: "Más Vibrante de Valera",
  heroSubtitle: "Auto-pedido por código QR directo a barra y cocina, reserva de mesas para celebraciones y cálculo automático en Bolívares a tasa oficial.",
  logo: "/marcas/saukorestaurant.jpg",
  coverImage: "/marcas/saukorestaurant-cover.jpg",
  palette: {
    primary: "#059669",
    primaryHover: "#047857",
    secondary: "#0f172a",
    accent: "#10b981",
    darkBg: "#060d11",
    cardBg: "#0d1a1e",
    textLight: "#f0fdf4",
    textMuted: "#6ee7b7",
    border: "rgba(16, 185, 129, 0.25)",
    glow: "rgba(16, 185, 129, 0.3)"
  },
  typography: {
    fontDisplay: "font-serif",
    fontBody: "font-sans"
  },
  introText: "Ubicado frente al icónico Parque Los Ilustres en Valera, Sauko combina la calidez de un bistró moderno con la energía nocturna de un lounge de autor. Su propuesta fusiona parrillas de solomo importado, mariscos al fuego y coctelería botánica.",
  introStats: [
    {
      label: "Coctelería de Autor",
      value: "+20",
      detail: "Creaciones exclusivas botánicas"
    },
    {
      label: "Ubicación Céntrica",
      value: "Parque Ilustres",
      detail: "El punto de encuentro en Valera"
    },
    {
      label: "Tasa Automatizada",
      value: "BCV al Día",
      detail: "Conversión dual USD / Bolívares"
    }
  ],
  trustBadges: [
    "Auto-Pedido QR en Mesa",
    "Conversión Multimoneda BCV",
    "Confirmación Exprés en WhatsApp"
  ],
  whatsappPitchCopy: "Hola equipo de Sauko Restaurant! 🍸 Estuvimos analizando cómo optimizar la experiencia de sus comensales en Valera durante las noches de mayor afluencia y desarrollamos esta WebApp a medida con auto-pedido desde mesa vía QR, carta digital con conversión automática a tasa BCV y comanda directa a barra.\n\nPueden probar la demo interactiva y ver su video comercial aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/saukorestaurant",
  address: "Av. Principal frente al Parque Los Ilustres, Valera, Estado Trujillo",
  mapsUrl: "https://maps.google.com/?q=Parque+Los+Ilustres+Valera+Trujillo",
  hours: "Martes a Domingo: 12:00 PM - 11:30 PM (Fines de semana hasta las 12:30 AM)",
  phone: "+58 412-0308674",
  instagramUrl: "https://www.instagram.com/saukorestaurant/",
  bookingType: "table-booking",
  bookingTitle: "Reserva de Mesas & Experiencias Sauko",
  bookingSubtitle: "Asegura tu mesa en salón o barra lounge sin esperas en puerta.",
  bookingOptions: [
    {
      id: "reserva-mesa-sauko",
      name: "Mesa en Salón Principal (1 a 6 Pax)",
      description: "Mesa reservada en el salón interior climatizado con atención personalizada y música ambiental.",
      priceUSD: 0,
      unit: "reserva gratuita",
      badge: "Más Popular",
      features: [
        "Ubicación garantizada",
        "Auto-pedido QR en mesa",
        "Carta con tasa BCV automática"
      ]
    },
    {
      id: "experiencia-coctelera-sauko",
      name: "Mesa Lounge & Experiencia Coctelera (2 a 4 Pax)",
      description: "Mesa alta en barra lounge con 4 cócteles de autor a elección + tabla de tapas mixtas.",
      priceUSD: 28,
      unit: "por mesa",
      badge: "Recomendado",
      features: [
        "4 Cócteles botánicos",
        "Tabla de tapas mixtas",
        "Atención prioritaria del bartender"
      ]
    },
    {
      id: "cumpleanos-sauko",
      name: "Paquete Cumpleaños Sauko (Hasta 10 Pax)",
      description: "Mesa lounge decorada + botella de espumante o ronda de cócteles + postre cortesía del chef.",
      priceUSD: 45,
      unit: "paquete grupo",
      features: [
        "Mesa decorada para fiesta",
        "Ronda de cócteles o espumante",
        "Postre cumpleañero cortesía"
      ]
    }
  ],
  categories: [
    {
      id: "parrillas-carnes",
      name: "Carnes & Parrillas al Fuego 🥩",
      icon: "🥩"
    },
    {
      id: "mariscos-pastas",
      name: "Mariscos & Pastas de Autor 🍝",
      icon: "🍝"
    },
    {
      id: "cocteleria-botanica",
      name: "Coctelería Botánica & Bar 🍸",
      icon: "🍸"
    }
  ],
  menuItems: [
    {
      id: "parrilla-mixta-sauko",
      name: "Parrilla Mixta Sauko Especial",
      category: "parrillas-carnes",
      description: "Cortes de solomo a la brasa, pechuga parrillera, chorizo artesanal, yuca al vapor y guasacaca criolla.",
      priceUSD: 20,
      badge: "Especialidad",
      popular: true
    },
    {
      id: "risotto-frutti-di-mare-sauko",
      name: "Risotto Frutti di Mare al Vino Blanco",
      category: "mariscos-pastas",
      description: "Arroz arborio cremoso con camarones jumbo, calamares salteados y reducción de bisque marinero.",
      priceUSD: 16.5,
      popular: true
    },
    {
      id: "sauko-master-burger",
      name: "Sauko Master Angus Burger",
      category: "parrillas-carnes",
      description: "Doble carne smash Angus, queso cheddar madurado, tocineta crujiente, cebolla caramelizada y papas rústicas.",
      priceUSD: 11
    },
    {
      id: "coctel-sauko-passion",
      name: "Cóctel Sauko Passion Tropical",
      category: "cocteleria-botanica",
      description: "Vodka premium, infusión fresca de maracuyá, hierbabuena macerada y splash de espumante.",
      priceUSD: 6,
      popular: true
    }
  ],
  managerKpis: {
    activeReservations: 18,
    capacityPercentage: 88,
    todaySalesUSD: 1120,
    avgTicketUSD: 26
  },
  sampleBookings: [
    {
      id: "SAU-101",
      clientName: "Carlos Briceño",
      details: "Mesa Salón (4 pax)",
      time: "08:00 PM",
      status: "en_mesa",
      pax: 4,
      totalUSD: 45
    },
    {
      id: "SAU-102",
      clientName: "Valentina Rangel",
      details: "Experiencia Coctelera (3 pax)",
      time: "09:30 PM",
      status: "confirmada",
      pax: 3,
      totalUSD: 28
    }
  ]
},

  // GENOVIA STEAK HOUSE
  {
  slug: "genovia_val",
  batch: "dia4",
  archetype: "gourmet-booking",
  name: "Genovia Steak House",
  handle: "genovia_val",
  category: "Steakhouse & Dry-Aged",
  badgeText: "Cortes Madurados & Chef's Table",
  tagline: "Steakhouse contemporáneo en Mañongo: cortes nobles madurados Dry-Aged, ahumados a la leña y cava de vinos seleccionada.",
  heroTitle: "El Templo de los Cortes Nobles",
  heroHighlight: "y Carnes Maduradas en Valencia",
  heroSubtitle: "Reserva tu mesa VIP o experiencia Chef's Table, preselecciona tus cortes madurados y asegura tu velada con confirmación instantánea.",
  logo: "/marcas/genovia_val.jpg",
  coverImage: "/marcas/genovia_val-cover.jpg",
  palette: {
    primary: "#881337",
    primaryHover: "#4c0519",
    secondary: "#1c0b12",
    accent: "#e11d48",
    darkBg: "#0c0407",
    cardBg: "#180a10",
    textLight: "#fff1f2",
    textMuted: "#fda4af",
    border: "rgba(225, 29, 72, 0.25)",
    glow: "rgba(225, 29, 72, 0.3)"
  },
  typography: {
    fontDisplay: "font-serif",
    fontBody: "font-sans"
  },
  introText: "Ubicado en el C.C. Monte Triona en Mañongo (Valencia), Genovia es el referente de alta gama para los amantes de la carne madurada. Su cámara de Dry-Aging a la vista y su cava internacional convierten cada almuerzo ejecutivo o cena privada en un ritual gastronómico.",
  introStats: [
    {
      label: "Cortes Madurados",
      value: "Dry-Aged",
      detail: "Cámara de maduración controlada 45 días"
    },
    {
      label: "Ubicación Premium",
      value: "Monte Triona",
      detail: "Mañongo, Naguanagua - Valencia"
    },
    {
      label: "Experiencia Gourmet",
      value: "Chef's Table",
      detail: "Catas y maridajes exclusivos"
    }
  ],
  trustBadges: [
    "Reserva VIP con Confirmación",
    "Cava & Selección de Cortes",
    "Tasa Oficial BCV Automatizada"
  ],
  whatsappPitchCopy: "Hola equipo de Genovia Steak House! 🥩 Admiramos su extraordinaria propuesta de cortes madurados y carnes nobles en Mañongo. Diseñamos esta WebApp exclusiva con reserva de mesas VIP y Chef's Table, selector de cortes Dry-Aged con tasa BCV al día y confirmación a WhatsApp.\n\nPrueben la demo interactiva y vean su Reel comercial aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/genovia_val",
  address: "Av. Principal de Mañongo, C.C. Monte Triona, Local PB17, Naguanagua, Valencia, Edo. Carabobo",
  mapsUrl: "https://maps.google.com/?q=CC+Monte+Triona+Naguanagua+Valencia",
  hours: "Lunes a Jueves: 12:00 PM - 10:00 PM · Viernes y Sábados: 12:00 PM - 12:00 AM · Domingos: 12:00 PM - 10:00 PM",
  phone: "+58 412-0308674",
  instagramUrl: "https://www.instagram.com/genovia_val/",
  bookingType: "vip-table",
  bookingTitle: "Reserva de Mesas VIP & Chef's Table",
  bookingSubtitle: "Elige tu salón, preselecciona tu corte madurado y recibe confirmación al instante.",
  bookingOptions: [
    {
      id: "reserva-salon-genovia",
      name: "Mesa en Salón Principal & Cava (1 a 6 Pax)",
      description: "Mesa reservada en el salón noble con asesoría directa del sommelier de sala.",
      priceUSD: 0,
      unit: "reserva garantizada",
      badge: "Más Solicitada",
      features: [
        "Mesa en salón noble",
        "Carta digital de vinos",
        "Asesoría de cortes por el chef"
      ]
    },
    {
      id: "chefs-table-genovia",
      name: "Experiencia Chef's Table Madurados (4 a 8 Pax)",
      description: "Mesa privada frente a la parrilla de leña con menú degustación de 4 cortes madurados maridados con vino.",
      priceUSD: 160,
      unit: "experiencia 4 pax",
      badge: "Exclusivo",
      features: [
        "4 Tiempos de cortes Dry-Aged",
        "Maridaje con 2 botellas de vino",
        "Atención personal del Master Grill"
      ]
    },
    {
      id: "salon-privado-genovia",
      name: "Salón Ejecutivo Privado (Reuniones Corporativas)",
      description: "Espacio aislado climatizado con pantalla de proyección y servicio gastronómico continuo.",
      priceUSD: 80,
      unit: "bloque 3 horas",
      features: [
        "Privacidad total para 12 pax",
        "Pantalla de presentación",
        "Servicio dedicado de sala"
      ]
    }
  ],
  categories: [
    {
      id: "cortes-madurados",
      name: "Cortes Madurados Dry-Aged 🥩",
      icon: "🥩"
    },
    {
      id: "entradas-carpaccio",
      name: "Entradas Nobles & Carpaccios 🧀",
      icon: "🧀"
    },
    {
      id: "cava-maridaje",
      name: "Cava de Vinos & Destilados 🍷",
      icon: "🍷"
    }
  ],
  menuItems: [
    {
      id: "tomahawk-dry-aged-genovia",
      name: "Tomahawk Prime Dry-Aged 45 Días (1.2 kg)",
      category: "cortes-madurados",
      description: "Madurado en cámara de sal marina, sellado a la brasa con mantequilla de romero y sales ahumadas.",
      priceUSD: 48,
      badge: "Insignia",
      popular: true
    },
    {
      id: "picanha-prime-genovia",
      name: "Picanha Prime a la Leña de Roble",
      category: "cortes-madurados",
      description: "Corte tierno con capa de grasa crujiente, servido con vegetales grillados y puré trufado.",
      priceUSD: 26,
      popular: true
    },
    {
      id: "carpaccio-trufa-genovia",
      name: "Carpaccio de Lomito con Aceite de Trufa",
      category: "entradas-carpaccio",
      description: "Láminas finas de solomo crudo, lascas de parmesano reggiano madurado 24 meses y alcaparras fritas.",
      priceUSD: 14
    },
    {
      id: "vino-reserva-genovia",
      name: "Tinto Gran Reserva Valle de Guadalupe",
      category: "cava-maridaje",
      description: "Cabernet Sauvignon & Syrah con 18 meses en barrica de roble francés, notas de roble y frutos negros.",
      priceUSD: 38,
      popular: true
    }
  ],
  managerKpis: {
    activeReservations: 16,
    capacityPercentage: 92,
    todaySalesUSD: 2450,
    avgTicketUSD: 54
  },
  sampleBookings: [
    {
      id: "GEN-201",
      clientName: "Alejandro Mendoza",
      details: "Mesa Cava (5 pax)",
      time: "01:30 PM",
      status: "en_mesa",
      pax: 5,
      totalUSD: 180
    },
    {
      id: "GEN-202",
      clientName: "Grupo Corporativo Polar",
      details: "Salón Privado (8 pax)",
      time: "07:30 PM",
      status: "confirmada",
      pax: 8,
      totalUSD: 320
    }
  ]
},

  // YAKITORI BAR CARACAS
  {
  slug: "yakitoribarccs",
  batch: "dia4",
  archetype: "table-ordering",
  name: "Yakitori Bar Caracas",
  handle: "yakitoribarccs",
  category: "Izakaya & Asian Fusion",
  badgeText: "Cocina de Autor por Alex Wertenstein",
  tagline: "Auténtico Izakaya japonés y fusión de 6 culturas culinarias: brochetas al carbón, sushi bar contemporáneo y coctelería asiática en Valle Arriba.",
  heroTitle: "El Izakaya Contemporáneo",
  heroHighlight: "de Valle Arriba Market Center",
  heroSubtitle: "Auto-pedido continuo de brochetas yakitori y sushi rolls por QR en mesa, coctelería con sake y delivery directo sin comisiones.",
  logo: "/marcas/yakitoribarccs.jpg",
  coverImage: "/marcas/yakitoribarccs-cover.jpg",
  palette: {
    primary: "#ef4444",
    primaryHover: "#dc2626",
    secondary: "#18181b",
    accent: "#f87171",
    darkBg: "#09090b",
    cardBg: "#141418",
    textLight: "#fafafa",
    textMuted: "#a1a1aa",
    border: "rgba(239, 68, 68, 0.25)",
    glow: "rgba(239, 68, 68, 0.3)"
  },
  typography: {
    fontDisplay: "font-sans",
    fontBody: "font-sans"
  },
  introText: "Ubicado en el C.C. Valle Arriba Market Center en Caracas, Yakitori Bar fusiona 6 culturas gastronómicas asiáticas bajo la dirección del chef Alex Wertenstein. Brochetas al carbón binchotan, rolls vanguardistas y cócteles botánicos con sake.",
  introStats: [
    {
      label: "Cocina de Autor",
      value: "6 Culturas",
      detail: "Fusión por Alex Wertenstein"
    },
    {
      label: "Especialidad Brasa",
      value: "Yakitori",
      detail: "Brochetas tradicionales al carbón"
    },
    {
      label: "Ubicación Este",
      value: "Valle Arriba",
      detail: "Market Center PB - Caracas"
    }
  ],
  trustBadges: [
    "Comandas QR para Izakaya & Bar",
    "Menú Fusión con Tasa BCV",
    "Despacho Directo a Barra y Cocina"
  ],
  whatsappPitchCopy: "Hola equipo de Yakitori Bar Caracas! 🥢 Nos fascina su concepto izakaya en Valle Arriba. Para que sus clientes ordenen rondas continuas de yakitoris y cócteles sin esperar al salonero, diseñamos esta WebApp con auto-pedido QR en mesa y delivery directo a tasa BCV.\n\nMiren la demo interactiva y el video de 15s aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/yakitoribarccs",
  address: "C.C. Valle Arriba Market Center, Nivel PB / CC Galerías Sebucán, Caracas",
  mapsUrl: "https://maps.google.com/?q=Valle+Arriba+Market+Center+Caracas",
  hours: "Martes a Domingo: 12:00 PM - 11:00 PM · Lunes: 12:00 PM - 8:00 PM",
  phone: "+58 412-0308674",
  instagramUrl: "https://www.instagram.com/yakitoribarccs/",
  bookingType: "izakaya-table",
  bookingTitle: "Reserva de Mesa Izakaya & Sushi Bar",
  bookingSubtitle: "Asegura tu puesto en el sushi bar en vivo o mesas lounge de Valle Arriba.",
  bookingOptions: [
    {
      id: "reserva-mesa-izakaya",
      name: "Mesa en Salón Izakaya (2 a 6 Pax)",
      description: "Mesa en ambiente urbano contemporáneo con auto-pedido continuo de brochetas y rolls por QR.",
      priceUSD: 0,
      unit: "reserva garantizada",
      badge: "Más Popular",
      features: [
        "Auto-pedido QR directo a cocina",
        "Conversión a tasa oficial BCV",
        "División de cuenta fácil"
      ]
    },
    {
      id: "sushi-bar-counter",
      name: "Barra Sushi & Yakitori en Vivo (Frente al Chef)",
      description: "Puestos exclusivos frente al sushi bar y robata para presenciar el armado en tiempo real.",
      priceUSD: 0,
      unit: "puestos limitados",
      features: [
        "Vista directa a la robata y cortes",
        "Recomendaciones del chef en vivo",
        "Servicio express"
      ]
    },
    {
      id: "omakase-experience-yakitori",
      name: "Experiencia Omakase Degustación (5 Tiempos)",
      description: "Menú secreto de 5 tiempos diseñado por Alex Wertenstein con maridaje de sake y cóctel de bienvenida.",
      priceUSD: 55,
      unit: "por comensal",
      badge: "Chef Signature",
      features: [
        "5 Tiempos de degustación fusión",
        "Maridaje con sake japonés",
        "Cóctel de autor de bienvenida"
      ]
    }
  ],
  categories: [
    {
      id: "brochetas-yakitori",
      name: "Brochetas Yakitori al Carbón 🍢",
      icon: "🍢"
    },
    {
      id: "sushi-fusion-rolls",
      name: "Sushi Bar & Fusión Rolls 🍣",
      icon: "🍣"
    },
    {
      id: "woks-tartares",
      name: "Woks, Ceviches & Tartares 🥢",
      icon: "🥢"
    },
    {
      id: "cocteleria-sake",
      name: "Sake & Coctelería de Autor 🍶",
      icon: "🍶"
    }
  ],
  menuItems: [
    {
      id: "yakitori-trio-seleccion",
      name: "Trío de Brochetas Yakitori Robata",
      category: "brochetas-yakitori",
      description: "Pollo teriyaki glaseado, lomo con ajonjolí tostado y panceta de cerdo a las brasas de carbón binchotan.",
      priceUSD: 12,
      badge: "Top 1 Robata",
      popular: true
    },
    {
      id: "maguro-ninja-roll",
      name: "Maguro Ninja Roll Especial (10 Und)",
      category: "sushi-fusion-rolls",
      description: "Atún fresco marinado, aguacate, masago, topping de tartar de salmón flameado y salsa unagi trufada.",
      priceUSD: 14.5,
      popular: true
    },
    {
      id: "yakisoba-mariscos",
      name: "Yakisoba de Mariscos Salteados al Wok",
      category: "woks-tartares",
      description: "Fideos japoneses al wok con camarones, calamares, vegetales crocantes y salsa yakitori dulce.",
      priceUSD: 16
    },
    {
      id: "tokyo-mule-sake",
      name: "Cóctel Tokyo Mule con Sake & Yuzu",
      category: "cocteleria-sake",
      description: "Sake Junmai, cordial de yuzu japonés, ginger beer artesanal y láminas de pepino fresco.",
      priceUSD: 8,
      popular: true
    }
  ],
  managerKpis: {
    activeReservations: 22,
    capacityPercentage: 90,
    todaySalesUSD: 1680,
    avgTicketUSD: 32
  },
  sampleBookings: [
    {
      id: "YAK-301",
      clientName: "Mariana Capriles",
      details: "Mesa Salón (3 pax)",
      time: "08:00 PM",
      status: "en_mesa",
      pax: 3,
      totalUSD: 68
    },
    {
      id: "YAK-302",
      clientName: "Ignacio Zuloaga",
      details: "Barra Robata (2 pax)",
      time: "09:15 PM",
      status: "confirmada",
      pax: 2,
      totalUSD: 42
    }
  ]
},

  // SANTO GRILL CARACAS
  {
  slug: "santogrillccs",
  batch: "dia4",
  archetype: "table-ordering",
  name: "Santo Grill Caracas",
  handle: "santogrillccs",
  category: "Contemporary Grill & Parrillas",
  badgeText: "Steakhouse Familiar & Carnes Premium",
  tagline: "Steakhouse contemporáneo en Santa Paula: cortes al carbón, generosas parrillas familiares para compartir y el legendario ceviche de chicharrón.",
  heroTitle: "El Auténtico Sabor de la Parrilla",
  heroHighlight: "Familiar en Santa Paula",
  heroSubtitle: "Configura términos de carne, pide guarniciones y bebidas directo a la cocina con QR en mesa y divide tu cuenta al instante.",
  logo: "/marcas/santogrillccs.jpg",
  coverImage: "/marcas/santogrillccs-cover.jpg",
  palette: {
    primary: "#d97706",
    primaryHover: "#b45309",
    secondary: "#451a03",
    accent: "#f59e0b",
    darkBg: "#0e0804",
    cardBg: "#1c1007",
    textLight: "#fef3c7",
    textMuted: "#fde68a",
    border: "rgba(245, 158, 11, 0.25)",
    glow: "rgba(245, 158, 11, 0.3)"
  },
  typography: {
    fontDisplay: "font-serif",
    fontBody: "font-sans"
  },
  introText: "Ubicado en el Centro Profesional Santa Paula (Torre B PB) en Caracas, Santo Grill es el punto de encuentro de las familias y ejecutivos. Con cortes al carbón, cortesía de caldo de huesos y su famoso ceviche de chicharrón, brinda una experiencia parrillera insuperable.",
  introStats: [
    {
      label: "Parrillas Familiares",
      value: "Generosas",
      detail: "Ideales para compartir en grupo"
    },
    {
      label: "Entrada Emblema",
      value: "Ceviche Chicharrón",
      detail: "Fusión crujiente y cítrica única"
    },
    {
      label: "Ubicación Santa Paula",
      value: "Torre B PB",
      detail: "Centro Profesional Santa Paula"
    }
  ],
  trustBadges: [
    "Pedidos Familiares sin Fricción",
    "Tasa Oficial BCV al Instante",
    "Estacionamiento Privado Santa Paula"
  ],
  whatsappPitchCopy: "Hola equipo de Santo Grill Caracas! 🥩 Su ceviche de chicharrón y sus parrillas en Santa Paula son una referencia de excelencia. Creamos esta WebApp con auto-pedido QR en mesa para que las mesas familiares ordenen términos de carne y bebidas sin esperar al salonero.\n\nVean la demo en vivo y su Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/santogrillccs",
  address: "Centro Profesional Santa Paula, Torre B, Nivel PB, Santa Paula, Caracas",
  mapsUrl: "https://maps.google.com/?q=Centro+Profesional+Santa+Paula+Caracas",
  hours: "Lunes a Sábado: 11:30 AM - 11:00 PM · Domingos: 11:30 AM - 10:00 PM",
  phone: "+58 412-0308674",
  instagramUrl: "https://www.instagram.com/santogrillccs/",
  bookingType: "grill-table",
  bookingTitle: "Reserva de Mesas Parrilleras & Grupos",
  bookingSubtitle: "Asegura tu mesa en salón climatizado o terraza para grupos familiares.",
  bookingOptions: [
    {
      id: "reserva-mesa-familiar-santo",
      name: "Mesa Familiar en Salón Climatizado (4 a 10 Pax)",
      description: "Mesa amplia con servicio de bienvenida de caldo de huesos y auto-pedido de términos de carne por QR.",
      priceUSD: 0,
      unit: "reserva garantizada",
      badge: "Más Solicitada",
      features: [
        "Caldo de huesos de cortesía",
        "Auto-pedido QR de guarniciones",
        "Estacionamiento privado"
      ]
    },
    {
      id: "reserva-terraza-santo",
      name: "Mesa en Terraza Grill al Aire Libre (2 a 6 Pax)",
      description: "Mesa al aire libre con vista a los jardines de Santa Paula y ambiente parrillero relajado.",
      priceUSD: 0,
      unit: "reserva gratuita",
      features: [
        "Ambiente exterior",
        "Atención rápida de bebidas",
        "Tasa BCV automática"
      ]
    },
    {
      id: "paquete-corporativo-santo",
      name: "Almuerzo Corporativo Santo Grill (6 a 12 Pax)",
      description: "Parrillada mixta gigante + 2 entradas de ceviche de chicharrón + bebidas y postres incluidos.",
      priceUSD: 140,
      unit: "paquete 8 pax",
      badge: "Mejor Valor",
      features: [
        "Parrillada gigante para compartir",
        "2 Ceviches de chicharrón",
        "Bebidas no alcohólicas incluidas"
      ]
    }
  ],
  categories: [
    {
      id: "parrillas-santo",
      name: "Parrillas Familiares al Carbón 🥩",
      icon: "🥩"
    },
    {
      id: "cortes-individuales",
      name: "Cortes Nobles & Lomitos 🍖",
      icon: "🍖"
    },
    {
      id: "entradas-ceviches",
      name: "Ceviche de Chicharrón & Entradas 🥓",
      icon: "🥓"
    },
    {
      id: "burgers-grill",
      name: "Hamburguesas Angus al Carbón 🍔",
      icon: "🍔"
    }
  ],
  menuItems: [
    {
      id: "parrilla-santo-familiar",
      name: "Parrilla Santo Grill Familiar Completa",
      category: "parrillas-santo",
      description: "Punta trasera, solomo a la brasa, pechuga marinada, chorizo criollo, morcilla, yuca frita y ensalada mixta.",
      priceUSD: 38,
      badge: "Top Ventas",
      popular: true
    },
    {
      id: "ceviche-de-chicharrón-santo",
      name: "Ceviche de Chicharrón Crujiente",
      category: "entradas-ceviches",
      description: "Chicharrón crujiente bañado en leche de tigre cítrica, cebolla morada en julianas, cilantro y chips de plátano.",
      priceUSD: 11,
      popular: true
    },
    {
      id: "lomito-parrilla-santo",
      name: "Medallón de Lomito al Carbón (350g)",
      category: "cortes-individuales",
      description: "Corte tierno cocinado al término deseado con mantequilla de ajo, ensalada cesar y papas fritas.",
      priceUSD: 18.5
    },
    {
      id: "santo-grill-angus-burger",
      name: "Santo Grill Angus Burger con Tocineta",
      category: "burgers-grill",
      description: "200g de carne Angus al carbón, queso cheddar fundido, tocineta ahumada crujiente y salsa especial de la casa.",
      priceUSD: 12,
      popular: true
    }
  ],
  managerKpis: {
    activeReservations: 24,
    capacityPercentage: 91,
    todaySalesUSD: 2150,
    avgTicketUSD: 42
  },
  sampleBookings: [
    {
      id: "SAN-401",
      clientName: "Familia Gómez Pardo",
      details: "Mesa Familiar (6 pax)",
      time: "01:30 PM",
      status: "en_mesa",
      pax: 6,
      totalUSD: 95
    },
    {
      id: "SAN-402",
      clientName: "Rodrigo Benítez",
      details: "Terraza Grill (4 pax)",
      time: "08:00 PM",
      status: "confirmada",
      pax: 4,
      totalUSD: 62
    }
  ]
},

  // KIÚBOLE TEX-MEX FOOD
  {
  slug: "kiuboletexmexfood",
  batch: "dia4",
  archetype: "direct-delivery",
  name: "Kiúbole Tex-Mex Food",
  handle: "kiuboletexmexfood",
  category: "Tex-Mex & Tacos de Birria",
  badgeText: "Street Food Mexicano en Calle 72",
  tagline: "El auténtico sabor tex-mex en la Calle 72: tacos de birria dorados con consomé, burritos gigantes supremos, quesadillas y nachos monster.",
  heroTitle: "Tacos de Birria y Sabor Tex-Mex",
  heroHighlight: "Directo a tu Casa en Maracaibo",
  heroSubtitle: "Catálogo de delivery directo sin comisiones: elige tus tacos y salsas, calcula en Bolívares con tasa BCV y envía tu comanda en 1 toque a WhatsApp.",
  logo: "/marcas/kiuboletexmexfood.jpg",
  coverImage: "/marcas/kiuboletexmexfood-cover.jpg",
  palette: {
    primary: "#ea580c",
    primaryHover: "#c2410c",
    secondary: "#7f1d1d",
    accent: "#f97316",
    darkBg: "#0f0505",
    cardBg: "#1c0b0b",
    textLight: "#fff7ed",
    textMuted: "#fdba74",
    border: "rgba(249, 115, 22, 0.25)",
    glow: "rgba(249, 115, 22, 0.3)"
  },
  typography: {
    fontDisplay: "font-sans",
    fontBody: "font-sans"
  },
  introText: "Ubicado en la Av. 10 entre Calles 72 y 73 en Maracaibo, Kiúbole es el epicentro del street food mexicano. Sus famosos tacos de birria con queso fundido y consomé para dipear se han convertido en el antojo nocturno por excelencia.",
  introStats: [
    {
      label: "Especialidad",
      value: "Tacos de Birria",
      detail: "Con consomé tradicional para dipear"
    },
    {
      label: "Ubicación 72",
      value: "Av. 10 c/ Calle 72",
      detail: "El corazón gastronómico de Maracaibo"
    },
    {
      label: "Despacho Nocturno",
      value: "5PM a 12AM",
      detail: "Delivery y Takeaway ultra rápido"
    }
  ],
  trustBadges: [
    "Delivery Directo sin Comisiones",
    "Tasa BCV Automatizada",
    "Pedido Exprés a WhatsApp"
  ],
  whatsappPitchCopy: "Hola equipo de Kiúbole Tex-Mex! 🌮 Sus tacos de birria en la 72 son legendarios. Para eliminar el colapso del chat los fines de semana y que sus clientes pidan en 30 segundos, desarrollamos este catálogo de delivery directo con tasa BCV automática.\n\nPrueben la demo interactiva y vean su Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/kiuboletexmexfood",
  address: "Av. 10 entre Calles 72 y 73, Sector Tierra Negra, Maracaibo",
  mapsUrl: "https://maps.google.com/?q=Calle+72+con+Av+10+Maracaibo",
  hours: "Martes a Domingo: 5:00 PM - 11:30 PM (Viernes y Sábados hasta las 12:00 AM)",
  phone: "+58 412-0308674",
  instagramUrl: "https://www.instagram.com/kiuboletexmexfood/",
  bookingType: "delivery-takeaway",
  bookingTitle: "Catálogo Delivery Directo & Pick-Up",
  bookingSubtitle: "Ordena tus combos tex-mex favoritos sin pagar recargos de intermediarios.",
  bookingOptions: [
    {
      id: "combo-birria-trio",
      name: "Combo Trío Birria Lovers (3 Tacos + Consomé + Bebida)",
      description: "3 Tacos dorados a la plancha rellenos de carne desmechada, queso fundido, cebolla, cilantro y consomé caliente.",
      priceUSD: 8.5,
      unit: "combo personal",
      badge: "Más Vendido",
      features: [
        "3 Tacos dorados con queso",
        "Vaso de consomé de birria",
        "Bebida fría incluida",
        "Salsa picante de la casa"
      ]
    },
    {
      id: "combo-monster-burrito",
      name: "Combo Burrito Supremo Gigante + Papas",
      description: "Tortilla de trigo XXL rellena de carne asada, frijoles refritos, arroz mexicano, guacamole y queso cheddar.",
      priceUSD: 8.5,
      unit: "combo completo",
      badge: "Super Relleno",
      features: [
        "Burrito XXL de carne asada",
        "Porción de papas fritas",
        "Salsa ranch y picante verde"
      ]
    },
    {
      id: "box-fiesta-kiubole",
      name: "Fiesta Box Kiúbole (Para 2 o 3 Personas)",
      description: "6 Tacos variados (Birria y Al Pastor) + bandeja de Nachos Monster con queso y guacamole + 2 refrescos.",
      priceUSD: 19.5,
      unit: "pack para compartir",
      features: [
        "6 Tacos a elección",
        "Bandeja de Nachos con queso",
        "2 Consomés para dipear",
        "2 Bebidas frías"
      ]
    }
  ],
  categories: [
    {
      id: "tacos-birria",
      name: "Tacos de Birria & Al Pastor 🌮",
      icon: "🌮"
    },
    {
      id: "burritos-quesadillas",
      name: "Burritos Gigantes & Quesadillas 🌯",
      icon: "🌯"
    },
    {
      id: "nachos-snacks",
      name: "Nachos Monster & Snacks 🧀",
      icon: "🧀"
    },
    {
      id: "bebidas-mexicanas",
      name: "Margaritas & Bebidas Frías 🍹",
      icon: "🍹"
    }
  ],
  menuItems: [
    {
      id: "tacos-birria-consome",
      name: "Trío de Tacos de Birria con Queso & Consomé",
      category: "tacos-birria",
      description: "Tortillas de maíz doradas en la grasa de birria con queso derretido, carne jugosa y tazón de consomé especiado.",
      priceUSD: 8.5,
      badge: "Viral #1",
      popular: true
    },
    {
      id: "burrito-kiubole-supremo",
      name: "Burrito Supremo de Carne Asada al Carbón",
      category: "burritos-quesadillas",
      description: "Carne asada, frijoles negros, arroz a la mexicana, guacamole recién hecho, crema agria y queso.",
      priceUSD: 7.5,
      popular: true
    },
    {
      id: "nachos-kiubole-monster",
      name: "Nachos Monster con Chili & Queso Cheddar",
      category: "nachos-snacks",
      description: "Totopos crujientes bañados en queso cheddar caliente, carne con chili, jalapeños encurtidos y pico de gallo.",
      priceUSD: 9
    },
    {
      id: "quesadilla-al-pastor",
      name: "Quesadilla Gigante de Cerdo Al Pastor",
      category: "burritos-quesadillas",
      description: "Cerdo marinado con achiote y piña asada, queso gouda fundido en tortilla dorada de 30cm.",
      priceUSD: 7,
      popular: true
    }
  ],
  managerKpis: {
    activeReservations: 35,
    capacityPercentage: 96,
    todaySalesUSD: 980,
    avgTicketUSD: 14
  },
  sampleBookings: [
    {
      id: "KIU-501",
      clientName: "José Manuel Silva",
      details: "Combo Birria Lovers (Takeaway)",
      time: "07:30 PM",
      status: "en_mesa",
      pax: 1,
      totalUSD: 8.5
    },
    {
      id: "KIU-502",
      clientName: "Andrea Villalobos",
      details: "Fiesta Box Kiúbole (Delivery)",
      time: "08:45 PM",
      status: "confirmada",
      pax: 3,
      totalUSD: 19.5
    }
  ]
},

  // LA PAGODA CARACAS
  {
  slug: "lapagodaccs",
  batch: "dia4",
  archetype: "gourmet-booking",
  name: "La Pagoda Caracas",
  handle: "lapagodaccs",
  category: "Alta Cocina Cantonesa & Banquete",
  badgeText: "Restaurante & Terraza en El Laguito",
  tagline: "El templo de la auténtica cocina cantonesa tradicional en Caracas: salones imperiales, terraza con vista a la laguna de El Laguito y banquetes familiares.",
  heroTitle: "Tradición e Historia de la",
  heroHighlight: "Alta Cocina Cantonesa en Caracas",
  heroSubtitle: "Reserva salones imperiales climatizados o mesas en terraza con vista al lago, pre-ordena banquetes tradicionales y recibe confirmación al instante.",
  logo: "/marcas/lapagodaccs.jpg",
  coverImage: "/marcas/lapagodaccs-cover.jpg",
  palette: {
    primary: "#b91c1c",
    primaryHover: "#991b1b",
    secondary: "#450a0a",
    accent: "#eab308",
    darkBg: "#0b0404",
    cardBg: "#180909",
    textLight: "#fefce8",
    textMuted: "#fde047",
    border: "rgba(234, 179, 8, 0.25)",
    glow: "rgba(234, 179, 8, 0.3)"
  },
  typography: {
    fontDisplay: "font-serif",
    fontBody: "font-sans"
  },
  introText: "Ubicado dentro del exclusivo Club El Laguito en Los Próceres (Caracas), La Pagoda es el restaurante cantonés más prestigioso de la capital con más de 200K seguidores. Sus amplios salones imperiales y su terraza frente al lago ofrecen una atmósfera inigualable para banquetes familiares y corporativos.",
  introStats: [
    {
      label: "Ticket Promedio",
      value: "$28 - $35",
      detail: "Por comensal en salón y terraza El Laguito"
    },
    {
      label: "Capacidad Salón",
      value: "+180 pax",
      detail: "Espacio para banquetes familiares y corporativos"
    },
    {
      label: "Tiempo de Respuesta",
      value: "< 30 seg",
      detail: "Automatización de reservas vía WhatsApp/Web"
    }
  ],
  trustBadges: [
    "Auténtica Cocina Cantonesa Tradicional",
    "Ubicación Exclusiva Club El Laguito",
    "Salones VIP & Terraza Panorámica"
  ],
  whatsappPitchCopy: "Hola equipo de La Pagoda Caracas! 🏮 Admiramos su liderazgo indiscutible en cocina cantonesa dentro de El Laguito. Diseñamos una WebApp especializada para automatizar la reserva de salones imperiales y mesas en terraza, con pre-orden de banquetes y tasa BCV en vivo.\n\nPueden explorar la demo y ver su video promocional aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/lapagodaccs",
  address: "Instalaciones del Club El Laguito, Paseo Los Próceres / Santa Mónica, Caracas",
  mapsUrl: "https://maps.google.com/?q=Club+El+Laguito+Los+Proceres+Caracas",
  hours: "Lunes a Domingo: 11:30 AM - 11:45 PM (Servicio continuo)",
  phone: "+58 412-0308674",
  instagramUrl: "https://www.instagram.com/lapagodaccs/",
  bookingType: "imperial-booking",
  bookingTitle: "Reserva de Mesas & Salones Imperiales",
  bookingSubtitle: "Selecciona tu salón privado o terraza panorámica frente al lago.",
  bookingOptions: [
    {
      id: "reserva-mesa-terraza-pagoda",
      name: "Mesa en Terraza Panorámica El Laguito (2 a 6 Pax)",
      description: "Mesa con vista directa a la laguna y brisa natural para almuerzos o cenas familiares.",
      priceUSD: 0,
      unit: "reserva garantizada",
      badge: "Vista Panorámica",
      features: [
        "Ubicación frente al agua",
        "Carta digital cantonesa",
        "Atención prioritaria de sala"
      ]
    },
    {
      id: "salon-imperial-banquete",
      name: "Salón Imperial con Mesa Giratoria (8 a 14 Pax)",
      description: "Salón privado climatizado con mesa circular giratoria tradicional china para banquetes compartidos.",
      priceUSD: 0,
      unit: "reserva de salón",
      badge: "Tradición China",
      features: [
        "Mesa giratoria para 14 personas",
        "Privacidad para celebraciones",
        "Pre-selección de platos al wok"
      ]
    },
    {
      id: "banquete-degustacion-dimsum",
      name: "Banquete Pagoda de Oro (4 Tiempos - 6 Pax)",
      description: "Costillas asadas cantonesas + Pato Pekín con crepes + Arroz especial Pagoda + Wantanes al vapor y té jazmín.",
      priceUSD: 110,
      unit: "banquete 6 pax",
      badge: "Menú Banquete",
      features: [
        "Pato Pekín con crepes y hoisin",
        "Costillas asadas al estilo cantonés",
        "Arroz tres carnes y wantanes",
        "Té de jazmín tradicional"
      ]
    }
  ],
  categories: [
    {
      id: "especialidades-cantonesas",
      name: "Especialidades Cantonesas & Costillas 🍖",
      icon: "🍖"
    },
    {
      id: "arroces-tallarines",
      name: "Arroces Especiales & Tallarines 🍚",
      icon: "🍚"
    },
    {
      id: "dim-sum-entradas",
      name: "Dim Sum & Wantanes al Vapor 🥟",
      icon: "🥟"
    },
    {
      id: "mariscos-pescados",
      name: "Pescados & Mariscos Tradicionales 🦐",
      icon: "🦐"
    }
  ],
  menuItems: [
    {
      id: "costillas-asadas-pagoda",
      name: "Costillas Asadas Cantonesas al Estilo Pagoda",
      category: "especialidades-cantonesas",
      description: "Costillas de cerdo glaseadas en salsa barbacoa china con cinco especias y miel pura de abeja.",
      priceUSD: 18,
      badge: "Plato Emblema",
      popular: true
    },
    {
      id: "arroz-especial-tres-carnes",
      name: "Arroz Frito Especial Gran Pagoda",
      category: "arroces-tallarines",
      description: "Arroz jazmín salteado al wok con camarones, lechón asado, pollo tierno, cebollín y brotes de soya.",
      priceUSD: 13.5,
      popular: true
    },
    {
      id: "wantanes-camaron-vapor",
      name: "Canasta Dim Sum de Wantán de Camarón (6 Und)",
      category: "dim-sum-entradas",
      description: "Wantanes rellenos de camarones frescos al vapor servidos en vaporera de bambú con salsa de soya y jengibre.",
      priceUSD: 8.5
    },
    {
      id: "pollo-miel-ajonjoli",
      name: "Pollo Crujiente con Miel & Ajonjolí Tostado",
      category: "especialidades-cantonesas",
      description: "Bocados de pechuga extra crocantes bañados en reducción de miel y espolvoreados con ajonjolí blanco.",
      priceUSD: 15,
      popular: true
    }
  ],
  managerKpis: {
    activeReservations: 28,
    capacityPercentage: 93,
    todaySalesUSD: 3100,
    avgTicketUSD: 38
  },
  sampleBookings: [
    {
      id: "PAG-601",
      clientName: "Familia Chen Wong",
      details: "Salón Imperial (12 pax)",
      time: "01:00 PM",
      status: "en_mesa",
      pax: 12,
      totalUSD: 240
    },
    {
      id: "PAG-602",
      clientName: "Gustavo Vollmer",
      details: "Terraza Lago (4 pax)",
      time: "08:30 PM",
      status: "confirmada",
      pax: 4,
      totalUSD: 120
    }
  ]
},

  // TULUM GASTROBAR & LOUNGE
  {
  slug: "tulum_bqto",
  batch: "dia4",
  archetype: "table-ordering",
  name: "Tulum Gastrobar & Lounge",
  handle: "tulum_bqto",
  category: "Gastrobar Boho-Chic & Coctelería",
  badgeText: "Experiencia Boho-Chic en Este de Bqto",
  tagline: "Gastrobar & lounge inspirado en la Riviera Maya: fusión gourmet, coctelería botánica con cocuy de autor, terraza al aire libre y noches de DJ.",
  heroTitle: "La Energía Mística de la Riviera Maya",
  heroHighlight: "en el Este de Barquisimeto",
  heroSubtitle: "Auto-pedido por QR en mesa para rondas de cócteles y tapas, reserva de mesas lounge con DJ y conversión instantánea a tasa oficial BCV.",
  logo: "/marcas/tulum_bqto.jpg",
  coverImage: "/marcas/tulum_bqto-cover.jpg",
  palette: {
    primary: "#0d9488",
    primaryHover: "#0f766e",
    secondary: "#1c1917",
    accent: "#14b8a6",
    darkBg: "#071211",
    cardBg: "#0f211f",
    textLight: "#f0fdfa",
    textMuted: "#5eead4",
    border: "rgba(20, 184, 166, 0.25)",
    glow: "rgba(20, 184, 166, 0.3)"
  },
  typography: {
    fontDisplay: "font-serif",
    fontBody: "font-sans"
  },
  introText: "Ubicado en la zona este de Barquisimeto (detrás del C.C. Sambil), Tulum Gastrobar transporta a sus visitantes con su arquitectura boho-chic, antorchas y vegetación tropical. Fusión de mariscos a las brasas, tapas de autor y coctelería con destilados premium y cocuy larense.",
  introStats: [
    {
      label: "Rotación de Mesas",
      value: "+35%",
      detail: "Pedidos instantáneos a barra sin demoras"
    },
    {
      label: "Ticket Coctelería",
      value: "$18 - $25",
      detail: "Consumo promedio en terraza & lounge nocturno"
    },
    {
      label: "Efectividad en Mesa",
      value: "100%",
      detail: "Menú interactivo visual con fotos y cócteles por QR"
    }
  ],
  trustBadges: [
    "Gastrobar Fusión & Coctelería de Autor",
    "Ambiente Boho-Chic Este de Bqto",
    "Experiencia Terraza & DJ Nights"
  ],
  whatsappPitchCopy: "Hola equipo de Tulum Barquisimeto! 🌴 Su concepto boho-chic y su coctelería de autor en el este de la ciudad son increíbles. Para agilizar los pedidos de rondas en noches de DJ y terraza llena, les diseñamos esta WebApp con auto-pedido QR en mesa y tasa BCV en vivo.\n\nMiren la demo y su video promocional aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/tulum_bqto",
  address: "Av. Los Leones, detrás del C.C. Sambil, Zona Este, Barquisimeto, Edo. Lara",
  mapsUrl: "https://maps.google.com/?q=Av+Los+Leones+Sambil+Barquisimeto",
  hours: "Martes a Domingo: 12:00 PM - 2:00 AM (Almuerzos ejecutivos de día, Lounge de noche)",
  phone: "+58 412-0308674",
  instagramUrl: "https://www.instagram.com/tulum_bqto/",
  bookingType: "lounge-table",
  bookingTitle: "Reserva de Mesas Lounge & Terraza DJ",
  bookingSubtitle: "Elige tu mesa en terraza mística o salón interior climatizado.",
  bookingOptions: [
    {
      id: "reserva-mesa-terraza-tulum",
      name: "Mesa en Terraza Boho-Chic (2 a 6 Pax)",
      description: "Mesa al aire libre rodeada de palmeras y antorchas con auto-pedido continuo de cócteles y tapas.",
      priceUSD: 0,
      unit: "reserva gratuita",
      badge: "Ambiente Místico",
      features: [
        "Ubicación en terraza",
        "Auto-pedido QR directo al bartender",
        "Carta dual USD / Bs oficial"
      ]
    },
    {
      id: "mesa-vip-dj-tulum",
      name: "Mesa VIP Lounge cerca de Cabina DJ (Celebraciones)",
      description: "Mesa lounge principal frente a la cabina del DJ con servicio de botellas y shisha premium.",
      priceUSD: 50,
      unit: "consumo mínimo mesa",
      badge: "Noche de Fiesta",
      features: [
        "Ubicación preferencial DJ",
        "Servicio de shishas y botellas",
        "Atención VIP sin colas"
      ]
    },
    {
      id: "almuerzo-ejecutivo-tulum",
      name: "Almuerzo Ejecutivo Fusión (Lunes a Viernes)",
      description: "Entrada + Plato fuerte a las brasas + Bebida y café en ambiente relajado para negocios.",
      priceUSD: 14,
      unit: "por persona",
      features: [
        "3 Tiempos ejecutivos",
        "Wi-Fi de alta velocidad",
        "Servicio ágil en 20 min"
      ]
    }
  ],
  categories: [
    {
      id: "tapas-mar-tierra",
      name: "Tapas de Autor & Mariscos al Carbón 🐙",
      icon: "🐙"
    },
    {
      id: "platos-fuertes-grill",
      name: "Cortes a las Brasas & Fusión 🥩",
      icon: "🥩"
    },
    {
      id: "cocteleria-tulum",
      name: "Coctelería de Autor & Cocuy Premium 🍸",
      icon: "🍸"
    }
  ],
  menuItems: [
    {
      id: "pulpo-brasas-tulum",
      name: "Pulpo Asado a las Brasas con Papas Rústicas",
      category: "tapas-mar-tierra",
      description: "Tentáculo de pulpo sellado al carbón con pimentón de la vera, aceite de oliva virgen y papas doradas.",
      priceUSD: 17,
      badge: "Chef Signature",
      popular: true
    },
    {
      id: "tacos-costilla-ahumada",
      name: "Tacos de Costilla Ahumada en Reducción de Panela",
      category: "tapas-mar-tierra",
      description: "Trío de tacos en tortilla de maíz azul con costilla desmechada, cebolla encurtida y aguacate.",
      priceUSD: 13,
      popular: true
    },
    {
      id: "coctel-mayantulum",
      name: "Cóctel Mayan Tulum con Cocuy Larense",
      category: "cocteleria-tulum",
      description: "Cocuy de penca artesanal clarificado, infusión de maracuyá y chile dulce, borde con sal de gusano.",
      priceUSD: 7.5,
      popular: true
    },
    {
      id: "roll-tulum-flameado",
      name: "Roll Tulum Fusión Flameado en Mesa",
      category: "tapas-mar-tierra",
      description: "Relleno de langostino tempura y queso crema, envuelto en salmón fresco y flameado con licor de coco.",
      priceUSD: 14
    }
  ],
  managerKpis: {
    activeReservations: 26,
    capacityPercentage: 94,
    todaySalesUSD: 1980,
    avgTicketUSD: 28
  },
  sampleBookings: [
    {
      id: "TUL-701",
      clientName: "Mariángel Escalona",
      details: "Mesa VIP DJ (6 pax)",
      time: "10:00 PM",
      status: "en_mesa",
      pax: 6,
      totalUSD: 110
    },
    {
      id: "TUL-702",
      clientName: "Dr. Eduardo Colmenares",
      details: "Terraza Boho (4 pax)",
      time: "08:30 PM",
      status: "confirmada",
      pax: 4,
      totalUSD: 75
    }
  ]
},

  // HAND ROLL SUSHI VE
  {
  slug: "handroll_ve",
  batch: "dia4",
  archetype: "direct-delivery",
  name: "Hand Roll Sushi VE",
  handle: "handroll.ve",
  category: "Handrolls & Poke Bowls",
  badgeText: "Fast-Casual Japonés en Sambil Maracaibo",
  tagline: "Concepto fast-casual de sushi y poke: handrolls crujientes para comer con las manos y poke bowls 100% personalizables con ingredientes frescos.",
  heroTitle: "Handrolls Crujientes y Poke Bowls",
  heroHighlight: "Personalizados al Instante",
  heroSubtitle: "Arma tu Poke o trío de Handrolls paso a paso desde el celular, ahórrate la fila en la feria y envía tu pedido a cocina sin comisiones.",
  logo: "/marcas/handroll_ve.jpg",
  coverImage: "/marcas/handroll_ve-cover.jpg",
  palette: {
    primary: "#0891b2",
    primaryHover: "#0e7490",
    secondary: "#1e293b",
    accent: "#06b6d4",
    darkBg: "#060f17",
    cardBg: "#0c1c2b",
    textLight: "#ecfeff",
    textMuted: "#67e8f9",
    border: "rgba(6, 182, 212, 0.25)",
    glow: "rgba(6, 182, 212, 0.3)"
  },
  typography: {
    fontDisplay: "font-sans",
    fontBody: "font-sans"
  },
  introText: "Ubicado en el Nivel Feria del C.C. Sambil Maracaibo, Handroll revoluciona el sushi tradicional con un formato cilíndrico extra crujiente pensado para disfrutar sin palillos, junto a un salad-bar interactivo para armar Poke Bowls a la medida.",
  introStats: [
    {
      label: "Ahorro en Fila",
      value: "-65%",
      detail: "Auto-pedido QR desde el teléfono en feria"
    },
    {
      label: "Ticket Promedio",
      value: "$10 - $14",
      detail: "Combos de handrolls y poke bowls frescos"
    },
    {
      label: "Margen Recuperado",
      value: "0% comisiones",
      detail: "Canal de pedido directo sin intermediarios"
    }
  ],
  trustBadges: [
    "Handrolls Frescos al Instante",
    "Sede C.C. Sambil Maracaibo",
    "Poke Bowls 100% Personalizables"
  ],
  whatsappPitchCopy: "Hola equipo de Handroll! 🍣 Su propuesta de handrolls y poke bowls en el Sambil Maracaibo es súper fresca y visual. Para acelerar las órdenes en hora pico de feria y que sus clientes personalicen su poke desde el móvil, creamos esta WebApp express.\n\nPrueben la demo interactiva y el Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/handroll_ve",
  address: "C.C. Sambil Maracaibo, Nivel Feria / Gourmet, Av. Guajira, Maracaibo",
  mapsUrl: "https://maps.google.com/?q=Sambil+Maracaibo+Av+Guajira",
  hours: "Lunes a Domingo: 11:00 AM - 9:00 PM (Horario Continuo de Mall)",
  phone: "+58 412-0308674",
  instagramUrl: "https://www.instagram.com/handroll.ve/",
  bookingType: "express-pickup",
  bookingTitle: "Constructor de Poke Bowls & Handroll Packs",
  bookingSubtitle: "Personaliza tus ingredientes y retira en caja sin esperar en fila.",
  bookingOptions: [
    {
      id: "trio-handrolls-combo",
      name: "Trío Handrolls Especial (3 Piezas + Bebida)",
      description: "Elige 3 handrolls a tu gusto (Salmón, Atún, Ebi Tempura o Kani) envueltos en alga nori crocante + té frío japonés.",
      priceUSD: 12.5,
      unit: "combo personal",
      badge: "Más Vendido",
      features: [
        "3 Handrolls crujientes a elección",
        "Alga nori tostada al momento",
        "Bebida fría incluida"
      ]
    },
    {
      id: "poke-bowl-custom",
      name: "Poke Bowl 100% Personalizado (Base + Proteína + Toppings)",
      description: "Arma tu bowl: base de arroz sushi o quinoa, salmón fresco o atún, aguacate, edamame, mango, wakame y salsa ponzu.",
      priceUSD: 11.5,
      unit: "bowl completo",
      badge: "Saludable & Fresco",
      features: [
        "Doble proteína fresca",
        "4 Toppings y crujientes a elección",
        "Salsas artesanales japonesas"
      ]
    },
    {
      id: "handroll-party-pack",
      name: "Handroll Party Pack (6 Piezas + 2 Bebidas)",
      description: "Pack perfecto para compartir: 6 handrolls variados de autor en caja térmica especial + 2 bebidas.",
      priceUSD: 23,
      unit: "pack para 2 personas",
      features: [
        "6 Handrolls gourmet variados",
        "Empaque especial crujiente",
        "2 Bebidas frías"
      ]
    }
  ],
  categories: [
    {
      id: "handrolls-crispy",
      name: "Handrolls Crujientes (Temakis) 🍙",
      icon: "🍙"
    },
    {
      id: "poke-bowls",
      name: "Poke Bowls Personalizables 🥗",
      icon: "🥗"
    },
    {
      id: "bites-bebidas",
      name: "Sushi Bites & Bebidas Frías 🧃",
      icon: "🧃"
    }
  ],
  menuItems: [
    {
      id: "handroll-salmon-lover",
      name: "Handroll Salmon Lover con Masago",
      category: "handrolls-crispy",
      description: "Salmón fresco en cubos, queso crema philadelphia, cebollín, aguacate y masago en nori crujiente.",
      priceUSD: 4.5,
      badge: "Favorito",
      popular: true
    },
    {
      id: "handroll-ebi-crunch",
      name: "Handroll Ebi Crunch Tempura",
      category: "handrolls-crispy",
      description: "Langostino rebozado en tempura crocante, salsa spicy mayo, aguacate y lluvia de sésamo negro.",
      priceUSD: 4.5,
      popular: true
    },
    {
      id: "poke-bowl-atun-salmon",
      name: "Poke Bowl Mixto Atún & Salmón",
      category: "poke-bowls",
      description: "Arroz sushi, cubos de atún y salmón marinado, aguacate, edamames, mango en cubos, wakame y cebolla crocante.",
      priceUSD: 11.5,
      popular: true
    },
    {
      id: "handroll-tacos-nori",
      name: "Tacos de Nori Crocante con Salmón Trufado (2 Und)",
      category: "bites-bebidas",
      description: "Conchas de alga nori en tempura rellenas de arroz, tartar de salmón y gotas de aceite de trufa blanca.",
      priceUSD: 6.5
    }
  ],
  managerKpis: {
    activeReservations: 30,
    capacityPercentage: 95,
    todaySalesUSD: 890,
    avgTicketUSD: 12
  },
  sampleBookings: [
    {
      id: "HAN-801",
      clientName: "Paola Faría",
      details: "Trío Handrolls Combo",
      time: "01:15 PM",
      status: "en_mesa",
      pax: 1,
      totalUSD: 12.5
    },
    {
      id: "HAN-802",
      clientName: "Gabriel Montero",
      details: "Poke Bowl Custom (Pick-up)",
      time: "02:00 PM",
      status: "confirmada",
      pax: 1,
      totalUSD: 11.5
    }
  ]
},

  // ÁRTICA DUNAS
  {
  slug: "artica_dunas",
  batch: "dia4",
  archetype: "vip-access",
  name: "Ártica Dunas",
  handle: "artica_dunas",
  category: "Pista de Hielo & Bowling",
  badgeText: "Complejo de Ocio en Parque Dunas",
  tagline: "El mayor complejo de entretenimiento en Valencia: la única pista de patinaje sobre hielo de la región central, bolera profesional, zona arcade y restaurante.",
  heroTitle: "La Única Pista de Hielo y Bowling",
  heroHighlight: "Profesional de Valencia",
  heroSubtitle: "Compra turnos de pista de hielo con pase QR holográfico, reserva líneas de bowling por hora y cotiza paquetes de cumpleaños 24/7 sin colas de taquilla.",
  logo: "/marcas/artica_dunas.jpg",
  coverImage: "/marcas/artica_dunas-cover.jpg",
  palette: {
    primary: "#0284c7",
    primaryHover: "#0369a1",
    secondary: "#082f49",
    accent: "#38bdf8",
    darkBg: "#030f19",
    cardBg: "#071d2e",
    textLight: "#f0f9ff",
    textMuted: "#7dd3fc",
    border: "rgba(56, 189, 248, 0.25)",
    glow: "rgba(56, 189, 248, 0.3)"
  },
  typography: {
    fontDisplay: "font-sans",
    fontBody: "font-sans"
  },
  introText: "Ubicado dentro del emblemático Parque Dunas en Valencia (Mañongo), Ártica reúne a más de 370K seguidores con su legendaria pista de patinaje sobre hielo real, 10 pistas de bowling computarizadas, zona VIP con luces neón y restaurante internacional.",
  introStats: [
    {
      label: "Líneas de Bowling",
      value: "$5 - $6",
      detail: "Por línea con calzado desinfectado"
    },
    {
      label: "Sesión Pista Hielo",
      value: "$4.5 - $6.5",
      detail: "Turnos de 15 min con patines incluidos"
    },
    {
      label: "Zona VIP / Eventos",
      value: "$46 / hora",
      detail: "Hasta 9 personas con hielo y bowling"
    }
  ],
  trustBadges: [
    "Única Pista de Hielo en Valencia",
    "Complejo Parque Dunas Mañongo",
    "Bowling Profesional & Zona VIP"
  ],
  whatsappPitchCopy: "Hola equipo de Ártica Dunas! ⛸️🎳 Manejar la única pista de hielo de Valencia y el bowling atrae miles de visitas semanales. Para agilizar la taquilla y que sus visitantes compren turnos de hielo con pase QR y reserven pistas online, creamos esta WebApp a medida.\n\nMiren la demo interactiva y el Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/artica_dunas",
  address: "Instalaciones del Parque Dunas, Urb. Mañongo, Naguanagua, Valencia, Edo. Carabobo",
  mapsUrl: "https://maps.google.com/?q=Parque+Dunas+Valencia+Naguanagua",
  hours: "Lunes a Domingo: 5:00 PM - 12:00 AM (Viernes y Sábados hasta la 1:00 AM)",
  phone: "+58 412-0308674",
  instagramUrl: "https://www.instagram.com/artica_dunas/",
  bookingType: "ice-bowling-pass",
  bookingTitle: "Entradas Pista de Hielo & Pistas de Bowling",
  bookingSubtitle: "Compra tus turnos digitales con código QR para validación rápida en puerta.",
  bookingOptions: [
    {
      id: "pase-pista-hielo-artica",
      name: "Turno Pista de Patinaje sobre Hielo (15 Min)",
      description: "Acceso a la pista de hielo real con patines profesionales y medias térmicas higienizadas incluidas.",
      priceUSD: 6.5,
      unit: "por persona",
      badge: "Experiencia Polar",
      features: [
        "15 Minutos en pista de hielo real",
        "Patines y medias incluidas",
        "Acceso directo con código QR"
      ]
    },
    {
      id: "pista-bowling-artica",
      name: "Línea de Bowling Computarizada (1 Hora - 6 Pax)",
      description: "Pista profesional con conteo digital en pantallas LED aéreas y calzado para todo el grupo.",
      priceUSD: 6,
      unit: "por línea de juego",
      badge: "Más Popular",
      features: [
        "Pista profesional LED",
        "Calzado para 6 jugadores",
        "Servicio de comida a la pista"
      ]
    },
    {
      id: "zona-vip-hielo-bowling",
      name: "Paquete VIP Hielo + Bowling + Lounge (Hasta 9 Pax)",
      description: "1 Hora de bowling en pista privada + turnos de hielo para todo el grupo + lounge exclusivo con sofá.",
      priceUSD: 46,
      unit: "paquete VIP 1 hora",
      badge: "Exclusivo Grupos",
      features: [
        "1 Hora pista VIP bowling",
        "Pases de hielo para 9 personas",
        "Lounge privado con atención dedicada"
      ]
    }
  ],
  categories: [
    {
      id: "pases-atracciones",
      name: "Pases de Hielo & Bowling ⛸️",
      icon: "⛸️"
    },
    {
      id: "comida-parque",
      name: "Hamburguesas, Pizzas & Snacks 🍕",
      icon: "🍕"
    },
    {
      id: "bebidas-sportbar",
      name: "Bebidas Frías & Sport Bar 🍺",
      icon: "🍺"
    }
  ],
  menuItems: [
    {
      id: "pase-hielo-individual",
      name: "Pase Individual Pista de Patinaje sobre Hielo",
      category: "pases-atracciones",
      description: "Boleto digital con código QR para turno de 15 minutos en la pista polar de hielo real.",
      priceUSD: 6.5,
      badge: "Top Atracción",
      popular: true
    },
    {
      id: "hora-bowling-artica",
      name: "Línea de Bowling Profesional + Calzado",
      category: "pases-atracciones",
      description: "1 Línea de bowling computarizada con sistema de puntuación automático y luces neón.",
      priceUSD: 6,
      popular: true
    },
    {
      id: "pizza-artica-especial",
      name: "Pizza Gigante Cuatro Quesos & Pepperoni",
      category: "comida-parque",
      description: "Masa crujiente horneada al momento con salsa de tomate especial, mozzarella y pepperoni.",
      priceUSD: 12.5
    },
    {
      id: "combo-alitas-crispy-artica",
      name: "Balde de 12 Alitas Crispy con Papas Fritas",
      category: "comida-parque",
      description: "Alitas empanizadas crujientes acompañadas de salsa barbacoa y papas fritas con sal de mar.",
      priceUSD: 9.5,
      popular: true
    }
  ],
  managerKpis: {
    activeReservations: 42,
    capacityPercentage: 97,
    todaySalesUSD: 2890,
    avgTicketUSD: 22
  },
  sampleBookings: [
    {
      id: "ART-901",
      clientName: "Camila De Abreu",
      details: "Turno Hielo (4 pases QR)",
      time: "06:30 PM",
      status: "en_mesa",
      pax: 4,
      totalUSD: 26
    },
    {
      id: "ART-902",
      clientName: "Luis Fernando Rivas",
      details: "Zona VIP Bowling (8 pax)",
      time: "08:00 PM",
      status: "confirmada",
      pax: 8,
      totalUSD: 46
    }
  ]
},

  // MR. CRUNCH
  {
  slug: "mrcrunch_ve",
  batch: "dia4",
  archetype: "direct-delivery",
  name: "Mr. Crunch",
  handle: "mrcrunch.ve",
  category: "Nashville Crispy Chicken",
  badgeText: "Crispy Chicken en Caracas & Maracaibo",
  tagline: "El auténtico pollo frito crujiente estilo Nashville: sanguchitos en pan brioche, tenders bañados, Crunch Bombs y niveles de picante de autor.",
  heroTitle: "Auténtico Pollo Frito Nashville",
  heroHighlight: "Crujiente en Caracas y Maracaibo",
  heroSubtitle: "Delivery directo multi-sede sin comisiones del 25%: elige tu nivel de picante, salsas y combos con cálculo automático a tasa oficial BCV.",
  logo: "/marcas/mrcrunch_ve.jpg",
  coverImage: "/marcas/mrcrunch_ve-cover.jpg",
  palette: {
    primary: "#ea580c",
    primaryHover: "#c2410c",
    secondary: "#7c2d12",
    accent: "#fbbf24",
    darkBg: "#0f0602",
    cardBg: "#1c0d05",
    textLight: "#fffbeb",
    textMuted: "#fde68a",
    border: "rgba(251, 191, 36, 0.25)",
    glow: "rgba(251, 191, 36, 0.3)"
  },
  typography: {
    fontDisplay: "font-sans",
    fontBody: "font-sans"
  },
  introText: "Con locales en Chacao (Caracas) y Calle 76 con 3G (Maracaibo), Mr. Crunch es la marca de pollo frito más viral de Venezuela con más de 63K seguidores. Sus sanguchitos en pan brioche y sus papas cargadas Crunch Bombs ofrecen una textura ultra crujiente con 5 niveles de picante.",
  introStats: [
    {
      label: "Ticket Promedio",
      value: "$8.00 - $12",
      detail: "Combos Nashville, sanguchitos y Crunch Bombs"
    },
    {
      label: "Margen Recuperado",
      value: "25% - 30%",
      detail: "Ahorro directo en comisiones de agregadores"
    },
    {
      label: "Multi-Sede",
      value: "CCS & MAR",
      detail: "Despacho automático a la cocina más cercana"
    }
  ],
  trustBadges: [
    "Auténtico Pollo Nashville Crujiente",
    "Presencia en Caracas y Maracaibo",
    "Delivery Directo & Pick-Up Express"
  ],
  whatsappPitchCopy: "Hola equipo de Mr. Crunch! 🍗🔥 Sus sándwiches Nashville son de los mejores de Venezuela. Para que ahorren el 25% de comisión de apps de delivery y reciban pedidos de Caracas y Maracaibo de forma automática con tasa BCV, desarrollamos esta WebApp directa.\n\nPueden ver la demo en vivo y su Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/mrcrunch_ve",
  address: "Sede Caracas: Chacao / Chacaíto · Sede Maracaibo: Calle 76 con Av. 3G",
  mapsUrl: "https://maps.google.com/?q=Chacao+Caracas+Mr+Crunch",
  hours: "Lunes a Domingo: 12:00 PM - 10:30 PM (Horario Continuo)",
  phone: "+58 412-0308674",
  instagramUrl: "https://www.instagram.com/mrcrunch.ve/",
  bookingType: "multi-city-delivery",
  bookingTitle: "Delivery Directo Caracas & Maracaibo",
  bookingSubtitle: "Selecciona tu ciudad, elige tu nivel de picante y recibe en minutos.",
  bookingOptions: [
    {
      id: "combo-nashville-sandwich",
      name: "Combo Sándwich Nashville Clásico + Papas + Bebida",
      description: "Pechuga extra crujiente en pan brioche con ensalada coleslaw fresca, pepinillos encurtidos, salsa Crunch y papas fritas.",
      priceUSD: 10.5,
      unit: "combo personal",
      badge: "Más Vendido",
      features: [
        "Pechuga Nashville crujiente",
        "Pan brioche tostado con mantequilla",
        "Papas sazonadas + Bebida",
        "Nivel de picante a elección"
      ]
    },
    {
      id: "combo-crunch-bomb",
      name: "Crunch Bomb Especial (Papas + Tenders + Cheddar)",
      description: "Cama gigante de papas fritas coronada con tenders de pollo crujiente bañados en queso cheddar derretido y tocineta.",
      priceUSD: 9.5,
      unit: "plato estrella",
      badge: "Viral #1",
      features: [
        "Tenders bañados en salsa",
        "Queso cheddar fundido y bacon",
        "Papas fritas crujientes"
      ]
    },
    {
      id: "box-party-tenders",
      name: "Party Box (12 Tenders Crujientes + 3 Salsas + Papas XXL)",
      description: "12 Tenders de pechuga extra crujientes + 3 salsas de autor a elección + porción familiar de papas fritas.",
      priceUSD: 22,
      unit: "pack para compartir",
      features: [
        "12 Tenders Nashville",
        "3 Salsas especiales",
        "Papas fritas familiares"
      ]
    }
  ],
  categories: [
    {
      id: "sanguchitos-nashville",
      name: "Sanguchitos en Pan Brioche 🍔",
      icon: "🍔"
    },
    {
      id: "tenders-crunch-bombs",
      name: "Tenders & Crunch Bombs 🍗",
      icon: "🍗"
    },
    {
      id: "sides-salsas",
      name: "Papas Fritas & Salsas Especiales 🍟",
      icon: "🍟"
    },
    {
      id: "malteadas-bebidas",
      name: "Malteadas Espesas & Bebidas 🥤",
      icon: "🥤"
    }
  ],
  menuItems: [
    {
      id: "sanguchito-nashville-clasico",
      name: "Sanguchito Nashville Clásico en Pan Brioche",
      category: "sanguchitos-nashville",
      description: "Pechuga de pollo extra crujiente con adobo Nashville, ensalada coleslaw, pepinillos encurtidos y salsa secreta Mr. Crunch.",
      priceUSD: 7.5,
      badge: "Insignia",
      popular: true
    },
    {
      id: "crunch-bomb-original",
      name: "Crunch Bomb Original con Cheddar & Tocineta",
      category: "tenders-crunch-bombs",
      description: "Papas fritas sazonadas con tenders de pollo, salsa de queso cheddar fundido y trocitos de tocineta crocante.",
      priceUSD: 9,
      popular: true
    },
    {
      id: "tenders-box-5und",
      name: "Tenders Box (5 Tenders con Salsa Honey Mustard)",
      category: "tenders-crunch-bombs",
      description: "5 Tiras de pechuga empanizadas con costra extra crujiente servidas con salsa miel mostaza de la casa.",
      priceUSD: 8
    },
    {
      id: "milkshake-vainilla-crunch",
      name: "Malteada Espesa de Vainilla & Galleta",
      category: "malteadas-bebidas",
      description: "Helado artesanal de vainilla batido con leche entera, crema batida y trocitos de galleta crujiente.",
      priceUSD: 4.5,
      popular: true
    }
  ],
  managerKpis: {
    activeReservations: 38,
    capacityPercentage: 98,
    todaySalesUSD: 1420,
    avgTicketUSD: 12
  },
  sampleBookings: [
    {
      id: "CRU-1001",
      clientName: "Leonardo Belloso (Caracas)",
      details: "Combo Sándwich Nashville",
      time: "01:00 PM",
      status: "en_mesa",
      pax: 1,
      totalUSD: 10.5
    },
    {
      id: "CRU-1002",
      clientName: "Mariángela Pirela (Maracaibo)",
      details: "Crunch Bomb + Malteada",
      time: "08:15 PM",
      status: "confirmada",
      pax: 2,
      totalUSD: 14
    }
  ]
},
{
  "slug": "dystopiabowling",
  "batch": "dia5",
  "archetype": "vip-access",
  "name": "Dystopia Bowling & Lounge",
  "handle": "dystopiabowling",
  "category": "Bowling Boutique, Bar & Lounge",
  "badgeText": "🎳 Pistas Automatizadas & Lounge VIP",
  "tagline": "El primer Bowling Boutique y Lounge Cyberpunk de Maracaibo con pistas digitales y coctelería a tu carril.",
  "heroTitle": "BOWL. DRINK. VIBE.",
  "heroHighlight": "Dystopia Bowling",
  "heroSubtitle": "Reserva turnos de pista con código QR, comanda hamburguesas smash y coctelería de autor directo a tu box VIP sin hacer cola.",
  "logo": "/marcas/dystopiabowling.jpg",
  "coverImage": "/marcas/dystopiabowling-cover.jpg",
  "palette": {
    "primary": "#202020",
    "primaryHover": "#353535",
    "secondary": "#00F0FF",
    "accent": "#FF007A",
    "darkBg": "#0B0C10",
    "cardBg": "#15171E",
    "textLight": "#FFFFFF",
    "textMuted": "#9CA3AF",
    "border": "#2A2D3A",
    "glow": "rgba(255, 0, 122, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Dystopia Bowling & Lounge es el concepto de entretenimiento boutique de Plaza 72: pistas automatizadas con iluminación UV neón, salón VIP climatizado y servicio continuo de coctelería de autor y comida a la pista.",
  "introStats": [
    {
      "label": "Pistas Boutique",
      "value": "Automatizadas",
      "detail": "Turnos y reservas con pase QR"
    },
    {
      "label": "Lounge & Bar",
      "value": "Coctelería TOP",
      "detail": "Servicio directo a la pista"
    },
    {
      "label": "Ubicación",
      "value": "Plaza 72",
      "detail": "Calle 72 e/ 14A y 15, Piso 2"
    }
  ],
  "trustBadges": [
    "Pases QR con Acceso Express",
    "Comanda Directa a la Pista",
    "Tasa BCV en Tiempo Real"
  ],
  "whatsappPitchCopy": "Hola equipo de Dystopia Bowling! 🎳 Preparamos una WebApp especializada para su bowling boutique en Plaza 72: permite a sus clientes apartar turnos de pista con pase QR holográfico, ordenar smash burgers y coctelería directo a su carril y pagar a tasa oficial BCV sin colas.\n\nLes comparto la demo y el video vertical de 15 segundos:\n👉 https://byte-bridge-tau.vercel.app/demos/dystopiabowling",
  "address": "Calle 72, entre Avenidas 14A y 15, C.C. Plaza 72, Piso 2, Maracaibo",
  "phone": "+58 412-0308674",
  "hours": "Miércoles a Domingo: 4:00 PM – 1:00 AM",
  "instagramUrl": "https://www.instagram.com/dystopiabowling/",
  "mapsUrl": "https://maps.google.com/?q=Plaza+72+Maracaibo+Dystopia+Bowling",
  "bcvRate": 64.2,
    "bookingType": "bowling-vip-pass",
  "bookingTitle": "Pases VIP & Líneas de Bowling",
  "bookingSubtitle": "Reserva turnos de pista, box lounge exclusivo y calzado profesional sin hacer cola",
  "bookingOptions": [
    {
      "id": "dystopia-pista-1h",
      "name": "Línea de Pista Bowling (1 Hora)",
      "description": "1 hora completa de juego para hasta 6 jugadores con calzado profesional desinfectado y asistencia de pista.",
      "priceUSD": 22,
      "unit": "pista/hora",
      "badge": "Más Popular",
      "features": [
        "Hasta 6 jugadores por pista",
        "Calzado profesional incluido",
        "Comanda de bebidas a la pista"
      ],
      "maxCapacity": 6
    },
    {
      "id": "dystopia-box-vip",
      "name": "Box VIP Lounge + Bowling",
      "description": "Pase exclusivo para 8 personas con 2 horas de pista, sillones lounge de cuero, servicio de botella y picada Dystopia.",
      "priceUSD": 85,
      "unit": "pase VIP",
      "badge": "Experiencia VIP",
      "features": [
        "2 horas continuas de pista",
        "Área Lounge privada",
        "Servicio dedicado de bartender"
      ],
      "maxCapacity": 8
    },
    {
      "id": "dystopia-cumple",
      "name": "Paquete Dystopia Birthday",
      "description": "Coordinación completa para grupos con 2 pistas simultáneas, pizzas artesanales, tequeños crunch y ronda de shots.",
      "priceUSD": 140,
      "unit": "paquete",
      "badge": "Eventos & Cumpleaños",
      "features": [
        "2 pistas por 2 horas",
        "2 pizzas + 16 tequeños",
        "Decoración y mesa reservada"
      ],
      "maxCapacity": 12
    }
  ],
  "categories": [
    {
      "id": "smash-burgers",
      "name": "Smash Burgers"
    },
    {
      "id": "pizzas-tapas",
      "name": "Pizzas & Tapas"
    },
    {
      "id": "cyber-cocktails",
      "name": "Cyber Cocktails & Bar"
    }
  ],
  "menuItems": [
    {
      "id": "dys-burger-1",
      "name": "Dystopia Double Smash Burger",
      "category": "smash-burgers",
      "description": "Doble carne angus crujiente, queso cheddar fundido, tocineta ahumada, pepinillos y salsa Dystopia en pan brioche.",
      "priceUSD": 8.5,
      "popular": true
    },
    {
      "id": "dys-tapas-1",
      "name": "Tequeños Dystopia Crunch (8 und)",
      "category": "pizzas-tapas",
      "description": "Masa hojaldrada rellena de queso blanco fundido, servidos con salsa tártara de la casa y mermelada de pimentón.",
      "priceUSD": 6,
      "popular": true
    },
    {
      "id": "dys-pizza-1",
      "name": "Pizza Pepperoni & Hot Honey",
      "category": "pizzas-tapas",
      "description": "Masa madre de fermentación lenta, salsa pomodoro, mozzarella fior di latte, pepperoni artesanal y drizzle de miel picante.",
      "priceUSD": 11
    },
    {
      "id": "dys-drink-1",
      "name": "Cyber Neon Gin Signature",
      "category": "cyber-cocktails",
      "description": "Gin infusionado con botánicos, tónica premium, glitter comestible UV y esfera de hielo aromatizada.",
      "priceUSD": 7.5,
      "popular": true
    }
  ],
  "managerKpis": {
    "activeReservations": 24,
    "capacityPercentage": 92,
    "todaySalesUSD": 1840,
    "avgTicketUSD": 28
  },
  "sampleBookings": [
    {
      "id": "DYS-101",
      "clientName": "Rodrigo Morales",
      "details": "Pista Bowling 1h (6 pax)",
      "time": "07:30 PM",
      "status": "confirmada",
      "pax": 6,
      "totalUSD": 22
    },
    {
      "id": "DYS-102",
      "clientName": "Camila Urdaneta",
      "details": "Box VIP Lounge + 2h Pista",
      "time": "09:00 PM",
      "status": "en_mesa",
      "pax": 8,
      "totalUSD": 85
    }
  ]
},
{
  "slug": "lataberna_delnavegante",
  "batch": "dia5",
  "archetype": "gourmet-booking",
  "name": "La Taberna del Navegante",
  "handle": "lataberna_delnavegante",
  "category": "Restaurante Español & Marisquería",
  "badgeText": "🍷 Alta Cocina Española & Paellas",
  "tagline": "Templo histórico de la cocina española, marisquería del Cantábrico y arroces en Chacao, Caracas.",
  "heroTitle": "TRADICIÓN & ALTA MAR",
  "heroHighlight": "Taberna del Navegante",
  "heroSubtitle": "Reserva mesas en salón señorial o terraza, pre-ordena tus paellas a leña y explora nuestra cava de vinos con confirmación VIP.",
  "logo": "/marcas/lataberna_delnavegante.jpg",
  "coverImage": "/marcas/lataberna_delnavegante-cover.jpg",
  "palette": {
    "primary": "#1A2540",
    "primaryHover": "#28385E",
    "secondary": "#D4AF37",
    "accent": "#C59B27",
    "darkBg": "#0C101A",
    "cardBg": "#161D2E",
    "textLight": "#F8F9FA",
    "textMuted": "#A0AEC0",
    "border": "#2D3748",
    "glow": "rgba(212, 175, 55, 0.35)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "La Taberna del Navegante es el referente de alta cocina española en Chacao: más de 30 años elaborando arroces marineros, pulpos a la gallega y marisquería fresca con servicio de sommelier y mantelería fina.",
  "introStats": [
    {
      "label": "Tradición Española",
      "value": "+30 Años",
      "detail": "Emblema gastronómico en Chacao"
    },
    {
      "label": "Cava de Vinos",
      "value": "60+ Etiquetas",
      "detail": "Ribera, Rioja y Albariño"
    },
    {
      "label": "Arroces a Pedido",
      "value": "Pre-Orden",
      "detail": "Listos en mesa sin esperas"
    }
  ],
  "trustBadges": [
    "Reserva Garantizada con Sommelier",
    "Pre-Orden de Paellas y Mariscos",
    "Facturación Corporativa Digital"
  ],
  "whatsappPitchCopy": "Hola equipo de La Taberna del Navegante! 🍷 Diseñamos una WebApp exclusiva para su emblemática tasca en Chacao: permite a sus comensales reservar mesa en salón o terraza, pre-ordenar sus paellas y mariscos al agendar (ahorrando 35 min de espera) y consultar su cava a tasa oficial BCV.\n\nVean la demo en vivo y su Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/lataberna_delnavegante",
  "address": "Calle Bolívar, Urb. Bolívar, Chacao, Caracas",
  "phone": "+58 412-0308674",
  "hours": "Martes a Domingo: 12:00 PM – 10:30 PM",
  "instagramUrl": "https://www.instagram.com/lataberna_delnavegante/",
  "mapsUrl": "https://maps.google.com/?q=La+Taberna+del+Navegante+Chacao+Caracas",
  "bcvRate": 64.2,
    "bookingType": "gourmet-cava-table",
  "bookingTitle": "Reserva de Mesas Señoriales & Cava",
  "bookingSubtitle": "Aparta tu mesa en salón o terraza, pre-ordena paellas a leña y asegura maridaje sommelier",
  "bookingOptions": [
    {
      "id": "taberna-salon-principal",
      "name": "Mesa Salón Principal Señorial",
      "description": "Mesa formal con mantelería de tela y servicio dedicado de sommelier para cenas de negocios o encuentros familiares.",
      "priceUSD": 20,
      "unit": "depósito consumible",
      "badge": "Más Solicitado",
      "features": [
        "Mesa reservada sin espera",
        "Atención personalizada",
        "Consumo 100% acreditable"
      ],
      "maxCapacity": 6
    },
    {
      "id": "taberna-paella-experiencia",
      "name": "Mesa VIP + Paella Marinera Pre-Orden",
      "description": "Reserva de mesa con la afamada Paella Marinera de la casa lista a los 10 minutos de sentarse en sala.",
      "priceUSD": 45,
      "unit": "paquete degustación",
      "badge": "Recomendado",
      "features": [
        "Paella Marinera (2-3 pax) lista",
        "Jarra de Sangría de la Casa",
        "Mesa preferencial"
      ],
      "maxCapacity": 4
    }
  ],
  "categories": [
    {
      "id": "arroces-paellas",
      "name": "Arroces & Paellas"
    },
    {
      "id": "mariscos-pescados",
      "name": "Mariscos & Pescados"
    },
    {
      "id": "cava-vinos",
      "name": "Cava de Vinos & Sangrías"
    }
  ],
  "menuItems": [
    {
      "id": "tab-paella-1",
      "name": "Paella Marinera Especial Taberna",
      "category": "arroces-paellas",
      "description": "Arroz bomba al azafrán con langostinos, camarones, calamares, mejillones y almejas frescas del Cantábrico.",
      "priceUSD": 34,
      "popular": true
    },
    {
      "id": "tab-marisco-1",
      "name": "Pulpo a la Gallega con Pimentón de la Vera",
      "category": "mariscos-pescados",
      "description": "Tentáculos de pulpo tierno servidos sobre papas al vapor con aceite de oliva virgen extra y pimentón ahumado.",
      "priceUSD": 18,
      "popular": true
    },
    {
      "id": "tab-marisco-2",
      "name": "Langostinos al Champagne",
      "category": "mariscos-pescados",
      "description": "Langostinos salteados en reducción cremosa de espumante brut con ciboulette y tostadas al ajillo.",
      "priceUSD": 22
    },
    {
      "id": "tab-sangria-1",
      "name": "Jarra de Sangría Tradicional de la Casa (1L)",
      "category": "cava-vinos",
      "description": "Vino tinto crianza macerado con frutas cítricas frescas, toque de licor de naranja y canela.",
      "priceUSD": 16,
      "popular": true
    }
  ],
  "managerKpis": {
    "activeReservations": 18,
    "capacityPercentage": 94,
    "todaySalesUSD": 2150,
    "avgTicketUSD": 42
  },
  "sampleBookings": [
    {
      "id": "TAB-301",
      "clientName": "Dr. Fernando Mendoza",
      "details": "Mesa Salón VIP + Paella Pre-orden",
      "time": "01:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 45
    }
  ]
},
{
  "slug": "mrbroastermcbo",
  "batch": "dia5",
  "archetype": "direct-delivery",
  "name": "Mr. Broaster Maracaibo",
  "handle": "mr.broastermcbo",
  "category": "Pollo Broaster Crujiente & Fast Food",
  "badgeText": "🍗 Pollo Broaster 100% Crujiente",
  "tagline": "El pollo broaster más crujiente y jugoso de Maracaibo con combos familiares y delivery directo.",
  "heroTitle": "CRUNCH. SABOR. FAMILIA.",
  "heroHighlight": "Mr. Broaster",
  "heroSubtitle": "Pide tus combos de pollo broaster, alitas y smash burgers con cálculo a tasa BCV y despacho directo a WhatsApp sin pagar 25% en apps.",
  "logo": "/marcas/mrbroastermcbo.jpg",
  "coverImage": "/marcas/mrbroastermcbo-cover.jpg",
  "palette": {
    "primary": "#E63946",
    "primaryHover": "#D62828",
    "secondary": "#F4A261",
    "accent": "#FFB703",
    "darkBg": "#111111",
    "cardBg": "#1C1C1C",
    "textLight": "#FFFFFF",
    "textMuted": "#A8A8A8",
    "border": "#2E2E2E",
    "glow": "rgba(255, 183, 3, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Mr. Broaster es el especialista en pollo apanado crujiente de Valle Claro: presas doradas con sazón secreto, raciones gigantes de papas fritas y combos diseñados para alimentar a toda la familia a precios justos.",
  "introStats": [
    {
      "label": "Pollo Broaster",
      "value": "100% Crujiente",
      "detail": "Fritura a presión ultra jugosa"
    },
    {
      "label": "Combos Ahorro",
      "value": "Desde $4.99",
      "detail": "Con papas, ensalada y salsas"
    },
    {
      "label": "Delivery Propio",
      "value": "0% Comisión",
      "detail": "Directo a tu casa en Maracaibo"
    }
  ],
  "trustBadges": [
    "Delivery Directo sin Comisiones",
    "Despacho Rápido en Valle Claro",
    "Conversión Multimoneda BCV al Día"
  ],
  "whatsappPitchCopy": "Hola equipo de Mr. Broaster Maracaibo! 🍗🔥 Sabemos que el pollo crujiente es un éxito en delivery, pero pagar 25% de comisión en apps de terceros recorta su margen. Les armamos una WebApp de Delivery Directo donde el cliente pide combos, salsas y bebidas con tasa BCV automática y les llega la orden lista con dirección exacta por WhatsApp.\n\nMiren la demo interactiva y el Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/mrbroastermcbo",
  "address": "Avenida 70B, Calle 83, frente al C.C. Valle Claro, Maracaibo",
  "phone": "+58 412-0308674",
  "hours": "Lunes a Domingo: 11:30 AM – 10:30 PM",
  "instagramUrl": "https://www.instagram.com/mr.broastermcbo/",
  "mapsUrl": "https://maps.google.com/?q=Valle+Claro+Maracaibo+Mr+Broaster",
  "bcvRate": 64.2,
    "bookingType": "direct-delivery-order",
  "bookingTitle": "Delivery Directo & Pick-Up Express",
  "bookingSubtitle": "Elige tus combos broaster crujientes y despacha directo a WhatsApp a tasa oficial BCV",
  "bookingOptions": [
    {
      "id": "broaster-pick-up",
      "name": "Retiro Express en Mostrador (Pick-Up)",
      "description": "Ordena tu combo con anticipación y recógelo caliente y empacado sin hacer cola en caja.",
      "priceUSD": 0,
      "unit": "pedido anticipado",
      "badge": "Sin Colas",
      "features": [
        "Listo en 15 minutos",
        "Empaque térmico reforzado",
        "Tasa BCV garantizada"
      ]
    }
  ],
  "categories": [
    {
      "id": "combos-broaster",
      "name": "Combos Broaster"
    },
    {
      "id": "buckets-familiares",
      "name": "Buckets Familiares"
    },
    {
      "id": "hamburguesas-alitas",
      "name": "Hamburguesas & Alitas"
    }
  ],
  "menuItems": [
    {
      "id": "bro-combo-1",
      "name": "Combo Broaster Dúo (2 Piezas)",
      "category": "combos-broaster",
      "description": "2 presas de pollo broaster crujiente, papas fritas rústicas, ensalada coleslaw, salsa tártara y bebida fría.",
      "priceUSD": 4.99,
      "popular": true
    },
    {
      "id": "bro-bucket-1",
      "name": "Bucket Familiar Mega Broaster (8 Piezas)",
      "category": "buckets-familiares",
      "description": "8 piezas mixtas de pollo crocante, 2 raciones grandes de papas fritas, ensalada familiar, 3 salsas y refresco de 1.5L.",
      "priceUSD": 14.99,
      "popular": true
    },
    {
      "id": "bro-burger-1",
      "name": "Smash Broaster Chicken Burger",
      "category": "hamburguesas-alitas",
      "description": "Filete de pechuga crujiente con triple queso cheddar, tocineta, lechuga fresca y aderezo Mr. Broaster.",
      "priceUSD": 6.5
    },
    {
      "id": "bro-alitas-1",
      "name": "Alitas Broaster Glaseadas BBQ (6 und)",
      "category": "hamburguesas-alitas",
      "description": "Alitas crujientes bañadas en salsa BBQ ahumada con semillas de ajonjolí tostado.",
      "priceUSD": 5.5
    }
  ],
  "managerKpis": {
    "activeReservations": 42,
    "capacityPercentage": 96,
    "todaySalesUSD": 1380,
    "avgTicketUSD": 11
  },
  "sampleBookings": [
    {
      "id": "BRO-801",
      "clientName": "Jesús Albarrán",
      "details": "Bucket Familiar 8 Piezas",
      "time": "07:15 PM",
      "status": "en_mesa",
      "pax": 4,
      "totalUSD": 14.99
    }
  ]
},
{
  "slug": "friendsmaracaibo",
  "batch": "dia5",
  "archetype": "table-ordering",
  "name": "Friends Maracaibo",
  "handle": "friendsmaracaibo",
  "category": "Fast Food Urbano, Burgers & Patacones",
  "badgeText": "🍔 Fast Food & Auto-Pedido en Mesa",
  "tagline": "El punto de encuentro para hamburguesas monumentales, patacones gourmet y meriendas en Maracaibo.",
  "heroTitle": "GOOD FOOD. GOOD FRIENDS.",
  "heroHighlight": "Friends Maracaibo",
  "heroSubtitle": "Escanea el código QR de tu mesa, pide hamburguesas smash y patacones directo a cocina y divide la cuenta en Bs y $ al instante.",
  "logo": "/marcas/friendsmaracaibo.jpg",
  "coverImage": "/marcas/friendsmaracaibo-cover.jpg",
  "palette": {
    "primary": "#5A189A",
    "primaryHover": "#7B2CBF",
    "secondary": "#FF9100",
    "accent": "#FFB703",
    "darkBg": "#0F0B18",
    "cardBg": "#1A1428",
    "textLight": "#FFFFFF",
    "textMuted": "#A397B8",
    "border": "#2E2442",
    "glow": "rgba(255, 145, 0, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Friends Maracaibo es el restobar urbano donde amigos y familias comparten burgers descomunales, patacones rellenos con lomito y merengadas cargadas en un ambiente enérgico y moderno.",
  "introStats": [
    {
      "label": "Fast Food Urbano",
      "value": "100% Sabor",
      "detail": "Burgers, patacones y meriendas"
    },
    {
      "label": "Auto-Pedido QR",
      "value": "Cero Esperas",
      "detail": "Comanda directa desde tu mesa"
    },
    {
      "label": "Tasa Automatizada",
      "value": "BCV al Día",
      "detail": "Cálculo exacto en Bolívares y USD"
    }
  ],
  "trustBadges": [
    "Auto-Pedido QR desde Mesa",
    "Comanda Directa a Cocina",
    "Pago Móvil & Efectivo a Tasa BCV"
  ],
  "whatsappPitchCopy": "Hola amigos de Friends Maracaibo! 🍔🥤 Estuvimos revisando su propuesta y sabemos lo clave que es la velocidad cuando el salón se llena de grupos. Les diseñamos una WebApp interactiva con auto-pedido por código QR en mesa: los clientes piden sus hamburguesas y patacones sin esperar mesonero y la comanda sale directo a cocina.\n\nLes comparto la demo y el video comercial de 15 segundos:\n👉 https://byte-bridge-tau.vercel.app/demos/friendsmaracaibo",
  "address": "Sector Tierra Negra / Cecilio Acosta, Maracaibo",
  "phone": "+58 412-0308674",
  "hours": "Miércoles a Lunes: 5:00 PM – 11:30 PM",
  "instagramUrl": "https://www.instagram.com/friendsmaracaibo/",
  "mapsUrl": "https://maps.google.com/?q=Maracaibo+Friends+Restaurante",
  "bcvRate": 64.2,
    "bookingType": "table-qr-ordering",
  "bookingTitle": "Auto-Pedido en Mesa con QR",
  "bookingSubtitle": "Comanda tus burgers monumentales, patacones y monster shakes directo a cocina desde tu móvil",
  "bookingOptions": [
    {
      "id": "friends-mesa-amigos",
      "name": "Reserva de Mesa Grupal (4 a 8 personas)",
      "description": "Asegura mesa para tu grupo de amigos con comanda QR pre-habilitada y ronda de tequeños de bienvenida.",
      "priceUSD": 10,
      "unit": "abono consumible",
      "badge": "Para Grupos",
      "features": [
        "Mesa lista al llegar",
        "Tequeños de cortesía",
        "Consumo 100% acreditable"
      ],
      "maxCapacity": 8
    }
  ],
  "categories": [
    {
      "id": "burgers-friends",
      "name": "Burgers Monumentales"
    },
    {
      "id": "patacones-tequenos",
      "name": "Patacones & Tequeños"
    },
    {
      "id": "shakes-postres",
      "name": "Monster Shakes"
    }
  ],
  "menuItems": [
    {
      "id": "fri-burger-1",
      "name": "Burger Friends Monumental",
      "category": "burgers-friends",
      "description": "200g de carne de res al grill, queso cheddar fundido, tocineta ahumada, aros de cebolla crocantes y salsa Friends.",
      "priceUSD": 7.5,
      "popular": true
    },
    {
      "id": "fri-patacon-1",
      "name": "Patacón Especial Friends (Lomito & Pollo)",
      "category": "patacones-tequenos",
      "description": "Tapas de plátano verde crujiente rellenas de lomito, pollo a la plancha, queso de mano, jamón y aderezo especial zuliano.",
      "priceUSD": 8,
      "popular": true
    },
    {
      "id": "fri-tequeno-1",
      "name": "Tequeños Full Queso (6 und)",
      "category": "patacones-tequenos",
      "description": "Tequeños fritos dorados rellenos de queso blanco fundido con dip tártara y salsa de maíz.",
      "priceUSD": 5
    },
    {
      "id": "fri-shake-1",
      "name": "Monster Shake Chocolate & Brownie",
      "category": "shakes-postres",
      "description": "Merengada espesa de chocolate belga con helado, coronada con un brownie entero, crema batida y chispas.",
      "priceUSD": 6.5,
      "popular": true
    }
  ],
  "managerKpis": {
    "activeReservations": 29,
    "capacityPercentage": 91,
    "todaySalesUSD": 1240,
    "avgTicketUSD": 14
  },
  "sampleBookings": [
    {
      "id": "FRI-501",
      "clientName": "Valeria Gutiérrez",
      "details": "Mesa Grupal (6 pax)",
      "time": "08:00 PM",
      "status": "en_mesa",
      "pax": 6,
      "totalUSD": 10
    }
  ]
},
{
  "slug": "cartablancave",
  "batch": "dia5",
  "archetype": "vip-access",
  "name": "Carta Blanca Maracaibo",
  "handle": "cartablanca.ve",
  "category": "Espacio Creativo, Lounge & Event Venue",
  "badgeText": "✨ Experiencias de Arte, Lounge & Eventos",
  "tagline": "El venue boutique y estudio creativo para talleres multisensoriales, celebraciones privadas y coctelería de autor.",
  "heroTitle": "CREATE. CELEBRATE. CONNECT.",
  "heroHighlight": "Carta Blanca",
  "heroSubtitle": "Compra tus pases con código QR para talleres de arte, cotiza eventos privados y reserva catering exclusivo a tasa oficial BCV.",
  "logo": "/marcas/cartablancave.jpg",
  "coverImage": "/marcas/cartablancave-cover.jpg",
  "palette": {
    "primary": "#2B2D42",
    "primaryHover": "#3D405B",
    "secondary": "#E07A5F",
    "accent": "#81B29A",
    "darkBg": "#12131C",
    "cardBg": "#1C1E2C",
    "textLight": "#F4F1DE",
    "textMuted": "#9CA3AF",
    "border": "#2F3248",
    "glow": "rgba(224, 122, 95, 0.35)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Carta Blanca es el espacio de experiencias creativas más refinado de Maracaibo: tardes de pintura con vino ('Artistas Por Un Día'), celebraciones privadas y un ambiente lounge diseñado para la desconexión total.",
  "introStats": [
    {
      "label": "Talleres Creativos",
      "value": "Art & Wine",
      "detail": "Pases con código QR digital"
    },
    {
      "label": "Eventos Privados",
      "value": "Cotizador 24/7",
      "detail": "Reserva de fechas en línea"
    },
    {
      "label": "Coctelería & Tapas",
      "value": "Boutique",
      "detail": "Maridaje botánico exclusivo"
    }
  ],
  "trustBadges": [
    "Pases VIP y Tickets QR a Talleres",
    "Reserva de Fechas para Eventos",
    "Presupuestos en Bolívares y USD"
  ],
  "whatsappPitchCopy": "Hola equipo de Carta Blanca! ✨🎨 Admiramos las experiencias creativas que están organizando en Maracaibo. Para que la venta de cupos de sus talleres y la cotización de celebraciones privadas sea 100% fluida, creamos esta WebApp con tickets QR de acceso, cotizador de eventos y cálculo automático a tasa oficial BCV.\n\nPueden explorar la demo y el video aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/cartablancave",
  "address": "Zona Norte / Sector La Lago, Maracaibo",
  "phone": "+58 412-0308674",
  "hours": "Jueves a Domingo: 4:00 PM – 12:00 AM (Talleres con agenda)",
  "instagramUrl": "https://www.instagram.com/cartablanca.ve/",
  "mapsUrl": "https://maps.google.com/?q=Maracaibo+Carta+Blanca+Espacio+Creativo",
  "bcvRate": 64.2,
    "bookingType": "creative-workshop-pass",
  "bookingTitle": "Pases a Talleres & Alquiler de Espacio",
  "bookingSubtitle": "Adquiere tus boletos QR para sesiones de arte con vino o cotiza tu evento privado",
  "bookingOptions": [
    {
      "id": "cb-pase-artista",
      "name": "Pase Taller 'Artistas Por Un Día'",
      "description": "Pase individual con código QR para taller de pintura guiada, incluye lienzo, pinceles, pinturas, copa de vino y tabla de tapas.",
      "priceUSD": 28,
      "unit": "persona/pase",
      "badge": "Cupos Limitados",
      "features": [
        "Materiales artísticos completos",
        "Copa de vino + tapas",
        "Pase holográfico QR"
      ],
      "maxCapacity": 1
    },
    {
      "id": "cb-evento-privado",
      "name": "Reserva de Espacio para Evento Privado",
      "description": "Aparta la fecha para tu cumpleaños, bridal shower o evento de marca con mobiliario lounge y barra botánica.",
      "priceUSD": 180,
      "unit": "reserva base (4h)",
      "badge": "Exclusivo",
      "features": [
        "Salón y jardín privados",
        "Iluminación ambiental y sonido",
        "Coordinador en sala"
      ],
      "maxCapacity": 30
    }
  ],
  "categories": [
    {
      "id": "tapas-gourmet",
      "name": "Tapas & Tablas"
    },
    {
      "id": "cocteles-botanicos",
      "name": "Coctelería Botánica & Vinos"
    }
  ],
  "menuItems": [
    {
      "id": "cb-tabla-1",
      "name": "Tabla de Charcutería & Quesos Madurados",
      "category": "tapas-gourmet",
      "description": "Jamón serrano, salami artesanal, queso gouda y manchego, frutos secos, uvas y mermelada artesanal de higos con tostadas.",
      "priceUSD": 18,
      "popular": true
    },
    {
      "id": "cb-tapa-1",
      "name": "Montaditos de Salmón Ahumado & Eneldo (6 und)",
      "category": "tapas-gourmet",
      "description": "Tostas crocantes con queso crema suave, alcaparras baby, salmón ahumado y eneldo fresco.",
      "priceUSD": 12
    },
    {
      "id": "cb-drink-1",
      "name": "Spritz Botánico Carta Blanca",
      "category": "cocteles-botanicos",
      "description": "Aperol, espumante brut, infusión de flor de saúco, agua con gas y rodaja de pomelo rosado.",
      "priceUSD": 7.5,
      "popular": true
    }
  ],
  "managerKpis": {
    "activeReservations": 16,
    "capacityPercentage": 88,
    "todaySalesUSD": 980,
    "avgTicketUSD": 34
  },
  "sampleBookings": [
    {
      "id": "CB-201",
      "clientName": "Sofia Bencomo",
      "details": "Pase Taller Artistas Por Un Día (2 pax)",
      "time": "05:00 PM",
      "status": "confirmada",
      "pax": 2,
      "totalUSD": 56
    }
  ]
},
{
  "slug": "pidesalmarina",
  "batch": "dia5",
  "archetype": "direct-delivery",
  "name": "Sal Marina Seafood & Grill",
  "handle": "pidesalmarina",
  "category": "Marisquería & Cocina Costera Zuliana",
  "badgeText": "🐟 Pesca Fresca & Almuerzos Marinos",
  "tagline": "La marisquería de tradición en Tierra Negra con pescados frescos del día, cazuelas y delivery directo.",
  "heroTitle": "SABOR A COSTA.",
  "heroHighlight": "Sal Marina",
  "heroSubtitle": "Ordena almuerzos ejecutivos marinos, cazuelas y pescados fritos con tasa BCV automática y despacho express en Maracaibo.",
  "logo": "/marcas/pidesalmarina.jpg",
  "coverImage": "/marcas/pidesalmarina-cover.jpg",
  "palette": {
    "primary": "#0A2540",
    "primaryHover": "#123A63",
    "secondary": "#00A8E8",
    "accent": "#0077B6",
    "darkBg": "#061320",
    "cardBg": "#0C2036",
    "textLight": "#FFFFFF",
    "textMuted": "#8ECAE6",
    "border": "#183B5E",
    "glow": "rgba(0, 168, 232, 0.35)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Sal Marina es la parada gastronómica de Tierra Negra para disfrutar pescados fritos al punto, arroces marineros cargados y cazuelas gratinadas elaboradas con la pesca más fresca de la región.",
  "introStats": [
    {
      "label": "Pesca del Día",
      "value": "100% Fresca",
      "detail": "Pescados, camarones y calamares"
    },
    {
      "label": "Ubicación Clave",
      "value": "Tierra Negra",
      "detail": "Calle 69 con Av. 9B"
    },
    {
      "label": "Almuerzos Express",
      "value": "< 30 min",
      "detail": "Combos con sopa y contornos"
    }
  ],
  "trustBadges": [
    "Marisquería de Tradición en Tierra Negra",
    "Pesca Marina Fresca del Día",
    "Promos Semanales & Delivery Directo"
  ],
  "whatsappPitchCopy": "Buenas tardes equipo de Sal Marina! 🐟🌊 Vimos el éxito de sus almuerzos marinos en Tierra Negra. Para ayudarles a multiplicar sus ventas de delivery sin que el WhatsApp colapse con preguntas de precios o contornos, les montamos esta WebApp con menú interactivo, cálculo en Bs BCV y checkout directo a WhatsApp.\n\nPueden probar la demo y ver su Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/pidesalmarina",
  "address": "Calle 69 con Av. 9B, Sector Tierra Negra, Maracaibo",
  "phone": "+58 412-0308674",
  "hours": "Lunes a Domingo: 11:00 AM – 7:00 PM (Sábados hasta las 12:00 AM)",
  "instagramUrl": "https://www.instagram.com/pidesalmarina/",
  "mapsUrl": "https://maps.google.com/?q=Tierra+Negra+Maracaibo+Sal+Marina",
  "bcvRate": 64.2,
    "bookingType": "seafood-delivery-takeaway",
  "bookingTitle": "Almuerzos & Delivery Marino",
  "bookingSubtitle": "Pide tus pescados fritos, paellas y cazuelas de mariscos con despacho express y tasa BCV al día",
  "bookingOptions": [
    {
      "id": "salmarina-reserva-almuerzo",
      "name": "Reserva de Mesa para Almuerzo Ejecutivo",
      "description": "Aparta tu mesa en salón climatizado con menú de almuerzo pre-seleccionado para comer en menos de 20 minutos.",
      "priceUSD": 0,
      "unit": "reserva libre",
      "badge": "Sin Esperas",
      "features": [
        "Mesa lista al mediodía",
        "Servicio express",
        "Tasa BCV al día"
      ]
    }
  ],
  "categories": [
    {
      "id": "especialidades-marinas",
      "name": "Especialidades Marinas"
    },
    {
      "id": "pescados-fritos",
      "name": "Pescados Fritos & Plancha"
    },
    {
      "id": "ceviches-entradas",
      "name": "Ceviches & Entradas"
    }
  ],
  "menuItems": [
    {
      "id": "sal-arroz-1",
      "name": "Arroz a la Marinera Especial Sal Marina",
      "category": "especialidades-marinas",
      "description": "Arroz suelto y sazonado con camarones, calamares, trozos de pescado y mejillones con tostones y ensalada.",
      "priceUSD": 13.5,
      "popular": true
    },
    {
      "id": "sal-cazuela-1",
      "name": "Cazuela de Mariscos Gratinada",
      "category": "especialidades-marinas",
      "description": "Frutos del mar en salsa cremosa bisque con queso parmesano gratinado al horno y tostones.",
      "priceUSD": 16,
      "popular": true
    },
    {
      "id": "sal-pescado-1",
      "name": "Filete de Pescado a la Plancha (Combo Almuerzo)",
      "category": "pescados-fritos",
      "description": "Pescado blanco fresco a la plancha acompañado de consomé marino, arroz blanco, tostones y ensalada.",
      "priceUSD": 8.5,
      "popular": true
    },
    {
      "id": "sal-ceviche-1",
      "name": "Ceviche Clásico Sal Marina",
      "category": "ceviches-entradas",
      "description": "Cubos de pescado fresco marinados en zumo de limón criollo, cebolla morada, ají dulce y cilantro con chips de plátano.",
      "priceUSD": 9
    }
  ],
  "managerKpis": {
    "activeReservations": 31,
    "capacityPercentage": 90,
    "todaySalesUSD": 1490,
    "avgTicketUSD": 16
  },
  "sampleBookings": [
    {
      "id": "SAL-401",
      "clientName": "Ing. Manuel Barboza",
      "details": "Combo Almuerzo Marino (3 pax)",
      "time": "01:00 PM",
      "status": "confirmada",
      "pax": 3,
      "totalUSD": 25.5
    }
  ]
},
{
  "slug": "picanagrill",
  "batch": "dia5",
  "archetype": "gourmet-booking",
  "name": "Picaña Grill Steakhouse",
  "handle": "picanagrill_",
  "category": "Steakhouse Premium & Cortes a la Brasa",
  "badgeText": "🥩 Cortes Nobles & Salón VIP",
  "tagline": "Especialistas en picaña a la brasa, carnes en vara y veladas premium con música en vivo en Las Veritas.",
  "heroTitle": "FUEGO. BRASA. DISTINCIÓN.",
  "heroHighlight": "Picaña Grill",
  "heroSubtitle": "Reserva salón principal o área VIP, selecciona tus cortes madurados y asegura tu velada sin colas ni llamadas.",
  "logo": "/marcas/picanagrill.jpg",
  "coverImage": "/marcas/picanagrill-cover.jpg",
  "palette": {
    "primary": "#1F0808",
    "primaryHover": "#3B1010",
    "secondary": "#D90429",
    "accent": "#EF233C",
    "darkBg": "#0D0404",
    "cardBg": "#170808",
    "textLight": "#FFFFFF",
    "textMuted": "#D3A5A5",
    "border": "#3D1515",
    "glow": "rgba(217, 4, 41, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Picaña Grill Steakhouse es el destino carnívoro de Las Veritas: cortes importados y nacionales asados a la perfección en vara y carbón, coctelería de autor y salones VIP para cenas inolvidables.",
  "introStats": [
    {
      "label": "Cortes a la Brasa",
      "value": "+50 Platos",
      "detail": "Picaña prime, tomahawk y puntas"
    },
    {
      "label": "Ambiente VIP",
      "value": "Salón & Terraza",
      "detail": "Climatizado y música en vivo"
    },
    {
      "label": "Ubicación",
      "value": "Las Veritas",
      "detail": "Av. 16-A con Calle 73"
    }
  ],
  "trustBadges": [
    "Especialistas en Picaña & Cortes a la Brasa",
    "Salón VIP & Eventos Exclusivos",
    "Coctelería de Autor & Música en Vivo"
  ],
  "whatsappPitchCopy": "Buenas tardes equipo de Picaña Grill! 🥩🔥 Su propuesta de cortes a la brasa en Las Veritas es de primer nivel. Para optimizar la asignación de mesas VIP y reservas en noches con música en vivo, les construimos esta WebApp interactiva con selector de salón/área VIP, carta de cortes y confirmación a WhatsApp.\n\nLes comparto la demo y el video vertical:\n👉 https://byte-bridge-tau.vercel.app/demos/picanagrill",
  "address": "Av. 16-A con Calle 73, Sector Las Veritas, Maracaibo",
  "phone": "+58 412-0308674",
  "hours": "Martes a Domingo: 12:00 PM – 12:00 AM",
  "instagramUrl": "https://www.instagram.com/picanagrill_/",
  "mapsUrl": "https://maps.google.com/?q=Las+Veritas+Maracaibo+Picaña+Grill",
  "bcvRate": 64.2,
    "bookingType": "steakhouse-vip-table",
  "bookingTitle": "Reserva de Mesas & Salones VIP",
  "bookingSubtitle": "Garantiza tu mesa frente a las brasas, preselecciona cortes prime y cócteles de autor",
  "bookingOptions": [
    {
      "id": "picanagrill-mesa-vip",
      "name": "Mesa VIP Lounge Climatizada",
      "description": "Mesa reservada en el salón VIP con atención dedicada para disfrutar cortes prime y coctelería.",
      "priceUSD": 25,
      "unit": "depósito consumible",
      "badge": "Más Solicitada",
      "features": [
        "Salón VIP climatizado",
        "Consumo 100% acreditable",
        "Selección previa de cortes"
      ],
      "maxCapacity": 6
    },
    {
      "id": "picanagrill-tomahawk-exp",
      "name": "Experiencia Tomahawk & Brasa (4 pax)",
      "description": "Mesa preferencial con corte Tomahawk de 1.2kg a la brasa, tostones con queso fundido y botella de vino tinto.",
      "priceUSD": 65,
      "unit": "paquete carnívoro",
      "badge": "Chef's Special",
      "features": [
        "Tomahawk prime a la brasa",
        "Guarniciones familiares",
        "Botella de vino tinto incluida"
      ],
      "maxCapacity": 4
    }
  ],
  "categories": [
    {
      "id": "cortes-brasa",
      "name": "Cortes Prime a la Brasa"
    },
    {
      "id": "entradas-parrilleras",
      "name": "Entradas Parrilleras"
    },
    {
      "id": "cocteles-vinos",
      "name": "Coctelería & Vinos"
    }
  ],
  "menuItems": [
    {
      "id": "pic-corte-1",
      "name": "Picaña Prime a la Brasa (450g)",
      "category": "cortes-brasa",
      "description": "Corte de picaña jugosa con costra de sal marina a la brasa de carbón, servida con yuca al vapor y chimichurri.",
      "priceUSD": 19.5,
      "popular": true
    },
    {
      "id": "pic-entrada-1",
      "name": "Tostones Rellenos de Picaña (4 und)",
      "category": "entradas-parrilleras",
      "description": "Canastas de plátano verde rellenas de picaña en cubos a la brasa, queso de mano gratinado y salsa tártara.",
      "priceUSD": 11,
      "popular": true
    },
    {
      "id": "pic-corte-2",
      "name": "Puntas de Trasera al Grill (400g)",
      "category": "cortes-brasa",
      "description": "Jugoso corte de punta de trasera nacional con término a elección, ensalada mixta y arepitas fritas con nata.",
      "priceUSD": 17
    },
    {
      "id": "pic-drink-1",
      "name": "Smoked Old Fashioned de Autor",
      "category": "cocteles-vinos",
      "description": "Bourbon premium ahumado con astillas de roble en mesa, bitter de angostura y piel de naranja caramelizada.",
      "priceUSD": 8.5,
      "popular": true
    }
  ],
  "managerKpis": {
    "activeReservations": 26,
    "capacityPercentage": 95,
    "todaySalesUSD": 2340,
    "avgTicketUSD": 36
  },
  "sampleBookings": [
    {
      "id": "PIC-701",
      "clientName": "Alejandro Rincon",
      "details": "Experiencia Tomahawk & Brasa",
      "time": "08:30 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 65
    }
  ]
},
{
  "slug": "altamarmcbo",
  "batch": "dia5",
  "archetype": "table-ordering",
  "name": "Altamar Restaurante & Marisquería",
  "handle": "altamarmcbo",
  "category": "Marisquería Tradicional & Pescados",
  "badgeText": "🥘 Tradición en Paellas & Pescado Frito",
  "tagline": "Más de 15 años sirviendo auténtico sabor marino, cazuelas y paellas familiares en Las Veritas, Maracaibo.",
  "heroTitle": "EL AUTÉNTICO MARISCO.",
  "heroHighlight": "Altamar Maracaibo",
  "heroSubtitle": "Pide rondas de bebidas, tostones y platos marinos desde el QR en tu mesa o solicita delivery familiar a tasa BCV.",
  "logo": "/marcas/altamarmcbo.jpg",
  "coverImage": "/marcas/altamarmcbo-cover.jpg",
  "palette": {
    "primary": "#0B2545",
    "primaryHover": "#133E75",
    "secondary": "#134074",
    "accent": "#EE6C4D",
    "darkBg": "#061322",
    "cardBg": "#0C1F36",
    "textLight": "#FFFFFF",
    "textMuted": "#8DA9C4",
    "border": "#1D3B60",
    "glow": "rgba(238, 108, 77, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "Altamar Restaurante es la marisquería familiar por excelencia en Las Veritas: paellas gigantescas a fuego vivo, pescados fritos enteros con tostones crujientes y porciones generosas pensadas para compartir.",
  "introStats": [
    {
      "label": "Tradición Zuliana",
      "value": "+15 Años",
      "detail": "Referente marino en Las Veritas"
    },
    {
      "label": "Pesca Seleccionada",
      "value": "100% Fresca",
      "detail": "Curvina, róbalo y camarones"
    },
    {
      "label": "Ambiente",
      "value": "Familiar",
      "detail": "Salón climatizado y atención ágil"
    }
  ],
  "trustBadges": [
    "Especialistas en Paellas & Pescado Frito",
    "Pesca Fresca Seleccionada Diariamente",
    "Tradición Familiar en Las Veritas"
  ],
  "whatsappPitchCopy": "Hola equipo de Altamar Restaurante! 🦐🥘 Reconocemos la gran tradición de sus paellas y pescados fritos en Las Veritas. Para hacer que sus fines de semana sean más fluidos y sus comensales pidan rondas de bebidas y contornos sin esperar al mesonero, les armamos esta WebApp con menú QR interactivo y tasa BCV al día.\n\nPrueben la demo interactiva y miren el Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/altamarmcbo",
  "address": "Calle 89B, Sector Las Veritas / Bella Vista, Maracaibo",
  "phone": "+58 412-0308674",
  "hours": "Martes a Domingo: 11:30 AM – 6:30 PM",
  "instagramUrl": "https://www.instagram.com/altamarmcbo/",
  "mapsUrl": "https://maps.google.com/?q=Las+Veritas+Maracaibo+Altamar+Restaurante",
  "bcvRate": 64.2,
    "bookingType": "family-seafood-ordering",
  "bookingTitle": "Auto-Pedido en Mesa & Salón",
  "bookingSubtitle": "Ordena paellas familiares, tostones y cervezas frías sin esperar por mesoneros",
  "bookingOptions": [
    {
      "id": "altamar-mesa-domingo",
      "name": "Reserva de Mesa Familiar (4 a 10 pax)",
      "description": "Mesa reservada para almuerzos familiares de domingo con comanda rápida y paella pre-agendada.",
      "priceUSD": 0,
      "unit": "reserva libre",
      "badge": "Ideal Domingos",
      "features": [
        "Mesa familiar garantizada",
        "Atención prioritaria",
        "Menú digital multimoneda"
      ]
    }
  ],
  "categories": [
    {
      "id": "paellas-cazuelas",
      "name": "Paellas & Cazuelas"
    },
    {
      "id": "pescados-enteros",
      "name": "Pescados Enteros"
    },
    {
      "id": "entradas-marinas",
      "name": "Entradas & Vuelve a la Vida"
    }
  ],
  "menuItems": [
    {
      "id": "alt-paella-1",
      "name": "Paella Marinera Tradicional Altamar (2-3 pax)",
      "category": "paellas-cazuelas",
      "description": "Arroz húmedo con camarones gigantes, calamares, pulpo, mejillones y almejas con pimientos morrones y tostones.",
      "priceUSD": 26,
      "popular": true
    },
    {
      "id": "alt-pescado-1",
      "name": "Pescado Frito Entero (Curvina / Róbalo)",
      "category": "pescados-enteros",
      "description": "Pescado entero fresco frito al punto crujiente acompañado de tostones con queso rallado y ensalada mixta.",
      "priceUSD": 15,
      "popular": true
    },
    {
      "id": "alt-cazuela-1",
      "name": "Cazuela Altamar con Frutos del Mar",
      "category": "paellas-cazuelas",
      "description": "Mix de mariscos en crema madre gratinada con queso parmesano y hierbas aromáticas.",
      "priceUSD": 16
    },
    {
      "id": "alt-vuelve-1",
      "name": "Vuelve a la Vida / Ceviche Mixto Zuliano",
      "category": "entradas-marinas",
      "description": "Mariscos marinados en salsa cóctel criolla con limón, cilantro, cebollín y galletas de soda.",
      "priceUSD": 9.5,
      "popular": true
    }
  ],
  "managerKpis": {
    "activeReservations": 22,
    "capacityPercentage": 93,
    "todaySalesUSD": 1680,
    "avgTicketUSD": 24
  },
  "sampleBookings": [
    {
      "id": "ALT-601",
      "clientName": "Familia Montiel",
      "details": "Mesa Familiar (6 pax) + Paella",
      "time": "01:30 PM",
      "status": "confirmada",
      "pax": 6,
      "totalUSD": 26
    }
  ]
},
{
  "slug": "bogrillmcbo",
  "batch": "dia5",
  "archetype": "direct-delivery",
  "name": "BO Grill Parrillas & Ahumados",
  "handle": "bogrillmcbo",
  "category": "Parrilla Urbana, Burgers & Ahumados",
  "badgeText": "🍖 Bandejas Todoterreno & Lechón Ahumado",
  "tagline": "Especialistas en bandejas parrilleras monumentales, lechón ahumado y combos para compartir en Maracaibo.",
  "heroTitle": "BRASA. AHUMADO. VOLUMEN.",
  "heroHighlight": "BO Grill Maracaibo",
  "heroSubtitle": "Pide tus Bandejas Todoterreno y combos con selector multisede (Indio Mara / Cañada Honda) directo a WhatsApp.",
  "logo": "/marcas/bogrillmcbo.jpg",
  "coverImage": "/marcas/bogrillmcbo-cover.jpg",
  "palette": {
    "primary": "#2B0909",
    "primaryHover": "#4A1212",
    "secondary": "#E63946",
    "accent": "#FF9F1C",
    "darkBg": "#0E0505",
    "cardBg": "#190B0B",
    "textLight": "#FFFFFF",
    "textMuted": "#C7A6A6",
    "border": "#331818",
    "glow": "rgba(255, 159, 28, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-sans",
    "fontBody": "font-sans"
  },
  "introText": "BO Grill es la referencia de comida a la brasa y lechón ahumado en Maracaibo: famosas Bandejas Todoterreno con carnes nobles, queso frito y arepas para compartir en familia y amigos.",
  "introStats": [
    {
      "label": "Doble Sede",
      "value": "2 Ubicaciones",
      "detail": "Indio Mara & Cañada Honda"
    },
    {
      "label": "Especialidad Única",
      "value": "Lechón Ahumado",
      "detail": "Ahumado a fuego lento"
    },
    {
      "label": "Formato Masivo",
      "value": "Bandejas XXL",
      "detail": "Para compartir entre 4 y 6 personas"
    }
  ],
  "trustBadges": [
    "Parrillas al Carbón & Lechón Ahumado",
    "Doble Sede: Indio Mara & Cañada Honda",
    "Bandejas Todoterreno & Delivery Rápido"
  ],
  "whatsappPitchCopy": "Buenas tardes equipo de BO Grill! 🍖🔥 Sus Bandejas Todoterreno y su lechón ahumado mueven un volumen tremendo en Cañada Honda e Indio Mara. Para que ningún cliente espere en WhatsApp y los pedidos salgan coordinados por sede con tasa BCV automática, les armamos esta WebApp de Delivery Directo.\n\nMiren la demo y el video de 15 segundos aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/bogrillmcbo",
  "address": "Sede 1: Zona Indio Mara / Sede 2: Cañada Honda, Maracaibo",
  "phone": "+58 412-0308674",
  "hours": "Lunes a Domingo: 11:00 AM – 11:00 PM",
  "instagramUrl": "https://www.instagram.com/bogrillmcbo/",
  "mapsUrl": "https://maps.google.com/?q=Maracaibo+BO+Grill+Indio+Mara",
  "bcvRate": 64.2,
    "bookingType": "todoterreno-delivery-takeaway",
  "bookingTitle": "Delivery Directo Multi-Sede",
  "bookingSubtitle": "Selecciona tu sede (Indio Mara o Cañada Honda) y pide tus Bandejas Todoterreno sin comisiones",
  "bookingOptions": [
    {
      "id": "bo-reserva-mesa",
      "name": "Mesa para Grupos (Bandeja Todoterreno)",
      "description": "Aparta tu mesa en la sede Indio Mara para celebrar con amigos y tener tu bandeja parrillera lista.",
      "priceUSD": 0,
      "unit": "reserva libre",
      "badge": "Recomendado",
      "features": [
        "Mesa asignada al llegar",
        "Selector de sede",
        "Tasa oficial BCV"
      ]
    }
  ],
  "categories": [
    {
      "id": "bandejas-todoterreno",
      "name": "Bandejas Todoterreno"
    },
    {
      "id": "burgers-ahumadas",
      "name": "Burgers & Lechón"
    },
    {
      "id": "costillas-bbq",
      "name": "Costillas BBQ & Extras"
    }
  ],
  "menuItems": [
    {
      "id": "bo-bandeja-1",
      "name": "Bandeja Todoterreno BO Grill (4-5 personas)",
      "category": "bandejas-todoterreno",
      "description": "Carne a la brasa, pechuga de pollo, chorizo parrillero, lechón ahumado, tostones, arepitas, queso frito y salsas.",
      "priceUSD": 28,
      "popular": true
    },
    {
      "id": "bo-burger-1",
      "name": "Hamburguesa BO Grill con Lechón Ahumado",
      "category": "burgers-ahumadas",
      "description": "Carne de res al grill cubierta con tiras de lechón ahumado crujiente, queso frito zuliano y salsa BBQ artesanal.",
      "priceUSD": 8.5,
      "popular": true
    },
    {
      "id": "bo-costilla-1",
      "name": "Costillas BBQ Ahumadas a la Brasa",
      "category": "costillas-bbq",
      "description": "Costillar de cerdo tierno glaseado en salsa BBQ de la casa acompañado de papas rústicas sazonadas.",
      "priceUSD": 14
    },
    {
      "id": "bo-combo-duo",
      "name": "Combo Parrillero Dúo (2 pax)",
      "category": "bandejas-todoterreno",
      "description": "Carne, pollo, chorizo, tostones con queso y 2 bebidas frías.",
      "priceUSD": 15,
      "popular": true
    }
  ],
  "managerKpis": {
    "activeReservations": 37,
    "capacityPercentage": 97,
    "todaySalesUSD": 1980,
    "avgTicketUSD": 22
  },
  "sampleBookings": [
    {
      "id": "BO-901",
      "clientName": "Guillermo Rivas",
      "details": "Bandeja Todoterreno (5 pax) - Indio Mara",
      "time": "08:00 PM",
      "status": "confirmada",
      "pax": 5,
      "totalUSD": 28
    }
  ]
},
{
  "slug": "dantedipronto",
  "batch": "dia5",
  "archetype": "vip-access",
  "name": "Dante Di Pronto Pizza & Pasta",
  "handle": "dantedipronto",
  "category": "Pizzería Masa Madre, Rodizio & Trattoria",
  "badgeText": "🍕 Rodizio All-You-Can-Eat & Masa Madre",
  "tagline": "Pizzas artesanales de masa madre, tomates San Marzano y el legendario Rodizio de $10 en 5 de Julio.",
  "heroTitle": "AUTÉNTICA ITALIA.",
  "heroHighlight": "Dante Di Pronto",
  "heroSubtitle": "Compra tus Pases de Rodizio ilimitado de $10 con código QR o pide pizzas de masa madre a tasa oficial BCV.",
  "logo": "/marcas/dantedipronto.jpg",
  "coverImage": "/marcas/dantedipronto-cover.jpg",
  "palette": {
    "primary": "#260606",
    "primaryHover": "#3D0A0A",
    "secondary": "#D90429",
    "accent": "#2B9348",
    "darkBg": "#0C0404",
    "cardBg": "#180909",
    "textLight": "#FFFFFF",
    "textMuted": "#D6B8B8",
    "border": "#331616",
    "glow": "rgba(217, 4, 41, 0.4)"
  },
  "typography": {
    "fontDisplay": "font-serif",
    "fontBody": "font-sans"
  },
  "introText": "Dante Di Pronto es la trattoria de 5 de Julio famosa por su masa madre de fermentación natural, sus más de 30 variedades de pizzas al horno y su aclamado Rodizio All-You-Can-Eat de pizza y pasta por solo $10 por persona.",
  "introStats": [
    {
      "label": "Rodizio Ilimitado",
      "value": "$10 / Pax",
      "detail": "Pizza y pasta sin límite los fines de semana"
    },
    {
      "label": "Masa Madre",
      "value": "+30 Variedades",
      "detail": "Auténtico tomate San Marzano"
    },
    {
      "label": "Ubicación Clave",
      "value": "5 de Julio",
      "detail": "Frente a la Clínica D'Empaire"
    }
  ],
  "trustBadges": [
    "Auténtico Rodizio de Pizza & Pasta",
    "Masa Madre & Salsa San Marzano",
    "Punto Céntrico en Av. 5 de Julio"
  ],
  "whatsappPitchCopy": "Buenas tardes equipo de Dante Di Pronto! 🍕🍝 Su propuesta en 5 de Julio con las pizzas de masa madre y el Rodizio de $10 es de las más cotizadas de Maracaibo. Para evitar colas de espera en puerta y permitir que la gente reserve su Pase Rodizio con código QR o pida delivery en 3 clics, les diseñamos esta WebApp a medida con tasa BCV automática.\n\nLes comparto la demo y el video comercial:\n👉 https://byte-bridge-tau.vercel.app/demos/dantedipronto",
  "address": "Calle 77 (Av. 5 de Julio) con Av. 14A, frente a Clínica D'Empaire, Maracaibo",
  "phone": "+58 412-0308674",
  "hours": "Martes a Domingo: 12:00 PM – 11:30 PM (Rodizio: Vie-Sáb-Dom 12 a 6PM)",
  "instagramUrl": "https://www.instagram.com/dantedipronto/",
  "mapsUrl": "https://maps.google.com/?q=5+de+Julio+Maracaibo+Dante+Di+Pronto",
  "bcvRate": 64.2,
    "bookingType": "rodizio-pass-delivery",
  "bookingTitle": "Pases Rodizio & Delivery Masa Madre",
  "bookingSubtitle": "Reserva tu turno de Rodizio All-You-Can-Eat o pide pizzas artesanales a domicilio",
  "bookingOptions": [
    {
      "id": "dante-pase-rodizio",
      "name": "Pase Preventa Rodizio All-You-Can-Eat",
      "description": "Pase individual digital con QR para comer pizza y pasta ilimitada durante 2 horas en turnos de fin de semana con bebida incluida.",
      "priceUSD": 10,
      "unit": "persona/pase",
      "badge": "Best Seller",
      "features": [
        "Pizzas y pastas ilimitadas (2 horas)",
        "Bebida no alcohólica incluida",
        "Entrada garantizada sin cola"
      ],
      "maxCapacity": 1
    },
    {
      "id": "dante-mesa-trattoria",
      "name": "Reserva de Mesa Trattoria a la Carta",
      "description": "Mesa reservada para cena romántica o familiar para degustar pizzas de masa madre y pastas especiales a la carta.",
      "priceUSD": 15,
      "unit": "depósito consumible",
      "badge": "A la Carta",
      "features": [
        "Mesa reservada en sala",
        "Consumo 100% acreditable",
        "Tasa oficial BCV"
      ],
      "maxCapacity": 6
    }
  ],
  "categories": [
    {
      "id": "pizzas-artesanales",
      "name": "Pizzas Masa Madre"
    },
    {
      "id": "pastas-clasicas",
      "name": "Pastas & Lasagnas"
    },
    {
      "id": "calzones-postres",
      "name": "Calzones & Postres"
    }
  ],
  "menuItems": [
    {
      "id": "dan-pizza-1",
      "name": "Pizza Dante Di Pronto Especial",
      "category": "pizzas-artesanales",
      "description": "Masa madre crocante, salsa San Marzano, mozzarella fior di latte, prosciutto di Parma, rúcula fresca y lascas de parmesano.",
      "priceUSD": 13.5,
      "popular": true
    },
    {
      "id": "dan-pizza-2",
      "name": "Pizza Pepperoni New York Style",
      "category": "pizzas-artesanales",
      "description": "Masa madre delgada con salsa pomodoro, mozzarella abundante y doble porción de pepperoni artesanal.",
      "priceUSD": 10.5,
      "popular": true
    },
    {
      "id": "dan-pasta-1",
      "name": "Fettuccine Alfredo con Camarones",
      "category": "pastas-clasicas",
      "description": "Pasta fresca al huevo salteada en salsa cremosa de parmesano reggiano, mantequilla clarificada y camarones al ajillo.",
      "priceUSD": 12,
      "popular": true
    },
    {
      "id": "dan-pasta-2",
      "name": "Lasagna Bolognese Tradicional Gratinada",
      "category": "pastas-clasicas",
      "description": "Capas de pasta artesanal con salsa bolognese de res y cerdo cocida a fuego lento, bechamel y mozzarella dorada.",
      "priceUSD": 10
    }
  ],
  "managerKpis": {
    "activeReservations": 45,
    "capacityPercentage": 98,
    "todaySalesUSD": 2460,
    "avgTicketUSD": 18
  },
  "sampleBookings": [
    {
      "id": "DAN-101",
      "clientName": "Mauricio Villasmil",
      "details": "Pase Preventa Rodizio (4 pax)",
      "time": "02:00 PM",
      "status": "confirmada",
      "pax": 4,
      "totalUSD": 40
    }
  ]
}
];

export function getDemoBySlug(slug: string): BusinessDemo | undefined {
  return businessDemos.find((d) => d.slug === slug);
}
