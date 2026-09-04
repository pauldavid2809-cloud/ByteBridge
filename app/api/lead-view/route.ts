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

    // Si el usuario configura un Webhook en variables de entorno (ej: Telegram o Discord), se despacha silenciosamente
    const webhookUrl = process.env.LEAD_ALERT_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `🚨 **¡Alerta de Prospección ByteBridge!**\n**Negocio:** ${name} (\`${slug}\`)\n**Dispositivo:** ${device}\n**Hora Caracas:** ${timeStr}`,
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ success: true, loggedAt: timeStr });
  } catch (err: unknown) {
    return NextResponse.json({ success: false, error: (err as Error).message }, { status: 400 });
  }
}
