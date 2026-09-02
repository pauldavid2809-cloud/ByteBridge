import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const demosDataPath = path.join(__dirname, "..", "data", "demosData.ts");
const hubClientPath = path.join(__dirname, "..", "components", "demos", "DemosHubClient.tsx");

const updates = {
  sybarisrest: {
    whatsapp: "Hola equipo de Sybaris! 👋 ¿Cuántas reservas se les pierden los fines de semana cuando el chat de WhatsApp se llena y no dan abasto para responder a tiempo?\\n\\nLes preparé una prueba directa con su menú y cortes de carne para que sus clientes elijan su mesa en terraza y reciban su confirmación al instante:\\n👉 https://byte-bridge-tau.vercel.app/demos/sybarisrest\\n\\n¿Les muestro en 5 minutos cómo funciona?",
    voice: "Hola equipo de Sybaris, les habla Paul David. Una pregunta rápida: ¿cuántas reservas de terraza se les quedan en el aire un viernes o sábado simplemente porque el WhatsApp colapsa en horas pico? Les armé un ejemplo exacto con sus cortes y menú para que sus comensales reserven su mesa solos y reciban su confirmación de inmediato sin que ustedes pierdan ventas por no contestar a tiempo. ¿Les muestro cómo se vería en 5 minutos?"
  },
  srtruhan: {
    whatsapp: "Hola amigos de Sr. Truhán! 🍸 ¿Cuánto tiempo pierden sus clientes esperando que les tomen otra ronda de tragos cuando el local está lleno en plena noche de show?\\n\\nLes diseñé una prueba con sus tapas y cócteles para que cada mesa pida directo a la barra escaneando un código QR y divida la cuenta sin esperar mesoneros:\\n👉 https://byte-bridge-tau.vercel.app/demos/srtruhan\\n\\n¿Les muestro cómo se siente en el teléfono en 5 minutos?",
    voice: "Qué tal, gente de Sr. Truhán, les habla Paul David. En noches de comedia o música con la sala llena, ¿cuánto tiempo pierden sus clientes esperando que un mesonero les tome otra ronda de tragos o tapas? Les monté un ejemplo con su propia carta donde cada mesa pide directo al bartender por código QR sin colas ni demoras. ¿Les muestro cómo se vería en 5 minutos?"
  },
  crispys_ve: {
    whatsapp: "Hola equipo de Crispy's! 🍗 ¿Cuánto margen están perdiendo al mes pagando hasta 25% de comisión por cada combo que despachan por apps de terceros?\\n\\nLes armé un ejemplo con sus tenders y combos familiares para que sus clientes pidan directo sin intermediarios y con total transparencia a tasa oficial:\\n👉 https://byte-bridge-tau.vercel.app/demos/crispys_ve\\n\\n¿Les muestro en 5 minutos cómo se vería para su delivery?",
    voice: "Hola equipo de Crispy's, les habla Paul David. ¿Cuánto dinero se les está yendo al mes pagando comisiones abusivas en apps de delivery por cada combo que venden? Les preparé un catálogo directo con sus buckets y tenders para que el cliente pida en 30 segundos, calcule en bolívares a tasa oficial y el pedido les llegue limpio a su WhatsApp con 0% de comisiones. ¿Les muestro en 5 minutos cómo funciona?"
  },
  enigmacafe_sc: {
    whatsapp: "Hola equipo de Enigma! ☕ ¿Cuántos mensajes y audios cruzan a diario solo para coordinar cómo un cliente quiere personalizar su tostada o bowl de açaí?\\n\\nLes preparé un ejemplo interactivo con sus desayunos y métodos de café para que el cliente arme su combinación en segundos desde el móvil:\\n👉 https://byte-bridge-tau.vercel.app/demos/enigmacafe_sc\\n\\n¿Les muestro en 5 minutos cómo les ahorraría tiempo en el chat?",
    voice: "Hola gente de Enigma Café, les habla Paul David. ¿Cuánto tiempo pierde su equipo en las mañanas respondiendo audios y mensajes explicando cómo armar las tostadas o qué lleva cada bowl de açaí? Les preparé un personalizador visual con sus opciones para que el cliente elija sus ingredientes paso a paso y la orden entre lista a barra sin confusiones. ¿Les muestro cómo funciona en 5 minutos?"
  },
  beaucoffee_sc: {
    whatsapp: "Hola amigos de Beau Coffee! 🥐 En las mañanas cuando la vitrina se llena, ¿cuántos clientes pierden tiempo haciendo fila solo para pedir un croissant y un café?\\n\\nLes diseñé una prueba en vivo para que el cliente se siente en mesa, ordene al instante con código QR y pague a tasa oficial sin levantarse:\\n👉 https://byte-bridge-tau.vercel.app/demos/beaucoffee_sc\\n\\n¿Les muestro en 5 minutos cómo funciona?",
    voice: "Hola equipo de Beau Coffee, les saluda Paul David. En las mañanas, ¿cuántos clientes se impacientan en la fila de caja solo para pedir un café y un croissant? Les armé una solución para que los comensales se sienten en su mesa, escaneen el menú, vean qué bollería está recién horneada y pidan de inmediato sin hacer fila. ¿Les muestro cómo se vería en 5 minutos?"
  },
  bruselas_sc: {
    whatsapp: "Hola equipo de Bruselas! 🧇 En horas de merienda, ¿cuántos minutos pierden en WhatsApp cuadrando si el cliente quiere salsa belga, Nutella, fresas o helado en su wafle?\\n\\nLes preparé un ejemplo visual donde el cliente diseña su wafle paso a paso y la comanda les entra perfecta a cocina:\\n👉 https://byte-bridge-tau.vercel.app/demos/bruselas_sc\\n\\n¿Les muestro cómo funciona en 5 minutos?",
    voice: "Hola equipo de Bruselas, les habla Paul David. En las tardes, cuando un cliente quiere wafles con tres toppings distintos, baño de chocolate y helado, ¿cuántos mensajes tienen que responder antes de cerrar la venta? Les monté un constructor donde el cliente elige masa, coberturas y frutas en pantalla con precio exacto al instante. ¿Les muestro cómo se vería en 5 minutos?"
  },
  momentossc: {
    whatsapp: "Hola gente de Momentos! ✨ Cuando un cliente les pide cotizar un desayuno sorpresa o cumpleaños, ¿cuántos mensajes tienen que intercambiar para cuadrar fecha, hora y dedicatoria?\\n\\nLes armé una propuesta interactiva con sus paquetes para que el cliente elija detalles, agende su día y reciba confirmación al momento:\\n👉 https://byte-bridge-tau.vercel.app/demos/momentossc\\n\\n¿Les muestro en 5 minutos cómo les liberaría horas de chat?",
    voice: "Hola equipo de Momentos, les habla Paul David. Cuando alguien les pide cotizar un cumpleaños o desayuno sorpresa, ¿cuánto tiempo tardan preguntando dedicatoria, globos, fecha y hora de entrega por mensajes sueltos? Les creé un cotizador con sus paquetes donde el cliente agenda su fecha, redacta su dedicatoria y paga en 3 clics. ¿Les muestro en 5 minutos cómo funciona?"
  },
  fratellopizzas_sc: {
    whatsapp: "Buenas noches equipo de Fratello Pizzas! 🍕 Los fines de semana en la noche, ¿cuántos clientes se cansan de esperar respuesta en WhatsApp para saber qué pizzas tienen y cuánto es en bolívares?\\n\\nLes preparé un menú directo con sus pizzas para que el cliente pida en 3 clics y el pedido les llegue listo a cocina sin errores de cálculo:\\n👉 https://byte-bridge-tau.vercel.app/demos/fratellopizzas_sc\\n\\n¿Les muestro en 5 minutos cómo les evitaría perder pedidos?",
    voice: "Buenas noches equipo de Fratello Pizzas, les habla Paul David. Los viernes y sábados por la noche, ¿cuántas ventas de pizzas se les caen porque el chat se llena de mensajes preguntando precios, sabores y la tasa del día? Les armé un catálogo directo con sus pizzas al horno de piedra donde el cliente pide solo con cálculo a tasa oficial en tiempo real. ¿Les muestro cómo se vería en 5 minutos?"
  },
  kala_cafesc: {
    whatsapp: "Buenas tardes equipo de Kala Café! 🌿 Cuando la terraza se llena en la tarde, ¿cuántos comensales se quedan esperando varios minutos a que alguien les acerque la carta?\\n\\nLes preparé una prueba con sus cafés de altura y repostería para que el comensal pida directo desde su mesa escaneando un código QR:\\n👉 https://byte-bridge-tau.vercel.app/demos/kala_cafesc\\n\\n¿Les muestro en 5 minutos cómo agiliza la rotación de mesas?",
    voice: "Buenas tardes equipo de Kala Café, les habla Paul David. En las tardes cuando la terraza mirador está llena, ¿cuántos comensales esperan de más porque el mesonero está atendiendo otra mesa? Les monté un sistema simple donde el cliente escanea el código en su mesa, pide sus cafés andinos y tortas y paga sin esperar que nadie se acerque. ¿Les muestro cómo se vería en 5 minutos?"
  },
  pa_picar_mas: {
    whatsapp: "Hola amigos de Pa' Picar Más! 🥟 Cuando les piden cotización para una fiesta o reunión, ¿cuántos audios y mensajes tienen que cruzar para ponerse de acuerdo en cantidades, salsas y hora de despacho?\\n\\nLes armé un cotizador con sus bandejas para que el cliente calcule su fiesta y agende la entrega en 3 clics:\\n👉 https://byte-bridge-tau.vercel.app/demos/pa_picar_mas\\n\\n¿Les muestro en 5 minutos cómo les facilitaría cotizar eventos?",
    voice: "Hola equipo de Pa' Picar Más, les saluda Paul David. Cuando alguien les pide cotizar pasapalos para una fiesta de 50 o 100 personas, ¿cuántos mensajes intercambian para definir cantidades de tequeños, pastelitos, salsas y hora de entrega? Les armé un cotizador directo con sus bandejas donde el cliente elige el combo y agenda el despacho en un minuto. ¿Les muestro cómo funciona en 5 minutos?"
  }
};

