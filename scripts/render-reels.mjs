/**
 * Script de renderizado de video en alta definición (1080x1920 MP4) con Remotion
 * Ejecutar con: npm run render:reels [slug] o node scripts/render-reels.mjs [slug]
 * Si no se especifica slug, renderiza los 10 negocios a la carpeta out/reels/
 */

import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const SLUGS = [
  "ecoland",
  "grandchef",
  "zuhouse",
  "tannous",
  "room101",
  "labarraventura",
  "ciaogastrobar",
  "blaomcbo",
  "pittsbowling",
  "corner",
];

async function main() {
  const targetSlug = process.argv[2];
  const slugsToRender = targetSlug
    ? SLUGS.filter((s) => s.toLowerCase() === targetSlug.toLowerCase())
    : SLUGS;

  if (slugsToRender.length === 0) {
    console.error(`❌ Slug "${targetSlug}" no encontrado. Opciones válidas:`, SLUGS.join(", "));
    process.exit(1);
  }

  const outDir = path.join(rootDir, "out", "reels");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log("🎬 Empaquetando composición de Remotion con Webpack...");
  const entryPoint = path.join(rootDir, "remotion", "Root.tsx");
  const bundleLocation = await bundle({
    entryPoint,
    webpackOverride: (config) => config,
  });

  console.log("✅ Bundle creado con éxito. Iniciando renderizado de video(s)...\n");

  for (const slug of slugsToRender) {
    const compositionId = `PromoReel-${slug}`;
    const outputPath = path.join(outDir, `${slug}-reel-1080x1920.mp4`);

    console.log(`🎥 Renderizando Reel para [${slug}] (${compositionId})...`);

    const composition = await selectComposition({
      serveUrl: bundleLocation,
      id: compositionId,
    });

    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: "h264",
      outputLocation: outputPath,
      onProgress: ({ progress }) => {
        const percent = Math.floor(progress * 100);
        process.stdout.write(`\r   ⏳ Progreso: ${percent}%`);
      },
    });

    console.log(`\n✅ Video exportado en alta calidad: ${outputPath}\n`);
  }

  console.log("🎉 ¡Todos los videos han sido generados exitosamente en out/reels/!");
}

main().catch((err) => {
  console.error("❌ Error durante el renderizado:", err);
  process.exit(1);
});
