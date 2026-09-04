#!/usr/bin/env node

/**
 * ByteBridge Prospecting & Follow-Up Tracker CLI
 * 
 * Uso:
 *   node scripts/tracker.mjs today            -> Muestra los seguimientos que tocan hoy o están atrasados
 *   node scripts/tracker.mjs pipeline         -> Muestra el resumen del embudo de prospección
 *   node scripts/tracker.mjs log <slug> <act> -> Registra una acción y programa la próxima fecha
 *   node scripts/tracker.mjs show <slug>      -> Muestra los datos y mensajes específicos de un negocio
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, "..", "data", "leadsPipeline.json");

// 29 Demos de ByteBridge
const INITIAL_DEMOS = [
  { slug: "lolapopspaleteria", name: "Lola Pops Paletería", batch: "dia6", city: "Maracaibo", category: "Paletería & Catering" },
  { slug: "keponke_ve", name: "Ke Ponke", batch: "dia6", city: "Maracaibo", category: "Pastelería & Regalos" },
  { slug: "dolcezza_ve", name: "Dolcezza Pastelería", batch: "dia6", city: "Maracaibo", category: "Repostería & Tortas" },
  { slug: "tostaca_ve", name: "Tostaca", batch: "dia6", city: "Zulia", category: "Snacks al Mayor" },
  { slug: "elvarfoodandcoffee", name: "El VAR Food & Coffee", batch: "dia6", city: "Maracaibo", category: "Gastrobar Deportivo" },
  { slug: "sweetgiftve", name: "Sweet Gift", batch: "dia6", city: "Maracaibo", category: "Arreglos & Fresas" },
  { slug: "olis_burger", name: "Oli's Burger", batch: "dia6", city: "Maracaibo", category: "Smash Burgers" },
  { slug: "pokemolokai", name: "Poke Molokai", batch: "dia6", city: "Maracaibo", category: "Poke Bar Hawaiano" },
  { slug: "barako_rest", name: "Barako Restaurante", batch: "dia6", city: "Maracaibo", category: "Steakhouse & Terraza" },
  { slug: "portovenerehotel", name: "Hotel Portovenere", batch: "dia6", city: "Maracaibo", category: "Hotel Boutique & Suites" },
  { slug: "sybarisrest", name: "Sybaris Restaurant", batch: "dia7", city: "Maracaibo", category: "Steakhouse & Terraza VIP" },
  { slug: "srtruhan", name: "Sr. Truhán", batch: "dia7", city: "San Cristóbal", category: "Gastrobar & Eventos" },
  { slug: "crispys_ve", name: "Crispy's", batch: "dia7", city: "San Cristóbal", category: "Fried Chicken & Delivery" },
  { slug: "enigmacafe_sc", name: "Enigma Café", batch: "dia7", city: "San Cristóbal", category: "Brunch & Café de Especialidad" },
  { slug: "beaucoffee_sc", name: "Beau Coffee", batch: "dia7", city: "San Cristóbal", category: "Bakery & Specialty Coffee" },
  { slug: "bruselas_sc", name: "Bruselas", batch: "dia7", city: "San Cristóbal", category: "Wafles & Chocolatería" },
  { slug: "momentossc", name: "Momentos", batch: "dia7", city: "San Cristóbal", category: "Desayunos Sorpresa & Eventos" },
  { slug: "fratellopizzas_sc", name: "Fratello Pizzas", batch: "dia7", city: "San Cristóbal", category: "Pizzería al Horno de Piedra" },
  { slug: "kala_cafesc", name: "Kala Café", batch: "dia7", city: "San Cristóbal", category: "Café Mirador de Montaña" },
  { slug: "pa_picar_mas", name: "Pa' Picar Más", batch: "dia7", city: "San Cristóbal", category: "Pasapalos & Fiestas" },
  { slug: "rutarestaurante", name: "RUTA Restaurante", batch: "dia8", city: "Caracas", category: "Comfort Food & Bar" },
  { slug: "vistabarccs", name: "Vista Bar Caracas", batch: "dia8", city: "Caracas", category: "Rooftop Mirador El Ávila" },
  { slug: "vizio_ristorante", name: "Vizio Ristorante", batch: "dia8", city: "Caracas", category: "Trattoria Italiana de Autor" },
  { slug: "crepusculobistro", name: "Crepúsculo Bistró", batch: "dia8", city: "Barquisimeto", category: "Bistró de Terraza" },
  { slug: "humosbistro_bar", name: "Humos Bistro & Bar", batch: "dia8", city: "Valencia / Caracas", category: "Carnes Ahumadas & Coctelería" },
  { slug: "lafelicittave", name: "La Felicittà Gelatería", batch: "dia8", city: "Caracas / Valencia", category: "Gelatería Artesanal" },
  { slug: "aprile_ccs", name: "Aprile Ristorante", batch: "dia8", city: "Altamira, Caracas", category: "Alta Cocina & Salones VIP" },
  { slug: "rutac4_", name: "Ruta C4", batch: "dia8", city: "Venezuela", category: "Street Food & Delivery Directo" },
  { slug: "tepuy_360", name: "Tepuy 360", batch: "dia8", city: "Caracas", category: "Restaurante Mirador 360°" },
];

function getCaracasDate(daysOffset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  const iso = d.toLocaleDateString("en-CA", { timeZone: "America/Caracas" });
  return iso; // YYYY-MM-DD
}

function loadPipeline() {
  if (!fs.existsSync(DATA_PATH)) {
    const today = getCaracasDate();
    const seeded = INITIAL_DEMOS.map((demo) => ({
      slug: demo.slug,
      name: demo.name,
      batch: demo.batch,
      city: demo.city,
      category: demo.category,
      phone: "",
      status: "NUEVO",
      createdAt: today,
      lastContactDate: null,
      nextFollowUpDate: today,
      history: [],
    }));
    fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
    fs.writeFileSync(DATA_PATH, JSON.stringify(seeded, null, 2), "utf8");
    return seeded;
  }
  return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
}

function savePipeline(leads) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(leads, null, 2), "utf8");
}

function getMessageForLead(lead, targetStep) {
  const demoUrl = `https://byte-bridge-tau.vercel.app/demos/${lead.slug}`;
  switch (targetStep) {
    case "DIA_2_BUMP":
      return `Hola equipo de ${lead.name} 👋 Sé que en el local andan a mil con el servicio del día. Solo quería confirmar si les abrió bien el enlace de la demo que les compartí ayer con su menú. ¿Pudieron darle un vistazo de 1 minuto?\n👉 ${demoUrl}`;
    case "DIA_4_LOSS":
      return `Buenas tardes equipo de ${lead.name}! Una pregunta puntual de cara al fin de semana: ¿han medido cuántos comensales o pedidos se les caen cuando el WhatsApp se llena en horas pico y tardan más de 10 minutos en pasar la carta?\n\nEn la demo les dejé una micro-calculadora al final para ver cuánto dinero representa esa fuga en ${lead.name}:\n👉 ${demoUrl}\n\nCon rescatar solo 3 o 4 pedidos por semana, el sistema se paga 100% solo. ¿Les muestro cómo funciona en 5 minutos?`;
    case "DIA_7_BREAKUP":
      return `Hola equipo de ${lead.name}, les saluda Paul David nuevamente.\n\nComo no tuve respuesta a mis mensajes anteriores, asumo que en este momento optimizar los pedidos o reservas por WhatsApp no es una prioridad en ${lead.name} o están concentrados en otros proyectos, así que no insistiré más por acá para no saturar su chat 🙏\n\nLes dejo la demo guardada y activa por si más adelante deciden automatizar la toma de pedidos a tasa oficial:\n👉 ${demoUrl}\n\n¡Mucho éxito con el restaurante y un saludo cordial!`;
    default:
      return `Demo personalizada para ${lead.name}: ${demoUrl}`;
  }
}

function getNextStepInfo(status) {
  switch (status) {
    case "NUEVO":
      return { nextStep: "DIA_1_ENVIADO", label: "Enviar Contacto Inicial (Video + Audio + Demo)", daysToAdd: 2 };
    case "DIA_1_ENVIADO":
      return { nextStep: "DIA_2_BUMP", label: "Enviar Día 2: Bump Sutil (24-48h)", daysToAdd: 2 };
    case "DIA_2_BUMP":
      return { nextStep: "DIA_4_LOSS", label: "Enviar Día 4: Gancho de Fuga Operativa (Loss-Audit)", daysToAdd: 3 };
    case "DIA_4_LOSS":
      return { nextStep: "DIA_7_BREAKUP", label: "Enviar Día 7: Cierre Definitivo (Break-Up Text)", daysToAdd: 2 };
    case "DIA_7_BREAKUP":
      return { nextStep: "ARCHIVADO", label: "Cumplidas 48h sin respuesta: Archivar lead", daysToAdd: 0 };
    default:
      return null;
  }
}

// ==========================================
// COMANDOS
// ==========================================

const args = process.argv.slice(2);
const command = args[0] || "today";

const leads = loadPipeline();
const today = getCaracasDate();

if (command === "today") {
  console.log("\n========================================================");
  console.log(`🎯 BYTEBRIDGE OUTREACH TRACKER · HOY: ${today}`);
  console.log("========================================================\n");

  const pending = leads.filter((l) => {
    if (["ARCHIVADO", "GANADO", "REUNION_AGENDADA"].includes(l.status)) return false;
    return !l.nextFollowUpDate || l.nextFollowUpDate <= today;
  });

  if (pending.length === 0) {
    console.log("✅ ¡Todo al día! No hay prospectos pendientes de seguimiento para hoy.\n");
    process.exit(0);
  }

  console.log(`📌 Se encontraron ${pending.length} prospectos que requieren atención hoy:\n`);

  pending.forEach((l, idx) => {
    const stepInfo = getNextStepInfo(l.status);
    const targetAction = stepInfo ? stepInfo.nextStep : "SEGUIMIENTO";
    const actionLabel = stepInfo ? stepInfo.label : l.status;
    const msg = getMessageForLead(l, targetAction);
    const waLink = `https://wa.me/${l.phone || ""}?text=${encodeURIComponent(msg)}`;

    console.log(`--------------------------------------------------------`);
    console.log(`${idx + 1}. [${l.name}] (${l.city}) · Estado Actual: ${l.status}`);
    console.log(`👉 TOCA: ${actionLabel}`);
    console.log(`💬 Mensaje para WhatsApp:`);
    console.log(`"${msg}"`);
    console.log(`\n📲 Enlace directo para abrir WhatsApp:`);
    console.log(`   ${waLink}`);
    console.log(`\n⌨️ Para registrar que lo enviaste, ejecuta:`);
    console.log(`   node scripts/tracker.mjs log ${l.slug} ${targetAction}\n`);
  });

} else if (command === "log") {
  const slug = args[1];
  const action = args[2]?.toUpperCase();
  const note = args.slice(3).join(" ");

  if (!slug || !action) {
    console.error("❌ Uso: node scripts/tracker.mjs log <slug> <accion> [nota opcional]");
    console.error("Acciones válidas: DIA_1_ENVIADO, DIA_2_BUMP, DIA_4_LOSS, DIA_7_BREAKUP, REUNION_AGENDADA, GANADO, ARCHIVADO");
    process.exit(1);
  }

  const lead = leads.find((l) => l.slug.toLowerCase() === slug.toLowerCase());
  if (!lead) {
    console.error(`❌ No se encontró ningún prospecto con slug: "${slug}"`);
    process.exit(1);
  }

  const stepInfo = getNextStepInfo(action);
  const nextDate = stepInfo && stepInfo.daysToAdd > 0 ? getCaracasDate(stepInfo.daysToAdd) : null;

  lead.status = action;
  lead.lastContactDate = today;
  lead.nextFollowUpDate = nextDate;
  lead.history.push({
    date: today,
    action,
    note: note || `Registrado vía CLI`,
  });

  savePipeline(leads);

  console.log(`\n✅ ¡Actualizado con éxito!`);
  console.log(`Negocio: ${lead.name} (${lead.slug})`);
  console.log(`Nuevo Estado: ${lead.status}`);
  console.log(`Último Contacto: ${lead.lastContactDate}`);
  console.log(`Próximo Seguimiento: ${lead.nextFollowUpDate || "N/A (Finalizado o Archivado)"}\n`);

} else if (command === "pipeline") {
  console.log("\n========================================================");
  console.log("📊 RESUMEN DEL PIPELINE DE PROSPECCIÓN BYTEBRIDGE");
  console.log("========================================================\n");

  const counts = {};
  leads.forEach((l) => {
    counts[l.status] = (counts[l.status] || 0) + 1;
  });

  console.log(`Total Leads Registrados: ${leads.length}`);
  console.log(`--------------------------------------------------------`);
  for (const [st, count] of Object.entries(counts)) {
    console.log(`• ${st.padEnd(18)} : ${count} prospecto(s)`);
  }
  console.log("--------------------------------------------------------\n");

} else if (command === "show") {
  const slug = args[1];
  const lead = leads.find((l) => l.slug.toLowerCase() === slug.toLowerCase());
  if (!lead) {
    console.error(`❌ No se encontró ningún prospecto con slug: "${slug}"`);
    process.exit(1);
  }
  console.log(JSON.stringify(lead, null, 2));
} else {
  console.log(`Comando no reconocido: ${command}. Opciones: today, log, pipeline, show`);
}
