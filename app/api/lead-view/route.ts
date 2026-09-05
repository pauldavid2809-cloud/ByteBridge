import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

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
      const escapeHtml = (str: string) =>
        (str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

      const safeName = escapeHtml(name || slug);
      const safeDevice = escapeHtml(device || "Móvil");
      const safeTime = escapeHtml(timeStr);
      const safeReferrer = escapeHtml(referrer || "Directo");
      const safeSlug = encodeURIComponent(slug);

      const htmlText =
        `🚨 <b>¡Alerta en Caliente ByteBridge!</b>\n\n` +
        `El prospecto <b>${safeName}</b> acaba de abrir su demo en vivo.\n\n` +
        `📱 <b>Dispositivo:</b> ${safeDevice}\n` +
        `📍 <b>Origen / Campaña:</b> ${safeReferrer}\n` +
        `🕒 <b>Hora Caracas:</b> ${safeTime}\n` +
        `🔗 <b>Ver Demo:</b> https://byte-bridge-tau.vercel.app/demos/${safeSlug}`;

      try {
        const tgRes = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: htmlText,
            parse_mode: "HTML",
          }),
        });

        const tgData = await tgRes.json();
        if (!tgData.ok) {
          console.error("❌ Error de Telegram Bot API:", tgData);
        } else {
          console.log(`✅ Alerta de Telegram enviada con éxito para ${name || slug}`);
        }
      } catch (tgErr) {
        console.error("❌ Error de red conectando con Telegram API:", tgErr);
      }
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
