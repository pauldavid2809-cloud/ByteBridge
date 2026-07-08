/**
 * ============================================================
 *  SOBRE MÍ — ✏️ EDITA AQUÍ tus datos personales
 *
 *  Foto: guarda tu foto real en /public/sobre-mi.jpg
 *  y cambia `foto` a "/sobre-mi.jpg". Si la dejas vacía (""),
 *  se muestra un placeholder con el logo.
 * ============================================================
 */

export const sobreMi = {
  // ✏️ Tu nombre completo
  nombre: "Paul",
  rol: "Desarrollador full stack",
  ubicacion: "Venezuela · trabajo remoto",
  /** 2-3 líneas humanas y directas — nada de CV corporativo */
  bio: [
    "Construyo webs y sistemas desde cero, sin plantillas. Me contratas y hablas directo conmigo: la persona que diseña, programa y entrega tu proyecto.",
    "Esta misma página es mi carta de presentación: fíjate en lo rápido que carga. Así trabajo.",
  ],
  /** Tecnologías que se muestran como etiquetas */
  stack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
  /** Ruta de tu foto en /public, o "" para el placeholder */
  foto: "",
};
