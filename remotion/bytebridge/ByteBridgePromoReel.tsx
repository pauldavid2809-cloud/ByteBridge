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

      {/* Escena 1: El Gancho & Logo Reveal (0.0s - 3.66s = frames 0 a 110) */}
      <Sequence from={0} durationInFrames={110}>
        <Scene1Hook />
      </Sequence>

      {/* Escena 2: QR en Mesa & Menú Multimoneda (3.66s - 7.5s = frames 110 a 225) */}
      <Sequence from={110} durationInFrames={115}>
        <Scene2QrTable />
      </Sequence>

      {/* Escena 3: Entradas & Pases VIP por QR (7.5s - 11.33s = frames 225 a 340) */}
      <Sequence from={225} durationInFrames={115}>
        <Scene3QrTickets />
      </Sequence>

      {/* Escena 4: Landing Page & Panel Gerencial (11.33s - 15.16s = frames 340 a 455) */}
      <Sequence from={340} durationInFrames={115}>
        <Scene4LandingDashboard />
      </Sequence>

      {/* Escena 5: Outro & Llamado a la Acción (15.16s - 19.0s = frames 455 a 570) */}
      <Sequence from={455} durationInFrames={115}>
        <Scene5OutroCta />
      </Sequence>
    </AbsoluteFill>
  );
}
