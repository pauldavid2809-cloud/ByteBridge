"use client";

import { motion } from "motion/react";
import { BusinessDemo } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
};

const testimonials = [
  {
    name: "Pau Cookies",
    role: "Pastelería Artesanal",
    emoji: "🍪",
    quote:
      "Paul nos entregó la web en 4 días. Ahora nuestros clientes ven el catálogo y hacen pedidos por WhatsApp sin que tengamos que explicar cada producto por chat. Las ventas se organizaron.",
  },
  {
    name: "Taquería Digital",
    role: "Restaurante Mexicano",
    emoji: "🌮",
    quote:
      "Antes perdíamos tiempo respondiendo fotos del menú por WhatsApp. Con la WebApp los clientes ven todo, eligen y nos llega el pedido armado. Es otro nivel de operación.",
  },
  {
    name: "Psicoconsulta Online",
    role: "Consulta Psicológica",
    emoji: "🧠",
    quote:
      "Necesitaba algo profesional y rápido. Paul entendió lo que buscaba, me hizo preguntas clave y en pocos días tenía mi plataforma funcionando. Muy recomendado.",
  },
];

export function DemoTestimonials({ demo }: Props) {
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
              ⭐ Clientes Reales
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Lo que dicen quienes ya confían en ByteBridge
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 text-amber-400 text-xs">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-3 flex-1 text-xs leading-relaxed text-zinc-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-4 flex items-center gap-2.5 border-t border-white/5 pt-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-base">
                    {testimonial.emoji}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-[10px] text-zinc-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
