import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

type LogoProps = {
  size?: number;
  showWordmark?: boolean;
  delay?: number;
  wordmarkSize?: number;
};

export function ByteBridgeLogoAnimated({
  size = 220,
  showWordmark = true,
  delay = 0,
  wordmarkSize = 48,
}: LogoProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delay);

  // Stroke draw animation (approximate path length ~ 950px)
  const pathLength = 950;
  const drawProgress = spring({
    frame: adjustedFrame,
    fps,
    config: { damping: 14, stiffness: 80 },
  });

  const strokeDashoffset = interpolate(drawProgress, [0, 1], [pathLength, 0], {
    extrapolateRight: "clamp",
  });

  // Scale & Glow spring
  const scale = spring({
    frame: adjustedFrame - 5,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const glowPulse = Math.sin(adjustedFrame * 0.1) * 0.3 + 0.7;

  // Wordmark staggered entrance
  const wordmarkSpring = spring({
    frame: adjustedFrame - 15,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const slashRotate = interpolate(
    adjustedFrame,
    [15, 35],
    [-30, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
      }}
    >
      {/* Animated SVG Bridge Symbol */}
      <div
        style={{
          transform: `scale(${Math.max(0.85, scale)})`,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Ambient Neon Glow behind Logo */}
        <div
          style={{
            position: "absolute",
            width: size * 1.3,
            height: size * 0.9,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(46, 189, 133, 0.45) 0%, rgba(46, 189, 133, 0) 70%)",
            filter: "blur(30px)",
            opacity: drawProgress * glowPulse,
            pointerEvents: "none",
          }}
        />

        <svg
          viewBox="0 0 448 232"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: `${size}px`,
            height: `${size * (232 / 448)}px`,
            overflow: "visible",
            filter: `drop-shadow(0 0 ${18 * glowProgress(drawProgress)}px #2ebd85)`,
          }}
        >
          {/* Background subtle track */}
          <path
            d="M46 208 V118 Q46 46 118 46 H330 Q402 46 402 118 V208"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="46"
            strokeLinecap="round"
            fill="none"
          />

          {/* Foreground animated bright path */}
          <path
            d="M46 208 V118 Q46 46 118 46 H330 Q402 46 402 118 V208"
            stroke="url(#byteBridgeGradient)"
            strokeWidth="46"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={pathLength}
            strokeDashoffset={strokeDashoffset}
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="byteBridgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#36d698" />
              <stop offset="50%" stopColor="#2ebd85" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Wordmark byte/bridge */}
      {showWordmark && (
        <div
          style={{
            opacity: wordmarkSpring,
            transform: `translateY(${(1 - wordmarkSpring) * 20}px)`,
            display: "flex",
            alignItems: "center",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: `${wordmarkSize}px`,
            letterSpacing: "-1px",
            color: "#ffffff",
          }}
        >
          <span>byte</span>
          <span
            style={{
              color: "#2ebd85",
              display: "inline-block",
              margin: "0 2px",
              transform: `rotate(${slashRotate}deg)`,
              textShadow: "0 0 25px rgba(46, 189, 133, 0.8)",
            }}
          >
            /
          </span>
          <span>bridge</span>
        </div>
      )}
    </div>
  );
}

function glowProgress(progress: number) {
  return Math.min(1, Math.max(0, progress));
}
