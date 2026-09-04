"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { BusinessDemo } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
  onScrollToBooking: () => void;
  onScrollToMenu: () => void;
  onScrollToLocation: () => void;
  onOpenReel: () => void;
};

export function DemoHero({
  demo,
  onScrollToBooking,
  onScrollToMenu,
  onScrollToLocation,
  onOpenReel,
}: Props) {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[90dvh] w-full flex items-center overflow-hidden border-b border-white/10 bg-zinc-950 py-16 sm:py-24">
      {/* Imagen de fondo con gradientes de marca y ambient lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!imageError ? (
          <Image
            src={demo.coverImage}
            alt={demo.name}
            fill
            className="object-cover opacity-25 brightness-75 transition-opacity duration-700 filter"
            sizes="100vw"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(circle at 50% 30%, ${demo.palette.primary} 0%, transparent 70%), radial-gradient(circle at 80% 80%, ${demo.palette.accent} 0%, transparent 60%)`,
            }}
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-zinc-950"
          style={{
            backgroundImage: `radial-gradient(ellipse at 50% 15%, ${demo.palette.glow}, transparent 70%)`,
          }}
        />
        {/* Sutil cuadrícula decorativa */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        {/* Badges superiores: Marca y Trigger de Reel Promocional */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-wrap items-center justify-center gap-2.5"
        >
          {/* Badge de Legitimidad ByteBridge */}
          <a
            href="https://byte-bridge-tau.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium text-zinc-400 backdrop-blur-md transition-colors hover:text-zinc-200 hover:border-white/20"
          >
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>Propuesta diseñada por <span className="font-semibold text-zinc-300">ByteBridge</span></span>
          </a>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: demo.palette.accent }}
            />
            <span className="text-xs font-semibold tracking-wide text-white">
              {demo.badgeText}
            </span>
          </div>

          <button
            onClick={onOpenReel}
            className="group relative inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-gradient-to-r from-amber-500/20 via-amber-400/25 to-amber-500/20 px-4 py-1.5 text-xs font-black text-amber-300 shadow-lg shadow-amber-500/20 backdrop-blur-md transition-all active:scale-95 hover:scale-105 hover:border-amber-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
            </span>
            <span>🎥 Ver Reel Comercial Listo (15s) ▶</span>
          </button>
        </motion.div>

        {/* Título Principal de la Demo */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {demo.heroTitle}{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, #FFFFFF 20%, ${demo.palette.accent} 100%)`,
            }}
          >
            {demo.heroHighlight}
          </span>
        </motion.h1>

        {/* Subtítulo descriptivo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg"
        >
          {demo.heroSubtitle}
        </motion.p>

        {/* Botones de acción rápida con microanimación táctil y SVGs limpios */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={onScrollToBooking}
            className="flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-xl transition-all active:scale-[0.97]"
            style={{
              backgroundColor: demo.palette.primary,
              boxShadow: `0 10px 25px -5px ${demo.palette.glow}`,
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
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
              />
            </svg>
            <span>Reservar con Pase QR</span>
          </button>

          <button
            onClick={onScrollToMenu}
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all active:scale-[0.97] hover:bg-white/20"
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <span>Ver Menú Digital</span>
          </button>

          <button
            onClick={onScrollToLocation}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3.5 text-sm font-medium text-zinc-300 transition-all active:scale-[0.97] hover:text-white"
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Ubicación</span>
          </button>
        </motion.div>

        {/* Badges de Confianza Contextuales y Personalizados por Negocio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 border-t border-white/10 pt-6 text-xs text-zinc-400"
        >
          {demo.trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5"
                style={{ color: demo.palette.accent }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-zinc-300">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
