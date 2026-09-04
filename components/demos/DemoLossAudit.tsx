"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BusinessDemo } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
};

export function DemoLossAudit({ demo }: Props) {
  // Usar avgTicketUSD de los KPIs gerenciales o calcularlo desde menuItems
  const defaultTicket =
    demo.managerKpis?.avgTicketUSD ||
    Math.round(
      (demo.menuItems || []).reduce((acc: number, curr) => acc + curr.priceUSD, 0) /
        ((demo.menuItems || []).length || 1)
    ) ||
    20;

  const [ticketUSD, setTicketUSD] = useState<number>(Math.max(10, defaultTicket));
  const [dailyOrders, setDailyOrders] = useState<number>(30);

  // 12% de abandono de clientes por tardanza en responder en horas pico
  const abandonmentRate = 0.12;
  const dailyLoss = ticketUSD * dailyOrders * abandonmentRate;
  const monthlyLoss = dailyLoss * 30;

  const expressPrice = 150;
  const customPrice = 450;
  const daysToExpress = Math.max(1, Math.ceil(expressPrice / (dailyLoss || 1)));
  const daysToCustom = Math.max(1, Math.ceil(customPrice / (dailyLoss || 1)));

  const whatsappMessage = encodeURIComponent(
    `Hola Paul! Estuve viendo la calculadora de ROI en la demo de ${demo.name}. Calculamos una pérdida de ~$${Math.round(monthlyLoss).toLocaleString()} USD/mes en horas pico. ¿Cuándo podemos ver en 5 minutos cómo implementar la solución?`
  );

  return (
    <section className="relative overflow-hidden border-t border-b border-white/10 bg-zinc-950 py-16 sm:py-24">
      {/* Glow radial de fondo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[500px] w-[600px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: `radial-gradient(circle, ${demo.palette.primary} 0%, ${demo.palette.accent} 50%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        {/* Cabecera de la sección */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1.5 text-xs font-extrabold text-red-400">
            <span>💸</span>
            <span>Auditoría de Fuga Operativa</span>
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-4xl">
            ¿Cuánto dinero pierde{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, #FFFFFF, ${demo.palette.accent})`,
              }}
            >
              {demo.name}
            </span>{" "}
            por demoras en WhatsApp?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm text-zinc-400">
            En horas pico de viernes y fines de semana, un promedio del 10% al 15% de
            comensales se van a la competencia si tardan más de 10 minutos en pasarles la
            carta o confirmar su mesa. Mueve los valores para simular tu local:
          </p>
        </div>

        {/* Tarjeta Interactiva de Cálculo */}
        <div className="mt-10 rounded-3xl border border-white/15 bg-zinc-900/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Controles: Sliders */}
            <div className="space-y-6">
              {/* Slider 1: Ticket Promedio */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-zinc-300">
                  <span>Ticket promedio por comensal/pedido:</span>
                  <span className="font-mono text-base font-black text-white">
                    ${ticketUSD} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="70"
                  step="1"
                  value={ticketUSD}
                  onChange={(e) => setTicketUSD(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-emerald-400"
                />
                <div className="mt-1 flex justify-between text-[10px] text-zinc-500">
                  <span>$8 (Comida rápida)</span>
                  <span>$70 (Alta cocina)</span>
                </div>
              </div>

              {/* Slider 2: Pedidos / Mesas al Día */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-zinc-300">
                  <span>Pedidos o mesas atendidas por día:</span>
                  <span className="font-mono text-base font-black text-white">
                    {dailyOrders} pedidos/día
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="120"
                  step="5"
                  value={dailyOrders}
                  onChange={(e) => setDailyOrders(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-emerald-400"
                />
                <div className="mt-1 flex justify-between text-[10px] text-zinc-500">
                  <span>10 (Boutique)</span>
                  <span>120 (Alto volumen)</span>
                </div>
              </div>

              {/* Nota de contexto */}
              <div className="rounded-2xl border border-white/5 bg-black/40 p-4 text-[11px] leading-relaxed text-zinc-400">
                <span className="font-bold text-zinc-300">⚡ Fórmula de impacto:</span> Al
                automatizar pedidos en mesa y reservas sin comisiones de apps externas,
                conviertes el tráfico de Instagram y sala en ventas seguras sin intermediarios.
              </div>
            </div>

            {/* Resultados Financieros en Vivo */}
            <div className="flex flex-col justify-between rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-500/10 to-transparent p-6 text-center md:text-left">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-400">
                  Fuga Estimada por Respuestas Tardías
                </span>
                <div className="mt-2 text-3xl font-black text-white sm:text-5xl">
                  -${Math.round(monthlyLoss).toLocaleString()}{" "}
                  <span className="text-xs sm:text-base font-bold text-red-400">
                    USD / mes
                  </span>
                </div>
                <p className="mt-2 text-xs text-zinc-400">
                  Aproximadamente <strong className="text-white">${Math.round(dailyLoss)} USD</strong> que
                  se pierden cada día en ventas no concretadas.
                </p>
              </div>

              {/* Tiempos de Recuperación de Inversión */}
              <div className="mt-6 border-t border-white/10 pt-4 space-y-2.5">
                <div className="flex items-center justify-between rounded-xl bg-zinc-950/80 px-3.5 py-2 text-xs">
                  <span className="text-zinc-300">⚡ Landing Express ($100–180):</span>
                  <span className="font-bold text-emerald-400">
                    Se paga en {daysToExpress} {daysToExpress === 1 ? "día" : "días"}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-zinc-950/80 px-3.5 py-2 text-xs">
                  <span className="text-zinc-300">🚀 Sistema a Medida (desde $400):</span>
                  <span className="font-bold text-emerald-400">
                    Se paga en {daysToCustom} {daysToCustom === 1 ? "día" : "días"}
                  </span>
                </div>
              </div>

              {/* Botón de Contacto Directo */}
              <a
                href={`https://wa.me/584120308674?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-xs font-black text-black shadow-lg shadow-emerald-500/25 transition-all active:scale-[0.98] hover:bg-emerald-400"
              >
                <span>💬</span>
                <span>Detener Esta Fuga en {demo.name}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
