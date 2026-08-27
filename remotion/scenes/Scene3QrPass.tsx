"use client";

import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Img,
} from "remotion";
import { BusinessDemo } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
};

export function Scene3QrPass({ demo }: Props) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const laserY = interpolate(frame % 45, [0, 22.5, 45], [0, 100, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const verifiedStamp = spring({
    frame: frame - 40,
    fps,
    config: { damping: 8, stiffness: 140 },
  });

  return (
    <AbsoluteFill className="bg-zinc-950 text-white font-sans overflow-hidden p-14 py-20 flex flex-col justify-between items-center">
      {/* Background Glow */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${demo.palette.glow}, transparent 75%)`,
        }}
      />

      {/* Top Title */}
      <div className="text-center max-w-xl z-10">
        <span
          className="inline-block rounded-full px-6 py-2 text-lg font-black uppercase tracking-widest text-black shadow-md"
          style={{ backgroundColor: demo.palette.accent }}
        >
          02 · Reservaciones & Pases VIP
        </span>
        <h2 className="mt-4 text-5xl font-black tracking-tight text-white uppercase">
          Pases Digitales con Código QR
        </h2>
        <p className="mt-2 text-xl text-zinc-400">
          Validación óptica en puerta o mesa en menos de 1 segundo
        </p>
      </div>

      {/* Center: VIP Boarding Pass with Animated QR Scanner */}
      <div
        style={{
          transform: `scale(${Math.max(0, cardScale)})`,
        }}
        className="relative z-10 w-full max-w-md rounded-3xl border-4 border-white/20 bg-gradient-to-b from-zinc-900 via-zinc-900 to-black p-6 shadow-2xl backdrop-blur-2xl"
      >
        {/* Pass Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/20">
              <Img
                src={demo.logo}
                alt={demo.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{demo.name}</h3>
              <span
                className="font-mono text-sm font-bold"
                style={{ color: demo.palette.accent }}
              >
                #PASS-8492 · VIP
              </span>
            </div>
          </div>
          <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
            ACTIVO
          </span>
        </div>

        {/* Pass Info Grid */}
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-xs text-zinc-400 uppercase">Titular</span>
            <p className="font-bold text-white">Carlos Mendoza</p>
          </div>
          <div>
            <span className="text-xs text-zinc-400 uppercase">Experiencia</span>
            <p className="font-bold text-white">{demo.bookingOptions[0]?.name || "Reserva VIP"}</p>
          </div>
          <div>
            <span className="text-xs text-zinc-400 uppercase">Horario</span>
            <p className="font-bold text-white">Hoy · 08:00 PM</p>
          </div>
          <div>
            <span className="text-xs text-zinc-400 uppercase">Invitados</span>
            <p className="font-bold text-white">4 Personas</p>
          </div>
        </div>

        {/* QR Code Box with Laser Scan Effect */}
        <div className="relative mt-5 flex flex-col items-center justify-center rounded-2xl bg-white p-5">
          <div className="relative flex h-48 w-48 items-center justify-center bg-zinc-950 p-2 rounded-xl overflow-hidden">
            {/* SVG QR Code */}
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full fill-white"
              shapeRendering="crispEdges"
            >
              <rect x="0" y="0" width="30" height="30" />
              <rect x="5" y="5" width="20" height="20" fill="#000" />
              <rect x="10" y="10" width="10" height="10" fill="#fff" />

              <rect x="70" y="0" width="30" height="30" />
              <rect x="75" y="5" width="20" height="20" fill="#000" />
              <rect x="80" y="10" width="10" height="10" fill="#fff" />

              <rect x="0" y="70" width="30" height="30" />
              <rect x="5" y="75" width="20" height="20" fill="#000" />
              <rect x="10" y="80" width="10" height="10" fill="#fff" />

              <rect x="35" y="5" width="5" height="15" />
              <rect x="45" y="10" width="15" height="5" />
              <rect x="35" y="25" width="25" height="5" />
              <rect x="10" y="35" width="20" height="5" />
              <rect x="35" y="35" width="10" height="10" />
              <rect x="55" y="35" width="15" height="15" />
              <rect x="80" y="35" width="15" height="10" />
              <rect x="15" y="45" width="15" height="15" />
              <rect x="35" y="50" width="15" height="5" />
              <rect x="40" y="60" width="20" height="10" />
              <rect x="65" y="55" width="10" height="20" />
              <rect x="80" y="55" width="15" height="15" />
              <rect x="35" y="75" width="10" height="20" />
              <rect x="50" y="75" width="15" height="10" />
              <rect x="70" y="80" width="25" height="15" />
              <rect x="50" y="90" width="15" height="5" />
            </svg>

            {/* Laser Line Animation */}
            <div
              style={{ top: `${laserY}%` }}
              className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#34d399]"
            />
          </div>

          {/* Validation Stamp Popup */}
          {frame > 35 && (
            <div
              style={{
                transform: `scale(${Math.max(0, verifiedStamp)}) rotate(-5deg)`,
              }}
              className="absolute inset-x-4 top-1/3 rounded-2xl border-4 border-emerald-400 bg-emerald-950/95 p-4 text-center shadow-2xl backdrop-blur-md"
            >
              <span className="text-3xl">✅</span>
              <p className="mt-1 text-2xl font-black text-emerald-400 uppercase tracking-wide">
                Pase Validado
              </p>
              <p className="text-sm font-bold text-white">Mesa Asignada en Sala</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="z-10 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 backdrop-blur-md">
        <span className="text-xl font-bold text-zinc-200">
          ⚡ Se envía directo al WhatsApp del cliente con confirmación automática
        </span>
      </div>
    </AbsoluteFill>
  );
}
