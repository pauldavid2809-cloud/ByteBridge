import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const BATCH8_SLUGS = [
  "rutarestaurante",
  "vistabarccs",
  "vizio_ristorante",
  "crepusculobistro",
  "humosbistro_bar",
  "lafelicittave",
  "aprile_ccs",
  "rutac4_",
  "tepuy_360"
];

async function main() {
  const outDir = path.join(rootDir, "public", "reels");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log("🎬 Empaquetando composición de Remotion para Día 8...");
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

  console.log("✅ Bundle creado. Iniciando renderizado de las 9 demos de Día 8...\n");

  for (const slug of BATCH8_SLUGS) {
    const compositionId = `PromoReel-${slug.replace(/_/g, "-")}`;
    const outputPath = path.join(outDir, `${slug}.mp4`);

    if (fs.existsSync(outputPath) && fs.statSync(outputPath).size > 1000000) {
      console.log(`⏩ [${slug}] ya está renderizado en ${outputPath} (${(fs.statSync(outputPath).size / (1024 * 1024)).toFixed(2)} MB). Saltando...`);
      continue;
    }

    console.log(`\n🎥 Renderizando Reel para [${slug}] (${compositionId})...`);
    try {
      const composition = await selectComposition({
        serveUrl: bundleLocation,
        id: compositionId,
      });

      await renderMedia({
        composition,
        serveUrl: bundleLocation,
        codec: "h264",
        outputLocation: outputPath,
        inputProps: {},
        onProgress: ({ progress }) => {
          const percent = Math.floor(progress * 100);
          if (percent % 10 === 0) {
            process.stdout.write(`   ⏳ Progreso [${slug}]: ${percent}%\r`);
          }
        },
      });

      const stats = fs.statSync(outputPath);
      console.log(`\n   ✅ [${slug}] Video renderizado con éxito: ${(stats.size / (1024 * 1024)).toFixed(2)} MB en ${outputPath}`);
    } catch (err) {
      console.error(`\n   ❌ Error al renderizar [${slug}]:`, err.message);
    }
  }

  console.log("\n🎉 Proceso de renderizado de Día 8 completado.");
}

main().catch(console.error);
