"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { proyectos } from "@/data/proyectos";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";

type Category = "all" | "apps" | "ecommerce" | "landing";

/**
 * Grid de proyectos destacados con filtros interactivos por categoría y diseño Bento.
 */
export function Projects() {
  const { lang } = useLanguage();
  const t = dictionary.projects;
  const filterDict = dictionary.projectsFilter;
  const [categoria, setCategoria] = useState<Category>("all");

  const proyectosFiltrados = proyectos.filter((p) => {
    if (categoria === "all") return true;
    if (categoria === "apps") {
      return ["canon-ia", "psicoconsulta-online", "quiniela-mundial-2026"].includes(p.slug);
    }
    if (categoria === "ecommerce") {
      return ["pau-cookies", "taqueria-digital"].includes(p.slug);
    }
    if (categoria === "landing") {
      return ["parrandon-navideno", "arquidiocesis-maracaibo"].includes(p.slug);
    }
    return true;
  });

  return (
    <Section
      id="proyectos"
      eyebrow={t.eyebrow[lang]}
      title={t.title[lang]}
      subtitle={t.subtitle[lang]}
    >
      {/* Barra de Filtros por Categoría */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {(["all", "apps", "ecommerce", "landing"] as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-[background-color,border-color,color,transform] duration-150 active:scale-95 ${
              categoria === cat
                ? "bg-accent text-accent-ink shadow-sm ring-1 ring-accent/40"
                : "border border-line bg-surface text-muted hover:border-accent/40 hover:text-foreground"
            }`}
          >
            {filterDict[cat][lang]}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {proyectosFiltrados.map((proyecto, index) => {
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

          // Destacar el primer proyecto en la vista general
          const isFeatured = categoria === "all" && index === 0;

          return (
            <Link
              key={proyecto.slug}
              href={`/proyectos/${proyecto.slug}`}
              className={`group rounded-2xl ${isFeatured ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              <Card
                interactive
                className={`flex h-full flex-col overflow-hidden ${
                  isFeatured ? "border-accent/40 bg-surface/90" : ""
                }`}
              >
                {/* Imagen del caso, o placeholder con el logo si no hay */}
                <div
                  className={`relative flex items-center justify-center border-b border-line bg-background overflow-hidden ${
                    isFeatured ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[16/10]"
                  }`}
                >
                  {proyecto.imagen ? (
                    <Image
                      src={proyecto.imagen}
                      alt={`Captura del proyecto ${nombre}`}
                      fill
                      className="object-cover transition-transform duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.04]"
                      sizes={isFeatured ? "100vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                    />
                  ) : (
                    <Logo className="h-12 w-auto text-accent/20 transition-colors duration-200 group-hover:text-accent/40" />
                  )}
                  {isFeatured && (
                    <span className="absolute top-3 left-3 rounded-full bg-accent/90 px-3 py-1 text-[11px] font-bold text-accent-ink backdrop-blur-xs">
                      {lang === "es" ? "Destacado" : "Featured Case"}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{nombre}</h3>
                    <span className="text-xs text-muted transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-accent">
                      ↗
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {resultado}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {proyecto.demo && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"
                        />
                        {lang === "es" ? "En vivo" : "Live"}
                      </span>
                    )}
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-surface/60 px-3 py-1 text-xs text-muted"
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

