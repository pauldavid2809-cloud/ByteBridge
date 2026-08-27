import { Composition } from "remotion";
import { PromoReel } from "@/remotion/PromoReel";
import { businessDemos } from "@/data/demosData";

export function RemotionRoot() {
  const defaultDemo = businessDemos[0];

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
