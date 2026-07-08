"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

/**
 * Entrada sutil al hacer scroll: fade + leve desplazamiento hacia arriba.
 * - Se dispara UNA sola vez (no se repite al volver a subir).
 * - Con prefers-reduced-motion el contenido se muestra sin animación.
 * - Manipula clases directamente en el DOM (cero re-renders de React).
 */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mostrar = () => {
      el.classList.remove("translate-y-6", "opacity-0");
      el.classList.add("translate-y-0", "opacity-100");
    };

    // Usuario prefiere menos movimiento → mostrar directo, sin animar
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      mostrar();
      return;
    }

    // Si el elemento ya está en pantalla al cargar, no animar (evita
    // parpadeos en lo que está above-the-fold)
    if (el.getBoundingClientRect().top < window.innerHeight) {
      mostrar();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          mostrar();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`translate-y-6 opacity-0 transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${className}`}
    >
      {children}
    </div>
  );
}
