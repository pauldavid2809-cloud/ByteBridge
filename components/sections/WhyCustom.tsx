"use client";

import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";

const icons = [
  (
    <svg key="1" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
      <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 13l3.5-3.5M12 2v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="2" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
      <rect x="3" y="3" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 21h10a2 2 0 0 0 2-2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="3" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="4" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
      <path d="M4 20V10m6 10V4m6 16v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 20V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
];

/**
 * Sección "Por qué a medida" con soporte bilingüe y cards de alta conversión.
 */
export function WhyCustom() {
  const { lang } = useLanguage();
  const t = dictionary.whyCustom;

  return (
    <Section
      id="por-que-a-medida"
      eyebrow={lang === "es" ? "Diferencial de valor" : "Key Advantage"}
      title={t.title[lang]}
      subtitle={t.subtitle[lang]}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {t.signals.map((item, idx) => (
          <Card
            key={idx}
            interactive
            className="p-7 sm:p-8 rounded-[2rem] border-line bg-surface/80 card-bezel flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 text-accent">
                {icons[idx]}
              </div>
              <h3 className="mt-5 text-lg sm:text-xl font-bold text-foreground">{item.señal[lang]}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.diagnostico[lang]}</p>
            </div>

            <div className="mt-6 rounded-2xl border border-accent/30 bg-accent/5 p-4 text-xs sm:text-sm text-foreground/90">
              <span className="font-bold text-accent block mb-1">{t.customLabel[lang]}</span>
              {item.aMedida[lang]}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
