import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ByteBridgeLogoAnimated } from "../components/ByteBridgeLogoAnimated";

export function Scene1Hook() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase 1: Pain Points (frames 0 to 45)
  const isPhase1 = frame < 45;
  const painExit = interpolate(frame, [38, 45], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Staggered pain points
  const pain1Spring = spring({
    frame: frame - 2,
    fps,
    config: { damping: 12, stiffness: 120 },
  });
  const pain2Spring = spring({
    frame: frame - 12,
    fps,
    config: { damping: 12, stiffness: 120 },
  });
  const pain3Spring = spring({
    frame: frame - 22,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  // Phase 2: Solution & ByteBridge Logo (frames 45 to 110)
  const phase2Frame = Math.max(0, frame - 44);
  const flashOpacity = interpolate(frame, [43, 46, 52], [0, 0.9, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const solutionSpring = spring({
    frame: phase2Frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const subtitleSpring = spring({
    frame: phase2Frame - 20,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 40px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Flash impact transition between phase 1 & 2 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#2ebd85",
          opacity: flashOpacity,
          pointerEvents: "none",
          zIndex: 50,
        }}
      />

      {/* PHASE 1: PAIN HOOK */}
      {isPhase1 && (
        <div
          style={{
            opacity: painExit,
            transform: `scale(${0.9 + painExit * 0.1})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            maxWidth: "920px",
            gap: "28px",
          }}
        >
          {/* Warning Attention Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 32px",
              borderRadius: "9999px",
              backgroundColor: "rgba(239, 68, 68, 0.15)",
              border: "2px solid rgba(239, 68, 68, 0.4)",
              boxShadow: "0 0 30px rgba(239, 68, 68, 0.2)",
            }}
          >
            <span
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                backgroundColor: "#ef4444",
                boxShadow: "0 0 12px #ef4444",
              }}
            />
            <span
              style={{
                fontSize: "24px",
                fontWeight: 900,
                color: "#fca5a5",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              ¿SIGUES CON SISTEMAS OBSOLETOS?
            </span>
          </div>

          {/* Punchy Big Hook Question */}
          <h1
            style={{
              fontSize: "68px",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "-2px",
              margin: 0,
            }}
          >
            ¿Tus clientes siguen esperando la carta o{" "}
            <span style={{ color: "#ef4444", textDecoration: "underline" }}>
              haciendo filas
            </span>
            ?
          </h1>

          {/* 3 Pain Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              width: "100%",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                opacity: pain1Spring,
                transform: `translateX(${(1 - pain1Spring) * -40}px)`,
                padding: "20px 28px",
                borderRadius: "22px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1.5px solid rgba(239, 68, 68, 0.3)",
                display: "flex",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <span style={{ fontSize: "36px" }}>📄❌</span>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#f1f5f9" }}>
                Menús en PDF pesados que tardan en cargar
              </span>
            </div>

            <div
              style={{
                opacity: pain2Spring,
                transform: `translateX(${(1 - pain2Spring) * 40}px)`,
                padding: "20px 28px",
                borderRadius: "22px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1.5px solid rgba(239, 68, 68, 0.3)",
                display: "flex",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <span style={{ fontSize: "36px" }}>⏳❌</span>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#f1f5f9" }}>
                Colas y tickets de papel en entradas de eventos
              </span>
            </div>

            <div
              style={{
                opacity: pain3Spring,
                transform: `translateX(${(1 - pain3Spring) * -40}px)`,
                padding: "20px 28px",
                borderRadius: "22px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1.5px solid rgba(239, 68, 68, 0.3)",
                display: "flex",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <span style={{ fontSize: "36px" }}>📝❌</span>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#f1f5f9" }}>
                Comandas anotadas a mano y lentitud en mesa
              </span>
            </div>
          </div>
        </div>
      )}

      {/* PHASE 2: BYTEBRIDGE SOLUTION & ANIMATED LOGO REVEAL */}
      {!isPhase1 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            gap: "28px",
            zIndex: 10,
          }}
        >
          {/* Solution Tag */}
          <div
            style={{
              opacity: solutionSpring,
              transform: `translateY(${(1 - solutionSpring) * 30}px)`,
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 36px",
              borderRadius: "9999px",
              backgroundColor: "rgba(46, 189, 133, 0.15)",
              border: "2px solid rgba(46, 189, 133, 0.5)",
              boxShadow: "0 0 35px rgba(46, 189, 133, 0.3)",
            }}
          >
            <span
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                backgroundColor: "#2ebd85",
                boxShadow: "0 0 15px #2ebd85",
              }}
            />
            <span
              style={{
                fontSize: "24px",
                fontWeight: 900,
                color: "#36d698",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              EVOLUCIONA CON BYTEBRIDGE
            </span>
          </div>

          {/* Animated SVG Bridge Logo */}
          <div style={{ margin: "16px 0" }}>
            <ByteBridgeLogoAnimated
              size={260}
              showWordmark={true}
              wordmarkSize={64}
              delay={48}
            />
          </div>

          {/* Punchy Headline */}
          <h1
            style={{
              opacity: subtitleSpring,
              transform: `translateY(${(1 - subtitleSpring) * 20}px)`,
              fontSize: "56px",
              fontWeight: 900,
              lineHeight: 1.15,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "-1px",
              margin: 0,
              maxWidth: "880px",
            }}
          >
            La Plataforma Integral para{" "}
            <span
              style={{
                color: "#2ebd85",
                textShadow: "0 0 35px rgba(46, 189, 133, 0.6)",
              }}
            >
              Restaurantes, Discotecas y Eventos
            </span>
          </h1>

          {/* Feature Badges Pills */}
          <div
            style={{
              opacity: subtitleSpring,
              transform: `scale(${0.9 + subtitleSpring * 0.1})`,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "14px",
              marginTop: "8px",
            }}
          >
            <span
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                fontSize: "22px",
                fontWeight: 700,
                color: "#e2e8f0",
              }}
            >
              ⚡ Pases & Entradas QR
            </span>
            <span
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                fontSize: "22px",
                fontWeight: 700,
                color: "#e2e8f0",
              }}
            >
              🍽️ Menú & Pedidos en Mesa
            </span>
            <span
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                fontSize: "22px",
                fontWeight: 700,
                color: "#e2e8f0",
              }}
            >
              💵 Tasa BCV en Vivo
            </span>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
}
