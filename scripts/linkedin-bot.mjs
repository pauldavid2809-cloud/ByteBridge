#!/usr/bin/env node

/**
 * ByteBridge Multi-Segment LinkedIn Outreach Engine
 *
 * Segmentos Prioritarios:
 *   1. Agencias de marketing/diseño (Subcontratación marca blanca)
 *   2. Consultoras y servicios profesionales (Reservas y gestión a medida)
 *   3. Founders de startups (MVPs rápidos en 2-3 semanas)
 *   4. Desarrolladores/freelancers saturados (Tercerización de frontend)
 *   5. E-commerce pequeño-mediano (Tiendas ultra-rápidas a medida)
 *
 * Comandos:
 *   node scripts/linkedin-bot.mjs --status             # Ver estado por segmentos
 *   node scripts/linkedin-bot.mjs --dry-run            # Simulación sin enviar
 *   node scripts/linkedin-bot.mjs --priority           # Enviar por orden de prioridad (1 -> 5)
 *   node scripts/linkedin-bot.mjs --segment 1          # Enviar solo a Agencias
 *   node scripts/linkedin-bot.mjs --segment startup    # Enviar solo a Startups
 *   node scripts/linkedin-bot.mjs --check              # Verificar quién aceptó la conexión
 *   node scripts/linkedin-bot.mjs --limit 10           # Limitar cantidad (default: 10)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer-core";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const LEADS_FILE = path.join(ROOT_DIR, "data", "linkedinLeads.json");
const SEGMENTS_FILE = path.join(ROOT_DIR, "config", "linkedinSegments.json");
const LOG_FILE = path.join(ROOT_DIR, "data", "linkedinLog.json");
const SESSION_FILE = path.join(ROOT_DIR, ".linkedin_session.json");
const ENV_FILE = path.join(ROOT_DIR, ".env.local");

const BROWSER_PATHS = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
];

function getBrowserPath() {
  for (const p of BROWSER_PATHS) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error("No se encontró Microsoft Edge ni Google Chrome en el sistema.");
}

// Helpers de espera y aleatoriedad
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function getStoredCookie() {
  if (process.env.LINKEDIN_LI_AT) {
    return process.env.LINKEDIN_LI_AT.trim();
  }

  if (fs.existsSync(SESSION_FILE)) {
    try {
      const data = JSON.parse(fs.readFileSync(SESSION_FILE, "utf-8"));
      if (data.li_at) return data.li_at.trim();
    } catch {
      // Ignorar error
    }
  }

  if (fs.existsSync(ENV_FILE)) {
    try {
      const content = fs.readFileSync(ENV_FILE, "utf-8");
      const match = content.match(/LINKEDIN_LI_AT=["']?([^"'\r\n]+)["']?/);
      if (match && match[1]) return match[1].trim();
    } catch {
      // Ignorar error
    }
  }

  return null;
}

function loadSegments() {
  if (!fs.existsSync(SEGMENTS_FILE)) {
    throw new Error(`Archivo de segmentos no encontrado: ${SEGMENTS_FILE}`);
  }
  return JSON.parse(fs.readFileSync(SEGMENTS_FILE, "utf-8")).segments;
}

function loadLeads() {
  if (!fs.existsSync(LEADS_FILE)) {
    return [];
  }
  return JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"));
}

function saveLeads(leads) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

function appendLog(entry) {
  let logs = [];
  if (fs.existsSync(LOG_FILE)) {
    try {
      logs = JSON.parse(fs.readFileSync(LOG_FILE, "utf-8"));
    } catch {
      logs = [];
    }
  }
  logs.push({
    timestamp: new Date().toISOString(),
    ...entry,
  });
  fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2), "utf-8");
}

/**
 * Selecciona una nota variada según el segmento y sustituye variables
 */
