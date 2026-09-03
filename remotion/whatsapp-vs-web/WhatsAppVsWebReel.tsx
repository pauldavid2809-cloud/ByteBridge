import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2WhatsAppAntes } from "./scenes/Scene2WhatsAppAntes";
import { Scene3Transition } from "./scenes/Scene3Transition";
import { Scene4WebAppDespues } from "./scenes/Scene4WebAppDespues";
import { Scene5Cta } from "./scenes/Scene5Cta";
import { TIMINGS } from "./timings";

export function WhatsAppVsWebReel() {
  const startHook = 0;
  const startAntes = TIMINGS.hook; // 90
  const startTransition = startAntes + TIMINGS.whatsappAntes; // 315
  const startDespues = startTransition + TIMINGS.transition; // 375
  const startCta = startDespues + TIMINGS.webAppDespues; // 660

  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* 🎵 AUDIO: Background Beat Viral (27 segundos continuos @ 125 BPM) */}
      <Audio src={staticFile("audio/bg_beat.wav")} volume={0.6} />

      {/* 🎵 AUDIO SFX: Sincronizados con las acciones de cada escena */}
      {/* 1. Pop mensaje cliente (15 frames después de iniciar WhatsApp) */}
      <Sequence from={startAntes + 15} durationInFrames={15}>
        <Audio src={staticFile("audio/whatsapp_pop.wav")} volume={0.85} />
      </Sequence>

      {/* 2. Sonido de tecleo (mientras aparece el typing indicator) */}
      <Sequence from={startAntes + 55} durationInFrames={40}>
        <Audio src={staticFile("audio/typing.wav")} volume={0.7} />
      </Sequence>

      {/* 3. Pop respuesta restaurante */}
      <Sequence from={startAntes + 98} durationInFrames={15}>
        <Audio src={staticFile("audio/whatsapp_pop.wav")} volume={0.85} />
      </Sequence>

      {/* 4. Whoosh Swipe Transición */}
      <Sequence from={startTransition} durationInFrames={30}>
        <Audio src={staticFile("audio/whoosh.wav")} volume={0.9} />
      </Sequence>

      {/* 5. Clic del botón Confirmar Mesa en WebApp */}
      <Sequence from={startDespues + 72} durationInFrames={15}>
        <Audio src={staticFile("audio/click.wav")} volume={0.9} />
      </Sequence>

      {/* 6. Campana / Ding Toast Reserva Confirmada en Dashboard */}
      <Sequence from={startDespues + 105} durationInFrames={45}>
        <Audio src={staticFile("audio/success_ding.wav")} volume={0.95} />
      </Sequence>

      {/* 🎬 ESCENAS VISUALES INDIVIDUALES */}
      {/* Escena 1: Hook (0s a 3s) */}
      <Sequence from={startHook} durationInFrames={TIMINGS.hook}>
        <Scene1Hook />
      </Sequence>

      {/* Escena 2: WhatsApp Antes (3s a 10.5s) */}
      <Sequence from={startAntes} durationInFrames={TIMINGS.whatsappAntes}>
        <Scene2WhatsAppAntes />
      </Sequence>

      {/* Escena 3: Transición (10.5s a 12.5s) */}
      <Sequence from={startTransition} durationInFrames={TIMINGS.transition}>
        <Scene3Transition />
      </Sequence>

      {/* Escena 4: WebApp Después (12.5s a 22s) */}
      <Sequence from={startDespues} durationInFrames={TIMINGS.webAppDespues}>
        <Scene4WebAppDespues />
      </Sequence>

      {/* Escena 5: Outro CTA (22s a 27s) */}
      <Sequence from={startCta} durationInFrames={TIMINGS.cta}>
        <Scene5Cta />
      </Sequence>
    </AbsoluteFill>
  );
}

