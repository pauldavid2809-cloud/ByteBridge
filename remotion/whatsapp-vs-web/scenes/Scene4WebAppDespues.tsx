import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export function Scene4WebAppDespues() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrada general del teléfono
  const phoneEntrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  // Cursor animado (aparece en frame 40, se mueve hacia el botón en frame 50-70, clic en frame 75)
  const cursorOpacity = interpolate(frame, [40, 50, 85, 95], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cursorX = interpolate(frame, [45, 72], [140, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cursorY = interpolate(frame, [45, 72], [180, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const isClicking = frame >= 72 && frame <= 82;
  const buttonScale = isClicking ? 0.93 : 1;

  // Transición a la vista del Dashboard (Frame 90 a 110)
  const isDashboardView = frame >= 90;
  const dashboardTransition = spring({
    frame: frame - 90,
    fps,
    config: { damping: 13, stiffness: 130 },
  });

  // Toast notification animada (Frame 105 a 260)
  const toastSpring = spring({
    frame: frame - 105,
    fps,
    config: { damping: 12, stiffness: 160 },
  });

  // KPI counter animación
  const capacityCounter = Math.min(
    92,
    Math.floor(interpolate(frame, [115, 160], [84, 92], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }))
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 30px",
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        overflow: "hidden",
      }}
    >
      {/* Background glow emerald & cyan */}
      <div
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(6, 182, 212, 0.15) 50%, rgba(0,0,0,0) 75%)",
          filter: "blur(80px)",
        }}
      />

      {/* Titular superior */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
          zIndex: 5,
        }}
      >
        <span
          style={{
            backgroundColor: "rgba(16, 185, 129, 0.15)",
            border: "1px solid rgba(16, 185, 129, 0.4)",
            color: "#6EE7B7",
            padding: "8px 24px",
            borderRadius: "9999px",
            fontSize: "22px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          {isDashboardView ? "Panel Gerencial en Tiempo Real" : "Reserva Directa del Comensal"}
        </span>
      </div>

      {/* Floating Smartphone Mockup Frame */}
      <div
        style={{
          width: "560px",
          height: "1050px",
          backgroundColor: "#0F172A",
          borderRadius: "58px",
          border: "12px solid #1E293B",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 50px rgba(16, 185, 129, 0.2)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transform: `scale(${phoneEntrance})`,
          zIndex: 10,
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "140px",
            height: "32px",
            backgroundColor: "#000000",
            borderRadius: "20px",
            zIndex: 40,
          }}
        />

        {/* Status Bar */}
        <div
          style={{
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 34px",
            color: "#94A3B8",
            fontSize: "17px",
            fontWeight: 700,
            zIndex: 35,
          }}
        >
          <span>20:00</span>
          <span>5G · 100%</span>
        </div>

        {/* FASE 1: LANDING DEL CLIENTE (Frames 0 a 89) */}
        {!isDashboardView && (
          <div
            style={{
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              flex: 1,
            }}
          >
            {/* Header del Restaurante */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "16px",
                  backgroundColor: "#10B981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                }}
              >
                🥩
              </div>
              <div>
                <div style={{ color: "#FFFFFF", fontSize: "22px", fontWeight: 800 }}>
                  La Parrilla Prime
                </div>
                <div style={{ color: "#10B981", fontSize: "14px", fontWeight: 700 }}>
                  ● Reserva Online Inmediata
                </div>
              </div>
            </div>

            {/* Selector de Fecha */}
            <div
              style={{
                backgroundColor: "#1E293B",
                borderRadius: "20px",
                padding: "16px 20px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ color: "#94A3B8", fontSize: "14px", fontWeight: 700, marginBottom: "8px" }}>
                FECHA
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                {["Hoy, 24", "Mañana, 25", "Sáb, 26"].map((d, i) => (
                  <div
                    key={d}
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "10px 4px",
                      borderRadius: "12px",
                      fontSize: "14px",
                      fontWeight: 700,
                      backgroundColor: i === 0 ? "rgba(16, 185, 129, 0.2)" : "#0F172A",
                      border: i === 0 ? "2px solid #10B981" : "1px solid rgba(255,255,255,0.05)",
                      color: i === 0 ? "#6EE7B7" : "#64748B",
                    }}
                  >
                    {d}
                  </div>
                ))}
              </div>
            </div>

            {/* Selector de Hora */}
            <div
              style={{
                backgroundColor: "#1E293B",
                borderRadius: "20px",
                padding: "16px 20px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ color: "#94A3B8", fontSize: "14px", fontWeight: 700, marginBottom: "8px" }}>
                HORA DISPONIBLE
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                {["7:00 PM", "7:30 PM", "8:00 PM"].map((h, i) => (
                  <div
                    key={h}
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "10px 4px",
                      borderRadius: "12px",
                      fontSize: "14px",
                      fontWeight: 800,
                      backgroundColor: i === 2 ? "#10B981" : "#0F172A",
                      color: i === 2 ? "#000000" : "#64748B",
                      boxShadow: i === 2 ? "0 0 15px rgba(16, 185, 129, 0.4)" : "none",
                    }}
                  >
                    {h}
                  </div>
                ))}
              </div>
            </div>

            {/* Selector de Comensales */}
            <div
              style={{
                backgroundColor: "#1E293B",
                borderRadius: "20px",
                padding: "16px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ color: "#94A3B8", fontSize: "14px", fontWeight: 700 }}>PERSONAS</div>
                <div style={{ color: "#FFFFFF", fontSize: "18px", fontWeight: 800 }}>2 Personas</div>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#0F172A", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF" }}>-</div>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#10B981", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontWeight: 800 }}>+</div>
              </div>
            </div>

            {/* Botón de Confirmación Interactivo */}
            <div style={{ marginTop: "auto", position: "relative" }}>
              <div
                style={{
                  backgroundColor: "#10B981",
                  color: "#000000",
                  padding: "20px",
                  borderRadius: "20px",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: 900,
                  letterSpacing: "0.5px",
                  boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)",
                  transform: `scale(${buttonScale})`,
                  transition: "transform 0.1s ease",
                }}
              >
                Confirmar Mesa (8:00 PM) 🚀
              </div>

              {/* Animated Finger Cursor */}
              {cursorOpacity > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "50%",
                    transform: `translate(${cursorX}px, ${cursorY}px)`,
                    opacity: cursorOpacity,
                    pointerEvents: "none",
                    filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.5))",
                  }}
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5">
                    <path d="M10 2a2 2 0 0 1 2 2v8.5l1.5-1.5a2 2 0 0 1 2.8 2.8l-4.3 4.3a4 4 0 0 1-2.8 1.2H8a4 4 0 0 1-4-4V7a2 2 0 0 1 2-2h.5V4a2 2 0 0 1 2-2h1.5z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        )}

        {/* FASE 2: DASHBOARD GERENCIAL EN VIVO (Frames 90 a 285) */}
        {isDashboardView && (
          <div
            style={{
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              flex: 1,
              transform: `scale(${dashboardTransition})`,
            }}
          >
            {/* Toast Notification (Slide in desde arriba) */}
            <div
              style={{
                backgroundColor: "#064E3B",
                border: "2px solid #10B981",
                borderRadius: "20px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                boxShadow: "0 12px 30px rgba(16, 185, 129, 0.35)",
                transform: `translateY(${interpolate(toastSpring, [0, 1], [-60, 0])}px)`,
                opacity: toastSpring,
              }}
            >
              <div style={{ fontSize: "32px" }}>✅</div>
              <div>
                <div style={{ color: "#6EE7B7", fontSize: "16px", fontWeight: 800 }}>
                  NUEVA RESERVA EN VIVO
                </div>
                <div style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 600 }}>
                  Mesa 4 · 8:00 PM · 2 pax (Pase QR emitido)
                </div>
              </div>
            </div>

            {/* KPI Cards */}
            <div style={{ display: "flex", gap: "12px" }}>
              <div
                style={{
                  flex: 1,
                  backgroundColor: "#1E293B",
                  borderRadius: "18px",
                  padding: "16px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ color: "#94A3B8", fontSize: "13px", fontWeight: 700 }}>OCUPACIÓN HOY</div>
                <div style={{ color: "#10B981", fontSize: "28px", fontWeight: 900, marginTop: "4px" }}>
                  {capacityCounter}%
                </div>
                <div style={{ color: "#6EE7B7", fontSize: "11px", fontWeight: 600 }}>↑ +8% en 10 seg</div>
              </div>

              <div
                style={{
                  flex: 1,
                  backgroundColor: "#1E293B",
                  borderRadius: "18px",
                  padding: "16px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ color: "#94A3B8", fontSize: "13px", fontWeight: 700 }}>INGRESOS DÍA</div>
                <div style={{ color: "#38BDF8", fontSize: "28px", fontWeight: 900, marginTop: "4px" }}>
                  $1,450
                </div>
                <div style={{ color: "#7DD3FC", fontSize: "11px", fontWeight: 600 }}>Tasa oficial BCV</div>
              </div>
            </div>

            {/* Reservas del Día */}
            <div
              style={{
                backgroundColor: "#1E293B",
                borderRadius: "20px",
                padding: "18px",
                flex: 1,
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ color: "#94A3B8", fontSize: "13px", fontWeight: 800, textTransform: "uppercase" }}>
                RESERVAS CONFIRMADAS
              </div>

              {/* Nueva Reserva (Brillante) */}
              <div
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid #10B981",
                  borderRadius: "14px",
                  padding: "12px 14px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 800 }}>
                    Carlos Mendoza (2 pax)
                  </div>
                  <div style={{ color: "#6EE7B7", fontSize: "12px" }}>Mesa 4 · Hoy 8:00 PM</div>
                </div>
                <span style={{ backgroundColor: "#10B981", color: "#000", padding: "4px 8px", borderRadius: "8px", fontSize: "11px", fontWeight: 800 }}>
                  CONFIRMADA
                </span>
              </div>

              {/* Reservas anteriores */}
              {[
                { name: "Valeria Gómez (4 pax)", mesa: "Mesa 8 · 8:30 PM", time: "Confirmada" },
                { name: "Andrés Silva (6 pax)", mesa: "Terraza 2 · 9:00 PM", time: "En Sala" },
              ].map((r) => (
                <div
                  key={r.name}
                  style={{
                    backgroundColor: "#0F172A",
                    borderRadius: "14px",
                    padding: "12px 14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    opacity: 0.7,
                  }}
                >
                  <div>
                    <div style={{ color: "#CBD5E1", fontSize: "14px", fontWeight: 700 }}>{r.name}</div>
                    <div style={{ color: "#64748B", fontSize: "12px" }}>{r.mesa}</div>
                  </div>
                  <span style={{ color: "#94A3B8", fontSize: "11px", fontWeight: 700 }}>{r.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Badge inferior explicativo */}
      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
          color: "#FFFFFF",
          fontSize: "26px",
          fontWeight: 800,
          zIndex: 5,
        }}
      >
        <span style={{ color: "#10B981" }}>0 mensajes manuales.</span> Reserva confirmada en 10 segundos.
      </div>
    </AbsoluteFill>
  );
}
