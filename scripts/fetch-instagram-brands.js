const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const accounts = [
  { slug: "estacionholidays", handle: "estacionholidays", name: "Estación Holidays", url: "https://www.instagram.com/estacionholidays/" },
  { slug: "mosaico_mcbo", handle: "mosaico_mcbo", name: "Mosaico Restaurant", url: "https://www.instagram.com/mosaico_mcbo/" },
  { slug: "incontrotrattoria", handle: "incontrotrattoria", name: "Incontro Trattoria", url: "https://www.instagram.com/incontrotrattoria/" },
  { slug: "pinzulia", handle: "pinzulia", name: "PinZulia Bowling", url: "https://www.instagram.com/pinzulia/" },
  { slug: "alfredscoffeebar", handle: "alfredscoffeebar", name: "Alfred's Coffee Bar", url: "https://www.instagram.com/alfredscoffeebar/" },
  { slug: "lakebistro", handle: "lake.bistro", name: "Lake Bistro", url: "https://www.instagram.com/lake.bistro/" },
  { slug: "bromcbo", handle: "bromcbo", name: "BRO GastroBar", url: "https://www.instagram.com/bromcbo/" },
  { slug: "ahpresidente", handle: "ahpresidente", name: "Apart Hotel Presidente", url: "https://www.instagram.com/ahpresidente/" },
  { slug: "mykonosconceptve", handle: "mykonosconceptve", name: "Mykonos Concept", url: "https://www.instagram.com/mykonosconceptve/" },
  { slug: "terraza_restobar", handle: "terraza_restobar", name: "Terraza Restobar", url: "https://www.instagram.com/terraza_restobar/" }
];

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const client = url.startsWith("https") ? https : http;
    client.get(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close(resolve);
      });
    }).on("error", (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function main() {
  const outputDir = path.join(__dirname, "..", "public", "marcas");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log("Iniciando Edge headless para inspeccionar los 10 perfiles...");
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--window-size=1280,800"
    ]
  });

  const results = [];

  for (const account of accounts) {
    console.log(`\n--- Analizando @${account.handle} ---`);
    try {
      const page = await browser.newPage();
      await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
      
      await page.goto(account.url, { waitUntil: "domcontentloaded", timeout: 25000 });
      await new Promise(r => setTimeout(r, 2000));

      const meta = await page.evaluate(() => {
        const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute("content");
        const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute("content");
        const ogDesc = document.querySelector('meta[property="og:description"]')?.getAttribute("content");
        const title = document.title;
        const bodyText = document.body ? document.body.innerText.slice(0, 300) : "";

        // Intentar buscar imagen de avatar en DOM
        let avatarUrl = ogImage;
        const imgTags = Array.from(document.querySelectorAll("img"));
        for (const img of imgTags) {
          if (img.alt && (img.alt.includes("profile") || img.alt.includes("perfil") || img.alt.includes("foto"))) {
            avatarUrl = img.src;
            break;
          }
        }

        return { ogImage, ogTitle, ogDesc, title, avatarUrl, bodyText };
      });

      console.log(`Title: ${meta.title || meta.ogTitle}`);
      console.log(`Desc: ${meta.ogDesc || ""}`);
      console.log(`Avatar URL: ${meta.avatarUrl || meta.ogImage || "No encontrada"}`);

      let downloaded = false;
      const targetImage = meta.avatarUrl || meta.ogImage;
      if (targetImage && targetImage.startsWith("http")) {
        const destFile = path.join(outputDir, `${account.slug}.jpg`);
        try {
          await downloadFile(targetImage, destFile);
          console.log(`✓ Imagen guardada en: ${destFile}`);
          downloaded = true;
        } catch (e) {
          console.error(`Error descargando imagen: ${e.message}`);
        }
      }

      results.push({
        slug: account.slug,
        handle: account.handle,
        name: account.name,
        meta,
        downloaded,
        imagePath: downloaded ? `/marcas/${account.slug}.jpg` : null
      });

      await page.close();
    } catch (err) {
      console.error(`Error en @${account.handle}: ${err.message}`);
      results.push({
        slug: account.slug,
        handle: account.handle,
        name: account.name,
        error: err.message
      });
    }
  }

  await browser.close();

  const reportPath = path.join(__dirname, "..", "data", "marcas-instagram.json");
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), "utf-8");
  console.log(`\nResultados guardados en ${reportPath}`);
}

main().catch(console.error);
