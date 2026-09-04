import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame } from "remotion";
import { BusinessDemo } from "../data/demosData";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Menu } from "./scenes/Scene2Menu";
import { Scene3QrPass } from "./scenes/Scene3QrPass";
import { Scene3TableOrder } from "./scenes/Scene3TableOrder";
import { Scene3SommelierBooking } from "./scenes/Scene3SommelierBooking";
import { Scene3DirectDelivery } from "./scenes/Scene3DirectDelivery";
import { Scene4ManagerCta } from "./scenes/Scene4ManagerCta";

export type PromoReelProps = {
  demo: BusinessDemo;
};

function KineticCaptions({ frame, demo }: { frame: number; demo: BusinessDemo }) {
  let text = "";
  let icon = "";
  let borderColor = "#22c55e";
  let bgGradient = "rgba(10, 10, 14, 0.92)";
  let textColor = "#ffffff";

  if (frame < 45) {
    icon = "🚨";
    text = "¿Tu WhatsApp colapsa los fines de semana?";
    borderColor = "#ef4444";
    textColor = "#fca5a5";
  } else if (frame < 115) {
    icon = "✨";
    text = "Tu propia WebApp: confirmación en 1 clic";
    borderColor = "#22c55e";
    textColor = "#86efac";
  } else if (frame < 225) {
    icon = "⚡";
    text = "Menú Interactivo en USD y Bs a Tasa Oficial";
    borderColor = "#f59e0b";
    textColor = "#fde68a";
  } else if (frame < 335) {
    if (demo.archetype === "table-ordering") {
      icon = "📲";
      text = "El cliente pide en mesa sin esperar mesonero";
      borderColor = "#38bdf8";
      textColor = "#bae6fd";
    } else if (demo.archetype === "direct-delivery") {
      icon = "🛵";
      text = "Delivery Directo 0% Comisiones a Apps";
      borderColor = "#34d399";
      textColor = "#a7f3d0";
    } else if (demo.archetype === "vip-access") {
      icon = "🎟️";
      text = "Pases VIP y Tickets con Código QR";
      borderColor = "#fbbf24";
      textColor = "#fef08a";
    } else {
      icon = "🍷";
      text = "Mesa VIP y Maridaje con Confirmación Inmediata";
      borderColor = "#c084fc";
      textColor = "#e9d5ff";
    }
  } else {
    icon = "👉";
    text = "Toca el enlace en este chat para probar tu demo";
    borderColor = "#10b981";
    textColor = "#ffffff";
    bgGradient = "linear-gradient(135deg, rgba(16, 185, 129, 0.95), rgba(5, 150, 105, 0.95))";
  }

  return (
    <div
      style={{
        position: "absolute",
        bottom: "45px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "16px 36px",
        borderRadius: "9999px",
        background: bgGradient,
        border: `2px solid ${borderColor}`,
        boxShadow: `0 20px 40px rgba(0,0,0,0.8), 0 0 25px ${borderColor}44`,
        backdropFilter: "blur(20px)",
        maxWidth: "920px",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ fontSize: "28px" }}>{icon}</span>
      <span
        style={{
          fontSize: "24px",
          fontWeight: 900,
          color: textColor,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        {text}
      </span>
    </div>
  );
}

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
      {/* 🎵 AUDIO: Beat de Fondo Energético */}
      <Audio src={staticFile("audio/bg_beat.wav")} volume={0.4} />

      {/* 🎵 SFX Sincronizados con los puntos de clímax */}
      {/* 1. Pop mensaje WhatsApp en Escena 1 */}
      <Sequence from={12} durationInFrames={20}>
        <Audio src={staticFile("audio/whatsapp_pop.wav")} volume={0.8} />
      </Sequence>

      {/* 2. Whoosh transición a Escena 2 (Menú) */}
      <Sequence from={112} durationInFrames={25}>
        <Audio src={staticFile("audio/whoosh.wav")} volume={0.85} />
      </Sequence>

      {/* 3. Clic selección en Escena 3 */}
      <Sequence from={240} durationInFrames={15}>
        <Audio src={staticFile("audio/click.wav")} volume={0.85} />
      </Sequence>

      {/* 4. Success Ding confirmación de orden/reserva */}
      <Sequence from={285} durationInFrames={40}>
        <Audio src={staticFile("audio/success_ding.wav")} volume={0.9} />
      </Sequence>

      {/* 5. Whoosh transición a Escena 4 (Gerente / CTA) */}
      <Sequence from={332} durationInFrames={25}>
        <Audio src={staticFile("audio/whoosh.wav")} volume={0.85} />
      </Sequence>

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

      {/* Escena 3: Mecanismo Operativo Diferenciado según Arquetipo (7.5s - 11.2s = frames 225 a 335) */}
      <Sequence from={225} durationInFrames={110}>
        {demo.archetype === "table-ordering" ? (
          <Scene3TableOrder demo={demo} />
        ) : demo.archetype === "gourmet-booking" ? (
          <Scene3SommelierBooking demo={demo} />
        ) : demo.archetype === "direct-delivery" ? (
          <Scene3DirectDelivery demo={demo} />
        ) : (
          <Scene3QrPass demo={demo} />
        )}
      </Sequence>

      {/* Escena 4: Modo Gerente y Pitch ByteBridge (11.2s - 15.0s = frames 335 a 450) */}
      <Sequence from={335} durationInFrames={115}>
        <Scene4ManagerCta demo={demo} />
      </Sequence>

      {/* 💬 SUBTÍTULOS KINETIC DE ALTA RETENCIÓN (Para lectura en silencio en WhatsApp) */}
      <KineticCaptions frame={frame} demo={demo} />
    </AbsoluteFill>
  );
}
