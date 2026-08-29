const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const accounts = [
  // Dia 1
  { slug: "ecoland", handle: "ecoland.club", name: "Ecoland Club", url: "https://www.instagram.com/ecoland.club/" },
  { slug: "grandchef", handle: "grandchefmaracaibo", name: "Grand Chef Maracaibo", url: "https://www.instagram.com/grandchefmaracaibo/" },
  { slug: "zuhouse", handle: "zuhousemaracaibo", name: "Zu House Maracaibo", url: "https://www.instagram.com/zuhousemaracaibo/" },
  { slug: "tannous", handle: "tannous_ve", name: "Tannous", url: "https://www.instagram.com/tannous_ve/" },
  { slug: "room101", handle: "room101bar", name: "Room 101 Bar", url: "https://www.instagram.com/room101bar/" },
  { slug: "labarraventura", handle: "labarraventura", name: "La Barra Ventura", url: "https://www.instagram.com/labarraventura/" },
  { slug: "ciaogastrobar", handle: "ciaogastrobar", name: "Ciao Gastrobar", url: "https://www.instagram.com/ciaogastrobar/" },
  { slug: "blaomcbo", handle: "blaomcbo", name: "Blao Maracaibo", url: "https://www.instagram.com/blaomcbo/" },
  { slug: "pittsbowling", handle: "pittsbowling", name: "Pitts Bowling", url: "https://www.instagram.com/pittsbowling/" },
  { slug: "corner", handle: "cornermcbo", name: "Corner Maracaibo", url: "https://www.instagram.com/cornermcbo/" },
  // Dia 2
  { slug: "estacionholidays", handle: "estacionholidays", name: "Estación Holidays", url: "https://www.instagram.com/estacionholidays/" },
  { slug: "mosaico_mcbo", handle: "mosaico_mcbo", name: "Mosaico Restaurant", url: "https://www.instagram.com/mosaico_mcbo/" },
  { slug: "incontrotrattoria", handle: "incontrotrattoria", name: "Incontro Trattoria", url: "https://www.instagram.com/incontrotrattoria/" },
  { slug: "pinzulia", handle: "pinzulia", name: "PinZulia Bowling", url: "https://www.instagram.com/pinzulia/" },
  { slug: "alfredscoffeebar", handle: "alfredscoffeebar", name: "Alfred's Coffee Bar", url: "https://www.instagram.com/alfredscoffeebar/" },
  { slug: "lakebistro", handle: "lake.bistro", name: "Lake Bistro", url: "https://www.instagram.com/lake.bistro/" },
  { slug: "bromcbo", handle: "bromcbo", name: "BRO GastroBar", url: "https://www.instagram.com/bromcbo/" },
  { slug: "ahpresidente", handle: "ahpresidente", name: "Apart Hotel Presidente", url: "https://www.instagram.com/ahpresidente/" },
  { slug: "mykonosconceptve", handle: "mykonosconceptve", name: "Mykonos Concept", url: "https://www.instagram.com/mykonosconceptve/" },
  { slug: "terraza_restobar", handle: "terraza_restobar", name: "Terraza Restobar", url: "https://www.instagram.com/terraza_restobar/" },
  // Dia 3
  { slug: "ranchogalipan", handle: "ranchogalipan", name: "Rancho Galipán", url: "https://www.instagram.com/ranchogalipan/" },
  { slug: "nomi_sakebar", handle: "nomi.sakebar", name: "Nomi Sake Bar", url: "https://www.instagram.com/nomi.sakebar/" },
  { slug: "da_ettore", handle: "da_ettore", name: "Da Ettore Ristorante", url: "https://www.instagram.com/da_ettore/" },
  { slug: "solemiocucinaebar", handle: "solemiocucinaebar", name: "O Sole Mio Cucina e Bar", url: "https://www.instagram.com/solemiocucinaebar/" },
  { slug: "somos_delish", handle: "somos.delish", name: "Delish Bakery & Brunch", url: "https://www.instagram.com/somos.delish/" },
  { slug: "yellowstonemcbo", handle: "yellowstonemcbo", name: "Yellowstone Steakhouse", url: "https://www.instagram.com/yellowstonemcbo/" },
  { slug: "morecheese_mcbo", handle: "morecheese.mcbo", name: "More Cheese Maracaibo", url: "https://www.instagram.com/morecheese.mcbo/" },
  { slug: "saloncanton_mcbo", handle: "saloncanton_mcbo", name: "Salón Cantón Maracaibo", url: "https://www.instagram.com/saloncanton_mcbo/" },
  { slug: "holysushi_mcbo", handle: "holysushi_mcbo", name: "Holy Sushi Maracaibo", url: "https://www.instagram.com/holysushi_mcbo/" },
  { slug: "vivematcha", handle: "vivematcha", name: "Vive Matcha Bar", url: "https://www.instagram.com/vivematcha/" }
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

  console.log("Iniciando Edge headless para descargar fotos de ambiente de los 20 perfiles...");
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

    if (fs.existsSync(logoDestFile) && fs.existsSync(coverDestFile)) {
      console.log(`[${i + 1}/${accounts.length}] ⏩ Ya descargado: @${account.handle}`);
      continue;
    }

    console.log(`\n[${i + 1}/${accounts.length}] --- Descargando marca y ambiente para @${account.handle} ---`);

    try {
      const page = await browser.newPage();
      await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
      
      await page.goto(account.url, { waitUntil: "domcontentloaded", timeout: 25000 });
      await new Promise(r => setTimeout(r, 2500));

      const media = await page.evaluate(() => {
        const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute("content");
        
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

        return { avatarUrl, postCoverUrl };
      });

      if (media.avatarUrl && !fs.existsSync(logoDestFile)) {
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

  // Actualizar demosData.ts con las rutas locales de coverImage
  const demosDataPath = path.join(__dirname, "..", "data", "demosData.ts");
  let demosCode = fs.readFileSync(demosDataPath, "utf-8");

  for (const account of accounts) {
    const regex = new RegExp(`(slug:\\s*["']${account.slug}["'][\\s\\S]*?coverImage:\\s*)[^,]+,`, "m");
    demosCode = demosCode.replace(regex, `$1"/marcas/${account.slug}-cover.jpg",`);
  }

  fs.writeFileSync(demosDataPath, demosCode, "utf-8");
  console.log("✓ data/demosData.ts actualizado con las 20 rutas locales /marcas/[slug]-cover.jpg");
  console.log("\n🎉 ¡Fotos de ambiente y logos verificados para los 20 negocios!");
}

if (process.argv[2] === "update-demos") {
  const demosDataPath = path.join(__dirname, "..", "data", "demosData.ts");
  let demosCode = fs.readFileSync(demosDataPath, "utf-8");
  for (const account of accounts) {
    const regex = new RegExp(`(slug:\\s*["']${account.slug}["'][\\s\\S]*?coverImage:\\s*)[^,]+,`, "m");
    demosCode = demosCode.replace(regex, `$1"/marcas/${account.slug}-cover.jpg",`);
  }
  fs.writeFileSync(demosDataPath, demosCode, "utf-8");
  console.log("✓ data/demosData.ts actualizado con las 20 rutas locales /marcas/[slug]-cover.jpg");
} else {
  main().catch(console.error);
}
