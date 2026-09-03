import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export function Scene3Transition() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Wipe entrance
  const wipeProgress = spring({
    frame,
    fps,
    config: { damping: 13, stiffness: 140 },
  });

  const textSpring = spring({
    frame: frame - 6,
    fps,
    config: { damping: 12, stiffness: 150 },
  });

  // Exit transition into scene 4
  const exitSlide = interpolate(frame, [45, 60], [0, -100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#050811",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 60px",
        textAlign: "center",
        transform: `translateY(${exitSlide}%)`,
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        overflow: "hidden",
      }}
    >
      {/* Background neon aura */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(6, 182, 212, 0.1) 40%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Badge */}
      <div
        style={{
          transform: `scale(${wipeProgress})`,
          display: "inline-flex",
          alignItems: "center",
          gap: "12px",
          backgroundColor: "rgba(16, 185, 129, 0.15)",
          border: "2px solid rgba(16, 185, 129, 0.5)",
          padding: "16px 36px",
          borderRadius: "9999px",
          color: "#6EE7B7",
          fontSize: "28px",
          fontWeight: 800,
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "40px",
          zIndex: 2,
        }}
      >
        <span>⚡</span>
        <span>Sin esperas ni chat manual</span>
      </div>

      {/* Main Transition Hook */}
      <div
        style={{
          transform: `scale(${textSpring})`,
          color: "#FFFFFF",
          fontSize: "82px",
          fontWeight: 900,
          letterSpacing: "-2px",
          zIndex: 2,
        }}
      >
        Así debería ser{" "}
        <div
          style={{
            fontSize: "96px",
            marginTop: "20px",
            transform: `translateY(${Math.sin(frame * 0.25) * 8}px)`,
          }}
        >
          👇
        </div>
      </div>
    </AbsoluteFill>
  );
}
