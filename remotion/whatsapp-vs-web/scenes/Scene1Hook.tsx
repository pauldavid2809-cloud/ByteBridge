import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export function Scene1Hook() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const titleSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const badgeScale = spring({
    frame: frame - 2,
    fps,
    config: { damping: 12, stiffness: 150 },
  });

  // Pulse effect on the warning emoji
  const pulse = Math.sin(frame * 0.2) * 0.05 + 1;

  // Exit fade out into scene 2
  const opacity = interpolate(frame, [75, 90], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame, [75, 90], [0, -30], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 60px",
        textAlign: "center",
        opacity,
        transform: `translateY(${translateY}px)`,
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Background glow circle */}
      <div
        style={{
          position: "absolute",
          width: "650px",
          height: "650px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Alerta Badge */}
      <div
        style={{
          transform: `scale(${badgeScale})`,
          display: "inline-flex",
          alignItems: "center",
          gap: "12px",
          backgroundColor: "rgba(239, 68, 68, 0.15)",
          border: "2px solid rgba(239, 68, 68, 0.4)",
          padding: "14px 28px",
          borderRadius: "9999px",
          color: "#FCA5A5",
          fontSize: "30px",
          fontWeight: 800,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: "50px",
          zIndex: 2,
        }}
      >
        <span style={{ transform: `scale(${pulse})`, display: "inline-block" }}>⚠️</span>
        <span>Realidad en Latinoamérica</span>
      </div>

      {/* Main Punchy Hook Text */}
      <div
        style={{
          transform: `scale(${titleSpring})`,
          color: "#FFFFFF",
          fontSize: "66px",
          fontWeight: 900,
          lineHeight: 1.18,
          letterSpacing: "-1.5px",
          maxWidth: "960px",
          zIndex: 2,
        }}
      >
        Así reservan mesa en la mayoría de restaurantes{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #EF4444 0%, #F87171 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          todavía
        </span>{" "}
        <div style={{ fontSize: "80px", marginTop: "30px" }}>👇</div>
      </div>
    </AbsoluteFill>
  );
}
