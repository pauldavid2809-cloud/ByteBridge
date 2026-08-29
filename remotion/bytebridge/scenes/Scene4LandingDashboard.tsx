import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const BCV_RATE = 70.5;

export function Scene4LandingDashboard() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const cardsSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Animated Sales counter
  const targetSales = 1420;
  const currentSales = Math.floor(
    interpolate(frame, [0, 45], [0, targetSales], {
      extrapolateRight: "clamp",
    })
  );
  const salesVES = currentSales * BCV_RATE;

  // Capacity animated
  const capacity = Math.min(
    92,
    Math.floor(interpolate(frame, [0, 40], [0, 92], { extrapolateRight: "clamp" }))
  );

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "70px 45px 60px 45px",
        boxSizing: "border-box",
      }}
    >
      {/* Top Header */}
      <div style={{ textAlign: "center", zIndex: 10 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 30px",
            borderRadius: "9999px",
            backgroundColor: "#2ebd85",
            color: "#052e20",
            fontSize: "22px",
            fontWeight: 900,
            letterSpacing: "2px",
            textTransform: "uppercase",
            boxShadow: "0 8px 25px rgba(46, 189, 133, 0.4)",
          }}
        >
          <span>💻</span>
          <span>03 · LANDING PAGE & PANEL GERENCIAL</span>
        </div>

        <h2
          style={{
            fontSize: "58px",
            fontWeight: 900,
            lineHeight: 1.15,
            marginTop: "18px",
            marginBottom: "8px",
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "-1px",
          }}
        >
          Tu Marca en el Siguiente Nivel
        </h2>

        <p
          style={{
            fontSize: "26px",
            color: "#cbd5e1",
            margin: 0,
            fontWeight: 500,
          }}
        >
          WebApp ultrarrápida sin descargas de apps + métricas en vivo
        </p>
      </div>

      {/* Center: Showcase Grid (Landing features + Manager KPIs) */}
      <div
        style={{
          transform: `scale(${0.92 + cardsSpring * 0.08})`,
          opacity: Math.min(1, Math.max(0, cardsSpring)),
          width: "720px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          zIndex: 5,
        }}
      >
        {/* WebApp Card Feature */}
        <div
          style={{
            padding: "26px 30px",
            borderRadius: "32px",
            border: "2px solid rgba(46, 189, 133, 0.3)",
            backgroundColor: "rgba(13, 19, 17, 0.92)",
            boxShadow: "0 20px 45px rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "18px",
                backgroundColor: "rgba(46, 189, 133, 0.2)",
                border: "2px solid #2ebd85",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
              }}
            >
              🌐
            </div>
            <div>
              <div style={{ fontSize: "26px", fontWeight: 900, color: "#ffffff" }}>
                Landing Page & WebApp a Medida
              </div>
              <div style={{ fontSize: "17px", color: "#36d698", fontWeight: 700, marginTop: "2px" }}>
                100% Web · Cero descargas pesadas de App Store
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "8px 18px",
              borderRadius: "12px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "#f1f5f9",
              fontSize: "16px",
              fontWeight: 800,
            }}
          >
            ⚡ 0.3s Load
          </div>
        </div>

        {/* Live KPI Cards Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {/* Sales Card */}
          <div
            style={{
              padding: "24px 26px",
              borderRadius: "32px",
              border: "2px solid rgba(255, 255, 255, 0.12)",
              backgroundColor: "rgba(13, 19, 17, 0.92)",
              boxShadow: "0 20px 45px rgba(0,0,0,0.6)",
            }}
          >
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#94a3b8" }}>
              Ventas en Vivo (Hoy)
            </div>
            <div
              style={{
                fontSize: "48px",
                fontWeight: 900,
                color: "#36d698",
                marginTop: "4px",
                lineHeight: 1,
              }}
            >
              ${currentSales} USD
            </div>
            <div
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#64748b",
                marginTop: "8px",
                fontFamily: "monospace",
              }}
            >
              ≈ {salesVES.toLocaleString("es-VE", { maximumFractionDigits: 0 })} Bs
            </div>
          </div>

          {/* Capacity Card */}
          <div
            style={{
              padding: "24px 26px",
              borderRadius: "32px",
              border: "2px solid rgba(255, 255, 255, 0.12)",
              backgroundColor: "rgba(13, 19, 17, 0.92)",
              boxShadow: "0 20px 45px rgba(0,0,0,0.6)",
            }}
          >
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#94a3b8" }}>
              Aforo & Mesas Activas
            </div>
            <div
              style={{
                fontSize: "48px",
                fontWeight: 900,
                color: "#2ebd85",
                marginTop: "4px",
                lineHeight: 1,
              }}
            >
              {capacity}%
            </div>
            <div
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#36d698",
                marginTop: "8px",
              }}
            >
              ● 24 Mesas en Servicio
            </div>
          </div>
        </div>

        {/* Live Orders Activity Strip */}
        <div
          style={{
            padding: "20px 26px",
            borderRadius: "24px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            border: "1.5px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "22px" }}>🛎️</span>
            <span style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff" }}>
              Panel de cocina y comandas sincronizado en tiempo real
            </span>
          </div>
          <span
            style={{
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(46, 189, 133, 0.2)",
              color: "#36d698",
              fontSize: "14px",
              fontWeight: 900,
            }}
          >
            EN LÍNEA
          </span>
        </div>
      </div>

      {/* Bottom Floating Pill */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "16px 36px",
          borderRadius: "24px",
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(20px)",
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: "24px" }}>📊</span>
        <span style={{ fontSize: "22px", fontWeight: 800, color: "#f1f5f9" }}>
          Controla tu negocio desde tu teléfono estés donde estés
        </span>
      </div>
    </AbsoluteFill>
  );
}
