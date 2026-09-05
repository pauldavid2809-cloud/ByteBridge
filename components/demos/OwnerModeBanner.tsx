"use client";

import { motion } from "motion/react";
import { BusinessDemo } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
  isManagerMode: boolean;
  onToggleManagerMode: () => void;
};

export function OwnerModeBanner({
  demo,
  isManagerMode,
  onToggleManagerMode,
}: Props) {
  return (
    <aside
      aria-label="Barra de vista de propuesta"
      className="sticky top-0 z-40 w-full border-b border-emerald-500/20 bg-zinc-950/90 px-3 py-2.5 backdrop-blur-md transition-colors"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2.5 sm:px-4">
        {/* Identificación de Propuesta */}
        <div className="flex items-center gap-2">
          <span
            className={`flex h-2 w-2 rounded-full animate-pulse ${
              demo.slug === "demo-restaurante" ? "bg-amber-400" : "bg-emerald-400"
            }`}
          />
          <span className="text-[11px] font-bold text-zinc-300 sm:text-xs">
            {demo.slug === "demo-restaurante" ? (
              <span>
                <span className="text-amber-400 font-extrabold tracking-wider">
                  PROTOTIPO UNIVERSAL:
                </span>{" "}
                Adaptable a la carta y marca de tu restaurante en 48h
              </span>
            ) : (
              <span>
                Propuesta exclusiva para{" "}
                <span className="text-white underline decoration-emerald-400/50">
                  {demo.name}
                </span>
              </span>
            )}
          </span>
        </div>

        {/* Selector de Perspectiva (Dueño vs Comensal) */}
        <div className="flex items-center rounded-xl border border-white/15 bg-black/60 p-1 shadow-inner">
          <button
            type="button"
            onClick={() => {
              if (isManagerMode) onToggleManagerMode();
            }}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              !isManagerMode
                ? "bg-white text-black shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <span>📱</span>
            <span>Vista Comensal</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (!isManagerMode) onToggleManagerMode();
            }}
            className={`relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              isManagerMode
                ? "bg-emerald-500 text-black shadow-sm"
                : "text-emerald-400 hover:bg-emerald-500/10"
            }`}
          >
            {!isManagerMode && (
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            )}
            <span>💼</span>
            <span>Vista Dueño / Gerente</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
