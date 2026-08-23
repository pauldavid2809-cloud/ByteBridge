"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo, Wordmark } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";
import { PreferencesPanel } from "@/components/CountrySelector";

/**
 * Barra de navegación fija: logo + anclas traducidas + panel de preferencias unificado + menú móvil + CTA WhatsApp.
 */
export function Header() {
  const { lang } = useLanguage();
  const t = dictionary.header;
  const [menuAbierto, setMenuAbierto] = useState(false);

  const navLinks = [
    { href: "/#proyectos", label: t.projects[lang] },
    { href: "/#soluciones", label: t.solutions[lang] },
    { href: "/#servicios", label: t.services[lang] },
    { href: "/#calculadora", label: t.calculator[lang] },
    { href: "/#faq", label: t.faq[lang] },
    { href: "/#sobre-mi", label: t.about[lang] },
    { href: "/#contacto", label: t.contact[lang] },
  ];

  // Cerrar menú con Escape o al redimensionar a desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuAbierto(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuAbierto(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/#inicio"
          className="flex items-center gap-2.5 transition-transform duration-150 active:scale-[0.97]"
          aria-label="byte/bridge — inicio"
          onClick={() => setMenuAbierto(false)}
        >
          <Logo className="h-4 w-auto text-accent" />
          <Wordmark className="text-lg text-foreground" />
        </Link>

        {/* Navegación Desktop */}
        <nav aria-label="Secciones del sitio" className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-[color,transform] duration-150 hover:text-foreground active:scale-[0.96]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Panel unificado de Preferencias (País, Moneda e Idioma) */}
          <PreferencesPanel />

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-full bg-accent px-3.5 sm:px-4 text-sm font-medium text-accent-ink transition-[background-color,transform] duration-150 hover:bg-accent-strong active:scale-[0.96]"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{t.whatsappCta[lang]}</span>
            <span className="sm:hidden text-xs font-semibold">WhatsApp</span>
          </a>

          {/* Botón Hamburguesa Móvil con animación */}
          <button
            type="button"
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-muted transition-[color,border-color,transform] duration-150 hover:border-accent/40 hover:text-foreground active:scale-95 md:hidden"
            aria-expanded={menuAbierto}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          >
            <svg
              className="h-4 w-4 transition-transform duration-200"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            >
              {menuAbierto ? (
                <path d="M3 3l10 10M13 3L3 13" />
              ) : (
                <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable Móvil con animación fluida */}
      {menuAbierto && (
        <>
          <div
            className="fixed inset-0 top-16 z-40 bg-black/50 backdrop-blur-xs md:hidden"
            onClick={() => setMenuAbierto(false)}
            aria-hidden="true"
          />
          <nav
            aria-label="Navegación móvil"
            className="menu-animate absolute inset-x-0 top-full z-50 border-b border-line bg-background/95 px-6 py-5 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuAbierto(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-base font-medium text-foreground/90 transition-colors duration-150 hover:bg-surface hover:text-accent active:bg-accent/10"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-muted">→</span>
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
}

