"use client";

import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BusinessDemo, BCV_RATE } from "../../data/demosData";

type Props = {
  demo: BusinessDemo;
};

export function Scene2Menu({ demo }: Props) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const phoneY = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const headerOpacity = interpolate(frame, [0, 20], [0, 1]);

  const items = demo.menuItems.slice(0, 3);

  return (
    <AbsoluteFill className="bg-zinc-950 text-white font-sans overflow-hidden p-14 py-20 flex flex-col justify-between items-center">
      {/* Background Glow */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 30%, ${demo.palette.glow}, transparent 75%)`,
        }}
      />

      {/* Top Header */}
      <div
        style={{ opacity: headerOpacity }}
        className="text-center max-w-xl z-10"
      >
        <span
          className="inline-block rounded-full px-6 py-2 text-lg font-black uppercase tracking-widest text-black shadow-md"
          style={{ backgroundColor: demo.palette.accent }}
        >
          01 · Menú Digital Interactivo
        </span>
        <h2 className="mt-4 text-5xl font-black tracking-tight text-white uppercase">
          Tus Platillos con Cobro en USD y Bolívares
        </h2>
        <p className="mt-2 text-xl text-zinc-400">
          Tasa oficial BCV automatizada en tiempo real ({BCV_RATE.toFixed(2)} Bs/$)
        </p>
      </div>

      {/* Center: Smartphone Mockup con Items del Menú */}
      <div
        style={{
          transform: `translateY(${(1 - phoneY) * 100}px)`,
        }}
        className="relative z-10 w-full max-w-md rounded-3xl border-4 border-white/20 bg-zinc-900/90 p-6 shadow-2xl backdrop-blur-2xl"
      >
        {/* Mockup Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: demo.palette.accent }}
            />
            <span className="text-xl font-bold text-white">Carta Digital</span>
          </div>
          <span className="rounded-lg bg-emerald-500/20 px-3 py-1 text-sm font-bold text-emerald-400">
            Tasa BCV Activa
          </span>
        </div>

        {/* Menu Items Stagger */}
        <div className="mt-5 space-y-4">
          {items.map((item, idx) => {
            const itemSpring = spring({
              frame: frame - 15 - idx * 12,
              fps,
              config: { damping: 12, stiffness: 100 },
            });
            const priceVES = item.priceUSD * BCV_RATE;

            return (
              <div
                key={item.id}
                style={{
                  transform: `scale(${Math.max(0, itemSpring)})`,
                  opacity: Math.min(1, Math.max(0, itemSpring)),
                }}
                className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <span className="text-lg font-bold text-white line-clamp-1">
                      {item.name}
                    </span>
                    <p className="mt-1 text-xs text-zinc-400 line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xl font-black text-white">
                      ${item.priceUSD} USD
                    </span>
                    <span className="block font-mono text-xs font-semibold text-emerald-400">
                      ≈ {priceVES.toLocaleString("es-VE", { maximumFractionDigits: 0 })} Bs
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2">
                  <span
                    className="rounded-md px-2 py-0.5 text-[10px] font-bold text-black"
                    style={{ backgroundColor: demo.palette.accent }}
                  >
                    {item.badge || "Recomendado"}
                  </span>
                  <span className="text-xs font-bold text-zinc-300">
                    + Añadir a Comanda
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Summary Badge */}
      <div className="z-10 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 backdrop-blur-md">
        <span className="text-xl font-bold text-zinc-200">
          💡 El cliente pide desde su mesa sin esperar al mesonero
        </span>
      </div>
    </AbsoluteFill>
  );
}
