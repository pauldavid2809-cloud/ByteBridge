"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { BusinessDemo, BCV_RATE, CurrencyMode } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
  currency: CurrencyMode;
  onToggleCurrency: () => void;
  isManagerMode: boolean;
  onToggleManagerMode: () => void;
  cartCount: number;
  onOpenCart: () => void;
};

export function DemoHeader({
  demo,
  currency,
  onToggleCurrency,
  isManagerMode,
  onToggleManagerMode,
  cartCount,
  onOpenCart,
}: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur-xl transition-colors">
      {/* Barra superior de aviso de demostración interactiva */}
      <div className="border-b border-white/5 bg-gradient-to-r from-white/5 via-white/10 to-white/5 px-4 py-1.5 text-center text-xs text-zinc-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/demos"
            className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-white"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="hidden sm:inline">Ver todas las</span>
            <span className="font-semibold text-zinc-200">Demos</span>
          </Link>

          <div className="flex items-center gap-2">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: demo.palette.accent }}
            />
            <span className="text-[11px] text-zinc-300">
              Demo Interactiva · <span className="font-mono text-zinc-100">1$ = {BCV_RATE.toFixed(2)} Bs</span>
            </span>
          </div>

          <button
            onClick={onToggleCurrency}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-white transition-all active:scale-95 hover:bg-white/10"
            title="Cambiar moneda"
          >
            Ver en <strong style={{ color: demo.palette.accent }}>{currency === "USD" ? "Bs (VES)" : "USD ($)"}</strong>
          </button>
        </div>
      </div>

      {/* Cabecera principal de la marca */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo y Nombre del Negocio */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/20 shadow-md sm:h-11 sm:w-11">
            <Image
              src={demo.logo}
              alt={`Logo oficial de ${demo.name}`}
              fill
              className="object-cover"
              sizes="44px"
              priority
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold text-white tracking-tight sm:text-lg">
                {demo.name}
              </h1>
              <span
                className="hidden rounded-full border px-2 py-0.5 text-[10px] font-medium sm:inline-flex"
                style={{
                  borderColor: `${demo.palette.primary}40`,
                  backgroundColor: `${demo.palette.primary}15`,
                  color: demo.palette.accent,
                }}
              >
                Abierto ahora
              </span>
            </div>
            <p className="text-xs text-zinc-400 line-clamp-1">
              @{demo.handle} · {demo.category}
            </p>
          </div>
        </div>

        {/* Acciones: Switch de Modo y Carrito */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Switch Cliente / Gerente con spring animado */}
          <div className="flex items-center rounded-xl border border-white/15 bg-zinc-900/90 p-0.5 shadow-inner">
            <button
              onClick={() => isManagerMode && onToggleManagerMode()}
              className={`relative rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all active:scale-95 ${
                !isManagerMode
                  ? "bg-white text-black shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Cliente
            </button>
            <button
              onClick={() => !isManagerMode && onToggleManagerMode()}
              className={`relative rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all active:scale-95 ${
                isManagerMode
                  ? "shadow-sm font-bold text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
              style={{
                backgroundColor: isManagerMode ? demo.palette.accent : undefined,
              }}
            >
              👔 Gerente
            </button>
          </div>

          {/* Botón de Comanda / Carrito con SVG limpio y animación corregida */}
          <button
            onClick={onOpenCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-all active:scale-95 hover:bg-white/20"
            aria-label="Abrir comanda"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-black shadow-lg"
                style={{ backgroundColor: demo.palette.accent }}
              >
                {cartCount}
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
