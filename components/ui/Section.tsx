import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type SectionProps = {
  /** id usado por las anclas del menú (ej. "proyectos", "servicios") */
  id?: string;
  /** Etiqueta corta sobre el título, en verde (ej. "Proyectos") */
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Contenedor estándar de cada sección de la página:
 * ancho máximo, padding responsive y encabezado opcional.
 */
export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      {/* Entrada sutil al hacer scroll (una sola vez, respeta reduced-motion) */}
      <Reveal className="mx-auto w-full max-w-6xl">
        {(eyebrow || title || subtitle) && (
          <header className="mb-12 max-w-2xl md:mb-16">
            {eyebrow && (
              <p className="mb-3 font-display text-sm font-medium tracking-widest text-accent uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
          </header>
        )}
        {children}
      </Reveal>
    </section>
  );
}
