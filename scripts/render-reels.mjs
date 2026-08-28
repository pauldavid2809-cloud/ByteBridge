/**
 * Script de renderizado de video en alta definición (1080x1920 MP4) con Remotion
 * Guarda los videos directamente en public/reels/[slug].mp4 para descarga web y envío.
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
  "estacionholidays",
  "mosaico_mcbo",
  "incontrotrattoria",
  "pinzulia",
  "alfredscoffeebar",
  "lakebistro",
  "bromcbo",
  "ahpresidente",
  "mykonosconceptve",
  "terraza_restobar",
];

async function main() {
  const targetSlug = process.argv[2];
  let slugsToRender = SLUGS;

  if (targetSlug === "batch2") {
    slugsToRender = SLUGS.slice(10);
  } else if (targetSlug === "batch1") {
    slugsToRender = SLUGS.slice(0, 10);
  } else if (targetSlug) {
    slugsToRender = SLUGS.filter((s) => s.toLowerCase() === targetSlug.toLowerCase());
  }

  if (slugsToRender.length === 0) {
    console.error(`❌ Argumento "${targetSlug}" no encontrado. Opciones válidas: batch1, batch2 o cualquiera de:`, SLUGS.join(", "));
    process.exit(1);
  }

  const outDir = path.join(rootDir, "public", "reels");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log("🎬 Empaquetando composición de Remotion con Webpack...");
  const entryPoint = path.join(rootDir, "remotion", "index.ts");
  const bundleLocation = await bundle({
    entryPoint,
    publicDir: path.join(rootDir, "public"),
    webpackOverride: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...(config.resolve?.alias || {}),
          "@": rootDir,
        },
      },
    }),
  });

  console.log("✅ Bundle creado con éxito. Iniciando renderizado de video(s)...\n");

  for (const slug of slugsToRender) {
    const compositionId = `PromoReel-${slug.replace(/_/g, "-")}`;
    const outputPath = path.join(outDir, `${slug}.mp4`);

    if (fs.existsSync(outputPath) && fs.statSync(outputPath).size > 1000000 && !process.argv.includes("--force")) {
      console.log(`⏩ [${slug}] ya está renderizado en public/reels/${slug}.mp4 (${(fs.statSync(outputPath).size / (1024 * 1024)).toFixed(2)} MB). Saltando...`);
      continue;
    }

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

    console.log(`\n✅ Video exportado a: public/reels/${slug}.mp4\n`);
  }

  console.log("🎉 ¡Todos los videos han sido generados exitosamente en public/reels/!");
}

main().catch((err) => {
  console.error("❌ Error durante el renderizado:", err);
  process.exit(1);
});
