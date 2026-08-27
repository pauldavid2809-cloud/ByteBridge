import { Composition } from "remotion";
import { PromoReel } from "./PromoReel";
import { businessDemos } from "../data/demosData";

export function RemotionRoot() {
  return (
    <>
      {businessDemos.map((demo) => (
        <Composition
          key={demo.slug}
          id={`PromoReel-${demo.slug}`}
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
