import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ByteBridgeLogoAnimated } from "../components/ByteBridgeLogoAnimated";

export function Scene5OutroCta() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const ctaSpring = spring({
    frame,
    fps,
    config: { damping: 13, stiffness: 95 },
  });

  const buttonSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 11, stiffness: 120 },
  });

  const pulse = Math.sin(frame * 0.12) * 0.04 + 1;

  // Ripples for CTA button
  const ripple1 = (frame % 45) / 45;
  const ripple2 = ((frame + 22) % 45) / 45;

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "70px 45px 60px 45px",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      {/* Top Tag */}
      <div
        style={{
          opacity: ctaSpring,
          transform: `translateY(${(1 - ctaSpring) * 20}px)`,
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 32px",
            borderRadius: "9999px",
            backgroundColor: "rgba(46, 189, 133, 0.15)",
            border: "2px solid rgba(46, 189, 133, 0.4)",
            boxShadow: "0 0 35px rgba(46, 189, 133, 0.3)",
          }}
        >
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#2ebd85",
              boxShadow: "0 0 12px #2ebd85",
            }}
          />
          <span
            style={{
              fontSize: "22px",
              fontWeight: 900,
              color: "#36d698",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            BYTEBRIDGE · SOFTWARE STUDIO
          </span>
        </div>
      </div>

      {/* Center: Animated Logo & Official Value Pillars */}
      <div
        style={{
          transform: `scale(${0.92 + ctaSpring * 0.08})`,
          opacity: Math.min(1, Math.max(0, ctaSpring)),
          width: "780px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {/* ByteBridge Logo */}
        <ByteBridgeLogoAnimated
          size={260}
          showWordmark={true}
          wordmarkSize={68}
          delay={0}
        />

        <h1
          style={{
            margin: 0,
            fontSize: "52px",
            fontWeight: 900,
            lineHeight: 1.15,
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "-1px",
          }}
        >
          Lleva tu Negocio al{" "}
          <span
            style={{
              color: "#2ebd85",
              textShadow: "0 0 35px rgba(46, 189, 133, 0.6)",
            }}
          >
            Siguiente Nivel Digital
          </span>
        </h1>

        {/* 3 Value Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "14px",
            width: "100%",
          }}
        >
          <div
            style={{
              padding: "16px",
              borderRadius: "18px",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <span style={{ fontSize: "28px" }}>⚡</span>
            <p style={{ margin: "6px 0 0 0", fontSize: "16px", fontWeight: 800, color: "#ffffff" }}>
              Entrega Rápida
            </p>
            <p style={{ margin: "2px 0 0 0", fontSize: "13px", color: "#94a3b8" }}>
              Listo en 3 a 5 días
            </p>
          </div>

          <div
            style={{
              padding: "16px",
              borderRadius: "18px",
              backgroundColor: "rgba(46, 189, 133, 0.08)",
              border: "1.5px solid rgba(46, 189, 133, 0.4)",
            }}
          >
            <span style={{ fontSize: "28px" }}>💰</span>
            <p style={{ margin: "6px 0 0 0", fontSize: "16px", fontWeight: 800, color: "#34d399" }}>
              0% Comisiones
            </p>
            <p style={{ margin: "2px 0 0 0", fontSize: "13px", color: "#94a3b8" }}>
              100% de tus ventas
            </p>
          </div>

          <div
            style={{
              padding: "16px",
              borderRadius: "18px",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <span style={{ fontSize: "28px" }}>🛡️</span>
            <p style={{ margin: "6px 0 0 0", fontSize: "16px", fontWeight: 800, color: "#ffffff" }}>
              Soporte Incluido
            </p>
            <p style={{ margin: "2px 0 0 0", fontSize: "13px", color: "#94a3b8" }}>
              Capacitación total
            </p>
          </div>
        </div>

        {/* Big Pulsing WhatsApp CTA Button */}
        <div style={{ position: "relative", width: "100%", marginTop: "8px" }}>
          {/* Ripple 1 */}
          <div
            style={{
              position: "absolute",
              inset: "-8px",
              borderRadius: "28px",
              border: "2px solid #25d366",
              transform: `scale(${1 + ripple1 * 0.15})`,
              opacity: 1 - ripple1,
              pointerEvents: "none",
            }}
          />
          {/* Ripple 2 */}
          <div
            style={{
              position: "absolute",
              inset: "-8px",
              borderRadius: "28px",
              border: "2px solid #25d366",
              transform: `scale(${1 + ripple2 * 0.15})`,
              opacity: 1 - ripple2,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              opacity: buttonSpring,
              transform: `scale(${pulse * (0.94 + buttonSpring * 0.06)})`,
              width: "100%",
              padding: "24px 36px",
              borderRadius: "24px",
              backgroundColor: "#25d366",
              color: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "18px",
              boxShadow: "0 20px 50px rgba(37, 211, 102, 0.4)",
            }}
          >
            <svg
              style={{ width: "36px", height: "36px", fill: "#000000" }}
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <div style={{ textAlign: "left" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "26px",
                  fontWeight: 900,
                  letterSpacing: "-0.5px",
                }}
              >
                Pide tu Demo Personalizada
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "16px",
                  fontWeight: 700,
                  opacity: 0.85,
                }}
              >
                Habla con el equipo de ByteBridge por WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div
        style={{
          opacity: ctaSpring,
          display: "flex",
          alignItems: "center",
          gap: "18px",
          fontSize: "18px",
          color: "#94a3b8",
          fontWeight: 600,
          zIndex: 10,
        }}
      >
        <span>🌐 byte-bridge.vercel.app</span>
        <span>·</span>
        <span>📍 Maracaibo & LATAM</span>
      </div>
    </AbsoluteFill>
  );
}
