"use client";

import { BusinessDemo } from "@/data/demosData";
import { AnimateOnScroll } from "@/components/demos/AnimateOnScroll";

type Props = {
  demo: BusinessDemo;
};

export function LocationCard({ demo }: Props) {
  return (
    <section
      id="ubicacion"
      className="scroll-mt-20 border-b border-white/10 bg-zinc-950 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 sm:p-10 backdrop-blur-md">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm"
                  style={{ backgroundColor: demo.palette.primary }}
                >
                  Visítanos & Contacto
                </span>

                <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                  ¿Dónde encontrarnos?
                </h2>

                <div className="mt-6 space-y-4 text-sm text-zinc-300">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-300"
                      style={{ backgroundColor: `${demo.palette.primary}20` }}
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-white">Dirección:</strong>
                      <p className="text-xs sm:text-sm text-zinc-400">
                        {demo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-300"
                      style={{ backgroundColor: `${demo.palette.primary}20` }}
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-white">Horarios de Atención:</strong>
                      <p className="text-xs sm:text-sm text-zinc-400">
                        {demo.hours}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-300"
                      style={{ backgroundColor: `${demo.palette.primary}20` }}
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
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-white">Instagram Oficial:</strong>
                      <p>
                        <a
                          href={demo.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm font-semibold underline hover:text-white"
                          style={{ color: demo.palette.accent }}
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
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    <span>Ver en Google Maps</span>
                  </a>

                  <a
                    href={demo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold text-white transition-all active:scale-95 hover:bg-white/20"
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
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Ver Instagram</span>
                  </a>
                </div>
              </div>

              {/* Tarjeta de Resumen Visual con Estilo de Marca */}
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-zinc-900 via-zinc-900 to-black p-6 text-center shadow-xl">
                <div
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10"
                  style={{
                    backgroundColor: `${demo.palette.primary}25`,
                    color: demo.palette.accent,
                  }}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-bold text-white">{demo.name}</h3>
                <p className="mt-1 text-xs text-zinc-400">{demo.tagline}</p>
                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-left">
                  <p className="text-xs leading-relaxed text-zinc-300">
                    <strong className="text-white">Reservas y Pedidos Automatizados:</strong> Esta plataforma permite gestionar reservas con código QR, comanda directa y control de caja con cobros en USD y bolívares a tasa oficial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
