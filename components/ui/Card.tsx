import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Activa un hover sutil (borde verde + elevación) para tarjetas clicables */
  interactive?: boolean;
};

/**
 * Superficie base del sitio: fondo apenas más claro que el body,
 * borde sutil, esquinas amplias. Minimalista, mucho aire.
 */
export function Card({ children, className = "", interactive = false }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-line bg-surface ${
        interactive
          ? "transition-colors duration-200 hover:border-accent/40"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
