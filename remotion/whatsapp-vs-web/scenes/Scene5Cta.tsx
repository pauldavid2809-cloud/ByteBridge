import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export function Scene5Cta() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoSpring = spring({
    frame,
    fps,
    config: { damping: 13, stiffness: 120 },
  });

  const cardSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  const buttonSpring = spring({
    frame: frame - 30,
    fps,
    config: { damping: 12, stiffness: 150 },
  });

  const pulse = Math.sin(frame * 0.2) * 0.04 + 1;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 60px",
        textAlign: "center",
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        overflow: "hidden",
      }}
    >
      {/* Background glow cyan & emerald */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(16, 185, 129, 0.15) 50%, rgba(0,0,0,0) 75%)",
          filter: "blur(70px)",
        }}
      />

      {/* Logo byte/bridge */}
      <div
        style={{
          transform: `scale(${logoSpring})`,
          display: "flex",
          alignItems: "center",
          gap: "18px",
          marginBottom: "36px",
          zIndex: 5,
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "22px",
            background: "linear-gradient(135deg, #06B6D4 0%, #10B981 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "42px",
            boxShadow: "0 10px 30px rgba(6, 182, 212, 0.4)",
          }}
        >
          ⚡
        </div>
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "58px",
            fontWeight: 900,
            letterSpacing: "-1px",
            fontFamily: "monospace",
          }}
        >
          byte<span style={{ color: "#06B6D4" }}>/</span>bridge
        </div>
      </div>

      {/* Headline principal */}
      <h2
        style={{
          color: "#FFFFFF",
          fontSize: "50px",
          fontWeight: 900,
          lineHeight: 1.25,
          letterSpacing: "-1px",
          maxWidth: "850px",
          margin: "0 0 40px 0",
          zIndex: 5,
        }}
      >
        Desarrollo esto{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #38BDF8 0%, #34D399 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          a la medida
        </span>{" "}
        para negocios reales.
      </h2>

      {/* Value badges: Planes reales */}
      <div
        style={{
          transform: `scale(${cardSpring})`,
          display: "flex",
          gap: "16px",
          marginBottom: "50px",
          zIndex: 5,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "16px 24px",
            borderRadius: "18px",
            textAlign: "left",
          }}
        >
          <div style={{ color: "#94A3B8", fontSize: "14px", fontWeight: 700 }}>LANDING EXPRESS</div>
          <div style={{ color: "#38BDF8", fontSize: "28px", fontWeight: 900 }}>$100–180</div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            padding: "16px 24px",
            borderRadius: "18px",
            textAlign: "left",
          }}
        >
          <div style={{ color: "#6EE7B7", fontSize: "14px", fontWeight: 700 }}>SISTEMA A MEDIDA</div>
          <div style={{ color: "#10B981", fontSize: "28px", fontWeight: 900 }}>Desde $400</div>
        </div>
      </div>

      {/* Pregunta directa al dueño */}
      <div
        style={{
          color: "#E2E8F0",
          fontSize: "36px",
          fontWeight: 800,
          marginBottom: "40px",
          maxWidth: "800px",
          zIndex: 5,
        }}
      >
        ¿Tu negocio también pierde reservas por WhatsApp?
      </div>

      {/* Botón CTA */}
      <div
        style={{
          transform: `scale(${buttonSpring * pulse})`,
          backgroundColor: "#10B981",
          color: "#000000",
          padding: "24px 60px",
          borderRadius: "26px",
          fontSize: "32px",
          fontWeight: 900,
          boxShadow: "0 15px 40px rgba(16, 185, 129, 0.4)",
          letterSpacing: "0.5px",
          zIndex: 5,
        }}
      >
        👉 Escríbeme al DM o WhatsApp
      </div>

      {/* Autor */}
      <div
        style={{
          marginTop: "40px",
          color: "#64748B",
          fontSize: "22px",
          fontWeight: 600,
          letterSpacing: "1px",
          zIndex: 5,
        }}
      >
        Paul David · byte/bridge Venezuela
      </div>
    </AbsoluteFill>
  );
}
