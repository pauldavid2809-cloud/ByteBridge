import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const demosDataPath = path.join(__dirname, "..", "data", "demosData.ts");

const batch5Objects = [
  // 1. Dystopia Bowling & Lounge
  {
    slug: "dystopiabowling",
    batch: "dia5",
    archetype: "vip-access",
    name: "Dystopia Bowling & Lounge",
    handle: "dystopiabowling",
    category: "Bowling Boutique, Bar & Lounge",
    badgeText: "🎳 Pistas Automatizadas & Lounge VIP",
    tagline: "El primer Bowling Boutique y Lounge Cyberpunk de Maracaibo con pistas digitales y coctelería a tu carril.",
    heroTitle: "BOWL. DRINK. VIBE.",
    heroHighlight: "Dystopia Bowling",
    heroSubtitle: "Reserva turnos de pista con código QR, comanda hamburguesas smash y coctelería de autor directo a tu box VIP sin hacer cola.",
    logo: "/marcas/dystopiabowling.jpg",
    coverImage: "/marcas/dystopiabowling-cover.jpg",
    palette: {
      primary: "#202020",
      primaryHover: "#353535",
      secondary: "#00F0FF",
      accent: "#FF007A",
      darkBg: "#0B0C10",
      cardBg: "#15171E",
      textLight: "#FFFFFF",
      textMuted: "#9CA3AF",
      border: "#2A2D3A",
      glow: "rgba(255, 0, 122, 0.4)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "Dystopia Bowling & Lounge es el concepto de entretenimiento boutique de Plaza 72: pistas automatizadas con iluminación UV neón, salón VIP climatizado y servicio continuo de coctelería de autor y comida a la pista.",
    introStats: [
      { label: "Pistas Boutique", value: "Automatizadas", detail: "Turnos y reservas con pase QR" },
      { label: "Lounge & Bar", value: "Coctelería TOP", detail: "Servicio directo a la pista" },
      { label: "Ubicación", value: "Plaza 72", detail: "Calle 72 e/ 14A y 15, Piso 2" }
    ],
    trustBadges: ["Pases QR con Acceso Express", "Comanda Directa a la Pista", "Tasa BCV en Tiempo Real"],
    whatsappPitchCopy: "Hola equipo de Dystopia Bowling! 🎳 Preparamos una WebApp especializada para su bowling boutique en Plaza 72: permite a sus clientes apartar turnos de pista con pase QR holográfico, ordenar smash burgers y coctelería directo a su carril y pagar a tasa oficial BCV sin colas.\n\nLes comparto la demo y el video vertical de 15 segundos:\n👉 https://byte-bridge-tau.vercel.app/demos/dystopiabowling",
    address: "Calle 72, entre Avenidas 14A y 15, C.C. Plaza 72, Piso 2, Maracaibo",
    phone: "+58 412-0308674",
    hours: "Miércoles a Domingo: 4:00 PM – 1:00 AM",
    instagramUrl: "https://www.instagram.com/dystopiabowling/",
    mapsUrl: "https://maps.google.com/?q=Plaza+72+Maracaibo+Dystopia+Bowling",
    bcvRate: 64.20,
    bookingOptions: [
      {
        id: "dystopia-pista-1h",
        name: "Línea de Pista Bowling (1 Hora)",
        description: "1 hora completa de juego para hasta 6 jugadores con calzado profesional desinfectado y asistencia de pista.",
        priceUSD: 22,
        unit: "pista/hora",
        badge: "Más Popular",
        features: ["Hasta 6 jugadores por pista", "Calzado profesional incluido", "Comanda de bebidas a la pista"],
        maxCapacity: 6
      },
      {
        id: "dystopia-box-vip",
        name: "Box VIP Lounge + Bowling",
        description: "Pase exclusivo para 8 personas con 2 horas de pista, sillones lounge de cuero, servicio de botella y picada Dystopia.",
        priceUSD: 85,
        unit: "pase VIP",
        badge: "Experiencia VIP",
        features: ["2 horas continuas de pista", "Área Lounge privada", "Servicio dedicado de bartender"],
        maxCapacity: 8
      },
      {
        id: "dystopia-cumple",
        name: "Paquete Dystopia Birthday",
        description: "Coordinación completa para grupos con 2 pistas simultáneas, pizzas artesanales, tequeños crunch y ronda de shots.",
        priceUSD: 140,
        unit: "paquete",
        badge: "Eventos & Cumpleaños",
        features: ["2 pistas por 2 horas", "2 pizzas + 16 tequeños", "Decoración y mesa reservada"],
        maxCapacity: 12
      }
    ],
    categories: [
      { id: "smash-burgers", name: "Smash Burgers" },
      { id: "pizzas-tapas", name: "Pizzas & Tapas" },
      { id: "cyber-cocktails", name: "Cyber Cocktails & Bar" }
    ],
    menuItems: [
      {
        id: "dys-burger-1",
        name: "Dystopia Double Smash Burger",
        category: "smash-burgers",
        description: "Doble carne angus crujiente, queso cheddar fundido, tocineta ahumada, pepinillos y salsa Dystopia en pan brioche.",
        priceUSD: 8.5,
        popular: true
      },
      {
        id: "dys-tapas-1",
        name: "Tequeños Dystopia Crunch (8 und)",
        category: "pizzas-tapas",
        description: "Masa hojaldrada rellena de queso blanco fundido, servidos con salsa tártara de la casa y mermelada de pimentón.",
        priceUSD: 6.0,
        popular: true
      },
      {
        id: "dys-pizza-1",
        name: "Pizza Pepperoni & Hot Honey",
        category: "pizzas-tapas",
        description: "Masa madre de fermentación lenta, salsa pomodoro, mozzarella fior di latte, pepperoni artesanal y drizzle de miel picante.",
        priceUSD: 11.0
      },
      {
        id: "dys-drink-1",
        name: "Cyber Neon Gin Signature",
        category: "cyber-cocktails",
        description: "Gin infusionado con botánicos, tónica premium, glitter comestible UV y esfera de hielo aromatizada.",
        priceUSD: 7.5,
        popular: true
      }
    ],
    managerKpis: {
      activeReservations: 24,
      capacityPercentage: 92,
      todaySalesUSD: 1840,
      avgTicketUSD: 28
    },
    sampleBookings: [
      {
        id: "DYS-101",
        clientName: "Rodrigo Morales",
        details: "Pista Bowling 1h (6 pax)",
        time: "07:30 PM",
        status: "confirmada",
        pax: 6,
        totalUSD: 22
      },
      {
        id: "DYS-102",
        clientName: "Camila Urdaneta",
        details: "Box VIP Lounge + 2h Pista",
        time: "09:00 PM",
        status: "en_mesa",
        pax: 8,
        totalUSD: 85
      }
    ]
  },

  // 2. La Taberna del Navegante
  {
    slug: "lataberna_delnavegante",
    batch: "dia5",
    archetype: "gourmet-booking",
    name: "La Taberna del Navegante",
    handle: "lataberna_delnavegante",
    category: "Restaurante Español & Marisquería",
    badgeText: "🍷 Alta Cocina Española & Paellas",
    tagline: "Templo histórico de la cocina española, marisquería del Cantábrico y arroces en Chacao, Caracas.",
    heroTitle: "TRADICIÓN & ALTA MAR",
    heroHighlight: "Taberna del Navegante",
    heroSubtitle: "Reserva mesas en salón señorial o terraza, pre-ordena tus paellas a leña y explora nuestra cava de vinos con confirmación VIP.",
    logo: "/marcas/lataberna_delnavegante.jpg",
    coverImage: "/marcas/lataberna_delnavegante-cover.jpg",
    palette: {
      primary: "#1A2540",
      primaryHover: "#28385E",
      secondary: "#D4AF37",
      accent: "#C59B27",
      darkBg: "#0C101A",
      cardBg: "#161D2E",
      textLight: "#F8F9FA",
      textMuted: "#A0AEC0",
      border: "#2D3748",
      glow: "rgba(212, 175, 55, 0.35)"
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans"
    },
    introText: "La Taberna del Navegante es el referente de alta cocina española en Chacao: más de 30 años elaborando arroces marineros, pulpos a la gallega y marisquería fresca con servicio de sommelier y mantelería fina.",
    introStats: [
      { label: "Tradición Española", value: "+30 Años", detail: "Emblema gastronómico en Chacao" },
      { label: "Cava de Vinos", value: "60+ Etiquetas", detail: "Ribera, Rioja y Albariño" },
      { label: "Arroces a Pedido", value: "Pre-Orden", detail: "Listos en mesa sin esperas" }
    ],
    trustBadges: ["Reserva Garantizada con Sommelier", "Pre-Orden de Paellas y Mariscos", "Facturación Corporativa Digital"],
    whatsappPitchCopy: "Hola equipo de La Taberna del Navegante! 🍷 Diseñamos una WebApp exclusiva para su emblemática tasca en Chacao: permite a sus comensales reservar mesa en salón o terraza, pre-ordenar sus paellas y mariscos al agendar (ahorrando 35 min de espera) y consultar su cava a tasa oficial BCV.\n\nVean la demo en vivo y su Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/lataberna_delnavegante",
    address: "Calle Bolívar, Urb. Bolívar, Chacao, Caracas",
    phone: "+58 412-0308674",
    hours: "Martes a Domingo: 12:00 PM – 10:30 PM",
    instagramUrl: "https://www.instagram.com/lataberna_delnavegante/",
    mapsUrl: "https://maps.google.com/?q=La+Taberna+del+Navegante+Chacao+Caracas",
    bcvRate: 64.20,
    bookingOptions: [
      {
        id: "taberna-salon-principal",
        name: "Mesa Salón Principal Señorial",
        description: "Mesa formal con mantelería de tela y servicio dedicado de sommelier para cenas de negocios o encuentros familiares.",
        priceUSD: 20,
        unit: "depósito consumible",
        badge: "Más Solicitado",
        features: ["Mesa reservada sin espera", "Atención personalizada", "Consumo 100% acreditable"],
        maxCapacity: 6
      },
      {
        id: "taberna-paella-experiencia",
        name: "Mesa VIP + Paella Marinera Pre-Orden",
        description: "Reserva de mesa con la afamada Paella Marinera de la casa lista a los 10 minutos de sentarse en sala.",
        priceUSD: 45,
        unit: "paquete degustación",
        badge: "Recomendado",
        features: ["Paella Marinera (2-3 pax) lista", "Jarra de Sangría de la Casa", "Mesa preferencial"],
        maxCapacity: 4
      }
    ],
    categories: [
      { id: "arroces-paellas", name: "Arroces & Paellas" },
      { id: "mariscos-pescados", name: "Mariscos & Pescados" },
      { id: "cava-vinos", name: "Cava de Vinos & Sangrías" }
    ],
    menuItems: [
      {
        id: "tab-paella-1",
        name: "Paella Marinera Especial Taberna",
        category: "arroces-paellas",
        description: "Arroz bomba al azafrán con langostinos, camarones, calamares, mejillones y almejas frescas del Cantábrico.",
        priceUSD: 34.0,
        popular: true
      },
      {
        id: "tab-marisco-1",
        name: "Pulpo a la Gallega con Pimentón de la Vera",
        category: "mariscos-pescados",
        description: "Tentáculos de pulpo tierno servidos sobre papas al vapor con aceite de oliva virgen extra y pimentón ahumado.",
        priceUSD: 18.0,
        popular: true
      },
      {
        id: "tab-marisco-2",
        name: "Langostinos al Champagne",
        category: "mariscos-pescados",
        description: "Langostinos salteados en reducción cremosa de espumante brut con ciboulette y tostadas al ajillo.",
        priceUSD: 22.0
      },
      {
        id: "tab-sangria-1",
        name: "Jarra de Sangría Tradicional de la Casa (1L)",
        category: "cava-vinos",
        description: "Vino tinto crianza macerado con frutas cítricas frescas, toque de licor de naranja y canela.",
        priceUSD: 16.0,
        popular: true
      }
    ],
    managerKpis: {
      activeReservations: 18,
      capacityPercentage: 94,
      todaySalesUSD: 2150,
      avgTicketUSD: 42
    },
    sampleBookings: [
      {
        id: "TAB-301",
        clientName: "Dr. Fernando Mendoza",
        details: "Mesa Salón VIP + Paella Pre-orden",
        time: "01:30 PM",
        status: "confirmada",
        pax: 4,
        totalUSD: 45
      }
    ]
  },

  // 3. Mr. Broaster Maracaibo
  {
    slug: "mrbroastermcbo",
    batch: "dia5",
    archetype: "direct-delivery",
    name: "Mr. Broaster Maracaibo",
    handle: "mr.broastermcbo",
    category: "Pollo Broaster Crujiente & Fast Food",
    badgeText: "🍗 Pollo Broaster 100% Crujiente",
    tagline: "El pollo broaster más crujiente y jugoso de Maracaibo con combos familiares y delivery directo.",
    heroTitle: "CRUNCH. SABOR. FAMILIA.",
    heroHighlight: "Mr. Broaster",
    heroSubtitle: "Pide tus combos de pollo broaster, alitas y smash burgers con cálculo a tasa BCV y despacho directo a WhatsApp sin pagar 25% en apps.",
    logo: "/marcas/mrbroastermcbo.jpg",
    coverImage: "/marcas/mrbroastermcbo-cover.jpg",
    palette: {
      primary: "#E63946",
      primaryHover: "#D62828",
      secondary: "#F4A261",
      accent: "#FFB703",
      darkBg: "#111111",
      cardBg: "#1C1C1C",
      textLight: "#FFFFFF",
      textMuted: "#A8A8A8",
      border: "#2E2E2E",
      glow: "rgba(255, 183, 3, 0.4)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "Mr. Broaster es el especialista en pollo apanado crujiente de Valle Claro: presas doradas con sazón secreto, raciones gigantes de papas fritas y combos diseñados para alimentar a toda la familia a precios justos.",
    introStats: [
      { label: "Pollo Broaster", value: "100% Crujiente", detail: "Fritura a presión ultra jugosa" },
      { label: "Combos Ahorro", value: "Desde $4.99", detail: "Con papas, ensalada y salsas" },
      { label: "Delivery Propio", value: "0% Comisión", detail: "Directo a tu casa en Maracaibo" }
    ],
    trustBadges: ["Delivery Directo sin Comisiones", "Despacho Rápido en Valle Claro", "Conversión Multimoneda BCV al Día"],
    whatsappPitchCopy: "Hola equipo de Mr. Broaster Maracaibo! 🍗🔥 Sabemos que el pollo crujiente es un éxito en delivery, pero pagar 25% de comisión en apps de terceros recorta su margen. Les armamos una WebApp de Delivery Directo donde el cliente pide combos, salsas y bebidas con tasa BCV automática y les llega la orden lista con dirección exacta por WhatsApp.\n\nMiren la demo interactiva y el Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/mrbroastermcbo",
    address: "Avenida 70B, Calle 83, frente al C.C. Valle Claro, Maracaibo",
    phone: "+58 412-0308674",
    hours: "Lunes a Domingo: 11:30 AM – 10:30 PM",
    instagramUrl: "https://www.instagram.com/mr.broastermcbo/",
    mapsUrl: "https://maps.google.com/?q=Valle+Claro+Maracaibo+Mr+Broaster",
    bcvRate: 64.20,
    bookingOptions: [
      {
        id: "broaster-pick-up",
        name: "Retiro Express en Mostrador (Pick-Up)",
        description: "Ordena tu combo con anticipación y recógelo caliente y empacado sin hacer cola en caja.",
        priceUSD: 0,
        unit: "pedido anticipado",
        badge: "Sin Colas",
        features: ["Listo en 15 minutos", "Empaque térmico reforzado", "Tasa BCV garantizada"]
      }
    ],
    categories: [
      { id: "combos-broaster", name: "Combos Broaster" },
      { id: "buckets-familiares", name: "Buckets Familiares" },
      { id: "hamburguesas-alitas", name: "Hamburguesas & Alitas" }
    ],
    menuItems: [
      {
        id: "bro-combo-1",
        name: "Combo Broaster Dúo (2 Piezas)",
        category: "combos-broaster",
        description: "2 presas de pollo broaster crujiente, papas fritas rústicas, ensalada coleslaw, salsa tártara y bebida fría.",
        priceUSD: 4.99,
        popular: true
      },
      {
        id: "bro-bucket-1",
        name: "Bucket Familiar Mega Broaster (8 Piezas)",
        category: "buckets-familiares",
        description: "8 piezas mixtas de pollo crocante, 2 raciones grandes de papas fritas, ensalada familiar, 3 salsas y refresco de 1.5L.",
        priceUSD: 14.99,
        popular: true
      },
      {
        id: "bro-burger-1",
        name: "Smash Broaster Chicken Burger",
        category: "hamburguesas-alitas",
        description: "Filete de pechuga crujiente con triple queso cheddar, tocineta, lechuga fresca y aderezo Mr. Broaster.",
        priceUSD: 6.5
      },
      {
        id: "bro-alitas-1",
        name: "Alitas Broaster Glaseadas BBQ (6 und)",
        category: "hamburguesas-alitas",
        description: "Alitas crujientes bañadas en salsa BBQ ahumada con semillas de ajonjolí tostado.",
        priceUSD: 5.5
      }
    ],
    managerKpis: {
      activeReservations: 42,
      capacityPercentage: 96,
      todaySalesUSD: 1380,
      avgTicketUSD: 11
    },
    sampleBookings: [
      {
        id: "BRO-801",
        clientName: "Jesús Albarrán",
        details: "Bucket Familiar 8 Piezas",
        time: "07:15 PM",
        status: "en_mesa",
        pax: 4,
        totalUSD: 14.99
      }
    ]
  },

  // 4. Friends Maracaibo
  {
    slug: "friendsmaracaibo",
    batch: "dia5",
    archetype: "table-ordering",
    name: "Friends Maracaibo",
    handle: "friendsmaracaibo",
    category: "Fast Food Urbano, Burgers & Patacones",
    badgeText: "🍔 Fast Food & Auto-Pedido en Mesa",
    tagline: "El punto de encuentro para hamburguesas monumentales, patacones gourmet y meriendas en Maracaibo.",
    heroTitle: "GOOD FOOD. GOOD FRIENDS.",
    heroHighlight: "Friends Maracaibo",
    heroSubtitle: "Escanea el código QR de tu mesa, pide hamburguesas smash y patacones directo a cocina y divide la cuenta en Bs y $ al instante.",
    logo: "/marcas/friendsmaracaibo.jpg",
    coverImage: "/marcas/friendsmaracaibo-cover.jpg",
    palette: {
      primary: "#5A189A",
      primaryHover: "#7B2CBF",
      secondary: "#FF9100",
      accent: "#FFB703",
      darkBg: "#0F0B18",
      cardBg: "#1A1428",
      textLight: "#FFFFFF",
      textMuted: "#A397B8",
      border: "#2E2442",
      glow: "rgba(255, 145, 0, 0.4)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "Friends Maracaibo es el restobar urbano donde amigos y familias comparten burgers descomunales, patacones rellenos con lomito y merengadas cargadas en un ambiente enérgico y moderno.",
    introStats: [
      { label: "Fast Food Urbano", value: "100% Sabor", detail: "Burgers, patacones y meriendas" },
      { label: "Auto-Pedido QR", value: "Cero Esperas", detail: "Comanda directa desde tu mesa" },
      { label: "Tasa Automatizada", value: "BCV al Día", detail: "Cálculo exacto en Bolívares y USD" }
    ],
    trustBadges: ["Auto-Pedido QR desde Mesa", "Comanda Directa a Cocina", "Pago Móvil & Efectivo a Tasa BCV"],
    whatsappPitchCopy: "Hola amigos de Friends Maracaibo! 🍔🥤 Estuvimos revisando su propuesta y sabemos lo clave que es la velocidad cuando el salón se llena de grupos. Les diseñamos una WebApp interactiva con auto-pedido por código QR en mesa: los clientes piden sus hamburguesas y patacones sin esperar mesonero y la comanda sale directo a cocina.\n\nLes comparto la demo y el video comercial de 15 segundos:\n👉 https://byte-bridge-tau.vercel.app/demos/friendsmaracaibo",
    address: "Sector Tierra Negra / Cecilio Acosta, Maracaibo",
    phone: "+58 412-0308674",
    hours: "Miércoles a Lunes: 5:00 PM – 11:30 PM",
    instagramUrl: "https://www.instagram.com/friendsmaracaibo/",
    mapsUrl: "https://maps.google.com/?q=Maracaibo+Friends+Restaurante",
    bcvRate: 64.20,
    bookingOptions: [
      {
        id: "friends-mesa-amigos",
        name: "Reserva de Mesa Grupal (4 a 8 personas)",
        description: "Asegura mesa para tu grupo de amigos con comanda QR pre-habilitada y ronda de tequeños de bienvenida.",
        priceUSD: 10,
        unit: "abono consumible",
        badge: "Para Grupos",
        features: ["Mesa lista al llegar", "Tequeños de cortesía", "Consumo 100% acreditable"],
        maxCapacity: 8
      }
    ],
    categories: [
      { id: "burgers-friends", name: "Burgers Monumentales" },
      { id: "patacones-tequenos", name: "Patacones & Tequeños" },
      { id: "shakes-postres", name: "Monster Shakes" }
    ],
    menuItems: [
      {
        id: "fri-burger-1",
        name: "Burger Friends Monumental",
        category: "burgers-friends",
        description: "200g de carne de res al grill, queso cheddar fundido, tocineta ahumada, aros de cebolla crocantes y salsa Friends.",
        priceUSD: 7.5,
        popular: true
      },
      {
        id: "fri-patacon-1",
        name: "Patacón Especial Friends (Lomito & Pollo)",
        category: "patacones-tequenos",
        description: "Tapas de plátano verde crujiente rellenas de lomito, pollo a la plancha, queso de mano, jamón y aderezo especial zuliano.",
        priceUSD: 8.0,
        popular: true
      },
      {
        id: "fri-tequeno-1",
        name: "Tequeños Full Queso (6 und)",
        category: "patacones-tequenos",
        description: "Tequeños fritos dorados rellenos de queso blanco fundido con dip tártara y salsa de maíz.",
        priceUSD: 5.0
      },
      {
        id: "fri-shake-1",
        name: "Monster Shake Chocolate & Brownie",
        category: "shakes-postres",
        description: "Merengada espesa de chocolate belga con helado, coronada con un brownie entero, crema batida y chispas.",
        priceUSD: 6.5,
        popular: true
      }
    ],
    managerKpis: {
      activeReservations: 29,
      capacityPercentage: 91,
      todaySalesUSD: 1240,
      avgTicketUSD: 14
    },
    sampleBookings: [
      {
        id: "FRI-501",
        clientName: "Valeria Gutiérrez",
        details: "Mesa Grupal (6 pax)",
        time: "08:00 PM",
        status: "en_mesa",
        pax: 6,
        totalUSD: 10
      }
    ]
  },

  // 5. Carta Blanca Maracaibo
  {
    slug: "cartablancave",
    batch: "dia5",
    archetype: "vip-access",
    name: "Carta Blanca Maracaibo",
    handle: "cartablanca.ve",
    category: "Espacio Creativo, Lounge & Event Venue",
    badgeText: "✨ Experiencias de Arte, Lounge & Eventos",
    tagline: "El venue boutique y estudio creativo para talleres multisensoriales, celebraciones privadas y coctelería de autor.",
    heroTitle: "CREATE. CELEBRATE. CONNECT.",
    heroHighlight: "Carta Blanca",
    heroSubtitle: "Compra tus pases con código QR para talleres de arte, cotiza eventos privados y reserva catering exclusivo a tasa oficial BCV.",
    logo: "/marcas/cartablancave.jpg",
    coverImage: "/marcas/cartablancave-cover.jpg",
    palette: {
      primary: "#2B2D42",
      primaryHover: "#3D405B",
      secondary: "#E07A5F",
      accent: "#81B29A",
      darkBg: "#12131C",
      cardBg: "#1C1E2C",
      textLight: "#F4F1DE",
      textMuted: "#9CA3AF",
      border: "#2F3248",
      glow: "rgba(224, 122, 95, 0.35)"
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans"
    },
    introText: "Carta Blanca es el espacio de experiencias creativas más refinado de Maracaibo: tardes de pintura con vino ('Artistas Por Un Día'), celebraciones privadas y un ambiente lounge diseñado para la desconexión total.",
    introStats: [
      { label: "Talleres Creativos", value: "Art & Wine", detail: "Pases con código QR digital" },
      { label: "Eventos Privados", value: "Cotizador 24/7", detail: "Reserva de fechas en línea" },
      { label: "Coctelería & Tapas", value: "Boutique", detail: "Maridaje botánico exclusivo" }
    ],
    trustBadges: ["Pases VIP y Tickets QR a Talleres", "Reserva de Fechas para Eventos", "Presupuestos en Bolívares y USD"],
    whatsappPitchCopy: "Hola equipo de Carta Blanca! ✨🎨 Admiramos las experiencias creativas que están organizando en Maracaibo. Para que la venta de cupos de sus talleres y la cotización de celebraciones privadas sea 100% fluida, creamos esta WebApp con tickets QR de acceso, cotizador de eventos y cálculo automático a tasa oficial BCV.\n\nPueden explorar la demo y el video aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/cartablancave",
    address: "Zona Norte / Sector La Lago, Maracaibo",
    phone: "+58 412-0308674",
    hours: "Jueves a Domingo: 4:00 PM – 12:00 AM (Talleres con agenda)",
    instagramUrl: "https://www.instagram.com/cartablanca.ve/",
    mapsUrl: "https://maps.google.com/?q=Maracaibo+Carta+Blanca+Espacio+Creativo",
    bcvRate: 64.20,
    bookingOptions: [
      {
        id: "cb-pase-artista",
        name: "Pase Taller 'Artistas Por Un Día'",
        description: "Pase individual con código QR para taller de pintura guiada, incluye lienzo, pinceles, pinturas, copa de vino y tabla de tapas.",
        priceUSD: 28,
        unit: "persona/pase",
        badge: "Cupos Limitados",
        features: ["Materiales artísticos completos", "Copa de vino + tapas", "Pase holográfico QR"],
        maxCapacity: 1
      },
      {
        id: "cb-evento-privado",
        name: "Reserva de Espacio para Evento Privado",
        description: "Aparta la fecha para tu cumpleaños, bridal shower o evento de marca con mobiliario lounge y barra botánica.",
        priceUSD: 180,
        unit: "reserva base (4h)",
        badge: "Exclusivo",
        features: ["Salón y jardín privados", "Iluminación ambiental y sonido", "Coordinador en sala"],
        maxCapacity: 30
      }
    ],
    categories: [
      { id: "tapas-gourmet", name: "Tapas & Tablas" },
      { id: "cocteles-botanicos", name: "Coctelería Botánica & Vinos" }
    ],
    menuItems: [
      {
        id: "cb-tabla-1",
        name: "Tabla de Charcutería & Quesos Madurados",
        category: "tapas-gourmet",
        description: "Jamón serrano, salami artesanal, queso gouda y manchego, frutos secos, uvas y mermelada artesanal de higos con tostadas.",
        priceUSD: 18.0,
        popular: true
      },
      {
        id: "cb-tapa-1",
        name: "Montaditos de Salmón Ahumado & Eneldo (6 und)",
        category: "tapas-gourmet",
        description: "Tostas crocantes con queso crema suave, alcaparras baby, salmón ahumado y eneldo fresco.",
        priceUSD: 12.0
      },
      {
        id: "cb-drink-1",
        name: "Spritz Botánico Carta Blanca",
        category: "cocteles-botanicos",
        description: "Aperol, espumante brut, infusión de flor de saúco, agua con gas y rodaja de pomelo rosado.",
        priceUSD: 7.5,
        popular: true
      }
    ],
    managerKpis: {
      activeReservations: 16,
      capacityPercentage: 88,
      todaySalesUSD: 980,
      avgTicketUSD: 34
    },
    sampleBookings: [
      {
        id: "CB-201",
        clientName: "Sofia Bencomo",
        details: "Pase Taller Artistas Por Un Día (2 pax)",
        time: "05:00 PM",
        status: "confirmada",
        pax: 2,
        totalUSD: 56
      }
    ]
  },

  // 6. Sal Marina (@pidesalmarina)
  {
    slug: "pidesalmarina",
    batch: "dia5",
    archetype: "direct-delivery",
    name: "Sal Marina Seafood & Grill",
    handle: "pidesalmarina",
    category: "Marisquería & Cocina Costera Zuliana",
    badgeText: "🐟 Pesca Fresca & Almuerzos Marinos",
    tagline: "La marisquería de tradición en Tierra Negra con pescados frescos del día, cazuelas y delivery directo.",
    heroTitle: "SABOR A COSTA.",
    heroHighlight: "Sal Marina",
    heroSubtitle: "Ordena almuerzos ejecutivos marinos, cazuelas y pescados fritos con tasa BCV automática y despacho express en Maracaibo.",
    logo: "/marcas/pidesalmarina.jpg",
    coverImage: "/marcas/pidesalmarina-cover.jpg",
    palette: {
      primary: "#0A2540",
      primaryHover: "#123A63",
      secondary: "#00A8E8",
      accent: "#0077B6",
      darkBg: "#061320",
      cardBg: "#0C2036",
      textLight: "#FFFFFF",
      textMuted: "#8ECAE6",
      border: "#183B5E",
      glow: "rgba(0, 168, 232, 0.35)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "Sal Marina es la parada gastronómica de Tierra Negra para disfrutar pescados fritos al punto, arroces marineros cargados y cazuelas gratinadas elaboradas con la pesca más fresca de la región.",
    introStats: [
      { label: "Pesca del Día", value: "100% Fresca", detail: "Pescados, camarones y calamares" },
      { label: "Ubicación Clave", value: "Tierra Negra", detail: "Calle 69 con Av. 9B" },
      { label: "Almuerzos Express", value: "< 30 min", detail: "Combos con sopa y contornos" }
    ],
    trustBadges: ["Marisquería de Tradición en Tierra Negra", "Pesca Marina Fresca del Día", "Promos Semanales & Delivery Directo"],
    whatsappPitchCopy: "Buenas tardes equipo de Sal Marina! 🐟🌊 Vimos el éxito de sus almuerzos marinos en Tierra Negra. Para ayudarles a multiplicar sus ventas de delivery sin que el WhatsApp colapse con preguntas de precios o contornos, les montamos esta WebApp con menú interactivo, cálculo en Bs BCV y checkout directo a WhatsApp.\n\nPueden probar la demo y ver su Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/pidesalmarina",
    address: "Calle 69 con Av. 9B, Sector Tierra Negra, Maracaibo",
    phone: "+58 412-0308674",
    hours: "Lunes a Domingo: 11:00 AM – 7:00 PM (Sábados hasta las 12:00 AM)",
    instagramUrl: "https://www.instagram.com/pidesalmarina/",
    mapsUrl: "https://maps.google.com/?q=Tierra+Negra+Maracaibo+Sal+Marina",
    bcvRate: 64.20,
    bookingOptions: [
      {
        id: "salmarina-reserva-almuerzo",
        name: "Reserva de Mesa para Almuerzo Ejecutivo",
        description: "Aparta tu mesa en salón climatizado con menú de almuerzo pre-seleccionado para comer en menos de 20 minutos.",
        priceUSD: 0,
        unit: "reserva libre",
        badge: "Sin Esperas",
        features: ["Mesa lista al mediodía", "Servicio express", "Tasa BCV al día"]
      }
    ],
    categories: [
      { id: "especialidades-marinas", name: "Especialidades Marinas" },
      { id: "pescados-fritos", name: "Pescados Fritos & Plancha" },
      { id: "ceviches-entradas", name: "Ceviches & Entradas" }
    ],
    menuItems: [
      {
        id: "sal-arroz-1",
        name: "Arroz a la Marinera Especial Sal Marina",
        category: "especialidades-marinas",
        description: "Arroz suelto y sazonado con camarones, calamares, trozos de pescado y mejillones con tostones y ensalada.",
        priceUSD: 13.5,
        popular: true
      },
      {
        id: "sal-cazuela-1",
        name: "Cazuela de Mariscos Gratinada",
        category: "especialidades-marinas",
        description: "Frutos del mar en salsa cremosa bisque con queso parmesano gratinado al horno y tostones.",
        priceUSD: 16.0,
        popular: true
      },
      {
        id: "sal-pescado-1",
        name: "Filete de Pescado a la Plancha (Combo Almuerzo)",
        category: "pescados-fritos",
        description: "Pescado blanco fresco a la plancha acompañado de consomé marino, arroz blanco, tostones y ensalada.",
        priceUSD: 8.5,
        popular: true
      },
      {
        id: "sal-ceviche-1",
        name: "Ceviche Clásico Sal Marina",
        category: "ceviches-entradas",
        description: "Cubos de pescado fresco marinados en zumo de limón criollo, cebolla morada, ají dulce y cilantro con chips de plátano.",
        priceUSD: 9.0
      }
    ],
    managerKpis: {
      activeReservations: 31,
      capacityPercentage: 90,
      todaySalesUSD: 1490,
      avgTicketUSD: 16
    },
    sampleBookings: [
      {
        id: "SAL-401",
        clientName: "Ing. Manuel Barboza",
        details: "Combo Almuerzo Marino (3 pax)",
        time: "01:00 PM",
        status: "confirmada",
        pax: 3,
        totalUSD: 25.5
      }
    ]
  },

  // 7. Picaña Grill Steakhouse (@picanagrill_)
  {
    slug: "picanagrill",
    batch: "dia5",
    archetype: "gourmet-booking",
    name: "Picaña Grill Steakhouse",
    handle: "picanagrill_",
    category: "Steakhouse Premium & Cortes a la Brasa",
    badgeText: "🥩 Cortes Nobles & Salón VIP",
    tagline: "Especialistas en picaña a la brasa, carnes en vara y veladas premium con música en vivo en Las Veritas.",
    heroTitle: "FUEGO. BRASA. DISTINCIÓN.",
    heroHighlight: "Picaña Grill",
    heroSubtitle: "Reserva salón principal o área VIP, selecciona tus cortes madurados y asegura tu velada sin colas ni llamadas.",
    logo: "/marcas/picanagrill.jpg",
    coverImage: "/marcas/picanagrill-cover.jpg",
    palette: {
      primary: "#1F0808",
      primaryHover: "#3B1010",
      secondary: "#D90429",
      accent: "#EF233C",
      darkBg: "#0D0404",
      cardBg: "#170808",
      textLight: "#FFFFFF",
      textMuted: "#D3A5A5",
      border: "#3D1515",
      glow: "rgba(217, 4, 41, 0.4)"
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans"
    },
    introText: "Picaña Grill Steakhouse es el destino carnívoro de Las Veritas: cortes importados y nacionales asados a la perfección en vara y carbón, coctelería de autor y salones VIP para cenas inolvidables.",
    introStats: [
      { label: "Cortes a la Brasa", value: "+50 Platos", detail: "Picaña prime, tomahawk y puntas" },
      { label: "Ambiente VIP", value: "Salón & Terraza", detail: "Climatizado y música en vivo" },
      { label: "Ubicación", value: "Las Veritas", detail: "Av. 16-A con Calle 73" }
    ],
    trustBadges: ["Especialistas en Picaña & Cortes a la Brasa", "Salón VIP & Eventos Exclusivos", "Coctelería de Autor & Música en Vivo"],
    whatsappPitchCopy: "Buenas tardes equipo de Picaña Grill! 🥩🔥 Su propuesta de cortes a la brasa en Las Veritas es de primer nivel. Para optimizar la asignación de mesas VIP y reservas en noches con música en vivo, les construimos esta WebApp interactiva con selector de salón/área VIP, carta de cortes y confirmación a WhatsApp.\n\nLes comparto la demo y el video vertical:\n👉 https://byte-bridge-tau.vercel.app/demos/picanagrill",
    address: "Av. 16-A con Calle 73, Sector Las Veritas, Maracaibo",
    phone: "+58 412-0308674",
    hours: "Martes a Domingo: 12:00 PM – 12:00 AM",
    instagramUrl: "https://www.instagram.com/picanagrill_/",
    mapsUrl: "https://maps.google.com/?q=Las+Veritas+Maracaibo+Picaña+Grill",
    bcvRate: 64.20,
    bookingOptions: [
      {
        id: "picanagrill-mesa-vip",
        name: "Mesa VIP Lounge Climatizada",
        description: "Mesa reservada en el salón VIP con atención dedicada para disfrutar cortes prime y coctelería.",
        priceUSD: 25,
        unit: "depósito consumible",
        badge: "Más Solicitada",
        features: ["Salón VIP climatizado", "Consumo 100% acreditable", "Selección previa de cortes"],
        maxCapacity: 6
      },
      {
        id: "picanagrill-tomahawk-exp",
        name: "Experiencia Tomahawk & Brasa (4 pax)",
        description: "Mesa preferencial con corte Tomahawk de 1.2kg a la brasa, tostones con queso fundido y botella de vino tinto.",
        priceUSD: 65,
        unit: "paquete carnívoro",
        badge: "Chef's Special",
        features: ["Tomahawk prime a la brasa", "Guarniciones familiares", "Botella de vino tinto incluida"],
        maxCapacity: 4
      }
    ],
    categories: [
      { id: "cortes-brasa", name: "Cortes Prime a la Brasa" },
      { id: "entradas-parrilleras", name: "Entradas Parrilleras" },
      { id: "cocteles-vinos", name: "Coctelería & Vinos" }
    ],
    menuItems: [
      {
        id: "pic-corte-1",
        name: "Picaña Prime a la Brasa (450g)",
        category: "cortes-brasa",
        description: "Corte de picaña jugosa con costra de sal marina a la brasa de carbón, servida con yuca al vapor y chimichurri.",
        priceUSD: 19.5,
        popular: true
      },
      {
        id: "pic-entrada-1",
        name: "Tostones Rellenos de Picaña (4 und)",
        category: "entradas-parrilleras",
        description: "Canastas de plátano verde rellenas de picaña en cubos a la brasa, queso de mano gratinado y salsa tártara.",
        priceUSD: 11.0,
        popular: true
      },
      {
        id: "pic-corte-2",
        name: "Puntas de Trasera al Grill (400g)",
        category: "cortes-brasa",
        description: "Jugoso corte de punta de trasera nacional con término a elección, ensalada mixta y arepitas fritas con nata.",
        priceUSD: 17.0
      },
      {
        id: "pic-drink-1",
        name: "Smoked Old Fashioned de Autor",
        category: "cocteles-vinos",
        description: "Bourbon premium ahumado con astillas de roble en mesa, bitter de angostura y piel de naranja caramelizada.",
        priceUSD: 8.5,
        popular: true
      }
    ],
    managerKpis: {
      activeReservations: 26,
      capacityPercentage: 95,
      todaySalesUSD: 2340,
      avgTicketUSD: 36
    },
    sampleBookings: [
      {
        id: "PIC-701",
        clientName: "Alejandro Rincon",
        details: "Experiencia Tomahawk & Brasa",
        time: "08:30 PM",
        status: "confirmada",
        pax: 4,
        totalUSD: 65
      }
    ]
  },

  // 8. Altamar Restaurante (@altamarmcbo)
  {
    slug: "altamarmcbo",
    batch: "dia5",
    archetype: "table-ordering",
    name: "Altamar Restaurante & Marisquería",
    handle: "altamarmcbo",
    category: "Marisquería Tradicional & Pescados",
    badgeText: "🥘 Tradición en Paellas & Pescado Frito",
    tagline: "Más de 15 años sirviendo auténtico sabor marino, cazuelas y paellas familiares en Las Veritas, Maracaibo.",
    heroTitle: "EL AUTÉNTICO MARISCO.",
    heroHighlight: "Altamar Maracaibo",
    heroSubtitle: "Pide rondas de bebidas, tostones y platos marinos desde el QR en tu mesa o solicita delivery familiar a tasa BCV.",
    logo: "/marcas/altamarmcbo.jpg",
    coverImage: "/marcas/altamarmcbo-cover.jpg",
    palette: {
      primary: "#0B2545",
      primaryHover: "#133E75",
      secondary: "#134074",
      accent: "#EE6C4D",
      darkBg: "#061322",
      cardBg: "#0C1F36",
      textLight: "#FFFFFF",
      textMuted: "#8DA9C4",
      border: "#1D3B60",
      glow: "rgba(238, 108, 77, 0.4)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "Altamar Restaurante es la marisquería familiar por excelencia en Las Veritas: paellas gigantescas a fuego vivo, pescados fritos enteros con tostones crujientes y porciones generosas pensadas para compartir.",
    introStats: [
      { label: "Tradición Zuliana", value: "+15 Años", detail: "Referente marino en Las Veritas" },
      { label: "Pesca Seleccionada", value: "100% Fresca", detail: "Curvina, róbalo y camarones" },
      { label: "Ambiente", value: "Familiar", detail: "Salón climatizado y atención ágil" }
    ],
    trustBadges: ["Especialistas en Paellas & Pescado Frito", "Pesca Fresca Seleccionada Diariamente", "Tradición Familiar en Las Veritas"],
    whatsappPitchCopy: "Hola equipo de Altamar Restaurante! 🦐🥘 Reconocemos la gran tradición de sus paellas y pescados fritos en Las Veritas. Para hacer que sus fines de semana sean más fluidos y sus comensales pidan rondas de bebidas y contornos sin esperar al mesonero, les armamos esta WebApp con menú QR interactivo y tasa BCV al día.\n\nPrueben la demo interactiva y miren el Reel aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/altamarmcbo",
    address: "Calle 89B, Sector Las Veritas / Bella Vista, Maracaibo",
    phone: "+58 412-0308674",
    hours: "Martes a Domingo: 11:30 AM – 6:30 PM",
    instagramUrl: "https://www.instagram.com/altamarmcbo/",
    mapsUrl: "https://maps.google.com/?q=Las+Veritas+Maracaibo+Altamar+Restaurante",
    bcvRate: 64.20,
    bookingOptions: [
      {
        id: "altamar-mesa-domingo",
        name: "Reserva de Mesa Familiar (4 a 10 pax)",
        description: "Mesa reservada para almuerzos familiares de domingo con comanda rápida y paella pre-agendada.",
        priceUSD: 0,
        unit: "reserva libre",
        badge: "Ideal Domingos",
        features: ["Mesa familiar garantizada", "Atención prioritaria", "Menú digital multimoneda"]
      }
    ],
    categories: [
      { id: "paellas-cazuelas", name: "Paellas & Cazuelas" },
      { id: "pescados-enteros", name: "Pescados Enteros" },
      { id: "entradas-marinas", name: "Entradas & Vuelve a la Vida" }
    ],
    menuItems: [
      {
        id: "alt-paella-1",
        name: "Paella Marinera Tradicional Altamar (2-3 pax)",
        category: "paellas-cazuelas",
        description: "Arroz húmedo con camarones gigantes, calamares, pulpo, mejillones y almejas con pimientos morrones y tostones.",
        priceUSD: 26.0,
        popular: true
      },
      {
        id: "alt-pescado-1",
        name: "Pescado Frito Entero (Curvina / Róbalo)",
        category: "pescados-enteros",
        description: "Pescado entero fresco frito al punto crujiente acompañado de tostones con queso rallado y ensalada mixta.",
        priceUSD: 15.0,
        popular: true
      },
      {
        id: "alt-cazuela-1",
        name: "Cazuela Altamar con Frutos del Mar",
        category: "paellas-cazuelas",
        description: "Mix de mariscos en crema madre gratinada con queso parmesano y hierbas aromáticas.",
        priceUSD: 16.0
      },
      {
        id: "alt-vuelve-1",
        name: "Vuelve a la Vida / Ceviche Mixto Zuliano",
        category: "entradas-marinas",
        description: "Mariscos marinados en salsa cóctel criolla con limón, cilantro, cebollín y galletas de soda.",
        priceUSD: 9.5,
        popular: true
      }
    ],
    managerKpis: {
      activeReservations: 22,
      capacityPercentage: 93,
      todaySalesUSD: 1680,
      avgTicketUSD: 24
    },
    sampleBookings: [
      {
        id: "ALT-601",
        clientName: "Familia Montiel",
        details: "Mesa Familiar (6 pax) + Paella",
        time: "01:30 PM",
        status: "confirmada",
        pax: 6,
        totalUSD: 26
      }
    ]
  },

  // 9. BO Grill Maracaibo (@bogrillmcbo)
  {
    slug: "bogrillmcbo",
    batch: "dia5",
    archetype: "direct-delivery",
    name: "BO Grill Parrillas & Ahumados",
    handle: "bogrillmcbo",
    category: "Parrilla Urbana, Burgers & Ahumados",
    badgeText: "🍖 Bandejas Todoterreno & Lechón Ahumado",
    tagline: "Especialistas en bandejas parrilleras monumentales, lechón ahumado y combos para compartir en Maracaibo.",
    heroTitle: "BRASA. AHUMADO. VOLUMEN.",
    heroHighlight: "BO Grill Maracaibo",
    heroSubtitle: "Pide tus Bandejas Todoterreno y combos con selector multisede (Indio Mara / Cañada Honda) directo a WhatsApp.",
    logo: "/marcas/bogrillmcbo.jpg",
    coverImage: "/marcas/bogrillmcbo-cover.jpg",
    palette: {
      primary: "#2B0909",
      primaryHover: "#4A1212",
      secondary: "#E63946",
      accent: "#FF9F1C",
      darkBg: "#0E0505",
      cardBg: "#190B0B",
      textLight: "#FFFFFF",
      textMuted: "#C7A6A6",
      border: "#331818",
      glow: "rgba(255, 159, 28, 0.4)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "BO Grill es la referencia de comida a la brasa y lechón ahumado en Maracaibo: famosas Bandejas Todoterreno con carnes nobles, queso frito y arepas para compartir en familia y amigos.",
    introStats: [
      { label: "Doble Sede", value: "2 Ubicaciones", detail: "Indio Mara & Cañada Honda" },
      { label: "Especialidad Única", value: "Lechón Ahumado", detail: "Ahumado a fuego lento" },
      { label: "Formato Masivo", value: "Bandejas XXL", detail: "Para compartir entre 4 y 6 personas" }
    ],
    trustBadges: ["Parrillas al Carbón & Lechón Ahumado", "Doble Sede: Indio Mara & Cañada Honda", "Bandejas Todoterreno & Delivery Rápido"],
    whatsappPitchCopy: "Buenas tardes equipo de BO Grill! 🍖🔥 Sus Bandejas Todoterreno y su lechón ahumado mueven un volumen tremendo en Cañada Honda e Indio Mara. Para que ningún cliente espere en WhatsApp y los pedidos salgan coordinados por sede con tasa BCV automática, les armamos esta WebApp de Delivery Directo.\n\nMiren la demo y el video de 15 segundos aquí:\n👉 https://byte-bridge-tau.vercel.app/demos/bogrillmcbo",
    address: "Sede 1: Zona Indio Mara / Sede 2: Cañada Honda, Maracaibo",
    phone: "+58 412-0308674",
    hours: "Lunes a Domingo: 11:00 AM – 11:00 PM",
    instagramUrl: "https://www.instagram.com/bogrillmcbo/",
    mapsUrl: "https://maps.google.com/?q=Maracaibo+BO+Grill+Indio+Mara",
    bcvRate: 64.20,
    bookingOptions: [
      {
        id: "bo-reserva-mesa",
        name: "Mesa para Grupos (Bandeja Todoterreno)",
        description: "Aparta tu mesa en la sede Indio Mara para celebrar con amigos y tener tu bandeja parrillera lista.",
        priceUSD: 0,
        unit: "reserva libre",
        badge: "Recomendado",
        features: ["Mesa asignada al llegar", "Selector de sede", "Tasa oficial BCV"]
      }
    ],
    categories: [
      { id: "bandejas-todoterreno", name: "Bandejas Todoterreno" },
      { id: "burgers-ahumadas", name: "Burgers & Lechón" },
      { id: "costillas-bbq", name: "Costillas BBQ & Extras" }
    ],
    menuItems: [
      {
        id: "bo-bandeja-1",
        name: "Bandeja Todoterreno BO Grill (4-5 personas)",
        category: "bandejas-todoterreno",
        description: "Carne a la brasa, pechuga de pollo, chorizo parrillero, lechón ahumado, tostones, arepitas, queso frito y salsas.",
        priceUSD: 28.0,
        popular: true
      },
      {
        id: "bo-burger-1",
        name: "Hamburguesa BO Grill con Lechón Ahumado",
        category: "burgers-ahumadas",
        description: "Carne de res al grill cubierta con tiras de lechón ahumado crujiente, queso frito zuliano y salsa BBQ artesanal.",
        priceUSD: 8.5,
        popular: true
      },
      {
        id: "bo-costilla-1",
        name: "Costillas BBQ Ahumadas a la Brasa",
        category: "costillas-bbq",
        description: "Costillar de cerdo tierno glaseado en salsa BBQ de la casa acompañado de papas rústicas sazonadas.",
        priceUSD: 14.0
      },
      {
        id: "bo-combo-duo",
        name: "Combo Parrillero Dúo (2 pax)",
        category: "bandejas-todoterreno",
        description: "Carne, pollo, chorizo, tostones con queso y 2 bebidas frías.",
        priceUSD: 15.0,
        popular: true
      }
    ],
    managerKpis: {
      activeReservations: 37,
      capacityPercentage: 97,
      todaySalesUSD: 1980,
      avgTicketUSD: 22
    },
    sampleBookings: [
      {
        id: "BO-901",
        clientName: "Guillermo Rivas",
        details: "Bandeja Todoterreno (5 pax) - Indio Mara",
        time: "08:00 PM",
        status: "confirmada",
        pax: 5,
        totalUSD: 28
      }
    ]
  },

  // 10. Dante Di Pronto (@dantedipronto)
  {
    slug: "dantedipronto",
    batch: "dia5",
    archetype: "vip-access",
    name: "Dante Di Pronto Pizza & Pasta",
    handle: "dantedipronto",
    category: "Pizzería Masa Madre, Rodizio & Trattoria",
    badgeText: "🍕 Rodizio All-You-Can-Eat & Masa Madre",
    tagline: "Pizzas artesanales de masa madre, tomates San Marzano y el legendario Rodizio de $10 en 5 de Julio.",
    heroTitle: "AUTÉNTICA ITALIA.",
    heroHighlight: "Dante Di Pronto",
    heroSubtitle: "Compra tus Pases de Rodizio ilimitado de $10 con código QR o pide pizzas de masa madre a tasa oficial BCV.",
    logo: "/marcas/dantedipronto.jpg",
    coverImage: "/marcas/dantedipronto-cover.jpg",
    palette: {
      primary: "#260606",
      primaryHover: "#3D0A0A",
      secondary: "#D90429",
      accent: "#2B9348",
      darkBg: "#0C0404",
      cardBg: "#180909",
      textLight: "#FFFFFF",
      textMuted: "#D6B8B8",
      border: "#331616",
      glow: "rgba(217, 4, 41, 0.4)"
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans"
    },
    introText: "Dante Di Pronto es la trattoria de 5 de Julio famosa por su masa madre de fermentación natural, sus más de 30 variedades de pizzas al horno y su aclamado Rodizio All-You-Can-Eat de pizza y pasta por solo $10 por persona.",
    introStats: [
      { label: "Rodizio Ilimitado", value: "$10 / Pax", detail: "Pizza y pasta sin límite los fines de semana" },
      { label: "Masa Madre", value: "+30 Variedades", detail: "Auténtico tomate San Marzano" },
      { label: "Ubicación Clave", value: "5 de Julio", detail: "Frente a la Clínica D'Empaire" }
    ],
    trustBadges: ["Auténtico Rodizio de Pizza & Pasta", "Masa Madre & Salsa San Marzano", "Punto Céntrico en Av. 5 de Julio"],
    whatsappPitchCopy: "Buenas tardes equipo de Dante Di Pronto! 🍕🍝 Su propuesta en 5 de Julio con las pizzas de masa madre y el Rodizio de $10 es de las más cotizadas de Maracaibo. Para evitar colas de espera en puerta y permitir que la gente reserve su Pase Rodizio con código QR o pida delivery en 3 clics, les diseñamos esta WebApp a medida con tasa BCV automática.\n\nLes comparto la demo y el video comercial:\n👉 https://byte-bridge-tau.vercel.app/demos/dantedipronto",
    address: "Calle 77 (Av. 5 de Julio) con Av. 14A, frente a Clínica D'Empaire, Maracaibo",
    phone: "+58 412-0308674",
    hours: "Martes a Domingo: 12:00 PM – 11:30 PM (Rodizio: Vie-Sáb-Dom 12 a 6PM)",
    instagramUrl: "https://www.instagram.com/dantedipronto/",
    mapsUrl: "https://maps.google.com/?q=5+de+Julio+Maracaibo+Dante+Di+Pronto",
    bcvRate: 64.20,
    bookingOptions: [
      {
        id: "dante-pase-rodizio",
        name: "Pase Preventa Rodizio All-You-Can-Eat",
        description: "Pase individual digital con QR para comer pizza y pasta ilimitada durante 2 horas en turnos de fin de semana con bebida incluida.",
        priceUSD: 10,
        unit: "persona/pase",
        badge: "Best Seller",
        features: ["Pizzas y pastas ilimitadas (2 horas)", "Bebida no alcohólica incluida", "Entrada garantizada sin cola"],
        maxCapacity: 1
      },
      {
        id: "dante-mesa-trattoria",
        name: "Reserva de Mesa Trattoria a la Carta",
        description: "Mesa reservada para cena romántica o familiar para degustar pizzas de masa madre y pastas especiales a la carta.",
        priceUSD: 15,
        unit: "depósito consumible",
        badge: "A la Carta",
        features: ["Mesa reservada en sala", "Consumo 100% acreditable", "Tasa oficial BCV"],
        maxCapacity: 6
      }
    ],
    categories: [
      { id: "pizzas-artesanales", name: "Pizzas Masa Madre" },
      { id: "pastas-clasicas", name: "Pastas & Lasagnas" },
      { id: "calzones-postres", name: "Calzones & Postres" }
    ],
    menuItems: [
      {
        id: "dan-pizza-1",
        name: "Pizza Dante Di Pronto Especial",
        category: "pizzas-artesanales",
        description: "Masa madre crocante, salsa San Marzano, mozzarella fior di latte, prosciutto di Parma, rúcula fresca y lascas de parmesano.",
        priceUSD: 13.5,
        popular: true
      },
      {
        id: "dan-pizza-2",
        name: "Pizza Pepperoni New York Style",
        category: "pizzas-artesanales",
        description: "Masa madre delgada con salsa pomodoro, mozzarella abundante y doble porción de pepperoni artesanal.",
        priceUSD: 10.5,
        popular: true
      },
      {
        id: "dan-pasta-1",
        name: "Fettuccine Alfredo con Camarones",
        category: "pastas-clasicas",
        description: "Pasta fresca al huevo salteada en salsa cremosa de parmesano reggiano, mantequilla clarificada y camarones al ajillo.",
        priceUSD: 12.0,
        popular: true
      },
      {
        id: "dan-pasta-2",
        name: "Lasagna Bolognese Tradicional Gratinada",
        category: "pastas-clasicas",
        description: "Capas de pasta artesanal con salsa bolognese de res y cerdo cocida a fuego lento, bechamel y mozzarella dorada.",
        priceUSD: 10.0
      }
    ],
    managerKpis: {
      activeReservations: 45,
      capacityPercentage: 98,
      todaySalesUSD: 2460,
      avgTicketUSD: 18
    },
    sampleBookings: [
      {
        id: "DAN-101",
        clientName: "Mauricio Villasmil",
        details: "Pase Preventa Rodizio (4 pax)",
        time: "02:00 PM",
        status: "confirmada",
        pax: 4,
        totalUSD: 40
      }
    ]
  }
];

function main() {
  let content = fs.readFileSync(demosDataPath, "utf8");

  // Format batch 5 objects to valid TypeScript array items string
  const formattedItems = batch5Objects
    .map((obj) => JSON.stringify(obj, null, 2))
    .join(",\n");

  const targetSuffix = "\n];\n\nexport function getDemoBySlug(slug: string): BusinessDemo | undefined {";
  
  if (!content.includes(targetSuffix)) {
    console.error("No se encontró el punto de inserción en data/demosData.ts");
    process.exit(1);
  }

  const replacement = `,\n${formattedItems}\n];\n\nexport function getDemoBySlug(slug: string): BusinessDemo | undefined {`;
  content = content.replace(targetSuffix, replacement);

  fs.writeFileSync(demosDataPath, content, "utf8");
  console.log("🎉 ¡10 Demos de Batch 5 inyectadas exitosamente en data/demosData.ts! Total: 50 Demos.");
}

main();
