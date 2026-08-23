"use client";

import Image from "next/image";
import { Logo } from "@/components/Logo";
import { Section } from "@/components/ui/Section";
import { sobreMi } from "@/data/sobre-mi";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";

/**
 * Sección "Sobre mí" con soporte bilingüe y presentación de alta fidelidad.
 */
export function About() {
  const { lang } = useLanguage();
  const t = dictionary.about;

  return (
    <Section id="sobre-mi" eyebrow={lang === "es" ? "Quién está detrás" : "Behind the craft"} title={t.title[lang]} subtitle={t.subtitle[lang]}>
      <div className="rounded-[2.5rem] border border-line bg-surface/80 p-8 sm:p-12 card-bezel flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
        {/* Foto (o placeholder de marca mientras no haya foto) */}
        <div className="relative flex aspect-square w-36 sm:w-44 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-accent/30 bg-surface shadow-xl shadow-accent/5">
          {sobreMi.foto ? (
            <Image
              src={sobreMi.foto}
              alt={sobreMi.nombre ? `Foto de ${sobreMi.nombre}` : "Foto del desarrollador"}
              fill
              className="object-cover"
              sizes="192px"
            />
          ) : (
            <Logo className="h-12 w-auto text-accent/30" />
          )}
        </div>

        <div className="max-w-2xl space-y-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {sobreMi.nombre || t.role[lang]}
            </h3>
            <p className="mt-1 text-sm font-semibold text-accent">
              {t.role[lang]} · <span className="text-muted font-normal">{t.location[lang]}</span>
            </p>
          </div>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/90">
            <p>{t.bio1[lang]}</p>
            <p>{t.bio2[lang]}</p>
          </div>

          <div className="pt-4 border-t border-line/60">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted mb-3">
              {lang === "es" ? "Stack & Especialización" : "Stack & Specialization"}
            </p>
            <div className="flex flex-wrap gap-2">
              {sobreMi.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-background/60 px-3.5 py-1 text-xs font-medium text-foreground/90 transition-all duration-150 hover:border-accent/40 hover:text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
