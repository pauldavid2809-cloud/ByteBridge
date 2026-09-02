"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BusinessDemo } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
};

const faqItems = [
  {
    question: "¿Necesito comprar equipos o software especial?",
    answer:
      "No. La WebApp funciona desde cualquier celular, tablet o computadora que ya tengas. Solo necesitas conexión a internet. Tus clientes acceden con un link o escaneando un código QR.",
  },
  {
    question: "¿Cómo se actualiza la tasa del dólar?",
    answer:
      "Automáticamente. El sistema consulta la tasa oficial del BCV cada día y actualiza todos los precios al instante. No necesitas hacer nada manual.",
  },
  {
    question: "¿Puedo tener mi propio dominio .com?",
    answer:
      "Sí. Configuramos tu dominio personalizado (ej: pedidos.tunegocio.com) como parte de la implementación. El costo del dominio está incluido el primer año.",
  },
  {
    question: "¿Qué pasa si necesito cambios después?",
    answer:
      "El plan de mantenimiento ($25/mes) incluye ajustes mensuales en el menú, precios, horarios y diseño. Cambios mayores se cotizan por separado a precios preferenciales.",
  },
  {
    question: "¿Y si no funciona para mi negocio?",
    answer:
      "Antes de empezar, hablamos por WhatsApp para evaluar juntos si la WebApp tiene sentido para tu operación. No vendo algo que no te va a servir. Si no es el momento, te lo digo.",
  },
];

export function DemoFaq({ demo }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-t border-white/10 bg-zinc-950 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
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
              ❓ Preguntas Frecuentes
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Respuestas a tus dudas
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="mt-8 space-y-2">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-zinc-900/60 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === idx ? null : idx)
                  }
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors hover:bg-white/5"
                >
                  <span className="text-sm font-semibold text-zinc-200">
                    {item.question}
                  </span>
                  <svg
                    className={`h-4 w-4 flex-shrink-0 text-zinc-400 transition-transform duration-200 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="border-t border-white/5 px-5 py-4">
                        <p className="text-sm leading-relaxed text-zinc-400">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
