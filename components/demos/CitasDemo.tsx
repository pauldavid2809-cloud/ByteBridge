"use client";

import { useState } from "react";
import { QrModal } from "@/components/ui/QrModal";

const servicios = ["Corte de cabello", "Barba", "Corte + Barba", "Coloración", "Tratamiento"];
const horarios = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];
const barberos = [
  { id: 1, nombre: "Carlos M.", emoji: "💈", rating: "4.9" },
  { id: 2, nombre: "Luis R.", emoji: "✂️", rating: "4.8" },
  { id: 3, nombre: "Diego P.", emoji: "🪒", rating: "4.7" },
];

const diasSemana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

type Paso = 1 | 2 | 3 | 4;

export function CitasDemo() {
  const [paso, setPaso] = useState<Paso>(1);
  const [servicio, setServicio] = useState("");
  const [barbero, setBarbero] = useState<number | null>(null);
  const [dia, setDia] = useState<number | null>(null);
  const [hora, setHora] = useState("");
  const [confirmado, setConfirmado] = useState(false);
  const [mostrarQr, setMostrarQr] = useState(false);

  const horariosOcupados = ["10:00", "14:30", "16:00"];
  const hoy = new Date().getDay(); // 0 = domingo

  return (
    <div className="rounded-2xl border border-line bg-background overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-900/80 to-purple-900/80 px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-violet-300 font-medium uppercase tracking-wider">Agenda de Citas</p>
            <h3 className="text-white font-bold text-lg">Barbería Elite</h3>
          </div>
          <button
            onClick={() => setMostrarQr(true)}
            className="inline-flex items-center gap-1 rounded-full border border-violet-300/40 bg-violet-400/20 px-2.5 py-1 text-[11px] font-bold text-violet-200 hover:bg-violet-400/30 transition-colors"
          >
            📲 QR Pase Cita
          </button>
        </div>

        <QrModal
          isOpen={mostrarQr}
          onClose={() => setMostrarQr(false)}
          title="Pase QR · Agenda Online"
          subtitle="Escanea con tu teléfono para agendar y sincronizar tu cita directamente en tu calendario"
          tableOrContextLabel="Pase Digital · Barbería Elite"
          qrValue="https://bytebridge.cloud/#soluciones"
        />

        {/* Progreso */}
        <div className="mt-3 flex gap-1.5">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${n <= paso ? "bg-accent" : "bg-white/20"}`}
            />
          ))}
        </div>
      </div>

      <div className="p-4">
        {confirmado ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <div className="text-5xl">✅</div>
            <p className="text-lg font-bold">¡Cita confirmada!</p>
            <p className="text-sm text-muted">Recibirás un recordatorio por WhatsApp 1 hora antes.</p>
            <div className="rounded-xl border border-accent/30 bg-accent/5 px-5 py-3 text-sm text-left w-full">
              <p>📋 <strong>{servicio}</strong></p>
              <p>💈 {barberos.find((b) => b.id === barbero)?.nombre}</p>
              <p>📅 {diasSemana[dia ?? 0]}, {hora}</p>
            </div>
            <button
              onClick={() => { setConfirmado(false); setPaso(1); setServicio(""); setBarbero(null); setDia(null); setHora(""); }}
              className="mt-2 text-sm text-accent underline underline-offset-4"
            >
              Agendar otra cita
            </button>
          </div>
        ) : (
          <>
            {/* Paso 1: Servicio */}
            {paso === 1 && (
              <div>
                <p className="text-sm font-semibold mb-3">¿Qué servicio necesitas?</p>
                <div className="flex flex-col gap-2">
                  {servicios.map((s) => (
                    <button
                      key={s}
                      onClick={() => { setServicio(s); setPaso(2); }}
                      className={`rounded-xl border px-4 py-2.5 text-sm text-left transition-all duration-200 hover:border-accent/60 hover:bg-accent/5 ${
                        servicio === s ? "border-accent bg-accent/5 font-semibold" : "border-line"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Paso 2: Barbero */}
            {paso === 2 && (
              <div>
                <p className="text-sm font-semibold mb-3">Elige tu barbero</p>
                <div className="flex flex-col gap-3">
                  {barberos.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => { setBarbero(b.id); setPaso(3); }}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200 hover:border-accent/60 ${
                        barbero === b.id ? "border-accent bg-accent/5" : "border-line"
                      }`}
                    >
                      <span className="text-2xl">{b.emoji}</span>
                      <div>
                        <p className="text-sm font-semibold">{b.nombre}</p>
                        <p className="text-xs text-muted">⭐ {b.rating} · Disponible hoy</p>
                      </div>
                    </button>
                  ))}
                </div>
                <button onClick={() => setPaso(1)} className="mt-3 text-xs text-muted underline underline-offset-4">← Atrás</button>
              </div>
            )}

            {/* Paso 3: Día */}
            {paso === 3 && (
              <div>
                <p className="text-sm font-semibold mb-3">¿Qué día?</p>
                <div className="grid grid-cols-6 gap-1.5">
                  {diasSemana.map((d, i) => (
                    <button
                      key={d}
                      onClick={() => { setDia(i); setPaso(4); }}
                      className={`rounded-xl border py-3 text-xs font-semibold transition-all duration-200 ${
                        dia === i ? "border-accent bg-accent text-accent-ink" : "border-line hover:border-accent/60"
                      } ${i < hoy - 1 ? "opacity-30 cursor-not-allowed" : ""}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
                <button onClick={() => setPaso(2)} className="mt-3 text-xs text-muted underline underline-offset-4">← Atrás</button>
              </div>
            )}

            {/* Paso 4: Hora */}
            {paso === 4 && (
              <div>
                <p className="text-sm font-semibold mb-3">Selecciona el horario</p>
                <div className="grid grid-cols-4 gap-2">
                  {horarios.map((h) => {
                    const ocupado = horariosOcupados.includes(h);
                    return (
                      <button
                        key={h}
                        disabled={ocupado}
                        onClick={() => setHora(h)}
                        className={`rounded-xl border py-2 text-xs font-medium transition-all duration-200 ${
                          ocupado ? "border-line text-muted/40 cursor-not-allowed line-through" :
                          hora === h ? "border-accent bg-accent text-accent-ink" :
                          "border-line hover:border-accent/60"
                        }`}
                      >
                        {h}
                      </button>
                    );
                  })}
                </div>
                {hora && (
                  <button
                    onClick={() => setConfirmado(true)}
                    className="mt-4 w-full rounded-xl bg-accent py-2.5 text-accent-ink text-sm font-bold hover:bg-accent-strong transition-colors"
                  >
                    Confirmar cita a las {hora}
                  </button>
                )}
                <button onClick={() => setPaso(3)} className="mt-2 text-xs text-muted underline underline-offset-4">← Atrás</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
