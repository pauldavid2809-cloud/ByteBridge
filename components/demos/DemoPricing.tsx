"use client";

import { motion } from "motion/react";
import { BusinessDemo } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
};

export function DemoPricing({ demo }: Props) {
  const whatsappUrl = `https://wa.me/584120308674?text=${encodeURIComponent(
    `Hola Paul David, vi la demo de ${demo.name} y quiero cotizar una WebApp similar para mi negocio.`
  )}`;

  return (
    <section className="border-t border-white/10 bg-zinc-950 py-14 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Header */}
          <div className="text-center">
            <span
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
              style={{
                borderColor: `${demo.palette.accent}40`,
                color: demo.palette.accent,
                backgroundColor: `${demo.palette.accent}10`,
              }}
            >
              💡 Inversión Transparente
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              ¿Cuánto cuesta implementar esto?
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Sin sorpresas. Sin comisiones por venta. Sin costos ocultos.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* WebApp */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-5 text-center">
                <div className="text-2xl">🚀</div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  WebApp como esta
                </p>
                <p className="mt-1 text-2xl font-extrabold text-white">
                  desde <span style={{ color: demo.palette.accent }}>$250</span>
                </p>
                <p className="mt-1 text-[10px] text-zinc-500">
                  Pago único · Dominio incluido
                </p>
              </div>

              {/* Entrega */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-5 text-center">
                <div className="text-2xl">⚡</div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Tiempo de entrega
                </p>
                <p className="mt-1 text-2xl font-extrabold text-white">
                  <span style={{ color: demo.palette.accent }}>3 a 5</span> días
                </p>
                <p className="mt-1 text-[10px] text-zinc-500">
                  Llave en mano · Capacitación incluida
                </p>
              </div>

              {/* Mantenimiento */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-5 text-center">
                <div className="text-2xl">🛡️</div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Mantenimiento mensual
                </p>
                <p className="mt-1 text-2xl font-extrabold text-white">
                  <span style={{ color: demo.palette.accent }}>$25</span>/mes
                </p>
                <p className="mt-1 text-[10px] text-zinc-500">
                  Ajustes · Soporte · Hosting
                </p>
              </div>
            </div>

            {/* Zero commission highlight */}
            <div className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 py-2.5 px-4">
              <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-semibold text-emerald-300">
                0% comisiones por venta — todo lo que vendes es 100% tuyo
              </span>
            </div>

            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white shadow-lg transition-all active:scale-[0.97] hover:opacity-90"
              style={{
                backgroundColor: demo.palette.primary,
                boxShadow: `0 8px 20px -5px ${demo.palette.glow}`,
              }}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Solicitar Cotización Personalizada
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
