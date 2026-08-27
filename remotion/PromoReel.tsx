"use client";

import { AbsoluteFill, Sequence } from "remotion";
import { BusinessDemo } from "../data/demosData";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Menu } from "./scenes/Scene2Menu";
import { Scene3QrPass } from "./scenes/Scene3QrPass";
import { Scene4ManagerCta } from "./scenes/Scene4ManagerCta";

export type PromoReelProps = {
  demo: BusinessDemo;
};

export function PromoReel({ demo }: PromoReelProps) {
  return (
    <AbsoluteFill className="bg-black">
      {/* Escena 1: Hook y Presentación de la Marca (0 - 3.5s) */}
      <Sequence from={0} durationInFrames={105}>
        <Scene1Hook demo={demo} />
      </Sequence>

      {/* Escena 2: Menú Digital y Multimoneda Oficial (3.5s - 7.5s) */}
      <Sequence from={105} durationInFrames={120}>
        <Scene2Menu demo={demo} />
      </Sequence>

      {/* Escena 3: Pase VIP QR y Validación Óptica (7.5s - 11.5s) */}
      <Sequence from={225} durationInFrames={120}>
        <Scene3QrPass demo={demo} />
      </Sequence>

      {/* Escena 4: Modo Gerente y Llamado a la Acción ByteBridge (11.5s - 15.0s) */}
      <Sequence from={345} durationInFrames={105}>
        <Scene4ManagerCta demo={demo} />
      </Sequence>
    </AbsoluteFill>
  );
}
