"use client";

import Link from "next/link";
import { Logo, Wordmark } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";
import { PreferencesPanel } from "@/components/CountrySelector";

/**
 * Barra de navegación fija: logo + anclas traducidas + panel de preferencias unificado + CTA WhatsApp.
 */
export function Header() {
  const { lang } = useLanguage();
  const t = dictionary.header;

  const navLinks = [
    { href: "/#proyectos", label: t.projects[lang] },
    { href: "/#soluciones", label: t.solutions[lang] },
    { href: "/#servicios", label: t.services[lang] },
    { href: "/#calculadora", label: t.calculator[lang] },
    { href: "/#faq", label: t.faq[lang] },
    { href: "/#sobre-mi", label: t.about[lang] },
    { href: "/#contacto", label: t.contact[lang] },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/#inicio" className="flex items-center gap-2.5" aria-label="byte/bridge — inicio">
          <Logo className="h-4 w-auto text-accent" />
          <Wordmark className="text-lg text-foreground" />
        </Link>

        <nav aria-label="Secciones del sitio" className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Panel unificado de Preferencias (País, Moneda e Idioma) */}
          <PreferencesPanel />

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-accent-ink transition-colors duration-200 hover:bg-accent-strong"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{t.whatsappCta[lang]}</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
