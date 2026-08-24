"use client";

import { Section } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";

export function Testimonials() {
  const { lang } = useLanguage();
  const t = dictionary.testimonials;

  return (
    <Section
      id="testimonios"
      eyebrow={t.eyebrow[lang]}
      title={t.title[lang]}
      subtitle={t.subtitle[lang]}
    >
      {/* ── CUADRÍCULA DE MÉTRICAS DE IMPACTO (4 Columnas) ── */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-12">
        {t.metrics.map((m, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center rounded-3xl border border-line bg-surface/80 p-6 text-center transition-all duration-200 card-bezel [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1 hover:border-accent/40"
          >
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-accent">
              {m.value}
            </p>
            <p className="mt-1.5 text-xs sm:text-sm font-bold text-foreground">{m.label[lang]}</p>
            <p className="mt-0.5 text-[10px] sm:text-xs text-muted">{m.sub[lang]}</p>
          </div>
        ))}
      </div>

      {/* ── BENTO GRID / CARRUSEL TÁCTIL DE TESTIMONIOS ── */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-5 -mx-5 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 scrollbar-hide touch-manipulation">
        {t.reviews.map((rev, idx) => (
          <div key={idx} className="min-w-[290px] sm:min-w-[320px] md:min-w-0 flex-1 shrink-0 snap-center">
            <SpotlightCard className="h-full rounded-[2rem] card-bezel">
              <div className="flex h-full flex-col justify-between p-7">
                {/* Tag y Badge de Verificación */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-bold text-accent">
                    {rev.tag[lang]}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {lang === "es" ? "Cliente Verificado" : "Verified Client"}
                  </span>
                </div>

                {/* Cita */}
                <blockquote className="flex-1 text-sm sm:text-base leading-relaxed text-foreground/90 italic">
                  "{rev.quote[lang]}"
                </blockquote>

                {/* Autor */}
                <div className="mt-6 flex items-center gap-3 border-t border-line/60 pt-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/15 border border-accent/30 text-accent font-black text-sm">
                    {rev.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{rev.author}</p>
                    <p className="text-xs text-muted">{rev.role[lang]}</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </Section>
  );
}
