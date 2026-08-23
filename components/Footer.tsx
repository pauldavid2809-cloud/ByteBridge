"use client";

import Link from "next/link";
import { Wordmark } from "@/components/Logo";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";

export function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear().toString();
  const text = dictionary.footer.copyright[lang].replace("{year}", year);
  const t = dictionary.header;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line bg-background px-5 pt-12 pb-24 sm:px-8 sm:pb-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/#inicio" className="flex items-center gap-2" aria-label="byte/bridge">
            <Wordmark className="text-lg text-foreground" />
          </Link>

          <nav aria-label="Enlaces del pie de página" className="flex flex-wrap items-center justify-center gap-5 text-xs text-muted">
            <Link href="/#proyectos" className="transition-colors duration-150 hover:text-foreground">
              {t.projects[lang]}
            </Link>
            <Link href="/#soluciones" className="transition-colors duration-150 hover:text-foreground">
              {t.solutions[lang]}
            </Link>
            <Link href="/#servicios" className="transition-colors duration-150 hover:text-foreground">
              {t.services[lang]}
            </Link>
            <Link href="/#calculadora" className="transition-colors duration-150 hover:text-foreground">
              {t.calculator[lang]}
            </Link>
            <Link href="/#faq" className="transition-colors duration-150 hover:text-foreground">
              {t.faq[lang]}
            </Link>
            <Link href="/#contacto" className="transition-colors duration-150 hover:text-foreground">
              {t.contact[lang]}
            </Link>
          </nav>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted transition-[border-color,color,transform] duration-150 hover:border-accent/40 hover:text-foreground active:scale-95"
            aria-label={lang === "es" ? "Volver arriba" : "Back to top"}
          >
            <span>↑</span>
            <span>{lang === "es" ? "Arriba" : "Top"}</span>
          </button>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-line/40 pt-6 text-xs text-muted/70 sm:flex-row">
          <p>{text}</p>
          <p className="text-[11px] text-muted/50">
            {lang === "es" ? "Hecho con Next.js & Tailwind CSS" : "Crafted with Next.js & Tailwind CSS"}
          </p>
        </div>
      </div>
    </footer>
  );
}

