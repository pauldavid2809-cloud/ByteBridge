// Configuración centralizada de tiempos para el video "Antes y Después"
// Modifica estos valores para alargar o acortar cualquier escena con precisión matemática

export const TIMINGS = {
  // Escena 1: Hook inicial de impacto (0 a 3 segundos @ 30fps)
  hook: 90,

  // Escena 2: Simulación de WhatsApp con reservas perdidas (3 a 10.5 segundos)
  whatsappAntes: 225,

  // Escena 3: Transición de barrido "¿Así debería ser?" (10.5 a 12.5 segundos)
  transition: 60,

  // Escena 4: Mockup WebApp interactiva y Dashboard en tiempo real (12.5 a 22 segundos)
  webAppDespues: 285,

  // Escena 5: Cierre comercial y llamada a la acción byte/bridge (22 a 27 segundos)
  cta: 150,
};

// Duración total calculada dinámicamente: 810 frames (27.0 segundos @ 30fps)
export const TOTAL_FRAMES =
  TIMINGS.hook +
  TIMINGS.whatsappAntes +
  TIMINGS.transition +
  TIMINGS.webAppDespues +
  TIMINGS.cta;

// Paleta de colores moderna de alto contraste (Oscuro + Verde esmeralda + Azul eléctrico)
export const PALETTE = {
  bgDark: "#000000",
  bgChat: "#0b141a",
  bgSurface: "#0f172a",
  bgCard: "#1e293b",
  textWhite: "#ffffff",
  textMuted: "#94a3b8",
  accentEmerald: "#10b981",
  accentEmeraldLight: "#34d399",
  accentCyan: "#06b6d4",
  accentCyanLight: "#38bdf8",
  alertRed: "#ef4444",
  alertRedLight: "#fca5a5",
};
