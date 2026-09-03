import { Composition } from "remotion";
import { PromoReel } from "./PromoReel";
import { businessDemos } from "../data/demosData";
import { ByteBridgePromoReel } from "./bytebridge/ByteBridgePromoReel";
import { WhatsAppVsWebReel } from "./whatsapp-vs-web/WhatsAppVsWebReel";
import { Scene1Hook } from "./whatsapp-vs-web/scenes/Scene1Hook";
import { Scene2WhatsAppAntes } from "./whatsapp-vs-web/scenes/Scene2WhatsAppAntes";
import { Scene3Transition } from "./whatsapp-vs-web/scenes/Scene3Transition";
import { Scene4WebAppDespues } from "./whatsapp-vs-web/scenes/Scene4WebAppDespues";
import { Scene5Cta } from "./whatsapp-vs-web/scenes/Scene5Cta";
import { TIMINGS, TOTAL_FRAMES } from "./whatsapp-vs-web/timings";

export function RemotionRoot() {
  return (
    <>
      {/* Reel Promocional Oficial de ByteBridge (30s / 900 frames) */}
      <Composition
        id="ByteBridge-PromoReel"
        component={ByteBridgePromoReel}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* 🎬 Reel Completo Antes vs Después (WhatsApp vs WebApp de Reservas) (27s / 810 frames) */}
      <Composition
        id="ByteBridge-AntesDespues"
        component={WhatsAppVsWebReel}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* 🧩 Escenas Modulares Individuales para previsualización y ajuste de tiempos */}
      <Composition
        id="ByteBridge-Scene1-Hook"
        component={Scene1Hook}
        durationInFrames={TIMINGS.hook}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="ByteBridge-Scene2-WhatsAppAntes"
        component={Scene2WhatsAppAntes}
        durationInFrames={TIMINGS.whatsappAntes}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="ByteBridge-Scene3-Transition"
        component={Scene3Transition}
        durationInFrames={TIMINGS.transition}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="ByteBridge-Scene4-WebAppDespues"
        component={Scene4WebAppDespues}
        durationInFrames={TIMINGS.webAppDespues}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="ByteBridge-Scene5-CTA"
        component={Scene5Cta}
        durationInFrames={TIMINGS.cta}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* Reels de Demos Comerciales de Clientes */}
      {businessDemos.map((demo) => (
        <Composition
          key={demo.slug}
          id={`PromoReel-${demo.slug.replace(/_/g, "-")}`}
          component={PromoReel}
          durationInFrames={450}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            demo,
          }}
        />
      ))}
    </>
  );
}
