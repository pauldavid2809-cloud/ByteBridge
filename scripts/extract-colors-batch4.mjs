import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const accounts = [
  { slug: "saukorestaurant", name: "Sauko Restaurant" },
  { slug: "genovia_val", name: "Genovia Valencia" },
  { slug: "yakitoribarccs", name: "Yakitori Bar Caracas" },
  { slug: "santogrillccs", name: "Santo Grill Caracas" },
  { slug: "kiuboletexmexfood", name: "Kiúbole Tex-Mex Food" },
  { slug: "lapagodaccs", name: "La Pagoda Caracas" },
  { slug: "tulum_bqto", name: "Tulum Barquisimeto" },
  { slug: "handroll_ve", name: "Hand Roll Sushi VE" },
  { slug: "artica_dunas", name: "Ártica Dunas" },
  { slug: "mrcrunch_ve", name: "Mr Crunch VE" }
];

async function main() {
  const marcasDir = path.join(__dirname, "..", "public", "marcas");

  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  const results = {};

  for (const account of accounts) {
    const imageFilePath = path.join(marcasDir, `${account.slug}.jpg`);
    if (!fs.existsSync(imageFilePath)) continue;

    const base64Image = fs.readFileSync(imageFilePath).toString("base64");
    const dataUrl = `data:image/jpeg;base64,${base64Image}`;

    const colorAnalysis = await page.evaluate(async (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = 100;
          canvas.height = 100;
          ctx.drawImage(img, 0, 0, 100, 100);
          const data = ctx.getImageData(0, 0, 100, 100).data;

          const colorCounts = {};
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3];
            if (a < 128) continue;

            const qr = Math.round(r / 16) * 16;
            const qg = Math.round(g / 16) * 16;
            const qb = Math.round(b / 16) * 16;
            const key = `${qr},${qg},${qb}`;
            colorCounts[key] = (colorCounts[key] || 0) + 1;
          }

          const sortedColors = Object.entries(colorCounts)
            .sort((a, b) => b[1] - a[1])
            .map(([rgbStr]) => {
              const [r, g, b] = rgbStr.split(",").map(Number);
              const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
              return { hex, r, g, b };
            });

          resolve(sortedColors.slice(0, 10));
        };
        img.src = src;
      });
    }, dataUrl);

    results[account.slug] = colorAnalysis;
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
}

main().catch(console.error);
