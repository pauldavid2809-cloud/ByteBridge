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
}: {
  demo: BusinessDemo;
  currency: CurrencyMode;
  onToggleCurrency: () => void;
  isManagerMode: boolean;
  onToggleManagerMode: () => void;
  cartCount: number;
  onOpenCart: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl transition-colors">
      {/* Barra superior de aviso de demostración interactiva */}
      <div className="border-b border-white/5 bg-gradient-to-r from-white/5 via-white/10 to-white/5 px-4 py-1.5 text-center text-xs text-zinc-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/demos"
            className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-white"
          >
            <span>←</span>
            <span className="hidden sm:inline">Ver todas las</span>
            <span className="font-semibold text-zinc-200">Demos</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-zinc-300">
              Demo Interactiva · <span className="font-mono text-zinc-100">1$ = {BCV_RATE.toFixed(2)} Bs</span>
            </span>
          </div>

          <button
            onClick={onToggleCurrency}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-white transition-all active:scale-95 hover:bg-white/10"
            title="Cambiar moneda"
          >
            Ver en <strong className="text-amber-300">{currency === "USD" ? "Bs (VES)" : "USD ($)"}</strong>
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
              <span className="hidden rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400 sm:inline-flex">
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
          {/* Switch Cliente / Gerente */}
          <div className="flex items-center rounded-xl border border-white/15 bg-zinc-900/90 p-0.5 shadow-inner">
            <button
              onClick={() => isManagerMode && onToggleManagerMode()}
              className={`relative rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all ${
                !isManagerMode
                  ? "bg-white text-black shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Cliente
            </button>
            <button
              onClick={() => !isManagerMode && onToggleManagerMode()}
              className={`relative rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all ${
                isManagerMode
                  ? "bg-amber-400 text-black shadow-sm font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              👔 Gerente
            </button>
          </div>

          {/* Botón de Comanda / Carrito */}
          <button
            onClick={onOpenCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-all active:scale-95 hover:bg-white/20"
            aria-label="Abrir comanda"
          >
            <span className="text-lg">🛒</span>
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-black shadow-lg"
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
