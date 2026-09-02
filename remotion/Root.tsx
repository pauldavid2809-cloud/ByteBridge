import { Composition } from "remotion";
import { PromoReel } from "./PromoReel";
import { businessDemos } from "../data/demosData";
import { ByteBridgePromoReel } from "./bytebridge/ByteBridgePromoReel";

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
