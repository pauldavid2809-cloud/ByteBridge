"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BusinessDemo, BCV_RATE } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
  onExitManagerMode: () => void;
};

export function ManagerDashboard({ demo, onExitManagerMode }: Props) {
  const [bookings, setBookings] = useState(demo.sampleBookings);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{
    code: string;
    name: string;
    plan: string;
    pax: number;
    status: string;
  } | null>(null);

  const handleUpdateStatus = (
    id: string,
    newStatus: "confirmada" | "en_mesa" | "pendiente"
  ) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  const handleSimulateScan = () => {
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        code: `PASS-${Math.floor(1000 + Math.random() * 9000)}`,
        name: "Mariana Albornoz",
        plan: demo.bookingOptions[0]?.name || "Reserva VIP",
        pax: 4,
        status: "Pase Válido y Activo",
      });
    }, 1500);
  };

  const todaySalesVES = demo.managerKpis.todaySalesUSD * BCV_RATE;

  return (
    <section className="min-h-screen bg-zinc-950 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Cabecera del Panel de Gerente */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-amber-400 px-2 py-0.5 text-xs font-black text-black">
                MODO GERENTE
              </span>
              <h2 className="text-xl font-black text-white sm:text-2xl">
                Panel de Control · {demo.name}
              </h2>
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              Vista administrativa en tiempo real: control de aforo, validación de pases QR y comandas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onExitManagerMode}
              className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-white/20"
            >
              ← Volver a Vista Cliente
            </button>
          </div>
        </div>

        {/* KPIs del Día */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
            <span className="text-xs text-zinc-400">Reservas Activas</span>
            <p className="mt-1 text-2xl font-black text-white">
              {demo.managerKpis.activeReservations}
            </p>
            <span className="text-[10px] font-semibold text-emerald-400">
              ● 4 pendientes de llegada
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
            <span className="text-xs text-zinc-400">Aforo en Sala</span>
            <p className="mt-1 text-2xl font-black text-amber-400">
              {demo.managerKpis.capacityPercentage}%
            </p>
            <span className="text-[10px] text-zinc-400">Capacidad óptima</span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
            <span className="text-xs text-zinc-400">Ventas Estimadas Hoy</span>
            <p className="mt-1 text-2xl font-black text-emerald-400">
              ${demo.managerKpis.todaySalesUSD}
            </p>
            <span className="font-mono text-[10px] text-zinc-400">
              ≈ {todaySalesVES.toLocaleString("es-VE", { maximumFractionDigits: 0 })} Bs
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
            <span className="text-xs text-zinc-400">Ticket Promedio</span>
            <p className="mt-1 text-2xl font-black text-white">
              ${demo.managerKpis.avgTicketUSD}
            </p>
            <span className="text-[10px] text-emerald-400">+18% vs semana anterior</span>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Feed de Reservas en Vivo */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300">
                📋 Reservas & Pases del Día:
              </h3>
              <span className="text-xs font-semibold text-zinc-400">
                Tasa BCV: {BCV_RATE} Bs/$
              </span>
            </div>

            <div className="space-y-3">
              {bookings.map((b) => (
                <div
                  key={b.id}
                  className="rounded-2xl border border-white/10 bg-zinc-900/90 p-4.5 transition-all hover:border-white/20"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-amber-400">
                          #{b.id}
                        </span>
                        <h4 className="text-sm font-bold text-white">
                          {b.clientName}
                        </h4>
                      </div>
                      <p className="mt-1 text-xs text-zinc-300">{b.details}</p>
                      <p className="mt-0.5 text-[11px] text-zinc-500">
                        Hora estimada: {b.time} · {b.pax} Personas
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-sm font-bold text-emerald-400">
                        ${b.totalUSD} USD
                      </span>
                      <div className="mt-1">
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                            b.status === "en_mesa"
                              ? "bg-emerald-500/20 text-emerald-300"
                              : b.status === "confirmada"
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-amber-500/20 text-amber-300"
                          }`}
                        >
                          {b.status === "en_mesa"
                            ? "En Sala / Mesa"
                            : b.status === "confirmada"
                            ? "Confirmada"
                            : "Pendiente"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Acciones de Estado del Gerente */}
                  <div className="mt-3 flex items-center gap-2 border-t border-white/5 pt-3">
                    <button
                      onClick={() => handleUpdateStatus(b.id, "en_mesa")}
                      className="rounded-lg bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400 hover:bg-emerald-500/20"
                    >
                      ✓ Marcar en Mesa
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(b.id, "confirmada")}
                      className="rounded-lg bg-blue-500/10 px-2.5 py-1 text-[11px] font-semibold text-blue-400 hover:bg-blue-500/20"
                    >
                      Confirmar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lector Óptico / Escáner QR de Puerta */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300">
              📷 Escáner Óptico de Pases QR:
            </h3>

            <div className="rounded-2xl border border-white/15 bg-zinc-900/90 p-5 text-center shadow-xl">
              {/* Visor de Cámara Simulado */}
              <div className="relative mx-auto flex h-48 w-full max-w-xs items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-white/20 bg-black">
                {isScanning ? (
                  <>
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-bounce" />
                    <span className="text-xs font-mono text-emerald-400 animate-pulse">
                      Escaneando código QR...
                    </span>
                  </>
                ) : scanResult ? (
                  <div className="p-3 text-center">
                    <span className="text-3xl">✅</span>
                    <p className="mt-1 font-mono text-xs font-bold text-emerald-400">
                      {scanResult.code}
                    </p>
                    <p className="text-xs font-bold text-white">{scanResult.name}</p>
                    <p className="text-[10px] text-zinc-400">
                      {scanResult.plan} · {scanResult.pax} pax
                    </p>
                  </div>
                ) : (
                  <div className="text-zinc-500">
                    <span className="text-3xl">📷</span>
                    <p className="mt-1 text-xs">Visor de Escaneo QR Listo</p>
                  </div>
                )}
              </div>

              <button
                onClick={handleSimulateScan}
                disabled={isScanning}
                className="mt-4 w-full rounded-xl bg-amber-400 py-3 text-xs font-bold text-black shadow-lg shadow-amber-400/20 transition-all active:scale-95 disabled:opacity-50"
              >
                {isScanning ? "Validando en sistema..." : "Simular Escaneo de Pase en Puerta"}
              </button>

              <p className="mt-3 text-[11px] text-zinc-500">
                Permite al personal de puerta o capitanes de mesoneros validar pases en menos de 1 segundo desde cualquier celular.
              </p>
            </div>

            {/* Banner de Cierre de Propuesta */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Solución Desarrollada por ByteBridge
              </span>
              <h4 className="mt-1 text-sm font-bold text-white">
                ¿Quieres implementar este sistema en tu negocio?
              </h4>
              <p className="mt-1 text-xs text-zinc-300">
                Automatiza reservas, elimina duplicidades y ofrece menú digital con cobro multimoneda.
              </p>
              <a
                href="https://wa.me/584121662998?text=Hola%20Paul,%20estuve%20viendo%20la%20demo%20y%20quiero%20implementar%20este%20sistema"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-black shadow transition-all hover:bg-emerald-400"
              >
                <span>💬</span>
                <span>Hablar con Paul David (ByteBridge)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
