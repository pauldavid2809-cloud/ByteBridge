import React from "react";
import { Audio, staticFile } from "remotion";

type AudioProps = {
  src?: string;
  volume?: number;
};

export function ByteBridgeAudio({ src, volume = 0.8 }: AudioProps) {
  if (!src) return null;
  
  try {
    const audioSrc = src.startsWith("http") ? src : staticFile(src);
    return <Audio src={audioSrc} volume={volume} />;
  } catch {
    return null;
  }
}
