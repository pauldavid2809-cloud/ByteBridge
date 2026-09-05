#!/usr/bin/env node

/**
 * ByteBridge LinkedIn Automation Engine
 * Prospección B2B automatizada, segura y anti-baneo para decisores gastronómicos y hoteleros.
 *
 * Uso:
 *   node scripts/linkedin-bot.mjs --status           # Ver estado del pipeline de leads
 *   node scripts/linkedin-bot.mjs --login            # Iniciar sesión en LinkedIn y guardar cookie li_at
 *   node scripts/linkedin-bot.mjs --dry-run          # Simular conexión y notas sin enviar invitaciones
 *   node scripts/linkedin-bot.mjs --limit 5          # Enviar hasta 5 invitaciones
 *   node scripts/linkedin-bot.mjs --slug modoccs     # Ejecutar únicamente para un negocio específico
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer-core";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const LEADS_FILE = path.join(ROOT_DIR, "data", "linkedinLeads.json");
const SESSION_FILE = path.join(ROOT_DIR, ".linkedin_session.json");
const ENV_FILE = path.join(ROOT_DIR, ".env.local");

// Rutas habituales de navegadores Chromium en Windows
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

// Helpers de espera y aleatoriedad para simulación humana
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Cargar o leer cookie de sesión `li_at`
function getStoredCookie() {
  if (process.env.LINKEDIN_LI_AT) {
    return process.env.LINKEDIN_LI_AT.trim();
  }

  if (fs.existsSync(SESSION_FILE)) {
    try {
      const data = JSON.parse(fs.readFileSync(SESSION_FILE, "utf-8"));
      if (data.li_at) return data.li_at;
    } catch {
      // Ignorar error de parsing
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

function saveStoredCookie(liAt) {
  fs.writeFileSync(SESSION_FILE, JSON.stringify({ li_at: liAt, savedAt: new Date().toISOString() }, null, 2), "utf-8");
  console.log("💾 Cookie de sesión de LinkedIn guardada en .linkedin_session.json");
}

function loadLeads() {
  if (!fs.existsSync(LEADS_FILE)) {
    throw new Error(`No se encontró el archivo de leads en ${LEADS_FILE}`);
  }
  return JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"));
}

function saveLeads(leads) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

// Mostrar estado del pipeline
function showStatus() {
  const leads = loadLeads();
  console.log("\n=======================================================");
  console.log("📊 PIPELINE DE OUTREACH LINKEDIN — BYTEBRIDGE");
  console.log("=======================================================\n");

  const total = leads.length;
  const pending = leads.filter((l) => l.status === "pending").length;
  const invited = leads.filter((l) => l.status === "invited").length;
  const connected = leads.filter((l) => l.status === "connected").length;
  const replied = leads.filter((l) => l.status === "replied").length;

  console.log(`Total de Leads:      ${total}`);
  console.log(`⏳ Pendientes:        ${pending}`);
  console.log(`📨 Invitados:         ${invited}`);
  console.log(`🤝 Conectados:        ${connected}`);
  console.log(`💬 Con Respuesta:     ${replied}\n`);

  console.log("Detalle de Prospectos:");
  console.table(
    leads.map((l) => ({
      Negocio: l.restaurant,
      Decisor: l.targetName,
      Cargo: l.targetRole,
      Ciudad: l.city,
      Estado: l.status.toUpperCase(),
      Demo: `/demos/${l.slug}`,
    }))
  );
  console.log("\n");
}

// Modo Login: Abre navegador para que el usuario inicie sesión y captura `li_at`
async function runLogin() {
  console.log("\n🚀 Iniciando modo Login de LinkedIn...");
  console.log("👉 Se abrirá una ventana de navegador. Por favor inicia sesión normalmente.");

  const executablePath = getBrowserPath();
  const browser = await puppeteer.launch({
    executablePath,
    headless: false,
    defaultViewport: null,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-blink-features=AutomationControlled",
      "--start-maximized",
    ],
  });

  const page = await browser.newPage();
  await page.goto("https://www.linkedin.com/login", { waitUntil: "networkidle2" });

  console.log("⏳ Esperando a que completes el inicio de sesión...");

  // Esperar hasta que la URL contenga feed o se detecte la cookie li_at
  let liAtCookie = null;
  const maxWaitMs = 180000; // 3 minutos
  const startTime = Date.now();

  while (Date.now() - startTime < maxWaitMs) {
    const cookies = await page.cookies();
    const found = cookies.find((c) => c.name === "li_at");
    if (found && found.value) {
      liAtCookie = found.value;
      break;
    }
    await sleep(2000);
  }

  if (liAtCookie) {
    saveStoredCookie(liAtCookie);
    console.log("✅ ¡Sesión autenticada con éxito! La cookie ha sido capturada.");
    console.log("🎉 Ahora puedes ejecutar: node scripts/linkedin-bot.mjs --dry-run");
  } else {
    console.log("⚠️ Tiempo de espera agotado sin detectar inicio de sesión.");
  }

  await browser.close();
}

// Motor principal del bot
async function runBot(options) {
  const { dryRun = false, limit = 10, targetSlug = null, headless = false } = options;

  console.log("\n=======================================================");
  console.log("🤖 BYTEBRIDGE LINKEDIN AUTOMATION BOT");
  console.log(`Modo: ${dryRun ? "🧪 SIMULACIÓN (DRY-RUN - Sin enviar)" : "⚡ EN VIVO (Conexiones reales)"}`);
  console.log(`Límite de envíos: ${limit}`);
  console.log(`Headless: ${headless ? "Sí" : "No (Ventana visible)"}`);
  if (targetSlug) console.log(`Filtro por negocio: ${targetSlug}`);
  console.log("=======================================================\n");

  const liAt = getStoredCookie();
  if (!liAt) {
    console.log("❌ No se encontró la cookie de sesión `li_at` de LinkedIn.");
    console.log("👉 Ejecuta primero: node scripts/linkedin-bot.mjs --login");
    console.log("   O añade LINKEDIN_LI_AT=<tu_cookie> en tu archivo .env.local\n");
    process.exit(1);
  }

  const leads = loadLeads();
  let queue = leads.filter((l) => l.status === "pending");

  if (targetSlug) {
    queue = queue.filter((l) => l.slug.toLowerCase() === targetSlug.toLowerCase());
  }

  if (queue.length === 0) {
    console.log("🎉 ¡No hay leads pendientes en la cola! Todos han sido procesados.");
    return;
  }

  const toProcess = queue.slice(0, limit);
  console.log(`📋 Se procesarán ${toProcess.length} leads en esta sesión.\n`);

  const executablePath = getBrowserPath();
  const browser = await puppeteer.launch({
    executablePath,
    headless: headless ? "new" : false,
    defaultViewport: null,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-blink-features=AutomationControlled",
      "--window-size=1280,900",
    ],
  });

  const page = await browser.newPage();

  // Ocultar bandera de automatización navigator.webdriver
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, "webdriver", {
      get: () => undefined,
    });
  });

  // Configurar cookie de sesión en LinkedIn
  await page.setCookie({
    name: "li_at",
    value: liAt,
    domain: ".www.linkedin.com",
    path: "/",
    httpOnly: true,
    secure: true,
  });

  // Verificar inicio de sesión
  console.log("🌐 Verificando acceso a LinkedIn...");
  await page.goto("https://www.linkedin.com/feed/", { waitUntil: "domcontentloaded", timeout: 30000 });
  await sleep(3000);

  const currentUrl = page.url();
  if (currentUrl.includes("/login") || currentUrl.includes("/checkpoint")) {
    console.log("❌ La sesión no es válida o LinkedIn solicitó verificación (checkpoint).");
    console.log("👉 Ejecuta: node scripts/linkedin-bot.mjs --login para renovar tu sesión.");
    await browser.close();
    process.exit(1);
  }

  console.log("✅ Sesión validada. Iniciando secuencia de outreach humano...\n");

  let processedCount = 0;

  for (let i = 0; i < toProcess.length; i++) {
    const lead = toProcess[i];
    console.log(`-------------------------------------------------------`);
    console.log(`[${i + 1}/${toProcess.length}] Negocio: ${lead.restaurant} (${lead.city})`);
    console.log(`👤 Decisor: ${lead.targetName} | Cargo: ${lead.targetRole}`);
    console.log(`🔗 Destino: ${lead.profileUrl}`);

    try {
      // 1. Navegar a la URL del perfil o búsqueda
      await page.goto(lead.profileUrl, { waitUntil: "domcontentloaded", timeout: 35000 });
      await sleep(randomBetween(4000, 7000));

      // Si es una página de resultados de búsqueda, ingresar al primer perfil relevante
      if (page.url().includes("/search/results/people/")) {
        console.log("🔍 Detectada página de búsqueda. Localizando primer perfil coincidente...");
        await sleep(2000);

        const profileLink = await page.evaluate(() => {
          // Buscar enlaces que apunten a perfiles /in/
          const anchors = Array.from(document.querySelectorAll('a[href*="/in/"]'));
          for (const a of anchors) {
            const href = a.getAttribute("href");
            if (href && href.includes("/in/") && !href.includes("/search/")) {
              return a.href;
            }
          }
          return null;
        });

        if (profileLink) {
          console.log(`👉 Accediendo a perfil encontrado: ${profileLink}`);
          await page.goto(profileLink, { waitUntil: "domcontentloaded", timeout: 35000 });
          await sleep(randomBetween(4000, 6000));
        } else {
          console.log("⚠️ No se encontró enlace directo a perfil en los resultados de búsqueda. Saltando.");
          continue;
        }
      }

      // 2. Simular comportamiento de lectura humana (scroll leve)
      await page.evaluate(() => {
        window.scrollBy({ top: 320, behavior: "smooth" });
      });
      await sleep(randomBetween(2000, 3500));
      await page.evaluate(() => {
        window.scrollBy({ top: -150, behavior: "smooth" });
      });
      await sleep(randomBetween(1500, 2500));

      // 3. Buscar botón de "Conectar"
      console.log("🎯 Buscando botón de Conexión...");
      let connectResult = await page.evaluate(() => {
        // Opción A: Botón visible directo
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

        // Opción B: Oculto bajo "Más" / "More"
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

      // Si tuvimos que abrir el menú "Más"
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
        console.log("ℹ️ No se encontró el botón de Conectar (posiblemente ya conectado, pendiente o perfil restringido).");
        continue;
      }

      console.log(`✨ Modal de invitación abierto (${connectResult.method || "directo"}). Esperando formulario...`);
      await sleep(randomBetween(1800, 2800));

      // 4. Hacer clic en "Añadir una nota"
      const noteButtonFound = await page.evaluate(() => {
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

      if (!noteButtonFound) {
        console.log("⚠️ No se encontró el botón para añadir nota o se abrió directamente.");
      }

      await sleep(1500);

      // 5. Escribir la nota personalizada con typing delay humano
      const noteText = lead.connectionNote;
      console.log(`✍️ Escribiendo nota personalizada (${noteText.length} caracteres)...`);

      const textareaSelector = "textarea#custom-message, textarea[name='message']";
      await page.waitForSelector(textareaSelector, { timeout: 7000 }).catch(() => null);

      const hasTextarea = await page.$(textareaSelector);
      if (hasTextarea) {
        await page.focus(textareaSelector);
        // Simulación de tipeo humano con pausas variables
        for (const char of noteText) {
          await page.keyboard.type(char, { delay: randomBetween(25, 65) });
        }
        console.log("✅ Nota redactada en el campo.");
      } else {
        console.log("⚠️ No se detectó textarea para la nota. Cancelando modal.");
      }

      await sleep(randomBetween(1500, 2500));

      // 6. Enviar invitación o Descartar en Dry-Run
      if (dryRun) {
        console.log("🧪 [DRY-RUN] Simulación completa. Cancelando envío para no consumir invitación...");
        await page.evaluate(() => {
          const buttons = Array.from(document.querySelectorAll("button"));
          const dismissBtn = buttons.find((b) => (b.getAttribute("aria-label") || "").toLowerCase().includes("descartar") || (b.innerText || "").toLowerCase().includes("cancelar") || (b.innerText || "").toLowerCase().includes("cancel"));
          if (dismissBtn) dismissBtn.click();
        });
      } else {
        console.log("📤 Enviando invitación...");
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
          saveLeads(leads);
          processedCount++;
          console.log(`🎉 ¡Invitación enviada con éxito a ${lead.targetName}!`);
        } else {
          console.log("⚠️ No se pudo presionar el botón de envío final.");
        }
      }

      // 7. Pausa aleatoria entre perfiles para evitar detección (20 a 40 segundos)
      if (i < toProcess.length - 1) {
        const pauseTime = randomBetween(20000, 38000);
        console.log(`⏳ Esperando ${(pauseTime / 1000).toFixed(1)} segundos antes del siguiente prospecto (pausa humana anti-baneo)...`);
        await sleep(pauseTime);
      }
    } catch (err) {
      console.error(`❌ Error procesando a ${lead.targetName}:`, err.message);
    }
  }

  console.log("\n=======================================================");
  console.log(`🏁 Sesión finalizada. Total de prospectos procesados: ${dryRun ? toProcess.length + " (Simulados)" : processedCount}`);
  console.log("=======================================================\n");

  await browser.close();
}

// Procesar argumentos de CLI
async function main() {
  const args = process.argv.slice(2);

  if (args.includes("--status")) {
    showStatus();
    return;
  }

  if (args.includes("--login")) {
    await runLogin();
    return;
  }

  const dryRun = args.includes("--dry-run");
  const headless = args.includes("--headless");

  let limit = 10;
  const limitIdx = args.indexOf("--limit");
  if (limitIdx !== -1 && args[limitIdx + 1]) {
    limit = parseInt(args[limitIdx + 1], 10) || 10;
  }

  let targetSlug = null;
  const slugIdx = args.indexOf("--slug");
  if (slugIdx !== -1 && args[slugIdx + 1]) {
    targetSlug = args[slugIdx + 1];
  }

  await runBot({ dryRun, limit, targetSlug, headless });
}

main().catch((err) => {
  console.error("Error fatal en LinkedIn Bot:", err);
  process.exit(1);
});
