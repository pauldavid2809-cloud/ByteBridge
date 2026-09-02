import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2QrTable } from "./scenes/Scene2QrTable";
import { Scene3QrTickets } from "./scenes/Scene3QrTickets";
import { Scene4LandingDashboard } from "./scenes/Scene4LandingDashboard";
import { Scene5OutroCta } from "./scenes/Scene5OutroCta";
import { ByteBridgeAudio } from "./components/ByteBridgeAudio";

export function ByteBridgePromoReel() {
  const frame = useCurrentFrame();

  // Subtle ambient dynamic breathing light
  const ambientPulse = Math.sin(frame * 0.05) * 0.15 + 0.85;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0e0d",
        color: "#ffffff",
        fontFamily:
          "'Montserrat', -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif",
        overflow: "hidden",
        width: 1080,
        height: 1920,
      }}
    >
      {/* Background Ambient Studio Lighting (Emerald + Deep Charcoal) */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 25%, rgba(46, 189, 133, ${
            0.22 * ambientPulse
          }) 0%, transparent 60%), radial-gradient(circle at 50% 85%, rgba(0,0,0,0.95) 0%, #0a0e0d 100%)`,
        }}
      />

      {/* Cyber Grid Pattern */}
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.6,
        }}
      />

      {/* Audio Track / SFX (if provided) */}
      <ByteBridgeAudio />

      {/* Escena 1: El Gancho Brutal & Pain Points (0.0s - 6.0s = frames 0 a 180) */}
      <Sequence from={0} durationInFrames={180}>
        <Scene1Hook />
      </Sequence>

      {/* Escena 2: Menú 3D en Mesa & Tasa BCV en Vivo (6.0s - 12.0s = frames 180 a 360) */}
      <Sequence from={180} durationInFrames={180}>
        <Scene2QrTable />
      </Sequence>

      {/* Escena 3: Pase VIP y Validación QR Láser (12.0s - 18.0s = frames 360 a 540) */}
      <Sequence from={360} durationInFrames={180}>
        <Scene3QrTickets />
      </Sequence>

      {/* Escena 4: Panel de Gerencia & Métricas en Vivo (18.0s - 24.0s = frames 540 a 720) */}
      <Sequence from={540} durationInFrames={180}>
        <Scene4LandingDashboard />
      </Sequence>

      {/* Escena 5: Oferta de Confianza & CTA ByteBridge (24.0s - 30.0s = frames 720 a 900) */}
      <Sequence from={720} durationInFrames={180}>
        <Scene5OutroCta />
      </Sequence>
    </AbsoluteFill>
  );
}
