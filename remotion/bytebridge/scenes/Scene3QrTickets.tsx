import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export function Scene3QrTickets() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  const ticketSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 13, stiffness: 90 },
  });

  // Laser scanner sweeping vertically across the QR code between frame 30 and 130
  const laserProgress = interpolate(frame, [35, 120], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const isScanned = frame > 110;
  const verifiedSpring = spring({
    frame: frame - 110,
    fps,
    config: { damping: 10, stiffness: 140 },
  });

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
      {/* Top Header */}
      <div
        style={{
          opacity: headerSpring,
          transform: `translateY(${(1 - headerSpring) * 25}px)`,
          textAlign: "center",
          zIndex: 10,
        }}
      >
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
          <span style={{ fontSize: "18px" }}>🎟️</span>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 800,
              color: "#36d698",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            PASES DIGITALES & CÓDIGOS QR
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
          Control de Acceso en Puerta{" "}
          <span style={{ color: "#2ebd85" }}>en 1 Segundo</span>
        </h2>
      </div>

      {/* Center: Holographic VIP Boarding Pass Card */}
      <div
        style={{
          transform: `scale(${0.92 + ticketSpring * 0.08})`,
          opacity: Math.min(1, Math.max(0, ticketSpring)),
          width: "720px",
          borderRadius: "36px",
          backgroundColor: "#0d1411",
          border: "3px solid rgba(46, 189, 133, 0.5)",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.85), 0 0 50px rgba(46, 189, 133, 0.3)",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Ticket Header */}
        <div
          style={{
            padding: "26px 32px",
            background: "linear-gradient(135deg, #13241b 0%, #0d1411 100%)",
            borderBottom: "2px dashed rgba(46, 189, 133, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 800,
                color: "#2ebd85",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              VIP PASS · RESERVACIÓN OFICIAL
            </span>
            <h3
              style={{
                margin: "4px 0 0 0",
                fontSize: "30px",
                fontWeight: 900,
                color: "#ffffff",
              }}
            >
              Hotel & Lounge Resort
            </h3>
          </div>

          <div
            style={{
              padding: "8px 16px",
              borderRadius: "12px",
              backgroundColor: "rgba(46, 189, 133, 0.2)",
              border: "1px solid #2ebd85",
              fontSize: "14px",
              fontWeight: 800,
              color: "#34d399",
            }}
          >
            CONFIRMADO
          </div>
        </div>

        {/* Ticket Body: Details + Holographic QR with Laser */}
        <div
          style={{
            padding: "36px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "28px",
          }}
        >
          {/* Details Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", flex: 1 }}>
            <div>
              <p style={{ margin: 0, fontSize: "13px", color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>
                Titular del Pase
              </p>
              <p style={{ margin: "2px 0 0 0", fontSize: "22px", fontWeight: 800, color: "#ffffff" }}>
                Carlos Mendoza
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <p style={{ margin: 0, fontSize: "13px", color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>
                  Fecha
                </p>
                <p style={{ margin: "2px 0 0 0", fontSize: "18px", fontWeight: 800, color: "#e2e8f0" }}>
                  Hoy · 8:30 PM
                </p>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: "13px", color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>
                  Mesa / Pax
                </p>
                <p style={{ margin: "2px 0 0 0", fontSize: "18px", fontWeight: 800, color: "#e2e8f0" }}>
                  Zona VIP · 4 Pax
                </p>
              </div>
            </div>

            <div>
              <p style={{ margin: 0, fontSize: "13px", color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>
                Total Pagado
              </p>
              <p style={{ margin: "2px 0 0 0", fontSize: "24px", fontWeight: 900, color: "#34d399" }}>
                $80.00 USD (Bs. 5.640,00)
              </p>
            </div>
          </div>

          {/* QR Code Container with Live Scanning Laser */}
          <div
            style={{
              position: "relative",
              width: "250px",
              height: "250px",
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              padding: "16px",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 35px rgba(46, 189, 133, 0.35)",
            }}
          >
            {/* Real Vector-Like QR Mockup Pattern */}
            <svg
              viewBox="0 0 100 100"
              style={{ width: "100%", height: "100%", fill: "#000000" }}
            >
              {/* Outer Position Markers */}
              <rect x="0" y="0" width="30" height="30" rx="6" />
              <rect x="5" y="5" width="20" height="20" fill="#ffffff" rx="4" />
              <rect x="10" y="10" width="10" height="10" rx="2" />

              <rect x="70" y="0" width="30" height="30" rx="6" />
              <rect x="75" y="5" width="20" height="20" fill="#ffffff" rx="4" />
              <rect x="80" y="10" width="10" height="10" rx="2" />

              <rect x="0" y="70" width="30" height="30" rx="6" />
              <rect x="5" y="75" width="20" height="20" fill="#ffffff" rx="4" />
              <rect x="10" y="80" width="10" height="10" rx="2" />

              {/* Data Blocks */}
              <rect x="38" y="10" width="8" height="8" />
              <rect x="50" y="14" width="8" height="8" />
              <rect x="36" y="24" width="14" height="6" />

              <rect x="10" y="40" width="8" height="14" />
              <rect x="24" y="44" width="12" height="8" />
              <rect x="42" y="38" width="16" height="16" fill="#2ebd85" rx="3" />
              <rect x="66" y="40" width="14" height="8" />
              <rect x="84" y="44" width="8" height="12" />

              <rect x="40" y="66" width="12" height="14" />
              <rect x="58" y="70" width="8" height="8" />
              <rect x="72" y="76" width="14" height="8" />
              <rect x="88" y="84" width="6" height="8" />
            </svg>

            {/* Sweeping Laser Beam */}
            {!isScanned && (
              <div
                style={{
                  position: "absolute",
                  left: "8px",
                  right: "8px",
                  top: `${laserProgress}%`,
                  height: "4px",
                  backgroundColor: "#2ebd85",
                  boxShadow:
                    "0 0 15px #2ebd85, 0 0 30px #2ebd85, 0 0 50px rgba(46, 189, 133, 0.8)",
                  borderRadius: "2px",
                  pointerEvents: "none",
                }}
              />
            )}

            {/* Verified Badge on Laser Scan Completion */}
            {isScanned && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(16, 185, 129, 0.95)",
                  borderRadius: "24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: verifiedSpring,
                  transform: `scale(${0.9 + verifiedSpring * 0.1})`,
                  boxShadow: "0 0 40px rgba(16, 185, 129, 0.8)",
                }}
              >
                <span style={{ fontSize: "54px" }}>✅</span>
                <p
                  style={{
                    margin: "8px 0 0 0",
                    fontSize: "18px",
                    fontWeight: 900,
                    color: "#000000",
                    letterSpacing: "1px",
                  }}
                >
                  PASE VÁLIDO
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "rgba(0,0,0,0.8)",
                  }}
                >
                  Acceso Concedido
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Ticket Footer Banner */}
        <div
          style={{
            padding: "16px 32px",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "14px", color: "#94a3b8", fontWeight: 600 }}>
            📲 Envío automático a WhatsApp con código QR
          </span>
          <span style={{ fontSize: "14px", color: "#2ebd85", fontWeight: 800 }}>
            ByteBridge QR Engine
          </span>
        </div>
      </div>

      {/* Bottom Summary Tags */}
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
          ⚡ Valida desde cualquier teléfono
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
          🚫 Cero Boletos de Papel
        </span>
      </div>
    </AbsoluteFill>
  );
}
