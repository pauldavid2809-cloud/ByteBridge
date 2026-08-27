"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { BusinessDemo } from "@/data/demosData";
import { AnimateOnScroll } from "@/components/demos/AnimateOnScroll";

type Props = {
  demo: BusinessDemo;
  onExploreBooking: () => void;
  onExploreMenu: () => void;
};

export function DemoIntro({ demo, onExploreBooking, onExploreMenu }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-zinc-950 py-16 sm:py-24">
      {/* Luz ambiental sutil basada en la paleta de la marca */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-full max-w-4xl rounded-full opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(ellipse at center, ${demo.palette.primary}, transparent 70%)`,
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Columna Izquierda: Narrativa del Negocio */}
          <div className="lg:col-span-7 space-y-6">
            <AnimateOnScroll delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ backgroundColor: demo.palette.accent }}
                />
                <span className="text-zinc-300">Conoce {demo.name}</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                La experiencia gastronómica y de entretenimiento{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, #FFFFFF 30%, ${demo.palette.accent} 100%)`,
                  }}
                >
                  que define a Maracaibo
                </span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                {demo.introText}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={onExploreBooking}
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-white shadow-lg transition-all active:scale-[0.97]"
                  style={{
                    backgroundColor: demo.palette.primary,
                    boxShadow: `0 6px 18px -4px ${demo.palette.glow}`,
                  }}
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Ver Planes & Reservar</span>
                </button>

                <button
                  onClick={onExploreMenu}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-zinc-200 backdrop-blur-md transition-all active:scale-[0.97] hover:bg-white/10 hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span>Explorar Menú Digital</span>
                </button>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Columna Derecha: Tarjetas de Estadísticas / Diferenciales */}
          <div className="lg:col-span-5 space-y-3">
            {demo.introStats.map((stat, idx) => (
              <AnimateOnScroll
                key={stat.label}
                delay={0.1 + idx * 0.08}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 p-5 backdrop-blur-md transition-all hover:border-white/20 hover:bg-zinc-900/90"
              >
                {/* Acento lateral de marca */}
                <div
                  className="absolute left-0 top-0 h-full w-1 transition-all group-hover:w-1.5"
                  style={{ backgroundColor: demo.palette.accent }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-zinc-400">
                      {stat.label}
                    </span>
                    <h3 className="mt-1 text-2xl font-black tracking-tight text-white sm:text-3xl">
                      {stat.value}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400">
                      {stat.detail}
                    </p>
                  </div>

                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-xs font-bold"
                    style={{
                      backgroundColor: `${demo.palette.primary}25`,
                      color: demo.palette.accent,
                    }}
                  >
                    0{idx + 1}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
