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
  { slug: "rutarestaurante", handle: "rutarestaurante", name: "Ruta Restaurante", url: "https://www.instagram.com/rutarestaurante/" },
  { slug: "vistabarccs", handle: "vistabarccs", name: "Vista Bar Caracas", url: "https://www.instagram.com/vistabarccs/" },
  { slug: "vizio_ristorante", handle: "vizio_ristorante", name: "Vizio Ristorante", url: "https://www.instagram.com/vizio_ristorante/" },
  { slug: "crepusculobistro", handle: "crepusculobistro", name: "Crepúsculo Bistro", url: "https://www.instagram.com/crepusculobistro/" },
  { slug: "humosbistro_bar", handle: "humosbistro_bar", name: "Humos Bistro & Bar", url: "https://www.instagram.com/humosbistro_bar/" },
  { slug: "lafelicittave", handle: "lafelicittave", name: "La Felicitta", url: "https://www.instagram.com/lafelicittave/" },
  { slug: "aprile_ccs", handle: "aprile_ccs", name: "Aprile Caracas", url: "https://www.instagram.com/aprile_ccs/" },
  { slug: "rutac4_", handle: "rutac4_", name: "Ruta C4", url: "https://www.instagram.com/rutac4_/" },
  { slug: "tepuy_360", handle: "tepuy.360", name: "Tepuy 360", url: "https://www.instagram.com/tepuy.360/" }
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

  console.log("Iniciando Edge headless para descargar fotos y logos de Día 8 (9 cuentas)...");
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

        // Buscar cover en posts
        const postImgs = imgs.filter(
          (img) => img.src.startsWith("http") && !img.src.includes("profile") && img.width > 200
        );
        if (postImgs.length > 0) {
          coverUrl = postImgs[0].src;
        }

        return { avatarUrl, coverUrl };
      });

      if (mediaData.avatarUrl) {
        console.log(`  📸 Descargando avatar: ${mediaData.avatarUrl.slice(0, 60)}...`);
        await downloadFile(mediaData.avatarUrl, logoDest);
        console.log(`  ✅ Logo guardado en: ${logoDest}`);
      } else {
        console.log(`  ⚠️ No se encontró avatar directo para @${acc.handle}`);
      }

      if (mediaData.coverUrl) {
        console.log(`  🖼️ Descargando cover: ${mediaData.coverUrl.slice(0, 60)}...`);
        await downloadFile(mediaData.coverUrl, coverDest);
        console.log(`  ✅ Cover guardado en: ${coverDest}`);
      } else {
        console.log(`  ⚠️ No se encontró cover directo para @${acc.handle}`);
      }
    } catch (err) {
      console.error(`  ❌ Error al procesar @${acc.handle}: ${err.message}`);
    }
  }

  await browser.close();
  console.log("\n🎉 Descarga de activos Día 8 finalizada.");
}

main().catch(console.error);
