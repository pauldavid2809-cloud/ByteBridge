"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { BusinessDemo } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
  onScrollToBooking: () => void;
  onScrollToMenu: () => void;
  onScrollToLocation: () => void;
};

export function DemoHero({
  demo,
  onScrollToBooking,
  onScrollToMenu,
  onScrollToLocation,
}: Props) {
  return (
    <section className="relative min-h-[580px] w-full overflow-hidden border-b border-white/10 bg-zinc-950 py-16 sm:min-h-[640px] sm:py-24">
      {/* Imagen de fondo con gradientes de marca */}
      <div className="absolute inset-0 z-0">
        <Image
          src={demo.coverImage}
          alt={`Ambiente de ${demo.name}`}
          fill
          className="object-cover opacity-25 brightness-75 filter"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-zinc-950"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 20%, ${demo.palette.glow}, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        {/* Badge de la marca */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-md"
        >
          <span className="text-xs font-semibold tracking-wide text-white">
            {demo.badgeText}
          </span>
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
              backgroundImage: `linear-gradient(135deg, #FFFFFF 0%, ${demo.palette.accent} 100%)`,
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
          className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg"
        >
          {demo.heroSubtitle}
        </motion.p>

        {/* Botones de acción rápida con microanimación táctil */}
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
            <span>🎟️</span>
            <span>Reservar con Pase QR</span>
          </button>

          <button
            onClick={onScrollToMenu}
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all active:scale-[0.97] hover:bg-white/20"
          >
            <span>📋</span>
            <span>Ver Menú Digital</span>
          </button>

          <button
            onClick={onScrollToLocation}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3.5 text-sm font-medium text-zinc-300 transition-all active:scale-[0.97] hover:text-white"
          >
            <span>📍</span>
            <span>Ubicación</span>
          </button>
        </motion.div>

        {/* Mini Highlights de Confianza */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-6 text-xs text-zinc-400"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span>
            <span>Confirmación Inmediata</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span>
            <span>Pase con Código QR</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span>
            <span>Pagos en USD & Bs (Tasa Oficial)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
