/**
 * ============================================================
 *  CASOS / PROYECTOS — ✏️ EDITA AQUÍ tu contenido
 *
 *  Cada objeto de este array genera:
 *   - una tarjeta en la sección "Proyectos" de la home
 *   - su propia página en /proyectos/[slug]
 *
 *  No necesitas tocar ningún componente: solo textos de aquí.
 *  Para agregar un caso nuevo, copia un objeto completo y
 *  cambia el slug (minúsculas y guiones, será la URL).
 *
 *  Imágenes: sube tu captura a /public/proyectos/ y pon la ruta
 *  en `imagen` (ej. "/proyectos/quiniela.png"). Si la dejas
 *  vacía (""), se muestra un placeholder con el logo.
 * ============================================================
 */

export type Metrica = {
  /** Cifra o dato corto, ej. "120+" */
  valor: string;
  /** Qué significa, ej. "usuarios registrados" */
  etiqueta: string;
};

export type ModuloRecurso = {
  nombre: string;
  url: string;
  descripcion: string;
};

export type CredencialesDemo = {
  url?: string;
  email: string;
  password: string;
  nota?: string;
};

export type Proyecto = {
  /** URL del caso: /proyectos/[slug] */
  slug: string;
  nombre: string;
  /** Una línea de resultado — se muestra en la tarjeta del grid */
  resultado: string;
  /** Tipo de proyecto — se muestran como etiquetas en la tarjeta */
  tags: string[];
  /** Intro corta en la página del caso (1-2 oraciones) */
  descripcion: string;
  /** Bloque "El problema" */
  problema: string;
  /** Bloque "La solución" */
  solucion: string;
  /** Bloque "El resultado" */
  resultadoDetalle: string;
  /** Cifras destacadas del resultado (opcional, máx. 3) */
  metricas?: Metrica[];
  /** Tecnologías usadas */
  stack: string[];
  /** Ruta de la imagen en /public, o "" para el placeholder */
  imagen: string;
  /** URL pública del proyecto en producción (opcional) — muestra el botón "Ver demo en vivo" */
  demo?: string;
  /** URL del repositorio en GitHub (opcional) — muestra el botón "Ver código en GitHub" */
  github?: string;
  /** Credenciales de acceso de prueba (opcional) */
  credencialesDemo?: CredencialesDemo;
  /** Módulos y recursos adicionales con enlaces directos (opcional) */
  modulos?: ModuloRecurso[];
  /** Lista de características destacadas (opcional) */
  caracteristicas?: string[];
};