function getPersonalizedNote(lead, segments) {
  const seg = segments.find((s) => s.id === lead.segment || s.priority === lead.priority);
  const firstName = lead.firstName || (lead.targetName ? lead.targetName.split(" ")[0] : "Colega");
  const companyName = lead.companyName || "su empresa";

  let template = "";
  if (seg && seg.connectionNoteVariations && seg.connectionNoteVariations.length > 0) {
    // Rotación aleatoria entre variaciones de copy para evitar patrones repetitivos
    const randomIndex = Math.floor(Math.random() * seg.connectionNoteVariations.length);
    template = seg.connectionNoteVariations[randomIndex];
  } else if (lead.connectionNote) {
    template = lead.connectionNote;
  } else {
    template = "Hola {{firstName}} 👋 Vi el trabajo de {{companyName}}. Me gustaría conectar contigo para explorar posibles sinergias técnicas. Saludos!";
  }

  const rendered = template
    .replace(/\{\{firstName\}\}/g, firstName)
    .replace(/\{\{companyName\}\}/g, companyName);

  // Límite estricto de seguridad de LinkedIn (< 300 caracteres, ideal < 260)
  return rendered.length > 280 ? rendered.slice(0, 277) + "..." : rendered;
}

/**
 * Mostrar estado del pipeline segmentado
 */
function showStatus() {
  const leads = loadLeads();
  const segments = loadSegments();

  console.log("\n=======================================================");
  console.log("🎯 PIPELINE DE PROSPECCIÓN LINKEDIN — BYTEBRIDGE");
  console.log("=======================================================\n");

  const total = leads.length;
  const pending = leads.filter((l) => l.status === "pending").length;
  const invited = leads.filter((l) => l.status === "invited").length;
  const connected = leads.filter((l) => l.status === "connected").length;

  console.log(`Total General: ${total} | ⏳ Pendientes: ${pending} | 📨 Invitados: ${invited} | 🤝 Conectados: ${connected}\n`);

  console.log("Distribución por Segmentos Prioritarios:\n");
  for (const seg of segments) {
    const segLeads = leads.filter((l) => l.segment === seg.id);
    const segPending = segLeads.filter((l) => l.status === "pending").length;
    const segInvited = segLeads.filter((l) => l.status === "invited").length;
    const segConnected = segLeads.filter((l) => l.status === "connected").length;

    console.log(`[Prioridad ${seg.priority}] 📌 ${seg.name.toUpperCase()}`);
    console.log(`   Dolor Clave: ${seg.pain}`);
    console.log(`   Total: ${segLeads.length} | Pendientes: ${segPending} | Invitados: ${segInvited} | Conectados: ${segConnected}`);
    console.log("-------------------------------------------------------");
  }

  console.log("\nDetalle de Prospectos Activos:\n");
  console.table(
    leads.map((l) => ({
      Segmento: l.segment,
      Prioridad: l.priority,
      Nombre: l.targetName,
      Empresa: l.companyName,
      Cargo: l.targetRole,
      Estado: (l.status || "PENDING").toUpperCase(),
    }))
  );
  console.log("\n");
}

/**
 * Ejecución del bot con control de velocidad, rotación de copy y logging
 */
