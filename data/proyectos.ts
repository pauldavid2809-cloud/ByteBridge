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
