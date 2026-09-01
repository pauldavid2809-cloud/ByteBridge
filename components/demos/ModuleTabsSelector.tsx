"use client";

import { useState } from "react";
import { BusinessDemo } from "@/data/demosData";
import { motion, AnimatePresence } from "motion/react";

type ModuleType =
  | "table-ordering"
  | "vip-access"
  | "gourmet-booking"
  | "direct-delivery";

type Props = {
  demo: BusinessDemo;
  onSelectModule: (module: ModuleType) => void;
};

const MODULES: {
  id: ModuleType;
  label: string;
  shortLabel: string;
  icon: string;
  badge: string;
  description: string;
  targetId: string;
}[] = [
  {
    id: "table-ordering",
    label: "Auto-Pedido QR en Mesa",
    shortLabel: "QR en Mesa",
    icon: "📱",
    badge: "Rotación Rápida",
    description: "Comanda directa a barra y cocina sin esperar mesonero con tasa BCV al día.",
    targetId: "menu",
  },
  {
    id: "vip-access",
    label: "Pases & Boletos QR",
    shortLabel: "Pases QR",
    icon: "🎟️",
    badge: "Validación 1s",
    description: "Emisión de tickets holográficos QR y control de aforo en puerta sin colas.",
    targetId: "reservas",
  },
  {
    id: "gourmet-booking",
    label: "Reservas Gourmet VIP",
    shortLabel: "Reservas VIP",
    icon: "🍷",
    badge: "Cero No-Shows",
    description: "Selección de salones, mesas preferenciales y pre-orden gastronómica.",
    targetId: "reservas",
  },
  {
    id: "direct-delivery",
    label: "Delivery 0% Comisión",
    shortLabel: "Delivery Propio",
    icon: "🛵",
    badge: "Ahorra 25%",
    description: "Canal directo a WhatsApp con carrito multimoneda y ubicación exacta.",
    targetId: "menu",
  },
];

export function ModuleTabsSelector({ demo, onSelectModule }: Props) {
  const getInitialModule = (): ModuleType => {
    if (demo.archetype === "gift-customizer" || demo.archetype === "wholesale-catalog") {
      return "direct-delivery";
    }
    if (demo.archetype === "item-builder") {
      return "table-ordering";
    }
    if (demo.archetype === "match-booking") {
      return "gourmet-booking";
    }
    return (demo.archetype as ModuleType) || "table-ordering";
  };

  const initialModule = getInitialModule();
  const [activeModule, setActiveModule] = useState<ModuleType>(initialModule);
  const [activeToast, setActiveToast] = useState<string | null>(null);

  const handleTabClick = (mod: (typeof MODULES)[0]) => {
    setActiveModule(mod.id);
    onSelectModule(mod.id);

    const el = document.getElementById(mod.targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }

    setActiveToast(`Módulo activo: ${mod.label} · 100% integrado a la WebApp`);
    setTimeout(() => setActiveToast(null), 3000);
  };

  return (
    <section className="border-b border-white/10 bg-zinc-950/80 py-6">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Título Informativo */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Suite Modular Interactiva
              </span>
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              Explora los 4 módulos operativos disponibles para <strong className="text-white">{demo.name}</strong>:
            </p>
          </div>

          {/* Selector de Pestañas */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {MODULES.map((mod) => {
              const isSelected = activeModule === mod.id;
              const isDefault = initialModule === mod.id;

              return (
                <button
                  key={mod.id}
                  onClick={() => handleTabClick(mod)}
                  className={`relative flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-white text-black shadow-lg shadow-white/10"
                      : "border border-white/10 bg-zinc-900/80 text-zinc-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span>{mod.icon}</span>
                  <span>{mod.shortLabel}</span>

                  {isDefault && (
                    <span
                      className="rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-black"
                      style={{ backgroundColor: demo.palette.accent }}
                    >
                      Principal
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Toast Notificador Flotante */}
        <AnimatePresence>
          {activeToast && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-black/60 px-4 py-2 text-center text-xs text-zinc-300"
            >
              <span style={{ color: demo.palette.accent }}>✨</span>
              <span>{activeToast}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
