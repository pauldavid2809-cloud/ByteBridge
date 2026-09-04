import { createRequire } from "module";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const ColorThief = require("colorthief");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

function colorToHex(color) {
  if (!color) return "#10B981";
  const r = color._r !== undefined ? color._r : color[0];
  const g = color._g !== undefined ? color._g : color[1];
  const b = color._b !== undefined ? color._b : color[2];
  return "#" + [r, g, b].map((x) => Math.floor(x).toString(16).padStart(2, "0")).join("");
}

async function extractFromImage(imagePath) {
  if (!fs.existsSync(imagePath)) {
    console.error(`❌ Archivo no encontrado: ${imagePath}`);
    return null;
  }

  try {
    const dominantColor = await ColorThief.getColor(imagePath);
    const palette = await ColorThief.getPalette(imagePath, 5);

    const primaryHex = colorToHex(dominantColor);
    const secondaryHex = palette[1] ? colorToHex(palette[1]) : "#10B981";
    const accentHex = palette[2] ? colorToHex(palette[2]) : "#06B6D4";

    return {
      primary: primaryHex,
      secondary: secondaryHex,
      accent: accentHex,
      palette: palette.slice(0, 5).map(colorToHex),
    };
  } catch (err) {
    console.error(`❌ Error al extraer colores de ${imagePath}:`, err.message);
    return null;
  }
}

async function main() {
  const targetImage = process.argv[2];

  if (!targetImage) {
    console.log("🎨 Modo de uso: node scripts/extract-palette.mjs <ruta-a-imagen-o-slug>");
    console.log("   Ejemplo: node scripts/extract-palette.mjs public/marcas/rutarestaurante.jpg");
    process.exit(0);
  }

  const resolvedPath = path.isAbsolute(targetImage)
    ? targetImage
    : path.join(
        rootDir,
        targetImage.startsWith("public")
          ? targetImage
          : path.join("public", "marcas", targetImage.endsWith(".jpg") ? targetImage : `${targetImage}.jpg`)
      );

  console.log(`🔍 Analizando espectro de color en: ${resolvedPath}...`);
  const result = await extractFromImage(resolvedPath);

  if (result) {
    console.log("\n✅ Paleta de color extraída exitosamente:");
    console.log(JSON.stringify(result, null, 2));
  }
}

main();
