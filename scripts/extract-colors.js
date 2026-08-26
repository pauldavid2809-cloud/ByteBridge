const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

async function main() {
  const marcasDir = path.join(__dirname, "..", "public", "marcas");
  const marcasDataPath = path.join(__dirname, "..", "data", "marcas-instagram.json");
  const marcas = JSON.parse(fs.readFileSync(marcasDataPath, "utf-8"));

  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();

  const brandProfiles = [];

  for (const marca of marcas) {
    const imageFilePath = path.join(marcasDir, `${marca.slug}.jpg`);
    if (!fs.existsSync(imageFilePath)) continue;

    const base64Image = fs.readFileSync(imageFilePath).toString("base64");
    const dataUrl = `data:image/jpeg;base64,${base64Image}`;

    const colorAnalysis = await page.evaluate(async (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = 100;
          canvas.height = 100;
          ctx.drawImage(img, 0, 0, 100, 100);
          const data = ctx.getImageData(0, 0, 100, 100).data;

          const colorCounts = {};
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3];
            if (a < 128) continue; // ignorar transparente

            // cuantización a grupos de 16
            const qr = Math.round(r / 16) * 16;
            const qg = Math.round(g / 16) * 16;
            const qb = Math.round(b / 16) * 16;
            const key = `${qr},${qg},${qb}`;
            colorCounts[key] = (colorCounts[key] || 0) + 1;
          }

          const sortedColors = Object.entries(colorCounts)
            .sort((a, b) => b[1] - a[1])
            .map(([rgbStr]) => {
              const [r, g, b] = rgbStr.split(",").map(Number);
              const hex = "#" + [r, g, b].map(x => Math.min(255, Math.max(0, x)).toString(16).padStart(2, "0")).join("");
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              return { hex: hex.toUpperCase(), r, g, b, brightness };
            });

          // Filtrar colores no demasiado blancos ni negros para color de marca principal
          const brandColors = sortedColors.filter(c => c.brightness > 30 && c.brightness < 235);
          const primary = brandColors.length > 0 ? brandColors[0].hex : sortedColors[0].hex;
          const secondary = brandColors.length > 1 ? brandColors[1].hex : (sortedColors[1] ? sortedColors[1].hex : "#FFFFFF");
          const darkBg = sortedColors.find(c => c.brightness < 60)?.hex || "#111827";
          const lightBg = sortedColors.find(c => c.brightness > 200)?.hex || "#F9FAFB";

          resolve({
            primary,
            secondary,
            darkBg,
            lightBg,
            topPalette: sortedColors.slice(0, 5).map(c => c.hex)
          });
        };
        img.src = src;
      });
    }, dataUrl);

    // Identificar categoría y sector de cada marca basado en la bio
    let sector = "Restaurante & Bar";
    let concepto = marca.name;
    const desc = (marca.meta?.ogTitle + " " + marca.meta?.bodyText).toLowerCase();

    if (desc.includes("hotel") || desc.includes("piscina") || desc.includes("gimnasio") || desc.includes("club")) {
      sector = "Club, Hotel & Resort";
    } else if (desc.includes("bowling")) {
      sector = "Bowling & Entertainment";
    } else if (desc.includes("juegos de mesa") || desc.includes("drinks & entertainment") || desc.includes("standup")) {
      sector = "Board Games, Drinks & Entertainment";
    } else if (desc.includes("discoteca") || desc.includes("nightlife")) {
      sector = "Restaurante & Nightclub";
    } else if (desc.includes("italiana")) {
      sector = "Alta Cocina Italiana & Gastrobar";
    } else if (desc.includes("mediterráneo")) {
      sector = "Restaurante Mediterráneo";
    } else if (desc.includes("hookah")) {
      sector = "Restobar & Hookah Lounge";
    }

    brandProfiles.push({
      slug: marca.slug,
      handle: marca.handle,
      name: marca.name,
      sector,
      instagramUrl: `https://www.instagram.com/${marca.handle}/`,
      logoPath: `/marcas/${marca.slug}.jpg`,
      colors: colorAnalysis,
      bio: marca.meta?.bodyText ? marca.meta.bodyText.split("\n").filter(Boolean).slice(0, 4).join(" · ") : marca.meta?.ogDesc
    });
  }

  await browser.close();

  const finalConfigPath = path.join(__dirname, "..", "data", "marcas-analizadas.json");
  fs.writeFileSync(finalConfigPath, JSON.stringify(brandProfiles, null, 2), "utf-8");
  console.log(`\nAnálisis cromático y de perfiles guardado en ${finalConfigPath}`);
}

main().catch(console.error);
