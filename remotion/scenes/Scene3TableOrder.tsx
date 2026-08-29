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

export function Scene3TableOrder({ demo }: Props) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const laserY = interpolate(frame % 45, [0, 22.5, 45], [0, 100, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const orderSuccess = spring({
    frame: frame - 38,
    fps,
    config: { damping: 10, stiffness: 130 },
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
          📱 Auto-Pedido en Mesa QR
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
          Pide y Paga desde tu Mesa sin Esperas
        </h2>
      </div>

      {/* Main Interactive Table Order Card */}
      <div
        style={{
          transform: `scale(${cardScale})`,
          width: "920px",
          background: "linear-gradient(145deg, rgba(22, 22, 30, 0.95), rgba(10, 10, 15, 0.98))",
          borderRadius: "40px",
          border: `2px solid ${demo.palette.primary}60`,
          padding: "45px 50px",
          boxShadow: `0 30px 80px rgba(0,0,0,0.8), 0 0 50px ${demo.palette.glow}`,
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* Table Badge Header */}
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
              <div style={{ fontSize: "20px", color: demo.palette.accent, fontWeight: 700 }}>
                📍 Mesa #04 • Comanda Digital
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "10px 24px",
              borderRadius: "16px",
              backgroundColor: `${demo.palette.primary}30`,
              border: `1px solid ${demo.palette.primary}`,
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 800,
            }}
          >
            ⚡ Auto-Pedido
          </div>
        </div>

        {/* QR Scanner & Order items container */}
        <div style={{ display: "flex", gap: "35px", alignItems: "center" }}>
          {/* QR Code with scanning laser */}
          <div
            style={{
              width: "240px",
              height: "240px",
              backgroundColor: "#ffffff",
              borderRadius: "28px",
              padding: "16px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
              flexShrink: 0,
            }}
          >
            <Img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://byte-bridge-tau.vercel.app/demos/${demo.slug}%3Fmesa%3D4&color=050508`}
              style={{ width: "100%", height: "100%", borderRadius: "16px" }}
            />
            {/* Laser Beam */}
            <div
              style={{
                position: "absolute",
                top: `${laserY}%`,
                left: 0,
                right: 0,
                height: "4px",
                backgroundColor: "#22c55e",
                boxShadow: "0 0 20px 6px #22c55e",
              }}
            />
          </div>

          {/* Order Details Preview */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "20px", color: "#94a3b8", marginBottom: "10px", fontWeight: 600 }}>
              Orden Directa a Cocina
            </div>
            <div style={{ fontSize: "26px", fontWeight: 800, color: "#ffffff", marginBottom: "14px" }}>
              {demo.menuItems[0]?.name || "Plato Estrella"}
            </div>
            <div
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: 900,
                  color: demo.palette.accent,
                }}
              >
                ${demo.menuItems[0]?.priceUSD || 12}.00
              </span>
              <span style={{ fontSize: "18px", color: "#94a3b8" }}>
                (~{(demo.menuItems[0]?.priceUSD ? demo.menuItems[0].priceUSD * 36.5 : 438).toFixed(0)} Bs)
              </span>
            </div>

            {/* Status pill */}
            <div
              style={{
                transform: `scale(${Math.max(0, orderSuccess)})`,
                opacity: orderSuccess,
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
              <span>Enviado a Cocina en 0.8s</span>
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
          "Cero Colas para Pedir",
          "Tasa Oficial en Vivo",
          "Comanda Automática a Cocina",
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
