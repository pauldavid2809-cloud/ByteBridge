"use client";

import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Img,
} from "remotion";
import { BusinessDemo, BCV_RATE } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
};

export function Scene4ManagerCta({ demo }: Props) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const ctaScale = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  const salesUSD = Math.floor(
    interpolate(frame, [0, 50], [0, demo.managerKpis.todaySalesUSD], {
      extrapolateRight: "clamp",
    })
  );

  const salesVES = salesUSD * BCV_RATE;

  return (
    <AbsoluteFill className="bg-black text-white font-sans overflow-hidden p-14 py-20 flex flex-col justify-between items-center text-center">
      {/* Background Radial Glow */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${demo.palette.glow}, transparent 75%), linear-gradient(to bottom, #000 0%, #0a0a0a 100%)`,
        }}
      />

      {/* Top Manager Tag */}
      <div className="z-10 max-w-xl">
        <span
          className="inline-block rounded-full px-6 py-2 text-lg font-black uppercase tracking-widest text-black shadow-md"
          style={{ backgroundColor: demo.palette.accent }}
        >
          03 · Panel de Control en Vivo
        </span>
        <h2 className="mt-4 text-5xl font-black tracking-tight text-white uppercase">
          Toma el Control de tu Negocio
        </h2>
      </div>

      {/* Center: Live KPI Cards & Pitch */}
      <div className="z-10 w-full max-w-md space-y-4">
        {/* KPI Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl border border-white/15 bg-zinc-900/90 p-5 backdrop-blur-xl shadow-xl">
            <span className="text-sm font-semibold text-zinc-400">Ventas Hoy</span>
            <p className="mt-1 text-4xl font-black text-emerald-400">
              ${salesUSD}
            </p>
            <span className="font-mono text-xs text-zinc-400">
              ≈ {salesVES.toLocaleString("es-VE", { maximumFractionDigits: 0 })} Bs
            </span>
          </div>

          <div className="rounded-3xl border border-white/15 bg-zinc-900/90 p-5 backdrop-blur-xl shadow-xl">
            <span className="text-sm font-semibold text-zinc-400">Aforo en Sala</span>
            <p
              className="mt-1 text-4xl font-black"
              style={{ color: demo.palette.accent }}
            >
              {demo.managerKpis.capacityPercentage}%
            </p>
            <span className="text-xs text-zinc-400">Capacidad en vivo</span>
          </div>
        </div>

        {/* ByteBridge Official CTA Card */}
        <div
          style={{
            transform: `scale(${Math.max(0, ctaScale)})`,
          }}
          className="rounded-3xl border-2 border-amber-400/40 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 shadow-2xl backdrop-blur-2xl"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-4 w-4 rounded-full bg-amber-400 animate-ping" />
            <span className="text-xl font-extrabold tracking-widest text-amber-300 uppercase">
              DESARROLLADO POR BYTEBRIDGE
            </span>
          </div>

          <h3 className="mt-4 text-3xl font-black text-white leading-tight">
            ¿Listo para activar tu WebApp personalizada?
          </h3>

          <p className="mt-3 text-base text-zinc-300">
            Automatiza reservas, agiliza comandas y proyecta tu marca.
          </p>

          {/* WhatsApp Direct Button */}
          <div className="mt-6 rounded-2xl bg-emerald-500 p-4 text-center shadow-lg shadow-emerald-500/30">
            <span className="text-xl font-black text-black tracking-wide">
              📲 Escríbenos al WhatsApp: +58 412-1662998
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="z-10">
        <p className="text-lg font-bold text-zinc-400">
          bytebridge.cloud · Maracaibo, Venezuela
        </p>
      </div>
    </AbsoluteFill>
  );
}
