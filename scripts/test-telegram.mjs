import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

if (!token || !chatId) {
  console.error("❌ Faltan TELEGRAM_BOT_TOKEN o TELEGRAM_CHAT_ID en .env.local");
  process.exit(1);
}

console.log("Enviando mensaje de prueba a Telegram...");

const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    chat_id: chatId,
    text: "🚀 *¡Conexión Exitosa con ByteBridge!*\n\nTu bot `@Bytebridgeleadbot` está activo y vinculado. A partir de ahora recibirás alertas en tiempo real cada vez que un dueño abra su demo interactiva.",
    parse_mode: "Markdown",
  }),
});

const data = await res.json();
if (data.ok) {
  console.log("✅ ¡Mensaje enviado con éxito a tu Telegram personal!");
} else {
  console.log("⚠️ Respuesta de Telegram:", data.description);
  if (data.error_code === 400) {
    console.log("💡 Recuerda entrar a https://t.me/Bytebridgeleadbot y presionar el botón 'Iniciar' o enviar /start para autorizar al bot.");
  }
}
