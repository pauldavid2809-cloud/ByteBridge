// CLI interactivo de Auditoría de Pérdidas (Loss-Audit) y Cotizador Rápido de ByteBridge
// Uso: node scripts/calculate-roi.mjs <NombreNegocio> <TicketUSD> <PedidosDiarios>

const businessName = process.argv[2] || "Tu Restaurante";
const ticketUSD = parseFloat(process.argv[3]) || 20;
const dailyOrders = parseInt(process.argv[4], 10) || 30;
const abandonmentRate = 0.12; // 12% promedio de fuga en WhatsApp en horas pico

// Cálculos
const dailyLoss = ticketUSD * dailyOrders * abandonmentRate;
const monthlyLoss = dailyLoss * 30;
const yearlyLoss = monthlyLoss * 12;

// Retorno de Inversión (ROI)
const expressPrice = 150;
const customPrice = 450;
const daysToRecoverExpress = (expressPrice / dailyLoss).toFixed(1);
const daysToRecoverCustom = (customPrice / dailyLoss).toFixed(1);

console.log("==================================================================");
console.log(`📊 AUDITORÍA DE PÉRDIDAS & ROI: ${businessName.toUpperCase()}`);
console.log("==================================================================");
console.log(`• Ticket promedio estimado: $${ticketUSD.toFixed(2)} USD`);
console.log(`• Pedidos/comensales por día: ${dailyOrders}`);
console.log(`• Fuga estimada en WhatsApp (12% por demoras en horas pico):`);
console.log(`   💸 Pérdida diaria: $${dailyLoss.toFixed(2)} USD`);
console.log(`   💸 Pérdida MENSUAL: $${monthlyLoss.toFixed(2)} USD`);
console.log(`   💸 Pérdida ANUAL: $${yearlyLoss.toFixed(2)} USD`);
console.log("------------------------------------------------------------------");
console.log("📈 RECUPERACIÓN DE INVERSIÓN (BYTEBRIDGE):");
console.log(`   ⚡ Landing Express ($${expressPrice}): Se paga sola en ${daysToRecoverExpress} DÍAS.`);
console.log(`   🚀 Sistema a Medida ($${customPrice}): Se paga solo en ${daysToRecoverCustom} DÍAS.`);
console.log("==================================================================");

console.log("\n📱 MENSAJE LISTO PARA PEGAR EN WHATSAPP:\n");
console.log(`Hola equipo de *${businessName}*! Estuvimos analizando el flujo de pedidos en su rubro.

Hicimos un cálculo conservador: con un ticket promedio de *$${ticketUSD}* y unos *${dailyOrders} pedidos/día*, si apenas un 10-12% de clientes se van por demoras en responder en horas pico, su local está dejando sobre la mesa más de *$${Math.round(monthlyLoss).toLocaleString()} USD al mes*.

Nuestras soluciones resuelven esa fuga desde la primera semana:

⚡ *Opción 1: Landing Express ($100–180 USD)*
Catálogo interactivo, fotos HD y pedido directo a WhatsApp a tasa oficial. Se paga sola en *${Math.ceil(daysToRecoverExpress)} días*.

🚀 *Opción 2: Sistema a Medida (Desde $400 USD)*
Reservas con código QR, comanda directa en mesa y panel gerencial en tiempo real. Se recupera en *${Math.ceil(daysToRecoverCustom)} días*.

¿Les gustaría que les muestre en 5 minutos cómo funciona?`);
