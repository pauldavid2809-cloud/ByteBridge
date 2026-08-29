"use client";

import { useRef, useState } from "react";
import { Player, PlayerRef } from "@remotion/player";
import { motion, AnimatePresence } from "motion/react";
import { ByteBridgePromoReel } from "@/remotion/bytebridge/ByteBridgePromoReel";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function ByteBridgeReelModal({ isOpen, onClose }: Props) {
  const playerRef = useRef<PlayerRef>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleTogglePlay = () => {
    if (playerRef.current) {
      if (playerRef.current.isPlaying()) {
        playerRef.current.pause();
        setIsPlaying(false);
      } else {
        playerRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleRestart = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
      playerRef.current.play();
      setIsPlaying(true);
    }
  };

  const pitchCopy =
    "🚀 Hola! Te comparto la propuesta y demo interactiva de ByteBridge: automatización con entradas y pases VIP por QR, soluciones de QR en mesa con pedidos directos, menú digital multimoneda con tasa oficial BCV y panel de gerencia en vivo.\n\nEscríbenos al WhatsApp oficial: +58 412-0308674 o visita https://bytebridge.cloud";

  const handleCopyPitch = () => {
    navigator.clipboard.writeText(pitchCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappUrl = `https://wa.me/584120308674?text=${encodeURIComponent(pitchCopy)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
        {/* Backdrop con desenfoque */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 flex max-h-[95vh] w-full max-w-lg flex-col items-center overflow-y-auto rounded-3xl border border-white/20 bg-zinc-950 p-5 shadow-2xl scrollbar-none"
        >
          {/* Header */}
          <div className="flex w-full items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full animate-ping bg-[#2ebd85]" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                Reel Oficial ByteBridge (19s HD) · Remotion
              </span>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-zinc-400 hover:bg-white/20 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Smartphone Frame with Remotion Player */}
          <div className="relative mt-4 flex w-full max-w-[270px] sm:max-w-[310px] items-center justify-center overflow-hidden rounded-[2.5rem] border-4 border-zinc-700 bg-black shadow-2xl shadow-black/80">
            {/* Notch */}
            <div className="absolute top-2 z-20 h-4 w-24 rounded-full bg-zinc-900 border border-white/10" />

            {/* Remotion Player */}
            <div className="w-full aspect-[9/16] overflow-hidden rounded-[2.2rem]">
              <Player
                ref={playerRef}
                component={ByteBridgePromoReel}
                durationInFrames={570}
                compositionWidth={1080}
                compositionHeight={1920}
                fps={30}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                autoPlay
                loop
              />
            </div>
          </div>

          {/* Player Controls Bar */}
          <div className="mt-3 flex items-center justify-center gap-2">
            <button
              onClick={handleTogglePlay}
              className="rounded-xl border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white transition-all active:scale-95 hover:bg-white/20"
            >
              {isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}
            </button>

            <button
              onClick={handleRestart}
              className="rounded-xl border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white transition-all active:scale-95 hover:bg-white/20"
            >
              🔄 Reiniciar
            </button>
          </div>

          {/* Action CTAs */}
          <div className="mt-4 w-full space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-xs font-bold text-black shadow-lg shadow-emerald-500/20 transition-all active:scale-95 hover:bg-emerald-400"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Contactar por WhatsApp (+58 412-0308674)</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleCopyPitch}
                className={`flex items-center justify-center gap-1.5 rounded-xl border py-2.5 text-xs font-semibold transition-all active:scale-95 ${
                  copied
                    ? "border-emerald-500 bg-emerald-500/20 text-emerald-300"
                    : "border-white/15 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{copied ? "✓" : "📋"}</span>
                <span>{copied ? "¡Copiado!" : "Copiar Mensaje"}</span>
              </button>

              <a
                href="/reels/bytebridge/bytebridge_promo.mp4"
                download="bytebridge_promo_1080x1920.mp4"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-amber-400/40 bg-amber-400/10 py-2.5 text-xs font-bold text-amber-300 transition-all active:scale-95 hover:bg-amber-400/20"
              >
                <span>⬇️</span>
                <span>Descargar MP4</span>
              </a>
            </div>
          </div>

          {/* Render Command Info */}
          <div className="mt-3 w-full rounded-2xl border border-white/10 bg-zinc-900/80 p-3 text-left">
            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <span className="font-semibold text-zinc-300">
                📁 Ubicación del video renderizado (1080x1920 MP4):
              </span>
            </div>
            <code className="mt-1 block font-mono text-[10px] text-emerald-300 bg-black/60 p-2 rounded-lg overflow-x-auto">
              public/reels/bytebridge/bytebridge_promo.mp4
            </code>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
