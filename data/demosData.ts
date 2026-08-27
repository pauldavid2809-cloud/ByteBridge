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
  bookingType:
    | "resort-pass"
    | "lakeview-table"
    | "steakhouse-vip"
    | "executive-events"
    | "hookah-lounge"
    | "nightclub-vip"
    | "italian-terrace"
    | "terrace-blunch"
    | "bowling-lanes"
    | "boardgames-events";
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
    coverImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
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
    coverImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
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
    coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
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
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
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
    coverImage: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80",
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
    coverImage: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1200&q=80",
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
    coverImage: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
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
    coverImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
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
    coverImage: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&w=1200&q=80",
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
    coverImage: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1200&q=80",
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
];

export function getDemoBySlug(slug: string): BusinessDemo | undefined {
  return businessDemos.find((d) => d.slug === slug);
}
