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
    config: { damping: 12, stiffness: 95 },
  });

  const buttonSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  const pulse = Math.sin(frame * 0.15) * 0.04 + 1;

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 45px 70px 45px",
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
            boxShadow: "0 0 30px rgba(46, 189, 133, 0.3)",
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
            IMPULSA TU NEGOCIO HOY
          </span>
        </div>
      </div>

      {/* Center: Big Animated Logo & Official CTA Card */}
      <div
        style={{
          transform: `scale(${0.92 + ctaSpring * 0.08})`,
          opacity: Math.min(1, Math.max(0, ctaSpring)),
          width: "740px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          zIndex: 5,
        }}
      >
        {/* Animated ByteBridge Logo */}
        <ByteBridgeLogoAnimated
          size={240}
          showWordmark={true}
          wordmarkSize={60}
          delay={0}
        />

        {/* CTA Heading */}
        <h2
          style={{
            fontSize: "52px",
            fontWeight: 900,
            lineHeight: 1.15,
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "-1px",
            margin: 0,
          }}
        >
          ¿Listo para Modernizar tu Restaurante o Evento?
        </h2>

        <p
          style={{
            fontSize: "26px",
            color: "#cbd5e1",
            margin: 0,
            fontWeight: 500,
            maxWidth: "640px",
          }}
        >
          Solicita una demo interactiva personalizada para tu local sin compromiso.
        </p>

        {/* WhatsApp Official Big Action Button */}
        <div
          style={{
            transform: `scale(${Math.max(0.9, buttonSpring) * pulse})`,
            width: "100%",
            padding: "24px 36px",
            borderRadius: "26px",
            backgroundColor: "#2ebd85",
            boxShadow:
              "0 20px 50px rgba(46, 189, 133, 0.45), 0 0 35px rgba(54, 214, 152, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            boxSizing: "border-box",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: "38px" }}>📲</span>
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 800,
                color: "#052e20",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              WhatsApp Oficial de Contacto
            </div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: 900,
                color: "#052e20",
                letterSpacing: "0.5px",
              }}
            >
              +58 412-0308674
            </div>
          </div>
        </div>

        {/* Social & Web Badges Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            marginTop: "6px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              fontSize: "20px",
              fontWeight: 800,
              color: "#e2e8f0",
            }}
          >
            <span>📸</span>
            <span>@bytebridge.cloud</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              fontSize: "20px",
              fontWeight: 800,
              color: "#e2e8f0",
            }}
          >
            <span>🌐</span>
            <span>bytebridge.cloud</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{ zIndex: 10 }}>
        <p
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#64748b",
            margin: 0,
          }}
        >
          ByteBridge · Soluciones Tecnológicas · Maracaibo, Venezuela
        </p>
      </div>
    </AbsoluteFill>
  );
}
