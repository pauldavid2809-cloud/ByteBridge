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
};

export const proyectos: Proyecto[] = [
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
    // ✏️ Guarda una captura en /public/proyectos/quiniela.png y cambia esto a "/proyectos/quiniela.png"
    imagen: "",
  },

  /* ✏️ CASO DE EJEMPLO 2 — reemplaza todos los textos por un proyecto real */
  {
    slug: "web-restaurante",
    nombre: "Web para restaurante (ejemplo)",
    resultado: "El menú dejó de ser un PDF pesado y las reservas llegan solas por WhatsApp",
    tags: ["Web completa", "Negocio local"],
    descripcion:
      "Sitio de 5 páginas para un restaurante: menú siempre actualizado, galería, ubicación y botón directo de reservas por WhatsApp.",
    problema:
      "El menú era un PDF que tardaba en abrir desde Instagram, los precios estaban desactualizados y cada reserva requería una conversación larga por mensajes.",
    solucion:
      "Una web rápida con el menú como página real (no PDF), fotos optimizadas, horarios y un botón de reserva que abre WhatsApp con un mensaje prellenado con fecha y número de personas.",
    resultadoDetalle:
      "El cliente actualiza precios en minutos, la página abre al instante desde el perfil de Instagram y las reservas llegan con los datos completos, sin ida y vuelta de mensajes.",
    metricas: [
      { valor: "5", etiqueta: "páginas con diseño propio" },
      { valor: "<1s", etiqueta: "de carga desde Instagram" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    imagen: "",
  },

  /* ✏️ CASO DE EJEMPLO 3 — reemplaza todos los textos por un proyecto real */
  {
    slug: "portal-pedidos",
    nombre: "Portal de pedidos mayoristas (ejemplo)",
    resultado: "Los pedidos pasaron del cuaderno a un portal con historial y precios por cliente",
    tags: ["Sistema a medida", "Portal con login"],
    descripcion:
      "Portal privado para una distribuidora: cada cliente mayorista entra con su usuario, ve sus precios y arma su pedido sin llamadas.",
    problema:
      "Los pedidos entraban por llamadas y notas de voz, se transcribían a un cuaderno y de ahí a facturación: errores de cantidades, precios viejos y horas perdidas cada semana.",
    solucion:
      "Un portal con login donde cada cliente ve el catálogo con sus precios asignados, arma el pedido y lo envía. El dueño recibe todo ordenado en un panel, con historial por cliente.",
    resultadoDetalle:
      "Se acabaron los errores de transcripción y las horas al teléfono. El dueño revisa los pedidos del día en una sola pantalla y el historial le sirve para planificar compras.",
    metricas: [
      { valor: "0", etiqueta: "errores de transcripción" },
      { valor: "1", etiqueta: "panel para todos los pedidos" },
    ],
    stack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    imagen: "",
  },
];

/** Busca un proyecto por su slug (usado por la ruta /proyectos/[slug]) */
export function getProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}
