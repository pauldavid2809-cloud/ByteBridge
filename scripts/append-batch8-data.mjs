import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const demosPath = path.join(__dirname, "..", "data", "demosData.ts");

const batch8Demos = [
  // 1. RUTA RESTAURANTE
  {
    slug: "rutarestaurante",
    batch: "dia8",
    archetype: "table-ordering",
    name: "RUTA Restaurante Comfort Food",
    handle: "rutarestaurante",
    category: "Comfort Food · Burgers Gourmet · Costillas & Cervezas",
    badgeText: "🍴 #RutaComfortFood · Cocina Reconfortante & Cervezas Artesanales",
    tagline: "El punto de encuentro para disfrutar hamburguesas de autor, costillas BBQ y picadas",
    heroTitle: "Platos reconfortantes, porciones generosas y",
    heroHighlight: "pedido en mesa por código QR",
    heroSubtitle: "Escanea el código QR de tu mesa, explora nuestra carta de burgers y cervezas, y envía la orden a cocina sin esperar mesoneros.",
    logo: "/marcas/rutarestaurante.jpg",
    coverImage: "/marcas/rutarestaurante-cover.jpg",
    palette: {
      primary: "#0284C7",
      primaryHover: "#0369A1",
      secondary: "#D97706",
      accent: "#38BDF8",
      darkBg: "#05131D",
      cardBg: "rgba(10, 30, 45, 0.85)",
      textLight: "#F0F9FF",
      textMuted: "#BAE6FD",
      border: "rgba(56, 189, 248, 0.25)",
      glow: "rgba(2, 132, 199, 0.2)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "RUTA Restaurante es el templo del confort food contemporáneo: recetas caseras elevadas a la excelencia, hamburguesas jugosas con pan artesanal, costillas ahumadas que se desprenden del hueso y ambiente relajado para compartir con amigos o en familia.",
    introStats: [
      { label: "Cocción Lenta", value: "8 Horas", detail: "Costillas glaseadas a fuego lento" },
      { label: "Carne Certificada", value: "100% Angus", detail: "Blend exclusivo molido diariamente" },
      { label: "Tiempo en Mesa", value: "QR Rápido", detail: "Sin esperas para pedir comida o bebida" }
    ],
    trustBadges: ["Cocina Abierta Continua", "Comanda Directa a Cocina", "Tasa BCV Oficial en Tiempo Real"],
    whatsappPitchCopy: "Hola equipo de RUTA Restaurante! 🍴 ¿Cuántos clientes se impacientan en sus mesas esperando que un mesonero les tome otra ronda de cervezas o hamburguesas cuando el salón se llena en horas pico?\\n\\nLes preparé un ejemplo exacto con su menú para que cada mesa pida directo desde el teléfono con código QR, vea el total en bolívares a tasa oficial y la orden les llegue limpia a cocina sin esperas:\\n👉 https://byte-bridge-tau.vercel.app/demos/rutarestaurante\\n\\n¿Les muestro en 5 minutos cómo funciona?",
    address: "Zona Gastronómica Principal, Caracas / Miranda",
    mapsUrl: "https://maps.google.com/?q=Ruta+Restaurante+Venezuela",
    hours: "Martes a Domingo: 12:00 PM - 11:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/rutarestaurante/",
    bookingType: "comanda-mesa",
    bookingTitle: "Comanda en Mesa & Reserva de Grupo",
    bookingSubtitle: "Ordena en sala al minuto o asegura mesa para tu reunión",
    bookingOptions: [
      {
        id: "mesa-comanda",
        name: "Mesa en Sala Comfort",
        description: "Auto-pedido en mesa escaneando código QR con entrega directa del camarero.",
        priceUSD: 0,
        unit: "sin costo",
        badge: "En Sala",
        features: ["Menú QR en mesa", "División de cuenta fácil", "Servicio rápido"]
      },
      {
        id: "mesa-amigos",
        name: "Mesa para Grupos (6+ pax)",
        description: "Mesa amplia reservada con combo de alitas y tabla de picadas lista a la llegada.",
        priceUSD: 15,
        unit: "abono consumible",
        badge: "Para Grupos",
        features: ["Ubicación preferencial", "1 Ración de alitas incluida", "Atención prioritaria"]
      }
    ],
    categories: [
      { id: "burgers", name: "Burgers Comfort", icon: "🍔" },
      { id: "ribs", name: "Costillas & Ahumados", icon: "🍖" },
      { id: "picadas", name: "Entradas para Picar", icon: "🍟" },
      { id: "bebidas", name: "Cervezas & Cócteles", icon: "🍻" }
    ],
    menuItems: [
      {
        id: "ruta-monster-burger",
        name: "RUTA Monster Bacon Double",
        category: "burgers",
        description: "Doble carne Angus 150g, triple queso cheddar madurado, tocineta crocante caramelizada y salsa secreta RUTA en pan brioche artesanal.",
        priceUSD: 11.5,
        badge: "Insignia",
        popular: true,
        tags: ["Angus", "Favorita"]
      },
      {
        id: "costillas-bbq-glaze",
        name: "Baby Back Ribs Ahumadas (Full Rack)",
        category: "ribs",
        description: "Costillas de cerdo horneadas 8 horas a baja temperatura, glaseadas con salsa BBQ casera al bourbon y papas rústicas.",
        priceUSD: 18.5,
        popular: true,
        tags: ["Ahumado", "Especialidad"]
      },
      {
        id: "ruta-loaded-nachos",
        name: "Nachos RUTA Supremos",
        category: "picadas",
        description: "Totopos crocantes con queso fundido, carne mechada sazonada, frijoles negros, pico de gallo, guacamole fresco y crema agria.",
        priceUSD: 9.5,
        popular: true,
        tags: ["Para Compartir"]
      },
      {
        id: "crispy-chicken-burger",
        name: "Crispy Sriracha Chicken Burger",
        category: "burgers",
        description: "Pechuga crujiente marinada en buttermilk, ensalada coleslaw fresca, pepinillos y mayonesa spicy sriracha.",
        priceUSD: 9,
        tags: ["Pollo"]
      },
      {
        id: "alitas-ruta-12",
        name: "Alitas Glaseadas x12 Piezas",
        category: "picadas",
        description: "Alitas doradas en salsa BBQ dulce o picante búfalo, servidas con apio fresco y aderezo ranch de la casa.",
        priceUSD: 10,
        tags: ["Alitas"]
      },
      {
        id: "jarra-cerveza-artesanal",
        name: "Jarra de Cerveza Artesanal 1.5L",
        category: "bebidas",
        description: "Cerveza rubia o IPA bien helada servida en jarra de vidrio esmerilada con 4 vasos fríos.",
        priceUSD: 8.5,
        tags: ["Bebidas"]
      }
    ],
    managerKpis: {
      activeReservations: 12,
      capacityPercentage: 84,
      todaySalesUSD: 1340,
      avgTicketUSD: 26
    },
    sampleBookings: [
      { id: "RUT-101", clientName: "Eduardo Castillo", details: "Mesa Comfort (4 pax) · Almuerzo", time: "01:30 PM", status: "confirmada", pax: 4, totalUSD: 46 },
      { id: "RUT-102", clientName: "Valeria Mendoza", details: "Mesa Grupo (8 pax) · After-Office", time: "07:30 PM", status: "en_mesa", pax: 8, totalUSD: 110 },
      { id: "RUT-103", clientName: "Ricardo Padrón", details: "Baby Back Ribs + Monster Burger · Takeaway", time: "08:15 PM", status: "pendiente", pax: 2, totalUSD: 30 }
    ]
  },

  // 2. VISTA BAR CARACAS
  {
    slug: "vistabarccs",
    batch: "dia8",
    archetype: "gourmet-booking",
    name: "Vista Bar Caracas Rooftop",
    handle: "vistabarccs",
    category: "Rooftop Lounge · Sunset & Ávila · Coctelería de Autor & Sushi",
    badgeText: "🌆 #LaMejorVista · Terraza Panorámica al Ávila & Noches de DJ",
    tagline: "El rooftop con la vista más imponente de Caracas, alta coctelería y gastronomía fusión",
    heroTitle: "Atardeceres frente al Ávila, coctelería y",
    heroHighlight: "reserva de mesa con vista garantizada",
    heroSubtitle: "Asegura tu mesa en primera fila para el sunset o la noche, preselecciona tus cócteles y recibe confirmación con pase digital de acceso inmediato.",
    logo: "/marcas/vistabarccs.jpg",
    coverImage: "/marcas/vistabarccs-cover.jpg",
    palette: {
      primary: "#E11D48",
      primaryHover: "#BE123C",
      secondary: "#475569",
      accent: "#F43F5E",
      darkBg: "#0B0B0E",
      cardBg: "rgba(25, 20, 26, 0.85)",
      textLight: "#FFF1F2",
      textMuted: "#FECDD3",
      border: "rgba(244, 63, 94, 0.25)",
      glow: "rgba(225, 29, 72, 0.25)"
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans"
    },
    introText: "Vista Bar Caracas es la terraza en las alturas más codiciada de la capital. Situada con vista frontal sin obstáculos al Parque Nacional El Ávila, combina sesiones de DJ internacionales, barra de mixología premium y un menú de sushi rolls y tapas contemporáneas.",
    introStats: [
      { label: "Vista al Ávila", value: "Panorámica", detail: "Sin obstáculos frente a la montaña" },
      { label: "Hora Sunset", value: "5:30 PM", detail: "Atardeceres mágicos con música en vivo" },
      { label: "Acceso VIP", value: "Pase QR", detail: "Entrada sin cola directo al ascensor" }
    ],
    trustBadges: ["Mesa en Primera Fila Garantizada", "Mixología de Clase Mundial", "Valet Parking & Seguridad Privada"],
    whatsappPitchCopy: "Hola equipo de Vista Bar Caracas! 🌆 ¿Cuántos clientes VIP se les quedan sin mesa para el atardecer o noche de fin de semana simplemente porque el chat de WhatsApp se satura y no dan abasto para confirmar?\\n\\nLes preparé una solución directa con su concepto donde el cliente reserva su mesa en primera fila frente al Ávila, recibe su pase digital con código QR para entrar sin colas y ustedes controlan el aforo en tiempo real:\\n👉 https://byte-bridge-tau.vercel.app/demos/vistabarccs\\n\\n¿Les muestro en 5 minutos cómo funciona?",
    address: "Piso Rooftop Torre Financiera, Las Mercedes / Altamira, Caracas",
    mapsUrl: "https://maps.google.com/?q=Vista+Bar+Caracas",
    hours: "Miércoles a Domingo: 5:00 PM - 3:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/vistabarccs/",
    bookingType: "reserva-gourmet",
    bookingTitle: "Reserva de Mesas Sunset & VIP Lounge",
    bookingSubtitle: "Elige tu ubicación preferencial con confirmación digital",
    bookingOptions: [
      {
        id: "mesa-front-avila",
        name: "Mesa Frontal al Ávila (Sunset)",
        description: "Ubicación en primera línea de baranda con vista panorámica abierta al Ávila durante el atardecer.",
        priceUSD: 30,
        unit: "consumo mínimo",
        badge: "Más Exclusiva",
        features: ["Vista 180° garantizada", "Copa de espumante bienvenida", "Pase QR directo"],
        maxCapacity: 4
      },
      {
        id: "lounge-dj-vip",
        name: "Lounge VIP Zona DJ",
        description: "Muebles lounge confortables cerca de la cabina del DJ para grupos de amigos y noche de fiesta.",
        priceUSD: 50,
        unit: "consumo mínimo",
        badge: "Noche de Fiesta",
        features: ["Servicio de botellas", "Mesa para 6 a 8 personas", "Acceso prioritario"],
        maxCapacity: 8
      }
    ],
    categories: [
      { id: "cocteles", name: "Mixología de Altura", icon: "🍸" },
      { id: "sushi", name: "Sushi & Rolls", icon: "🍣" },
      { id: "tapas", name: "Tapas & Crudos", icon: "🍤" },
      { id: "botellas", name: "Servicio de Botellas", icon: "🍾" }
    ],
    menuItems: [
      {
        id: "coctel-avila-sunset",
        name: "Ávila Sunset Signature",
        category: "cocteles",
        description: "Gin infusionado con pétalos de rosa, licor de flor de saúco, reducción de maracuyá y burbujas de cava brut.",
        priceUSD: 10,
        badge: "Insignia",
        popular: true,
        tags: ["Signature", "Sunset"]
      },
      {
        id: "roll-vista-trufa",
        name: "Vista Truffled Salmon Roll (10 bocados)",
        category: "sushi",
        description: "Relleno de aguacate y langostino crocante, cubierto de salmón fresco flameado al soplete con aceite de trufa blanca y caviar tobiko.",
        priceUSD: 16.5,
        badge: "Favorito",
        popular: true,
        tags: ["Sushi", "Trufa"]
      },
      {
        id: "tiradito-pez-blanco",
        name: "Tiradito Nikkei de Mero",
        category: "tapas",
        description: "Finas láminas de mero fresco en leche de tigre de ají amarillo, maíz chulpi crocante y emulsión de cilantro.",
        priceUSD: 13,
        tags: ["Crudo", "Nikkei"]
      },
      {
        id: "coctel-smoke-fashion",
        name: "Smoked Old Fashioned Vista",
        category: "cocteles",
        description: "Bourbon premium ahumado con virutas de cerezo, bitter angostura, piel de naranja caramelizada y hielo tallado a mano.",
        priceUSD: 11,
        popular: true,
        tags: ["Bourbon", "Ahumado"]
      },
      {
        id: "tabla-tapas-rooftop",
        name: "Tabla Degustación Rooftop",
        category: "tapas",
        description: "Mini brochetas de lomito al grill, croquetas de jamón ibérico con emulsión alioli y bao buns de panceta glaseada.",
        priceUSD: 19,
        tags: ["Para Compartir"]
      },
      {
        id: "champagne-moet-chandon",
        name: "Moët & Chandon Impérial Brut",
        category: "botellas",
        description: "Botella fría 750ml servida en cubitera con bengala y copas de cristal.",
        priceUSD: 95,
        tags: ["Champagne"]
      }
    ],
    managerKpis: {
      activeReservations: 16,
      capacityPercentage: 92,
      todaySalesUSD: 2450,
      avgTicketUSD: 48
    },
    sampleBookings: [
      { id: "VIS-201", clientName: "Alejandro Vollmer", details: "Mesa Frontal Ávila (4 pax) · Sunset 05:30 PM", time: "05:30 PM", status: "confirmada", pax: 4, totalUSD: 120 },
      { id: "VIS-202", clientName: "Camila Stolk", details: "Lounge VIP Zona DJ (6 pax) · Cumpleaños", time: "09:30 PM", status: "en_mesa", pax: 6, totalUSD: 220 },
      { id: "VIS-203", clientName: "Héctor Boulton", details: "Mesa Frontal Ávila (2 pax) · Aniversario", time: "08:00 PM", status: "pendiente", pax: 2, totalUSD: 85 }
    ]
  },

  // 3. VIZIO RISTORANTE
  {
    slug: "vizio_ristorante",
    batch: "dia8",
    archetype: "gourmet-booking",
    name: "Vizio Ristorante Italiano",
    handle: "vizio_ristorante",
    category: "Alta Cocina Italiana · Pastas Frescas · Cava de Vinos",
    badgeText: "🍝 #IlVizioDelGusto · Tradizione Italiana & Vini Selezionati",
    tagline: "Auténtica gastronomía italiana de autor, pastas hechas a mano y maridaje de excepción",
    heroTitle: "Auténtica cucina italiana, pastas frescas y",
    heroHighlight: "reserva con sommelier digital",
    heroSubtitle: "Elige tu mesa en salón climatizado o terraza, preselecciona tu pasta rellena o risotto y asegura tu experiencia gastronómica sin demoras.",
    logo: "/marcas/vizio_ristorante.jpg",
    coverImage: "/marcas/vizio_ristorante-cover.jpg",
    palette: {
      primary: "#CA8A04",
      primaryHover: "#A16207",
      secondary: "#334155",
      accent: "#EAB308",
      darkBg: "#0A0F1A",
      cardBg: "rgba(18, 25, 38, 0.85)",
      textLight: "#FEFCE8",
      textMuted: "#FEF08A",
      border: "rgba(234, 179, 8, 0.25)",
      glow: "rgba(202, 138, 4, 0.2)"
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans"
    },
    introText: "Vizio Ristorante rinde tributo a las recetas centenarias de la gastronomía italiana con técnicas contemporáneas. Pastas amasadas a la vista cada mañana, salsas de cocción lenta con tomates San Marzano DOP y una selección de vinos de la Toscana y Piamonte.",
    introStats: [
      { label: "Pasta al Huevo", value: "100% Fresca", detail: "Amasada al día con sémola italiana" },
      { label: "Cava Italiana", value: "50+ Vinos", detail: "Chianti, Barolo, Brunello y Prosecco" },
      { label: "Experiencia", value: "Chef a Mesa", detail: "Pasta flambeada en rueda de parmesano" }
    ],
    trustBadges: ["Ingredientes Importados DOP", "Sommelier en Sala", "Salón Climatizado & Valet"],
    whatsappPitchCopy: "Hola equipo de Vizio Ristorante! 🍝 ¿Cuántas reservas de cenas familiares o de negocios se les quedan sin atender los fines de semana cuando el chat de WhatsApp se satura?\\n\\nLes armé una propuesta interactiva con su carta donde sus comensales reservan su mesa, exploran las pastas frescas con maridaje de vinos y reciben confirmación automática con pase digital:\\n👉 https://byte-bridge-tau.vercel.app/demos/vizio_ristorante\\n\\n¿Les muestro en 5 minutos cómo funciona?",
    address: "Calle Madrid con Av. Trinidad, Las Mercedes, Caracas",
    mapsUrl: "https://maps.google.com/?q=Vizio+Ristorante+Caracas",
    hours: "Lunes a Domingo: 12:30 PM - 11:30 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/vizio_ristorante/",
    bookingType: "reserva-gourmet",
    bookingTitle: "Reserva de Mesas & Menú Degustación",
    bookingSubtitle: "Asegura tu ubicación en salón principal o terraza",
    bookingOptions: [
      {
        id: "mesa-ristorante",
        name: "Mesa Salón Principal",
        description: "Mesa confortable en salón climatizado con atención personalizada del sommelier.",
        priceUSD: 0,
        unit: "por reserva",
        badge: "Clásica",
        features: ["Ubicación en salón", "Servicio de sommelier", "Carta digital interactiva"]
      },
      {
        id: "rueda-parmesano",
        name: "Experiencia Ruota di Parmigiano",
        description: "Mesa frente al carrito de flambeado donde el chef prepara la pasta dentro de la rueda de queso Grana Padano.",
        priceUSD: 20,
        unit: "depósito consumible",
        badge: "Show Gastronómico",
        features: ["Flambeado a la vista", "Copa de Prosecco cortesía", "Mesa preferencial"]
      }
    ],
    categories: [
      { id: "pastas", name: "Primi Piatti & Pastas", icon: "🍝" },
      { id: "carni", name: "Secondi & Carnes", icon: "🥩" },
      { id: "antipasti", name: "Antipasti & Carpaccios", icon: "🥗" },
      { id: "dolci", name: "Dolci Tradizionali", icon: "🍮" }
    ],
    menuItems: [
      {
        id: "tagliolini-ruota-tartufo",
        name: "Tagliolini al Tartufo in Ruota di Parmigiano",
        category: "pastas",
        description: "Pasta fresca al huevo salteada con mantequilla de trufa negra, emulsionada dentro de la rueda de queso Grana Padano de 24 meses.",
        priceUSD: 21,
        badge: "Insignia",
        popular: true,
        tags: ["Trufa", "Pasta Fresca"]
      },
      {
        id: "ossobuco-milanesa-vizio",
        name: "Ossobuco alla Milanese con Risotto allo Zafferano",
        category: "carni",
        description: "Garrón de ternera braseado 6 horas en vino blanco y vegetales, servido sobre risotto clásico al azafrán con gremolata cítrica.",
        priceUSD: 24,
        badge: "Especialidad",
        popular: true,
        tags: ["Carne", "Risotto"]
      },
      {
        id: "ravioli-ricotta-spinaci",
        name: "Ravioli di Ricotta e Spinaci al Pomodoro Fresco",
        category: "pastas",
        description: "Raviolis artesanales rellenos de ricotta de búfala y espinacas tiernas con salsa de tomates San Marzano confitados y albahaca.",
        priceUSD: 15.5,
        tags: ["Vegetariano", "Casero"]
      },
      {
        id: "carpaccio-polpo-vizio",
        name: "Carpaccio di Polpo Mediterraneo",
        category: "antipasti",
        description: "Láminas prensadas de pulpo cocido al punto con emulsión de limón amarillo, alcaparras baby crocantes y brotes verdes.",
        priceUSD: 14,
        popular: true,
        tags: ["Mariscos"]
      },
      {
        id: "tiramisu-tradizionale-vizio",
        name: "Tiramisù Tradizionale al Mascarpone",
        category: "dolci",
        description: "Bizcochos savoiardi embebidos en espresso italiano y licor Amaretto, crema de queso mascarpone puro y cacao amargo espolvoreado.",
        priceUSD: 7.5,
        tags: ["Postre"]
      },
      {
        id: "burrata-pugliese-vizio",
        name: "Burrata Pugliese con Prosciutto di Parma",
        category: "antipasti",
        description: "Corazón cremoso de burrata fresca con lonjas de jamón de Parma curado 18 meses, tomates cherry glaseados y pesto genovés.",
        priceUSD: 16,
        tags: ["Entrada"]
      }
    ],
    managerKpis: {
      activeReservations: 14,
      capacityPercentage: 88,
      todaySalesUSD: 2180,
      avgTicketUSD: 44
    },
    sampleBookings: [
      { id: "VIZ-301", clientName: "Giancarlo Benítez", details: "Mesa Ristorante (4 pax) · Almuerzo Corporativo", time: "01:00 PM", status: "confirmada", pax: 4, totalUSD: 140 },
      { id: "VIZ-302", clientName: "Antonella Ruggiero", details: "Experiencia Ruota di Parmigiano (2 pax)", time: "08:30 PM", status: "en_mesa", pax: 2, totalUSD: 75 },
      { id: "VIZ-303", clientName: "Federico Zuloaga", details: "Mesa Ristorante (6 pax) · Cena Familiar", time: "09:00 PM", status: "pendiente", pax: 6, totalUSD: 190 }
    ]
  },

  // 4. CREPÚSCULO BISTRÓ
  {
    slug: "crepusculobistro",
    batch: "dia8",
    archetype: "table-ordering",
    name: "Crepúsculo Bistró & Café",
    handle: "crepusculobistro",
    category: "Bistró de Autor · Desayunos & Brunches · Coctelería de Atardecer",
    badgeText: "🌅 #TierraDeCrepusculos · Sabores de Barquisimeto & Café de Altura",
    tagline: "El encanto de los atardeceres larenses en cada desayuno gourmet, pasta y cóctel",
    heroTitle: "Brunches larenses, cocina fusión y",
    heroHighlight: "pedido en mesa por código QR",
    heroSubtitle: "Escanea el código QR de tu mesa, explora nuestras opciones de desayunos, platos fuertes y bebidas, y envía la orden a cocina sin esperar que llegue el salonero.",
    logo: "/marcas/crepusculobistro.jpg",
    coverImage: "/marcas/crepusculobistro-cover.jpg",
    palette: {
      primary: "#C2410C",
      primaryHover: "#9A3412",
      secondary: "#D97706",
      accent: "#FB923C",
      darkBg: "#180D06",
      cardBg: "rgba(38, 20, 12, 0.85)",
      textLight: "#FFF7ED",
      textMuted: "#FFEDD5",
      border: "rgba(251, 146, 60, 0.25)",
      glow: "rgba(194, 65, 12, 0.25)"
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans"
    },
    introText: "Crepúsculo Bistró captura la magia de la ciudad de los crepúsculos en Barquisimeto. Un rincón acogedor donde convergen ingredientes autóctonos larenses con cocina internacional: desayunos criollos gourmet, cafés de origen andino y cócteles al atardecer.",
    introStats: [
      { label: "Origen Local", value: "Quesos de Lara", detail: "Queso de cabra artesanal de Carora" },
      { label: "Horario Corrido", value: "8AM–10PM", detail: "Desayuno, almuerzo ejecutivo y cena" },
      { label: "Mesa Express", value: "Código QR", detail: "Sin esperas para ordenar o pagar" }
    ],
    trustBadges: ["Ingredientes de Finca Larense", "Café de Especialidad Filtrado", "Ambiente Climatizado & Terraza"],
    whatsappPitchCopy: "Hola equipo de Crepúsculo Bistró! 🌅 En las mañanas de desayuno o en la tarde cuando la terraza se llena, ¿cuántos clientes se impacientan esperando que el mesonero les acerque la carta o tome su pedido de café y tostadas?\\n\\nLes preparé una prueba directa con su menú para que el comensal ordene desde su mesa con código QR, vea el precio en bolívares a tasa oficial y la comanda entre lista a cocina:\\n👉 https://byte-bridge-tau.vercel.app/demos/crepusculobistro\\n\\n¿Les muestro en 5 minutos cómo funciona?",
    address: "Zona Este / Nueva Segovia, Barquisimeto, Estado Lara",
    mapsUrl: "https://maps.google.com/?q=Crepusculo+Bistro+Barquisimeto",
    hours: "Lunes a Domingo: 8:00 AM - 10:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/crepusculobistro/",
    bookingType: "comanda-mesa",
    bookingTitle: "Auto-Pedido en Mesa & Reserva Bistró",
    bookingSubtitle: "Comanda tu brunch o merienda sin esperar por atención",
    bookingOptions: [
      {
        id: "mesa-bistro",
        name: "Mesa en Bistró",
        description: "Ordena en sala con código QR con despacho rápido a tu mesa.",
        priceUSD: 0,
        unit: "sin costo",
        badge: "En Sala",
        features: ["Menú QR en mesa", "Pago a tasa oficial", "Servicio ágil"]
      },
      {
        id: "desayuno-degustacion",
        name: "Brunch Crepúsculo Degustación (2 pax)",
        description: "Mesa reservada con 2 platos brunch a elección, café especial ilimitado y jugo natural.",
        priceUSD: 16,
        unit: "para 2 personas",
        badge: "Recomendado",
        features: ["2 Platos de brunch", "Café refill", "Mesa preferencial"]
      }
    ],
    categories: [
      { id: "brunches", name: "Desayunos & Brunches", icon: "🍳" },
      { id: "pastas", name: "Pastas & Fuertes", icon: "🍝" },
      { id: "tostadas", name: "Sandwiches & Tostadas", icon: "🥪" },
      { id: "bebidas", name: "Cafés & Crepúsculos", icon: "🍹" }
    ],
    menuItems: [
      {
        id: "desayuno-crepusculo-larense",
        name: "Desayuno Criollo Crepúsculo",
        category: "brunches",
        description: "Carne desmechada jugosa, caraotas negras refritas con queso de cabra caroreño rallado, huevos revueltos con tomate y arepas de maíz pilado calientes.",
        priceUSD: 7.5,
        badge: "Insignia",
        popular: true,
        tags: ["Criollo", "Desayuno"]
      },
      {
        id: "tostada-cabra-miel",
        name: "Tostada de Masa Madre con Queso de Cabra & Miel",
        category: "tostadas",
        description: "Pan rústico tostado con queso de cabra artesanal de Carora, nueces caramelizadas, higos y llovizna de miel orgánica.",
        priceUSD: 6.5,
        badge: "Favorita",
        popular: true,
        tags: ["Gourmet", "Larense"]
      },
      {
        id: "fettuccine-lomito-crepusculo",
        name: "Fettuccine al Ragú de Lomito Larense",
        category: "pastas",
        description: "Pasta fresca salteada con puntas de lomito selladas en mantequilla de romero y reducción de vino tinto con champiñones.",
        priceUSD: 12.5,
        tags: ["Pasta", "Lomito"]
      },
      {
        id: "coctel-crepusculo-sunset",
        name: "Cóctel Crepúsculo Cardenal",
        category: "bebidas",
        description: "Cocuy de penca artesanal premium macerado con mora silvestre, sirope de papelón con limón y tónica fría.",
        priceUSD: 5.5,
        popular: true,
        tags: ["Cocuy", "Signature"]
      },
      {
        id: "pancakes-frutos-rojos-bistro",
        name: "Torre de Pancakes Crepúsculo",
        category: "brunches",
        description: "Pancakes esponjosos con coulis casero de fresas y moras, queso crema batido y miel de maple.",
        priceUSD: 6,
        tags: ["Dulce"]
      },
      {
        id: "cappuccino-origen-andino",
        name: "Cappuccino Micro-Lote Especial",
        category: "bebidas",
        description: "Espresso doble con leche cremada y cacao larense fino de aroma espolvoreado.",
        priceUSD: 3,
        tags: ["Café"]
      }
    ],
    managerKpis: {
      activeReservations: 10,
      capacityPercentage: 82,
      todaySalesUSD: 980,
      avgTicketUSD: 18
    },
    sampleBookings: [
      { id: "CRE-401", clientName: "Gustavo Rivero", details: "Brunch Crepúsculo (2 pax) · Terraza", time: "09:00 AM", status: "confirmada", pax: 2, totalUSD: 16 },
      { id: "CRE-402", clientName: "Daniela Falcón", details: "Mesa Bistró (4 pax) · Almuerzo", time: "01:15 PM", status: "en_mesa", pax: 4, totalUSD: 42 },
      { id: "CRE-403", clientName: "Simón Yépez", details: "Tostada de Cabra + Cappuccino · Pick-Up", time: "10:30 AM", status: "pendiente", pax: 1, totalUSD: 9.5 }
    ]
  },

  // 5. HUMOS BISTRO & BAR
  {
    slug: "humosbistro_bar",
    batch: "dia8",
    archetype: "table-ordering",
    name: "Humos Bistro & Bar",
    handle: "humosbistro_bar",
    category: "Cocina al Fuego · Carnes Ahumadas · Coctelería de Autor",
    badgeText: "🔥 #PasionPorElFuego · Carnes a la Leña, Ahumados & Brasas",
    tagline: "El sabor del humo y las brasas en cortes selectos, smash burgers y cócteles ahumados",
    heroTitle: "Parrilla a la leña, cortes ahumados y",
    heroHighlight: "auto-pedido en mesa por código QR",
    heroSubtitle: "Escanea el código QR de tu mesa, pide tus cortes a la brasa y cócteles ahumados directo a la estación de parrilla sin esperas.",
    logo: "/marcas/humosbistro_bar.jpg",
    coverImage: "/marcas/humosbistro_bar-cover.jpg",
    palette: {
      primary: "#EA580C",
      primaryHover: "#C2410C",
      secondary: "#27272A",
      accent: "#F97316",
      darkBg: "#09090B",
      cardBg: "rgba(24, 24, 27, 0.85)",
      textLight: "#FAFAFA",
      textMuted: "#E4E4E7",
      border: "rgba(249, 115, 22, 0.25)",
      glow: "rgba(234, 88, 12, 0.25)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "Humos Bistro & Bar es el santuario de las carnes cocinadas a la leña de roble y manzano. Una experiencia donde el ahumado lento transforma cortes de res, costillares y hamburguesas en piezas jugosas acompañadas de mixología teatral.",
    introStats: [
      { label: "Madera de Humo", value: "Roble & Manzano", detail: "Ahumado artesanal sin aditivos químicos" },
      { label: "Parrilla Abierta", value: "Fuego Vivo", detail: "Carbón vegetal y cortes premium" },
      { label: "Tiempo de Barra", value: "Express QR", detail: "Comanda enviada al instante a cocina" }
    ],
    trustBadges: ["Ahumador de Carbón y Leña", "Cortes Angus Nacionales e Importados", "Terraza Climatizada & Bar"],
    whatsappPitchCopy: "Hola equipo de Humos Bistro & Bar! 🔥 ¿Cuánto tiempo pierden sus clientes en mesa esperando otra ronda de tragos o carnes cuando la sala y la terraza se llenan los fines de semana?\\n\\nLes preparé un ejemplo directo con sus carnes ahumadas y cócteles para que cada mesa pida con código QR directo a parrilla, divida la cuenta al instante y el personal no se sature tomando comandas a mano:\\n👉 https://byte-bridge-tau.vercel.app/demos/humosbistro_bar\\n\\n¿Les muestro en 5 minutos cómo funciona?",
    address: "Avenida Principal Gastronómica, Maracay / Valencia / Caracas",
    mapsUrl: "https://maps.google.com/?q=Humos+Bistro+Bar+Venezuela",
    hours: "Miércoles a Domingo: 1:00 PM - 12:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/humosbistro_bar/",
    bookingType: "comanda-mesa",
    bookingTitle: "Comanda en Mesa & Reserva de Parrilla",
    bookingSubtitle: "Ordena a la brasa en segundos desde tu smartphone",
    bookingOptions: [
      {
        id: "mesa-humos",
        name: "Mesa Salón Humos",
        description: "Comanda digital directa a la estación de fuegos y barra.",
        priceUSD: 0,
        unit: "sin costo",
        badge: "En Sala",
        features: ["Menú QR en mesa", "Comanda sin demoras", "División de cuenta fácil"]
      },
      {
        id: "mesa-parrillera-vip",
        name: "Mesa VIP Parrillera (4 a 6 pax)",
        description: "Ubicación preferencial con tabla de degustación de cortes ahumados servida sobre leña encendida.",
        priceUSD: 25,
        unit: "abono consumible",
        badge: "Experiencia Fuego",
        features: ["Servicio sobre brasas", "Ronda de cócteles cortesía", "Atención prioritaria"]
      }
    ],
    categories: [
      { id: "carnes", name: "Cortes a la Leña", icon: "🥩" },
      { id: "burgers", name: "Smash al Humo", icon: "🍔" },
      { id: "picadas", name: "Tablas & Entradas", icon: "🍢" },
      { id: "cocteles", name: "Coctelería Ahumada", icon: "🥃" }
    ],
    menuItems: [
      {
        id: "brisket-ahumado-humos",
        name: "Brisket Ahumado 12 Horas (350g)",
        category: "carnes",
        description: "Pecho de res Angus con anillo de humo perfecto, corteza de pimienta negra y corte suave como mantequilla con mazorca grillada.",
        priceUSD: 18,
        badge: "Plato Insignia",
        popular: true,
        tags: ["Ahumado", "Angus"]
      },
      {
        id: "smash-humos-burger",
        name: "Burger Humos Black Smoke",
        category: "burgers",
        description: "Doble carne smash sellada a la plancha de carbón, queso gouda ahumado fundido, cebollas caramelizadas al bourbon y tocino crujiente.",
        priceUSD: 10.5,
        badge: "Top Seller",
        popular: true,
        tags: ["Smash", "Burger"]
      },
      {
        id: "tabla-humos-mixta",
        name: "Gran Tabla Humos para Dos",
        category: "picadas",
        description: "Selección de costillitas BBQ, pulled pork jugoso, chorizo ahumado artesanal, papas rústicas con queso cheddar y panes brioche.",
        priceUSD: 25,
        popular: true,
        tags: ["Para Compartir"]
      },
      {
        id: "old-fashioned-humos",
        name: "Old Fashioned en Campana de Humo",
        category: "cocteles",
        description: "Ron añejo venezolano servido dentro de campana de cristal ahumada con canela y corteza de roble que se destapa en mesa.",
        priceUSD: 8.5,
        badge: "Coctel Show",
        popular: true,
        tags: ["Mixología"]
      },
      {
        id: "picanha-fuego-vivo",
        name: "Picaña Prime a la Brasa (400g)",
        category: "carnes",
        description: "Corte de picaña gruesa con su capa dorada de grasa crujiente, servido sobre piedra caliente con sal marina gruesa.",
        priceUSD: 21,
        tags: ["Parrilla"]
      },
      {
        id: "tequenos-humos-tocineta",
        name: "Tequeños Rellenos de Queso & Tocineta Ahumada",
        category: "picadas",
        description: "6 Tequeños hojaldrados rellenos de queso gouda y trocitos de tocineta ahumada con mermelada de ají dulce.",
        priceUSD: 7,
        tags: ["Entrada"]
      }
    ],
    managerKpis: {
      activeReservations: 11,
      capacityPercentage: 86,
      todaySalesUSD: 1620,
      avgTicketUSD: 32
    },
    sampleBookings: [
      { id: "HUM-501", clientName: "Mauricio Bencomo", details: "Mesa Humos (4 pax) · Cena de Amigos", time: "08:00 PM", status: "confirmada", pax: 4, totalUSD: 75 },
      { id: "HUM-502", clientName: "Javier Arismendi", details: "Mesa VIP Parrillera (6 pax) · Cumpleaños", time: "09:30 PM", status: "en_mesa", pax: 6, totalUSD: 160 },
      { id: "HUM-503", clientName: "Patricia Escalona", details: "Brisket + Smash Humos · Takeaway", time: "07:15 PM", status: "pendiente", pax: 2, totalUSD: 28.5 }
    ]
  },

  // 6. LA FELICITTÀ
  {
    slug: "lafelicittave",
    batch: "dia8",
    archetype: "item-builder",
    name: "La Felicittà Gelatería & Dolci",
    handle: "lafelicittave",
    category: "Gelato Artesanal Italiano · Crepería · Postres de Diseño",
    badgeText: "🍦 #PuraFelicitta · Auténtico Gelato Italiano & Pastelería Fina",
    tagline: "El sabor de la felicidad en gelatos artesanales italianos, crepes y copas de autor",
    heroTitle: "Gelato italiano 100% artesanal y",
    heroHighlight: "constructor de copas y cajas para llevar",
    heroSubtitle: "Diseña tu copa de gelato o caja para llevar en pantalla: elige sabores de vitrina, siropes tibios y toppings crujientes en 3 clics.",
    logo: "/marcas/lafelicittave.jpg",
    coverImage: "/marcas/lafelicittave-cover.jpg",
    palette: {
      primary: "#DB2777",
      primaryHover: "#BE185D",
      secondary: "#F472B6",
      accent: "#F472B6",
      darkBg: "#1A0812",
      cardBg: "rgba(45, 12, 30, 0.85)",
      textLight: "#FDF2F8",
      textMuted: "#FBCFE8",
      border: "rgba(244, 114, 182, 0.25)",
      glow: "rgba(219, 39, 119, 0.25)"
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans"
    },
    introText: "La Felicittà es la embajada del auténtico gelato cremoso italiano. Elaborado diariamente con leche fresca entera, pastas puras de pistacho de Bronte y avellanas del Piamonte, sin grasas hidrogenadas ni conservantes artificiales.",
    introStats: [
      { label: "Elaboración", value: "Diaria en Sala", detail: "Cremado fresco en mantecadora italiana" },
      { label: "Sabores en Vitrina", value: "24+", detail: "Gelatos de leche y sorbettos de pura fruta" },
      { label: "Cajas Térmicas", value: "0.5kg y 1kg", detail: "Empaque especial que conserva el frío 2 horas" }
    ],
    trustBadges: ["Pastas Italianas Puras Importadas", "Opciones Sin Azúcar & Sin Lácteos", "Cajas Térmicas Selladas"],
    whatsappPitchCopy: "Hola equipo de La Felicittà! 🍦 ¿Cuántos clientes se van o pierden tiempo en la fila de vitrina los fines de semana preguntando qué sabores quedan o cómo armar sus copas y cajas de medio kilo?\\n\\nLes creé un personalizador visual para que sus clientes elijan sabores, barquillas y toppings desde el teléfono, o pidan su caja para retirar sin hacer cola:\\n👉 https://byte-bridge-tau.vercel.app/demos/lafelicittave\\n\\n¿Les muestro en 5 minutos cómo funciona?",
    address: "Boulevard Gastronómico, Caracas / Valencia",
    mapsUrl: "https://maps.google.com/?q=La+Felicitta+Gelateria+Venezuela",
    hours: "Lunes a Domingo: 12:00 PM - 10:30 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/lafelicittave/",
    bookingType: "item-builder",
    bookingTitle: "Arma tu Copa o Caja de Gelato",
    bookingSubtitle: "Elige sabores de vitrina, salsas y toppings paso a paso",
    bookingOptions: [
      {
        id: "gelato-box-builder",
        name: "Caja Térmica para Llevar (0.5 kg o 1 kg)",
        description: "Elige hasta 3 o 4 sabores de gelato con espátula y barquillas crujientes incluidas.",
        priceUSD: 0,
        unit: "pedido online",
        badge: "Más Vendido",
        features: ["Hasta 4 sabores a elección", "Caja isotérmica de regalo", "Retiro express en mostrador"]
      },
      {
        id: "copa-felicitta",
        name: "Copa Especial La Felicittà en Sala",
        description: "3 Bolas de gelato premium con salsa tibia de chocolate belga, crema chantilly fresca y avellanas.",
        priceUSD: 6.5,
        unit: "por copa",
        badge: "Favorito en Sala",
        features: ["3 Sabores gourmet", "Salsa tibia de chocolate", "Barquilla waffle artesanal"]
      }
    ],
    categories: [
      { id: "gelatos", name: "Sabores de Gelato", icon: "🍨" },
      { id: "cajas", name: "Cajas Térmicas Takeaway", icon: "📦" },
      { id: "crepes", name: "Crepes & Waffles", icon: "🥞" },
      { id: "cafes", name: "Café & Affogato", icon: "☕" }
    ],
    menuItems: [
      {
        id: "caja-gelato-1kg",
        name: "Caja Térmica Gelato Familiar (1 kg)",
        category: "cajas",
        description: "Hasta 4 sabores de gelato artesanal en empaque térmico con 6 conos de barquilla dulce y servilletas.",
        priceUSD: 16,
        badge: "Para la Casa",
        popular: true,
        tags: ["Familiar", "Takeaway"]
      },
      {
        id: "gelato-pistacchio-puro",
        name: "Gelato Puro Pistacchio di Bronte",
        category: "gelatos",
        description: "La joya de la corona: pasta pura de pistachos sicilianos tostados con trocitos crocantes de pistacho.",
        priceUSD: 4.5,
        badge: "Estrella",
        popular: true,
        tags: ["Pistacho", "Top Seller"]
      },
      {
        id: "affogato-al-caffe-felicitta",
        name: "Affogato Tradizionale al Caffè",
        category: "cafes",
        description: "Una bola cremosa de gelato de flor de leche o vainilla ahogada en una taza con espresso caliente recién extraído.",
        priceUSD: 4,
        tags: ["Café", "Postre"]
      },
      {
        id: "gelato-nocciola-piemonte",
        name: "Gelato di Nocciola Piemonte IGP",
        category: "gelatos",
        description: "Avellanas tostadas del norte de Italia caramelizadas en base de leche cremosa.",
        priceUSD: 4.5,
        popular: true,
        tags: ["Avellana"]
      },
      {
        id: "crepe-nutella-gelato",
        name: "Crepe Caliente con Nutella & Gelato",
        category: "crepes",
        description: "Crepe recién hecha rellena de Nutella tibia con una bola de gelato a elección y fresas frescas laminadas.",
        priceUSD: 6.5,
        tags: ["Dulce", "Crepe"]
      },
      {
        id: "caja-gelato-medio-kilo",
        name: "Caja Térmica Gelato (0.5 kg)",
        category: "cajas",
        description: "Hasta 3 sabores de gelato en caja isotérmica con 3 barquillas dulces.",
        priceUSD: 9.5,
        tags: ["Para Llevar"]
      }
    ],
    managerKpis: {
      activeReservations: 18,
      capacityPercentage: 90,
      todaySalesUSD: 870,
      avgTicketUSD: 14
    },
    sampleBookings: [
      { id: "FEL-601", clientName: "Lorena Pietri", details: "Caja Térmica 1 kg (Pistacho, Nocciola, Frutos) · Pick-Up", time: "03:30 PM", status: "confirmada", pax: 1, totalUSD: 16 },
      { id: "FEL-602", clientName: "Carlos Febres", details: "2x Copa Especial en Sala", time: "05:15 PM", status: "en_mesa", pax: 2, totalUSD: 13 },
      { id: "FEL-603", clientName: "Valentina Sosa", details: "Caja Térmica 0.5 kg · Pick-Up Express", time: "06:00 PM", status: "pendiente", pax: 1, totalUSD: 9.5 }
    ]
  },

  // 7. APRILE CARACAS
  {
    slug: "aprile_ccs",
    batch: "dia8",
    archetype: "gourmet-booking",
    name: "Aprile Ristorante Caracas",
    handle: "aprile_ccs",
    category: "Alta Gastronomía Italiana · Salones Privados · Cava de Colección",
    badgeText: "🍷 #AprileCaracas · El Clásico de la Alta Cocina en Altamira",
    tagline: "El referente por excelencia de la alta gastronomía italiana y diplomática en Caracas",
    heroTitle: "Tradición gastronómica de alto nivel y",
    heroHighlight: "reserva de salones y mesas ejecutivas",
    heroSubtitle: "Asegura tu mesa en salón principal o reserva salones privados para almuerzos de negocios, con atención directa del maitre y sommelier.",
    logo: "/marcas/aprile_ccs.jpg",
    coverImage: "/marcas/aprile_ccs-cover.jpg",
    palette: {
      primary: "#0F172A",
      primaryHover: "#020617",
      secondary: "#64748B",
      accent: "#94A3B8",
      darkBg: "#0B0F19",
      cardBg: "rgba(15, 23, 42, 0.85)",
      textLight: "#F8FAFC",
      textMuted: "#CBD5E1",
      border: "rgba(148, 163, 184, 0.25)",
      glow: "rgba(15, 23, 42, 0.3)"
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans"
    },
    introText: "Aprile es una institución viva de la alta cocina en Caracas. Ubicado en una distinguida casona de Altamira, ha sido el escenario de encuentros diplomáticos, corporativos y familiares de alto perfil durante décadas, respaldado por un servicio de guante blanco impecable.",
    introStats: [
      { label: "Trayectoria", value: "Icono Ccs", detail: "Décadas de excelencia en Altamira" },
      { label: "Salones VIP", value: "3 Privados", detail: "Climatizados con acústica reservada" },
      { label: "Cava de Vinos", value: "Gran Reserva", detail: "Etiquetas clásicas del viejo y nuevo mundo" }
    ],
    trustBadges: ["Servicio de Maitre y Guante Blanco", "Salones Privados para Negocios", "Valet Parking Vigilado"],
    whatsappPitchCopy: "Estimado equipo de Aprile Ristorante: ¿Cuántas solicitudes de almuerzos corporativos o cenas en salones privados se demoran en coordinar por mensajes de texto entre asistentes y el maitre?\\n\\nLes preparé una propuesta digital sobria donde sus clientes ejecutivos eligen su salón privado, confirman comensales con pase formal con código QR y seleccionan maridajes sin fricción:\\n👉 https://byte-bridge-tau.vercel.app/demos/aprile_ccs\\n\\n¿Cuándo tendrían 5 minutos para ver cómo funciona?",
    address: "4ta Avenida entre 5ta y 6ta Transversal, Altamira, Caracas",
    mapsUrl: "https://maps.google.com/?q=Aprile+Restaurante+Altamira+Caracas",
    hours: "Lunes a Domingo: 12:00 PM - 11:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/aprile_ccs/",
    bookingType: "reserva-gourmet",
    bookingTitle: "Reserva de Mesas & Salones Privados",
    bookingSubtitle: "Atención ejecutiva con confirmación confidencial",
    bookingOptions: [
      {
        id: "mesa-salongourmet",
        name: "Mesa Salón Principal Aprile",
        description: "Mesa con mantel largo en salón histórico con servicio clásico de sala.",
        priceUSD: 0,
        unit: "por reserva",
        badge: "Clásica",
        features: ["Servicio de maitre", "Sommelier en mesa", "Pase de confirmación"]
      },
      {
        id: "salon-privado-ejecutivo",
        name: "Salón Privado de Negocios (Hasta 12 pax)",
        description: "Espacio totalmente privado y climatizado para reuniones de directorio o celebraciones íntimas.",
        priceUSD: 50,
        unit: "depósito reserva",
        badge: "Exclusivo",
        features: ["Privacidad total acústica", "Menú degustación asistido", "Atención dedicada"]
      }
    ],
    categories: [
      { id: "pastas", name: "Pastas Clásicas Aprile", icon: "🍝" },
      { id: "carni", name: "Cortes & Ternera", icon: "🥩" },
      { id: "pesce", name: "Pescados Frescos del Día", icon: "🐟" },
      { id: "vini", name: "Cava de Grandes Vinos", icon: "🍷" }
    ],
    menuItems: [
      {
        id: "linguine-aragosta-aprile",
        name: "Linguine all'Aragosta Fresca",
        category: "pesce",
        description: "Linguine al dente en reducción de bisque de langosta caribeña fresca, tomates cherry salteados y perejil italiano.",
        priceUSD: 26,
        badge: "Plato Insignia",
        popular: true,
        tags: ["Langosta", "Mariscos"]
      },
      {
        id: "scaloppine-tartufo-aprile",
        name: "Scaloppine di Vitello al Tartufo Nero",
        category: "carni",
        description: "Finas escalopas de ternera de leche salteadas al vino blanco con salsa de trufas negras y puré de papas trufado.",
        priceUSD: 23,
        popular: true,
        tags: ["Ternera", "Trufa"]
      },
      {
        id: "risotto-frutti-mare-aprile",
        name: "Risotto ai Frutti di Mare Tradizionale",
        category: "pastas",
        description: "Arroz carnaroli cremoso con calamares baby, langostinos, almejas y mejillones con toque de vino bianco.",
        priceUSD: 20,
        tags: ["Risotto"]
      },
      {
        id: "carpaccio-solomo-aprile",
        name: "Carpaccio di Manzo alla Cipriani",
        category: "pastas",
        description: "Láminas de lomo de res con la salsa original Cipriani, hojas de rúgula fresca y lajas de parmesano reggiano.",
        priceUSD: 13.5,
        tags: ["Entrada Fría"]
      },
      {
        id: "robalo-crosta-sale",
        name: "Róbalo Fresco en Costra de Sal Marina",
        category: "pesce",
        description: "Filete entero de róbalo fresco del mar horneado en costra de sal marina, abierto y desespinado en mesa por el maitre.",
        priceUSD: 22,
        badge: "Clásico de Sala",
        tags: ["Pescado"]
      },
      {
        id: "barolo-serralunga-vinos",
        name: "Barolo DOCG Fontanafredda (750ml)",
        category: "vini",
        description: "Vino tinto italiano estructurado de la región del Piamonte con notas de ciruela, violetas y especias.",
        priceUSD: 85,
        tags: ["Vino Tinto"]
      }
    ],
    managerKpis: {
      activeReservations: 12,
      capacityPercentage: 78,
      todaySalesUSD: 2850,
      avgTicketUSD: 58
    },
    sampleBookings: [
      { id: "APR-701", clientName: "Dr. Gustavo Mendoza", details: "Salón Privado (8 pax) · Directorio Médico", time: "01:00 PM", status: "confirmada", pax: 8, totalUSD: 360 },
      { id: "APR-702", clientName: "Sra. María Teresa Herrera", details: "Mesa Salón Principal (4 pax) · Almuerzo", time: "01:30 PM", status: "en_mesa", pax: 4, totalUSD: 180 },
      { id: "APR-703", clientName: "Embajador Jean-Luc Moreau", details: "Salón Privado (6 pax) · Cena Protocolar", time: "08:30 PM", status: "pendiente", pax: 6, totalUSD: 290 }
    ]
  },

  // 8. RUTA C4
  {
    slug: "rutac4_",
    batch: "dia8",
    archetype: "direct-delivery",
    name: "Ruta C4 Street Food & Burgers",
    handle: "rutac4_",
    category: "Street Food Gourmet · Smash Burgers · Combos & Delivery",
    badgeText: "🍔 #RutaC4 · Hamburguesas Explosivas, Alitas & Delivery Express",
    tagline: "Comida callejera de alto impacto con porciones brutales y delivery directo",
    heroTitle: "Smash burgers explosivas, combos brutales y",
    heroHighlight: "delivery directo 0% comisión",
    heroSubtitle: "Pide tus hamburguesas favoritas, alitas y papas cargadas directo desde nuestro menú digital sin pagar recargos de intermediarios.",
    logo: "/marcas/rutac4_.jpg",
    coverImage: "/marcas/rutac4_-cover.jpg",
    palette: {
      primary: "#881337",
      primaryHover: "#4C0519",
      secondary: "#E11D48",
      accent: "#FB7185",
      darkBg: "#14050A",
      cardBg: "rgba(35, 10, 20, 0.85)",
      textLight: "#FFF1F2",
      textMuted: "#FECDD3",
      border: "rgba(251, 113, 133, 0.25)",
      glow: "rgba(136, 19, 55, 0.25)"
    },
    typography: {
      fontDisplay: "font-sans",
      fontBody: "font-sans"
    },
    introText: "Ruta C4 es la explosión del sabor urbano callejero llevado a su máxima potencia. Carnes smash aplastadas al punto con costra crujiente, quesos derretidos que desbordan el pan brioche y empaques térmicos diseñados para que el delivery llegue intacto.",
    introStats: [
      { label: "Sabor Explosivo", value: "C4 Smash", detail: "Doble carne con costra caramelizada" },
      { label: "Ahorro Delivery", value: "0% Comisión", detail: "Canal propio directo a tu WhatsApp" },
      { label: "Despacho", value: "25 min", detail: "Empaque térmico con sellos de seguridad" }
    ],
    trustBadges: ["100% Carne de Res Seleccionada", "Empaque Térmico Sellado", "Tasa BCV Oficial en Tiempo Real"],
    whatsappPitchCopy: "Hola equipo de Ruta C4! 🍔 ¿Cuánto dinero se les va al mes en comisiones de apps de delivery o cuántos clientes se van porque tardan en responder el WhatsApp en pleno viernes o sábado por la noche?\\n\\nLes preparé un catálogo directo con sus hamburguesas y combos para que el cliente pida en 30 segundos, calcule a tasa oficial en bolívares y la orden les llegue lista para despachar sin intermediarios:\\n👉 https://byte-bridge-tau.vercel.app/demos/rutac4_\\n\\n¿Les muestro en 5 minutos cómo funciona?",
    address: "Zona Urbana Gastronómica, Venezuela",
    mapsUrl: "https://maps.google.com/?q=Ruta+C4+Street+Food",
    hours: "Martes a Domingo: 5:00 PM - 12:00 AM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/rutac4_/",
    bookingType: "delivery-pickup",
    bookingTitle: "Pide tu Combo a Domicilio o Pick-Up",
    bookingSubtitle: "Comanda tus burgers en 3 clics con cálculo oficial al instante",
    bookingOptions: [
      {
        id: "delivery-c4",
        name: "Delivery Directo a Domicilio",
        description: "Envío express sellado con motorizado propio sin comisiones abusivas.",
        priceUSD: 2,
        unit: "tarifa de envío",
        badge: "A Domicilio",
        features: ["Empaque térmico sellado", "Seguimiento en WhatsApp", "Pago móvil o divisas"]
      },
      {
        id: "pickup-c4",
        name: "Retiro en Local Pick-Up",
        description: "Pide online y retira en mostrador en 15 minutos sin hacer cola.",
        priceUSD: 0,
        unit: "sin costo",
        badge: "Cero Esperas",
        features: ["Listo en 15 minutos", "Entrega prioritaria", "Ahorro total"]
      }
    ],
    categories: [
      { id: "smash", name: "Smash Burgers C4", icon: "🍔" },
      { id: "combos", name: "Combos Explosivos", icon: "🔥" },
      { id: "papas", name: "Papas Cargadas & Alitas", icon: "🍟" },
      { id: "bebidas", name: "Bebidas & Refrescos", icon: "🥤" }
    ],
    menuItems: [
      {
        id: "burger-c4-bomba",
        name: "Burger C4 Bomba Explosiva",
        category: "smash",
        description: "Triple carne smash crocante, triple queso americano, tocineta ahumada en tiras, aros de cebolla crocantes y salsa barbacoa C4.",
        priceUSD: 10,
        badge: "Insignia Brutal",
        popular: true,
        tags: ["Triple Smash", "Top Ventas"]
      },
      {
        id: "combo-dupleta-c4",
        name: "Combo Dupleta C4 para Dos",
        category: "combos",
        description: "2 Burgers clásicas de doble carne con queso, ración grande de papas fritas con queso cheddar y 2 refrescos fríos.",
        priceUSD: 16.5,
        badge: "Para Dos",
        popular: true,
        tags: ["Combo", "Económico"]
      },
      {
        id: "c4-loaded-fries",
        name: "Papas Fritas Dinamita C4",
        category: "papas",
        description: "Papas fritas crujientes bañadas en queso cheddar fundido, carne picada al grill, tocineta y jalapeños encurtidos.",
        priceUSD: 6,
        popular: true,
        tags: ["Para Compartir"]
      },
      {
        id: "alitas-buffalo-c4",
        name: "Alitas Spicy Buffalo x10",
        category: "papas",
        description: "Alitas crujientes con salsa búfalo picante casera y aderezo de queso azul.",
        priceUSD: 8.5,
        tags: ["Alitas"]
      },
      {
        id: "chicken-crispy-c4",
        name: "Chicken C4 Bacon Ranch",
        category: "smash",
        description: "Milanesa de pollo súper crujiente con queso derretido, tocineta y salsa ranch en pan brioche.",
        priceUSD: 8.5,
        tags: ["Pollo"]
      },
      {
        id: "combo-familiar-4burgers",
        name: "Mega Combo Cuarteto C4",
        category: "combos",
        description: "4 Hamburguesas dobles smash + 2 raciones grandes de papas + 4 bebidas.",
        priceUSD: 28,
        tags: ["Familiar"]
      }
    ],
    managerKpis: {
      activeReservations: 15,
      capacityPercentage: 85,
      todaySalesUSD: 1140,
      avgTicketUSD: 19
    },
    sampleBookings: [
      { id: "RC4-801", clientName: "Jhonathan Rivas", details: "Combo Dupleta C4 + Loaded Fries · Delivery", time: "07:30 PM", status: "confirmada", pax: 2, totalUSD: 24.5 },
      { id: "RC4-802", clientName: "Kelly Zambrano", details: "2x Burger C4 Bomba · Pick-Up Express", time: "08:15 PM", status: "en_mesa", pax: 2, totalUSD: 20 },
      { id: "RC4-803", clientName: "Marcos Díaz", details: "Mega Combo Cuarteto · Delivery", time: "09:00 PM", status: "pendiente", pax: 4, totalUSD: 30 }
    ]
  },

  // 9. TEPUY 360
  {
    slug: "tepuy_360",
    batch: "dia8",
    archetype: "gourmet-booking",
    name: "Tepuy 360 Restaurant Mirador",
    handle: "tepuy.360",
    category: "Restaurante Mirador 360° · Cortes a la Brasa · Atardeceres & Montaña",
    badgeText: "🌄 #Tepuy360 · Vista Panorámica 360 Grados, Fogata & Cortes Prime",
    tagline: "Una experiencia gastronómica sobre las nubes con vista panorámica 360 y parrilla de autor",
    heroTitle: "Gastronomía sobre las nubes, fogata y",
    heroHighlight: "reserva de mesa con vista 360 garantizada",
    heroSubtitle: "Asegura tu mesa en terraza mirador con vista 360°, preselecciona tus cortes a la brasa y recibe tu pase digital con código QR para ingreso directo.",
    logo: "/marcas/tepuy_360.jpg",
    coverImage: "/marcas/tepuy_360-cover.jpg",
    palette: {
      primary: "#9A3412",
      primaryHover: "#7C2D12",
      secondary: "#0284C7",
      accent: "#EA580C",
      darkBg: "#140905",
      cardBg: "rgba(35, 18, 10, 0.85)",
      textLight: "#FFF7ED",
      textMuted: "#FED7AA",
      border: "rgba(234, 88, 12, 0.25)",
      glow: "rgba(154, 52, 18, 0.25)"
    },
    typography: {
      fontDisplay: "font-serif",
      fontBody: "font-sans"
    },
    introText: "Tepuy 360 es una experiencia gastronómica que domina el horizonte desde las alturas. Con una perspectiva de 360 grados sobre el valle y las montañas, ofrece cortes de carne a las brasas, fogatas nocturnas al aire libre y una propuesta de coctelería para contemplar los atardeceres.",
    introStats: [
      { label: "Perspectiva", value: "360 Grados", detail: "Vista panorámica total sobre el valle" },
      { label: "Ambiente", value: "Fogata & Brasa", detail: "Clima fresco de montaña con fogatas" },
      { label: "Control de Acceso", value: "Pase QR", detail: "Reserva garantizada sin esperas en subida" }
    ],
    trustBadges: ["Mesa Panorámica Garantizada", "Cortes Prime a la Brasa", "Estacionamiento Privado con Vigilancia"],
    whatsappPitchCopy: "Hola equipo de Tepuy 360! 🌄 ¿Cuántos clientes que suben al mirador se quedan sin mesa o se van frustrados porque el chat de reservas colapsa y no confirman a tiempo los turnos de atardecer?\\n\\nLes preparé una solución donde sus visitantes eligen su mesa con vista 360 garantizada, reciben su pase con código QR para entrar directo y ustedes controlan el aforo sin perder tiempo en mensajes sueltos:\\n👉 https://byte-bridge-tau.vercel.app/demos/tepuy_360\\n\\n¿Les muestro en 5 minutos cómo funciona?",
    address: "Alturas de Hoyo de la Puerta / Galipán / El Hatillo, Caracas",
    mapsUrl: "https://maps.google.com/?q=Tepuy+360+Caracas",
    hours: "Jueves a Domingo: 12:00 PM - 11:00 PM",
    phone: "+58 412-0308674",
    instagramUrl: "https://www.instagram.com/tepuy.360/",
    bookingType: "reserva-gourmet",
    bookingTitle: "Reserva de Mesas Mirador & Fogata",
    bookingSubtitle: "Asegura tu ubicación en terraza panorámica con pase digital",
    bookingOptions: [
      {
        id: "mesa-mirador-360",
        name: "Mesa Mirador 360° (Sunset)",
        description: "Mesa en baranda con vista despejada de 360 grados durante el atardecer y anochecer.",
        priceUSD: 20,
        unit: "depósito consumible",
        badge: "Más Solicitada",
        features: ["Vista 360° panorámica", "Pase QR directo", "Copa de bienvenida"]
      },
      {
        id: "mesa-fogata-nocturna",
        name: "Zona Fogata Nocturna VIP (6 pax)",
        description: "Lounge al aire libre alrededor de la fogata con mantas térmicas y servicio de parrillada.",
        priceUSD: 40,
        unit: "depósito consumible",
        badge: "Experiencia Montaña",
        features: ["Fogata encendida privada", "Malvaviscos para asar", "Atención prioritaria"]
      }
    ],
    categories: [
      { id: "carnes", name: "Parrilla de Altura", icon: "🥩" },
      { id: "tablas", name: "Tablas & Entradas", icon: "🧀" },
      { id: "fogata", name: "Experiencia Fogata", icon: "🔥" },
      { id: "cocteles", name: "Coctelería Mirador", icon: "🍸" }
    ],
    menuItems: [
      {
        id: "parrillada-tepuy-prime",
        name: "Gran Parrillada Tepuy 360 (Para Dos)",
        category: "carnes",
        description: "Solomo prime a la brasa, chorizo criollo ahumado, pollo marinado, yuca frita crocante, nata llanera y ensalada fresca.",
        priceUSD: 28,
        badge: "Insignia",
        popular: true,
        tags: ["Parrilla", "Para Compartir"]
      },
      {
        id: "tomahawk-tepuy-brasa",
        name: "Tomahawk al Carbón de Leña (1 kg)",
        category: "carnes",
        description: "Imponente corte de res sellado a las brasas con sal gruesa y chimichurri casero, servido sobre tabla de madera.",
        priceUSD: 38,
        popular: true,
        tags: ["Cortes Prime"]
      },
      {
        id: "fondue-quesos-tepuy",
        name: "Fondue de Quesos Andinos en Cazuela",
        category: "tablas",
        description: "Queso ahumado fundido con vino blanco servido en cazuela de hierro caliente con trocitos de pan campesino y salchichas.",
        priceUSD: 14,
        badge: "Clima Frío",
        popular: true,
        tags: ["Queso", "Caliente"]
      },
      {
        id: "kit-malvaviscos-fogata",
        name: "Kit de Malvaviscos para la Fogata",
        category: "fogata",
        description: "Pinchos de madera con malvaviscos gigantes, galletas de miel y chocolate derretido para dorar al fuego vivo.",
        priceUSD: 8,
        tags: ["Fogata", "Experiencia"]
      },
      {
        id: "coctel-niebla-tepuy",
        name: "Cóctel Niebla del Tepuy",
        category: "cocteles",
        description: "Ron reserva venezolano con zumo de piña asada al carbón, licor de naranja y humo de romero fresco.",
        priceUSD: 8.5,
        popular: true,
        tags: ["Signature"]
      },
      {
        id: "tequenos-tepuy-guayaba",
        name: "Tequeños Rellenos de Queso & Guayaba",
        category: "tablas",
        description: "8 Tequeños dorados con mezcla dulce y salada de queso llanero y dulce de guayaba artesanal.",
        priceUSD: 7,
        tags: ["Entrada"]
      }
    ],
    managerKpis: {
      activeReservations: 15,
      capacityPercentage: 91,
      todaySalesUSD: 1980,
      avgTicketUSD: 42
    },
    sampleBookings: [
      { id: "TEP-901", clientName: "Gonzalo Henriquez", details: "Mesa Mirador 360° (4 pax) · Sunset", time: "05:00 PM", status: "confirmada", pax: 4, totalUSD: 110 },
      { id: "TEP-902", clientName: "Mariana Capriles", details: "Zona Fogata Nocturna VIP (6 pax) · Cumpleaños", time: "08:00 PM", status: "en_mesa", pax: 6, totalUSD: 180 },
      { id: "TEP-903", clientName: "Carlos Aristeguieta", details: "Mesa Mirador 360° (2 pax) · Aniversario", time: "06:30 PM", status: "pendiente", pax: 2, totalUSD: 70 }
    ]
  }
];

// Append to demosData.ts
let content = fs.readFileSync(demosPath, "utf-8");

const lastBracketIndex = content.lastIndexOf("];");
if (lastBracketIndex === -1) {
  console.error("❌ No se encontró el cierre ]; de businessDemos en demosData.ts");
  process.exit(1);
}

const beforeClosing = content.slice(0, lastBracketIndex).trimEnd();
const afterClosing = content.slice(lastBracketIndex);

const formattedNewEntries = batch8Demos.map(d => JSON.stringify(d, null, 2)).join(",\n\n  ");

const newContent = `${beforeClosing},\n\n  // 🌟 DÍA 8 — 9 Soluciones Comerciales (Caracas, Barquisimeto & Venezuela)\n  ${formattedNewEntries}\n${afterClosing}`;

fs.writeFileSync(demosPath, newContent, "utf-8");
console.log(`✅ ${batch8Demos.length} nuevas demos de Día 8 añadidas con éxito a demosData.ts`);
