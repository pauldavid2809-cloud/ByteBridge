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
 * Barra de navegación flotante con Glassmorphism de alta resolución:
 * Logo + anclas de navegación + panel de preferencias unificado + menú móvil táctil + CTA WhatsApp.
 */
export function Header() {
  const { lang } = useLanguage();
  const t = dictionary.header;
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/#proyectos", label: t.projects[lang], icon: "01" },
    { href: "/#soluciones", label: t.solutions[lang], icon: "02" },
    { href: "/#servicios", label: t.services[lang], icon: "03" },
    { href: "/#calculadora", label: t.calculator[lang], icon: "04" },
    { href: "/#faq", label: t.faq[lang], icon: "05" },
    { href: "/#sobre-mi", label: t.about[lang], icon: "06" },
    { href: "/#contacto", label: t.contact[lang], icon: "07" },
  ];

  // Control de scroll y cierre con Escape o resize
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuAbierto(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuAbierto(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Bloquear scroll al abrir menú en móvil
  useEffect(() => {
    if (menuAbierto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuAbierto]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 p-3 sm:p-4 pointer-events-none transition-all duration-300">
      <div
        className={`mx-auto flex h-14 sm:h-15 w-full max-w-6xl items-center justify-between rounded-2xl sm:rounded-full border border-line px-4 sm:px-6 pointer-events-auto transition-all duration-300 ${
          scrolled || menuAbierto
            ? "bg-background/90 shadow-2xl shadow-black/80 backdrop-blur-2xl ring-1 ring-white/10"
            : "bg-surface/80 shadow-lg shadow-black/40 backdrop-blur-xl ring-1 ring-white/5"
        }`}
      >
        {/* Logo de Marca */}
        <Link
          href="/#inicio"
          className="group flex items-center gap-2.5 transition-transform duration-150 active:scale-[0.97]"
          aria-label="byte/bridge — inicio"
          onClick={() => setMenuAbierto(false)}
        >
          <Logo className="h-4.5 w-auto text-accent transition-transform duration-200 group-hover:scale-105" />
          <Wordmark className="text-base sm:text-lg text-foreground font-semibold" />
        </Link>

        {/* Navegación Desktop */}
        <nav aria-label="Secciones del sitio" className="hidden items-center gap-5 lg:gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-muted transition-[color,transform] duration-150 hover:text-foreground active:scale-[0.96]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Acciones de la derecha: Preferencias + CTA WhatsApp + Botón Menú */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Panel unificado de Preferencias (País, Moneda e Idioma) */}
          <PreferencesPanel />

          {/* CTA WhatsApp con Button-in-Button architecture */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-9 items-center gap-2 rounded-full bg-accent px-3.5 sm:px-4 text-xs sm:text-sm font-bold text-accent-ink transition-[background-color,transform,box-shadow] duration-200 hover:bg-accent-strong hover:shadow-md hover:shadow-accent/20 active:scale-[0.96]"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110" />
            <span className="hidden sm:inline">{t.whatsappCta[lang]}</span>
            <span className="sm:hidden text-xs font-bold">WhatsApp</span>
          </a>

          {/* Botón Hamburguesa Móvil con Morph animado a X */}
          <button
            type="button"
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/90 text-muted transition-[color,border-color,background-color,transform] duration-150 hover:border-accent/40 hover:text-foreground active:scale-95 md:hidden"
            aria-expanded={menuAbierto}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="relative h-4 w-4">
              <span
                className={`absolute top-0.5 left-0 h-0.5 w-4 rounded-full bg-current transition-all duration-200 ${
                  menuAbierto ? "top-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute top-2 left-0 h-0.5 w-4 rounded-full bg-current transition-all duration-150 ${
                  menuAbierto ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute top-3.5 left-0 h-0.5 w-4 rounded-full bg-current transition-all duration-200 ${
                  menuAbierto ? "top-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Drawer Menú Móvil a pantalla completa con desenfoque de fondo */}
      {menuAbierto && (
        <div className="fixed inset-0 top-[4.5rem] z-40 p-4 md:hidden pointer-events-auto animate-in fade-in duration-200">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setMenuAbierto(false)}
            aria-hidden="true"
          />

          <nav
            aria-label="Navegación móvil completa"
            className="menu-animate relative z-50 mx-auto max-w-sm rounded-3xl border border-line bg-background/95 p-5 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10 space-y-3"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuAbierto(false)}
                  className="group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-foreground/90 transition-colors duration-150 hover:bg-surface hover:text-accent active:bg-accent/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted/60 group-hover:text-accent/80">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </div>
                  <span className="text-xs text-muted transition-transform duration-150 group-hover:translate-x-1 group-hover:text-accent">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* Quick Action Footer inside Drawer */}
            <div className="border-t border-line pt-3 flex flex-col gap-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuAbierto(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-accent py-3 text-xs font-bold text-accent-ink transition-transform active:scale-95"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>{lang === "es" ? "Contactar por WhatsApp" : "Chat on WhatsApp"}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

