"use client";

import { useState } from "react";

const mesas = [
  { id: 1, num: "Mesa 1", cap: 2, tipo: "interior" },
  { id: 2, num: "Mesa 2", cap: 4, tipo: "interior" },
  { id: 3, num: "Mesa 3", cap: 4, tipo: "interior" },
  { id: 4, num: "Mesa 4", cap: 6, tipo: "interior" },
  { id: 5, num: "Mesa 5", cap: 2, tipo: "terraza" },
  { id: 6, num: "Mesa 6", cap: 4, tipo: "terraza" },
  { id: 7, num: "Mesa 7", cap: 8, tipo: "privado" },
];

const horasDisp = ["12:00", "13:00", "14:00", "19:00", "20:00", "21:00"];
const horasOcupadas = ["13:00", "20:00"];

export function ReservasDemo() {
  const [personas, setPersonas] = useState(2);
  const [hora, setHora] = useState("");
  const [mesa, setMesa] = useState<number | null>(null);
  const [nombre, setNombre] = useState("");
  const [confirmado, setConfirmado] = useState(false);

  const mesasFiltradas = mesas.filter((m) => m.cap >= personas);
  const mesaSeleccionada = mesas.find((m) => m.id === mesa);

  return (
    <div className="rounded-2xl border border-line bg-background overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900/80 to-teal-900/80 px-5 py-4">
        <p className="text-xs text-emerald-300 font-medium uppercase tracking-wider">Reservas Online</p>
        <h3 className="text-white font-bold text-lg">🍷 Restaurante El Origen</h3>
        <p className="text-emerald-200/70 text-xs mt-0.5">Reserva tu mesa en 30 segundos</p>
      </div>

      <div className="p-4">
        {confirmado ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <div className="text-5xl">🎉</div>
            <p className="text-lg font-bold">¡Reserva confirmada!</p>
            <p className="text-sm text-muted">Hola {nombre}, te esperamos.</p>
            <div className="rounded-xl border border-accent/30 bg-accent/5 px-5 py-3 text-sm text-left w-full space-y-1">
              <p>👤 <strong>{nombre}</strong> · {personas} personas</p>
              <p>🕐 Hoy a las <strong>{hora}</strong></p>
              <p>🪑 {mesaSeleccionada?.num} ({mesaSeleccionada?.tipo})</p>
            </div>
            <button
              onClick={() => { setConfirmado(false); setMesa(null); setHora(""); setNombre(""); }}
              className="mt-2 text-sm text-accent underline underline-offset-4"
            >
              Nueva reserva
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Personas */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">¿Cuántos son?</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setPersonas(Math.max(1, personas - 1))}
                  className="h-9 w-9 rounded-full border border-line text-lg font-bold hover:border-accent/60 transition-colors"
                >
                  −
                </button>
                <span className="text-2xl font-bold w-8 text-center">{personas}</span>
                <button
                  onClick={() => setPersonas(Math.min(8, personas + 1))}
                  className="h-9 w-9 rounded-full border border-line text-lg font-bold hover:border-accent/60 transition-colors"
                >
                  +
                </button>
                <span className="text-sm text-muted ml-1">persona{personas > 1 ? "s" : ""}</span>
              </div>
            </div>

            {/* Hora */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Horario</p>
              <div className="flex flex-wrap gap-2">
                {horasDisp.map((h) => {
                  const ocupado = horasOcupadas.includes(h);
                  return (
                    <button
                      key={h}
                      disabled={ocupado}
                      onClick={() => setHora(h)}
                      className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                        ocupado ? "border-line text-muted/40 line-through cursor-not-allowed" :
                        hora === h ? "border-accent bg-accent text-accent-ink" :
                        "border-line hover:border-accent/60"
                      }`}
                    >
                      {h} {ocupado ? "· Lleno" : ""}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mesa */}
            {hora && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                  Mesas disponibles para {personas}+
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {mesasFiltradas.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setMesa(m.id)}
                      className={`rounded-xl border py-2.5 text-xs text-center transition-all duration-200 ${
                        mesa === m.id ? "border-accent bg-accent/10 font-bold" : "border-line hover:border-accent/50"
                      }`}
                    >
                      <p className="font-semibold">{m.num}</p>
                      <p className="text-muted">👥 {m.cap} · {m.tipo}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Nombre */}
            {mesa && hora && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Tu nombre</p>
                <input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="¿A nombre de quién?"
                  className="w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            )}

            {nombre && mesa && hora && (
              <button
                onClick={() => setConfirmado(true)}
                className="w-full rounded-xl bg-accent py-3 text-accent-ink text-sm font-bold hover:bg-accent-strong transition-colors"
              >
                Confirmar reserva →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
