import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const accounts = [
  { slug: "lolapopspaleteria", handle: "lolapopspaleteria", name: "Lola Pops Paletería", url: "https://www.instagram.com/lolapopspaleteria/" },
  { slug: "keponke_ve", handle: "keponke.ve", name: "Ke Ponke", url: "https://www.instagram.com/keponke.ve/" },
  { slug: "dolcezza_ve", handle: "dolcezza_ve", name: "Dolcezza Pastelería", url: "https://www.instagram.com/dolcezza_ve/" },
  { slug: "tostaca_ve", handle: "tostaca_", name: "Tostaca Snacks", url: "https://www.instagram.com/tostaca_/" },
  { slug: "elvarfoodandcoffee", handle: "elvarfoodandcoffee", name: "El VAR Food & Coffee", url: "https://www.instagram.com/elvarfoodandcoffee/" },
  { slug: "sweetgiftve", handle: "sweetgiftve", name: "Sweet Gift", url: "https://www.instagram.com/sweetgiftve/" },
  { slug: "olis_burger", handle: "olis_burger", name: "Oli's Burger", url: "https://www.instagram.com/olis_burger/" },
  { slug: "pokemolokai", handle: "pokemolokai", name: "Poke Molokai", url: "https://www.instagram.com/pokemolokai/" },
  { slug: "barako_rest", handle: "barako_rest", name: "Barako Rest & Bar", url: "https://www.instagram.com/barako_rest/" },
  { slug: "portovenerehotel", handle: "portovenerehotel", name: "Hotel Portovenere", url: "https://www.instagram.com/portovenerehotel/" }
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

  console.log("Iniciando Edge headless para descargar fotos y logos de Día 6 (10 cuentas)...");
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--window-size=1280,1000"
    ]
  });

  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  );

  for (const acc of accounts) {
    console.log(`\n🔍 Navegando a perfil: @${acc.handle} (${acc.name})...`);
    const logoDest = path.join(outputDir, `${acc.slug}.jpg`);
    const coverDest = path.join(outputDir, `${acc.slug}-cover.jpg`);

    try {
      await page.goto(acc.url, { waitUntil: "networkidle2", timeout: 25000 });
      await new Promise((r) => setTimeout(r, 2000));

      const mediaData = await page.evaluate(() => {
        let avatarUrl = null;
        let coverUrl = null;

        const imgs = Array.from(document.querySelectorAll("img"));
        for (const img of imgs) {
          const alt = img.getAttribute("alt") || "";
          const src = img.getAttribute("src") || "";
          if (
            (alt.toLowerCase().includes("foto del perfil") ||
              alt.toLowerCase().includes("profile picture") ||
              alt.toLowerCase().includes("profile photo")) &&
            src.startsWith("http")
          ) {
            avatarUrl = src;
            break;
          }
        }

        if (!avatarUrl) {
          const headerImgs = Array.from(document.querySelectorAll("header img"));
          if (headerImgs.length > 0) {
            avatarUrl = headerImgs[0].src;
          }
        }

        for (const img of imgs) {
          const src = img.getAttribute("src") || "";
          const width = img.naturalWidth || img.width || 0;
          if (src.startsWith("http") && src !== avatarUrl && width > 150) {
            coverUrl = src;
            break;
          }
        }

        if (!coverUrl && imgs.length > 1) {
          coverUrl = imgs[1].src;
        }

        return { avatarUrl, coverUrl };
      });

      if (mediaData.avatarUrl) {
        console.log(`  📸 Descargando avatar/logo: ${mediaData.avatarUrl.substring(0, 70)}...`);
        await downloadFile(mediaData.avatarUrl, logoDest);
        console.log(`  ✅ Logo guardado en: public/marcas/${acc.slug}.jpg`);
      } else {
        console.warn(`  ⚠️ No se encontró avatar para @${acc.handle}.`);
      }

      if (mediaData.coverUrl) {
        console.log(`  🖼️ Descargando foto de portada: ${mediaData.coverUrl.substring(0, 70)}...`);
        await downloadFile(mediaData.coverUrl, coverDest);
        console.log(`  ✅ Cover guardado en: public/marcas/${acc.slug}-cover.jpg`);
      } else if (mediaData.avatarUrl) {
        console.log(`  ℹ️ Usando avatar como cover alternativo para @${acc.handle}`);
        await downloadFile(mediaData.avatarUrl, coverDest);
      }
    } catch (err) {
      console.error(`  ❌ Error extrayendo media de @${acc.handle}:`, err.message);
    }
  }

  await browser.close();
  console.log("\n🎉 ¡Proceso de descarga de Día 5 completado!");
}

main().catch(console.error);
