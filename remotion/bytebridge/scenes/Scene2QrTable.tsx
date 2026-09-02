import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const BCV_RATE = 70.5;

export function Scene2QrTable() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance springs
  const headerSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  const phoneSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 14, stiffness: 85 },
  });

  // Dynamic 3D tilt
  const tiltX = Math.sin(frame * 0.04) * 4;
  const tiltY = Math.cos(frame * 0.04) * 4;

  // Currency toggle animated at frame 60
  const isVesMode = frame > 60;
  const toggleSpring = spring({
    frame: frame - 60,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  // Toast confirmation at frame 110
  const toastSpring = spring({
    frame: frame - 110,
    fps,
    config: { damping: 11, stiffness: 130 },
  });

  const items = [
    {
      name: "Parrilla Mixta Solomo & Angus",
      desc: "Cortes a la brasa con guasacaca y tostones",
      priceUSD: 24,
      tag: "TOP VENTAS",
      selected: true,
    },
    {
      name: "Hamburguesa Doble Smash Bacon",
      desc: "Doble carne angus, queso cheddar y pan brioche",
      priceUSD: 12,
      tag: "FAVORITO",
      selected: false,
    },
    {
      name: "Cóctel Mojito Parchita Tropical",
      desc: "Ron blanco añejo, hierbabuena fresca y maracuyá",
      priceUSD: 6,
      tag: "BARRA",
      selected: false,
    },
  ];

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "70px 45px 60px 45px",
        boxSizing: "border-box",
        perspective: "1200px",
      }}
    >
      {/* Top Header Section */}
      <div
        style={{
          opacity: headerSpring,
          transform: `translateY(${(1 - headerSpring) * 25}px)`,
          textAlign: "center",
          zIndex: 10,
        }}
      >
        {/* Step Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 26px",
            borderRadius: "9999px",
            backgroundColor: "rgba(46, 189, 133, 0.15)",
            border: "1.5px solid rgba(46, 189, 133, 0.4)",
          }}
        >
          <span style={{ fontSize: "18px" }}>🍽️</span>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 800,
              color: "#36d698",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            MENÚ INTERACTIVO & TASA BCV
          </span>
        </div>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: 900,
            color: "#ffffff",
            margin: "14px 0 0 0",
            textTransform: "uppercase",
            letterSpacing: "-1px",
          }}
        >
          Tus Clientes Piden en Mesa{" "}
          <span style={{ color: "#2ebd85" }}>en 3 Clics</span>
        </h2>
      </div>

      {/* Center 3D Smartphone Mockup */}
      <div
        style={{
          transform: `scale(${0.92 + phoneSpring * 0.08}) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          opacity: Math.min(1, Math.max(0, phoneSpring)),
          width: "740px",
          height: "1260px",
          borderRadius: "52px",
          backgroundColor: "#0d1411",
          border: "4px solid rgba(46, 189, 133, 0.4)",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.8), 0 0 45px rgba(46, 189, 133, 0.25)",
          padding: "24px 28px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dynamic Notch */}
        <div
          style={{
            alignSelf: "center",
            width: "180px",
            height: "28px",
            backgroundColor: "#000000",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#2ebd85",
              boxShadow: "0 0 8px #2ebd85",
            }}
          />
        </div>

        {/* Mock App Header: Brand + Currency Switcher */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 12px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div>
            <span style={{ fontSize: "14px", color: "#2ebd85", fontWeight: 700, letterSpacing: "1px" }}>
              MESA 04 · TERRAZA
            </span>
            <p style={{ margin: "2px 0 0 0", fontSize: "24px", fontWeight: 900, color: "#ffffff" }}>
              Menú Digital
            </p>
          </div>

          {/* Interactive Currency Switcher */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "6px",
              borderRadius: "14px",
              backgroundColor: "rgba(0,0,0,0.6)",
              border: "1.5px solid rgba(46, 189, 133, 0.5)",
              boxShadow: isVesMode ? "0 0 20px rgba(46, 189, 133, 0.4)" : "none",
            }}
          >
            <span
              style={{
                padding: "6px 14px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 800,
                backgroundColor: !isVesMode ? "#2ebd85" : "transparent",
                color: !isVesMode ? "#000000" : "#94a3b8",
                transition: "all 0.2s ease",
              }}
            >
              $ USD
            </span>
            <span
              style={{
                padding: "6px 14px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 800,
                backgroundColor: isVesMode ? "#2ebd85" : "transparent",
                color: isVesMode ? "#000000" : "#94a3b8",
                transition: "all 0.2s ease",
              }}
            >
              Bs. BCV
            </span>
          </div>
        </div>

        {/* Rate Banner */}
        <div
          style={{
            padding: "10px 16px",
            borderRadius: "14px",
            backgroundColor: "rgba(46, 189, 133, 0.1)",
            border: "1px solid rgba(46, 189, 133, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "15px", color: "#34d399", fontWeight: 700 }}>
            ⚡ Tasa Oficial BCV: {BCV_RATE} Bs/$
          </span>
          <span style={{ fontSize: "13px", color: "#94a3b8", fontWeight: 600 }}>
            Actualizado Automático
          </span>
        </div>

        {/* Interactive Menu List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
          {items.map((item, idx) => {
            const price = isVesMode
              ? `Bs. ${(item.priceUSD * BCV_RATE).toLocaleString("es-VE", {
                  minimumFractionDigits: 2,
                })}`
              : `$${item.priceUSD}.00 USD`;

            return (
              <div
                key={idx}
                style={{
                  padding: "18px 20px",
                  borderRadius: "20px",
                  backgroundColor: item.selected
                    ? "rgba(46, 189, 133, 0.12)"
                    : "rgba(255,255,255,0.03)",
                  border: item.selected
                    ? "2px solid #2ebd85"
                    : "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: item.selected
                    ? "0 10px 25px rgba(46, 189, 133, 0.15)"
                    : "none",
                }}
              >
                <div style={{ maxWidth: "420px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        padding: "3px 8px",
                        borderRadius: "6px",
                        backgroundColor: item.selected ? "#2ebd85" : "rgba(255,255,255,0.1)",
                        color: item.selected ? "#000" : "#cbd5e1",
                      }}
                    >
                      {item.tag}
                    </span>
                    <p style={{ margin: 0, fontSize: "20px", fontWeight: 800, color: "#ffffff" }}>
                      {item.name}
                    </p>
                  </div>
                  <p style={{ margin: "4px 0 0 0", fontSize: "14px", color: "#94a3b8" }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: 900,
                      color: isVesMode ? "#34d399" : "#ffffff",
                    }}
                  >
                    {price}
                  </span>
                  <button
                    style={{
                      padding: "6px 14px",
                      borderRadius: "10px",
                      backgroundColor: item.selected ? "#2ebd85" : "rgba(255,255,255,0.1)",
                      color: item.selected ? "#000000" : "#ffffff",
                      fontSize: "13px",
                      fontWeight: 800,
                      border: "none",
                    }}
                  >
                    {item.selected ? "✓ En Carrito" : "+ Agregar"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Toast Notification on Confirmation */}
        {frame > 110 && (
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "30px",
              right: "30px",
              opacity: toastSpring,
              transform: `translateY(${(1 - toastSpring) * 40}px)`,
              padding: "18px 24px",
              borderRadius: "22px",
              backgroundColor: "#10b981",
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 30,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "28px" }}>✅</span>
              <div>
                <p style={{ margin: 0, fontSize: "18px", fontWeight: 900, color: "#000000" }}>
                  ¡Orden Enviada a Cocina!
                </p>
                <p style={{ margin: 0, fontSize: "14px", fontWeight: 700, color: "rgba(0,0,0,0.8)" }}>
                  Mesa 04 · Total: $24.00 (Bs. 1.692,00)
                </p>
              </div>
            </div>
            <span style={{ fontSize: "20px" }}>⚡</span>
          </div>
        )}
      </div>

      {/* Bottom Benefit Footer */}
      <div
        style={{
          opacity: headerSpring,
          display: "flex",
          alignItems: "center",
          gap: "16px",
          zIndex: 10,
        }}
      >
        <span
          style={{
            padding: "8px 20px",
            borderRadius: "9999px",
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            fontSize: "18px",
            fontWeight: 700,
            color: "#cbd5e1",
          }}
        >
          🚫 Sin Apps de Terceros
        </span>
        <span
          style={{
            padding: "8px 20px",
            borderRadius: "9999px",
            backgroundColor: "rgba(46, 189, 133, 0.15)",
            border: "1px solid rgba(46, 189, 133, 0.4)",
            fontSize: "18px",
            fontWeight: 800,
            color: "#34d399",
          }}
        >
          💰 0% Comisiones por Venta
        </span>
      </div>
    </AbsoluteFill>
  );
}
