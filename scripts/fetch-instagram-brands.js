const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const accounts = [
  { slug: "ecoland", handle: "ecoland.club", name: "Ecoland Club", url: "https://www.instagram.com/ecoland.club/" },
  { slug: "grandchef", handle: "grandchefmaracaibo", name: "Grand Chef Maracaibo", url: "https://www.instagram.com/grandchefmaracaibo/" },
  { slug: "zuhouse", handle: "zuhousemaracaibo", name: "Zu House Maracaibo", url: "https://www.instagram.com/zuhousemaracaibo/" },
  { slug: "tannous", handle: "tannous_ve", name: "Tannous", url: "https://www.instagram.com/tannous_ve/" },
  { slug: "room101", handle: "room101bar", name: "Room 101 Bar", url: "https://www.instagram.com/room101bar/" },
  { slug: "labarraventura", handle: "labarraventura", name: "La Barra Ventura", url: "https://www.instagram.com/labarraventura/" },
  { slug: "ciaogastrobar", handle: "ciaogastrobar", name: "Ciao Gastrobar", url: "https://www.instagram.com/ciaogastrobar/" },
  { slug: "blaomcbo", handle: "blaomcbo", name: "Blao Maracaibo", url: "https://www.instagram.com/blaomcbo/" },
  { slug: "pittsbowling", handle: "pittsbowling", name: "Pitts Bowling", url: "https://www.instagram.com/pittsbowling/" },
  { slug: "corner", handle: "cornermcbo", name: "Corner Maracaibo", url: "https://www.instagram.com/cornermcbo/" }
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
