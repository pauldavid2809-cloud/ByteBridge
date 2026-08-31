import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const marcasDir = path.join(publicDir, "marcas");

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

// 1. Symbol Only SVG (Transparent)
const symbolSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 232" fill="none">
  <defs>
    <linearGradient id="bbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#36D698"/>
      <stop offset="50%" stop-color="#2EBD85"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
  </defs>
  <path d="M46 208 V118 Q46 46 118 46 H330 Q402 46 402 118 V208" stroke="url(#bbGrad)" stroke-width="46" stroke-linecap="round" fill="none"/>
</svg>
`;

// 2. Symbol App Icon Square SVG (Dark background)
const symbolDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <rect width="512" height="512" rx="112" fill="#0A0E0D"/>
  <defs>
    <linearGradient id="bbGradSquare" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#36D698"/>
      <stop offset="50%" stop-color="#2EBD85"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <path d="M120 340 V240 Q120 160 200 160 H312 Q392 160 392 240 V340" stroke="url(#bbGradSquare)" stroke-width="48" stroke-linecap="round" fill="none" filter="url(#glow)"/>
</svg>
`;

// 3. Full Horizontal Logo SVG (Transparent)
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 180" fill="none">
  <defs>
    <linearGradient id="bbGradH" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#36D698"/>
      <stop offset="50%" stop-color="#2EBD85"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
  </defs>
  <g transform="translate(10, 20) scale(0.6)">
    <path d="M46 208 V118 Q46 46 118 46 H330 Q402 46 402 118 V208" stroke="url(#bbGradH)" stroke-width="46" stroke-linecap="round" fill="none"/>
  </g>
  <text x="300" y="116" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="800" font-size="82" fill="#FFFFFF" letter-spacing="-2">
    byte<tspan fill="#2EBD85">/</tspan>bridge
  </text>
</svg>
`;

// 4. Full Dark Theme Banner / Card SVG (Dark #0A0E0D background)
const logoDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 400" fill="none">
  <rect width="1000" height="400" rx="32" fill="#0A0E0D"/>
  <defs>
    <linearGradient id="bbGradDarkCard" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#36D698"/>
      <stop offset="50%" stop-color="#2EBD85"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
    <radialGradient id="neonAmbient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2EBD85" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0A0E0D" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1000" height="400" rx="32" fill="url(#neonAmbient)"/>
  <g transform="translate(100, 110) scale(0.78)">
    <path d="M46 208 V118 Q46 46 118 46 H330 Q402 46 402 118 V208" stroke="url(#bbGradDarkCard)" stroke-width="46" stroke-linecap="round" fill="none"/>
  </g>
  <text x="470" y="215" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="800" font-size="92" fill="#FFFFFF" letter-spacing="-3">
    byte<tspan fill="#2EBD85">/</tspan>bridge
  </text>
  <text x="472" y="260" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="500" font-size="26" fill="#9CA3AF" letter-spacing="1">
    WEBS Y SISTEMAS A MEDIDA
  </text>
</svg>
`;

