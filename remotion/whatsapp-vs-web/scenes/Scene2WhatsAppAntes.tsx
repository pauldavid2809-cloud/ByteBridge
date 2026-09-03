import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export function Scene2WhatsAppAntes() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animaciones de mensajes
  // 1. Mensaje del cliente (Frame 15)
  const clientMsgSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  // 2. Typing indicator (Visible entre frames 55 y 95)
  const isTyping = frame >= 55 && frame < 95;
  const typingOpacity = interpolate(frame, [55, 60, 90, 95], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 3. Respuesta del negocio (Frame 98)
  const businessMsgSpring = spring({
    frame: frame - 98,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  // 4. Avance del tiempo (Frame 135 a 165)
  const timeAdvanceProgress = interpolate(frame, [135, 165], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 5. Impacto dramático final (Frame 165 a 225)
  const overlayOpacity = interpolate(frame, [165, 180], [0, 0.94], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const dramaticTextSpring = spring({
    frame: frame - 175,
    fps,
    config: { damping: 12, stiffness: 160 },
  });

  // Shake effect on dramatic entrance
  const shake =
    frame >= 175 && frame <= 190
      ? Math.sin(frame * 2.5) * interpolate(frame, [175, 190], [14, 0], { extrapolateLeft: "clamp" })
      : 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0b141a",
        display: "flex",
        flexDirection: "column",
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        overflow: "hidden",
      }}
    >
      {/* WhatsApp Header Dark Mode */}
      <div
        style={{
          height: "170px",
          backgroundColor: "#202c33",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "50px 32px 20px 32px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Back icon */}
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#aebac1" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>

          {/* Contact Avatar */}
          <div
            style={{
              width: "75px",
              height: "75px",
              borderRadius: "50%",
              backgroundColor: "#2a3942",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              border: "2px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            🥩
          </div>

          {/* Contact Details */}
          <div>
            <div style={{ color: "#e9edef", fontSize: "32px", fontWeight: 700 }}>
              Restaurante La Parrilla
            </div>
            <div
              style={{
                color: isTyping ? "#25d366" : "#8696a0",
                fontSize: "22px",
                fontWeight: isTyping ? 700 : 400,
                marginTop: "4px",
              }}
            >
              {isTyping ? "escribiendo..." : "en línea"}
            </div>
          </div>
        </div>

        {/* Action icons */}
        <div style={{ display: "flex", gap: "28px", color: "#aebac1" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" />
          </svg>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24c1.12.37 2.33.57 3.54.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
          </svg>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </div>
      </div>

      {/* Chat Area with WhatsApp Pattern Texture */}
      <div
        style={{
          flex: 1,
          padding: "36px 36px 120px 36px",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          position: "relative",
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        {/* Date badge */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
          <span
            style={{
              backgroundColor: "#182229",
              color: "#8696a0",
              fontSize: "20px",
              padding: "8px 24px",
              borderRadius: "14px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Hoy
          </span>
        </div>

        {/* 1. Mensaje del Cliente (Verde, Derecha) */}
        {frame >= 15 && (
          <div
            style={{
              alignSelf: "flex-end",
              maxWidth: "80%",
              transform: `scale(${clientMsgSpring})`,
              transformOrigin: "bottom right",
            }}
          >
            <div
              style={{
                backgroundColor: "#005c4b",
                color: "#e9edef",
                padding: "22px 28px",
                borderRadius: "26px 26px 6px 26px",
                fontSize: "33px",
                lineHeight: 1.35,
                boxShadow: "0 6px 14px rgba(0,0,0,0.35)",
              }}
            >
              Hola, ¿tienen mesa para hoy a las 8pm?
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "6px",
                  fontSize: "19px",
                  color: "rgba(255,255,255,0.6)",
                  marginTop: "8px",
                }}
              >
                <span>19:42</span>
                <span style={{ color: "#53bdeb" }}>✓✓</span>
              </div>
            </div>
          </div>
        )}

        {/* 2. Typing indicator */}
        {isTyping && (
          <div
            style={{
              alignSelf: "flex-start",
              opacity: typingOpacity,
              backgroundColor: "#202c33",
              padding: "20px 30px",
              borderRadius: "26px 26px 26px 6px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {[0, 1, 2].map((i) => {
              const dotBounce = Math.sin((frame - 55) * 0.4 + i * 1.2) * 6;
              return (
                <div
                  key={i}
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    backgroundColor: "#8696a0",
                    transform: `translateY(${dotBounce}px)`,
                  }}
                />
              );
            })}
          </div>
        )}

        {/* 3. Respuesta del Restaurante (Gris, Izquierda) */}
        {frame >= 98 && (
          <div
            style={{
              alignSelf: "flex-start",
              maxWidth: "80%",
              transform: `scale(${businessMsgSpring})`,
              transformOrigin: "bottom left",
            }}
          >
            <div
              style={{
                backgroundColor: "#202c33",
                color: "#e9edef",
                padding: "22px 28px",
                borderRadius: "26px 26px 26px 6px",
                fontSize: "33px",
                lineHeight: 1.35,
                boxShadow: "0 6px 14px rgba(0,0,0,0.35)",
              }}
            >
              Buenas, permítame consultar
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  fontSize: "19px",
                  color: "#8696a0",
                  marginTop: "8px",
                }}
              >
                <span>19:45</span>
              </div>
            </div>
          </div>
        )}

        {/* 4. Avance del tiempo dramático */}
        {frame >= 135 && frame < 170 && (
          <div
            style={{
              alignSelf: "center",
              marginTop: "40px",
              backgroundColor: "rgba(239, 68, 68, 0.15)",
              border: "1px dashed rgba(239, 68, 68, 0.4)",
              color: "#FCA5A5",
              padding: "14px 30px",
              borderRadius: "16px",
              fontSize: "24px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span>⏳</span>
            <span>
              {timeAdvanceProgress < 0.4
                ? "20:15... (30 min después)"
                : timeAdvanceProgress < 0.8
                ? "21:00... (Sin respuesta)"
                : "21:30... (Reserva perdida)"}
            </span>
          </div>
        )}
      </div>

      {/* 5. Overlay Dramático Final: Reservas Perdidas */}
      {frame >= 165 && (
        <AbsoluteFill
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.92)",
            opacity: overlayOpacity,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 60px",
            textAlign: "center",
            zIndex: 30,
            transform: `translateX(${shake}px)`,
          }}
        >
          <div
            style={{
              transform: `scale(${dramaticTextSpring})`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                backgroundColor: "rgba(239, 68, 68, 0.2)",
                border: "3px solid #EF4444",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "60px",
                marginBottom: "36px",
              }}
            >
              ❌
            </div>

            <h2
              style={{
                color: "#FFFFFF",
                fontSize: "72px",
                fontWeight: 900,
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: "-1.5px",
              }}
            >
              Reservas perdidas.
            </h2>
            <h2
              style={{
                color: "#EF4444",
                fontSize: "68px",
                fontWeight: 900,
                lineHeight: 1.15,
                margin: "12px 0 0 0",
                letterSpacing: "-1.5px",
              }}
            >
              Mensajes sin responder.
            </h2>

            <p
              style={{
                color: "#A1A1AA",
                fontSize: "30px",
                fontWeight: 500,
                marginTop: "30px",
                maxWidth: "750px",
              }}
            >
              El cliente se fue a otro restaurante que sí confirmó al instante.
            </p>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
}
