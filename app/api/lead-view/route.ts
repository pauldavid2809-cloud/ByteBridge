import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slug, name, device, referrer, timestamp } = body;

    const timeStr = new Date(timestamp || Date.now()).toLocaleTimeString("es-VE", {
      timeZone: "America/Caracas",
      hour12: true,
    });

    console.log(
      `🔔 [LEAD ALERT] (${timeStr}) ¡El prospecto "${name || slug}" (${slug}) está viendo su demo en vivo desde ${device || "móvil"}! [Ref: ${referrer || "WhatsApp"}]`
    );

    // 1. Notificación a Telegram Bot (si TELEGRAM_BOT_TOKEN y TELEGRAM_CHAT_ID están configurados)
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramBotToken && telegramChatId) {
      const telegramText =
        `🚨 *¡Alerta en Caliente ByteBridge!*\n\n` +
        `El prospecto *${name || slug}* acaba de abrir su demo en vivo.\n\n` +
        `📱 *Dispositivo:* ${device || "Móvil"}\n` +
        `🕒 *Hora Caracas:* ${timeStr}\n` +
        `🔗 *Ver Demo:* https://byte-bridge-tau.vercel.app/demos/${slug}`;

      fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: telegramText,
          parse_mode: "Markdown",
        }),
      }).catch((err) => {
        console.error("Error enviando alerta a Telegram:", err);
      });
    }

    // 2. Webhook genérico opcional (Discord / Slack / Make)
    const webhookUrl = process.env.LEAD_ALERT_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `🚨 **¡Alerta de Prospección ByteBridge!**\n**Negocio:** ${name} (\`${slug}\`)\n**Dispositivo:** ${device}\n**Hora Caracas:** ${timeStr}\n**Demo:** https://byte-bridge-tau.vercel.app/demos/${slug}`,
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ success: true, loggedAt: timeStr });
  } catch (err: unknown) {
    return NextResponse.json({ success: false, error: (err as Error).message }, { status: 400 });
  }
}
