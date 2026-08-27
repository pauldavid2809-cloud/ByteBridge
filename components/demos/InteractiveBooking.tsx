"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BusinessDemo, BookingOption, BCV_RATE, CurrencyMode } from "@/data/demosData";
import { AnimateOnScroll } from "@/components/demos/AnimateOnScroll";

type Props = {
  demo: BusinessDemo;
  currency: CurrencyMode;
  onGenerateQrTicket: (bookingData: {
    option: BookingOption;
    date: string;
    time: string;
    pax: number;
    name: string;
    phone: string;
    notes: string;
    totalUSD: number;
  }) => void;
};

export function InteractiveBooking({ demo, currency, onGenerateQrTicket }: Props) {
  const [selectedOption, setSelectedOption] = useState<BookingOption>(
    demo.bookingOptions[0]
  );
  const [selectedDate, setSelectedDate] = useState<string>("Hoy");
  const [selectedTime, setSelectedTime] = useState<string>("07:30 PM");
  const [pax, setPax] = useState<number>(2);
  const [clientName, setClientName] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [clientNotes, setClientNotes] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const timeSlots = [
    "12:30 PM",
    "02:00 PM",
    "05:30 PM",
    "07:30 PM",
    "08:30 PM",
    "09:30 PM",
    "11:00 PM",
  ];

  const dateOptions = ["Hoy", "Mañana", "Viernes", "Sábado", "Domingo"];

  const totalUSD =
    selectedOption.unit.includes("persona")
      ? selectedOption.priceUSD * pax
      : selectedOption.priceUSD;

  const totalVES = totalUSD * BCV_RATE;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setErrorMsg("Por favor ingresa tu nombre completo.");
      return;
    }
    if (!clientPhone.trim()) {
      setErrorMsg("Por favor ingresa tu número de WhatsApp.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onGenerateQrTicket({
        option: selectedOption,
        date: selectedDate,
        time: selectedTime,
        pax,
        name: clientName,
        phone: clientPhone,
        notes: clientNotes,
        totalUSD,
      });
    }, 500);
  };

  return (
    <section
      id="reservas"
      className="scroll-mt-20 border-b border-white/10 bg-zinc-900/50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Encabezado de la Sección */}
        <AnimateOnScroll className="text-center">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm"
            style={{ backgroundColor: demo.palette.primary }}
          >
            Módulo de Reservaciones
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-4xl">
            {demo.bookingTitle}
          </h2>
          <p className="mt-2 text-sm text-zinc-400 sm:text-base">
            {demo.bookingSubtitle}
          </p>
        </AnimateOnScroll>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Columna Izquierda: Selección de Plan / Opción */}
          <div className="space-y-4 lg:col-span-7">
            <AnimateOnScroll delay={0.05}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                1. Selecciona tu tipo de experiencia o reserva:
              </h3>
            </AnimateOnScroll>

            <div className="space-y-3">
              {demo.bookingOptions.map((opt, idx) => {
                const isSelected = selectedOption.id === opt.id;
                const priceFormatted =
                  currency === "USD"
                    ? `$${opt.priceUSD}`
                    : `${(opt.priceUSD * BCV_RATE).toLocaleString("es-VE", {
                        maximumFractionDigits: 2,
                      })} Bs`;

                return (
                  <AnimateOnScroll key={opt.id} delay={0.08 + idx * 0.05}>
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedOption(opt)}
                      className={`relative cursor-pointer rounded-2xl border p-4.5 transition-all sm:p-5 ${
                        isSelected
                          ? "bg-zinc-800/90 shadow-lg shadow-black/50"
                          : "border-white/10 bg-zinc-950/60 hover:border-white/20 hover:bg-zinc-900/60"
                      }`}
                      style={{
                        borderColor: isSelected ? demo.palette.accent : undefined,
                      }}
                    >
                      {opt.badge && (
                        <span
                          className="absolute -top-2.5 right-4 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black shadow"
                          style={{ backgroundColor: demo.palette.accent }}
                        >
                          {opt.badge}
                        </span>
                      )}

                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-base font-bold text-white">
                            {opt.name}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                            {opt.description}
                          </p>
                        </div>

                        <div className="text-right">
                          <span className="text-lg font-black text-white sm:text-xl">
                            {priceFormatted}
                          </span>
                          <p className="text-[11px] text-zinc-400">{opt.unit}</p>
                        </div>
                      </div>

                      {/* Características incluidas */}
                      {opt.features && opt.features.length > 0 && (
                        <div className="mt-3.5 flex flex-wrap gap-2 border-t border-white/10 pt-3">
                          {opt.features.map((feat, fIdx) => (
                            <span
                              key={fIdx}
                              className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-zinc-300"
                            >
                              <svg
                                className="h-3 w-3"
                                style={{ color: demo.palette.accent }}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {feat}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>

          {/* Columna Derecha: Configuración de Fecha, Pax y Datos */}
          <div className="space-y-6 rounded-2xl border border-white/10 bg-zinc-950/80 p-5 shadow-xl sm:p-6 lg:col-span-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              2. Detalles y Fecha:
            </h3>

            {/* Selector de Día */}
            <div>
              <label className="text-xs font-medium text-zinc-400">
                Día de la visita:
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {dateOptions.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDate(d)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all active:scale-95 ${
                      selectedDate === d
                        ? "bg-white text-black font-bold shadow"
                        : "border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector de Horario */}
            <div>
              <label className="text-xs font-medium text-zinc-400">
                Hora preferida:
              </label>
              <div className="mt-2 grid grid-cols-3 gap-1.5 sm:grid-cols-4">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={`rounded-md py-1.5 text-xs font-medium transition-all active:scale-95 ${
                      selectedTime === t
                        ? "text-black font-bold shadow"
                        : "border border-white/10 bg-white/5 text-zinc-400 hover:text-white"
                    }`}
                    style={{
                      backgroundColor: selectedTime === t ? demo.palette.accent : undefined,
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Contador de Personas / Invitados */}
            <div>
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-zinc-400">
                  Número de Personas:
                </label>
                <span className="text-xs font-bold text-white">{pax} personas</span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setPax(Math.max(1, pax - 1))}
                  className="flex h-9 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-lg font-bold text-white transition-all active:scale-90 hover:bg-white/20"
                >
                  -
                </button>
                <span className="flex-1 text-center font-mono text-base font-bold text-white">
                  {pax}
                </span>
                <button
                  type="button"
                  onClick={() => setPax(Math.min(20, pax + 1))}
                  className="flex h-9 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-lg font-bold text-white transition-all active:scale-90 hover:bg-white/20"
                >
                  +
                </button>
              </div>
            </div>

            {/* Inputs de Contacto */}
            <div className="space-y-3 border-t border-white/10 pt-4">
              <div>
                <label className="text-xs font-medium text-zinc-400">
                  Nombre de quien reserva:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Carlos Mendoza"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-zinc-900 px-3.5 py-2 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-zinc-400">
                  WhatsApp para recibir el pase QR:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ej: +58 412 1234567"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-zinc-900 px-3.5 py-2 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-zinc-400">
                  Notas especiales (opcional):
                </label>
                <input
                  type="text"
                  placeholder="Ej: Es para un cumpleaños / mesa cerca de música"
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-zinc-900 px-3.5 py-2 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Error si falta algún dato */}
            <AnimatePresence>
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="rounded-lg bg-red-500/20 p-2.5 text-xs text-red-300"
                >
                  {errorMsg}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Resumen Total y Botón de Generación de QR */}
            <div className="rounded-xl border border-white/10 bg-zinc-900/90 p-4">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>Total Estimado / Abono:</span>
                <span>Tasa BCV: {BCV_RATE} Bs/$</span>
              </div>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="text-2xl font-black text-white">
                  ${totalUSD} USD
                </span>
                <span className="font-mono text-sm font-semibold text-emerald-400">
                  ≈ {totalVES.toLocaleString("es-VE", { maximumFractionDigits: 2 })} Bs
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white shadow-lg transition-all active:scale-[0.97] disabled:opacity-50"
                style={{
                  backgroundColor: demo.palette.primary,
                  boxShadow: `0 8px 20px -4px ${demo.palette.glow}`,
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Generando Código QR...
                  </span>
                ) : (
                  <>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                      />
                    </svg>
                    <span>Generar Pase Digital con QR</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
