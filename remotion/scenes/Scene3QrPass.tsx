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

export function Scene3QrPass({ demo }: Props) {
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

  const verifiedStamp = spring({
    frame: frame - 40,
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
            textTransform: "uppercase",
            letterSpacing: "2px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
          }}
        >
          02 · Reservaciones & Pases VIP
        </div>

        <h2
          style={{
            fontSize: "62px",
            fontWeight: 900,
            lineHeight: 1.15,
            marginTop: "20px",
            marginBottom: "0px",
            textTransform: "uppercase",
            letterSpacing: "-1px",
            color: "#ffffff",
          }}
        >
          Emisión de Pases con Código QR
        </h2>

        <p
          style={{
            fontSize: "26px",
            color: "#cbd5e1",
            marginTop: "10px",
            fontWeight: 500,
          }}
        >
          Validación óptica en puerta o mesa en menos de 1 segundo
        </p>
      </div>

      {/* Center: High-Res VIP Boarding Pass Card */}
      <div
        style={{
          transform: `scale(${Math.max(0, cardScale)})`,
          width: "720px",
          borderRadius: "44px",
          border: "8px solid #27272a",
          backgroundColor: "rgba(18, 18, 22, 0.95)",
          padding: "36px",
          boxShadow: `0 35px 90px -15px rgba(0,0,0,0.9), 0 0 60px ${demo.palette.glow}`,
          boxSizing: "border-box",
          position: "relative",
          zIndex: 5,
        }}
      >
        {/* Pass Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1.5px solid rgba(255,255,255,0.12)",
            paddingBottom: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "18px",
                overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              <Img
                src={logoSrc}
                alt={demo.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <div style={{ fontSize: "28px", fontWeight: 900, color: "#ffffff" }}>
                {demo.name}
              </div>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "18px",
                  fontWeight: 800,
                  color: demo.palette.accent,
                }}
              >
                #PASS-8492 · ACCESO VIP
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "8px 20px",
              borderRadius: "14px",
              backgroundColor: "rgba(34, 197, 94, 0.2)",
              border: "1.5px solid rgba(34, 197, 94, 0.4)",
              color: "#4ade80",
              fontSize: "18px",
              fontWeight: 900,
              textTransform: "uppercase",
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
            gap: "18px",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              padding: "16px 20px",
              borderRadius: "18px",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: "#94a3b8",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Titular de la Reserva
            </div>
            <div style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginTop: "4px" }}>
              Carlos Mendoza
            </div>
          </div>

          <div
            style={{
              padding: "16px 20px",
              borderRadius: "18px",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: "#94a3b8",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Invitados
            </div>
            <div style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginTop: "4px" }}>
              4 Personas
            </div>
          </div>

          <div
            style={{
              padding: "16px 20px",
              borderRadius: "18px",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: "#94a3b8",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Fecha & Horario
            </div>
            <div style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginTop: "4px" }}>
              Hoy · 08:00 PM
            </div>
          </div>

          <div
            style={{
              padding: "16px 20px",
              borderRadius: "18px",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: "#94a3b8",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Total Abonado
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: 900,
                color: "#34d399",
                marginTop: "4px",
              }}
            >
              $45.00 USD
            </div>
          </div>
        </div>

        {/* QR Code Container with Animated Laser */}
        <div
          style={{
            marginTop: "24px",
            borderRadius: "28px",
            backgroundColor: "#ffffff",
            padding: "24px",
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
              width: "220px",
              height: "220px",
              backgroundColor: "#09090b",
              borderRadius: "20px",
              padding: "14px",
              boxSizing: "border-box",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* SVG Crisp QR */}
            <svg
              viewBox="0 0 100 100"
              style={{ width: "100%", height: "100%", fill: "#ffffff" }}
              shapeRendering="crispEdges"
            >
              <rect x="0" y="0" width="30" height="30" />
              <rect x="5" y="5" width="20" height="20" fill="#000" />
              <rect x="10" y="10" width="10" height="10" fill="#fff" />

              <rect x="70" y="0" width="30" height="30" />
              <rect x="75" y="5" width="20" height="20" fill="#000" />
              <rect x="80" y="10" width="10" height="10" fill="#fff" />

              <rect x="0" y="70" width="30" height="30" />
              <rect x="5" y="75" width="20" height="20" fill="#000" />
              <rect x="10" y="80" width="10" height="10" fill="#fff" />

              <rect x="35" y="5" width="5" height="15" />
              <rect x="45" y="10" width="15" height="5" />
              <rect x="35" y="25" width="25" height="5" />
              <rect x="10" y="35" width="20" height="5" />
              <rect x="35" y="35" width="10" height="10" />
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

            {/* Glowing Laser Scan Line */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `${laserY}%`,
                height: "6px",
                background: "linear-gradient(90deg, transparent, #22c55e, #86efac, #22c55e, transparent)",
                boxShadow: "0 0 20px #22c55e, 0 0 10px #4ade80",
              }}
            />
          </div>

          <div
            style={{
              marginTop: "12px",
              fontFamily: "monospace",
              fontSize: "16px",
              fontWeight: 900,
              color: "#1e293b",
              letterSpacing: "2px",
            }}
          >
            ESCÁNER ÓPTICO EN PUERTA
          </div>

          {/* Validation Stamp Popup */}
          {frame > 35 && (
            <div
              style={{
                transform: `scale(${Math.max(0, verifiedStamp)}) rotate(-6deg)`,
                position: "absolute",
                inset: "20px 40px",
                borderRadius: "28px",
                border: "6px solid #22c55e",
                backgroundColor: "rgba(5, 46, 22, 0.96)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 25px 50px rgba(0,0,0,0.8), 0 0 40px rgba(34,197,94,0.6)",
                zIndex: 20,
              }}
            >
              <div style={{ fontSize: "52px" }}>✅</div>
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: 900,
                  color: "#4ade80",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginTop: "6px",
                }}
              >
                Pase Validado
              </div>
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>
                Acceso Concedido · Mesa Asignada
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
          gap: "16px",
          padding: "16px 40px",
          borderRadius: "24px",
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(20px)",
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: "24px" }}>📲</span>
        <span style={{ fontSize: "22px", fontWeight: 700, color: "#f1f5f9" }}>
          Confirmación automática enviada al WhatsApp del cliente
        </span>
      </div>
    </AbsoluteFill>
  );
}
