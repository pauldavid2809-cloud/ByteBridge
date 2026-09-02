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

  // Phase switch at frame 85
  const isPhase1 = frame < 85;

  // Glitch shake at start
  const shake =
    frame < 18
      ? Math.sin(frame * 2.2) * (18 - frame) * 0.8
      : 0;

  // Staggered springs for WhatsApp notification popups
  const notif1 = spring({
    frame: frame - 4,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  const notif2 = spring({
    frame: frame - 22,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  const notif3 = spring({
    frame: frame - 40,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  // Phase 1 exit transition
  const painExit = interpolate(frame, [72, 85], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Impact flash on transition
  const flash = interpolate(frame, [82, 86, 94], [0, 0.95, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Shockwave ring scale
  const ringScale = interpolate(frame, [84, 115], [0.8, 3.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ringOpacity = interpolate(frame, [84, 110], [0.8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Phase 2 springs
  const phase2Frame = Math.max(0, frame - 85);
  const solutionSpring = spring({
    frame: phase2Frame,
    fps,
    config: { damping: 13, stiffness: 105 },
  });

  const titleSpring = spring({
    frame: phase2Frame - 15,
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  const pillsSpring = spring({
    frame: phase2Frame - 30,
    fps,
    config: { damping: 13, stiffness: 100 },
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 45px",
        boxSizing: "border-box",
        position: "relative",
        transform: `translateY(${shake}px)`,
      }}
    >
      {/* Flash impact transition between phase 1 & 2 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#2ebd85",
          opacity: flash,
          pointerEvents: "none",
          zIndex: 50,
        }}
      />

      {/* Expanding shockwave ring */}
      {frame >= 84 && frame <= 115 && (
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            border: "6px solid #2ebd85",
            boxShadow: "0 0 60px #2ebd85",
            transform: `scale(${ringScale})`,
            opacity: ringOpacity,
            pointerEvents: "none",
            zIndex: 45,
          }}
        />
      )}

      {/* PHASE 1: THE REAL FRICTION HOOK (0 to 85 frames) */}
      {isPhase1 && (
        <div
          style={{
            opacity: painExit,
            transform: `scale(${0.92 + painExit * 0.08})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            maxWidth: "960px",
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
              boxShadow: "0 0 35px rgba(239, 68, 68, 0.25)",
            }}
          >
            <span
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                backgroundColor: "#ef4444",
                boxShadow: "0 0 14px #ef4444",
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
              ¿EL MISMO PROBLEMA DE SIEMPRE?
            </span>
          </div>

          {/* Punchy Big Hook Question */}
          <h1
            style={{
              fontSize: "66px",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "-1.5px",
              margin: 0,
            }}
          >
            ¿Tus clientes siguen esperando la carta en{" "}
            <span style={{ color: "#ef4444", textDecoration: "underline" }}>
              PDF por WhatsApp
            </span>
            ?
          </h1>

          {/* 3 Realistic WhatsApp Chat Messages (Staggered) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "100%",
              marginTop: "12px",
            }}
          >
            {/* Message 1 */}
            <div
              style={{
                opacity: notif1,
                transform: `translateX(${(1 - notif1) * -50}px) scale(${0.95 + notif1 * 0.05})`,
                padding: "20px 24px",
                borderRadius: "20px",
                backgroundColor: "rgba(30, 41, 59, 0.85)",
                border: "1.5px solid rgba(239, 68, 68, 0.35)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                backdropFilter: "blur(12px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "36px" }}>💬</span>
                <div style={{ textAlign: "left" }}>
                  <p style={{ margin: 0, fontSize: "20px", fontWeight: 700, color: "#f87171" }}>
                    Cliente · 2:15 PM
                  </p>
                  <p style={{ margin: "4px 0 0 0", fontSize: "26px", fontWeight: 600, color: "#f1f5f9" }}>
                    &ldquo;Buenas, ¿me pasan la carta en PDF? No la veo bien&rdquo;
                  </p>
                </div>
              </div>
              <span style={{ fontSize: "28px" }}>⏳</span>
            </div>

            {/* Message 2 */}
            <div
              style={{
                opacity: notif2,
                transform: `translateX(${(1 - notif2) * 50}px) scale(${0.95 + notif2 * 0.05})`,
                padding: "20px 24px",
                borderRadius: "20px",
                backgroundColor: "rgba(30, 41, 59, 0.85)",
                border: "1.5px solid rgba(239, 68, 68, 0.35)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                backdropFilter: "blur(12px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "36px" }}>💵</span>
                <div style={{ textAlign: "left" }}>
                  <p style={{ margin: 0, fontSize: "20px", fontWeight: 700, color: "#f87171" }}>
                    Cliente · 2:22 PM
                  </p>
                  <p style={{ margin: "4px 0 0 0", fontSize: "26px", fontWeight: 600, color: "#f1f5f9" }}>
                    &ldquo;¿A cómo tienen la tasa del dólar hoy en Bs?&rdquo;
                  </p>
                </div>
              </div>
              <span style={{ fontSize: "28px" }}>❌</span>
            </div>

            {/* Message 3 */}
            <div
              style={{
                opacity: notif3,
                transform: `translateX(${(1 - notif3) * -50}px) scale(${0.95 + notif3 * 0.05})`,
                padding: "20px 24px",
                borderRadius: "20px",
                backgroundColor: "rgba(30, 41, 59, 0.85)",
                border: "1.5px solid rgba(239, 68, 68, 0.35)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                backdropFilter: "blur(12px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "36px" }}>⏱️</span>
                <div style={{ textAlign: "left" }}>
                  <p style={{ margin: 0, fontSize: "20px", fontWeight: 700, color: "#f87171" }}>
                    Cliente · 2:38 PM
                  </p>
                  <p style={{ margin: "4px 0 0 0", fontSize: "26px", fontWeight: 600, color: "#f1f5f9" }}>
                    &ldquo;Llevo 20 minutos esperando que me atiendan...&rdquo;
                  </p>
                </div>
              </div>
              <span style={{ fontSize: "28px" }}>📉</span>
            </div>
          </div>
        </div>
      )}

      {/* PHASE 2: BYTEBRIDGE TRANSFORMATION REVEAL (85 to 180 frames) */}
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
              transform: `translateY(${(1 - solutionSpring) * 30}px) scale(${0.94 + solutionSpring * 0.06})`,
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 36px",
              borderRadius: "9999px",
              backgroundColor: "rgba(46, 189, 133, 0.15)",
              border: "2px solid rgba(46, 189, 133, 0.5)",
              boxShadow: "0 0 40px rgba(46, 189, 133, 0.35)",
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
              DIGITALIZA TU NEGOCIO
            </span>
          </div>

          {/* Animated SVG Bridge Logo */}
          <div style={{ margin: "12px 0" }}>
            <ByteBridgeLogoAnimated
              size={270}
              showWordmark={true}
              wordmarkSize={68}
              delay={88}
            />
          </div>

          {/* Punchy Headline */}
          <h1
            style={{
              opacity: titleSpring,
              transform: `translateY(${(1 - titleSpring) * 20}px)`,
              fontSize: "58px",
              fontWeight: 900,
              lineHeight: 1.15,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "-1px",
              margin: 0,
              maxWidth: "920px",
            }}
          >
            La Plataforma Web para{" "}
            <span
              style={{
                color: "#2ebd85",
                textShadow: "0 0 35px rgba(46, 189, 133, 0.6)",
              }}
            >
              Restaurantes, Bares y Hoteles
            </span>
          </h1>

          {/* Feature Badges */}
          <div
            style={{
              opacity: pillsSpring,
              transform: `scale(${0.92 + pillsSpring * 0.08})`,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "14px",
              marginTop: "6px",
            }}
          >
            <span
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                backgroundColor: "rgba(46, 189, 133, 0.12)",
                border: "1.5px solid rgba(46, 189, 133, 0.4)",
                fontSize: "22px",
                fontWeight: 800,
                color: "#6ee7b7",
              }}
            >
              ⚡ 0% Comisiones
            </span>
            <span
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1.5px solid rgba(255, 255, 255, 0.2)",
                fontSize: "22px",
                fontWeight: 700,
                color: "#e2e8f0",
              }}
            >
              🍽️ Menú Interactivo
            </span>
            <span
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1.5px solid rgba(255, 255, 255, 0.2)",
                fontSize: "22px",
                fontWeight: 700,
                color: "#e2e8f0",
              }}
            >
              💵 Tasa BCV al Día
            </span>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
}