export const proyectos: Proyecto[] = [
  {
    slug: "canon-ia",
    nombre: "CanonIA — Asistente de Derecho Canónico",
    resultado: "Asistente IA especializado en Derecho Canónico con citación de 1.752 cánones, análisis matrimonial y penal",
    tags: ["Inteligencia Artificial", "LegalTech Eclesiástico", "Next.js & TypeScript"],
    descripcion:
      "Plataforma de inteligencia artificial jurídica especializada en el Derecho Canónico de la Iglesia Católica: asistente conversacional con corpus normativo completo (CIC 1983, CCEO, Pascite Gregem Dei, Mitis Iudex), análisis de nulidades matrimoniales y dictámenes estructurados.",
    problema:
      "Los sacerdotes, jueces diocesanos, cancilleres, abogados canonistas y estudiantes enfrentan horas de búsqueda dispersa entre códigos, constituciones apostólicas y jurisprudencia rotaica, mientras que los modelos de IA genéricos sufren alucinaciones graves al mezclar leyes civiles seculares con la doctrina canónica.",
    solucion:
      "Un asistente de IA canónico especializado y libre de alucinaciones: interfaz refinada de estilo litúrgico-académico, motor de consulta indexado sobre los 1.752 cánones del CIC y normas complementarias, módulos guiados para estudio de causales de nulidad matrimonial (c. 1095, 1097, 1101) y derecho penal canónico, con generación de dictámenes formales (Vistos, Considerandos y Cánones aplicables).",
    resultadoDetalle:
      "Reducción del 80% en el tiempo de fundamentación canónica inicial para consultas de curia y tribunal, precisión absoluta en la citación de cánones con parágrafos concordados y una herramienta de consulta accesible 24/7 para diócesis de habla hispana.",
    metricas: [
      { valor: "1.752", etiqueta: "cánones del CIC 1983 indexados y concordados" },
      { valor: "100%", etiqueta: "respuestas fundamentadas en normativa eclesiástica" },
      { valor: "< 1s", etiqueta: "carga instantánea con interfaz académica responsive" },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
      "Prompt Engineering Canónico",
      "Lucide Icons",
      "Vercel",
    ],
    imagen: "/proyectos/canon-ia.png",
    demo: "https://canon-ia.vercel.app/",
    modulos: [
      {
        nombre: "Asistente Conversacional Canónico",
        url: "https://canon-ia.vercel.app/",
        descripcion: "Chat inteligente especializado en exégesis, normativa sacramental y consultas de curia.",
      },
      {
        nombre: "Módulo de Nulidades Matrimoniales",
        url: "https://canon-ia.vercel.app/",
        descripcion: "Guía de análisis de causales de nulidad según cánones 1055-1165 y reformas del Papa Francisco.",
      },
      {
        nombre: "Módulo de Derecho Penal y Sanciones",
        url: "https://canon-ia.vercel.app/",
        descripcion: "Tipificación de delitos eclesiásticos, penas latae/ferendae sententiae y reforma Pascite Gregem Dei.",
      },
      {
        nombre: "Corpus Canónico & Citación Exacta",
        url: "https://canon-ia.vercel.app/",
        descripcion: "Citación taxativa con parágrafos, incisos y concordancias normativas del CIC y CCEO.",
      },
    ],
    caracteristicas: [
      "⚖️ Corpus Canónico Completo: Indexación integral del Código de Derecho Canónico de 1983 (1.752 cánones), CCEO y reformas apostólicas.",
      "💍 Evaluador de Causales Matrimoniales: Diagnóstico guiado de incapacidad consensual (c. 1095), simulación (c. 1101), error (c. 1097) y vicios de consentimiento.",
      "📜 Dictámenes con Estructura Jurídica: Redacción formal con antecedentes, considerandos de derecho, cánones aplicables y conclusiones pastorales.",
      "🛡️ Cero Alucinaciones Seculares: Reglas deontológicas canónicas que impiden la contaminación con ordenamientos jurídicos civiles.",
      "🏛️ UI Sacro-Minimalista: Diseño solemne con tonos borgoña, oro litúrgico y tipografía académica optimizada para la lectura.",
      "⚡ Carga Instantánea & PWA: Rendimiento ultra rápido en teléfonos inteligentes, tablets y ordenadores de despacho.",
    ],
  },
  {
    slug: "pau-cookies",
    nombre: "Pau Cookies",
    resultado: "E-commerce gastronómico con Box Builder interactivo y 100% pedidos directos por WhatsApp",
    tags: ["E-Commerce Gastronómico", "Box Builder Interactivo", "WhatsApp Commerce"],
    descripcion:
      "Plataforma e-commerce y asistente interactivo para pastelería boutique: constructor visual de cajas de galletas personalizadas (2, 4, 6 y 12 unidades), carrito dinámico y checkout automatizado hacia WhatsApp.",
    problema:
      "La venta de repostería personalizada por mensajes de Instagram o chats generaba constantes confusiones en las combinaciones de sabores, pedidos con cajas incompletas, demoras de más de 10 minutos por cliente calculando totales y fricción en la toma de datos de entrega.",
    solucion:
      "Un e-commerce mobile-first con 'Box Builder' guiado paso a paso: el cliente selecciona el tamaño de caja, escoge sus sabores con validación de cupos en tiempo real, añade dedicatoria de regalo y genera un pedido estandarizado directo al WhatsApp del negocio con el desglose exacto, fecha de entrega y dirección.",
    resultadoDetalle:
      "Eliminación del 100% de errores en la toma de pedidos de cajas personalizadas, reducción del tiempo de atención por cliente a solo segundos de confirmación, y aumento notable del ticket promedio gracias a la facilidad visual de armar packs y combos de regalo.",
    metricas: [
      { valor: "100%", etiqueta: "pedidos estructurados sin errores de sabores" },
      { valor: "1 clic", etiqueta: "checkout automatizado directo a WhatsApp" },
      { valor: "< 1s", etiqueta: "carga rápida y navegación fluida en móviles" },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WhatsApp API",
      "Vercel",
    ],
    imagen: "/proyectos/pau-cookies.png",
    demo: "https://pau-cookies.vercel.app/",
    modulos: [
      {
        nombre: "Catálogo Gourmet & Fichas de Producto",
        url: "https://pau-cookies.vercel.app/",
        descripcion: "Menú interactivo con fotos HD, ingredientes, alérgenos y precios en tiempo real.",
      },
      {
        nombre: "Box Builder / Constructor de Cajas",
        url: "https://pau-cookies.vercel.app/",
        descripcion: "Asistente paso a paso para armar cajas de galletas con validación de cupos en vivo.",
      },
      {
        nombre: "Carrito Dinámico & Persistente",
        url: "https://pau-cookies.vercel.app/",
        descripcion: "Drawer lateral con desglose de ítems, cálculo de subtotal y guardado en localStorage.",
      },
      {
        nombre: "Checkout WhatsApp Automatizado",
        url: "https://pau-cookies.vercel.app/",
        descripcion: "Generador de mensaje con detalle de sabores, método de entrega y notas de regalo.",
      },
    ],
    caracteristicas: [
      "🍪 Box Builder Wizard: Selector interactivo paso a paso para armar cajas personalizadas de galletas con contadores en tiempo real y bloqueo automático al completar el cupo.",
      "✨ Catálogo Sensorial con Fichas Gourmet: Visualización detallada de sabores, descripciones apetecibles, alérgenos e ingredientes de alta calidad.",
      "🎁 Personalización de Regalos & Dedicatorias: Módulo integrado para añadir mensajes especiales, tarjetas de felicitación y selección de empaques.",
      "🛒 Carrito de Compras Lateral (Drawer): Gestión fluida de packs individuales y combinados con persistencia en localStorage y cálculo instantáneo.",
      "📲 Checkout Inteligente por WhatsApp: Conversión directa sin formularios extensos ni registros obligatorios, generando el mensaje de pedido estructurado en 1 clic.",
      "⚡ Experiencia Mobile-First de Carga Instantánea: Diseñado específicamente para clientes provenientes de redes sociales con carga en menos de 1 segundo.",
    ],
  },
  {
    slug: "arquidiocesis-maracaibo",
    nombre: "Arquidiócesis de Maracaibo",
    resultado: "Portal institucional centralizado, directorio interactivo de 70+ parroquias y canal de comunicación eclesiástica para 1.5M+ de fieles",
    tags: ["Portal Institucional", "Directorio Eclesiástico", "Arquitectura Web"],
    descripcion:
      "Portal web oficial y hub de comunicación institucional para la Arquidiócesis de Maracaibo: directorio interactivo de parroquias y clero, sala de prensa arzobispal, comisiones pastorales y trámites eclesiásticos.",
    problema:
      "La dispersión territorial de más de 70 parroquias en el Estado Zulia dificultaba el acceso de los feligreses a horarios de misas y trámites sacramentales, mientras que los comunicados y la labor social de Cáritas carecían de un repositorio digital unificado de alta disponibilidad.",
    solucion:
      "Un portal web institucional moderno de alto rendimiento: catálogo interactivo de zonas pastorales con búsqueda de parroquias y sacerdotes, sala de prensa con categorización de noticias y decretos del Arzobispado, módulo de servicios canónicos de cancillería y difusión de las obras sociales de Cáritas Maracaibo.",
    resultadoDetalle:
      "100% de la estructura arquidiocesana centralizada en un portal accesible y mobile-first, facilitando la localización inmediata de templos para más de 1.5 millones de personas, agilizando la difusión de comunicados oficiales y fortaleciendo la identidad digital de la Iglesia local.",
    metricas: [
      { valor: "70+", etiqueta: "parroquias y templos catalogados por zonas" },
      { valor: "100%", etiqueta: "centralización de comunicados y gobierno pastoral" },
      { valor: "< 1s", etiqueta: "carga rápida y navegación optimizada para móviles" },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Headless Architecture",
      "Vercel CDN",
    ],
    imagen: "/proyectos/arquidiocesis-maracaibo.png",
    demo: "https://arquimcbo.com/",
    modulos: [
      {
        nombre: "Directorio Parroquial & Zonas Pastorales",
        url: "https://arquimcbo.com/",
        descripcion: "Buscador y catálogo de 70+ parroquias con horarios de misas, ubicación y párrocos.",
      },
      {
        nombre: "Sala de Prensa & Magisterio Arzobispal",
        url: "https://arquimcbo.com/",
        descripcion: "Decretos oficiales, cartas pastorales, noticias y comunicados del Arzobispo Metropolitano.",
      },
      {
        nombre: "Curia, Cancillería y Trámites Canónicos",
        url: "https://arquimcbo.com/",
        descripcion: "Guía de requisitos sacramentales, legalización de partidas y tribunal eclesiástico.",
      },
      {
        nombre: "Cáritas & Comisiones Pastorales",
        url: "https://arquimcbo.com/",
        descripcion: "Espacio de acción humanitaria, Pastoral Juvenil, Pastoral Familiar y voluntariado.",
      },
    ],
    caracteristicas: [
      "🏛️ Directorio Diocesano Completo: Catálogo estructurado de más de 70 parroquias organizadas por zonas pastorales con datos de contacto y horarios litúrgicos.",
      "📜 Magisterio y Sala de Prensa Oficial: Publicación inmediata de cartas pastorales, nombramientos del clero, comunicados de la curia y galerías fotográficas.",
      "✝️ Guía Sacramental y Servicios de Cancillería: Información centralizada sobre requisitos para bautismos, matrimonios, confirmaciones y gestiones documentales.",
      "🤝 Integración de Cáritas Maracaibo: Visibilidad de programas de nutrición, jornadas médicas y campañas solidarias para captación de donaciones.",
      "📱 Interfaz Mobile-First de Alta Disponibilidad: Optimización para consumo masivo desde teléfonos celulares con tiempos de respuesta instantáneos.",
    ],
  },
  {
    slug: "parrandon-navideno",
    nombre: "Parrandón Navideño",
    resultado: "Ticketing 2D, cobro multimoneda y logística en tiempo real para 500+ asistentes sin duplicidad",
    tags: ["Ticketing 2D", "Pagos Multimoneda", "Logística en Vivo"],
    descripcion:
      "Plataforma web de comercio electrónico y gestión integral de eventos para la Arquidiócesis de Maracaibo: croquis 2D de 500 asientos, pasarela multimoneda con PayPal y tasa BCV, terminal de venta para seminaristas, escáner QR de acceso y pantalla táctil para cocina.",
    problema:
      "La venta manual y en papel de más de 500 entradas para el evento benéfico anual generaba riesgo crítico de duplicidad de asientos, errores en cobros multimoneda (Bs, USD, PayPal, Zelle), cuellos de botella en el acceso y demoras en el despacho de más de 500 cenas en cocina.",
    solucion:
      "Una plataforma a medida orientada a la experiencia de usuario (UX): croquis 2D interactivo con selección de 50 mesas y 500 sillas en tiempo real, pasarela multimoneda con verificación real de fondos vía PayPal Smart Buttons y tasa Euro BCV en vivo, terminal móvil para seminaristas con despacho de pases por WhatsApp en 1 toque, lector óptico continuo para control de acceso en puerta, pantalla táctil de cocina con despacho por mesa de 10 platos y panel administrativo financiero.",
    resultadoDetalle:
      "100% de trazabilidad de asientos con cero duplicidad, reducción del 90% en tiempos de entrega de pases digitales con QR vía WhatsApp, y despacho fluido de más de 500 platos navideños con control digital en cocina y puerta.",
    metricas: [
      { valor: "500+", etiqueta: "asientos y pases QR gestionados en vivo" },
      { valor: "100%", etiqueta: "trazabilidad y cero duplicidad de sillas" },
      { valor: "0 esperas", etiqueta: "despacho automático de entradas por WhatsApp" },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "PayPal Smart Buttons SDK",
      "Canvas API (QR Generator)",
      "WhatsApp API (Baileys)",
      "Vercel",
    ],
    imagen: "/proyectos/parrandon-navideno.png",
    demo: "https://parrandon.vercel.app/",
    credencialesDemo: {
      url: "https://parrandon.vercel.app/admin",
      email: "Acceso con Clave Maestra",
      password: "#Seminario31",
      nota: "Clave de acceso al Panel de Administración y Reportes Financieros",
    },
    modulos: [
      {
        nombre: "Pasarela de Compra & Croquis 2D",
        url: "https://parrandon.vercel.app/comprar",
        descripcion: "Selección interactiva de 500 sillas, pagos multimoneda (Pago Móvil, PayPal, Zelle) y emisión QR.",
      },
      {
        nombre: "Portal de Ventas en Parroquias (Seminaristas)",
        url: "https://parrandon.vercel.app/seminaristas",
        descripcion: "Terminal móvil para seminaristas con tasa oficial y despacho de pases por WhatsApp en 1 toque.",
      },
      {
        nombre: "Estación de Cocina y Despacho",
        url: "https://parrandon.vercel.app/cocina",
        descripcion: "Pantalla táctil para despacho de 10 platos navideños por mesa y métricas en vivo.",
      },
      {
        nombre: "Escáner de Control de Acceso en Puerta",
        url: "https://parrandon.vercel.app/escanear",
        descripcion: "Lector óptico continuo de códigos QR con validación antifraude en milisegundos.",
      },
      {
        nombre: "Panel de Administración & Finanzas",
        url: "https://parrandon.vercel.app/admin",
        descripcion: "Dashboard financiero, conciliación bancaria, reportes y ajuste de tasa oficial.",
      },
      {
        nombre: "Hub Central de Administración Interna",
        url: "https://parrandon.vercel.app/administracion-interna",
        descripcion: "Directorio seguro que unifica todas las herramientas operativas del evento.",
      },
      {
        nombre: "Catálogo de 500 Pases Digitales con QR",
        url: "https://parrandon.vercel.app/entradas_500_qr/index.html",
        descripcion: "Visor de las 500 entradas oficiales generadas en formato Boarding Pass institucional.",
      },
    ],
    caracteristicas: [
      "🎟️ Croquis 2D Interactivo: Selección visual de 50 mesas y 500 sillas numeradas con bloqueo de asientos en tiempo real.",
      "💳 Pasarela Multimoneda: Pagos con PayPal Smart Buttons (verificación real de fondos), Pago Móvil conectado a tasa Euro BCV, Zelle y Binance Pay.",
      "📲 Despacho Automatizado por WhatsApp: Envío instantáneo de pases digitales con QR único por asiento tanto individuales como paquetes familiares.",
      "⛪ Terminal Móvil para Seminaristas (/seminaristas): Punto de venta optimizado para comercialización presencial en parroquias.",
      "🍽️ Sistema de Despacho en Cocina (/cocina): Control táctil por mesa completa (10 platos navideños por toque) y contadores de avance.",
      "⚡ Escáner de Puerta Antifraude (/escanear): Validación en milisegundos con alertas visuales y sonoras contra pases duplicados o falsificados.",
      "📊 Dashboard Financiero y Conciliación (/admin): Reportes de recaudación en USD y Bs, porcentaje de aforo y listas de asistentes por mesa.",
    ],
  },
  {
    slug: "psicoconsulta-online",
    nombre: "PsicoConsulta Online",
    resultado: "SaaS integral de gestión clínica, portal de cobro tokenizado y citas automatizadas por WhatsApp",
    tags: ["SaaS & Dashboard", "Salud Mental", "Supabase Auth"],
    descripcion:
      "Plataforma web y sistema de gestión integral para profesionales de la salud mental: landing de captación, portal de pago tokenizado con copiado táctil, verificación de comprobantes y panel administrativo.",
    problema:
      "Los psicólogos y terapeutas independientes pierden horas coordinando citas por mensajes, verificando capturas de transferencias a mano, calculando conversiones de divisas y enviando enlaces de Google Meet de forma manual.",
    solucion:
      "Un SaaS a medida desarrollado con Next.js y Supabase que centraliza todo el flujo: Landing page de captación con agendamiento rápido, portal de pago tokenizado (/pay/[token]) con tasa oficial en tiempo real, copiado en 1 toque de datos bancarios y subida directa de comprobantes a Storage, y un panel administrativo protegido con métricas financieras, visor de comprobantes, control de estados de citas y envío automático de salas de Google Meet por WhatsApp.",
    resultadoDetalle:
      "La especialista redujo a cero el tiempo administrativo manual por paciente, eliminó errores en la verificación de pagos y ofrece una experiencia digital moderna y confiable tanto para pacientes locales como internacionales.",
    metricas: [
      { valor: "100%", etiqueta: "automatización de cobros y enlaces Meet" },
      { valor: "1 toque", etiqueta: "copiado interactivo de datos de pago" },
      { valor: "Realtime", etiqueta: "conversión a tasa oficial y auth Supabase" },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase (PostgreSQL & Auth)",
      "Supabase Storage",
      "Google Meet API",
      "Vercel",
    ],
    imagen: "/proyectos/psicoconsulta-online.png",
    demo: "https://psiccarmen-jordan.vercel.app/",
    github: "https://github.com/pauldavid2809-cloud/CarmenJordan",
    credencialesDemo: {
      url: "https://psiccarmen-jordan.vercel.app/login",
      email: "demo@psicologia.com",
      password: "Demo123456*",
      nota: "Credenciales de prueba para explorar el Dashboard Administrativo",
    },
    modulos: [
      {
        nombre: "Sitio Web Principal (Landing Page)",
        url: "https://psiccarmen-jordan.vercel.app/",
        descripcion: "Presentación de servicios, especialidades y captación de pacientes.",
      },
      {
        nombre: "Demo Portal de Pago del Paciente",
        url: "https://psiccarmen-jordan.vercel.app/pay/983c2a17b8c710817daf428431e95ab7",
        descripcion: "Experiencia del paciente con copiado en 1 toque, conversión en vivo y subida de comprobante.",
      },
      {
        nombre: "Panel Administrativo (Dashboard)",
        url: "https://psiccarmen-jordan.vercel.app/login",
        descripcion: "Gestión de citas, visor de comprobantes de pago y métricas de ingresos.",
      },
      {
        nombre: "Código Fuente en GitHub",
        url: "https://github.com/pauldavid2809-cloud/CarmenJordan",
        descripcion: "Repositorio con la arquitectura Next.js 16, Supabase y TypeScript.",
      },
    ],
    caracteristicas: [
      "🌸 Landing Page de Alta Conversión: Presentación profesional con diseño mobile-first y agendamiento directo por WhatsApp.",
      "💳 Portal de Pago Tokenizado (/pay/[token]): Acceso seguro sin registro, conversión en tiempo real a tasa oficial y copiado interactivo en 1 toque de datos bancarios.",
      "📁 Subida y Almacenamiento de Comprobantes: Carga directa de comprobantes (PNG, JPG, PDF) con almacenamiento seguro en Supabase Storage.",
      "🔐 Panel Administrativo Integral: Dashboard con métricas de ingresos, citas del día, visor de capturas y aprobación/rechazo justificado.",
      "🎥 Salas de Google Meet Automáticas: Generación y asignación de salas virtuales dinámicas enviadas al WhatsApp del paciente al aprobarse el pago.",
      "📱 Interfaz 100% Móvil: Drawer y menú responsivo para administrar la consulta desde cualquier teléfono inteligente.",
    ],
  },
  {
    slug: "taqueria-digital",
    nombre: "Taquería Digital",
    resultado: "100% de pedidos y reservas por WhatsApp con 0% comisiones a apps intermediarias",
    tags: ["WebApp PWA", "Sistema a medida", "Restaurantes"],
    descripcion:
      "Plataforma webapp completa (PWA) para taquerías y restaurantes con servicio nocturno: Taco Builder interactivo, reservas VIP 2D, pedidos directos por WhatsApp con geolocalización GPS y portal para repartidores.",
    problema:
      "Las taquerías y restaurantes con servicio nocturno pierden entre el 20% y 30% de sus ingresos en comisiones cobradas por apps intermediarias (Rappi, Didi, UberEats), además de sufrir demoras en la toma de pedidos telefónicos y confusiones en las direcciones de entrega.",
    solucion:
      "Una WebApp PWA a medida que elimina intermediarios: Menú digital interactivo con Taco Builder Wizard (personalización en tiempo real con cálculo dinámico), croquis interactivo 2D de reservas por zonas con estados en vivo y código QR, captura automática de geolocalización GPS del cliente para trazar la ruta en Google Maps/Waze, notificaciones automáticas por WhatsApp con código #TAQ-XXXX, portal exclusivo para repartidores (/delivery.html) con control de fases en 1 clic y muro de reseñas sincronizado en tiempo real con Supabase.",
    resultadoDetalle:
      "El restaurante canaliza el 100% de sus pedidos de domicilio y reservas de forma directa sin comisiones a terceros. Los repartidores navegan con coordenadas GPS exactas y la cocina despacha con comandas estandarizadas, aumentando la velocidad de entrega y la rentabilidad del negocio.",
    metricas: [
      { valor: "0%", etiqueta: "comisiones pagadas a apps intermediarias" },
      { valor: "100%", etiqueta: "pedidos directos por WhatsApp con GPS" },
      { valor: "4 en 1", etiqueta: "webapp cliente, repartidores, reservas 2D y PDF" },
    ],
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "Supabase Cloud",
      "Geolocation API",
      "Service Worker (PWA)",
      "PDFKit",
      "Vercel",
    ],
    imagen: "/proyectos/taqueria-digital.png",
    demo: "https://la-unica-taqueria.vercel.app/",
    github: "https://github.com/pauldavid2809-cloud/LaUnicaTaqueria",
    modulos: [
      {
        nombre: "Webapp Cliente (Principal)",
        url: "https://la-unica-taqueria.vercel.app/",
        descripcion: "Menú interactivo, Taco Builder, Reservas 2D y Pedidos por WhatsApp.",
      },
      {
        nombre: "Portal Secreto de Repartidores",
        url: "https://la-unica-taqueria.vercel.app/delivery.html",
        descripcion: "Dashboard para domiciliarios con navegación GPS y cambio de fases.",
      },
      {
        nombre: "Manual Operativo PDF (Ejecutivo)",
        url: "https://la-unica-taqueria.vercel.app/manual.html",
        descripcion: "Documento de presentación técnica y comercial para dueños.",
      },
      {
        nombre: "Código Fuente en GitHub",
        url: "https://github.com/pauldavid2809-cloud/LaUnicaTaqueria",
        descripcion: "Repositorio oficial con todo el código fuente del proyecto.",
      },
    ],
    caracteristicas: [
      "🌮 Menú Digital & Checkout WhatsApp: Menú en vivo con fotos HD, carrito inteligente con propinas para taqueros (0%, 10%, 15%, 20%) y tracking #TAQ-XXXX.",
      "⚙️ Taco Builder Wizard: Asistente interactivo paso a paso para armar tacos (Tortilla → Proteína → Salsa → Extras) con cálculo en tiempo real.",
      "🎟️ Croquis 2D de Reservas VIP: Mapa interactivo (Barra Neón, Terraza, Salón) con estados en vivo y generación de Pase VIP con QR.",
      "📍 Geolocalización GPS en Checkout: Captura de coordenadas del cliente con enlace directo a Google Maps y Waze para el domiciliario.",
      "🤖 Notificaciones Automatizadas: Envío de actualizaciones al WhatsApp del cliente (Recibido, En Cocina, En Camino 🛵, Entregado 🌮).",
      "🛵 Dashboard de Repartidores (/delivery.html): Pantalla privada para domiciliarios con botón de navegación GPS y control de fases en 1 clic.",
      "⭐️ Mural de Reseñas & PWA: Reseñas en vivo sincronizadas con Supabase y webapp instalable en Android e iPhone.",
    ],
  },
  {
    slug: "quiniela-mundial-2026",
    nombre: "Quiniela Mundial 2026",
    resultado: "104 partidos, puntos y ranking calculados solos: cero planillas, cero disputas",
    tags: ["Sistema a medida", "App web"],
    descripcion:
      "App de predicciones construida desde cero para el Mundial 2026: cada participante predice marcadores exactos, el sistema puntúa solo y el ranking se actualiza en vivo durante todo el torneo.",
    problema:
      "Las quinielas entre amigos y comunidades se manejaban con planillas de Excel y capturas por WhatsApp: resultados cargados a mano, errores de cálculo, discusiones por puntos y predicciones enviadas después de empezado el partido.",
    solucion:
      "Una app web a medida con login propio, predicciones de marcador exacto para los 72 partidos de la fase de grupos y los 32 de la eliminatoria, y una lógica de puntos hecha a la medida: acertar el ganador o empate da los puntos base de la fase, y clavar el marcador exacto suma puntos extra. Cada fase se bloquea automáticamente al arrancar (nadie puede predecir tarde), el ranking se recalcula solo, hay trivia para mantener a la gente jugando entre jornadas y un panel de administración para gestionar todo el torneo. Construida con Next.js y Supabase.",
    resultadoDetalle:
      "Los participantes juegan desde el teléfono, cada partido finalizado marca al instante quién acertó y cuántos puntos ganó, y no hay ni una disputa por resultados: las reglas las aplica el sistema, no una persona con una planilla. El ranking en vivo mantiene a la comunidad entrando todos los días del Mundial.",
    metricas: [
      { valor: "104", etiqueta: "partidos con predicción y puntaje automático" },
      { valor: "0", etiqueta: "planillas de Excel ni cálculos a mano" },
      { valor: "En vivo", etiqueta: "ranking actualizado tras cada partido" },
    ],
    stack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    imagen: "/proyectos/quiniela-mundial-2026.png",
    demo: "https://quiniela-mundial-sand.vercel.app/",
  },
];

/** Busca un proyecto por su slug (usado por la ruta /proyectos/[slug]) */
export function getProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}
