import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const client = url.startsWith("https") ? https : http;
    client.get(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function main() {
  const outputDir = path.join(__dirname, "..", "public", "marcas");
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-gpu", "--window-size=1280,1000"]
  });

  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36");

  console.log("Navegando a https://www.instagram.com/dystopiabowling/...");
  await page.goto("https://www.instagram.com/dystopiabowling/", { waitUntil: "domcontentloaded", timeout: 35000 });
  await new Promise((r) => setTimeout(r, 4000));

  const mediaData = await page.evaluate(() => {
    let avatarUrl = null;
    let coverUrl = null;

    const imgs = Array.from(document.querySelectorAll("img"));
    for (const img of imgs) {
      const alt = img.getAttribute("alt") || "";
      const src = img.getAttribute("src") || "";
      if ((alt.toLowerCase().includes("perfil") || alt.toLowerCase().includes("profile")) && src.startsWith("http")) {
        avatarUrl = src;
        break;
      }
    }

    if (!avatarUrl) {
      const headerImgs = Array.from(document.querySelectorAll("header img"));
      if (headerImgs.length > 0) avatarUrl = headerImgs[0].src;
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

  console.log("Media data:", mediaData);

  const logoDest = path.join(outputDir, "dystopiabowling.jpg");
  const coverDest = path.join(outputDir, "dystopiabowling-cover.jpg");

  if (mediaData.avatarUrl) {
    await downloadFile(mediaData.avatarUrl, logoDest);
    console.log("✅ Dystopia Logo guardado en:", logoDest);
  }
  if (mediaData.coverUrl) {
    await downloadFile(mediaData.coverUrl, coverDest);
    console.log("✅ Dystopia Cover guardado en:", coverDest);
  } else if (mediaData.avatarUrl) {
    await downloadFile(mediaData.avatarUrl, coverDest);
    console.log("✅ Dystopia Cover alternativo guardado.");
  }

  await browser.close();
}

main().catch(console.error);
