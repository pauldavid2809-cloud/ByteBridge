import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export function Scene4LandingDashboard() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  const dashSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 13, stiffness: 90 },
  });

  // Animated counting KPI from $1,420 to $3,850
  const salesCount = Math.round(
    interpolate(frame, [15, 120], [1420, 3850], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const capacityCount = Math.round(
    interpolate(frame, [15, 110], [45, 88], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

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
          <span style={{ fontSize: "18px" }}>📊</span>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 800,
              color: "#36d698",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            CONTROL TOTAL DEL NEGOCIO
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
          Panel de Gerencia en Tiempo Real{" "}
          <span style={{ color: "#2ebd85" }}>en tu Móvil</span>
        </h2>
      </div>

      {/* Center Dashboard Preview Card */}
      <div
        style={{
          transform: `scale(${0.92 + dashSpring * 0.08})`,
          opacity: Math.min(1, Math.max(0, dashSpring)),
          width: "780px",
          borderRadius: "36px",
          backgroundColor: "#0d1411",
          border: "3px solid rgba(46, 189, 133, 0.4)",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.85), 0 0 50px rgba(46, 189, 133, 0.25)",
          padding: "32px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Dashboard Top Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            paddingBottom: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#2ebd85",
                boxShadow: "0 0 10px #2ebd85",
              }}
            />
            <span style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff" }}>
              Panel de Administración · Modo Gerente
            </span>
          </div>

          <span
            style={{
              fontSize: "14px",
              fontWeight: 800,
              padding: "6px 16px",
              borderRadius: "10px",
              backgroundColor: "rgba(46, 189, 133, 0.15)",
              color: "#34d399",
              border: "1px solid rgba(46, 189, 133, 0.3)",
            }}
          >
            ● EN VIVO
          </span>
        </div>

        {/* 3 Metrics Cards Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
          {/* Metric 1 */}
          <div
            style={{
              padding: "20px",
              borderRadius: "20px",
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(46, 189, 133, 0.3)",
            }}
          >
            <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8", fontWeight: 700 }}>
              Ventas de Hoy
            </p>
            <p
              style={{
                margin: "8px 0 0 0",
                fontSize: "32px",
                fontWeight: 900,
                color: "#34d399",
              }}
            >
              ${salesCount.toLocaleString()}
            </p>
            <span style={{ fontSize: "12px", color: "#6ee7b7", fontWeight: 700 }}>
              ▲ +34% vs ayer
            </span>
          </div>

          {/* Metric 2 */}
          <div
            style={{
              padding: "20px",
              borderRadius: "20px",
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8", fontWeight: 700 }}>
              Capacidad
            </p>
            <p
              style={{
                margin: "8px 0 0 0",
                fontSize: "32px",
                fontWeight: 900,
                color: "#ffffff",
              }}
            >
              {capacityCount}%
            </p>
            <span style={{ fontSize: "12px", color: "#38bdf8", fontWeight: 700 }}>
              28 / 32 Mesas
            </span>
          </div>

          {/* Metric 3 */}
          <div
            style={{
              padding: "20px",
              borderRadius: "20px",
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8", fontWeight: 700 }}>
              Pases QR
            </p>
            <p
              style={{
                margin: "8px 0 0 0",
                fontSize: "32px",
                fontWeight: 900,
                color: "#ffffff",
              }}
            >
              42 VIP
            </p>
            <span style={{ fontSize: "12px", color: "#fbbf24", fontWeight: 700 }}>
              0 esperas
            </span>
          </div>
        </div>

        {/* Live Orders Feed */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ margin: 0, fontSize: "15px", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase" }}>
            Últimas Órdenes y Reservas
          </p>

          {[
            { id: "#104", client: "Mesa 04 (Terraza)", total: "$48.00", status: "En Cocina", color: "#38bdf8" },
            { id: "#103", client: "Pase VIP Piscina (4 Pax)", total: "$80.00", status: "Validado en Puerta", color: "#34d399" },
            { id: "#102", client: "Delivery Directo #22", total: "$32.00", status: "Entregado", color: "#a78bfa" },
          ].map((order, idx) => (
            <div
              key={idx}
              style={{
                padding: "14px 20px",
                borderRadius: "16px",
                backgroundColor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "16px", fontWeight: 800, color: "#94a3b8" }}>
                  {order.id}
                </span>
                <span style={{ fontSize: "18px", fontWeight: 800, color: "#ffffff" }}>
                  {order.client}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: 900, color: "#34d399" }}>
                  {order.total}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    color: order.color,
                  }}
                >
                  ● {order.status}
                </span>
              </div>
            </div>
          ))}
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
          📱 Sin Descargar Apps
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
          🔒 Acceso Seguro con Roles
        </span>
      </div>
    </AbsoluteFill>
  );
}