async function main() {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  if (!fs.existsSync(marcasDir)) {
    fs.mkdirSync(marcasDir, { recursive: true });
  }

  // Write SVG files
  fs.writeFileSync(path.join(publicDir, "logo.svg"), logoSvg, "utf8");
  fs.writeFileSync(path.join(publicDir, "bytebridge-logo.svg"), logoSvg, "utf8");
  fs.writeFileSync(path.join(publicDir, "bytebridge-symbol.svg"), symbolSvg, "utf8");
  fs.writeFileSync(path.join(publicDir, "bytebridge-symbol-dark.svg"), symbolDarkSvg, "utf8");
  fs.writeFileSync(path.join(publicDir, "bytebridge-banner.svg"), logoDarkSvg, "utf8");
  fs.writeFileSync(path.join(marcasDir, "bytebridge.svg"), symbolDarkSvg, "utf8");

  console.log("✅ Archivos SVG generados con éxito en public/ y public/marcas/");

  console.log("Iniciando renderizador headless con Edge para generar PNGs y JPGs en alta resolución...");
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"]
  });

  // Helper function to render HTML/SVG to PNG
  async function renderToImage(svgContent, outputPath, width, height, isJpg = false, bg = "transparent") {
    const p = await browser.newPage();
    await p.setViewport({ width, height, deviceScaleFactor: 2 });
    const html = `<!DOCTYPE html>
    <html>
      <head>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            width: ${width}px;
            height: ${height}px;
            background: ${bg};
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }
          svg {
            width: 100%;
            height: 100%;
          }
        </style>
      </head>
      <body>
        ${svgContent}
      </body>
    </html>`;

    await p.setContent(html, { waitUntil: "domcontentloaded", timeout: 10000 });
    
    if (isJpg) {
      await p.screenshot({
        path: outputPath,
        type: "jpeg",
        quality: 95
      });
    } else {
      await p.screenshot({
        path: outputPath,
        type: "png",
        omitBackground: bg === "transparent"
      });
    }
    await p.close();
    console.log(`📸 Renderizado: ${outputPath} (${width}x${height})`);
  }

  // 1. Horizontal Logo PNG (Transparent)
  await renderToImage(logoSvg, path.join(publicDir, "logo.png"), 1640, 360, false, "transparent");
  await renderToImage(logoSvg, path.join(publicDir, "bytebridge-logo.png"), 1640, 360, false, "transparent");

  // 2. Square Symbol Icon PNG (Transparent)
  await renderToImage(symbolSvg, path.join(publicDir, "bytebridge-symbol.png"), 896, 464, false, "transparent");

  // 3. Square Dark App Icon PNG
  await renderToImage(symbolDarkSvg, path.join(publicDir, "bytebridge-icon.png"), 1024, 1024, false, "#0A0E0D");

  // 4. Dark Banner Card PNG
  await renderToImage(logoDarkSvg, path.join(publicDir, "bytebridge-banner.png"), 1200, 480, false, "#0A0E0D");

  // 5. Brand Avatar JPG in public/marcas/bytebridge.jpg (for catalog / avatar use)
  await renderToImage(symbolDarkSvg, path.join(marcasDir, "bytebridge.jpg"), 1024, 1024, true, "#0A0E0D");

  // 6. Cover image in public/marcas/bytebridge-cover.jpg
  const coverSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" fill="none">
    <rect width="1080" height="1080" fill="#0A0E0D"/>
    <defs>
      <radialGradient id="ambient" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#2EBD85" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#0A0E0D" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="bbCoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#36D698"/>
        <stop offset="50%" stop-color="#2EBD85"/>
        <stop offset="100%" stop-color="#10B981"/>
      </linearGradient>
    </defs>
    <rect width="1080" height="1080" fill="url(#ambient)"/>
    <g transform="translate(316, 260) scale(1)">
      <path d="M46 208 V118 Q46 46 118 46 H330 Q402 46 402 118 V208" stroke="url(#bbCoverGrad)" stroke-width="46" stroke-linecap="round" fill="none"/>
    </g>
    <text x="540" y="620" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="800" font-size="96" fill="#FFFFFF" letter-spacing="-3">
      byte<tspan fill="#2EBD85">/</tspan>bridge
    </text>
    <text x="540" y="700" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="600" font-size="34" fill="#2EBD85" letter-spacing="2">
      WEBS &amp; SISTEMAS A MEDIDA
    </text>
    <text x="540" y="760" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="400" font-size="24" fill="#9CA3AF">
      Automatización · Pases QR · Menús Digitales · Portales Web
    </text>
  </svg>`;
  await renderToImage(coverSvg, path.join(marcasDir, "bytebridge-cover.jpg"), 1080, 1080, true, "#0A0E0D");

  await browser.close();
  console.log("\n🎉 ¡Todos los logos e imágenes de marca de ByteBridge han sido generados con éxito en public/!");
}

main().catch((err) => {
  console.error("Error generando logos de ByteBridge:", err);
  process.exit(1);
});
