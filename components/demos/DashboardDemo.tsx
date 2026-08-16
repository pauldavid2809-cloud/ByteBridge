"use client";

import { useState } from "react";

const meses = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

const metricasMes = [
  { mes: "Mar", ventas: 3200, clientes: 45, tickets: 12 },
  { mes: "Abr", ventas: 4100, clientes: 58, tickets: 9 },
  { mes: "May", ventas: 3800, clientes: 52, tickets: 14 },
  { mes: "Jun", ventas: 5200, clientes: 71, tickets: 7 },
  { mes: "Jul", ventas: 4700, clientes: 63, tickets: 11 },
  { mes: "Ago", ventas: 6100, clientes: 84, tickets: 5 },
];

const ultimosMes = metricasMes[metricasMes.length - 1];
const anterior = metricasMes[metricasMes.length - 2];
const cambio = (((ultimosMes.ventas - anterior.ventas) / anterior.ventas) * 100).toFixed(1);

const actividadReciente = [
  { accion: "Nuevo pedido #1847", tipo: "ingreso", valor: "+$85", tiempo: "hace 2m" },
  { accion: "Cliente registrado: Ana M.", tipo: "usuario", valor: "", tiempo: "hace 8m" },
  { accion: "Pago recibido #1846", tipo: "ingreso", valor: "+$120", tiempo: "hace 15m" },
  { accion: "Stock bajo: Producto X", tipo: "alerta", valor: "⚠️", tiempo: "hace 31m" },
];

export function DashboardDemo() {
  const [mesActivo, setMesActivo] = useState(5);
  const maxVentas = Math.max(...metricasMes.map((m) => m.ventas));

  return (
    <div className="rounded-2xl border border-line bg-background overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-5 py-4 flex items-center justify-between border-b border-white/10">
        <div>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Dashboard</p>
          <h3 className="text-white font-bold text-lg">📊 Panel Empresarial</h3>
        </div>
        <span className="text-xs rounded-full bg-accent/20 text-accent border border-accent/30 px-3 py-1 font-semibold">
          🟢 En vivo
        </span>
      </div>

      <div className="p-4 space-y-4">
        {/* KPIs */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-line bg-surface p-3">
            <p className="text-xs text-muted">Ventas (Ago)</p>
            <p className="text-xl font-bold text-foreground mt-1">${(ultimosMes.ventas / 1000).toFixed(1)}k</p>
            <p className="text-xs text-accent mt-0.5">▲ {cambio}% vs mes ant.</p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-3">
            <p className="text-xs text-muted">Clientes</p>
            <p className="text-xl font-bold text-foreground mt-1">{ultimosMes.clientes}</p>
            <p className="text-xs text-accent mt-0.5">▲ {ultimosMes.clientes - anterior.clientes} nuevos</p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-3">
            <p className="text-xs text-muted">Tickets</p>
            <p className="text-xl font-bold text-foreground mt-1">{ultimosMes.tickets}</p>
            <p className="text-xs text-emerald-400 mt-0.5">▼ Menos que antes</p>
          </div>
        </div>

        {/* Gráfica de barras */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Ventas 6 meses</p>
          <div className="flex items-end gap-2 h-24">
            {metricasMes.map((m, i) => (
              <button
                key={m.mes}
                onClick={() => setMesActivo(i)}
                className="flex-1 flex flex-col items-center gap-1 group"
              >
                <div
                  className={`w-full rounded-t-md transition-all duration-300 ${
                    mesActivo === i ? "bg-accent" : "bg-accent/30 group-hover:bg-accent/60"
                  }`}
                  style={{ height: `${(m.ventas / maxVentas) * 100}%` }}
                />
                <span className={`text-[10px] transition-colors ${mesActivo === i ? "text-accent font-bold" : "text-muted"}`}>
                  {m.mes}
                </span>
              </button>
            ))}
          </div>
          {mesActivo !== null && (
            <p className="text-xs text-center text-muted mt-1">
              {metricasMes[mesActivo].mes}: <strong className="text-foreground">${metricasMes[mesActivo].ventas.toLocaleString()}</strong>
            </p>
          )}
        </div>

        {/* Actividad reciente */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Actividad reciente</p>
          <div className="space-y-2">
            {actividadReciente.map((a, i) => (
              <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-line/50 last:border-0">
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${
                    a.tipo === "ingreso" ? "bg-accent" :
                    a.tipo === "alerta" ? "bg-orange-400" :
                    "bg-blue-400"
                  }`} />
                  <span className="text-foreground/80">{a.accion}</span>
                </div>
                <div className="flex items-center gap-2">
                  {a.valor && <span className={a.tipo === "ingreso" ? "text-accent font-bold" : "text-orange-400"}>{a.valor}</span>}
                  <span className="text-muted">{a.tiempo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
