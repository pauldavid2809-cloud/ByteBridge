"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { BusinessDemo, BookingOption, BCV_RATE } from "@/data/demosData";

type BookingData = {
  option: BookingOption;
  date: string;
  time: string;
  pax: number;
  name: string;
  phone: string;
  notes: string;
  totalUSD: number;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  demo: BusinessDemo;
  booking: BookingData | null;
};

export function QrTicketModal({ isOpen, onClose, demo, booking }: Props) {
  if (!isOpen || !booking) return null;

  const ticketCode = `PASS-${Math.floor(1000 + Math.random() * 9000)}`;
  const totalVES = booking.totalUSD * BCV_RATE;

  // Generación del enlace de WhatsApp estructurado hacia ByteBridge (+58 412-1662998)
  const whatsappMsg = `🎟️ *[DEMO ${demo.name.toUpperCase()}] NUEVA RESERVA GENERADA*\n\n` +
    `*Código:* #${ticketCode}\n` +
    `*Cliente:* ${booking.name}\n` +
    `*WhatsApp:* ${booking.phone}\n` +
    `*Plan:* ${booking.option.name}\n` +
    `*Fecha & Hora:* ${booking.date} a las ${booking.time}\n` +
    `*Personas:* ${booking.pax} pax\n` +
    `*Total / Abono:* $${booking.totalUSD} USD (≈ ${totalVES.toLocaleString("es-VE", { maximumFractionDigits: 2 })} Bs)\n` +
    (booking.notes ? `*Notas:* ${booking.notes}\n\n` : `\n`) +
    `_Pase digital validado con código QR en vivo._`;

  const whatsappUrl = `https://wa.me/584121662998?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Fondo oscurecido con desenfoque */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Contenedor del Ticket / Boarding Pass */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 max-h-[92vh] w-full max-w-md overflow-y-auto rounded-3xl border border-white/20 bg-zinc-950 p-6 shadow-2xl scrollbar-none"
        >
          {/* Botón de Cierre */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-zinc-400 hover:bg-white/20 hover:text-white"
          >
            ✕
          </button>

          {/* Encabezado del Pase */}
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/20 text-emerald-400">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="mt-3 text-xl font-extrabold text-white">
              ¡Pase Digital Generado!
            </h3>
            <p className="text-xs text-zinc-400">
              Presenta este código QR en puerta o mesa al llegar
            </p>
          </div>

          {/* Tarjeta Visual de Boarding Pass */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-zinc-900 via-zinc-900 to-black p-5 shadow-inner">
            {/* Cabecera del Pase con Logo */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/20">
                  <Image
                    src={demo.logo}
                    alt={demo.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{demo.name}</h4>
                  <span
                    className="font-mono text-[11px] font-bold"
                    style={{ color: demo.palette.accent }}
                  >
                    #{ticketCode}
                  </span>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                ACTIVO
              </span>
            </div>

            {/* Datos de la Reserva */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase">Titular</span>
                <p className="font-bold text-white line-clamp-1">{booking.name}</p>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 uppercase">Personas</span>
                <p className="font-bold text-white">{booking.pax} Invitados</p>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 uppercase">Fecha & Hora</span>
                <p className="font-bold text-white">
                  {booking.date} · {booking.time}
                </p>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 uppercase">Total / Abono</span>
                <p className="font-black text-emerald-400">
                  ${booking.totalUSD} USD
                </p>
              </div>
              <div className="col-span-2 border-t border-white/5 pt-2">
                <span className="text-[10px] text-zinc-400 uppercase">Experiencia</span>
                <p className="font-medium text-zinc-200 line-clamp-1">
                  {booking.option.name}
                </p>
              </div>
            </div>

            {/* Simulación del Código QR */}
            <div className="mt-5 flex flex-col items-center justify-center rounded-xl bg-white p-4">
              <div className="relative flex h-36 w-36 items-center justify-center bg-zinc-950 p-2 rounded-lg">
                <svg
                  viewBox="0 0 100 100"
                  className="h-full w-full fill-white"
                  shapeRendering="crispEdges"
                >
                  <rect x="0" y="0" width="30" height="30" />
                  <rect x="5" y="5" width="20" height="20" fill="#000" />
                  <rect x="10" y="10" width="10" height="10" fill="#fff" />

                  <rect x="70" y="0" width="30" height="30" />
                  <rect x="75" y="5" width="20" height="20" fill="#000" />
                  <rect x="80" y="10" width="10" height="10" fill="#fff" />

                  <rect x="0" y="70" width="30" height="30" />
                  <rect x="5" y="75" width="20" height="20" fill="#000" />
                  <rect x="10" y="80" width="10" height="10" fill="#fff" />

                  <rect x="35" y="5" width="5" height="15" />
                  <rect x="45" y="10" width="15" height="5" />
                  <rect x="35" y="25" width="25" height="5" />
                  <rect x="10" y="35" width="20" height="5" />
                  <rect x="35" y="35" width="10" height="10" />
                  <rect x="55" y="35" width="15" height="15" />
                  <rect x="80" y="35" width="15" height="10" />
                  <rect x="15" y="45" width="15" height="15" />
                  <rect x="35" y="50" width="15" height="5" />
                  <rect x="40" y="60" width="20" height="10" />
                  <rect x="65" y="55" width="10" height="20" />
                  <rect x="80" y="55" width="15" height="15" />
                  <rect x="35" y="75" width="10" height="20" />
                  <rect x="50" y="75" width="15" height="10" />
                  <rect x="70" y="80" width="25" height="15" />
                  <rect x="50" y="90" width="15" height="5" />
                </svg>
              </div>
              <span className="mt-2 font-mono text-[10px] font-bold text-zinc-800 tracking-wider">
                VALIDACIÓN EN PUERTA: #{ticketCode}
              </span>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="mt-6 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-bold text-black shadow-lg shadow-emerald-500/25 transition-all active:scale-[0.97] hover:bg-emerald-400"
            >
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Confirmar y Enviar a WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-semibold text-zinc-300 hover:bg-white/10 hover:text-white"
            >
              Cerrar y Volver
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