async function runBot(options) {
  const {
    dryRun = false,
    limit = 10,
    segmentFilter = null,
    priorityOrder = true,
    headless = false,
  } = options;

  console.log("\n=======================================================");
  console.log("🤖 BYTEBRIDGE LINKEDIN AUTOMATION BOT (MULTI-SEGMENT)");
  console.log(`Modo: ${dryRun ? "🧪 SIMULACIÓN (DRY-RUN - Sin enviar)" : "⚡ EN VIVO (Conexiones reales)"}`);
  console.log(`Límite diario: ${limit} conexiones (Volumen seguro anti-detección)`);
  if (segmentFilter) console.log(`Segmento seleccionado: ${segmentFilter}`);
  console.log(`Pacing humano: 45 a 90 segundos entre acciones`);
  console.log("=======================================================\n");

  const liAt = getStoredCookie();
  if (!liAt) {
    console.log("❌ No se encontró la cookie de sesión `li_at`.");
    console.log("👉 Guarda LINKEDIN_LI_AT en tu archivo .env.local.");
    process.exit(1);
  }

  const segments = loadSegments();
  let leads = loadLeads();

  // Filtrar pendientes
  let queue = leads.filter((l) => l.status === "pending");

  // Filtrar por segmento si fue especificado
  if (segmentFilter) {
    queue = queue.filter((l) => {
      const matchId = (l.segment || "").toLowerCase() === segmentFilter.toLowerCase();
      const matchNum = String(l.priority) === String(segmentFilter);
      return matchId || matchNum;
    });
  }

  // Ordenar por prioridad (1 -> 5)
  if (priorityOrder) {
    queue.sort((a, b) => (a.priority || 99) - (b.priority || 99));
  }

  if (queue.length === 0) {
    console.log("🎉 No hay prospectos pendientes en la cola para los filtros seleccionados.");
    return;
  }

  // Respetar límite diario estricto para evitar bloqueos
  const safeLimit = Math.min(limit, 15);
  const toProcess = queue.slice(0, safeLimit);

  console.log(`📋 Se procesarán ${toProcess.length} prospectos en esta sesión.\n`);

  const executablePath = getBrowserPath();
  const userDataDir = path.join(ROOT_DIR, ".linkedin_profile");

  const browser = await puppeteer.launch({
    executablePath,
    headless: headless ? "new" : false,
    userDataDir,
    defaultViewport: null,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-blink-features=AutomationControlled",
      "--window-size=1280,900",
    ],
  });

  const page = await browser.newPage();

  // Ocultar webdriver flag
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, "webdriver", { get: () => undefined });
  });

  // Inyectar cookie de sesión
  await page.setCookie({
    name: "li_at",
    value: liAt,
    domain: ".www.linkedin.com",
    path: "/",
    httpOnly: true,
    secure: true,
  });

  console.log("🌐 Verificando acceso a LinkedIn...");
  await page.goto("https://www.linkedin.com/feed/", { waitUntil: "domcontentloaded", timeout: 35000 });
  await sleep(randomBetween(3000, 5000));

  const currentUrl = page.url();
  if (currentUrl.includes("/login") || currentUrl.includes("/checkpoint")) {
    console.log("❌ La cookie no es válida o LinkedIn solicitó verificación adicional.");
    await browser.close();
    process.exit(1);
  }

  console.log("✅ Sesión validada. Iniciando prospección humana...\n");

  let processedCount = 0;

  for (let i = 0; i < toProcess.length; i++) {
    const lead = toProcess[i];
    const segConfig = segments.find((s) => s.id === lead.segment);
    const segName = segConfig ? segConfig.name : lead.segment;

    console.log(`-------------------------------------------------------`);
    console.log(`[${i + 1}/${toProcess.length}] Segmento: [P${lead.priority}] ${segName}`);
    console.log(`👤 Prospecto: ${lead.targetName} | Cargo: ${lead.targetRole}`);
    console.log(`🏢 Empresa: ${lead.companyName} (${lead.city})`);
    console.log(`🔗 URL: ${lead.profileUrl}`);

    // Generar copy variado con sustitución
    const noteText = getPersonalizedNote(lead, segments);
    console.log(`📝 Nota a enviar (${noteText.length} carac.):`);
    console.log(`   "${noteText}"`);

    try {
      // 1. Navegación con timeout seguro
      await page.goto(lead.profileUrl, { waitUntil: "domcontentloaded", timeout: 35000 });
      await sleep(randomBetween(4000, 7000));

      // 2. Si es una búsqueda, entrar al primer perfil coincidente
      if (page.url().includes("/search/results/people/")) {
        console.log("🔍 Detectada página de búsqueda. Localizando primer resultado...");
        await page.waitForSelector('a[href*="/in/"]', { timeout: 10000 }).catch(() => null);
        await sleep(2000);
        await page.evaluate(() => window.scrollBy({ top: 250, behavior: "smooth" }));
        await sleep(1500);

        const profileLink = await page.evaluate(() => {
          const links = Array.from(document.querySelectorAll('a[href*="/in/"]'));
          for (const a of links) {
            const h = a.href || "";
            if (h.includes("/in/") && !h.includes("/search/") && !h.includes("/feed/")) {
              return h;
            }
          }
          return null;
        });

        if (profileLink) {
          console.log(`👉 Accediendo a perfil: ${profileLink}`);
          lead.profileUrl = profileLink; // Guardar URL directa
          await page.goto(profileLink, { waitUntil: "domcontentloaded", timeout: 35000 });
          await sleep(randomBetween(4000, 6000));
        } else {
          console.log("⚠️ No se encontró enlace a perfil en la búsqueda. Saltando.");
          continue;
        }
      }

      // 3. Simular lectura humana (scroll leve)
      const scrollDown = randomBetween(280, 480);
      await page.evaluate((y) => window.scrollBy({ top: y, behavior: "smooth" }), scrollDown);
      await sleep(randomBetween(3000, 6000));
      await page.evaluate(() => window.scrollBy({ top: -180, behavior: "smooth" }));
      await sleep(randomBetween(2000, 4000));

      // 4. Localizar botón "Conectar"
      console.log("🎯 Buscando opción de conexión...");
      let connectResult = await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll("button"));
        for (const btn of buttons) {
          const text = (btn.innerText || "").trim().toLowerCase();
          const aria = (btn.getAttribute("aria-label") || "").trim().toLowerCase();
          if (
            (text === "conectar" || text === "connect" || aria.includes("invitar") || aria.includes("conectar") || aria.includes("connect")) &&
            !aria.includes("más") && !aria.includes("more")
          ) {
            btn.click();
            return { found: true, method: "direct" };
          }
        }

        for (const btn of buttons) {
          const aria = (btn.getAttribute("aria-label") || "").trim().toLowerCase();
          const text = (btn.innerText || "").trim().toLowerCase();
          if (aria.includes("más acciones") || aria.includes("more actions") || text === "más" || text === "more") {
            btn.click();
            return { found: false, openedMore: true };
          }
        }

        return { found: false };
      });

      if (!connectResult.found && connectResult.openedMore) {
        await sleep(1500);
        connectResult = await page.evaluate(() => {
          const menuItems = Array.from(document.querySelectorAll('div[role="dialog"] button, .artdeco-dropdown__content button, ul li div[role="button"]'));
          for (const item of menuItems) {
            const text = (item.innerText || "").trim().toLowerCase();
            const aria = (item.getAttribute("aria-label") || "").trim().toLowerCase();
            if (text.includes("conectar") || text.includes("connect") || aria.includes("conectar") || aria.includes("connect")) {
              item.click();
              return { found: true, method: "dropdown" };
            }
          }
          return { found: false };
        });
      }

      if (!connectResult.found) {
        console.log("ℹ️ No se detectó botón de conexión (ya conectado, solicitud pendiente o perfil restringido).");
        continue;
      }

      console.log(`✨ Modal abierto (${connectResult.method || "directo"}). Esperando campo de nota...`);
      await sleep(randomBetween(2000, 3000));

      // 5. Clic en "Añadir una nota"
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll("button"));
        for (const b of buttons) {
          const text = (b.innerText || "").toLowerCase();
          const aria = (b.getAttribute("aria-label") || "").toLowerCase();
          if (text.includes("añadir una nota") || text.includes("add a note") || aria.includes("añadir una nota") || aria.includes("add a note")) {
            b.click();
            return true;
          }
        }
        return false;
      });

      await sleep(1500);

      // 6. Tipeo simulado carácter por carácter con velocidad variable
      const textareaSelector = "textarea#custom-message, textarea[name='message']";
      await page.waitForSelector(textareaSelector, { timeout: 7000 }).catch(() => null);

      const hasTextarea = await page.$(textareaSelector);
      if (hasTextarea) {
        await page.focus(textareaSelector);
        for (const char of noteText) {
          await page.keyboard.type(char, { delay: randomBetween(35, 80) });
        }
        console.log("✅ Nota redactada en el campo.");
      } else {
        console.log("⚠️ No se encontró textarea para la nota.");
      }

      await sleep(randomBetween(2000, 3500));

      // 7. Enviar o Cancelar en Dry-Run
      if (dryRun) {
        console.log("🧪 [DRY-RUN] Simulación completa. Cancelando modal para no enviar invitación...");
        await page.evaluate(() => {
          const buttons = Array.from(document.querySelectorAll("button"));
          const dismiss = buttons.find((b) =>
            (b.getAttribute("aria-label") || "").toLowerCase().includes("descartar") ||
            (b.innerText || "").toLowerCase().includes("cancelar") ||
            (b.innerText || "").toLowerCase().includes("cancel")
          );
          if (dismiss) dismiss.click();
        });

        // Registrar en log como simulación
        appendLog({
          leadId: lead.id,
          targetName: lead.targetName,
          companyName: lead.companyName,
          segment: lead.segment,
          priority: lead.priority,
          action: "dry_run_simulation",
          noteSent: noteText,
          status: "simulated",
        });
      } else {
        console.log("📤 Enviando invitación personalizada...");
        const sent = await page.evaluate(() => {
          const buttons = Array.from(document.querySelectorAll("button"));
          for (const b of buttons) {
            const aria = (b.getAttribute("aria-label") || "").toLowerCase();
            const text = (b.innerText || "").toLowerCase();
            if (
              (aria.includes("enviar invitación") || aria.includes("send now") || aria.includes("enviar ahora") || text === "enviar" || text === "send") &&
              !b.disabled
            ) {
              b.click();
              return true;
            }
          }
          return false;
        });

        if (sent) {
          lead.status = "invited";
          lead.invitedAt = new Date().toISOString();
          lead.messageSent = noteText;
          saveLeads(leads);
          processedCount++;

          appendLog({
            leadId: lead.id,
            targetName: lead.targetName,
            companyName: lead.companyName,
            segment: lead.segment,
            priority: lead.priority,
            action: "invited",
            noteSent: noteText,
            status: "success",
          });

          console.log(`🎉 ¡Invitación enviada con éxito a ${lead.targetName} (${lead.companyName})!`);
        } else {
          console.log("⚠️ No se pudo presionar el botón de envío final.");
        }
      }

      // 8. Pacing Humano: Pausa larga aleatoria entre 45s y 85s
      if (i < toProcess.length - 1) {
        const pauseMs = randomBetween(45000, 85000);
        console.log(`⏳ Pausa de seguridad anti-patrones: ${(pauseMs / 1000).toFixed(0)} segundos antes del próximo perfil...\n`);
        await sleep(pauseMs);
      }
    } catch (err) {
      console.error(`❌ Error procesando a ${lead.targetName}:`, err.message);
      appendLog({
        leadId: lead.id,
        targetName: lead.targetName,
        action: "error",
        error: err.message,
        status: "failed",
      });
    }
  }

  console.log("\n=======================================================");
  console.log(`🏁 Sesión finalizada. Total procesados: ${dryRun ? toProcess.length + " (Simulados)" : processedCount}`);
  console.log(`📁 Log guardado en: data/linkedinLog.json`);
  console.log("=======================================================\n");

  await browser.close();
}

