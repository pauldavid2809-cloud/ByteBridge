"use client";

import { motion } from "motion/react";
import { BusinessDemo } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
};

export function DemoProcess({ demo }: Props) {
  const steps = [
    {
      number: "01",
      emoji: "💬",
      title: "Hablamos",
      description:
        "15 minutos por WhatsApp para entender tu negocio, tus productos y lo que necesitas automatizar.",
    },
    {
      number: "02",
      emoji: "🎨",
      title: "Diseñamos",
      description:
        "En 3 a 5 días tienes tu WebApp lista con tu marca, menú, precios y sistema de pedidos funcionando.",
    },
    {
      number: "03",
      emoji: "🚀",
      title: "Lanzamos",
      description:
        "Capacitamos a tu equipo, configuramos tu dominio y arrancamos con soporte continuo incluido.",
    },
  ];

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
              🔄 Proceso Simple
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              ¿Cómo funciona?
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              De la conversación al lanzamiento en 3 pasos
            </p>
          </div>

          {/* Steps */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.12,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative rounded-2xl border border-white/10 bg-zinc-900/60 p-5 sm:p-6 text-center"
              >
                {/* Step number */}
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center justify-center h-6 w-6 rounded-full text-[10px] font-extrabold text-white"
                  style={{ backgroundColor: demo.palette.primary }}
                >
                  {step.number}
                </span>

                {/* Connector line (hidden on mobile, between cards on desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-1/2 -right-2 w-4 border-t border-dashed border-white/20" />
                )}

                <div className="mt-2 text-3xl">{step.emoji}</div>
                <h3 className="mt-3 text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
