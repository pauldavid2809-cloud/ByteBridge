import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const marcasDir = path.join(__dirname, "..", "public", "marcas");
const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const slugs = [
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
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"]
  });

  const page = await browser.newPage();
  const results = {};

  for (const slug of slugs) {
    const imgPath = path.join(marcasDir, `${slug}.jpg`);
    if (!fs.existsSync(imgPath)) {
      console.warn(`No existe imagen para ${slug}`);
      continue;
    }

    const imgBase64 = fs.readFileSync(imgPath).toString("base64");
    const dataUrl = `data:image/jpeg;base64,${imgBase64}`;

    const palette = await page.evaluate(async (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = 64;
          canvas.height = 64;
          ctx.drawImage(img, 0, 0, 64, 64);
          const data = ctx.getImageData(0, 0, 64, 64).data;

          const colorCounts = {};
          for (let i = 0; i < data.length; i += 4) {
            const r = Math.round(data[i] / 16) * 16;
            const g = Math.round(data[i + 1] / 16) * 16;
            const b = Math.round(data[i + 2] / 16) * 16;
            const a = data[i + 3];
            if (a < 128) continue;
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            if (brightness > 245 || brightness < 15) continue;

            const key = `${r},${g},${b}`;
            colorCounts[key] = (colorCounts[key] || 0) + 1;
          }

          const sorted = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
          const toHex = (c) => {
            const [r, g, b] = c.split(",").map(Number);
            return (
              "#" +
              [r, g, b]
                .map((x) => {
                  const hex = Math.min(255, Math.max(0, x)).toString(16);
                  return hex.length === 1 ? "0" + hex : hex;
                })
                .join("")
            );
          };

          const topColors = sorted.slice(0, 5).map(([c]) => toHex(c));
          resolve(topColors);
        };
        img.src = src;
      });
    }, dataUrl);

    results[slug] = palette;
    console.log(`🎨 ${slug}:`, palette);
  }

  await browser.close();
  const outPath = path.join(__dirname, "..", "data", "palette-batch8.json");
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), "utf-8");
  console.log(`✅ Paletas guardadas en ${outPath}`);
}

main().catch(console.error);
