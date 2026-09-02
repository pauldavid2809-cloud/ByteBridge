import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const demosPath = path.join(__dirname, "..", "data", "demosData.ts");

const batch7Demos = [
  // 1. SYBARIS RESTAURANT & GRILL
  {
    slug: "sybarisrest",
    batch: "dia7",
    archetype: "gourmet-booking",
    name: "Sybaris Restaurante - Grill",
    handle: "sybarisrest",
    category: "Cortes Prime · Terraza Lounge · Cocina Internacional",
    badgeText: "🥩 #SybarisExperience · Cortes Prime al Grill & Vinos",
    tagline: "Alta cocina a la brasa, pastas artesanales y coctelería de autor en La Lago",
    heroTitle: "La máxima experiencia de parrilla prime y",
    heroHighlight: "terraza gourmet",
    heroSubtitle: "Reserva tu mesa en terraza o salón climatizado, preselecciona tus cortes prime madurados y recibe confirmación con pase QR inmediato.",
    logo: "/marcas/sybarisrest.jpg",
    coverImage: "/marcas/sybarisrest-cover.jpg",
    palette: {
      primary: "#0D5C46",
      primaryHover: "#083C2D",
      secondary: "#B45309",
      accent: "#E5A93C",
      darkBg: "#051A14",
      cardBg: "rgba(8, 44, 34, 0.85)",
      textLight: "#ECFDF5",
      textMuted: "#A7F3D0",
      border: "rgba(229, 169, 60, 0.25)",
      glow: "rgba(229, 169, 60, 0.2)"
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans"
    },
    introText: "Sybaris es el restaurante grill de referencia en el sector La Lago. Una propuesta que fusiona cortes de carne Angus importados, pastas italianas elaboradas al día, pescados frescos a la plancha y una cava de vinos curada en un ambiente refinado.",
    introStats: [
      { label: "Maduración Prime", value: "28 Días", detail: "Cortes Angus dry-aged certificados" },
      { label: "Cava de Vinos", value: "45+", detail: "Etiquetas de España, Italia y Argentina" },
      { label: "Ambientes", value: "2", detail: "Terraza lounge al aire libre + Salón VIP" }
    ],
    trustBadges: ["Cortes Angus Certificados", "Sommelier en Sala", "Estacionamiento Privado con Valet"],
    whatsappPitchCopy: "¡Hola equipo de Sybaris Restaurante! 🥩🍷 Admiramos la categoría y prestigio de su propuesta gastronómica en La Lago. Sabemos que los fines de semana las solicitudes de reservas de mesas en terraza y requerimientos especiales colapsan el chat de WhatsApp.\\n\\nLes construimos esta WebApp a medida con Reserva Gourmet de Mesas, Sommelier Digital de vinos y pase con código QR para confirmación instantánea.\\n\\nPueden probar la demo interactiva y ver su video comercial aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/sybarisrest",
    address: "Calle 77 (5 de Julio) con Av. 3G, Sector La Lago, Maracaibo, Zulia",
    mapsUrl: "https://maps.google.com/?q=Sybaris+Restaurant+Maracaibo",
    hours: "Lunes a Domingo: 12:00 PM - 11:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/sybarisrest/",
    bookingTitle: "Reserva tu Mesa Gourmet & Selección de Cava",
    bookingSubtitle: "Asegura tu ubicación preferencial en terraza o salón privado con pase digital",
    bookingOptions: [
      {
        id: "mesa-terraza",
        name: "Mesa Terraza Lounge",
        description: "Ubicación al aire libre con ambiente lounge, música selecta y vista a la avenida.",
        priceUSD: 0,
        unit: "por reserva",
        badge: "Más Solicitada",
        features: ["Ubicación en terraza", "Servicio de sommelier", "Carta digital interactiva"],
        maxCapacity: 6
      },
      {
        id: "salon-vip",
        name: "Chef's Table Salón VIP",
        description: "Salón climatizado íntimo con atención exclusiva del chef parrillero y maridaje guiado.",
        priceUSD: 25,
        unit: "depósito consumible",
        badge: "Experiencia Exclusiva",
        features: ["Mesa VIP climatizada", "Copa de cortesía", "Menú degustación asistido"],
        maxCapacity: 12
      }
    ],
    categories: [
      { id: "carnes", name: "Cortes Prime a la Brasa", icon: "🥩" },
      { id: "pastas", name: "Pastas & Risottos", icon: "🍝" },
      { id: "mariscos", name: "Entradas & Mar", icon: "🍤" },
      { id: "cocteles", name: "Mixología & Vinos", icon: "🍷" }
    ],
    menuItems: [
      {
        id: "tomahawk-prime",
        name: "Tomahawk Prime Angus (1.2 kg)",
        category: "carnes",
        description: "Corte imponente a las brasas de carbón vegetal, servido sobre piedra caliente con sal marina y mantequilla de romero.",
        priceUSD: 44,
        badge: "Plato Insignia",
        popular: true,
        tags: ["Angus", "Gluten Free", "Recomendado"]
      },
      {
        id: "ojo-bife-sybaris",
        name: "Ribeye / Ojo de Bife 400g",
        category: "carnes",
        description: "Jugoso corte madurado al punto deseado, acompañado de papas trufadas y vegetales grillados.",
        priceUSD: 26,
        popular: true,
        tags: ["Dry-Aged", "Grill"]
      },
      {
        id: "risotto-di-mare",
        name: "Risotto Frutos del Mar",
        category: "pastas",
        description: "Arroz arborio en bisque de langostinos, calamares sellados, camarones y mejillones con toque de vino blanco.",
        priceUSD: 18,
        tags: ["Mariscos", "Chef's Choice"]
      },
      {
        id: "fettuccine-tartufo",
        name: "Fettuccine al Tartufo con Lomito",
        category: "pastas",
        description: "Pasta artesanal fresca salteada en salsa de crema de trufas negras y medallones de lomito sellados.",
        priceUSD: 19,
        badge: "Especialidad",
        popular: true,
        tags: ["Pasta Fresca", "Trufa"]
      },
      {
        id: "carpaccio-lomito",
        name: "Carpaccio de Lomito Clásico",
        category: "mariscos",
        description: "Láminas finas de solomo con alcaparras crocantes, virutas de parmesano reggiano y reducción balsámica.",
        priceUSD: 12,
        tags: ["Entrada Fría"]
      },
      {
        id: "coctel-sybaris-gold",
        name: "Sybaris Gold Smoked",
        category: "cocteles",
        description: "Bourbon infusionado con higos secos, bitter aromático, toque de miel orgánica y ahumado con corteza de roble.",
        priceUSD: 9,
        badge: "Coctel de Autor",
        popular: true,
        tags: ["Mixología"]
      }
    ],
    managerKpis: {
      capacityPercentage: 88,
      todaySalesUSD: 1840,
      avgTicketUSD: 46
    },
    sampleBookings: [
      { id: "SYB-101", clientName: "Carlos Eduardo Mendoza", details: "Terraza Lounge (4 pax) · Cena Ejecutiva", time: "08:00 PM", status: "confirmada", pax: 4, totalUSD: 180 },
      { id: "SYB-102", clientName: "Mariana Rivas", details: "Salón VIP (8 pax) · Aniversario", time: "09:00 PM", status: "en_mesa", pax: 8, totalUSD: 360 },
      { id: "SYB-103", clientName: "Alejandro Colina", details: "Mesa Terraza (2 pax) · Degustación Tomahawk", time: "07:30 PM", status: "pendiente", pax: 2, totalUSD: 95 }
    ]
  },

  // 2. SR. TRUHÁN
  {
    slug: "srtruhan",
    batch: "dia7",
    archetype: "table-ordering",
    name: "Sr. Truhán Gastrobar",
    handle: "srtruhan",
    category: "Gastrobar · Tapas de Autor · Noches de Stand-Up & Música",
    badgeText: "🍸 #ElTruhan · Tapas, Tragos de Autor & Buena Vibra",
    tagline: "El punto de encuentro bohemio en San Cristóbal con tapas creativas y mixología",
    heroTitle: "Cócteles de autor, tapas irreverentes y",
    heroHighlight: "pedido en mesa por QR",
    heroSubtitle: "Escanea el código QR de tu mesa, pide rondas de tragos y tapas directo a barra y divide la cuenta sin esperar mesoneros.",
    logo: "/marcas/srtruhan.jpg",
    coverImage: "/marcas/srtruhan-cover.jpg",
    palette: {
      primary: "#D97706",
      primaryHover: "#B45309",
      secondary: "#475569",
      accent: "#FBBF24",
      darkBg: "#0F172A",
      cardBg: "rgba(30, 41, 59, 0.85)",
      textLight: "#F8FAFC",
      textMuted: "#CBD5E1",
      border: "rgba(251, 191, 36, 0.25)",
      glow: "rgba(251, 191, 36, 0.2)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "Sr. Truhán es el gastrobar más auténtico y bohemio de San Cristóbal. Un espacio donde las noches cobran vida con tapas fusión venezolanas, mixología creativa y eventos en vivo que llenan el local cada semana.",
    introStats: [
      { label: "Tragos de Autor", value: "14", detail: "Mixología propia con destilados premium" },
      { label: "Noches con Show", value: "3/sem", detail: "Stand-up comedy, acústicos y DJs" },
      { label: "Velocidad de Barra", value: "3 min", detail: "Comanda directa a bartender por QR" }
    ],
    trustBadges: ["Auto-Pedido QR sin Esperas", "Mixología de Vanguardia", "Ambiente Climatizado & Terraza"],
    whatsappPitchCopy: "¡Buenas noches equipo de Sr. Truhán! 🍸🔥 Sabemos lo activa y concurrida que se pone la sala en las noches de música y stand-up en San Cristóbal, donde pedir otra ronda de tragos o tapas puede demorarse cuando la sala está repleta.\\n\\nLes armamos una WebApp a medida con Auto-Pedido por QR en mesa: sus clientes escanean, piden cócteles directo al bartender y pagan a tasa BCV en tiempo real sin colas.\\n\\nPrueben la demo interactiva aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/srtruhan",
    address: "Sector Pueblo Nuevo / Barrio Obrero, San Cristóbal, Táchira",
    mapsUrl: "https://maps.google.com/?q=Sr+Truhan+San+Cristobal",
    hours: "Miércoles a Sábado: 6:00 PM - 2:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/srtruhan/",
    bookingTitle: "Reserva de Mesa & Auto-Pedido con QR",
    bookingSubtitle: "Comanda tus cócteles y tapas en segundos desde tu smartphone",
    bookingOptions: [
      {
        id: "mesa-lounge",
        name: "Mesa Gastrobar",
        description: "Acceso garantizado para grupos con comanda QR directo a barra y cocina.",
        priceUSD: 0,
        unit: "por reserva",
        badge: "Acceso Libre",
        features: ["Menú QR en mesa", "Comanda sin mesero", "División de cuenta fácil"]
      },
      {
        id: "mesa-show",
        name: "Mesa VIP Noche de Show",
        description: "Mesa frente a tarima en noches de stand-up comedy o música en vivo con trago de bienvenida.",
        priceUSD: 10,
        unit: "cover canjeable",
        badge: "Días de Evento",
        features: ["Ubicación preferencial", "1 Cóctel de autor incluido", "Atención prioritaria"]
      }
    ],
    categories: [
      { id: "tapas", name: "Tapas & Picadas", icon: "🍢" },
      { id: "hamburguesas", name: "Burgers & Sandwiches", icon: "🍔" },
      { id: "cocteles", name: "Cócteles Insignia", icon: "🍸" },
      { id: "shots", name: "Cervezas & Shots", icon: "🍻" }
    ],
    menuItems: [
      {
        id: "tequenos-truhan",
        name: "Tequeños Truhán Trufados (6 uds)",
        category: "tapas",
        description: "Masa hojaldrada artesanal rellena de queso gouda y pincelada con aceite de trufa blanca y dip de papelón con maracuyá.",
        priceUSD: 7,
        badge: "Top Ventas",
        popular: true,
        tags: ["Tapas", "Para Compartir"]
      },
      {
        id: "tapas-ibericas",
        name: "Tabla Mixta El Truhán",
        category: "tapas",
        description: "Jamón serrano, queso manchego curado, aceitunas marinadas, chorizo ibérico y tostadas campesinas al ajo.",
        priceUSD: 15,
        popular: true,
        tags: ["Picada"]
      },
      {
        id: "burger-truhan",
        name: "Burger Truhán Doble Smash",
        category: "hamburguesas",
        description: "Doble carne smash 100% de res, queso americano fundido, mermelada de tocineta casera y alioli de ajo asado en pan brioche.",
        priceUSD: 10.5,
        badge: "Estrella",
        popular: true,
        tags: ["Smash", "Burger"]
      },
      {
        id: "coctel-el-truhan",
        name: "El Truhán Signature Cocktail",
        category: "cocteles",
        description: "Gin macerado en cardamomo, licor de flor de saúco, reducción de frutos rojos y splash de prosecco.",
        priceUSD: 8,
        badge: "De la Casa",
        popular: true,
        tags: ["Gin", "Signature"]
      },
      {
        id: "mojito-maracuya",
        name: "Mojito de Parchita Ahumado",
        category: "cocteles",
        description: "Ron añejo venezolano, pulpa natural de maracuyá, hierbabuena fresca y golpe ahumado en copa balón.",
        priceUSD: 6.5,
        tags: ["Refrescante"]
      },
      {
        id: "costillas-bbq-ron",
        name: "Costillitas Glaseadas al Ron Santa Teresa",
        category: "tapas",
        description: "Costillas de cerdo tiernas cocinadas 6 horas a baja temperatura con salsa BBQ artesanal al ron y semillas de sésamo.",
        priceUSD: 14,
        popular: true,
        tags: ["Carnes", "Gourmet"]
      }
    ],
    managerKpis: {
      capacityPercentage: 92,
      todaySalesUSD: 1420,
      avgTicketUSD: 24
    },
    sampleBookings: [
      { id: "TRU-201", clientName: "Gabriel Pernía", details: "Mesa Gastrobar (5 pax) · Cumpleaños", time: "08:30 PM", status: "confirmada", pax: 5, totalUSD: 120 },
      { id: "TRU-202", clientName: "Andrea Chacón", details: "Mesa VIP Noche de Show (4 pax)", time: "09:30 PM", status: "en_mesa", pax: 4, totalUSD: 95 },
      { id: "TRU-203", clientName: "José Manuel Silva", details: "Barra Cócteles (2 pax) · After-work", time: "07:00 PM", status: "confirmada", pax: 2, totalUSD: 48 }
    ]
  },

  // 3. CRISPY'S
  {
    slug: "crispys_ve",
    batch: "dia7",
    archetype: "direct-delivery",
    name: "Crispy's Fried Chicken",
    handle: "crispys.ve",
    category: "Pollo Frito Crujiente · Smash Chicken · Combos Familiares",
    badgeText: "🍗 #ElPolloMasCrujiente · Receta Secreta 11 Especias",
    tagline: "El auténtico pollo frito crujiente americano y chicken burgers en San Cristóbal",
    heroTitle: "Pollo ultra crujiente, salsas caseras y",
    heroHighlight: "delivery directo 0% comisión",
    heroSubtitle: "Pide tus tenders, buckets familiares y chicken sandwiches directo desde nuestra WebApp oficial sin pagar sobreprecios en apps de terceros.",
    logo: "/marcas/crispys_ve.jpg",
    coverImage: "/marcas/crispys_ve-cover.jpg",
    palette: {
      primary: "#DC2626",
      primaryHover: "#B91C1C",
      secondary: "#D97706",
      accent: "#F59E0B",
      darkBg: "#180808",
      cardBg: "rgba(45, 12, 12, 0.85)",
      textLight: "#FEF2F2",
      textMuted: "#FECACA",
      border: "rgba(220, 38, 38, 0.25)",
      glow: "rgba(220, 38, 38, 0.2)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "Crispy's es el templo del pollo frito estilo sureño americano en Táchira. Pollo marinado por 24 horas en buttermilk con 11 especias secretas, rebozado a mano y frito al momento para lograr ese crocante dorado irresistible.",
    introStats: [
      { label: "Marinado Secreto", value: "24 Horas", detail: "Buttermilk y especias para máxima jugosidad" },
      { label: "Tiempo de Entrega", value: "25 min", detail: "Despacho térmico directo a domicilio" },
      { label: "Ahorro en Delivery", value: "100%", detail: "Cero comisiones abusivas para el cliente" }
    ],
    trustBadges: ["100% Pollo Fresco Jamás Congelado", "Despacho Térmico Garantizado", "Tasa BCV Oficial en Vivo"],
    whatsappPitchCopy: "¡Hola equipo de Crispy's! 🍗🔥 Somos fanáticos del crocante y calidad de su pollo frito en San Cristóbal. Sabemos que depender de apps de delivery que cobran hasta un 25% de comisión reduce mucho el margen de cada combo vendido.\\n\\nLes construimos una WebApp de Delivery Directo y Takeaway propia: sus clientes piden en 30 segundos, eligen salsas y combos familiares y la orden llega lista a su WhatsApp sin intermediarios.\\n\\nVean su demo lista aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/crispys_ve",
    address: "Av. Principal Pueblo Nuevo, San Cristóbal, Táchira",
    mapsUrl: "https://maps.google.com/?q=Crispys+San+Cristobal",
    hours: "Martes a Domingo: 11:30 AM - 10:30 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/crispys.ve/",
    bookingTitle: "Pide a Domicilio o Retiro Pick-Up",
    bookingSubtitle: "Comanda tu combo favorito en 3 clics con cálculo BCV al instante",
    bookingOptions: [
      {
        id: "delivery-express",
        name: "Delivery Directo a Casa",
        description: "Envío en empaque térmico con motorizado propio para que llegue caliente y crujiente.",
        priceUSD: 2,
        unit: "costo de envío",
        badge: "Más Rápido",
        features: ["Empaque térmico sellado", "Seguimiento en WhatsApp", "Pago móvil o divisas"]
      },
      {
        id: "pickup-tienda",
        name: "Retiro Pick-Up Express",
        description: "Haz tu pedido online y retíralo en mostrador en 15 minutos sin hacer fila en caja.",
        priceUSD: 0,
        unit: "sin costo",
        badge: "Cero Colas",
        features: ["Listo en 15 minutos", "Entrega prioritaria", "Ahorro total"]
      }
    ],
    categories: [
      { id: "sandwiches", name: "Crispy Sandwiches", icon: "🍔" },
      { id: "buckets", name: "Buckets & Combos", icon: "🍗" },
      { id: "tenders", name: "Tenders & Alitas", icon: "🍟" },
      { id: "sides", name: "Acompañantes & Dips", icon: "🥤" }
    ],
    menuItems: [
      {
        id: "crispy-deluxe-burger",
        name: "Crispy Deluxe Chicken Sandwich",
        category: "sandwiches",
        description: "Pechuga de pollo mega crujiente, ensalada coleslaw fresca, pepinillos encurtidos y salsa Crispy secreta en pan brioche artesanal.",
        priceUSD: 7.5,
        badge: "El Más Vendido",
        popular: true,
        tags: ["Favorito", "Pollo Crujiente"]
      },
      {
        id: "spicy-nashville-burger",
        name: "Spicy Nashville Hot Chicken",
        category: "sandwiches",
        description: "Pechuga bañada en aceite especiado Nashville estilo Tennessee, queso derretido y aderezo ranch para balancear.",
        priceUSD: 8,
        popular: true,
        spicy: true,
        tags: ["Picante", "Nashville"]
      },
      {
        id: "bucket-familiar-12",
        name: "Bucket Familiar Crispy (12 Piezas)",
        category: "buckets",
        description: "12 piezas mixtas de pollo súper crocante, 4 bollitos de pan de maíz, ración grande de papas y 4 salsas a elección.",
        priceUSD: 19.99,
        badge: "Para la Familia",
        popular: true,
        tags: ["Familiar", "Económico"]
      },
      {
        id: "tenders-box-6",
        name: "Crispy Tenders Box (6 Piezas)",
        category: "tenders",
        description: "Tiras de pechuga pura rebozadas a mano con papas fritas sazonadas y 2 dips caseros (Honey Mustard y BBQ Ahumada).",
        priceUSD: 8.5,
        tags: ["Tenders", "Papas"]
      },
      {
        id: "loaded-fries-crispy",
        name: "Loaded Crispy Fries",
        category: "sides",
        description: "Papas fritas crocantes bañadas en salsa cheddar tibia, trocitos de crispy tenders y tocineta ahumada crujiente.",
        priceUSD: 6,
        popular: true,
        tags: ["Para Picar"]
      },
      {
        id: "alitas-crispy-8",
        name: "Crispy Wings x8 con Salsa Honey BBQ",
        category: "tenders",
        description: "Alitas de pollo extra crujientes glaseadas con salsa de miel y BBQ o salsa Buffalo picante.",
        priceUSD: 7.5,
        tags: ["Alitas"]
      }
    ],
    managerKpis: {
      capacityPercentage: 75,
      todaySalesUSD: 980,
      avgTicketUSD: 18
    },
    sampleBookings: [
      { id: "CRP-301", clientName: "Daniela Moncada", details: "Bucket Familiar 12 Pzas · Delivery Pueblo Nuevo", time: "01:15 PM", status: "confirmada", pax: 4, totalUSD: 24 },
      { id: "CRP-302", clientName: "Luis Fernando Rojas", details: "2x Crispy Deluxe + Loaded Fries · Pick-Up", time: "07:45 PM", status: "en_mesa", pax: 2, totalUSD: 21 },
      { id: "CRP-303", clientName: "Marcos Vivas", details: "Tenders Box x6 · Delivery Barrio Obrero", time: "08:30 PM", status: "pendiente", pax: 1, totalUSD: 10.5 }
    ]
  },

  // 4. ENIGMA CAFÉ
  {
    slug: "enigmacafe_sc",
    batch: "dia7",
    archetype: "item-builder",
    name: "Enigma Café & Brunch",
    handle: "enigmacafe.sc",
    category: "Café de Especialidad · Brunch Moderno · Espacio Co-Working",
    badgeText: "☕ #DesvelaElEnigma · Café de Finca & Brunches Estéticos",
    tagline: "El spot estético de café de especialidad y brunch de vanguardia en Barrio Obrero",
    heroTitle: "Café de especialidad, brunches estéticos y",
    heroHighlight: "creador de bowls a tu medida",
    heroSubtitle: "Diseña tu tostada o açaí bowl ingrediente por ingrediente, elige tu método de filtrado de café y retira sin colas en mostrador.",
    logo: "/marcas/enigmacafe_sc.jpg",
    coverImage: "/marcas/enigmacafe_sc-cover.jpg",
    palette: {
      primary: "#7C3AED",
      primaryHover: "#6D28D9",
      secondary: "#3B82F6",
      accent: "#A78BFA",
      darkBg: "#0D0A14",
      cardBg: "rgba(30, 18, 54, 0.85)",
      textLight: "#F5F3FF",
      textMuted: "#DDD6FE",
      border: "rgba(167, 139, 250, 0.25)",
      glow: "rgba(124, 58, 237, 0.25)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "Enigma Café es el espacio de referencia para los amantes del buen café y el teletrabajo en San Cristóbal. Granos de origen tachirense tostados artesanalmente, desayunos aesthetic, opciones keto y veganas, y Wi-Fi de alta velocidad.",
    introStats: [
      { label: "Puntaje SCA Café", value: "86+", detail: "Café de especialidad de micro-lotes andinos" },
      { label: "Opciones Brunch", value: "20+", detail: "Tostadas, bowls, pancakes y waffles" },
      { label: "Wi-Fi Fibra", value: "300 Mbps", detail: "Espacio habilitado para trabajo remoto" }
    ],
    trustBadges: ["Café de Finca Tostado Semanalmente", "Baristas Certificados", "Espacio Pet Friendly & Co-Working"],
    whatsappPitchCopy: "¡Hola equipo de Enigma Café! ☕✨ Su propuesta estética de brunch y café de especialidad en Barrio Obrero es de las más comentadas en San Cristóbal. Cuando los clientes quieren personalizar sus tostadas o bowls de açaí con ingredientes específicos, coordinarlo por chat genera retrasos.\\n\\nLes creamos una WebApp interactiva con 'Brunch & Bowl Builder': sus clientes arman su combinación en pantalla, piden su método de café y pagan con tasa BCV al día en un minuto.\\n\\nPueden probar la experiencia digital aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/enigmacafe_sc",
    address: "Carrera 21 con Calle 10, Barrio Obrero, San Cristóbal, Táchira",
    mapsUrl: "https://maps.google.com/?q=Enigma+Cafe+San+Cristobal",
    hours: "Lunes a Domingo: 8:00 AM - 9:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/enigmacafe.sc/",
    bookingTitle: "Personaliza tu Brunch & Reserva Espacio",
    bookingSubtitle: "Elige tus ingredientes paso a paso o agenda tu mesa co-working",
    bookingOptions: [
      {
        id: "brunch-builder",
        name: "Arma tu Brunch & Café",
        description: "Constructor personalizado de tostadas, bowls saludables o waffles con café especial.",
        priceUSD: 0,
        unit: "pedido online",
        badge: "Interactivo",
        features: ["Base a elección", "Toppings y proteínas", "Café de origen incluido"]
      },
      {
        id: "coworking-pass",
        name: "Pase Co-Working + Café Ilimitado",
        description: "Jornada de 4 horas con mesa ergonómica, conexión fibra óptica y café americano ilimitado.",
        priceUSD: 10,
        unit: "por jornada",
        badge: "Productividad",
        features: ["Café americano refill", "Wi-Fi dedicado alta velocidad", "Toma corriente exclusivo"]
      }
    ],
    categories: [
      { id: "cafe", name: "Café de Especialidad", icon: "☕" },
      { id: "tostadas", name: "Tostadas & Brunches", icon: "🥑" },
      { id: "bowls", name: "Açaí & Bowls Saludables", icon: "🍓" },
      { id: "postres", name: "Repostería de Vitrina", icon: "🥐" }
    ],
    menuItems: [
      {
        id: "tostada-salmon-enigma",
        name: "Tostada Nórdica de Salmón & Aguacate",
        category: "tostadas",
        description: "Pan de masa madre tostado con queso crema de eneldo, láminas de salmón curado, aguacate hass y huevo pochado.",
        priceUSD: 8.5,
        badge: "Favorito Brunch",
        popular: true,
        tags: ["Masa Madre", "Salmón"]
      },
      {
        id: "acai-bowl-enigma",
        name: "Enigma Açaí Bowl Silvestre",
        category: "bowls",
        description: "Base cremosa de açaí puro con fresas frescas, arándanos, granola artesanal de almendras y llovizna de mantequilla de maní.",
        priceUSD: 6.5,
        popular: true,
        tags: ["Superfood", "Vegano"]
      },
      {
        id: "flat-white-especialidad",
        name: "Flat White Micro-Lote Táchira",
        category: "cafe",
        description: "Doble espresso de café lavado de altura con leche texturizada sedosa y arte latte.",
        priceUSD: 3.5,
        badge: "Barista Pick",
        popular: true,
        tags: ["Especialidad"]
      },
      {
        id: "french-toast-brioche",
        name: "Tostadas Francesas de Brioche Enigma",
        category: "tostadas",
        description: "Pan brioche bañado en crema de vainilla y canela, sellado a la mantequilla con frutos rojos y sirope de maple puro.",
        priceUSD: 7,
        popular: true,
        tags: ["Dulce", "Brunch"]
      },
      {
        id: "matcha-latte-vainilla",
        name: "Ceremonial Matcha Latte Vainilla",
        category: "cafe",
        description: "Té verde matcha ceremonial japonés batido al momento con leche de avena o almendras y vainilla de Madagascar.",
        priceUSD: 4,
        tags: ["Antioxidante", "Matcha"]
      },
      {
        id: "croissant-almendras-enigma",
        name: "Croissant Relleno de Frangipane & Almendras",
        category: "postres",
        description: "Hojaldre 100% mantequilla relleno de crema de almendras tostadas y cubierto de almendras laminadas.",
        priceUSD: 4.5,
        tags: ["Pastelería"]
      }
    ],
    managerKpis: {
      capacityPercentage: 82,
      todaySalesUSD: 890,
      avgTicketUSD: 14
    },
    sampleBookings: [
      { id: "ENI-401", clientName: "Valeria Contreras", details: "Tostada Nórdica + Flat White · Pick-Up", time: "09:00 AM", status: "confirmada", pax: 1, totalUSD: 12 },
      { id: "ENI-402", clientName: "Sebastián Guerrero", details: "Pase Co-Working (2 personas)", time: "10:30 AM", status: "en_mesa", pax: 2, totalUSD: 20 },
      { id: "ENI-403", clientName: "Camila Bautista", details: "Mesa Brunch Terraza (3 pax)", time: "11:15 AM", status: "pendiente", pax: 3, totalUSD: 32 }
    ]
  },

  // 5. BEAU COFFEE
  {
    slug: "beaucoffee_sc",
    batch: "dia7",
    archetype: "table-ordering",
    name: "Beau Coffee & Bakery",
    handle: "beaucoffee.sc",
    category: "Bistró Minimalista · Masa Madre · Croissants de Especialidad",
    badgeText: "🥐 #BeauMoments · Panadería Artesanal & Café Contemporáneo",
    tagline: "El encanto de la panadería europea y el café de autor en Pueblo Nuevo",
    heroTitle: "Panadería de masa madre, croissants de autor y",
    heroHighlight: "auto-pedido en mesa con QR",
    heroSubtitle: "Escanea el código QR de tu mesa, explora los croissants recién horneados y bebidas frías, y ordena a barista en segundos.",
    logo: "/marcas/beaucoffee_sc.jpg",
    coverImage: "/marcas/beaucoffee_sc-cover.jpg",
    palette: {
      primary: "#0284C7",
      primaryHover: "#0369A1",
      secondary: "#64748B",
      accent: "#38BDF8",
      darkBg: "#0B1528",
      cardBg: "rgba(15, 30, 50, 0.85)",
      textLight: "#F0F9FF",
      textMuted: "#BAE6FD",
      border: "rgba(56, 189, 248, 0.25)",
      glow: "rgba(2, 132, 199, 0.2)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "Beau Coffee combina la estética nórdica minimalista con la tradición panadera francesa en San Cristóbal. Hogar de los croissants de pistacho más virales de la ciudad, desayunos ejecutivos elegantes y cold brews infusionados.",
    introStats: [
      { label: "Horneado Diario", value: "3 Tandas", detail: "Croissants y panes recién salidos del horno" },
      { label: "Fermentación Lenta", value: "48 Horas", detail: "Masa madre natural para digestión perfecta" },
      { label: "Mesa Express", value: "QR Inmediato", detail: "Sin esperas para pedir café o desayunos" }
    ],
    trustBadges: ["Mantequilla 100% Neozelandesa", "Masa Madre 48h Fermentación", "Atención Ágil sin Filas"],
    whatsappPitchCopy: "¡Hola equipo de Beau Coffee! 🥐☕ Su concepto minimalista y la calidad de sus croissants en Pueblo Nuevo han marcado tendencia en San Cristóbal. Al mediodía y en las mañanas, cuando se llena el salón, atender comensales uno a uno para tomar cafés y bollería satura al personal.\\n\\nLes preparamos una WebApp con Auto-Pedido QR en mesa: sus clientes escanean, ven la vitrina del día con fotos y piden al instante con cálculo a tasa oficial BCV.\\n\\nMiren su demo interactiva aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/beaucoffee_sc",
    address: "Av. Principal de Pueblo Nuevo, Edif. Boutique, San Cristóbal, Táchira",
    mapsUrl: "https://maps.google.com/?q=Beau+Coffee+San+Cristobal",
    hours: "Martes a Domingo: 7:30 AM - 8:30 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/beaucoffee.sc/",
    bookingTitle: "Comanda en Mesa por QR & Pedidos para Llevar",
    bookingSubtitle: "Elige tus favoritos de panadería y café sin demoras",
    bookingOptions: [
      {
        id: "mesa-beau",
        name: "Mesa Bistró Beau",
        description: "Ordena en sala a través del código QR con servicio directo a tu mesa.",
        priceUSD: 0,
        unit: "por orden",
        badge: "En Sala",
        features: ["Menú QR en mesa", "Muestra de vitrina en tiempo real", "Pago sin levantarse"]
      },
      {
        id: "box-takeaway",
        name: "Caja de Croissants Pick-Up",
        description: "Caja surtida de 4 croissants gourmet recién horneados para llevar a casa o la oficina.",
        priceUSD: 18,
        unit: "box surtido",
        badge: "Para Llevar",
        features: ["4 Croissants gourmet", "Empaque de lujo", "Retiro sin cola"]
      }
    ],
    categories: [
      { id: "croissants", name: "Croissants & Bollería", icon: "🥐" },
      { id: "desayunos", name: "Huevos & Desayunos", icon: "🍳" },
      { id: "cafes", name: "Espressos & Bebidas", icon: "☕" },
      { id: "panaderia", name: "Hogazas Masa Madre", icon: "🍞" }
    ],
    menuItems: [
      {
        id: "croissant-pistacho-beau",
        name: "Croissant Supreme de Pistacho",
        category: "croissants",
        description: "Croissant hojaldrado con crema pastelera de pistacho siciliano puro, topping de ganache blanco y pistachos triturados.",
        priceUSD: 5.5,
        badge: "Estrella Viral",
        popular: true,
        tags: ["Pistacho", "Top Seller"]
      },
      {
        id: "huevos-benedictinos-beau",
        name: "Beau Eggs Benedict en Brioche",
        category: "desayunos",
        description: "Huevos poché sobre tostadas brioche caseras, jamón de pavo ahumado y salsa holandesa tibia con toque de cebollín.",
        priceUSD: 8,
        popular: true,
        tags: ["Desayuno Gourmet"]
      },
      {
        id: "cold-brew-nitro",
        name: "Nitro Cold Brew Infusionado",
        category: "cafes",
        description: "Café extraído en frío durante 18 horas y presurizado con nitrógeno para una textura cremosa similar a una cerveza stout.",
        priceUSD: 4,
        tags: ["Cold Brew", "Refrescante"]
      },
      {
        id: "croissant-almendras-beau",
        name: "Croissant Doble Almendras",
        category: "croissants",
        description: "Bañado en almíbar ligero de vainilla, relleno con frangipane y cubierto de finas almendras tostadas.",
        priceUSD: 4.5,
        popular: true,
        tags: ["Clásico Francés"]
      },
      {
        id: "avocado-toast-beau",
        name: "Avocado Toast en Pan Campesino",
        category: "desayunos",
        description: "Rebanada gruesa de masa madre con emulsión de aguacate, tomates cherry confitados, queso feta y semillas de sésamo.",
        priceUSD: 6.5,
        tags: ["Saludable"]
      },
      {
        id: "torta-vasca-quemada",
        name: "Basque Burnt Cheesecake",
        category: "croissants",
        description: "Tarta de queso caramelizada al estilo San Sebastián con centro cremoso que se derrite al corte.",
        priceUSD: 5,
        tags: ["Postre"]
      }
    ],
    managerKpis: {
      capacityPercentage: 85,
      todaySalesUSD: 1120,
      avgTicketUSD: 16
    },
    sampleBookings: [
      { id: "BEA-501", clientName: "Mauricio Albarrán", details: "Mesa Bistró (2 pax) · Desayuno", time: "08:15 AM", status: "confirmada", pax: 2, totalUSD: 24 },
      { id: "BEA-502", clientName: "Paola Zambrano", details: "Box de Croissants x4 · Pick-Up", time: "09:45 AM", status: "en_mesa", pax: 1, totalUSD: 18 },
      { id: "BEA-503", clientName: "Ignacio Ferrer", details: "Mesa Bistró (4 pax) · Merienda", time: "04:30 PM", status: "pendiente", pax: 4, totalUSD: 36 }
    ]
  },

  // 6. BRUSELAS SAN CRISTÓBAL
  {
    slug: "bruselas_sc",
    batch: "dia7",
    archetype: "item-builder",
    name: "Bruselas Chocolatería & Waffles",
    handle: "bruselas_sc",
    category: "Chocolatería · Wafles Belgas · Crepería Artesanal & Fondues",
    badgeText: "🧇 #SaborBelga · Wafles Auténticos & Chocolate Puro",
    tagline: "Wafles belgas artesanales, fondues de chocolate y crepes para endulzar tus tardes",
    heroTitle: "Chocolates belgas, wafles dorados y",
    heroHighlight: "constructor de wafles interactivo",
    heroSubtitle: "Arma tu wafle belga perfecto: elige la masa, el baño de chocolate tibio, frutas frescas y toppings crujientes en 3 clics.",
    logo: "/marcas/bruselas_sc.jpg",
    coverImage: "/marcas/bruselas_sc-cover.jpg",
    palette: {
      primary: "#854D0E",
      primaryHover: "#713F12",
      secondary: "#D97706",
      accent: "#FBBF24",
      darkBg: "#170F07",
      cardBg: "rgba(40, 25, 12, 0.85)",
      textLight: "#FEFCE8",
      textMuted: "#FEF08A",
      border: "rgba(251, 191, 36, 0.25)",
      glow: "rgba(217, 119, 6, 0.25)"
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans"
    },
    introText: "Bruselas es el rincón más dulce de San Cristóbal. Inspirado en las chocolaterías de Bélgica, elabora wafles lieja caramelizados, crepes dulces y saladas, fondues para compartir y chocolates calientes espesos.",
    introStats: [
      { label: "Masa Belga", value: "100% Original", detail: "Con perlas de azúcar importadas que caramelizan" },
      { label: "Toppings & Baños", value: "18+", detail: "Chocolates belgas, avellanas, frutas y helados" },
      { label: "Fondues", value: "Para 2 y 4", detail: "Con frutas frescas y masmelos tostados" }
    ],
    trustBadges: ["Chocolate Belga Genuino", "Wafles Horneados al Minuto", "Opciones Saladas y Dulces"],
    whatsappPitchCopy: "¡Hola equipo de Bruselas San Cristóbal! 🧇🍫 Adoramos el aroma a wafles recién horneados y la calidad de su chocolate. En horas de la tarde, cuando los clientes quieren combinar toppings, salsas y frutas, o pedir fondues para grupos, coordinar todo por chat toma demasiado tiempo.\\n\\nLes construimos una WebApp con 'Waffle & Crepe Builder': sus clientes personalizan su wafle en pantalla con cálculo a tasa oficial BCV y mandan la comanda lista a su cocina.\\n\\nPrueben la demo interactiva aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/bruselas_sc",
    address: "Sector Barrio Obrero, San Cristóbal, Táchira",
    mapsUrl: "https://maps.google.com/?q=Bruselas+San+Cristobal",
    hours: "Lunes a Domingo: 1:00 PM - 9:30 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/bruselas_sc/",
    bookingTitle: "Diseña tu Wafle o Crepe Belga",
    bookingSubtitle: "Selecciona tu base, coberturas y toppings paso a paso",
    bookingOptions: [
      {
        id: "waffle-builder",
        name: "Arma tu Wafle Belga",
        description: "Constructor interactivo: Wafle Lieja o Clásico + Baño de Chocolate + Frutas + Toppings.",
        priceUSD: 0,
        unit: "por orden",
        badge: "El Más Popular",
        features: ["Masa caramelizada caliente", "Salsa a elección", "2 Toppings incluidos"]
      },
      {
        id: "fondue-parejas",
        name: "Fondue de Chocolate para Dos",
        description: "Olla de fondue con chocolate belga fundido, fresas, bananos, masmelos y trozos de wafle.",
        priceUSD: 14,
        unit: "para 2 personas",
        badge: "Ideal Parejas",
        features: ["Chocolate de origen", "Frutas frescas", "Mesa reservada"]
      }
    ],
    categories: [
      { id: "wafles", name: "Wafles Belgas de Autor", icon: "🧇" },
      { id: "crepes", name: "Crepes Dulces & Saladas", icon: "🥞" },
      { id: "fondues", name: "Fondues & Chocolates", icon: "🫕" },
      { id: "malteadas", name: "Bebidas & Malteadas", icon: "🥤" }
    ],
    menuItems: [
      {
        id: "wafle-bruselas-supreme",
        name: "Wafle Bruselas Supremo",
        category: "wafles",
        description: "Wafle belga caramelizado con baño de Nutella, fresas frescas, helado artesanal de vainilla y lluvia de avellanas tostadas.",
        priceUSD: 6.5,
        badge: "Insignia",
        popular: true,
        tags: ["Nutella", "Wafle"]
      },
      {
        id: "fondue-chocolate-belga",
        name: "Fondue de Chocolate Belga para Dos",
        category: "fondues",
        description: "Cazuela de chocolate semi-amargo derretido con brochetas de fresa, banano, masmelos y barquillas crujientes.",
        priceUSD: 14,
        badge: "Para Compartir",
        popular: true,
        tags: ["Fondue", "Parejas"]
      },
      {
        id: "crepe-pollo-champinones",
        name: "Crepe Salada de Pollo & Champiñones",
        category: "crepes",
        description: "Crepe francesa rellena de pechuga desmechada en salsa bechamel de champiñones frescos y queso gratinado.",
        priceUSD: 7.5,
        popular: true,
        tags: ["Salado", "Crepe"]
      },
      {
        id: "chocolate-espeso-belga",
        name: "Submarino de Chocolate Caliente Belga",
        category: "fondues",
        description: "Leche vaporizada caliente servida con barra entera de chocolate belga para fundir en taza y crema chantilly.",
        priceUSD: 4,
        tags: ["Caliente", "Chocolate"]
      },
      {
        id: "wafle-kinder-bueno",
        name: "Wafle Kinder & Crema de Avellana",
        category: "wafles",
        description: "Cubierto con crema de chocolate blanco, trozos de Kinder Bueno, sirope de caramelo y helado de chocolate.",
        priceUSD: 7,
        tags: ["Especial"]
      },
      {
        id: "malteada-artesanal-bruselas",
        name: "Malteada Artesanal de Ferrero",
        category: "malteadas",
        description: "Helado artesanal batido con bombones Ferrero Rocher, borde de Nutella y crema batida.",
        priceUSD: 5.5,
        tags: ["Bebida Fría"]
      }
    ],
    managerKpis: {
      capacityPercentage: 90,
      todaySalesUSD: 940,
      avgTicketUSD: 12
    },
    sampleBookings: [
      { id: "BRU-601", clientName: "Yolanda Cárdenas", details: "Fondue para Dos · Reserva Mesa", time: "05:00 PM", status: "confirmada", pax: 2, totalUSD: 18 },
      { id: "BRU-602", clientName: "Carlos Duque", details: "2x Wafle Bruselas Supremo · Pick-Up", time: "06:15 PM", status: "en_mesa", pax: 2, totalUSD: 13 },
      { id: "BRU-603", clientName: "Nathaly Mora", details: "Mesa Cumpleaños Wafles (6 pax)", time: "07:00 PM", status: "pendiente", pax: 6, totalUSD: 42 }
    ]
  },

  // 7. MOMENTOS SAN CRISTÓBAL
  {
    slug: "momentossc",
    batch: "dia7",
    archetype: "gift-customizer",
    name: "Momentos San Cristóbal",
    handle: "momentossc_",
    category: "Lounge de Celebraciones · Desayunos Sorpresa · Eventos Íntimos",
    badgeText: "✨ #CelebraMomentos · Espacios Soñados & Detalles Únicos",
    tagline: "El lugar perfecto para celebrar cumpleaños, desayunos sorpresa y momentos mágicos",
    heroTitle: "Celebraciones íntimas, desayunos sorpresa y",
    heroHighlight: "cotizador de eventos con pase QR",
    heroSubtitle: "Diseña tu paquete de celebración o desayuno sorpresa: personaliza dedicatoria, globos, pastelería y agenda la fecha de entrega en minutos.",
    logo: "/marcas/momentossc.jpg",
    coverImage: "/marcas/momentossc-cover.jpg",
    palette: {
      primary: "#E11D48",
      primaryHover: "#BE123C",
      secondary: "#F43F5E",
      accent: "#FDA4AF",
      darkBg: "#170A10",
      cardBg: "rgba(45, 15, 28, 0.85)",
      textLight: "#FFF1F2",
      textMuted: "#FECDD3",
      border: "rgba(253, 164, 175, 0.25)",
      glow: "rgba(225, 29, 72, 0.25)"
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans"
    },
    introText: "Momentos San Cristóbal es el espacio boutique preferido para aniversarios, pedidas de mano, desayunos de cumpleaños y talleres en Táchira. Un ambiente cálido y fotogénico que transforma cualquier fecha en un recuerdo inolvidable.",
    introStats: [
      { label: "Eventos Realizados", value: "350+", detail: "Cumpleaños, pedidas de mano y baby showers" },
      { label: "Boxes Sorpresa", value: "100% Personalizados", detail: "Con dedicatoria caligrafiada y globos" },
      { label: "Reserva VIP", value: "Pase QR", detail: "Acceso privado garantizado para tu grupo" }
    ],
    trustBadges: ["Coordinadora de Eventos Dedicada", "Decoración & Globos Incluidos", "Pagos Multimoneda Zelle y BCV"],
    whatsappPitchCopy: "¡Hola equipo de Momentos San Cristóbal! ✨💖 Su espacio es el más hermoso y fotogénico para celebrar ocasiones especiales en la ciudad. Pero sabemos que coordinar detalles de cumpleaños, tortas, dedicatorias y disponibilidad de fechas por WhatsApp toma horas de mensajes y audios.\\n\\nLes creamos una WebApp con 'Event & Gift Customizer': sus clientes eligen el paquete de celebración, escriben su dedicatoria, reservan fecha y pagan a tasa oficial BCV de inmediato.\\n\\nPrueben la demo interactiva aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/momentossc",
    address: "Urbanización Las Lomas / Pueblo Nuevo, San Cristóbal, Táchira",
    mapsUrl: "https://maps.google.com/?q=Momentos+San+Cristobal",
    hours: "Lunes a Sábado: 9:00 AM - 8:00 PM (Bajo Reserva)",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/momentossc_/",
    bookingTitle: "Cotiza tu Celebración o Desayuno Sorpresa",
    bookingSubtitle: "Elige tu paquete temático con fecha y hora garantizadas",
    bookingOptions: [
      {
        id: "desayuno-sorpresa",
        name: "Box Desayuno Sorpresa Deluxe",
        description: "Caja de madera con sándwich gourmet, waffles, jugo de naranja natural, rosas y tarjeta con dedicatoria.",
        priceUSD: 25,
        unit: "por arreglo",
        badge: "El Más Pedido",
        features: ["Tarjeta caligrafiada", "Globo con helio", "Entrega a domicilio puntual"]
      },
      {
        id: "paquete-cumpleanos",
        name: "Celebración Cumpleaños Íntimo en Sala",
        description: "Mesa decorada con globos, mini cake temático, tabla de quesos y brindis con vino espumante para 4 personas.",
        priceUSD: 45,
        unit: "paquete 4 personas",
        badge: "Experiencia VIP",
        features: ["Mesa decorada exclusiva", "Mini cake incluido", "Brindis con espumante"]
      }
    ],
    categories: [
      { id: "celebraciones", name: "Paquetes de Eventos", icon: "🎂" },
      { id: "desayunos", name: "Desayunos Sorpresa", icon: "🎁" },
      { id: "tablas", name: "Tablas & Picadas", icon: "🧀" },
      { id: "tortas", name: "Tortas & Dulces", icon: "🍰" }
    ],
    menuItems: [
      {
        id: "box-desayuno-deluxe",
        name: "Box Desayuno Cumpleaños Momentos",
        category: "desayunos",
        description: "Croissant relleno de jamón serrano, bowl de frutas frescas, mini wafles con miel, café cold brew, jugo natural y rosas frescas.",
        priceUSD: 25,
        badge: "Top Regalo",
        popular: true,
        tags: ["Desayuno", "Regalo"]
      },
      {
        id: "paquete-cumpleanos-lounge",
        name: "Paquete Celebración Cumpleaños (4 Pax)",
        category: "celebraciones",
        description: "Mesa reservada decorada con arco orgánico de globos, velita volcán, torta decorada y cóctel de bienvenida para los 4 invitados.",
        priceUSD: 45,
        badge: "Insignia",
        popular: true,
        tags: ["Celebración", "Sala"]
      },
      {
        id: "tabla-charcuteria-momentos",
        name: "Tabla de Quesos & Frutas Momentos",
        category: "tablas",
        description: "Selección de quesos brie y madurados, jamón serrano, uvas sin semilla, fresas, frutos secos y galletas artesanales.",
        priceUSD: 18,
        popular: true,
        tags: ["Picada"]
      },
      {
        id: "mini-cake-momentos",
        name: "Bento Cake de Cumpleaños Personalizado",
        category: "tortas",
        description: "Torta pequeña de vainilla rellena de arequipe con mensaje manuscrito en buttercream a elección del cliente.",
        priceUSD: 12,
        tags: ["Torta"]
      },
      {
        id: "caja-dulce-fresas",
        name: "Box de 12 Fresas Bañadas en Chocolate",
        category: "desayunos",
        description: "Fresas gigantes seleccionadas bañadas en chocolate blanco y de leche con detalles dorados comestibles.",
        priceUSD: 15,
        tags: ["Chocolates"]
      },
      {
        id: "alquiler-sala-taller",
        name: "Alquiler de Espacio Privado (Por Hora)",
        category: "celebraciones",
        description: "Salón climatizado para talleres, lanzamientos de marca o sesiones fotográficas con mobiliario aesthetic.",
        priceUSD: 30,
        tags: ["Alquiler"]
      }
    ],
    managerKpis: {
      capacityPercentage: 78,
      todaySalesUSD: 680,
      avgTicketUSD: 32
    },
    sampleBookings: [
      { id: "MOM-701", clientName: "Karla Cárdenas", details: "Celebración Cumpleaños 4 Pax · Sala", time: "04:00 PM", status: "confirmada", pax: 4, totalUSD: 45 },
      { id: "MOM-702", clientName: "Franklin Useche", details: "Box Desayuno Sorpresa · Envío Pueblo Nuevo", time: "08:00 AM", status: "en_mesa", pax: 1, totalUSD: 25 },
      { id: "MOM-703", clientName: "Mariángel Gómez", details: "Alquiler Sala para Taller de Maquillaje (3h)", time: "02:00 PM", status: "pendiente", pax: 8, totalUSD: 90 }
    ]
  },

  // 8. FRATELLO PIZZAS
  {
    slug: "fratellopizzas_sc",
    batch: "dia7",
    archetype: "direct-delivery",
    name: "Fratello Pizzas Artesanales",
    handle: "fratellopizzas.sc",
    category: "Pizzería al Horno de Piedra · Masa Madre · Delivery & Comanda QR",
    badgeText: "🍕 #FratelloPizzas · Masa Fina, Borde Inflado & Queso Fundido",
    tagline: "Auténtica pizza artesanal al horno de piedra con ingredientes frescos en San Cristóbal",
    heroTitle: "Pizzas artesanales al horno de piedra y",
    heroHighlight: "delivery directo sin sobreprecio",
    heroSubtitle: "Pide tus pizzas familiares, calzones y panes de ajo directo a nuestra pizzería con cálculo automático a tasa oficial BCV y despacho express.",
    logo: "/marcas/fratellopizzas_sc.jpg",
    coverImage: "/marcas/fratellopizzas_sc-cover.jpg",
    palette: {
      primary: "#E11D48",
      primaryHover: "#BE123C",
      secondary: "#16A34A",
      accent: "#22C55E",
      darkBg: "#15080C",
      cardBg: "rgba(40, 15, 22, 0.85)",
      textLight: "#FFF1F2",
      textMuted: "#FECDD3",
      border: "rgba(34, 197, 94, 0.25)",
      glow: "rgba(225, 29, 72, 0.2)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "Fratello Pizzas rescata la tradición de la pizza napolitana y contemporánea en San Cristóbal. Masa fermentada durante 48 horas, salsa de tomates San Marzano y cocción a más de 400°C en horno de piedra.",
    introStats: [
      { label: "Masa Fermentada", value: "48 Horas", detail: "Ligera, crocante y de fácil digestión" },
      { label: "Horno de Piedra", value: "400°C", detail: "Borde inflado y queso mozzarella fundido al punto" },
      { label: "Comisión Delivery", value: "0%", detail: "Canal propio directo a tu WhatsApp" }
    ],
    trustBadges: ["Horno de Piedra a la Leña", "Ingredientes de Calidad Superior", "Entrega Rápida en Empaque Térmico"],
    whatsappPitchCopy: "¡Buenas noches equipo de Fratello Pizzas! 🍕🔥 Amamos la masa crocante y la calidad de sus pizzas en San Cristóbal. Sabemos que los viernes y sábados por la noche el chat de WhatsApp se satura de mensajes pidiendo el menú y preguntando por precios o tasas de cambio.\\n\\nLes desarrollamos una WebApp de Delivery Directo y Auto-Pedido en Sala: sus clientes seleccionan el tamaño, agregan ingredientes extras, ven la tasa oficial BCV en vivo y la orden entra directa y limpia a su cocina.\\n\\nVean la demo en vivo aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/fratellopizzas_sc",
    address: "Av. 19 de Abril frente al Parque Quinimarí, San Cristóbal, Táchira",
    mapsUrl: "https://maps.google.com/?q=Fratello+Pizzas+San+Cristobal",
    hours: "Miércoles a Lunes: 5:00 PM - 11:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/fratellopizzas.sc/",
    bookingTitle: "Pide tu Pizza a Domicilio o Mesa en Sala",
    bookingSubtitle: "Elige sabores clásicos o especiales con masa artesanal",
    bookingOptions: [
      {
        id: "delivery-pizza",
        name: "Delivery a Casa Caliente",
        description: "Envío express en caja térmica para conservar el queso derretido y borde crujiente.",
        priceUSD: 2,
        unit: "tarifa de envío",
        badge: "A Domicilio",
        features: ["Caja térmica sellada", "Confirmación automática", "Pago móvil o divisas"]
      },
      {
        id: "mesa-pizzeria",
        name: "Mesa en Pizzería",
        description: "Auto-pedido en sala escaneando el código QR de la mesa con entrega al minuto.",
        priceUSD: 0,
        unit: "sin costo",
        badge: "En Sala",
        features: ["Orden directa a pizzero", "Cero colas en caja", "División de cuenta fácil"]
      }
    ],
    categories: [
      { id: "especiales", name: "Pizzas de la Casa", icon: "🍕" },
      { id: "clasicas", name: "Pizzas Tradicionales", icon: "🧀" },
      { id: "calzones", name: "Calzones & Panes", icon: "🥖" },
      { id: "bebidas", name: "Bebidas & Cervezas", icon: "🥤" }
    ],
    menuItems: [
      {
        id: "pizza-fratello-especial",
        name: "Pizza Fratello de Autor (Grande)",
        category: "especiales",
        description: "Salsa de tomate casera, mozzarella fior di latte, tocineta ahumada, jamón serrano, champiñones salteados y rúgula fresca con reducción balsámica.",
        priceUSD: 13,
        badge: "Insignia",
        popular: true,
        tags: ["Especialidad", "Gourmet"]
      },
      {
        id: "pizza-pepperoni-lovers",
        name: "Pepperoni Supremo Familiar",
        category: "clasicas",
        description: "Doble porción de pepperoni crujiente, queso mozzarella fundido y orégano seco sobre masa fina y crocante.",
        priceUSD: 11.5,
        popular: true,
        tags: ["Pepperoni", "Top Ventas"]
      },
      {
        id: "pizza-margherita-bufala",
        name: "Margherita Tradizionale",
        category: "clasicas",
        description: "Tomates San Marzano triturados, mozzarella fresca, hojas de albahaca fresca y chorrito de aceite de oliva extra virgen.",
        priceUSD: 9.5,
        tags: ["Vegetariana", "Clásica"]
      },
      {
        id: "calzone-cuatro-quesos",
        name: "Calzone Relleno 4 Quesos & Jamón",
        category: "calzones",
        description: "Masa plegada y horneada al punto rellena de mozzarella, provolone, gorgonzola, queso crema y jamón pierna.",
        priceUSD: 8.5,
        popular: true,
        tags: ["Calzone"]
      },
      {
        id: "pan-ajo-gratinado",
        name: "Pan de Ajo con Mozzarella Gratinada",
        category: "calzones",
        description: "Pan de pizza artesanal pincelado con mantequilla de ajo y perejil, cubierto de queso derretido.",
        priceUSD: 4.5,
        tags: ["Entrada"]
      },
      {
        id: "pizza-cuatro-estaciones",
        name: "Pizza Cuatro Estaciones",
        category: "especiales",
        description: "Cuatro cuadrantes de sabor: jamón cocido, alcachofas, champiñones y aceitunas negras con queso mozzarella.",
        priceUSD: 12,
        tags: ["Variedad"]
      }
    ],
    managerKpis: {
      capacityPercentage: 86,
      todaySalesUSD: 1380,
      avgTicketUSD: 22
    },
    sampleBookings: [
      { id: "FRA-801", clientName: "José Gregorio Colmenares", details: "Pizza Fratello Grande + Pan de Ajo · Delivery", time: "07:15 PM", status: "confirmada", pax: 3, totalUSD: 19.5 },
      { id: "FRA-802", clientName: "Mariana Barillas", details: "2x Pepperoni Supremo · Mesa Sala (5 pax)", time: "08:30 PM", status: "en_mesa", pax: 5, totalUSD: 28 },
      { id: "FRA-803", clientName: "David Zambrano", details: "Calzone 4 Quesos · Pick-Up", time: "09:00 PM", status: "pendiente", pax: 1, totalUSD: 8.5 }
    ]
  },

  // 9. KALA CAFÉ
  {
    slug: "kala_cafesc",
    batch: "dia7",
    archetype: "table-ordering",
    name: "Kala Café de Origen",
    handle: "kala.cafesc",
    category: "Café de Origen Tachirense · Pastelería Artesanal · Terraza & Brunch",
    badgeText: "🌿 #KalaCafe · Granos de Altura & Dulces Hechos con Amor",
    tagline: "El sabor auténtico de la montaña andina en cada taza de café y postre artesanal",
    heroTitle: "Café de origen tachirense, repostería y",
    heroHighlight: "auto-pedido en terraza con QR",
    heroSubtitle: "Disfruta de la brisa andina en terraza: escanea el código QR en mesa, ordena lattes de autor y sándwiches gourmet al instante.",
    logo: "/marcas/kala_cafesc.jpg",
    coverImage: "/marcas/kala_cafesc-cover.jpg",
    palette: {
      primary: "#059669",
      primaryHover: "#047857",
      secondary: "#10B981",
      accent: "#34D399",
      darkBg: "#061811",
      cardBg: "rgba(6, 40, 28, 0.85)",
      textLight: "#ECFDF5",
      textMuted: "#A7F3D0",
      border: "rgba(52, 211, 153, 0.25)",
      glow: "rgba(5, 150, 105, 0.2)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "Kala Café es un homenaje al café andino de altura y a la pastelería hecha en casa. Un rincón acogedor en San Cristóbal con vista privilegiada, donde las tardes se acompañan de café bombón, tortas de queso y mocktails herbales.",
    introStats: [
      { label: "Altura de Cultivo", value: "1.650 msnm", detail: "Micro-lotes de café de Rubio y Bramón" },
      { label: "Tartas del Día", value: "8+", detail: "Repostería horneada cada mañana sin conservantes" },
      { label: "Velocidad de Sala", value: "QR Express", detail: "Comanda enviada a barra al instante" }
    ],
    trustBadges: ["Café 100% Tachirense de Origen", "Pastelería Recién Horneada", "Terraza con Vista a la Montaña"],
    whatsappPitchCopy: "¡Buenas tardes equipo de Kala Café! 🌿☕ Admiramos la calidez de su espacio y el respeto que tienen por el café de origen tachirense. En las tardes de terraza llena, tomar pedidos mesa por mesa puede generar demoras en los pedidos de café y meriendas.\\n\\nLes diseñamos una WebApp con Auto-Pedido QR en mesa: sus clientes ordenan sus lattes, postres y bocadillos desde el teléfono, con tasa oficial BCV y pago directo sin levantarse.\\n\\nPueden probar la experiencia digital aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/kala_cafesc",
    address: "Sector Pirineos / Pueblo Nuevo, San Cristóbal, Táchira",
    mapsUrl: "https://maps.google.com/?q=Kala+Cafe+San+Cristobal",
    hours: "Martes a Domingo: 2:00 PM - 9:30 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/kala.cafesc/",
    bookingTitle: "Reserva de Terraza & Auto-Pedido con QR",
    bookingSubtitle: "Comanda tu café de altura y postres favoritos sin esperas",
    bookingOptions: [
      {
        id: "mesa-terraza-kala",
        name: "Mesa Terraza Mirador",
        description: "Mesa al aire libre con vista a la cordillera y comanda digital directa por QR.",
        priceUSD: 0,
        unit: "sin costo",
        badge: "Vista Andina",
        features: ["Menú QR en mesa", "Servicio a la mesa ágil", "Wi-Fi libre"]
      },
      {
        id: "combo-merienda",
        name: "Combo Merienda Andina para Dos",
        description: "2 Cafés especiales a elección + 2 Porciones de tarta artesanal + Agua mineral.",
        priceUSD: 14,
        unit: "para 2 personas",
        badge: "Recomendado",
        features: ["2 Cafés de especialidad", "2 Porciones de torta", "Mesa reservada"]
      }
    ],
    categories: [
      { id: "cafes", name: "Cafés de Altura", icon: "☕" },
      { id: "tortas", name: "Repostería Artesanal", icon: "🍰" },
      { id: "salados", name: "Sándwiches & Salados", icon: "🥪" },
      { id: "frias", name: "Bebidas Frías & Mocktails", icon: "🍹" }
    ],
    menuItems: [
      {
        id: "cafe-bombon-kala",
        name: "Café Bombón Kala Tricolor",
        category: "cafes",
        description: "Capas de leche condensada artesanal, espresso doble de altura y espuma cremosa de leche con toque de canela.",
        priceUSD: 3.5,
        badge: "Favorito",
        popular: true,
        tags: ["Insignia", "Café Dulce"]
      },
      {
        id: "cheesecake-frutos-rojos",
        name: "Cheesecake Horneado con Frutos Rojos",
        category: "tortas",
        description: "Tarta de queso crema suave horneada sobre base de galleta de mantequilla, bañada en coulis de fresas y moras andinas.",
        priceUSD: 5.5,
        badge: "Top Ventas",
        popular: true,
        tags: ["Postre", "Cheesecake"]
      },
      {
        id: "sandwich-roastbeef-kala",
        name: "Sándwich de Roast Beef & Cebollas Caramelizadas",
        category: "salados",
        description: "Pan ciabatta rústico con láminas de carne magra al horno, queso suizo, rúgula y mayonesa de mostaza dijon.",
        priceUSD: 7,
        popular: true,
        tags: ["Gourmet", "Salado"]
      },
      {
        id: "frappe-caramelo-salado",
        name: "Frappé de Café con Caramelo Salado",
        category: "frias",
        description: "Café espresso batido con hielo, leche entera, jarabe de caramelo salado casero y chantilly.",
        priceUSD: 4.5,
        tags: ["Frappé", "Frío"]
      },
      {
        id: "torta-zanahoria-nueces",
        name: "Carrot Cake Andina con Nueces",
        category: "tortas",
        description: "Bizcocho húmedo de zanahoria, nueces y especias con cobertura clásica de frosting de queso crema.",
        priceUSD: 5,
        tags: ["Torta Clásica"]
      },
      {
        id: "te-chai-artesanal",
        name: "Chai Latte Especiado Caliente",
        category: "cafes",
        description: "Té negro infusionado con canela, clavo, cardamomo y jengibre fresco con leche cremada.",
        priceUSD: 3.5,
        tags: ["Té", "Sin Café"]
      }
    ],
    managerKpis: {
      capacityPercentage: 80,
      todaySalesUSD: 760,
      avgTicketUSD: 11
    },
    sampleBookings: [
      { id: "KAL-901", clientName: "Silvia Colmenares", details: "Combo Merienda para Dos · Terraza", time: "04:30 PM", status: "confirmada", pax: 2, totalUSD: 14 },
      { id: "KAL-902", clientName: "Manuel Chacón", details: "Mesa Terraza (4 pax) · Café y Postres", time: "05:45 PM", status: "en_mesa", pax: 4, totalUSD: 26 },
      { id: "KAL-903", clientName: "Diana Rodríguez", details: "Cheesecake + Café Bombón · Pick-Up", time: "06:15 PM", status: "pendiente", pax: 1, totalUSD: 9 }
    ]
  },

  // 10. PA' PICAR Y MÁS
  {
    slug: "pa_picar_mas",
    batch: "dia7",
    archetype: "gift-customizer",
    name: "Pa' Picar Más",
    handle: "pa_picar.mas",
    category: "Catering de Pasapalos · Tablas Gourmet · Bandejas para Eventos",
    badgeText: "🥟 #PaPicarMas · Los Mejores Pasapalos & Picadas para Fiestas",
    tagline: "Bandejas de pasapalos calientes, fríos y tablas de picadas para celebrar en grande",
    heroTitle: "Pasapalos crujientes para tus eventos y",
    heroHighlight: "cotizador de bandejas en segundos",
    heroSubtitle: "Calcula y personaliza las bandejas de pasapalos para tu fiesta o reunión: tequeños, pastelitos, alitas y empanaditas con entrega programada.",
    logo: "/marcas/pa_picar_mas.jpg",
    coverImage: "/marcas/pa_picar_mas-cover.jpg",
    palette: {
      primary: "#F59E0B",
      primaryHover: "#D97706",
      secondary: "#0284C7",
      accent: "#38BDF8",
      darkBg: "#13151D",
      cardBg: "rgba(25, 30, 45, 0.85)",
      textLight: "#FFFBEB",
      textMuted: "#FDE68A",
      border: "rgba(245, 158, 11, 0.25)",
      glow: "rgba(245, 158, 11, 0.25)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "Pa' Picar Más es la solución líder de catering de pasapalos y picadas en Táchira. Especialistas en bandejas surtidas para cumpleaños, reuniones corporativas, bodas y encuentros familiares con entrega caliente y puntual.",
    introStats: [
      { label: "Pasapalos Elaborados", value: "50.000+", detail: "Tequeños, empanaditas, tartaletas y pastelitos" },
      { label: "Bandejas para Eventos", value: "25 a 100", detail: "Combos ajustados al número de invitados" },
      { label: "Entrega Programada", value: "Puntual", detail: "Llegan calientes listos para servir en mesa" }
    ],
    trustBadges: ["Entrega Caliente y Sellada", "Ingredientes de Calidad Superior", "Cotización Automática por Cantidad"],
    whatsappPitchCopy: "¡Buenas tardes equipo de Pa' Picar Más! 🥟🎉 Admiramos el éxito y sabor de sus bandejas de pasapalos en San Cristóbal. Sabemos que cuando un cliente pide cotización para una fiesta de 30, 50 o 100 personas, coordinar qué pasapalos incluye, las salsas y la hora de entrega por WhatsApp toma muchísimos mensajes.\\n\\nLes creamos una WebApp interactiva con 'Catering & Box Customizer': el cliente elige el número de invitados, arma su bandeja surtida y agenda la fecha de entrega con tasa oficial BCV al instante.\\n\\nPrueben la demo interactiva aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/pa_picar_mas",
    address: "Zona Metropolitana de San Cristóbal / Táriba, Táchira",
    mapsUrl: "https://maps.google.com/?q=Pa+Picar+San+Cristobal",
    hours: "Lunes a Domingo: 8:00 AM - 8:00 PM (Pedidos con 24h anticipación)",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/pa_picar.mas/",
    bookingTitle: "Cotiza tu Bandeja de Pasapalos para Fiestas",
    bookingSubtitle: "Elige la cantidad de piezas y fecha de despacho para tu reunión",
    bookingOptions: [
      {
        id: "combo-fiesta-50",
        name: "Bandeja Fiesta 50 Pasapalos",
        description: "50 piezas calientes surtidas: 20 tequeños, 15 empanaditas de carne, 15 pastelitos de queso con 2 salsas grandes.",
        priceUSD: 22,
        unit: "bandeja 50 pzas",
        badge: "Más Vendido",
        features: ["50 Pasapalos surtidos", "2 Salsas caseras (Tártara y Ajo)", "Empaque térmico para servir"]
      },
      {
        id: "combo-mega-100",
        name: "Bandeja Mega Evento 100 Piezas",
        description: "100 piezas mixtas: tequeños, pastelitos, bolitas de carne, empanaditas y salchichas hojaldradas con 4 salsas.",
        priceUSD: 40,
        unit: "bandeja 100 pzas",
        badge: "Para Fiestas Grandes",
        features: ["100 Piezas surtidas", "4 Salsas a elección", "Despacho programado garantizado"]
      }
    ],
    categories: [
      { id: "bandejas", name: "Bandejas para Fiestas", icon: "🎉" },
      { id: "tequenos", name: "Tequeños & Pastelitos", icon: "🥟" },
      { id: "alitas", name: "Alitas & Nuggets", icon: "🍗" },
      { id: "tablas", name: "Tablas Frías de Quesos", icon: "🧀" }
    ],
    menuItems: [
      {
        id: "bandeja-fiesta-50",
        name: "Bandeja Fiesta 50 Pasapalos Calientes",
        category: "bandejas",
        description: "20 Tequeños de queso blanco, 15 empanaditas doradas de carne mechada, 15 pastelitos de pollo y 2 dips tártara.",
        priceUSD: 22,
        badge: "Top Ventas",
        popular: true,
        tags: ["Bandeja", "Fiesta"]
      },
      {
        id: "bandeja-mega-100",
        name: "Bandeja Mega Celebración 100 Piezas",
        category: "bandejas",
        description: "El combo definitivo: 35 tequeños, 25 pastelitos de queso, 20 empanaditas y 20 bolitas de carne con salsa tártara y picante suave.",
        priceUSD: 40,
        badge: "Mejor Precio",
        popular: true,
        tags: ["Mega Fiesta"]
      },
      {
        id: "caja-tequenos-gourmet-30",
        name: "Caja de Tequeños Artesanales x30",
        category: "tequenos",
        description: "30 Tequeños dorados rellenos de queso blanco llanero en masa crujiente con dip de papelón con maracuyá.",
        priceUSD: 13,
        popular: true,
        tags: ["Tequeños"]
      },
      {
        id: "alitas-bbq-crispy-12",
        name: "Combo Alitas Glaseadas BBQ x12",
        category: "alitas",
        description: "12 Alitas jugosas cocidas al horno y glaseadas con salsa barbacoa artesanal con bastones de apio y aderezo blue cheese.",
        priceUSD: 11,
        tags: ["Alitas"]
      },
      {
        id: "tabla-charcuteria-picar",
        name: "Tabla de Picada Gourmet Fría",
        category: "tablas",
        description: "Quesos madurados, salchichón, jamón de pierna, aceitunas rellenas, frutos secos y grisines de pan.",
        priceUSD: 24,
        popular: true,
        tags: ["Tabla Gourmet"]
      },
      {
        id: "pastelitos-andinos-20",
        name: "Caja de Pastelitos Andinos Tradicionales x20",
        category: "tequenos",
        description: "Pastelitos tachirenses de masa crocante rellenos de carne con arroz y huevo o pollo guisado.",
        priceUSD: 12,
        tags: ["Táchira", "Tradición"]
      }
    ],
    managerKpis: {
      capacityPercentage: 94,
      todaySalesUSD: 1250,
      avgTicketUSD: 36
    },
    sampleBookings: [
      { id: "PIC-1001", clientName: "Carolina Vivas", details: "Bandeja Fiesta 50 Pzas · Despacho Cumpleaños", time: "06:00 PM", status: "confirmada", pax: 15, totalUSD: 24 },
      { id: "PIC-1002", clientName: "José Alberto Sánchez", details: "Bandeja Mega 100 Pzas · Evento Corporativo", time: "07:30 PM", status: "en_mesa", pax: 30, totalUSD: 42 },
      { id: "PIC-1003", clientName: "Valeria Parra", details: "Caja Tequeños x30 + Alitas BBQ · Pick-Up", time: "05:00 PM", status: "pendiente", pax: 8, totalUSD: 24 }
    ]
  }
];

// Append to demosData.ts
let content = fs.readFileSync(demosPath, "utf-8");

// Find closing bracket of businessDemos: BusinessDemo[] = [ ... ];
const lastBracketIndex = content.lastIndexOf("];");
if (lastBracketIndex === -1) {
  console.error("❌ No se encontró el cierre ]; de businessDemos en demosData.ts");
  process.exit(1);
}

const beforeClosing = content.slice(0, lastBracketIndex).trimEnd();
const afterClosing = content.slice(lastBracketIndex);

const formattedNewEntries = batch7Demos.map(d => JSON.stringify(d, null, 2)).join(",\n\n  ");

const newContent = `${beforeClosing},\n\n  // 🌟 DÍA 7 — 10 Soluciones Comerciales Especializadas (San Cristóbal & Venezuela)\n  ${formattedNewEntries}\n${afterClosing}`;

fs.writeFileSync(demosPath, newContent, "utf-8");
console.log(`✅ ${batch7Demos.length} nuevas demos de Día 7 añadidas con éxito a demosData.ts`);
