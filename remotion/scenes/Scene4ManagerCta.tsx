import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BusinessDemo, BCV_RATE } from "../../data/demosData";

type Props = {
  demo: BusinessDemo;
};

export function Scene4ManagerCta({ demo }: Props) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const ctaScale = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  const salesUSD = Math.floor(
    interpolate(frame, [0, 50], [0, demo.managerKpis.todaySalesUSD], {
      extrapolateRight: "clamp",
    })
  );

  const salesVES = salesUSD * BCV_RATE;

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 50px 70px 50px",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      {/* Top Manager Tag */}
      <div style={{ zIndex: 10 }}>
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
          03 · Panel de Control en Vivo
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
          Control Total para la Gerencia
        </h2>

        <p
          style={{
            fontSize: "26px",
            color: "#cbd5e1",
            marginTop: "10px",
            fontWeight: 500,
          }}
        >
          Métricas de aforo, caja y reservas en tiempo real
        </p>
      </div>

      {/* Center: Live KPI Cards & ByteBridge Official Pitch Card */}
      <div
        style={{
          width: "720px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          zIndex: 5,
        }}
      >
        {/* KPI Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              padding: "28px 24px",
              borderRadius: "32px",
              border: "2px solid rgba(255, 255, 255, 0.15)",
              backgroundColor: "rgba(18, 18, 22, 0.95)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
              textAlign: "left",
            }}
          >
            <div style={{ fontSize: "18px", fontWeight: 700, color: "#94a3b8" }}>
              Ventas Estimadas Hoy
            </div>
            <div
              style={{
                fontSize: "52px",
                fontWeight: 900,
                color: "#34d399",
                marginTop: "6px",
                lineHeight: 1,
              }}
            >
              ${salesUSD} USD
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#64748b",
                marginTop: "8px",
                fontFamily: "monospace",
              }}
            >
              ≈ {salesVES.toLocaleString("es-VE", { maximumFractionDigits: 0 })} Bs
            </div>
          </div>

          <div
            style={{
              padding: "28px 24px",
              borderRadius: "32px",
              border: "2px solid rgba(255, 255, 255, 0.15)",
              backgroundColor: "rgba(18, 18, 22, 0.95)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
              textAlign: "left",
            }}
          >
            <div style={{ fontSize: "18px", fontWeight: 700, color: "#94a3b8" }}>
              Aforo en Sala
            </div>
            <div
              style={{
                fontSize: "52px",
                fontWeight: 900,
                color: demo.palette.accent,
                marginTop: "6px",
                lineHeight: 1,
              }}
            >
              {demo.managerKpis.capacityPercentage}%
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#34d399",
                marginTop: "8px",
              }}
            >
              ● Capacidad Óptima
            </div>
          </div>
        </div>

        {/* ByteBridge Official CTA Card */}
        <div
          style={{
            transform: `scale(${Math.max(0, ctaScale)})`,
            padding: "44px 36px",
            borderRadius: "36px",
            border: "3px solid #fbbf24",
            background:
              "linear-gradient(135deg, rgba(20, 20, 26, 0.98) 0%, rgba(10, 10, 12, 0.98) 100%)",
            boxShadow:
              "0 25px 60px rgba(0,0,0,0.8), 0 0 50px rgba(251, 191, 36, 0.25)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "8px 24px",
              borderRadius: "9999px",
              backgroundColor: "rgba(251, 191, 36, 0.15)",
              border: "1.5px solid rgba(251, 191, 36, 0.4)",
            }}
          >
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "9999px",
                backgroundColor: "#fbbf24",
                boxShadow: "0 0 12px #fbbf24",
              }}
            />
            <span
              style={{
                fontSize: "19px",
                fontWeight: 900,
                color: "#fde047",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Suite: QR en Mesa · Delivery · Pases · Reservas
            </span>
          </div>

          <h3
            style={{
              fontSize: "44px",
              fontWeight: 900,
              color: "#ffffff",
              marginTop: "20px",
              marginBottom: "0px",
              lineHeight: 1.15,
            }}
          >
            ¿Listo para activar tu WebApp?
          </h3>

          <p
            style={{
              fontSize: "22px",
              color: "#cbd5e1",
              marginTop: "12px",
              fontWeight: 500,
              maxWidth: "560px",
            }}
          >
            Automatiza reservaciones, agiliza pedidos y fideliza a tus clientes.
          </p>

          {/* Direct Chat Link CTA Button */}
          <div
            style={{
              marginTop: "28px",
              width: "100%",
              padding: "24px 32px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
              boxShadow: "0 20px 45px rgba(34, 197, 94, 0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
              boxSizing: "border-box",
              border: "2px solid rgba(255,255,255,0.25)",
            }}
          >
            <span style={{ fontSize: "36px" }}>👉</span>
            <span
              style={{
                fontSize: "25px",
                fontWeight: 900,
                color: "#000000",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              Toca el link en el chat para probarla
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{ zIndex: 10 }}>
        <p
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#64748b",
            margin: 0,
          }}
        >
          byte-bridge-tau.vercel.app · Caracas · Maracaibo · Latam
        </p>
      </div>
    </AbsoluteFill>
  );
}
