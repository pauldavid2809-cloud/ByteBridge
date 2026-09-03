import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

async function main() {
  const outDir = path.join(rootDir, "public", "reels");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outputPath = path.join(outDir, "bytebridge_antes_despues.mp4");

  console.log("🎬 Empaquetando composición de Remotion (ByteBridge-AntesDespues)...");
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

  console.log("✅ Bundle creado con éxito. Iniciando renderizado a MP4 (1080x1920 @ 30fps)...");

  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: "ByteBridge-AntesDespues",
  });

  console.log(`⏱️ Duración: ${composition.durationInFrames} cuadros (${(composition.durationInFrames / composition.fps).toFixed(1)} segundos)`);
  console.log(`📐 Resolución: ${composition.width}x${composition.height} (9:16 vertical TikTok/Reels)`);

  const startTime = Date.now();

  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: "h264",
    outputLocation: outputPath,
    inputProps: {},
    onProgress: ({ progress }) => {
      const percent = Math.floor(progress * 100);
      if (percent % 10 === 0) {
        process.stdout.write(`   ⏳ Renderizando Video: ${percent}%\r`);
      }
    },
  });

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(1);
  const stats = fs.statSync(outputPath);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

  console.log(`\n\n🎉 ¡Video renderizado exitosamente!`);
  console.log(`   📁 Archivo: ${outputPath}`);
  console.log(`   ⚖️ Tamaño: ${sizeMB} MB`);
  console.log(`   ⏱️ Tiempo de renderizado: ${durationSec}s`);
}

main().catch((err) => {
  console.error("❌ Error al renderizar el video:", err);
  process.exit(1);
});
