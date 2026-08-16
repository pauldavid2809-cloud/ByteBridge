"use client";

import { useState } from "react";

const pedidos = [
  { id: "PD-001", cliente: "María García", items: "2x Hamburguesa, 1x Papas", estado: 3, total: 24.5, tiempo: "18 min" },
  { id: "PD-002", cliente: "Carlos López", items: "1x Pizza Margarita", estado: 1, total: 12.0, tiempo: "5 min" },
  { id: "PD-003", cliente: "Ana Ruiz", items: "3x Combo Especial", estado: 4, total: 45.0, tiempo: "Entregado" },
];

const estados = [
  { paso: 1, label: "Recibido", icon: "📋" },
  { paso: 2, label: "Preparando", icon: "👨‍🍳" },
  { paso: 3, label: "En camino", icon: "🛵" },
  { paso: 4, label: "Entregado", icon: "✅" },
];

export function DeliveryDemo() {
  const [pedidoActivo, setPedidoActivo] = useState(pedidos[0].id);
  const pedido = pedidos.find((p) => p.id === pedidoActivo)!;

  return (
    <div className="rounded-2xl border border-line bg-background overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900/80 to-orange-900/80 px-5 py-4">
        <p className="text-xs text-red-300 font-medium uppercase tracking-wider">Tracking de Pedidos</p>
        <h3 className="text-white font-bold text-lg">🛵 FastFood Delivery</h3>
        <p className="text-red-200/70 text-xs mt-0.5">Panel de administración en tiempo real</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Lista de pedidos */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Pedidos activos</p>
          <div className="space-y-2">
            {pedidos.map((p) => (
              <button
                key={p.id}
                onClick={() => setPedidoActivo(p.id)}
                className={`w-full flex items-center justify-between rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
                  pedidoActivo === p.id ? "border-accent bg-accent/5" : "border-line hover:border-accent/40"
                }`}
              >
                <div>
                  <p className="text-xs font-bold text-accent">{p.id}</p>
                  <p className="text-sm font-semibold">{p.cliente}</p>
                  <p className="text-xs text-muted">{p.items}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">${p.total.toFixed(2)}</p>
                  <span className={`text-xs rounded-full px-2 py-0.5 font-semibold ${
                    p.estado === 4 ? "bg-accent/20 text-accent" :
                    p.estado === 3 ? "bg-orange-500/20 text-orange-400" :
                    p.estado === 2 ? "bg-yellow-500/20 text-yellow-400" :
                    "bg-blue-500/20 text-blue-400"
                  }`}>
                    {estados[p.estado - 1].icon} {estados[p.estado - 1].label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Tracker del pedido activo */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
            Seguimiento · {pedido.id}
          </p>
          <div className="relative">
            {/* Línea de progreso */}
            <div className="absolute top-5 left-5 right-5 h-0.5 bg-line">
              <div
                className="h-full bg-accent transition-all duration-700"
                style={{ width: `${((pedido.estado - 1) / 3) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-4 gap-2 relative">
              {estados.map((e) => (
                <div key={e.paso} className="flex flex-col items-center gap-2">
                  <div className={`h-10 w-10 rounded-full border-2 flex items-center justify-center text-lg transition-all duration-300 ${
                    e.paso <= pedido.estado
                      ? "border-accent bg-accent/20 text-accent scale-110"
                      : "border-line bg-surface text-muted/40"
                  }`}>
                    {e.icon}
                  </div>
                  <p className={`text-xs text-center leading-tight transition-colors ${
                    e.paso <= pedido.estado ? "text-foreground font-semibold" : "text-muted"
                  }`}>
                    {e.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm">
            <p className="font-semibold text-accent">
              {estados[pedido.estado - 1].icon} {estados[pedido.estado - 1].label}
            </p>
            <p className="text-xs text-muted mt-0.5">
              {pedido.estado === 3 ? `Llegando en ~${pedido.tiempo}` :
               pedido.estado === 4 ? "¡Pedido entregado exitosamente!" :
               pedido.estado === 2 ? "Tu pedido se está preparando..." :
               "Pedido recibido, procesando..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
