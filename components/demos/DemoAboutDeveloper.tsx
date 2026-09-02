"use client";

import { motion } from "motion/react";
import { BusinessDemo } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
};

export function DemoAboutDeveloper({ demo }: Props) {
  const whatsappUrl = `https://wa.me/584120308674?text=${encodeURIComponent(
    `Hola Paul David, vi la demo de ${demo.name} y me interesa saber más sobre la WebApp para mi negocio.`
  )}`;

  return (
    <section className="border-t border-white/10 bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-sm"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            {/* Avatar */}
            <div
              className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-black text-white shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${demo.palette.primary}, ${demo.palette.accent})`,
              }}
            >
              PD
            </div>

            {/* Info */}
            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h3 className="text-lg font-bold text-white">Paul David</h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Desarrollador Verificado
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-400">
                Fundador de ByteBridge · Desarrollador Web en Maracaibo, Venezuela
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Esta propuesta fue diseñada específicamente para{" "}
                <span className="font-semibold text-white">{demo.name}</span>.
                Me especializo en crear WebApps a medida para negocios gastronómicos
                y comerciales en Venezuela y Latinoamérica, con integración de
                tasa BCV, pagos locales y automatización de pedidos por WhatsApp.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { value: "+10", label: "Proyectos entregados" },
              { value: "3-5", label: "Días de entrega" },
              { value: "100%", label: "Clientes satisfechos" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-black/40 p-3 text-center"
              >
                <p
                  className="text-lg font-extrabold"
                  style={{ color: demo.palette.accent }}
                >
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] font-medium text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-bold text-black shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.97] hover:bg-emerald-400"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.532-1.474A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.557-.818-6.282-2.187l-.438-.358-2.85.927.954-2.787-.383-.462A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              Solicitar WebApp para mi Negocio
            </a>

            <a
              href="https://byte-bridge-tau.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-zinc-300 transition-all active:scale-[0.97] hover:bg-white/10 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver Portafolio Completo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
