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
  { slug: "saukorestaurant", handle: "saukorestaurant", name: "Sauko Restaurant", url: "https://www.instagram.com/saukorestaurant/" },
  { slug: "genovia_val", handle: "genovia_val", name: "Genovia Valencia", url: "https://www.instagram.com/genovia_val/" },
  { slug: "yakitoribarccs", handle: "yakitoribarccs", name: "Yakitori Bar Caracas", url: "https://www.instagram.com/yakitoribarccs/" },
  { slug: "santogrillccs", handle: "santogrillccs", name: "Santo Grill Caracas", url: "https://www.instagram.com/santogrillccs/" },
  { slug: "kiuboletexmexfood", handle: "kiuboletexmexfood", name: "Kiúbole Tex-Mex Food", url: "https://www.instagram.com/kiuboletexmexfood/" },
  { slug: "lapagodaccs", handle: "lapagodaccs", name: "La Pagoda Caracas", url: "https://www.instagram.com/lapagodaccs/" },
  { slug: "tulum_bqto", handle: "tulum_bqto", name: "Tulum Barquisimeto", url: "https://www.instagram.com/tulum_bqto/" },
  { slug: "handroll_ve", handle: "handroll.ve", name: "Hand Roll Sushi VE", url: "https://www.instagram.com/handroll.ve/" },
  { slug: "artica_dunas", handle: "artica_dunas", name: "Ártica Dunas", url: "https://www.instagram.com/artica_dunas/" },
  { slug: "mrcrunch_ve", handle: "mrcrunch.ve", name: "Mr Crunch VE", url: "https://www.instagram.com/mrcrunch.ve/" }
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

  console.log("Iniciando Edge headless para descargar fotos y logos de Día 4 (10 cuentas)...");
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

  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    const coverDestFile = path.join(outputDir, `${account.slug}-cover.jpg`);
    const logoDestFile = path.join(outputDir, `${account.slug}.jpg`);

    console.log(`\n[${i + 1}/${accounts.length}] --- Descargando marca y cover para @${account.handle} ---`);

    try {
      const page = await browser.newPage();
      await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
      
      await page.goto(account.url, { waitUntil: "domcontentloaded", timeout: 25000 });
      await new Promise(r => setTimeout(r, 2500));

      const media = await page.evaluate(() => {
        const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute("content");
        const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute("content");
        const ogDesc = document.querySelector('meta[property="og:description"]')?.getAttribute("content");
        
        let avatarUrl = ogImage;
        let postCoverUrl = null;

        const imgTags = Array.from(document.querySelectorAll("img"));
        for (const img of imgTags) {
          if (img.alt && (img.alt.includes("profile") || img.alt.includes("perfil") || img.alt.includes("foto"))) {
            avatarUrl = img.src;
          } else if (img.src && !img.src.includes("150x150") && img.src.startsWith("http") && !postCoverUrl) {
            postCoverUrl = img.src;
          }
        }

        if (!postCoverUrl) {
          postCoverUrl = ogImage;
        }

        return { avatarUrl, postCoverUrl, ogTitle, ogDesc };
      });

      console.log("Datos obtenidos:", { ogTitle: media.ogTitle, ogDesc: media.ogDesc, hasAvatar: !!media.avatarUrl, hasCover: !!media.postCoverUrl });

      if (media.avatarUrl) {
        try {
          await downloadFile(media.avatarUrl, logoDestFile);
          console.log(`✓ Logo guardado: ${logoDestFile}`);
        } catch (e) {
          console.error(`Error guardando logo: ${e.message}`);
        }
      }

      if (media.postCoverUrl) {
        try {
          await downloadFile(media.postCoverUrl, coverDestFile);
          console.log(`✓ Foto de ambiente guardada: ${coverDestFile}`);
        } catch (e) {
          console.error(`Error guardando cover: ${e.message}`);
        }
      }

      await page.close();
    } catch (err) {
      console.error(`Error en @${account.handle}: ${err.message}`);
    }
  }

  await browser.close();
  console.log("\n🎉 Descarga de Día 4 concluida!");
}

main().catch(console.error);
