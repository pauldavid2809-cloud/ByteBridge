import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const marcasDir = path.join(__dirname, "..", "public", "marcas");
const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const slugs = [
  "dystopiabowling",
  "lataberna_delnavegante",
  "mrbroastermcbo",
  "friendsmaracaibo",
  "cartablancave",
  "pidesalmarina",
  "picanagrill",
  "altamarmcbo",
  "bogrillmcbo",
  "dantedipronto"
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
            if (a > 128) {
              const hex =
                "#" +
                ((1 << 24) + (r << 16) + (g << 8) + b)
                  .toString(16)
                  .slice(1)
                  .toUpperCase();
              colorCounts[hex] = (colorCounts[hex] || 0) + 1;
            }
          }

          const sorted = Object.entries(colorCounts)
            .sort((a, b) => b[1] - a[1])
            .map(([hex]) => hex);

          resolve(sorted.slice(0, 5));
        };
        img.src = src;
      });
    }, dataUrl);

    results[slug] = palette;
    console.log(`${slug}:`, palette);
  }

  await browser.close();
  fs.writeFileSync(
    path.join(__dirname, "..", "data", "palette-batch5.json"),
    JSON.stringify(results, null, 2),
    "utf8"
  );
  console.log("\n✅ Paletas guardadas en data/palette-batch5.json");
}

main().catch(console.error);
