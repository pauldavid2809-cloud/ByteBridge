"use client";

import { BusinessDemo } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
};

export function LocationCard({ demo }: Props) {
  return (
    <section id="ubicacion" className="scroll-mt-20 border-b border-white/10 bg-zinc-950 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 sm:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
                style={{ backgroundColor: demo.palette.primary }}
              >
                Visítanos & Contacto
              </span>

              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                ¿Dónde encontrarnos?
              </h2>

              <div className="mt-6 space-y-4 text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <strong className="text-white">Dirección:</strong>
                    <p className="text-zinc-400">{demo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">🕒</span>
                  <div>
                    <strong className="text-white">Horarios de Atención:</strong>
                    <p className="text-zinc-400">{demo.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">📱</span>
                  <div>
                    <strong className="text-white">Instagram Oficial:</strong>
                    <p>
                      <a
                        href={demo.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 underline hover:text-amber-300"
                      >
                        @{demo.handle}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={demo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-black shadow transition-all active:scale-95 hover:bg-zinc-200"
                >
                  <span>🗺️</span>
                  <span>Ver en Google Maps</span>
                </a>

                <a
                  href={demo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold text-white transition-all active:scale-95 hover:bg-white/20"
                >
                  <span>📸</span>
                  <span>Ver Instagram</span>
                </a>
              </div>
            </div>

            {/* Tarjeta de Resumen Visual */}
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-zinc-900 via-zinc-900 to-black p-6 text-center shadow-xl">
              <span className="text-4xl">✨</span>
              <h3 className="mt-2 text-lg font-bold text-white">{demo.name}</h3>
              <p className="mt-1 text-xs text-zinc-400">{demo.tagline}</p>
              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-left">
                <p className="text-xs text-zinc-300">
                  💬 <strong className="text-white">Reservas y Pedidos Automatizados:</strong> Esta plataforma permite gestionar reservas con código QR, comanda directa y control de caja con cobros en USD y bolívares a tasa oficial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
