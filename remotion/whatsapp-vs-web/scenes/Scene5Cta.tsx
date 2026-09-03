import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

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
          width: "750px",
          height: "750px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(46, 189, 133, 0.25) 0%, rgba(6, 182, 212, 0.15) 50%, rgba(0,0,0,0) 75%)",
          filter: "blur(80px)",
        }}
      />

      {/* Official byte/bridge Vector Logo */}
      <div
        style={{
          transform: `scale(${logoSpring})`,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "40px",
          zIndex: 5,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "160px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(46, 189, 133, 0.4) 0%, rgba(0,0,0,0) 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
        <Img
          src={staticFile("bytebridge-logo.svg")}
          style={{
            width: "520px",
            height: "auto",
            filter: "drop-shadow(0 0 30px rgba(46, 189, 133, 0.5))",
          }}
        />
      </div>

      {/* Headline principal */}
      <h2
        style={{
          color: "#FFFFFF",
          fontSize: "52px",
          fontWeight: 900,
          lineHeight: 1.22,
          letterSpacing: "-1.5px",
          maxWidth: "880px",
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
          gap: "18px",
          marginBottom: "50px",
          zIndex: 5,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "18px 28px",
            borderRadius: "20px",
            textAlign: "left",
          }}
        >
          <div style={{ color: "#94A3B8", fontSize: "14px", fontWeight: 700, letterSpacing: "1px" }}>LANDING EXPRESS</div>
          <div style={{ color: "#38BDF8", fontSize: "30px", fontWeight: 900, marginTop: "4px" }}>$100–180</div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            border: "1px solid rgba(16, 185, 129, 0.35)",
            padding: "18px 28px",
            borderRadius: "20px",
            textAlign: "left",
          }}
        >
          <div style={{ color: "#6EE7B7", fontSize: "14px", fontWeight: 700, letterSpacing: "1px" }}>SISTEMA A MEDIDA</div>
          <div style={{ color: "#10B981", fontSize: "30px", fontWeight: 900, marginTop: "4px" }}>Desde $400</div>
        </div>
      </div>

      {/* Pregunta directa al dueño */}
      <div
        style={{
          color: "#E2E8F0",
          fontSize: "38px",
          fontWeight: 800,
          marginBottom: "40px",
          maxWidth: "820px",
          lineHeight: 1.25,
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
          padding: "24px 64px",
          borderRadius: "28px",
          fontSize: "34px",
          fontWeight: 900,
          boxShadow: "0 15px 45px rgba(16, 185, 129, 0.45)",
          letterSpacing: "0.5px",
          zIndex: 5,
        }}
      >
        👉 Escríbeme al DM o WhatsApp
      </div>

      {/* Subtítulo institucional sin nombre personal */}
      <div
        style={{
          marginTop: "40px",
          color: "#64748B",
          fontSize: "22px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          zIndex: 5,
        }}
      >
        byte/bridge · Soluciones Digitales
      </div>
    </AbsoluteFill>
  );
}
