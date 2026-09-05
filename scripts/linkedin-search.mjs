#!/usr/bin/env node

/**
 * ByteBridge LinkedIn Lead Prospector & Search Helper
 * Herramienta para descubrir y añadir nuevos decisores gastronómicos a la cola de prospección.
 *
 * Uso:
 *   node scripts/linkedin-search.mjs --add
 *   node scripts/linkedin-search.mjs --generate-templates
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const LEADS_FILE = path.join(ROOT_DIR, "data", "linkedinLeads.json");

function loadLeads() {
  if (!fs.existsSync(LEADS_FILE)) return [];
  return JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"));
}

function saveLeads(leads) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
  console.log(`💾 Base de datos actualizada con éxito (${leads.length} leads en total).`);
}

/**
 * Genera una nota de conexión optimizada bajo CONSTRAINTS.md (menos de 250 caracteres)
 */
export function generateConnectionNote(name, restaurant, slug, city) {
  const shortName = name && !name.toLowerCase().includes("director") && !name.toLowerCase().includes("gerente")
    ? name.split(" ")[0]
    : "equipo de " + restaurant;

  const note = `Hola ${shortName} 👋 Vi su propuesta en ${city}. Les armé un prototipo interactivo para gestionar reservas y pedidos en 30s sin colapso de WhatsApp: byte-bridge-tau.vercel.app/demos/${slug}?source=linkedin Saludos!`;

  // Asegurar límite estricto de LinkedIn (< 300 chars, ideal < 250)
  return note.length > 290 ? note.slice(0, 287) + "..." : note;
}

/**
 * Genera el mensaje de seguimiento para cuando aceptan la conexión
 */
export function generateFollowUpMessage(name, restaurant, slug) {
  const shortName = name && !name.toLowerCase().includes("director") && !name.toLowerCase().includes("gerente")
    ? name.split(" ")[0]
    : "equipo de " + restaurant;

  return `Hola ${shortName}, un gusto conectar 🙌\n\nTe escribo breve: sabemos que en hostelería los fines de semana se pierden mesas y pedidos porque el WhatsApp se satura y los comensales tardan minutos esperando confirmación.\n\nLes diseñé una propuesta interactiva con su menú y sistema de reservas con ticket QR y cálculo a tasa oficial BCV:\n👉 https://byte-bridge-tau.vercel.app/demos/${slug}?source=linkedin\n\n¿Qué día de esta semana te viene bien para una llamada rápida de 5 minutos sobre cómo implementarlo?`;
}

function main() {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.length === 0) {
    console.log("\n=======================================================");
    console.log("🔍 BYTEBRIDGE LINKEDIN SEARCH & LEAD HELPER");
    console.log("=======================================================\n");
    console.log("Comandos disponibles:");
    console.log("  node scripts/linkedin-bot.mjs --status     Ver estado actual de los leads");
    console.log("  node scripts/linkedin-bot.mjs --login      Iniciar sesión en LinkedIn");
    console.log("  node scripts/linkedin-bot.mjs --dry-run    Simular envío de invitaciones");
    console.log("  node scripts/linkedin-bot.mjs --limit 5    Enviar 5 invitaciones reales");
    console.log("  node scripts/linkedin-bot.mjs --slug <id>  Ejecutar para un restaurante puntual\n");
    return;
  }
}

main();
