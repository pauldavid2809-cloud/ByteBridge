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
      className={`rounded-2xl border border-line bg-surface shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] ${
        interactive
          ? "transition-[border-color,transform,box-shadow] duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:hover:border-accent/40 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-lg [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-accent/5"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
