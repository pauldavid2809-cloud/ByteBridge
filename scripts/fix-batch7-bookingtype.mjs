import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const demosPath = path.join(__dirname, "..", "data", "demosData.ts");

let content = fs.readFileSync(demosPath, "utf-8");

const bookingTypeMap = {
  sybarisrest: "reserva-gourmet",
  srtruhan: "comanda-mesa",
  crispys_ve: "delivery-pickup",
  enigmacafe_sc: "brunch-builder",
  beaucoffee_sc: "comanda-mesa",
  bruselas_sc: "waffle-builder",
  momentossc: "evento-regalo",
  fratellopizzas_sc: "delivery-mesa",
  kala_cafesc: "comanda-terraza",
  pa_picar_mas: "catering-fiestas"
};

for (const [slug, bType] of Object.entries(bookingTypeMap)) {
  const slugIndex = content.indexOf(`"slug": "${slug}"`);
  if (slugIndex === -1) continue;
  const bTitleIndex = content.indexOf('"bookingTitle":', slugIndex);
  if (bTitleIndex === -1) continue;

  const target = '"bookingTitle":';
  const replacement = `"bookingType": "${bType}",\n    "bookingTitle":`;
  
  const before = content.slice(0, bTitleIndex);
  const after = content.slice(bTitleIndex);
  const updatedAfter = after.replace(target, replacement);
  content = before + updatedAfter;
}

fs.writeFileSync(demosPath, content, "utf-8");
console.log("✅ bookingType agregado a todas las demos de Día 7");
