import { AbsoluteFill, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BusinessDemo } from "../data/demosData";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Menu } from "./scenes/Scene2Menu";
import { Scene3QrPass } from "./scenes/Scene3QrPass";
import { Scene4ManagerCta } from "./scenes/Scene4ManagerCta";

export type PromoReelProps = {
  demo: BusinessDemo;
};

export function PromoReel({ demo }: PromoReelProps) {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#050508",
        color: "#ffffff",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        overflow: "hidden",
        width: 1080,
        height: 1920,
      }}
    >
      {/* Dynamic Ambient Studio Lighting */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 30%, ${demo.palette.glow} 0%, transparent 60%), radial-gradient(circle at 50% 85%, rgba(0,0,0,0.9) 0%, #050508 100%)`,
        }}
      />

      {/* Grid Lines Pattern */}
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.7,
        }}
      />

      {/* Escena 1: Hook & Smartphone Showcase (0 - 3.8s = frames 0 a 115) */}
      <Sequence from={0} durationInFrames={115}>
        <Scene1Hook demo={demo} />
      </Sequence>

      {/* Escena 2: Menú Digital & Multimoneda en Vivo (3.8s - 7.5s = frames 115 a 225) */}
      <Sequence from={115} durationInFrames={110}>
        <Scene2Menu demo={demo} />
      </Sequence>

      {/* Escena 3: Pase VIP QR y Validación Óptica (7.5s - 11.2s = frames 225 a 335) */}
      <Sequence from={225} durationInFrames={110}>
        <Scene3QrPass demo={demo} />
      </Sequence>

      {/* Escena 4: Modo Gerente y Pitch ByteBridge (11.2s - 15.0s = frames 335 a 450) */}
      <Sequence from={335} durationInFrames={115}>
        <Scene4ManagerCta demo={demo} />
      </Sequence>
    </AbsoluteFill>
  );
}
