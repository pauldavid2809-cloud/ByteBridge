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
  "bytebridge",
  "lolapopspaleteria",
  "keponke_ve",
  "dolcezza_ve",
  "tostaca_ve",
  "elvarfoodandcoffee",
  "sweetgiftve",
  "olis_burger",
  "pokemolokai",
  "barako_rest",
  "portovenerehotel",
  "sybarisrest",
  "srtruhan",
  "crispys_ve",
  "enigmacafe_sc",
  "beaucoffee_sc",
  "bruselas_sc",
  "momentossc",
  "fratellopizzas_sc",
  "kala_cafesc",
  "pa_picar_mas",
];

async function main() {
  const targetSlug = process.argv[2];
  let slugsToRender = SLUGS;

  if (targetSlug && targetSlug !== "all") {
    slugsToRender = SLUGS.filter((s) => s.toLowerCase() === targetSlug.toLowerCase());
  }

  if (slugsToRender.length === 0) {
    console.error(`❌ Argumento "${targetSlug}" no encontrado. Opciones válidas: all o cualquiera de:`, SLUGS.join(", "));
    process.exit(1);
  }

  const outDir = path.join(rootDir, "public", "reels");
  const bytebridgeOutDir = path.join(outDir, "bytebridge");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  if (!fs.existsSync(bytebridgeOutDir)) {
    fs.mkdirSync(bytebridgeOutDir, { recursive: true });
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
    const compositionId =
      slug === "bytebridge"
        ? "ByteBridge-PromoReel"
        : `PromoReel-${slug.replace(/_/g, "-")}`;
        
    const outputPath =
      slug === "bytebridge"
        ? path.join(bytebridgeOutDir, "bytebridge_promo.mp4")
        : path.join(outDir, `${slug}.mp4`);

    if (
      fs.existsSync(outputPath) &&
      fs.statSync(outputPath).size > 1000000 &&
      !process.argv.includes("--force")
    ) {
      console.log(
        `⏩ [${slug}] ya está renderizado en ${outputPath} (${(
          fs.statSync(outputPath).size /
          (1024 * 1024)
        ).toFixed(2)} MB). Saltando...`
      );
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
      concurrency: 1,
      timeoutInMilliseconds: 90000,
      onProgress: ({ progress }) => {
        const percent = Math.floor(progress * 100);
        process.stdout.write(`\r   ⏳ Progreso: ${percent}%`);
      },
    });

    // Also copy bytebridge_promo.mp4 to public/reels/bytebridge.mp4 for convenience
    if (slug === "bytebridge") {
      const flatPath = path.join(outDir, "bytebridge.mp4");
      fs.copyFileSync(outputPath, flatPath);
    }

    console.log(`\n✅ Video exportado a: ${outputPath}\n`);
  }

  console.log("🎉 ¡Todos los videos han sido generados exitosamente en public/reels/!");
}

main().catch((err) => {
  console.error("❌ Error durante el renderizado:", err);
  process.exit(1);
});
