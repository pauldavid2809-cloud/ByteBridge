"use client";

import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { proyectos } from "@/data/proyectos";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";

/**
 * Grid de proyectos destacados con soporte bilingüe.
 */
export function Projects() {
  const { lang } = useLanguage();
  const t = dictionary.projects;

  return (
    <Section
      id="proyectos"
      eyebrow={t.eyebrow[lang]}
      title={t.title[lang]}
      subtitle={t.subtitle[lang]}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((proyecto) => {
          const projectDict =
            proyecto.slug === "canon-ia"
              ? t.canonia
              : proyecto.slug === "pau-cookies"
                ? t.pauCookies
                : proyecto.slug === "arquidiocesis-maracaibo"
                  ? t.arquidiocesis
                  : proyecto.slug === "parrandon-navideno"
                    ? t.parrandon
                    : proyecto.slug === "psicoconsulta-online"
                      ? t.psicoconsulta
                      : proyecto.slug === "taqueria-digital"
                        ? t.taqueria
                        : proyecto.slug === "quiniela-mundial-2026"
                          ? t.quiniela
                          : null;
          const nombre = projectDict?.nombre[lang] ?? proyecto.nombre;
          const resultado = projectDict?.resultado[lang] ?? proyecto.resultado;
          const tags = projectDict?.tags[lang] ?? proyecto.tags;

          return (
            <Link
              key={proyecto.slug}
              href={`/proyectos/${proyecto.slug}`}
              className="group rounded-2xl"
            >
              <Card interactive className="flex h-full flex-col overflow-hidden">
                {/* Imagen del caso, o placeholder con el logo si no hay */}
                <div className="relative flex aspect-[16/10] items-center justify-center border-b border-line bg-background overflow-hidden">
                  {proyecto.imagen ? (
                    <Image
                      src={proyecto.imagen}
                      alt={`Captura del proyecto ${nombre}`}
                      fill
                      className="object-cover transition-transform duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <Logo className="h-12 w-auto text-accent/20 transition-colors duration-200 group-hover:text-accent/40" />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold">{nombre}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {resultado}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {proyecto.demo && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-3 py-1 text-xs text-accent">
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-accent"
                        />
                        {lang === "es" ? "En vivo" : "Live"}
                      </span>
                    )}
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
