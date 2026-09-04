import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const demosPath = path.join(__dirname, "..", "data", "demosData.ts");

let content = fs.readFileSync(demosPath, "utf8");

// 1. Actualizar el tipo BusinessDemo para soportar 'dia9'
content = content.replace(
  'batch?: "dia1" | "dia2" | "dia3" | "dia4" | "dia5" | "dia6" | "dia7" | "dia8";',
  'batch?: "dia1" | "dia2" | "dia3" | "dia4" | "dia5" | "dia6" | "dia7" | "dia8" | "dia9";'
);

const batch9Demos = [
  // 1. IL DUOMO DEI SAPORI
  {
    slug: "ilduomodeisapori",
    batch: "dia9",
    archetype: "gourmet-booking",
    name: "Il Duomo Dei Sapori",
    handle: "ilduomodeisapori",
    category: "Alta Cocina Italiana & Cava",
    badgeText: "Cucina a Vista · Chef Tony Maldonado · El Hatillo",
    tagline: "Alta cocina italiana de autor con cocina abierta, pastas frescas artesanales hechas al día y maridaje exclusivo en El Hatillo.",
    heroTitle: "Cucina Italiana di Autore",
    heroHighlight: "Experiencia Gourmet",
    heroSubtitle: "Degusta pastas estiradas a mano, maridajes de etiquetas italianas y recetas del chef en un ambiente íntimo con cocina a la vista.",
    logo: "/marcas/ilduomodeisapori.jpg",
    coverImage: "/marcas/ilduomodeisapori-cover.jpg",
    palette: {
      primary: "#C49A45",
      primaryHover: "#AA8232",
      secondary: "#8B1E24",
      accent: "#E5B95C",
      darkBg: "#120F0D",
      cardBg: "#1C1714",
      textLight: "#FBF7F0",
      textMuted: "#B8A898",
      border: "rgba(196, 154, 69, 0.25)",
      glow: "rgba(196, 154, 69, 0.4)"
    },
    typography: { fontDisplay: "font-serif", fontBody: "font-sans" },
    introText: "Il Duomo Dei Sapori es el rincón de alta cocina italiana del Chef Tony Maldonado en El Hatillo: cocina abierta donde cada plato se ejecuta al momento con ingredientes importados, trufa fresca y pastas elaboradas a diario.",
    introStats: [
      { label: "Ocupación de Turnos", value: "95%", detail: "En cenas de viernes y domingos" },
      { label: "Ticket Promedio", value: "$55 USD", detail: "Por comensal con maridaje" },
      { label: "Cocina Abierta", value: "100% Viva", detail: "Chef Tony Maldonado en sala" }
    ],
    trustBadges: ["Cocina Abierta de Autor", "Pastas Frescas Hechas al Día", "Maridaje con Vinos Italianos"],
    whatsappPitchCopy: "Buenas tardes, Chef Tony y equipo de Il Duomo Dei Sapori 👋 Les saluda Paul David de ByteBridge.\n\nSabemos que en El Hatillo los fines de semana el salón y la cocina abierta andan a tope, y cuando entran 10 personas a la vez al WhatsApp pidiendo mesa, responder rápido se vuelve imposible sin descuidar el servicio.\n\nPor eso les diseñé una prueba interactiva con su estética, sus pastas estrella y un sistema de reserva directa que confirma comensales, turno y maridaje en 1 solo clic:\n👉 https://byte-bridge-tau.vercel.app/demos/ilduomodeisapori\n\n¿Les parece bien si le echan un vistazo de 2 minutos?",
    address: "Calle Sucre c/ Calle J, Casco Colonial de El Hatillo, Caracas",
    mapsUrl: "https://maps.google.com/?q=Il+Duomo+Dei+Sapori+El+Hatillo+Caracas",
    hours: "Miércoles a Domingo: 12:30 PM – 10:30 PM",
    phone: "+58 412-2118928",
    instagramUrl: "https://www.instagram.com/ilduomodeisapori",
    bcvRate: 70.5,
    bookingType: "table-reservation",
    bookingTitle: "Reserva tu Mesa & Experiencia de Cocina Abierta",
    bookingSubtitle: "Asegura tu turno exclusivo de almuerzo o cena con selección de maridaje guiado",
    bookingOptions: [
      { id: "duomo-pareja", name: "Mesa Íntima Parejas (Cucina a Vista)", description: "Ubicación preferencial frente a la cocina abierta con copa de Prosecco de bienvenida.", priceUSD: 110, maxCapacity: 2 },
      { id: "duomo-degustacion", name: "Experiencia Degustación Chef Maldonado (4 Tiempos)", description: "Entrada trufada, 2 pastas artesanales, plato fuerte y postre con maridaje recomendado.", priceUSD: 65, maxCapacity: 6 },
      { id: "duomo-salon", name: "Mesa Familiar / Ejecutiva (4-6 pax)", description: "Reserva de mesa central para almuerzo dominical o cena corporativa con selección de cava.", priceUSD: 240, maxCapacity: 6 }
    ],
    categories: [
      { id: "antipasti", name: "Antipasti & Crudi", description: "Entradas tradicionales con producto de origen" },
      { id: "paste", name: "Paste Artigianali", description: "Pastas frescas elaboradas a mano cada mañana" },
      { id: "secondi", name: "Secondi Piatti", description: "Cortes nobles y pesca del día" }
    ],
    menuItems: [
      { id: "duo-vitello", name: "Vitello Tonnato Tradizionale", description: "Finas láminas de ternera con crema emulsionada de atún, alcaparras de Pantelleria y microgreens.", priceUSD: 18, category: "antipasti", popular: true },
      { id: "duo-gnocchi", name: "Gnocchi al Tartufo e Funghi Porcini", description: "Ñoquis de papa hechos a mano, salsa de trufa negra, setas silvestres y Parmigiano 24 meses.", priceUSD: 22, category: "paste", popular: true },
      { id: "duo-tortelli", name: "Tortelli di Zucca & Mantequilla de Salvia", description: "Pasta fresca rellena tradicional lombarda con toque crocante de amaretto.", priceUSD: 20, category: "paste" },
      { id: "duo-carbonara", name: "Spaghetti alla Carbonara Auténtica", description: "Guanciale curado, yemas de huevo frescas, pecorino romano DOP y pimienta tostada.", priceUSD: 21, category: "paste", popular: true },
      { id: "duo-filetto", name: "Filetto di Manzo al Barolo", description: "Medallón de lomito en salsa cremosa de pimienta verde con reducción de vino Barolo.", priceUSD: 32, category: "secondi" },
      { id: "duo-tiramisu", name: "Tiramisú Tradizionale della Nonna", description: "Savoiardi al café espresso Illy, crema de mascarpone auténtico y cacao amargo.", priceUSD: 12, category: "antipasti" }
    ],
    managerKpis: { activeReservations: 9, capacityPercentage: 92, todaySalesUSD: 2150, avgTicketUSD: 55 },
    sampleBookings: [
      { id: "DUO-101", clientName: "Alejandro Vollmer", details: "Mesa Frente a Cocina (2 pax) · Aniversario", time: "08:30 PM", status: "confirmada", pax: 2, totalUSD: 130 },
      { id: "DUO-102", clientName: "Valentina Mendoza", details: "Menú Degustación Chef (4 pax)", time: "02:00 PM", status: "en_mesa", pax: 4, totalUSD: 260 },
      { id: "DUO-103", clientName: "Carlos Zuloaga", details: "Mesa Terraza Privada (6 pax)", time: "09:00 PM", status: "pendiente", pax: 6, totalUSD: 330 }
    ]
  },

  // 2. URRUTIA RESTAURANTE VASCO
  {
    slug: "urrutia_rest",
    batch: "dia9",
    archetype: "table-ordering",
    name: "Urrutia Restaurante Vasco",
    handle: "urrutia_rest",
    category: "Cocina Vasca & Marisquería",
    badgeText: "Patrimonio Gastronómico de Caracas desde 1962 (+62 Años)",
    tagline: "El gran templo de la cocina vasca y española en Sabana Grande: bacalao a la vizcaína, mariscos frescos y almuerzos ejecutivos de tradición.",
    heroTitle: "Tradición Vasca",
    heroHighlight: "Desde 1962",
    heroSubtitle: "Pescados frescos del día, calamares en su tinta, pimientos rellenos y la más clásica atención de mantel en Sabana Grande.",
    logo: "/marcas/urrutia_rest.jpg",
    coverImage: "/marcas/urrutia_rest-cover.jpg",
    palette: {
      primary: "#9E2A2B",
      primaryHover: "#7F1D1D",
      secondary: "#2E5266",
      accent: "#E09F3E",
      darkBg: "#111417",
      cardBg: "#1A1F24",
      textLight: "#F5F5F5",
      textMuted: "#A3ACB9",
      border: "rgba(158, 42, 43, 0.3)",
      glow: "rgba(224, 159, 62, 0.3)"
    },
    typography: { fontDisplay: "font-serif", fontBody: "font-sans" },
    introText: "Fundado en 1962, Urrutia es una institución viva de la gastronomía en Caracas. Reconocido por generaciones de comensales, diplomáticos y empresarios por su maestría inalterable en arroces, bacalaos y mariscos.",
    introStats: [
      { label: "Trayectoria", value: "+62 Años", detail: "Sirviendo en Caracas desde 1962" },
      { label: "Ticket Promedio", value: "$42 USD", detail: "Almuerzos ejecutivos y familiares" },
      { label: "Especialidad", value: "Pescados & Mariscos", detail: "Entradas diarias de costa" }
    ],
    trustBadges: ["Patrimonio Gastronómico Caraqueño", "Pescados y Mariscos Frescos", "Servicio Tradicional de Mantel"],
    whatsappPitchCopy: "Estimado equipo del Restaurante Urrutia 👋 Les saluda Paul David de ByteBridge.\n\nEs un orgullo ver cómo mantienen viva la auténtica cocina vasca en Sabana Grande desde hace más de 60 años. En horas pico de almuerzo, atender llamadas y pasar el menú de mariscos por chat a clientes que piden para llevar o quieren reservar mesa satura al personal.\n\nDiseñamos una prueba interactiva con el sello de Urrutia (bacalao a la vizcaína, pimientos, mero) y un catálogo digital que envía el pedido o reserva estructurado a WhatsApp en 1 clic:\n👉 https://byte-bridge-tau.vercel.app/demos/urrutia_rest\n\n¿Tienen 2 minutos para ver cómo funciona?",
    address: "Av. Francisco Solano López c/ Calle Los Manguitos, Sabana Grande, Caracas",
    mapsUrl: "https://maps.google.com/?q=Restaurante+Urrutia+Sabana+Grande+Caracas",
    hours: "Lunes a Domingo: 12:00 PM – 10:00 PM",
    phone: "+58 414-1330300",
    instagramUrl: "https://www.instagram.com/urrutia_rest",
    bcvRate: 70.5,
    bookingType: "table-ordering-and-reservations",
    bookingTitle: "Reserva tu Mesa o Pide Comanda Directa",
    bookingSubtitle: "Coordina tu almuerzo corporativo o pide platos insignia para llevar a tasa oficial",
    bookingOptions: [
      { id: "urr-almuerzo-ejecutivo", name: "Almuerzo Ejecutivo de Negocios (4 pax)", description: "Mesa en salón principal con pimientos de piquillo, arroz con mariscos y jarra de sangría.", priceUSD: 160, maxCapacity: 4 },
      { id: "urr-familiar-domingo", name: "Reserva Familiar Tradicional (6-8 pax)", description: "Mesa amplia para domingos familiares con selección de bacalaos y pescados a la vasca.", priceUSD: 280, maxCapacity: 8 },
      { id: "urr-mesa-pareja", name: "Mesa Clásica Pareja (2 pax)", description: "Almuerzo o cena íntima con plato de marisco fresco y crema catalana.", priceUSD: 85, maxCapacity: 2 }
    ],
    categories: [
      { id: "entradas", name: "Entradas & Tapas Vascas", description: "Pimientos de piquillo, pulpos y calamares" },
      { id: "pescados", name: "Pescados & Bacalao", description: "Nuestra gran especialidad de mar" },
      { id: "arroces", name: "Arroces & Mariscos", description: "Guisos lentos y caldos marineros" }
    ],
    menuItems: [
      { id: "urr-piquillo", name: "Pimientos del Piquillo Rellenos", description: "Rellenos de bacalao o mero en reducción de salsa vizcaína tradicional.", priceUSD: 15, category: "entradas", popular: true },
      { id: "urr-pulpo", name: "Pulpo a la Gallega Tradicional", description: "Láminas tiernas sobre patatas al vapor, pimentón de la Vera y aceite virgen extra.", priceUSD: 22, category: "entradas", popular: true },
      { id: "urr-calamares", name: "Calamares en su Tinta con Arroz", description: "Guisados a fuego lento en su tinta natural con arroz blanco aromatizado.", priceUSD: 24, category: "pescados", popular: true },
      { id: "urr-bacalao", name: "Bacalao a la Vizcaína Clásico", description: "Lomo de bacalao desalado con confitura de pimiento choricero y cebolla caramelizada.", priceUSD: 28, category: "pescados", popular: true },
      { id: "urr-mero", name: "Mero en Salsa Verde con Almejas", description: "Lomo fresco ligado con caldo de marisco, almejas vivas y espárragos verdes.", priceUSD: 32, category: "pescados" },
      { id: "urr-crema", name: "Crema Catalana Quemada al Momento", description: "Postre tradicional con fina costra de caramelo crujiente.", priceUSD: 10, category: "entradas" }
    ],
    managerKpis: { activeReservations: 12, capacityPercentage: 88, todaySalesUSD: 2890, avgTicketUSD: 42 },
    sampleBookings: [
      { id: "URR-201", clientName: "Dr. Fernando Arreaza", details: "Almuerzo Corporativo (4 pax) · Bacalao", time: "01:30 PM", status: "confirmada", pax: 4, totalUSD: 175 },
      { id: "URR-202", clientName: "Familia Echeverría", details: "Mesa Central Domingo (6 pax)", time: "02:00 PM", status: "en_mesa", pax: 6, totalUSD: 290 },
      { id: "URR-203", clientName: "Ignacio Goicoechea", details: "Reserva de Cena (2 pax)", time: "08:00 PM", status: "pendiente", pax: 2, totalUSD: 95 }
    ]
  },

  // 3. SAN PIETRO RESTAURANTE
  {
    slug: "restaurantsanpietro",
    batch: "dia9",
    archetype: "gourmet-booking",
    name: "San Pietro Restaurante",
    handle: "restaurantsanpietro",
    category: "Ristorante Italiano & Terraza",
    badgeText: "Alta Cocina Mediterránea en Las Mercedes (+16 Años)",
    tagline: "El auténtico sabor del sur de Italia y Sicilia en Las Mercedes: carpaccios, pastas caseras, pesca fresca a la brasa y cava de vinos.",
    heroTitle: "Sapore di Sicilia",
    heroHighlight: "En Las Mercedes",
    heroSubtitle: "A 50 metros de la Plaza Alfredo Sadel. Disfruta de fettuccine alle vongole, risottos de mariscos y carnes selectas con servicio de terraza.",
    logo: "/marcas/restaurantsanpietro.jpg",
    coverImage: "/marcas/restaurantsanpietro-cover.jpg",
    palette: {
      primary: "#1A365D",
      primaryHover: "#102A4C",
      secondary: "#B8860B",
      accent: "#2B6CB0",
      darkBg: "#0C131D",
      cardBg: "#141D2B",
      textLight: "#FFFFFF",
      textMuted: "#94A3B8",
      border: "rgba(184, 134, 11, 0.3)",
      glow: "rgba(43, 108, 176, 0.4)"
    },
    typography: { fontDisplay: "font-serif", fontBody: "font-sans" },
    introText: "Con más de 16 años de trayectoria ininterrumpida en Las Mercedes, San Pietro representa la elegancia clásica de la cocina mediterránea e italiana del sur, con una de las cavas de vinos más respetadas de Caracas.",
    introStats: [
      { label: "Experiencia", value: "+16 Años", detail: "Líder en Las Mercedes desde 2008" },
      { label: "Ticket Promedio", value: "$48 USD", detail: "Por comensal con vino y postre" },
      { label: "Ubicación", value: "Plaza Sadel", detail: "Calle Londres con Valet Parking" }
    ],
    trustBadges: ["Cocina del Sur de Italia & Sicilia", "Terraza Exclusiva Las Mercedes", "Cava de Vinos & Valet Parking"],
    whatsappPitchCopy: "Buenas tardes, equipo de San Pietro Restaurante 👋 Les saluda Paul David de ByteBridge.\n\nSabemos que en Las Mercedes el servicio de cena es muy exigente y cuando el salón está lleno, nadie tiene tiempo de contestar de inmediato las reservas que entran por WhatsApp. En esa zona, un comensal que espera 15 minutos suele irse a otro sitio a pie de calle.\n\nLes construí una prueba interactiva adaptada a San Pietro con su menú de pescados y pastas, selección de turnos de reserva y cálculo a tasa oficial BCV listo para despachar en 1 clic:\n👉 https://byte-bridge-tau.vercel.app/demos/restaurantsanpietro\n\n¿Les parece bien si le dan un vistazo rápido?",
    address: "Final Calle Londres c/ Calle Trinidad (a 50m Plaza Alfredo Sadel), Las Mercedes, Caracas",
    mapsUrl: "https://maps.google.com/?q=Restaurant+San+Pietro+Las+Mercedes+Caracas",
    hours: "Lunes a Domingo: 12:00 PM – 11:30 PM",
    phone: "+58 412-4513645",
    instagramUrl: "https://www.instagram.com/restaurantsanpietro",
    bcvRate: 70.5,
    bookingType: "gourmet-table-reservation",
    bookingTitle: "Reserva tu Mesa en Terraza o Salón Clásico",
    bookingSubtitle: "Disfruta de la mejor cocina italiana con maridaje a pasos de la Plaza Sadel",
    bookingOptions: [
      { id: "sp-terraza-vip", name: "Mesa Terraza Exterior VIP (2-4 pax)", description: "Ubicación al aire libre con ambiente nocturno y servicio prioritario de sommelier.", priceUSD: 100, maxCapacity: 4 },
      { id: "sp-degustacion-mar", name: "Menú Marinero San Pietro (Carpaccio + Risotto)", description: "Carpaccio de pez espada, risotto frutti di mare y copa de vino blanco italiano.", priceUSD: 52, maxCapacity: 6 },
      { id: "sp-salon-corporativo", name: "Mesa Corporativa / Familiar (6-8 pax)", description: "Mesa reservada en salón interior climatizado con valet parking garantizado.", priceUSD: 320, maxCapacity: 8 }
    ],
    categories: [
      { id: "antipasti", name: "Antipasti & Carpaccios", description: "Cortes finos marinados al estilo mediterráneo" },
      { id: "primi", name: "Primi Piatti & Risottos", description: "Pastas frescas caseras y arroces del mar" },
      { id: "carni", name: "Carni & Pesce alla Griglia", description: "Carnes nobles y pescados del día" }
    ],
    menuItems: [
      { id: "sp-carpaccio", name: "Carpaccio de Pez Espada", description: "Láminas finas marinadas al limón, alcaparras baby, pimienta rosa y aceite virgen extra.", priceUSD: 18, category: "antipasti", popular: true },
      { id: "sp-vongole", name: "Fettuccine alle Vongole Veraci", description: "Pasta fresca al dente salteada con almejas vivas, vino blanco, ajo confitado y perejil.", priceUSD: 24, category: "primi", popular: true },
      { id: "sp-risotto", name: "Risotto Frutti di Mare al Pomodoro", description: "Arroz carnaroli con calamares, camarones, mejillones y albahaca fresca.", priceUSD: 26, category: "primi", popular: true },
      { id: "sp-lasagna", name: "Lasaña Clásica Ragú de Cordero", description: "Capas de pasta casera, bechamel ligera y reducción prolongada de cordero.", priceUSD: 22, category: "primi" },
      { id: "sp-chuletas", name: "Chuletas de Cordero a la Brasa", description: "Cortes tiernos a la parrilla con hierbas provenzales y patatas rústicas.", priceUSD: 35, category: "carni", popular: true },
      { id: "sp-profiteroles", name: "Profiteroles con Chocolate Caliente", description: "Rellenos de crema pastelera artesanal y bañados en chocolate oscuro fundido.", priceUSD: 11, category: "antipasti" }
    ],
    managerKpis: { activeReservations: 14, capacityPercentage: 90, todaySalesUSD: 3120, avgTicketUSD: 48 },
    sampleBookings: [
      { id: "SP-301", clientName: "Mauricio Benítez", details: "Mesa Terraza Pareja (2 pax) · Carpaccio & Vinos", time: "08:00 PM", status: "confirmada", pax: 2, totalUSD: 115 },
      { id: "SP-302", clientName: "Dra. Carolina Sosa", details: "Almuerzo Ejecutivo (4 pax)", time: "01:30 PM", status: "en_mesa", pax: 4, totalUSD: 210 },
      { id: "SP-303", clientName: "Grupo Corporativo Banesco", details: "Cena de Cierre (8 pax)", time: "09:00 PM", status: "pendiente", pax: 8, totalUSD: 440 }
    ]
  },

  // 4. CORDERO CARACAS
  {
    slug: "corderoccs",
    batch: "dia9",
    archetype: "gourmet-booking",
    name: "Cordero Caracas",
    handle: "corderoccs",
    category: "Alta Cocina de Autor · 50 Best",
    badgeText: "Latin America's 50 Best Discovery · Farm to Table",
    tagline: "El restaurante de alta cocina que redefinió la gastronomía en Venezuela: cocina de autor con cordero de pastoreo en alianza con Proyecto Ubre.",
    heroTitle: "Alta Cocina de Autor",
    heroHighlight: "50 Best Restaurants",
    heroSubtitle: "Chef Issam Koteich y Pedro Khalil en el Piso 5 del Tolón Fashion Mall. Menú degustación guiado y coctelería botánica.",
    logo: "/marcas/corderoccs.jpg",
    coverImage: "/marcas/corderoccs-cover.jpg",
    palette: {
      primary: "#2B2D2F",
      primaryHover: "#1F2022",
      secondary: "#C2A676",
      accent: "#D4AF37",
      darkBg: "#0E0F10",
      cardBg: "#17181A",
      textLight: "#F8F8F8",
      textMuted: "#A8A8A8",
      border: "rgba(212, 175, 55, 0.25)",
      glow: "rgba(212, 175, 55, 0.35)"
    },
    typography: { fontDisplay: "font-serif", fontBody: "font-sans" },
    introText: "Cordero Caracas es un hito de la gastronomía venezolana contemporánea. Galardonado en Latin America's 50 Best Restaurants, su propuesta 'farm-to-table' aprovecha de forma sostenible el cordero criado en Finca Ubre (Yaracuy).",
    introStats: [
      { label: "50 Best Discovery", value: "Ranked", detail: "Latin America's 50 Best Restaurants" },
      { label: "Ticket Promedio", value: "$70 USD", detail: "Menú degustación con maridaje de autor" },
      { label: "Sostenibilidad", value: "Km 0", detail: "Alianza directa con Proyecto Ubre" }
    ],
    trustBadges: ["Latin America's 50 Best Discovery", "Farm to Table con Proyecto Ubre", "Alta Cocina de Issam Koteich"],
    whatsappPitchCopy: "Buenas tardes, Chef Issam y equipo de Cordero Caracas 👋 Les saluda Paul David de ByteBridge.\n\nFelicitaciones por el inmenso impacto que están logrando con la cocina de autor de cordero y Proyecto Ubre. Con esa demanda, sabemos el reto que representa coordinar por WhatsApp turnos de menú degustación, preferencias y confirmaciones sin quitarle tiempo valioso al equipo de sala en pleno servicio.\n\nLes preparé una demo interactiva pensada exclusivamente para Cordero: una experiencia digital donde el comensal agenda su turno, selecciona el menú degustación y recibe su confirmación formal en 1 clic:\n👉 https://byte-bridge-tau.vercel.app/demos/corderoccs\n\n¿Les parece bien si le echan una mirada rápida de 2 minutos?",
    address: "Tolón Fashion Mall, Piso 5 (Terraza Gourmet), Av. Principal de Las Mercedes, Caracas",
    mapsUrl: "https://maps.google.com/?q=Cordero+Restaurante+Tolon+Fashion+Mall+Caracas",
    hours: "Martes a Domingo: 12:30 PM – 11:00 PM",
    phone: "+58 412-3764580",
    instagramUrl: "https://www.instagram.com/corderoccs",
    bcvRate: 70.5,
    bookingType: "degustation-booking",
    bookingTitle: "Reserva tu Experiencia Gastronómica en Cordero",
    bookingSubtitle: "Elige entre el menú degustación guiado o la carta de autor con maridaje botánico",
    bookingOptions: [
      { id: "cor-degustacion", name: "Menú Degustación Signature (6 Tiempos)", description: "Viaje gastronómico por los diferentes cortes del cordero con técnicas de vanguardia.", priceUSD: 75, maxCapacity: 4 },
      { id: "cor-mesa-barra", name: "Experiencia en Barra con el Chef (2 pax)", description: "Servicio interactivo frente a la cocina con maridaje de cócteles de autor.", priceUSD: 160, maxCapacity: 2 },
      { id: "cor-mesa-saloon", name: "Mesa Principal Salón (4-6 pax)", description: "Para grupos y cenas corporativas con paletilla confitada y selección de bodega.", priceUSD: 360, maxCapacity: 6 }
    ],
    categories: [
      { id: "crudos", name: "Crudos & Entradas de Vanguardia", description: "Técnicas contemporáneas y curados propios" },
      { id: "principales", name: "Platos Fuertes & Cortes Nobles", description: "Cocciones lentas y brasa de cordero" },
      { id: "cocteleria", name: "Coctelería Botánica", description: "Destilados infusionados y autoría de barra" }
    ],
    menuItems: [
      { id: "cor-tartar", name: "Tartar de Cordero al Cuchillo", description: "Aliñado al momento con emulsiones cítricas, mostaza en grano y tostas crujientes.", priceUSD: 17, category: "crudos", popular: true },
      { id: "cor-tonnata", name: "Lingua Tonnata a Baja Temperatura", description: "Lengua de cordero confitada con emulsión clásica tonnata y alcaparras fritas.", priceUSD: 16, category: "crudos" },
      { id: "cor-arroz", name: "Arroz Meloso de Cordero & Morcilla", description: "Fondo denso de cordero de granja, setas silvestres y sofrito criollo.", priceUSD: 26, category: "principales", popular: true },
      { id: "cor-paletilla", name: "Paletilla de Cordero Lechal Glaseada", description: "Horneada durante 16 horas en sus propios jugos con puré rústico trufado.", priceUSD: 36, category: "principales", popular: true },
      { id: "cor-rack", name: "Rack de Cordero en Costra de Hierbas", description: "Costillar tierno a la brasa con jugo de carne reducido y vegetales glaseados.", priceUSD: 39, category: "principales", popular: true },
      { id: "cor-coctel", name: "Cóctel Botánico Ubre Spritz", description: "Ginebra artesanal, cordial de hierbas del huerto, licor de saúco y espumoso brut.", priceUSD: 14, category: "cocteleria" }
    ],
    managerKpis: { activeReservations: 16, capacityPercentage: 96, todaySalesUSD: 4200, avgTicketUSD: 70 },
    sampleBookings: [
      { id: "COR-401", clientName: "Gustavo Cisneros Jr.", details: "Menú Degustación Maridado (4 pax)", time: "08:30 PM", status: "confirmada", pax: 4, totalUSD: 360 },
      { id: "COR-402", clientName: "Patricia Phelps de Cisneros", details: "Mesa Salón Terraza (2 pax)", time: "02:00 PM", status: "en_mesa", pax: 2, totalUSD: 150 },
      { id: "COR-403", clientName: "Jean-Luc Dupont (Embajada)", details: "Cena Protocolar (6 pax)", time: "09:00 PM", status: "pendiente", pax: 6, totalUSD: 510 }
    ]
  },

  // 5. CASA CANELA CAFÉ & BAKERY
  {
    slug: "casacanela_ve",
    batch: "dia9",
    archetype: "table-ordering",
    name: "Casa Canela Café & Bakery",
    handle: "casacanela.ve",
    category: "Café de Especialidad & Bakery",
    badgeText: "The World's 100 Best Coffee Shops · Masa Madre",
    tagline: "Cafetería de especialidad de nivel mundial, panadería artesanal de fermentación lenta, pastelería y brunch en El Hatillo y Las Mercedes.",
    heroTitle: "Especialidad & Bakery",
    heroHighlight: "Top 100 Coffee Shops",
    heroSubtitle: "Prueba croissants hojaldrados al 100% mantequilla, métodos filtrados con café venezolano de origen y tostadas en pan de masa madre.",
    logo: "/marcas/casacanela_ve.jpg",
    coverImage: "/marcas/casacanela_ve-cover.jpg",
    palette: {
      primary: "#C86D51",
      primaryHover: "#B35A3E",
      secondary: "#4A3525",
      accent: "#E6A15C",
      darkBg: "#17120F",
      cardBg: "#231B16",
      textLight: "#FFF8F2",
      textMuted: "#C2AEA0",
      border: "rgba(200, 109, 81, 0.3)",
      glow: "rgba(230, 161, 92, 0.35)"
    },
    typography: { fontDisplay: "font-serif", fontBody: "font-sans" },
    introText: "Incluida en el ranking The World's 100 Best Coffee Shops, Casa Canela es un paraíso para los amantes del café de origen y la repostería artesanal. Su masa madre y hojaldres marcan el estándar del brunch en Caracas.",
    introStats: [
      { label: "Reconocimiento", value: "Top 100", detail: "The World's 100 Best Coffee Shops" },
      { label: "Ticket Promedio", value: "$16 USD", detail: "Por persona en brunch y pastelería" },
      { label: "Masa Madre", value: "48 Horas", detail: "Fermentación natural sin químicos" }
    ],
    trustBadges: ["The World's 100 Best Coffee Shops", "Café de Especialidad Venezolano", "Panadería 100% Masa Madre"],
    whatsappPitchCopy: "Buenos días, equipo de Casa Canela Café & Bakery 👋 Les saluda Paul David de ByteBridge.\n\nFelicitaciones por ser un referente indiscutible del café de especialidad y la pastelería en Caracas. Sin embargo, los fines de semana la vitrina y el salón andan a millón, y estar enviando fotos de tortas, explicando sabores y calculando la tasa del día por WhatsApp le quita horas al personal.\n\nLes construí una vitrina digital interactiva para Casa Canela donde sus clientes pueden ver los cafés de especialidad, armar sus cajas de croissants o pedir brunch con cálculo automático a tasa oficial BCV y despacho en 1 clic a su WhatsApp:\n👉 https://byte-bridge-tau.vercel.app/demos/casacanela_ve\n\n¿Les parece si le echan un vistazo de 2 minutos?",
    address: "Calle Bolívar c/ Calle El Progreso, Casco Colonial de El Hatillo (y La Grand Plaz Las Mercedes), Caracas",
    mapsUrl: "https://maps.google.com/?q=Casa+Canela+El+Hatillo+Caracas",
    hours: "Martes a Domingo: 8:00 AM – 8:00 PM",
    phone: "+58 424-1343300",
    instagramUrl: "https://www.instagram.com/casacanela.ve",
    bcvRate: 70.5,
    bookingType: "brunch-table-and-pickup",
    bookingTitle: "Pide en Mesa o Encarga tu Box de Brunch",
    bookingSubtitle: "Disfruta de café de especialidad y pastelería recién horneada sin colas en caja",
    bookingOptions: [
      { id: "can-box-brunch", name: "Box Brunch Casa Canela para Dos", description: "2 cafés de especialidad, 2 croissants de almendras, tostada de salmón y bowl de frutas.", priceUSD: 28, maxCapacity: 2 },
      { id: "can-box-pasteleria", name: "Caja Surtida de Hojaldres (6 unid)", description: "Selección de croissants de chocolate, almendras, rollos de canela y pain au chocolat.", priceUSD: 18, maxCapacity: 1 },
      { id: "can-mesa-terraza", name: "Mesa Terraza Desayuno Fin de Semana (4 pax)", description: "Reserva de mesa en el patio colonial de El Hatillo para desayuno o merienda.", priceUSD: 60, maxCapacity: 4 }
    ],
    categories: [
      { id: "cafe", name: "Café de Especialidad & Métodos", description: "Granos de fincas venezolanas tostados artesanalmente" },
      { id: "panaderia", name: "Panadería de Masa Madre & Croissants", description: "Hojaldres 100% mantequilla pura" },
      { id: "brunch", name: "Tostadas & Brunch Salado", description: "Opciones saladas gourmet para cualquier hora" }
    ],
    menuItems: [
      { id: "can-v60", name: "Café Filtrado V60 Grano de Origen", description: "Extracción artesanal con notas florales, chocolate oscuro y cuerpo limpio.", priceUSD: 4.5, category: "cafe", popular: true },
      { id: "can-croissant", name: "Croissant de Almendras & Frangipane", description: "Hojaldrado 100% mantequilla relleno de crema de almendras tostadas.", priceUSD: 5.5, category: "panaderia", popular: true },
      { id: "can-salmon", name: "Tostada de Salmón Ahumado & Aguacate", description: "En pan de masa madre con queso crema a las finas hierbas y huevo poché.", priceUSD: 12, category: "brunch", popular: true },
      { id: "can-pancakes", name: "Pancakes Esponjosos con Frutos Rojos", description: "Con sirope de arce puro, crema batida de vainilla y arándanos frescos.", priceUSD: 9.5, category: "brunch", popular: true },
      { id: "can-sandwich", name: "Sándwich Roast Beef & Queso Gruyère", description: "En baguette de masa madre crujiente con cebollas caramelizadas al balsámico.", priceUSD: 11.5, category: "brunch" },
      { id: "can-zanahoria", name: "Torta Húmeda de Zanahoria & Nuez", description: "Con generoso frosting artesanal de queso mascarpone y canela de Ceylán.", priceUSD: 6, category: "panaderia" }
    ],
    managerKpis: { activeReservations: 18, capacityPercentage: 94, todaySalesUSD: 1860, avgTicketUSD: 16 },
    sampleBookings: [
      { id: "CAN-501", clientName: "Valeria Brandt", details: "Mesa Patio Colonial (2 pax) · Brunch", time: "10:30 AM", status: "confirmada", pax: 2, totalUSD: 35 },
      { id: "CAN-502", clientName: "Sebastián Pardo", details: "Box Surtido Pastelería para Llevar", time: "11:15 AM", status: "en_mesa", pax: 1, totalUSD: 24 },
      { id: "CAN-503", clientName: "Camila Rivas", details: "Brunch Familiar (4 pax)", time: "09:45 AM", status: "pendiente", pax: 4, totalUSD: 68 }
    ]
  },

  // 6. MODO CARACAS
  {
    slug: "modoccs",
    batch: "dia9",
    archetype: "table-ordering",
    name: "MoDo Caracas",
    handle: "modoccs",
    category: "Complejo Gastronómico & MoDo Bowling",
    badgeText: "2.800 m² · 5 Conceptos · Bowling Profesional · Chacao",
    tagline: "El distrito gastronómico y de entretenimiento más vibrante de Caracas: Kibun Sushi, Mondano Pizza, LeBleu Brasserie, tacos y bowling profesional.",
    heroTitle: "Distrito Gastronómico",
    heroHighlight: "& MoDo Bowling",
    heroSubtitle: "2.800 m² en Chacao con 5 cocinas, coctelería de autor, música en vivo y pistas de bowling. Pide a cualquier barra desde tu mesa en 1 clic.",
    logo: "/marcas/modoccs.jpg",
    coverImage: "/marcas/modoccs-cover.jpg",
    palette: {
      primary: "#E63946",
      primaryHover: "#D62828",
      secondary: "#457B9D",
      accent: "#A8DADC",
      darkBg: "#0B0F14",
      cardBg: "#141A22",
      textLight: "#F1FAEE",
      textMuted: "#8D99AE",
      border: "rgba(230, 57, 70, 0.3)",
      glow: "rgba(230, 57, 70, 0.4)"
    },
    typography: { fontDisplay: "font-sans", fontBody: "font-sans" },
    introText: "MoDo Caracas reúne bajo un mismo techo una experiencia social inigualable en Chacao: Kibun (nikkei), Mondano (pizzería napolitana), LeBleu (carnes y brasserie), El Piquín (taquería), bowling profesional y shows en vivo.",
    introStats: [
      { label: "Espacio Total", value: "2.800 m²", detail: "5 conceptos culinarios y tarima en vivo" },
      { label: "Pistas Bowling", value: "4 Líneas", detail: "Pistas Brunswick profesionales" },
      { label: "Capacidad", value: "+450 Pax", detail: "Alto flujo en sala y terraza" }
    ],
    trustBadges: ["Complejo Multiconcepto Centralizado", "Pistas Profesionales MoDo Bowling", "Shows y Música en Vivo"],
    whatsappPitchCopy: "Hola equipo de MoDo Caracas! 👋 ¿Cuántas reservas de bowling y pedidos de grupos se les quedan fríos los fines de semana en WhatsApp porque el chat se desborda y no dan abasto para responder?\n\nCon 2.800 m² y 5 cocinas distintas, coordinar comandas y turnos a mano cuesta comensales. Les preparé una prueba directa con su oferta de MoDo Bowling, Kibun y Mondano para que cada mesa pida su ronda o reserve su pista en 3 clics sin esperar mesoneros:\n👉 https://byte-bridge-tau.vercel.app/demos/modoccs\n\n¿Les muestro en 5 minutos cómo funciona?",
    address: "Entre Calle Mata de Coco y Av. Mohedano (frente al Mercado Municipal), Chacao, Caracas",
    mapsUrl: "https://maps.google.com/?q=MoDo+Caracas+Chacao",
    hours: "Miércoles a Domingo: 12:00 PM – 02:00 AM",
    phone: "+58 412-6173395",
    instagramUrl: "https://www.instagram.com/modoccs",
    bcvRate: 70.5,
    bookingType: "bowling-and-table-order",
    bookingTitle: "Reserva Pistas de Bowling o Pide en Mesa",
    bookingSubtitle: "Comanda pizzas, sushi y cócteles desde tu asiento o aparta tu línea de bowling",
    bookingOptions: [
      { id: "modo-bowling-1h", name: "1 Hora de MoDo Bowling (hasta 6 jugadores)", description: "Incluye alquiler de pista profesional Brunswick y calzado especial para hasta 6 personas.", priceUSD: 35, maxCapacity: 6 },
      { id: "modo-combo-amigos", name: "Pack Bowling + Pizza Mondano + Cervezas", description: "1 hora de pista + 1 Pizza Trufada Mondano + balde de 6 cervezas importadas.", priceUSD: 60, maxCapacity: 6 },
      { id: "modo-mesa-lounge", name: "Mesa VIP Lounge frente a Tarima (6-8 pax)", description: "Consumo mínimo concertado con servicio de botella y rolls Kibun para la noche.", priceUSD: 180, maxCapacity: 8 }
    ],
    categories: [
      { id: "bowling", name: "MoDo Bowling & Pistas", description: "Líneas de boliche por hora con calzado" },
      { id: "kibun", name: "Kibun Sushi & Nikkei", description: "Rolls de autor, tiraditos y tatakis" },
      { id: "mondano", name: "Mondano Pizza Napolitana", description: "Masa madre madurada 48h al horno" }
    ],
    menuItems: [
      { id: "modo-pista", name: "Hora de Pista MoDo Bowling (hasta 6 pax)", description: "Línea Brunswick profesional por 60 min con calzado desinfectado incluido.", priceUSD: 35, category: "bowling", popular: true },
      { id: "modo-trufada", name: "Pizza Trufada Mondano Napolitana", description: "Masa madre madurada 48h, fior di latte, crema de trufas, hongos y aceite de trufa blanca.", priceUSD: 18, category: "mondano", popular: true },
      { id: "modo-tataki", name: "Roll Tataki Truffle Kibun", description: "Langostino crocante y aguacate coronado con atún sellado al soplete y ponzu.", priceUSD: 16, category: "kibun", popular: true },
      { id: "modo-lomito", name: "Lomito Café de París LeBleu", description: "Medallón a la parrilla bañado en mantequilla Café de París con papas rústicas.", priceUSD: 26, category: "mondano", popular: true },
      { id: "modo-tacos", name: "Tacos de Lechón en Caja China (3 unid)", description: "Cerdo tierno cocido en caja china, piel crujiente, cebolla encurtida y salsa verde.", priceUSD: 13.5, category: "mondano" },
      { id: "modo-coctel", name: "Cóctel MoDo Signature Spritz", description: "Aperol, cordial de maracuyá, espumoso brut y perfume de romero tostado.", priceUSD: 9, category: "bowling" }
    ],
    managerKpis: { activeReservations: 24, capacityPercentage: 92, todaySalesUSD: 6850, avgTicketUSD: 38 },
    sampleBookings: [
      { id: "MOD-601", clientName: "Rodrigo Tinoco", details: "Pista 2 Bowling (6 pax) · 1 Hora", time: "07:00 PM", status: "confirmada", pax: 6, totalUSD: 60 },
      { id: "MOD-602", clientName: "Andrea Carvallo", details: "Mesa Terraza Kibun (4 pax)", time: "09:00 PM", status: "en_mesa", pax: 4, totalUSD: 145 },
      { id: "MOD-603", clientName: "Empresa Mercantil (Evento)", details: "Pistas 3 y 4 + Lounge VIP (12 pax)", time: "08:30 PM", status: "pendiente", pax: 12, totalUSD: 380 }
    ]
  },

  // 7. LA CASTAÑUELA
  {
    slug: "lacastanuelave",
    batch: "dia9",
    archetype: "gourmet-booking",
    name: "La Castañuela",
    handle: "lacastanuelave",
    category: "Templo Ibérico & Marisquería",
    badgeText: "Alta Cocina Española en Las Mercedes (+30 Años)",
    tagline: "El gran templo de la cocina española e ibérica en Las Mercedes: paellas valencianas a la leña, asopados marineros y salones privados.",
    heroTitle: "Tradición Española",
    heroHighlight: "En Las Mercedes",
    heroSubtitle: "Más de 30 años celebrando la gastronomía ibérica: arroces bomba, pulpo a la gallega, cochinillo y la más selecta cava de Riojas y Riberas.",
    logo: "/marcas/lacastanuelave.jpg",
    coverImage: "/marcas/lacastanuelave-cover.jpg",
    palette: {
      primary: "#8B1E0F",
      primaryHover: "#6B1409",
      secondary: "#D4A373",
      accent: "#E76F51",
      darkBg: "#120B09",
      cardBg: "#1E130F",
      textLight: "#FAF3EE",
      textMuted: "#B8A49C",
      border: "rgba(139, 30, 15, 0.3)",
      glow: "rgba(231, 111, 81, 0.35)"
    },
    typography: { fontDisplay: "font-serif", fontBody: "font-sans" },
    introText: "La Castañuela es un símbolo de abolengo culinario en la Calle París de Las Mercedes. Famoso por sus paellas maestras a fuego lento, mariscos traídos de costa a diario y salones privados para encuentros corporativos y diplomáticos.",
    introStats: [
      { label: "Trayectoria", value: "+30 Años", detail: "Referente ibérico indiscutible" },
      { label: "Ticket Promedio", value: "$55 USD", detail: "Por comensal con paella y reserva de vino" },
      { label: "Espacios", value: "Salones VIP", detail: "Áreas privadas para eventos formales" }
    ],
    trustBadges: ["Templo Ibérico en Las Mercedes", "Paellas Tradicionales con Arroz Bomba", "Cava de Vinos Españoles & Flamenco"],
    whatsappPitchCopy: "Estimado equipo de La Castañuela 👋 ¿Cuántas reservas de familias y almuerzos corporativos se les escapan los fines de semana cuando el WhatsApp se llena de mensajes pidiendo presupuesto de paellas y disponibilidad de salones?\n\nPara un templo gastronómico como el suyo, la confirmación debe ser impecable e inmediata. Les preparé una propuesta exclusiva con su carta ibérica, selección de cavas y reserva de salones privados con cálculo automático a tasa oficial:\n👉 https://byte-bridge-tau.vercel.app/demos/lacastanuelave\n\n¿Les muestro en 5 minutos cómo funciona?",
    address: "Calle París, entre Av. La Trinidad y Calle Mucuchíes, Las Mercedes, Caracas",
    mapsUrl: "https://maps.google.com/?q=La+Castañuela+Las+Mercedes+Caracas",
    hours: "Martes a Domingo: 12:00 PM – 11:00 PM",
    phone: "+58 414-7868373",
    instagramUrl: "https://www.instagram.com/lacastanuelave",
    bcvRate: 70.5,
    bookingType: "paella-and-saloon-booking",
    bookingTitle: "Reserva tu Paella o Salón Privado",
    bookingSubtitle: "Asegura la preparación de tu arroz y salón exclusivo para almuerzos o cenas familiares",
    bookingOptions: [
      { id: "cas-paella-pareja", name: "Paella Valenciana Tradicional para Dos (2 pax)", description: "Elaborada con arroz bomba español, pollo de granja, azafrán puro y socarrat crujiente.", priceUSD: 42, maxCapacity: 2 },
      { id: "cas-asopado-mariscos", name: "Asopado Marinero Especial La Castañuela", description: "Langosta, mero, calamar y mejillones aromatizados al vino blanco.", priceUSD: 64, maxCapacity: 4 },
      { id: "cas-salon-privado", name: "Salón Privado Protocolar (6-10 pax)", description: "Espacio reservado con atención exclusiva de camarero y servicio de sommelier.", priceUSD: 450, maxCapacity: 10 }
    ],
    categories: [
      { id: "tapas", name: "Tapas & Mariscos de Costa", description: "Pulpo, jamón ibérico de bellota y chipirones" },
      { id: "arroces", name: "Arroces Maestros & Paellas", description: "Cocinados a fuego lento con arroz bomba" },
      { id: "carnes", name: "Carnes Nobles & Pescados", description: "Cochinillo segoviano y rueda de mero" }
    ],
    menuItems: [
      { id: "cas-valenciana", name: "Paella Valenciana a la Leña (2 pax)", description: "Arroz bomba, pollo de granja, conejo, judías verdes, azafrán español y socarrat.", priceUSD: 42, category: "arroces", popular: true },
      { id: "cas-marinera", name: "Arroz a la Marinera Meloso", description: "Caldo concentrado de crustáceos, calamares en su tinta, langostinos y alioli.", priceUSD: 38, category: "arroces", popular: true },
      { id: "cas-pulpo", name: "Pulpo a la Gallega Tradicional", description: "Pulpo tierno sobre patatas pochadas, pimentón de la Vera agridulce y sal marina.", priceUSD: 24, category: "tapas", popular: true },
      { id: "cas-asopado", name: "Asopado de Mariscos Especial", description: "Caldo de langosta, rueda de mero, calamar, almejas vivas y mejillones.", priceUSD: 32, category: "arroces", popular: true },
      { id: "cas-mero", name: "Mero al Horno con Patatas Panaderas", description: "Rueda de mero fresco a la espalda con ajos dorados y emulsión de oliva virgen.", priceUSD: 28, category: "carnes" },
      { id: "cas-crema", name: "Crema Catalana Caramelizada", description: "Receta tradicional con costra de azúcar flambeada al momento de servir.", priceUSD: 9, category: "tapas" }
    ],
    managerKpis: { activeReservations: 11, capacityPercentage: 88, todaySalesUSD: 3450, avgTicketUSD: 55 },
    sampleBookings: [
      { id: "CAS-701", clientName: "Ing. Gonzalo Sucre", details: "Paella Valenciana (2 pax) · Aniversario", time: "02:00 PM", status: "confirmada", pax: 2, totalUSD: 90 },
      { id: "CAS-702", clientName: "Familia Boulton", details: "Salón Privado Domingo (8 pax)", time: "01:30 PM", status: "en_mesa", pax: 8, totalUSD: 480 },
      { id: "CAS-703", clientName: "Alberto Cárdenas", details: "Almuerzo Ejecutivo (4 pax)", time: "02:30 PM", status: "pendiente", pax: 4, totalUSD: 220 }
    ]
  },

  // 8. CASA PUGLIA TRATTORIA
  {
    slug: "casapuglia_ve",
    batch: "dia9",
    archetype: "gourmet-booking",
    name: "Casa Puglia Trattoria",
    handle: "casapuglia.ve",
    category: "Trattoria Tradicional & Pastas",
    badgeText: "Cucina Tipica Pugliese · Horno de Piedra · El Hatillo",
    tagline: "Auténtica trattoria italiana en el corazón de El Hatillo frente a la Plaza Sucre: orecchiette estiradas a mano, burrata fresca y pizzas a la piedra.",
    heroTitle: "Sapore di Puglia",
    heroHighlight: "En El Hatillo",
    heroSubtitle: "Platos tradicionales del sur de Italia en una casona colonial íntima frente a la Plaza Sucre. Pastas frescas diarias y horno de piedra.",
    logo: "/marcas/casapuglia_ve.jpg",
    coverImage: "/marcas/casapuglia_ve-cover.jpg",
    palette: {
      primary: "#2E5B88",
      primaryHover: "#23466A",
      secondary: "#D48B38",
      accent: "#E67E22",
      darkBg: "#0F141C",
      cardBg: "#17202C",
      textLight: "#F8FAFC",
      textMuted: "#94A3B8",
      border: "rgba(46, 91, 136, 0.3)",
      glow: "rgba(230, 126, 34, 0.35)"
    },
    typography: { fontDisplay: "font-serif", fontBody: "font-sans" },
    introText: "Casa Puglia rinde homenaje a la cocina campesina y costera de la región de Apulia (Italia) en pleno casco colonial de El Hatillo. Especialistas en orecchiette artesanales, quesos frescos de leche entera y cocciones al horno de piedra.",
    introStats: [
      { label: "Autenticidad", value: "100% Puglia", detail: "Recetas tradicionales de la nonna" },
      { label: "Ticket Promedio", value: "$26 USD", detail: "Pastas frescas, vino de la casa y postre" },
      { label: "Ubicación", value: "Plaza Sucre", detail: "En el corazón colonial de El Hatillo" }
    ],
    trustBadges: ["Pastas Artesanales de la Puglia", "Pizzas al Horno de Piedra", "Casona Colonial Frente a Plaza Sucre"],
    whatsappPitchCopy: "Hola amigos de Casa Puglia! 🇮🇹 Los fines de semana cuando El Hatillo se colapsa de visitantes, ¿cuántas mesas y pedidos de delivery se les caen en WhatsApp porque el equipo está en sala y no da abasto para responder a tiempo?\n\nLes preparé una solución interactiva con sus pastas frescas, pizzas al horno y antipasti para que el comensal reserve su mesa o pida para pick up en 3 clics y a tasa oficial BCV:\n👉 https://byte-bridge-tau.vercel.app/demos/casapuglia_ve\n\n¿Les muestro en 5 minutos cómo funciona?",
    address: "Calle Comercio, Quinta D, Unidad 15-2 (Frente a Plaza Sucre), El Hatillo, Caracas",
    mapsUrl: "https://maps.google.com/?q=Casa+Puglia+El+Hatillo+Caracas",
    hours: "Miércoles a Domingo: 12:00 PM – 10:00 PM",
    phone: "+58 412-2889771",
    instagramUrl: "https://www.instagram.com/casapuglia.ve",
    bcvRate: 70.5,
    bookingType: "table-and-pickup-reservation",
    bookingTitle: "Reserva tu Mesa Frente a la Plaza",
    bookingSubtitle: "Evita colas en la entrada los fines de semana y asegura tus platos italianos favoritos",
    bookingOptions: [
      { id: "pug-mesa-terraza", name: "Mesa Terraza Colonial Pareja (2 pax)", description: "Vista a la Plaza Sucre con copa de vino tinto Primitivo di Manduria.", priceUSD: 55, maxCapacity: 2 },
      { id: "pug-combo-familiar", name: "Almuerzo Familiar Pugliese (4 pax)", description: "Burrata artesanal grande + 2 pastas orecchiette + 1 pizza al horno de piedra.", priceUSD: 72, maxCapacity: 4 },
      { id: "pug-box-takeaway", name: "Combo Trattoria para Retirar / Delivery", description: "2 pastas frescas a elección + focaccia al romero + tiramisú casero.", priceUSD: 36, maxCapacity: 1 }
    ],
    categories: [
      { id: "antipasti", name: "Antipasti & Burratas", description: "Quesos frescos, foccacias y vegetales confitados" },
      { id: "paste", name: "Paste Fatte a Mano", description: "Orecchiette y pastas frescas estiradas al día" },
      { id: "pizze", name: "Pizze al Forno di Pietra", description: "Masa de fermentación lenta y salsa San Marzano" }
    ],
    menuItems: [
      { id: "pug-orecchiette", name: "Orecchiette alla Pugliese", description: "Pasta típica estirada a mano con estofado de ternera, tomates secos y pecorino.", priceUSD: 16.5, category: "paste", popular: true },
      { id: "pug-burrata", name: "Burrata Fresca Casa Puglia", description: "Burrata cremosa sobre rúgula, cherrys confitados, balsámico de Módena y focaccia.", priceUSD: 14, category: "antipasti", popular: true },
      { id: "pug-pizza", name: "Pizza Prosciutto & Funghi a la Piedra", description: "Pomodoro San Marzano, fior di latte, prosciutto di Parma y champiñones frescos.", priceUSD: 15.5, category: "pizze", popular: true },
      { id: "pug-ossobuco", name: "Ossobuco con Risotto alla Milanese", description: "Jarrete braseado lentamente al vino tinto servido sobre risotto al azafrán.", priceUSD: 22, category: "paste", popular: true },
      { id: "pug-ravioli", name: "Ravioli Ricotta e Spinaci Porcini", description: "Pasta rellena fresca con mantequilla de salvia y emulsión de hongos porcini.", priceUSD: 17, category: "paste" },
      { id: "pug-tiramisu", name: "Tiramisú Tradicional Pugliese", description: "Savoiardi empapados en espresso italiano con crema de mascarpone y cacao.", priceUSD: 7.5, category: "antipasti" }
    ],
    managerKpis: { activeReservations: 15, capacityPercentage: 88, todaySalesUSD: 1680, avgTicketUSD: 26 },
    sampleBookings: [
      { id: "PUG-801", clientName: "Mariana Alfonzo", details: "Mesa Terraza Plaza (2 pax) · Almuerzo", time: "01:30 PM", status: "confirmada", pax: 2, totalUSD: 58 },
      { id: "PUG-802", clientName: "Dr. Roberto Ponte", details: "Almuerzo Familiar Domingo (4 pax)", time: "02:15 PM", status: "en_mesa", pax: 4, totalUSD: 85 },
      { id: "PUG-803", clientName: "Daniela Velutini", details: "Cena Íntima en Salón (2 pax)", time: "08:00 PM", status: "pendiente", pax: 2, totalUSD: 62 }
    ]
  },

  // 9. MISO CARACAS ROOFTOP
  {
    slug: "miso_ccs",
    batch: "dia9",
    archetype: "gourmet-booking",
    name: "Miso Caracas",
    handle: "miso_ccs",
    category: "Japonés de Autor & Rooftop",
    badgeText: "Rooftop La Grand Plaz · Vista 360° Ávila · Omakase",
    tagline: "Experiencia culinaria japonesa de vanguardia en las alturas de Las Mercedes: Omakase bar, robata grill a la brasa y coctelería molecular frente al Ávila.",
    heroTitle: "Japonés de Vanguardia",
    heroHighlight: "& Rooftop Omakase",
    heroSubtitle: "En el último piso del Centro Comercial La Grand Plaz. Nigiris de wagyu A5, atún toro, robata japonesa y las puestas de sol más codiciadas de Caracas.",
    logo: "/marcas/miso_ccs.jpg",
    coverImage: "/marcas/miso_ccs-cover.jpg",
    palette: {
      primary: "#D90429",
      primaryHover: "#EF233C",
      secondary: "#2B2D42",
      accent: "#EDF2F4",
      darkBg: "#0B0C10",
      cardBg: "#161820",
      textLight: "#FFFFFF",
      textMuted: "#8D99AE",
      border: "rgba(217, 4, 41, 0.35)",
      glow: "rgba(217, 4, 41, 0.45)"
    },
    typography: { fontDisplay: "font-sans", fontBody: "font-sans" },
    introText: "Ubicado en el rooftop del CC La Grand Plaz en Las Mercedes, Miso Caracas combina la mística del Omakase japonés con la energía vibrante de un mirador panorámico con vista abierta hacia el Cerro El Ávila.",
    introStats: [
      { label: "Ubicación", value: "Rooftop Ávila", detail: "Vista 360° en La Grand Plaz" },
      { label: "Ticket Promedio", value: "$65 USD", detail: "Nigiris premium, robata y sakes" },
      { label: "Cortes Nobles", value: "Wagyu A5", detail: "Pesca fresca y cortes certificados" }
    ],
    trustBadges: ["Rooftop Exclusivo La Grand Plaz", "Barra Omakase & Robata Grill", "Vista Panorámica al Ávila"],
    whatsappPitchCopy: "Hola equipo de Miso Caracas! 🥢 ¿Cuántos clientes de alto ticket que buscan mesa en terraza con vista al Ávila para el atardecer se van a otro lugar de Las Mercedes porque tardan más de 15 minutos en responderles la disponibilidad por WhatsApp?\n\nEn alta cocina japonesa, el servicio digital debe ser tan impecable como el corte de un sashimi. Les armé una demo visual con sus nigiris de autor, robata y selección de mesas en rooftop:\n👉 https://byte-bridge-tau.vercel.app/demos/miso_ccs\n\n¿Les muestro en 5 minutos cómo funciona?",
    address: "CC La Grand Plaz, Nivel Terraza Rooftop, Av. Río de Janeiro c/ Calle Nueva York, Las Mercedes, Caracas",
    mapsUrl: "https://maps.google.com/?q=Miso+Caracas+La+Grand+Plaz+Las+Mercedes",
    hours: "Martes a Domingo: 12:30 PM – 01:00 AM",
    phone: "+58 412-5861709",
    instagramUrl: "https://www.instagram.com/miso_ccs",
    bcvRate: 70.5,
    bookingType: "rooftop-omakase-booking",
    bookingTitle: "Reserva tu Mesa Sunset o Barra Omakase",
    bookingSubtitle: "Asegura ubicación perimetral con vista panorámica al Ávila durante el atardecer",
    bookingOptions: [
      { id: "miso-sunset-avila", name: "Mesa Perimetral Sunset Ávila (2-4 pax)", description: "Ubicación de primera fila para el atardecer (5:30 PM a 7:30 PM) con coctelería de autor.", priceUSD: 140, maxCapacity: 4 },
      { id: "miso-omakase-experience", name: "Barra Omakase del Chef (2 pax)", description: "Servicio exclusivo directo del Itamae con 12 piezas de nigiris de lujo y sake.", priceUSD: 160, maxCapacity: 2 },
      { id: "miso-lounge-vip", name: "Mesa Lounge Nocturna VIP (6 pax)", description: "Mesa perimetral para cena nocturna con robata grill y selección de destilados.", priceUSD: 360, maxCapacity: 6 }
    ],
    categories: [
      { id: "nigiris", name: "Nigiris de Autor & Omakase", description: "Wagyu A5, foie gras, toro y trufas frescas" },
      { id: "robata", name: "Robata Grill a la Brasa", description: "Brochetas y cortes cocinados sobre carbón japonés" },
      { id: "cocteles", name: "Coctelería Molecular & Sakes", description: "Bebidas de autor con botánicos y whisky japonés" }
    ],
    menuItems: [
      { id: "miso-trilogia", name: "Nigiri Trilogía de Lujo (3 piezas)", description: "Wagyu A5 con trufa negra, Toro con foie flambeado y Pez Mantequilla al chimichurri.", priceUSD: 28, category: "nigiris", popular: true },
      { id: "miso-tiradito", name: "Tiradito Nikkei de Medregal", description: "Láminas finas en leche de tigre al ají amarillo, trufa blanca y maíz chulpi.", priceUSD: 19, category: "nigiris", popular: true },
      { id: "miso-handroll", name: "Handroll Crocante Salmón Trufado (2 unid)", description: "Alga nori crujiente con tartar fresco, aguacate, tobiko y mayonesa trufada.", priceUSD: 15, category: "nigiris", popular: true },
      { id: "miso-risotto", name: "Risotto de Langostinos al Miso Rojo", description: "Arroz carnaroli al dente mantecado con pasta de miso y langostinos gigantes a la robata.", priceUSD: 24, category: "robata", popular: true },
      { id: "miso-pulpo", name: "Robata Skewers de Pulpo Anticuchero", description: "Brochetas a la brasa glaseadas en salsa anticuchera con puré de camote.", priceUSD: 21, category: "robata" },
      { id: "miso-sakura", name: "Cóctel de Autor Sakura Gin", description: "Ginebra Roku, cordial de cerezo, lychee, tónica botánica y perfume de yuzu.", priceUSD: 13, category: "cocteles", popular: true }
    ],
    managerKpis: { activeReservations: 18, capacityPercentage: 95, todaySalesUSD: 5120, avgTicketUSD: 65 },
    sampleBookings: [
      { id: "MIS-901", clientName: "Guillermo Capriles", details: "Mesa Perimetral Sunset (2 pax) · Vista Ávila", time: "05:45 PM", status: "confirmada", pax: 2, totalUSD: 160 },
      { id: "MIS-902", clientName: "Valeria Pietri", details: "Barra Omakase Chef (2 pax)", time: "08:30 PM", status: "en_mesa", pax: 2, totalUSD: 180 },
      { id: "MIS-903", clientName: "Corporativo Polar (Lounge)", details: "Mesa Lounge Nocturno (6 pax)", time: "09:30 PM", status: "pendiente", pax: 6, totalUSD: 420 }
    ]
  },

  // 10. RESTAURANTE HOTEL HUMBOLDT
  {
    slug: "humboldtrestaurant",
    batch: "dia9",
    archetype: "vip-access",
    name: "Restaurante Hotel Humboldt",
    handle: "humboldtrestaurant",
    category: "Ícono Turístico & Alta Gastronomía",
    badgeText: "Cima del Ávila (2.140 m s.n.m.) · Vista al Mar y Caracas",
    tagline: "El restaurante más alto y legendario de Venezuela: alta cocina internacional a 2.140 metros de altura en la cima del Ávila con acceso coordinado por teleférico.",
    heroTitle: "La Cima de Caracas",
    heroHighlight: "A 2.140 Metros",
    heroSubtitle: "Obra maestra de Tomás Sanabria en el Parque Nacional Waraira Repano. Carnes a la brasa, pizzas a la leña, fondue suizo y vistas infinitas al Caribe.",
    logo: "/marcas/humboldtrestaurant.jpg",
    coverImage: "/marcas/humboldtrestaurant-cover.jpg",
    palette: {
      primary: "#1D3557",
      primaryHover: "#14213D",
      secondary: "#A8DADC",
      accent: "#E63946",
      darkBg: "#0B111A",
      cardBg: "#121C2B",
      textLight: "#FFFFFF",
      textMuted: "#8E9AAF",
      border: "rgba(168, 218, 220, 0.3)",
      glow: "rgba(230, 57, 70, 0.35)"
    },
    typography: { fontDisplay: "font-serif", fontBody: "font-sans" },
    introText: "Construido en 1956 en la cresta del Cerro Ávila, el Restaurante del Hotel Humboldt ofrece una experiencia inigualable a 2.140 metros sobre el nivel del mar, combinando alta cocina, patrimonio arquitectónico y teleférico.",
    introStats: [
      { label: "Altitud", value: "2.140 m", detail: "El restaurante más alto de Venezuela" },
      { label: "Ticket Promedio", value: "$48 USD", detail: "Por comensal con vistas al Caribe" },
      { label: "Patrimonio", value: "Año 1956", detail: "Diseño del Arq. Tomás Sanabria" }
    ],
    trustBadges: ["Ícono Turístico Nacional Cima del Ávila", "Acceso Coordinado con Teleférico", "Vistas al Mar Caribe y Valle de Caracas"],
    whatsappPitchCopy: "Buenas tardes equipo del Restaurante Hotel Humboldt! ⛰️ ¿Cuánto tiempo pierde a diario su equipo en WhatsApp explicando a cada visitante cómo coordinar el teleférico de Maripérez, los horarios y los precios del menú?\n\nSubir al ícono de Caracas debería ser una experiencia fascinante desde el primer clic, sin fricciones de chat. Les preparé una demo interactiva que integra reserva de mesa en la cima con información logística de subida y su carta gastronómica:\n👉 https://byte-bridge-tau.vercel.app/demos/humboldtrestaurant\n\n¿Les muestro en 5 minutos cómo les ahorraría horas de atención?",
    address: "Cima del Cerro Ávila (Parque Nacional Waraira Repano), Cota 2.140 m s.n.m., Caracas",
    mapsUrl: "https://maps.google.com/?q=Hotel+Humboldt+Caracas+Avila",
    hours: "Miércoles a Domingo: 11:30 AM – 11:00 PM",
    phone: "+58 424-1274645",
    instagramUrl: "https://www.instagram.com/humboldtrestaurant",
    bcvRate: 70.5,
    bookingType: "mountain-teleferico-booking",
    bookingTitle: "Reserva tu Mesa en la Cima & Acceso VIP",
    bookingSubtitle: "Coordina tu subida en teleférico desde Maripérez o traslados 4x4 y asegura tu mesa con vista",
    bookingOptions: [
      { id: "hum-pareja-mar", name: "Mesa Panorámica Vista al Mar (2 pax)", description: "Mesa junto al ventanal norte con vista al Caribe, fondue suizo y botella de vino.", priceUSD: 95, maxCapacity: 2 },
      { id: "hum-familiar-avila", name: "Almuerzo Familiar Humboldt (4-6 pax)", description: "Reserva de salón histórico con parrillada Mar y Tierra y fresas de Galipán con crema.", priceUSD: 180, maxCapacity: 6 },
      { id: "hum-pase-boite", name: "Cena & Noche de Copas en Salón La Boite (4 pax)", description: "Servicio nocturno con coctelería de autor y vista a las luces de Caracas.", priceUSD: 160, maxCapacity: 4 }
    ],
    categories: [
      { id: "montana", name: "Especialidades de Montaña & Fondue", description: "Platos reconfortantes a 2.140 metros de altura" },
      { id: "brasa", name: "Parrilla a la Brasa & Pescados", description: "Cortes importados y mariscos nobles" },
      { id: "horno", name: "Pastas Frescas & Pizzas a la Leña", description: "Hechas en casa al calor del horno" }
    ],
    menuItems: [
      { id: "hum-fondue", name: "Fondue de Queso Tradicional para Dos", description: "Emulsión de Gruyère y Emmental con vino blanco, kirsch, cubos de pan y embutidos.", priceUSD: 32, category: "montana", popular: true },
      { id: "hum-lomito", name: "Lomito al Grill con Hongos del Ávila", description: "Medallón a las brasas de carbón vegetal con salsa cremosa de hongos y puré trufado.", priceUSD: 26, category: "brasa", popular: true },
      { id: "hum-pappardelle", name: "Pappardelle al Ragú de Ternera", description: "Pasta fresca estirada en casa con ragú de cocción lenta de 6 horas y parmesano.", priceUSD: 18.5, category: "horno", popular: true },
      { id: "hum-pizza", name: "Pizza a la Leña Humboldt Especial", description: "Masa madre madurada al horno con prosciutto crudo, fior di latte y rúgula fresca.", priceUSD: 17, category: "horno", popular: true },
      { id: "hum-parrilla", name: "Parrilla Mar y Tierra Humboldt", description: "Lomito angus y langostinos gigantes a la parrilla con chimichurri andino.", priceUSD: 35, category: "brasa" },
      { id: "hum-fresas", name: "Sinfonía de Fresas de Galipán con Crema", description: "Fresas recién cosechadas con crema batida de montaña y merengue crujiente.", priceUSD: 8.5, category: "montana", popular: true }
    ],
    managerKpis: { activeReservations: 22, capacityPercentage: 96, todaySalesUSD: 4890, avgTicketUSD: 48 },
    sampleBookings: [
      { id: "HUM-1001", clientName: "Leopoldo López Gil", details: "Mesa Ventanal Mar Caribe (2 pax) · Almuerzo", time: "01:30 PM", status: "confirmada", pax: 2, totalUSD: 110 },
      { id: "HUM-1002", clientName: "Familia Zarikian", details: "Almuerzo Familiar en Salón (6 pax)", time: "02:00 PM", status: "en_mesa", pax: 6, totalUSD: 310 },
      { id: "HUM-1003", clientName: "Federico Machado", details: "Cena Mirador La Boite (4 pax)", time: "08:00 PM", status: "pendiente", pax: 4, totalUSD: 220 }
    ]
  }
];

// 2. Insertar los 10 objetos antes de "];" al final de businessDemos
const insertionPoint = content.lastIndexOf("];");
if (insertionPoint === -1) {
  console.error("No se encontró el cierre ]; en demosData.ts");
  process.exit(1);
}

const formattedBatch = batch9Demos.map((d) => JSON.stringify(d, null, 2)).join(",\n\n  ");
const newContent =
  content.slice(0, insertionPoint) +
  ",\n\n  // 🌟 DÍA 9 — 10 Soluciones Comerciales Top Caracas\n  " +
  formattedBatch +
  "\n" +
  content.slice(insertionPoint);

fs.writeFileSync(demosPath, newContent, "utf8");
console.log("✅ 10 Demos de Caracas (DÍA 9) agregadas con éxito a data/demosData.ts!");
