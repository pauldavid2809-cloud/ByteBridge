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
  { slug: "sybarisrest", handle: "sybarisrest", name: "Sybaris Restaurant", url: "https://www.instagram.com/sybarisrest/" },
  { slug: "srtruhan", handle: "srtruhan", name: "Sr. Truhán", url: "https://www.instagram.com/srtruhan/" },
  { slug: "crispys_ve", handle: "crispys.ve", name: "Crispy's", url: "https://www.instagram.com/crispys.ve/" },
  { slug: "enigmacafe_sc", handle: "enigmacafe.sc", name: "Enigma Café", url: "https://www.instagram.com/enigmacafe.sc/" },
  { slug: "beaucoffee_sc", handle: "beaucoffee.sc", name: "Beau Coffee", url: "https://www.instagram.com/beaucoffee.sc/" },
  { slug: "bruselas_sc", handle: "bruselas_sc", name: "Bruselas San Cristóbal", url: "https://www.instagram.com/bruselas_sc/" },
  { slug: "momentossc", handle: "momentossc_", name: "Momentos San Cristóbal", url: "https://www.instagram.com/momentossc_/" },
  { slug: "fratellopizzas_sc", handle: "fratellopizzas.sc", name: "Fratello Pizzas", url: "https://www.instagram.com/fratellopizzas.sc/" },
  { slug: "kala_cafesc", handle: "kala.cafesc", name: "Kala Café", url: "https://www.instagram.com/kala.cafesc/" },
  { slug: "pa_picar_mas", handle: "pa_picar.mas", name: "Pa' Picar Más", url: "https://www.instagram.com/pa_picar.mas/" }
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

  console.log("Iniciando Edge headless para descargar fotos y logos de Día 7 (10 cuentas)...");
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

        // Buscar posts para cover
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
  console.log("\n🎉 Descarga de activos finalizada.");
}

main().catch(console.error);
