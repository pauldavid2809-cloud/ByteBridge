import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const demosPath = path.join(__dirname, "..", "data", "demosData.ts");

let content = fs.readFileSync(demosPath, "utf-8");

// Replace managerKpis that miss activeReservations
const kpisMap = {
  sybarisrest: 14,
  srtruhan: 12,
  crispys_ve: 8,
  enigmacafe_sc: 10,
  beaucoffee_sc: 11,
  bruselas_sc: 15,
  momentossc: 9,
  fratellopizzas_sc: 18,
  kala_cafesc: 7,
  pa_picar_mas: 16
};

for (const [slug, count] of Object.entries(kpisMap)) {
  const slugIndex = content.indexOf(`"slug": "${slug}"`);
  if (slugIndex === -1) continue;
  const kpiIndex = content.indexOf('"managerKpis": {', slugIndex);
  if (kpiIndex === -1) continue;

  // Insert activeReservations right after "managerKpis": {
  const target = '"managerKpis": {\n';
  const replacement = `"managerKpis": {\n      "activeReservations": ${count},\n`;
  
  // Only replace the specific occurrence after slugIndex
  const beforeKpi = content.slice(0, kpiIndex);
  const fromKpi = content.slice(kpiIndex);
  const updatedFromKpi = fromKpi.replace(target, replacement);
  content = beforeKpi + updatedFromKpi;
}

fs.writeFileSync(demosPath, content, "utf-8");
console.log("✅ activeReservations agregado a todas las demos de Día 7");
