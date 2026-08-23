"use client";

import Image from "next/image";
import { Logo } from "@/components/Logo";
import { Section } from "@/components/ui/Section";
import { sobreMi } from "@/data/sobre-mi";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";

/**
 * Sección "Sobre mí" con soporte bilingüe.
 */
export function About() {
  const { lang } = useLanguage();
  const t = dictionary.about;

  return (
    <Section id="sobre-mi" title={t.title[lang]} subtitle={t.subtitle[lang]}>
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
        {/* Foto (o placeholder de marca mientras no haya foto) */}
        <div className="relative flex aspect-square w-40 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface sm:w-48">
          {sobreMi.foto ? (
            <Image
              src={sobreMi.foto}
              alt={sobreMi.nombre ? `Foto de ${sobreMi.nombre}` : "Foto del desarrollador"}
              fill
              className="object-cover"
              sizes="192px"
            />
          ) : (
            <Logo className="h-10 w-auto text-accent/25" />
          )}
        </div>

        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold">
            {sobreMi.nombre || t.role[lang]}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {t.role[lang]} · {t.location[lang]}
          </p>

          <div className="mt-5 space-y-4">
            <p className="leading-relaxed text-foreground/90">{t.bio1[lang]}</p>
            <p className="leading-relaxed text-foreground/90">{t.bio2[lang]}</p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {sobreMi.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted transition-[border-color,color] duration-150 hover:border-accent/40 hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
