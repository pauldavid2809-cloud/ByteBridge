const puppeteer = require("puppeteer-core");
const path = require("path");
const fs = require("fs");

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const projects = [
  {
    slug: "canon-ia",
    url: "https://canon-ia.vercel.app/",
  },
  {
    slug: "pau-cookies",
    url: "https://pau-cookies.vercel.app/",
  },
  {
    slug: "psicoconsulta-online",
    url: "https://psiccarmen-jordan.vercel.app/",
  },
  {
    slug: "taqueria-digital",
    url: "https://la-unica-taqueria.vercel.app/",
  },
  {
    slug: "quiniela-mundial-2026",
    url: "https://quiniela-mundial-sand.vercel.app/",
  },
];

async function main() {
  const outputDir = path.join(__dirname, "..", "public", "proyectos");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log("Iniciando navegador Edge headless...");
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--window-size=1280,800",
    ],
  });

  for (const project of projects) {
    const outputPath = path.join(outputDir, `${project.slug}.png`);
    console.log(`Capturando ${project.slug} desde ${project.url}...`);
    try {
      const page = await browser.newPage();
      await page.setViewport({
        width: 1280,
        height: 800,
        deviceScaleFactor: 2,
      });

      await page.goto(project.url, {
        waitUntil: ["domcontentloaded", "networkidle2"],
        timeout: 30000,
      });

      // Esperar 2.5 segundos para que carguen fuentes, estilos y microanimaciones
      await new Promise((r) => setTimeout(r, 2500));

      await page.screenshot({
        path: outputPath,
        type: "png",
      });

      console.log(`✓ Guardado con éxito: ${outputPath}`);
      await page.close();
    } catch (err) {
      console.error(`✗ Error capturando ${project.slug}:`, err.message);
    }
  }

  await browser.close();
  console.log("¡Todas las capturas han sido procesadas!");
}

main().catch(console.error);