// 1. Actualizar demosData.ts
let demosContent = fs.readFileSync(demosDataPath, "utf-8");

for (const [slug, copyObj] of Object.entries(updates)) {
  const slugIndex = demosContent.indexOf(`"slug": "${slug}"`);
  if (slugIndex === -1) continue;
  
  const pitchKey = '"whatsappPitchCopy": "';
  const pitchStart = demosContent.indexOf(pitchKey, slugIndex);
  if (pitchStart === -1) continue;

  const valueStart = pitchStart + pitchKey.length;
  // Buscar fin del string teniendo en cuenta escape
  let valueEnd = valueStart;
  while (valueEnd < demosContent.length) {
    if (demosContent[valueEnd] === '"' && demosContent[valueEnd - 1] !== '\\') {
      break;
    }
    valueEnd++;
  }

  const before = demosContent.slice(0, valueStart);
  const after = demosContent.slice(valueEnd);
  demosContent = before + copyObj.whatsapp + after;
}

fs.writeFileSync(demosDataPath, demosContent, "utf-8");
console.log("✅ demosData.ts actualizado con los nuevos copies pain-first");

// 2. Actualizar DemosHubClient.tsx
let hubContent = fs.readFileSync(hubClientPath, "utf-8");

for (const [slug, copyObj] of Object.entries(updates)) {
  const key = `${slug}: "`;
  const keyIndex = hubContent.indexOf(key);
  if (keyIndex === -1) continue;

  const valStart = keyIndex + key.length;
  let valEnd = valStart;
  while (valEnd < hubContent.length) {
    if (hubContent[valEnd] === '"' && hubContent[valEnd - 1] !== '\\') {
      break;
    }
    valEnd++;
  }

  const before = hubContent.slice(0, valStart);
  const after = hubContent.slice(valEnd);
  hubContent = before + copyObj.voice.replace(/"/g, '\\"') + after;
}

fs.writeFileSync(hubClientPath, hubContent, "utf-8");
console.log("✅ DemosHubClient.tsx actualizado con los nuevos voice scripts pain-first");
