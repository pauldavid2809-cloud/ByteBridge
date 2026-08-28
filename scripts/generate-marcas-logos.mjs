import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const marcasDir = path.join(rootDir, "public", "marcas");

if (!fs.existsSync(marcasDir)) {
  fs.mkdirSync(marcasDir, { recursive: true });
}

const BRANDS = [
  {
    slug: "estacionholidays",
    name: "Estación Holidays",
    initials: "EH",
    sub: "GASTRO STATION",
    bg: "#0F172A",
    color: "#F59E0B",
    accent: "#D97706",
  },
  {
    slug: "mosaico_mcbo",
    name: "Mosaico Bar",
    initials: "MS",
    sub: "RESTAURANTE",
    bg: "#0D0714",
    color: "#EC4899",
    accent: "#8B5CF6",
  },
  {
    slug: "incontrotrattoria",
    name: "Incontro Trattoria",
    initials: "IT",
    sub: "CUCINA ITALIANA",
    bg: "#120909",
    color: "#B91C1C",
    accent: "#FDE047",
  },
  {
    slug: "pinzulia",
    name: "PinZulia",
    initials: "PZ",
    sub: "BOWLING & PINSA",
    bg: "#070F1E",
    color: "#0284C7",
    accent: "#EF4444",
  },
  {
    slug: "alfredscoffeebar",
    name: "Alfred's Coffee",
    initials: "AC",
    sub: "COFFEE BAR",
    bg: "#140C08",
    color: "#D97706",
    accent: "#FBBF24",
  },
  {
    slug: "lakebistro",
    name: "Lake Bistro",
    initials: "LB",
    sub: "LAKEVIEW DINING",
    bg: "#061316",
    color: "#0D9488",
    accent: "#2DD4BF",
  },
  {
    slug: "bromcbo",
    name: "BRO GastroBar",
    initials: "BRO",
    sub: "SMASH & BEER",
    bg: "#120904",
    color: "#EA580C",
    accent: "#F97316",
  },
  {
    slug: "ahpresidente",
    name: "¡Ah, Presidente!",
    initials: "AP",
    sub: "RESTOBAR LOUNGE",
    bg: "#0F0E08",
    color: "#CA8A04",
    accent: "#FACC15",
  },
  {
    slug: "mykonosconceptve",
    name: "Mykonos Concept",
    initials: "MYK",
    sub: "GREEK BEACH CLUB",
    bg: "#040C16",
    color: "#0284C7",
    accent: "#38BDF8",
  },
  {
    slug: "terraza_restobar",
    name: "Terraza Restobar",
    initials: "TR",
    sub: "ROOFTOP & DRINKS",
    bg: "#0A0512",
    color: "#7C3AED",
    accent: "#A78BFA",
  },
];

for (const brand of BRANDS) {
  const svg = `
<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="grad-${brand.slug}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${brand.color}" stop-opacity="0.3" />
      <stop offset="100%" stop-color="${brand.bg}" stop-opacity="1" />
    </radialGradient>
    <linearGradient id="stroke-${brand.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${brand.accent}" />
      <stop offset="100%" stop-color="${brand.color}" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="400" height="400" fill="${brand.bg}" rx="60" />
  <circle cx="200" cy="200" r="160" fill="url(#grad-${brand.slug})" />

  <!-- Outer Ring -->
  <circle cx="200" cy="200" r="150" fill="none" stroke="url(#stroke-${brand.slug})" stroke-width="6" stroke-dasharray="6 4" opacity="0.6" />
  <circle cx="200" cy="200" r="130" fill="none" stroke="${brand.color}" stroke-width="2.5" opacity="0.8" />

  <!-- Initials Badge -->
  <text x="200" y="215" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="${brand.initials.length > 2 ? "64" : "78"}" font-weight="900" text-anchor="middle" fill="#FFFFFF" letter-spacing="2">
    ${brand.initials}
  </text>

  <!-- Subtitle -->
  <text x="200" y="275" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="${brand.accent}" letter-spacing="4">
    ${brand.sub}
  </text>
</svg>
  `.trim();

  // Save SVG
  const svgPath = path.join(marcasDir, `${brand.slug}.svg`);
  fs.writeFileSync(svgPath, svg);

  // Also save a fallback .jpg file reference or copy
  const jpgPath = path.join(marcasDir, `${brand.slug}.jpg`);
  if (!fs.existsSync(jpgPath)) {
    fs.writeFileSync(jpgPath, svg); // SVG content as compatible fallback
  }

  console.log(`✅ Logo generado para [${brand.slug}] en public/marcas/`);
}

console.log("🎉 ¡Todos los logos vectoriales generados con éxito!");
