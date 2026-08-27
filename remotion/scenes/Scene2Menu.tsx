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

export function Scene2Menu({ demo }: Props) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const headerY = interpolate(frame, [0, 20], [30, 0], {
    extrapolateRight: "clamp",
  });

  const items = demo.menuItems.slice(0, 3);

  // Currency toggle indicator animation
  const isVesMode = frame > 45;

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
      {/* Top Header */}
      <div
        style={{
          opacity: headerOpacity,
          transform: `translateY(${headerY}px)`,
          textAlign: "center",
          zIndex: 10,
        }}
      >
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
          01 · Carta Digital Multimoneda
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
          Precios en USD y Bolívares
        </h2>

        <p
          style={{
            fontSize: "26px",
            color: "#cbd5e1",
            marginTop: "10px",
            fontWeight: 500,
          }}
        >
          Conversión automática a Tasa Oficial BCV:{" "}
          <strong style={{ color: "#38bdf8", fontWeight: 800 }}>
            {BCV_RATE.toFixed(2)} Bs / $
          </strong>
        </p>
      </div>

      {/* Center: Smartphone Container Showing the Menu */}
      <div
        style={{
          width: "720px",
          borderRadius: "44px",
          border: "8px solid #27272a",
          backgroundColor: "rgba(18, 18, 22, 0.95)",
          padding: "36px",
          boxShadow: `0 35px 90px -15px rgba(0,0,0,0.9), 0 0 60px ${demo.palette.glow}`,
          boxSizing: "border-box",
          zIndex: 5,
        }}
      >
        {/* Menu Navigation Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1.5px solid rgba(255,255,255,0.12)",
            paddingBottom: "24px",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "9999px",
                backgroundColor: demo.palette.accent,
                boxShadow: `0 0 15px ${demo.palette.accent}`,
              }}
            />
            <span style={{ fontSize: "28px", fontWeight: 900, color: "#ffffff" }}>
              Menú Destacado
            </span>
          </div>

          {/* Animated Currency Pill Switch */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1.5px solid rgba(255,255,255,0.15)",
              borderRadius: "16px",
              padding: "4px",
            }}
          >
            <div
              style={{
                padding: "8px 18px",
                borderRadius: "12px",
                backgroundColor: !isVesMode ? "#ffffff" : "transparent",
                color: !isVesMode ? "#000000" : "#94a3b8",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              USD ($)
            </div>
            <div
              style={{
                padding: "8px 18px",
                borderRadius: "12px",
                backgroundColor: isVesMode ? demo.palette.accent : "transparent",
                color: isVesMode ? "#000000" : "#94a3b8",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              Bs (VES)
            </div>
          </div>
        </div>

        {/* Menu Items Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {items.map((item, idx) => {
            const itemSpring = spring({
              frame: frame - 15 - idx * 12,
              fps,
              config: { damping: 12, stiffness: 100 },
            });
            const priceVES = item.priceUSD * BCV_RATE;

            return (
              <div
                key={item.id}
                style={{
                  transform: `scale(${Math.max(0, itemSpring)})`,
                  opacity: Math.min(1, Math.max(0, itemSpring)),
                  borderRadius: "28px",
                  border: "2px solid rgba(255, 255, 255, 0.1)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
              >
                <div style={{ flex: 1, paddingRight: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      style={{
                        fontSize: "26px",
                        fontWeight: 800,
                        color: "#ffffff",
                      }}
                    >
                      {item.name}
                    </span>
                    {item.popular && (
                      <span
                        style={{
                          padding: "4px 12px",
                          borderRadius: "9999px",
                          backgroundColor: `${demo.palette.accent}30`,
                          color: demo.palette.accent,
                          fontSize: "14px",
                          fontWeight: 800,
                        }}
                      >
                        TOP
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#94a3b8",
                      marginTop: "6px",
                      lineHeight: 1.3,
                      maxHeight: "48px",
                      overflow: "hidden",
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: 900,
                      color: "#ffffff",
                    }}
                  >
                    ${item.priceUSD} USD
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#34d399",
                      marginTop: "4px",
                      fontFamily: "monospace",
                    }}
                  >
                    ≈ {priceVES.toLocaleString("es-VE", { maximumFractionDigits: 0 })} Bs
                  </div>
                </div>
              </div>
            );
          })}
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
        <span style={{ fontSize: "24px" }}>💡</span>
        <span style={{ fontSize: "22px", fontWeight: 700, color: "#f1f5f9" }}>
          Los clientes piden a comanda y pagan a tasa oficial al instante
        </span>
      </div>
    </AbsoluteFill>
  );
}
