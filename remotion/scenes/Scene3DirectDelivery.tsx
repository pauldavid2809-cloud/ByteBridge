import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";
import { BusinessDemo } from "../../data/demosData";

type Props = {
  demo: BusinessDemo;
};

export function Scene3DirectDelivery({ demo }: Props) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const verifiedStamp = spring({
    frame: frame - 35,
    fps,
    config: { damping: 8, stiffness: 140 },
  });

  const logoSrc = demo.logo.startsWith("http") ? demo.logo : staticFile(demo.logo);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 50px 70px 50px",
        boxSizing: "border-box",
      }}
    >
      {/* Top Title */}
      <div style={{ textAlign: "center", zIndex: 10 }}>
        <div
          style={{
            display: "inline-block",
            padding: "10px 28px",
            borderRadius: "9999px",
            backgroundColor: demo.palette.accent,
            color: "#000000",
            fontSize: "22px",
            fontWeight: 900,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "16px",
            boxShadow: `0 0 30px ${demo.palette.accent}80`,
          }}
        >
          🛵 Delivery Directo sin Comisiones
        </div>
        <h2
          style={{
            fontSize: "44px",
            fontWeight: 900,
            lineHeight: 1.15,
            color: "#ffffff",
            margin: 0,
            textShadow: "0 4px 20px rgba(0,0,0,0.8)",
          }}
        >
          Ahorra el 25% de Comisiones a Terceros
        </h2>
      </div>

      {/* Main Delivery Card */}
      <div
        style={{
          transform: `scale(${cardScale})`,
          width: "920px",
          background: "linear-gradient(145deg, rgba(20, 25, 20, 0.95), rgba(10, 15, 10, 0.98))",
          borderRadius: "40px",
          border: `2px solid ${demo.palette.primary}60`,
          padding: "45px 50px",
          boxShadow: `0 30px 80px rgba(0,0,0,0.8), 0 0 50px ${demo.palette.glow}`,
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            paddingBottom: "25px",
            marginBottom: "30px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "22px",
                overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.2)",
              }}
            >
              <Img src={logoSrc} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#ffffff" }}>
                {demo.name}
              </div>
              <div style={{ fontSize: "20px", color: "#4ade80", fontWeight: 700 }}>
                📦 WhatsApp Checkout Directo
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "10px 24px",
              borderRadius: "16px",
              backgroundColor: "rgba(34, 197, 94, 0.2)",
              border: "1px solid #22c55e",
              color: "#4ade80",
              fontSize: "18px",
              fontWeight: 800,
            }}
          >
            0% Comisión
          </div>
        </div>

        {/* Delivery Box & Checkout flow */}
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <div
            style={{
              width: "240px",
              height: "220px",
              background: "linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(0,0,0,0.8))",
              borderRadius: "28px",
              border: "1px solid rgba(34, 197, 94, 0.4)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              textAlign: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: "48px", marginBottom: "10px" }}>🛵</span>
            <div style={{ fontSize: "20px", color: "#ffffff", fontWeight: 800 }}>
              Envío Express
            </div>
            <div style={{ fontSize: "14px", color: "#86efac", marginTop: "4px" }}>
              Ubicación GPS Automática
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "18px", color: "#94a3b8", marginBottom: "6px", fontWeight: 600 }}>
              Pedido para Llevar / Delivery
            </div>
            <div style={{ fontSize: "26px", fontWeight: 800, color: "#ffffff", marginBottom: "12px" }}>
              {demo.menuItems[0]?.name || "Combo Especial de la Casa"}
            </div>
            <div
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "center",
                marginBottom: "18px",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: 900,
                  color: "#4ade80",
                }}
              >
                ${demo.menuItems[0]?.priceUSD || 14}.00
              </span>
              <span style={{ fontSize: "18px", color: "#94a3b8" }}>
                (~{(demo.menuItems[0]?.priceUSD ? demo.menuItems[0].priceUSD * 36.5 : 511).toFixed(0)} Bs)
              </span>
            </div>

            {/* Confirmation Stamp */}
            <div
              style={{
                transform: `scale(${Math.max(0, verifiedStamp)})`,
                opacity: verifiedStamp,
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 22px",
                borderRadius: "14px",
                backgroundColor: "rgba(34, 197, 94, 0.2)",
                border: "1px solid #22c55e",
                color: "#4ade80",
                fontSize: "18px",
                fontWeight: 800,
              }}
            >
              <span>✓</span>
              <span>100% de la Ganancia para el Negocio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature Badges */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {[
          "Sin Comisiones del 25%",
          "Conversión BCV Automática",
          "Comanda Directa a WhatsApp",
        ].map((tag, i) => (
          <div
            key={i}
            style={{
              padding: "14px 26px",
              borderRadius: "18px",
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: "19px",
              fontWeight: 700,
              color: "#ffffff",
              backdropFilter: "blur(10px)",
            }}
          >
            ✓ {tag}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
}
