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

  const cardSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Laser scanner animation
  const laserY = interpolate(frame % 40, [0, 20, 40], [0, 100, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Verified Stamp popup spring after frame 36
  const stampSpring = spring({
    frame: frame - 36,
    fps,
    config: { damping: 9, stiffness: 140 },
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
          <span>🎟️</span>
          <span>02 · ENTRADAS & PASES VIP POR QR</span>
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
          Validación Óptica en Menos de 1 Seg
        </h2>

        <p
          style={{
            fontSize: "26px",
            color: "#cbd5e1",
            margin: 0,
            fontWeight: 500,
          }}
        >
          Elimina colas en la entrada y controla los accesos sin tickets de papel
        </p>
      </div>

      {/* Center: VIP Boarding Pass Card */}
      <div
        style={{
          transform: `scale(${0.92 + cardSpring * 0.08})`,
          opacity: Math.min(1, Math.max(0, cardSpring)),
          width: "720px",
          borderRadius: "44px",
          border: "6px solid #27272a",
          backgroundColor: "#0c1311",
          padding: "32px",
          boxShadow:
            "0 35px 90px -15px rgba(0,0,0,0.9), 0 0 60px rgba(46, 189, 133, 0.25)",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 5,
        }}
      >
        {/* Pass Top Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1.5px solid rgba(255,255,255,0.12)",
            paddingBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "16px",
                backgroundColor: "rgba(46, 189, 133, 0.2)",
                border: "2px solid #2ebd85",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
              }}
            >
              🎟️
            </div>
            <div>
              <div style={{ fontSize: "26px", fontWeight: 900, color: "#ffffff" }}>
                Pase VIP / Cover Digital
              </div>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "17px",
                  fontWeight: 800,
                  color: "#36d698",
                }}
              >
                #BB-PASS-9842 · ACCESO TOTAL
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "8px 20px",
              borderRadius: "12px",
              backgroundColor: "rgba(46, 189, 133, 0.2)",
              border: "1.5px solid #2ebd85",
              color: "#36d698",
              fontSize: "18px",
              fontWeight: 900,
            }}
          >
            ● ACTIVO
          </div>
        </div>

        {/* Pass Details Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              padding: "14px 18px",
              borderRadius: "18px",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: "#94a3b8",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Titular del Pase
            </div>
            <div style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginTop: "2px" }}>
              Carlos Mendoza
            </div>
          </div>

          <div
            style={{
              padding: "14px 18px",
              borderRadius: "18px",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: "#94a3b8",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Zona & Mesa
            </div>
            <div style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginTop: "2px" }}>
              Lounge VIP (4 Pax)
            </div>
          </div>
        </div>

        {/* Crisp QR Box with Laser Scan Beam */}
        <div
          style={{
            marginTop: "20px",
            borderRadius: "26px",
            backgroundColor: "#ffffff",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "#090e0c",
              borderRadius: "18px",
              padding: "12px",
              boxSizing: "border-box",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* SVG Crisp High-Tech QR */}
            <svg
              viewBox="0 0 100 100"
              style={{ width: "100%", height: "100%", fill: "#ffffff" }}
              shapeRendering="crispEdges"
            >
              <rect x="0" y="0" width="30" height="30" />
              <rect x="5" y="5" width="20" height="20" fill="#090e0c" />
              <rect x="10" y="10" width="10" height="10" fill="#2ebd85" />

              <rect x="70" y="0" width="30" height="30" />
              <rect x="75" y="5" width="20" height="20" fill="#090e0c" />
              <rect x="80" y="10" width="10" height="10" fill="#2ebd85" />

              <rect x="0" y="70" width="30" height="30" />
              <rect x="5" y="75" width="20" height="20" fill="#090e0c" />
              <rect x="10" y="80" width="10" height="10" fill="#2ebd85" />

              <rect x="35" y="5" width="5" height="15" />
              <rect x="45" y="10" width="15" height="5" />
              <rect x="35" y="25" width="25" height="5" />
              <rect x="10" y="35" width="20" height="5" />
              <rect x="35" y="35" width="10" height="10" fill="#2ebd85" />
              <rect x="55" y="35" width="15" height="15" />
              <rect x="80" y="35" width="15" height="10" />
              <rect x="15" y="45" width="15" height="15" />
              <rect x="35" y="50" width="15" height="5" />
              <rect x="40" y="60" width="20" height="10" />
              <rect x="65" y="55" width="10" height="20" />
              <rect x="80" y="55" width="15" height="15" />
              <rect x="35" y="75" width="10" height="20" />
              <rect x="50" y="75" width="15" height="10" />
              <rect x="70" y="80" width="25" height="15" />
              <rect x="50" y="90" width="15" height="5" />
            </svg>

            {/* Laser Line Scanning Effect */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `${laserY}%`,
                height: "6px",
                background:
                  "linear-gradient(90deg, transparent, #2ebd85, #36d698, #2ebd85, transparent)",
                boxShadow: "0 0 20px #36d698, 0 0 10px #2ebd85",
              }}
            />
          </div>

          <div
            style={{
              marginTop: "10px",
              fontFamily: "monospace",
              fontSize: "15px",
              fontWeight: 900,
              color: "#0a0e0d",
              letterSpacing: "2px",
            }}
          >
            ESCÁNER ÓPTICO EN PUERTA · 0.8s
          </div>

          {/* Validation Stamp Pop */}
          {frame > 35 && (
            <div
              style={{
                transform: `scale(${Math.max(0.9, stampSpring)}) rotate(-5deg)`,
                position: "absolute",
                inset: "15px 30px",
                borderRadius: "24px",
                border: "6px solid #2ebd85",
                backgroundColor: "rgba(5, 46, 32, 0.97)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 25px 50px rgba(0,0,0,0.85), 0 0 45px rgba(46,189,133,0.7)",
                zIndex: 20,
              }}
            >
              <div style={{ fontSize: "48px" }}>✅</div>
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: 900,
                  color: "#36d698",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginTop: "4px",
                }}
              >
                Pase Validado
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginTop: "2px",
                }}
              >
                Acceso Concedido · Cero Colas
              </div>
            </div>
          )}
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
        <span style={{ fontSize: "24px" }}>📲</span>
        <span style={{ fontSize: "22px", fontWeight: 800, color: "#f1f5f9" }}>
          Entrega instantánea con QR por WhatsApp directo al cliente
        </span>
      </div>
    </AbsoluteFill>
  );
}
