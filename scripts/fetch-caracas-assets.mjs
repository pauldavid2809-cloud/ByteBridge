import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, "..", "public", "marcas");

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const businesses = [
  { slug: "ilduomodeisapori", handle: "ilduomodeisapori" },
  { slug: "urrutia_rest", handle: "urrutia_rest" },
  { slug: "restaurantsanpietro", handle: "restaurantsanpietro" },
  { slug: "corderoccs", handle: "corderoccs" },
  { slug: "casacanela_ve", handle: "casacanela.ve" },
  { slug: "modoccs", handle: "modoccs" },
  { slug: "lacastanuelave", handle: "lacastanuelave" },
  { slug: "casapuglia_ve", handle: "casapuglia.ve" },
  { slug: "miso_ccs", handle: "miso_ccs" },
  { slug: "humboldtrestaurant", handle: "humboldtrestaurant" }
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
      file.on("finish", () => file.close(resolve));
    }).on("error", (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

// Fallback high-res gourmet covers from Unsplash
const fallbackCovers = {
  ilduomodeisapori: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1200&q=80", // Italian pasta fine dining
  urrutia_rest: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=1200&q=80", // Spanish seafood
  restaurantsanpietro: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80", // Italian restaurant terrace
  corderoccs: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80", // Fine dining lamb / steak
  casacanela_ve: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80", // Bakery croissant specialty coffee
  modoccs: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80", // Vibrant gastronomic complex
  lacastanuelave: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1200&q=80", // Paella & Spanish wine
  casapuglia_ve: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=1200&q=80", // Trattoria Italian stone oven
  miso_ccs: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200&q=80", // Luxury sushi & rooftop
  humboldtrestaurant: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80" // High altitude scenic restaurant
};

const fallbackLogos = {
  ilduomodeisapori: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80",
  urrutia_rest: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=400&q=80",
  restaurantsanpietro: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80",
  corderoccs: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
  casacanela_ve: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
  modoccs: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&q=80",
  lacastanuelave: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  casapuglia_ve: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=400&q=80",
  miso_ccs: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&q=80",
  humboldtrestaurant: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&q=80"
};

async function main() {
  console.log("Descargando portadas y logos HD para los 10 restaurantes de Caracas...");
  
  for (const b of businesses) {
    const coverPath = path.join(outputDir, `${b.slug}-cover.jpg`);
    const logoPath = path.join(outputDir, `${b.slug}.jpg`);

    if (!fs.existsSync(coverPath)) {
      try {
        await downloadFile(fallbackCovers[b.slug], coverPath);
        console.log(`✅ Portada descargada: ${b.slug}-cover.jpg`);
      } catch (err) {
        console.error(`❌ Error en portada ${b.slug}:`, err.message);
      }
    }

    if (!fs.existsSync(logoPath)) {
      try {
        await downloadFile(fallbackLogos[b.slug], logoPath);
        console.log(`✅ Logo descargado: ${b.slug}.jpg`);
      } catch (err) {
        console.error(`❌ Error en logo ${b.slug}:`, err.message);
      }
    }
  }

  console.log("🏁 Descarga completada.");
}

main().catch(console.error);
