"use client";

import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";
import { BusinessDemo } from "../../data/demosData";

type Props = {
  demo: BusinessDemo;
};

export function Scene1Hook({ demo }: Props) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación de entrada de logo con spring suave
  const logoScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Animación de texto
  const textOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const textY = interpolate(frame, [15, 35], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Ken Burns zoom en la imagen de fondo
  const bgScale = interpolate(frame, [0, 105], [1.1, 1.25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const badgeScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  return (
    <AbsoluteFill className="bg-black text-white font-sans overflow-hidden">
      {/* Background Image with Zoom & Dark Gradient */}
      <AbsoluteFill style={{ transform: `scale(${bgScale})` }}>
        <Img
          src={demo.coverImage}
          alt={demo.name}
          className="h-full w-full object-cover opacity-35 filter brightness-75"
        />
        <AbsoluteFill
          style={{
            background: `radial-gradient(circle at 50% 35%, ${demo.palette.glow}, transparent 70%), linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.95) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* Contenido Central */}
      <AbsoluteFill className="flex flex-col items-center justify-between p-16 py-24 text-center">
        {/* Top ByteBridge Pill */}
        <div className="rounded-full border border-white/20 bg-black/60 px-6 py-2.5 backdrop-blur-xl">
          <span className="text-xl font-bold tracking-widest text-zinc-300 uppercase">
            BYTEBRIDGE · PROPUESTA EXCLUSIVA
          </span>
        </div>

        {/* Center: Brand Logo & Headline */}
        <div className="flex flex-col items-center">
          {/* Logo con Resplandor */}
          <div
            style={{
              transform: `scale(${logoScale})`,
              boxShadow: `0 0 80px ${demo.palette.glow}`,
            }}
            className="relative h-44 w-44 overflow-hidden rounded-3xl border-4 border-white/30 bg-zinc-900 shadow-2xl"
          >
            <Img
              src={demo.logo.startsWith("http") ? demo.logo : staticFile(demo.logo)}
              alt={demo.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Badge de la Marca */}
          <div
            style={{
              transform: `scale(${Math.max(0, badgeScale)})`,
              backgroundColor: demo.palette.accent,
            }}
            className="mt-8 rounded-full px-6 py-2 text-xl font-extrabold uppercase tracking-wider text-black shadow-lg"
          >
            {demo.category}
          </div>

          {/* Headline de Alto Impacto */}
          <div
            style={{
              opacity: textOpacity,
              transform: `translateY(${textY}px)`,
            }}
            className="mt-8 max-w-2xl"
          >
            <h1 className="text-6xl font-black leading-tight tracking-tight text-white uppercase">
              La Nueva WebApp de
              <span
                className="block mt-2 text-7xl font-black"
                style={{
                  color: demo.palette.accent,
                  textShadow: `0 0 40px ${demo.palette.glow}`,
                }}
              >
                {demo.name}
              </span>
            </h1>
            <p className="mt-6 text-2xl font-medium text-zinc-300">
              {demo.tagline}
            </p>
          </div>
        </div>

        {/* Bottom Feature Teaser */}
        <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 px-8 py-4 backdrop-blur-xl">
          <div
            className="h-4 w-4 rounded-full animate-pulse"
            style={{ backgroundColor: demo.palette.accent }}
          />
          <span className="text-xl font-bold text-white tracking-wide">
            Reservas QR · Menú Digital · Control en Vivo
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
