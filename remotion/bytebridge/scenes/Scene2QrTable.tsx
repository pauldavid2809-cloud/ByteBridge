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

  // Entradas con física de resortes
  const headerSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const phoneSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 14, stiffness: 85 },
  });

  // Toggle de moneda animado a partir del frame 45
  const isVesMode = frame > 45;
  const toggleSpring = spring({
    frame: frame - 45,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  // Toast de comanda enviada a partir del frame 65
  const toastSpring = spring({
    frame: frame - 65,
    fps,
    config: { damping: 10, stiffness: 130 },
  });

  const items = [
    {
      name: "Parrilla Mixta de Solomo & Pechuga",
      desc: "Cortes a la brasa, chorizo artesanal y guasacaca",
      priceUSD: 24,
      tag: "TOP VENTAS",
    },
    {
      name: "Hamburguesa Doble Angus Smash",
      desc: "Queso cheddar fundido y pan brioche artesanal",
      priceUSD: 12,
      tag: "POPULAR",
    },
    {
      name: "Mojito Tropical de Maracuyá",
      desc: "Ron blanco añejo, hierbabuena fresca y parchita",
      priceUSD: 6,
      tag: "COCTEL",
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
      }}
    >
      {/* Top Header Section */}
      <div
        style={{
          opacity: headerSpring,
          transform: `translateY(${(1 - headerSpring) * 30}px)`,
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
          <span>📱</span>
          <span>01 · QR EN MESA & COMANDAS DIRECTAS</span>
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
          Escanea, Pide y Paga sin Esperas
        </h2>

        <p
          style={{
            fontSize: "26px",
            color: "#cbd5e1",
            margin: 0,
            fontWeight: 500,
          }}
        >
          Menú interactivo con conversión automática a tasa oficial BCV:{" "}
          <strong style={{ color: "#36d698", fontWeight: 800 }}>
            {BCV_RATE.toFixed(2)} Bs / $
          </strong>
        </p>
      </div>

      {/* Center: Smartphone Mockup Container */}
      <div
        style={{
          transform: `translateY(${(1 - phoneSpring) * 120}px) scale(${
            0.92 + phoneSpring * 0.08
          })`,
          opacity: Math.min(1, Math.max(0, phoneSpring)),
          width: "720px",
          borderRadius: "44px",
          border: "6px solid #27272a",
          backgroundColor: "#0d1311",
          padding: "30px",
          boxShadow:
            "0 35px 90px -15px rgba(0,0,0,0.9), 0 0 60px rgba(46, 189, 133, 0.25)",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 5,
        }}
      >
        {/* Phone Top Bar: Table Info & Currency Switch */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1.5px solid rgba(255,255,255,0.12)",
            paddingBottom: "20px",
            marginBottom: "20px",
          }}
        >
          {/* Table Indicator */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                backgroundColor: "rgba(46, 189, 133, 0.2)",
                border: "1.5px solid #2ebd85",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              📍
            </div>
            <div>
              <div style={{ fontSize: "24px", fontWeight: 900, color: "#ffffff" }}>
                Mesa #07 · Terraza
              </div>
              <div style={{ fontSize: "16px", color: "#36d698", fontWeight: 700 }}>
                ● Sesión Activa · Pedido en Vivo
              </div>
            </div>
          </div>

          {/* Animated Currency Toggle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1.5px solid rgba(255,255,255,0.15)",
              borderRadius: "16px",
              padding: "4px",
            }}
          >
            <div
              style={{
                padding: "8px 18px",
                borderRadius: "12px",
                backgroundColor: !isVesMode ? "#ffffff" : "transparent",
                color: !isVesMode ? "#000000" : "#94a3b8",
                fontWeight: 900,
                fontSize: "18px",
                transition: "all 0.2s ease",
              }}
            >
              USD ($)
            </div>
            <div
              style={{
                padding: "8px 18px",
                borderRadius: "12px",
                backgroundColor: isVesMode ? "#2ebd85" : "transparent",
                color: isVesMode ? "#052e20" : "#94a3b8",
                fontWeight: 900,
                fontSize: "18px",
                transform: `scale(${isVesMode ? 1 + toggleSpring * 0.05 : 1})`,
              }}
            >
              Bs (VES)
            </div>
          </div>
        </div>

        {/* Menu Items Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {items.map((item, idx) => {
            const itemSpring = spring({
              frame: frame - 15 - idx * 8,
              fps,
              config: { damping: 12, stiffness: 100 },
            });
            const priceVES = item.priceUSD * BCV_RATE;

            return (
              <div
                key={idx}
                style={{
                  transform: `scale(${Math.max(0.9, itemSpring)})`,
                  opacity: Math.min(1, Math.max(0, itemSpring)),
                  borderRadius: "24px",
                  border: "1.5px solid rgba(255, 255, 255, 0.1)",
                  backgroundColor: "rgba(0, 0, 0, 0.55)",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flex: 1, paddingRight: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span
                      style={{
                        fontSize: "22px",
                        fontWeight: 800,
                        color: "#ffffff",
                      }}
                    >
                      {item.name}
                    </span>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: "9999px",
                        backgroundColor: "rgba(46, 189, 133, 0.2)",
                        color: "#36d698",
                        fontSize: "13px",
                        fontWeight: 800,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#94a3b8",
                      margin: "4px 0 0 0",
                      fontWeight: 500,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Price Display */}
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div
                    style={{
                      fontSize: "26px",
                      fontWeight: 900,
                      color: "#ffffff",
                    }}
                  >
                    ${item.priceUSD}.00
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#36d698",
                      fontFamily: "monospace",
                      marginTop: "2px",
                    }}
                  >
                    ≈ {priceVES.toLocaleString("es-VE", { maximumFractionDigits: 0 })} Bs
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Success Order Toast */}
        {frame > 60 && (
          <div
            style={{
              transform: `scale(${Math.max(0.9, toastSpring)}) translateY(-50%)`,
              position: "absolute",
              top: "50%",
              left: "40px",
              right: "40px",
              padding: "24px 30px",
              borderRadius: "26px",
              backgroundColor: "rgba(5, 46, 32, 0.96)",
              border: "3px solid #2ebd85",
              boxShadow:
                "0 25px 60px rgba(0,0,0,0.85), 0 0 40px rgba(46, 189, 133, 0.5)",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              zIndex: 30,
            }}
          >
            <div style={{ fontSize: "44px" }}>⚡</div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: 900,
                  color: "#36d698",
                  textTransform: "uppercase",
                }}
              >
                Comanda Enviada a Cocina
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginTop: "4px",
                }}
              >
                Mesa #07 · Impresión / Notificación en 0.5 seg
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Key Benefit Pill */}
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
        <span style={{ fontSize: "24px" }}>🚀</span>
        <span style={{ fontSize: "22px", fontWeight: 800, color: "#f1f5f9" }}>
          Aumenta la rotación de tus mesas y elimina errores de comanda
        </span>
      </div>
    </AbsoluteFill>
  );
}
