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

export function Scene1Hook({ demo }: Props) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación de la notificación de dolor de WhatsApp (Fase 1: frames 0 a 45)
  const painNotificationY = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  const painNotificationOpacity = interpolate(frame, [0, 8, 38, 48], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transición a la Solución WebApp (Fase 2: frames 42 a 115)
  const solutionOpacity = interpolate(frame, [42, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const solutionY = interpolate(frame, [42, 55], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Animación del teléfono entrando desde abajo con rebote suave
  const phoneY = spring({
    frame: frame - 25,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Logo zoom pop
  const logoPop = spring({
    frame: frame - 35,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  const logoSrc = demo.logo.startsWith("http") ? demo.logo : staticFile(demo.logo);
  const coverSrc = demo.coverImage
    ? demo.coverImage.startsWith("http")
      ? demo.coverImage
      : staticFile(demo.coverImage)
    : logoSrc;

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
      {/* Top Header Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 15,
          minHeight: "220px",
        }}
      >
        {/* FASE 1: GANCHO DE DOLOR OPERATIVO (Frames 0 a 45) */}
        {frame < 48 && (
          <div
            style={{
              position: "absolute",
              top: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: painNotificationOpacity,
              transform: `translateY(${(1 - painNotificationY) * 50}px)`,
              width: "100%",
            }}
          >
            {/* Warning Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 28px",
                borderRadius: "9999px",
                backgroundColor: "rgba(239, 68, 68, 0.18)",
                border: "1.5px solid #ef4444",
                backdropFilter: "blur(20px)",
                boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "9999px",
                  backgroundColor: "#ef4444",
                  boxShadow: "0 0 12px #ef4444",
                }}
              />
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: 900,
                  letterSpacing: "2px",
                  color: "#fca5a5",
                  textTransform: "uppercase",
                }}
              >
                ⚠️ HORA PICO EN WHATSAPP
              </span>
            </div>

            {/* Simulación Notificación WhatsApp iOS */}
            <div
              style={{
                marginTop: "16px",
                width: "90%",
                maxWidth: "780px",
                backgroundColor: "rgba(24, 24, 27, 0.95)",
                border: "1.5px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "28px",
                padding: "20px 28px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.8)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                backdropFilter: "blur(25px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "24px" }}>💬</span>
                  <span style={{ fontSize: "20px", fontWeight: 800, color: "#22c55e" }}>WhatsApp · Nuevo Mensaje</span>
                </div>
                <span style={{ fontSize: "16px", color: "#a1a1aa" }}>Ahora</span>
              </div>
              <p style={{ margin: 0, fontSize: "24px", color: "#f4f4f5", fontWeight: 600, textAlign: "left" }}>
                "Buenas noches! ¿Tienen mesa disponible para hoy a las 8:30 PM?"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                <span style={{ fontSize: "17px", color: "#ef4444", fontWeight: 800, backgroundColor: "rgba(239, 68, 68, 0.15)", padding: "4px 12px", borderRadius: "8px" }}>
                  ⏳ 45 min sin respuesta · Cliente buscando otro local ❌
                </span>
              </div>
            </div>
          </div>
        )}

        {/* FASE 2: LA SOLUCIÓN DEFINITIVA (Frames 42 a 115) */}
        {frame >= 40 && (
          <div
            style={{
              position: "absolute",
              top: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: solutionOpacity,
              transform: `translateY(${solutionY}px)`,
              width: "100%",
            }}
          >
            {/* Solución Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "10px 28px",
                borderRadius: "9999px",
                backgroundColor: "rgba(34, 197, 94, 0.15)",
                border: "1.5px solid #22c55e",
                backdropFilter: "blur(20px)",
                boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "9999px",
                  backgroundColor: "#22c55e",
                  boxShadow: "0 0 12px #22c55e",
                }}
              />
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: 900,
                  letterSpacing: "2.5px",
                  color: "#86efac",
                  textTransform: "uppercase",
                }}
              >
                ✨ LA SOLUCIÓN EN 1 CLIC
              </span>
            </div>

            {/* Headline Solución */}
            <h1
              style={{
                fontSize: "64px",
                fontWeight: 900,
                lineHeight: 1.15,
                marginTop: "16px",
                marginBottom: "0px",
                textTransform: "uppercase",
                letterSpacing: "-1px",
                color: "#ffffff",
              }}
            >
              La WebApp de{" "}
              <span
                style={{
                  color: demo.palette.accent,
                  textShadow: `0 0 50px ${demo.palette.glow}`,
                }}
              >
                {demo.name}
              </span>
            </h1>

            <p
              style={{
                fontSize: "24px",
                color: "#cbd5e1",
                marginTop: "8px",
                fontWeight: 600,
              }}
            >
              Confirmación Automática · Tasa Oficial · Sin Esperas
            </p>
          </div>
        )}
      </div>

      {/* Center: Realistic 3D Smartphone Frame Mockup */}
      <div
        style={{
          transform: `translateY(${(1 - phoneY) * 600}px)`,
          width: "680px",
          height: "1160px",
          borderRadius: "58px",
          border: "10px solid #27272a",
          backgroundColor: "#09090b",
          boxShadow: `0 35px 90px -15px rgba(0,0,0,0.9), 0 0 60px ${demo.palette.glow}`,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          zIndex: 5,
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "160px",
            height: "36px",
            borderRadius: "20px",
            backgroundColor: "#000000",
            border: "1px solid rgba(255,255,255,0.1)",
            zIndex: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 14px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "9999px",
              backgroundColor: "#22c55e",
            }}
          />
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "9999px",
              backgroundColor: "#0284c7",
            }}
          />
        </div>

        {/* Inside Phone: WebApp Screen */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#000000",
          }}
        >
          {/* WebApp Header */}
          <div
            style={{
              height: "100px",
              paddingTop: "40px",
              paddingLeft: "28px",
              paddingRight: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              backgroundColor: "rgba(0,0,0,0.85)",
              zIndex: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
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
                <div style={{ fontSize: "20px", fontWeight: 800, color: "#fff" }}>
                  {demo.name}
                </div>
                <div style={{ fontSize: "14px", color: "#22c55e", fontWeight: 600 }}>
                  ● Abierto Ahora
                </div>
              </div>
            </div>

            {/* Currency Pill */}
            <div
              style={{
                padding: "8px 16px",
                borderRadius: "12px",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: "14px",
                fontWeight: 700,
                color: demo.palette.accent,
              }}
            >
              USD / Bs
            </div>
          </div>

          {/* WebApp Hero Screen Content */}
          <div
            style={{
              flex: 1,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 30px",
              textAlign: "center",
            }}
          >
            {/* Background Cover Image inside Phone */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
              }}
            >
              <Img
                src={coverSrc}
                alt={demo.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.35,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, #09090b 100%)",
                }}
              />
            </div>

            {/* Content inside Phone */}
            <div style={{ position: "relative", zIndex: 10, maxWidth: "560px" }}>
              {/* Floating Big Brand Logo */}
              <div
                style={{
                  transform: `scale(${Math.max(0, logoPop)})`,
                  width: "140px",
                  height: "140px",
                  borderRadius: "32px",
                  overflow: "hidden",
                  margin: "0 auto 24px auto",
                  border: `4px solid ${demo.palette.accent}`,
                  boxShadow: `0 15px 40px ${demo.palette.glow}`,
                }}
              >
                <Img
                  src={logoSrc}
                  alt={demo.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Badge */}
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 20px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "16px",
                }}
              >
                {demo.badgeText}
              </div>

              {/* Hero Title */}
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: 900,
                  lineHeight: 1.2,
                  color: "#ffffff",
                  marginBottom: "16px",
                }}
              >
                {demo.heroTitle}{" "}
                <span style={{ color: demo.palette.accent }}>
                  {demo.heroHighlight}
                </span>
              </div>

              {/* Booking CTA Button */}
              <div
                style={{
                  marginTop: "24px",
                  padding: "18px 32px",
                  borderRadius: "18px",
                  backgroundColor: demo.palette.primary,
                  boxShadow: `0 12px 30px ${demo.palette.glow}`,
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "#ffffff",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span>🎟️</span>
                <span>Reservar con Pase QR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          padding: "16px 40px",
          borderRadius: "24px",
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(20px)",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "#22c55e", fontSize: "24px" }}>✓</span>
          <span style={{ fontSize: "22px", fontWeight: 700, color: "#f1f5f9" }}>
            Pases Digitales con QR
          </span>
        </div>
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "9999px",
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "#22c55e", fontSize: "24px" }}>✓</span>
          <span style={{ fontSize: "22px", fontWeight: 700, color: "#f1f5f9" }}>
            Tasa BCV en Tiempo Real
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
}
