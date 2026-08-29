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

export function Scene3SommelierBooking({ demo }: Props) {
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
          🍷 Reserva Gourmet & Sommelier
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
          Mesa Exclusiva & Maridaje Garantizado
        </h2>
      </div>

      {/* Main Sommelier Card */}
      <div
        style={{
          transform: `scale(${cardScale})`,
          width: "920px",
          background: "linear-gradient(145deg, rgba(25, 18, 28, 0.95), rgba(12, 8, 15, 0.98))",
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
              <div style={{ fontSize: "20px", color: demo.palette.accent, fontWeight: 700 }}>
                ✨ {demo.bookingTitle}
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
            Mesa VIP
          </div>
        </div>

        {/* Sommelier Pairing & Details */}
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <div
            style={{
              width: "240px",
              height: "220px",
              background: `linear-gradient(135deg, ${demo.palette.primary}40, rgba(0,0,0,0.8))`,
              borderRadius: "28px",
              border: "1px solid rgba(255,255,255,0.15)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              textAlign: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: "48px", marginBottom: "10px" }}>🍷</span>
            <div style={{ fontSize: "18px", color: "#ffffff", fontWeight: 800 }}>
              Sommelier AI
            </div>
            <div style={{ fontSize: "14px", color: demo.palette.accent, marginTop: "4px" }}>
              Maridaje de Vinos Sugerido
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "18px", color: "#94a3b8", marginBottom: "6px", fontWeight: 600 }}>
              Experiencia Reservada
            </div>
            <div style={{ fontSize: "26px", fontWeight: 800, color: "#ffffff", marginBottom: "12px" }}>
              {demo.bookingOptions[0]?.name || "Cena Degustación & Salón Privado"}
            </div>
            <div style={{ fontSize: "18px", color: "#cbd5e1", marginBottom: "18px", lineHeight: 1.4 }}>
              {demo.bookingOptions[0]?.description?.slice(0, 80) || "Reserva confirmada con atención personalizada y cava de vinos."}...
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
                backgroundColor: "rgba(234, 179, 8, 0.2)",
                border: "1px solid #eab308",
                color: "#fde047",
                fontSize: "18px",
                fontWeight: 800,
              }}
            >
              <span>★</span>
              <span>Confirmación en WhatsApp Instantánea</span>
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
          "Mesa Garantizada sin Espera",
          "Carta de Vinos Digital",
          "Atención Gourmet de Autor",
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