/**
 * Comprobar qué prospectos ya aceptaron la conexión
 */
async function checkAccepted(options) {
  const { headless = false } = options;
  console.log("\n=======================================================");
  console.log("🔍 COMPROBACIÓN DE CONEXIONES ACEPTADAS EN LINKEDIN");
  console.log("=======================================================\n");

  const liAt = getStoredCookie();
  if (!liAt) {
    console.log("❌ No se encontró la cookie de sesión.");
    process.exit(1);
  }

  const leads = loadLeads();
  const invitedLeads = leads.filter((l) => l.status === "invited");

  if (invitedLeads.length === 0) {
    console.log("ℹ️ No hay prospectos con estado 'invited' en la cola.");
    return;
  }

  console.log(`📋 Verificando ${invitedLeads.length} prospectos invitados previamente...\n`);

  const executablePath = getBrowserPath();
  const browser = await puppeteer.launch({
    executablePath,
    headless: headless ? "new" : false,
    userDataDir: path.join(ROOT_DIR, ".linkedin_profile"),
    defaultViewport: null,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--window-size=1280,900"],
  });

  const page = await browser.newPage();
  await page.setCookie({
    name: "li_at",
    value: liAt,
    domain: ".www.linkedin.com",
    path: "/",
    httpOnly: true,
    secure: true,
  });

  let newlyConnected = 0;

  for (const lead of invitedLeads) {
    console.log(`🔎 Revisando estado de: ${lead.targetName} (${lead.companyName})...`);
    try {
      await page.goto(lead.profileUrl, { waitUntil: "domcontentloaded", timeout: 30000 });
      await sleep(3500);

      const isConnected = await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll("button"));
        const hasMsgBtn = buttons.some((b) => {
          const t = (b.innerText || "").trim().toLowerCase();
          return t === "mensaje" || t === "message";
        });
        const isFirst = document.body.innerText.includes("1er") || document.body.innerText.includes("1st");
        return hasMsgBtn || isFirst;
      });

      if (isConnected) {
        lead.status = "connected";
        lead.connectedAt = new Date().toISOString();
        saveLeads(leads);
        newlyConnected++;

        appendLog({
          leadId: lead.id,
          targetName: lead.targetName,
          companyName: lead.companyName,
          segment: lead.segment,
          action: "connection_accepted",
          status: "connected",
        });

        console.log(`🎉 ¡CONFIRMADO! ${lead.targetName} ya aceptó la conexión.`);
        console.log(`💬 Mensaje de seguimiento recomendado listo en data/linkedinLeads.json\n`);
      } else {
        console.log(`⏳ Aún no ha aceptado o invitación pendiente.`);
      }

      await sleep(randomBetween(6000, 12000));
    } catch (e) {
      console.error(`Error revisando a ${lead.targetName}:`, e.message);
    }
  }

  console.log(`\n🏁 Verificación terminada. Nuevos contactos conectados: ${newlyConnected}`);
  await browser.close();
}

async function main() {
  const args = process.argv.slice(2);

  if (args.includes("--status")) {
    showStatus();
    return;
  }

  if (args.includes("--check") || args.includes("--check-accepted")) {
    const headless = args.includes("--headless");
    await checkAccepted({ headless });
    return;
  }

  const dryRun = args.includes("--dry-run");
  const headless = args.includes("--headless");

  let limit = 10;
  const limitIdx = args.indexOf("--limit");
  if (limitIdx !== -1 && args[limitIdx + 1]) {
    limit = parseInt(args[limitIdx + 1], 10) || 10;
  }

  let segmentFilter = null;
  const segIdx = args.indexOf("--segment");
  if (segIdx !== -1 && args[segIdx + 1]) {
    segmentFilter = args[segIdx + 1];
  }

  const priorityOrder = !args.includes("--no-priority");

  await runBot({
    dryRun,
    limit,
    segmentFilter,
    priorityOrder,
    headless,
  });
}

main().catch((err) => {
  console.error("Error fatal en LinkedIn Bot:", err);
  process.exit(1);
});
