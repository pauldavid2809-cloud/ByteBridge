"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { whatsappLink } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function MobileNav() {
  const { lang } = useLanguage();
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = ["inicio", "proyectos", "soluciones", "calculadora", "contacto"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] md:hidden pointer-events-none transition-all duration-300">
      <div className="mx-auto max-w-md pointer-events-auto rounded-full border border-line bg-background/90 p-1.5 shadow-2xl shadow-black/80 backdrop-blur-2xl flex items-center justify-between ring-1 ring-white/10">
        <Link
          href="/#inicio"
          className={`flex flex-1 flex-col items-center justify-center rounded-full py-1.5 text-[10px] font-semibold transition-[background-color,color,transform] duration-150 active:scale-90 ${
            activeSection === "inicio"
              ? "bg-accent/15 text-accent font-bold"
              : "text-muted hover:text-foreground"
          }`}
        >
          <span className="text-base leading-none mb-0.5">⚡</span>
          <span>{lang === "es" ? "Inicio" : "Home"}</span>
        </Link>

        <Link
          href="/#proyectos"
          className={`flex flex-1 flex-col items-center justify-center rounded-full py-1.5 text-[10px] font-semibold transition-[background-color,color,transform] duration-150 active:scale-90 ${
            activeSection === "proyectos"
              ? "bg-accent/15 text-accent font-bold"
              : "text-muted hover:text-foreground"
          }`}
        >
          <span className="text-base leading-none mb-0.5">📂</span>
          <span>{lang === "es" ? "Casos" : "Work"}</span>
        </Link>

        <Link
          href="/#soluciones"
          className={`flex flex-1 flex-col items-center justify-center rounded-full py-1.5 text-[10px] font-semibold transition-[background-color,color,transform] duration-150 active:scale-90 ${
            activeSection === "soluciones"
              ? "bg-accent/15 text-accent font-bold"
              : "text-muted hover:text-foreground"
          }`}
        >
          <span className="text-base leading-none mb-0.5">✨</span>
          <span>{lang === "es" ? "Demos" : "Demos"}</span>
        </Link>

        <Link
          href="/#calculadora"
          className={`flex flex-1 flex-col items-center justify-center rounded-full py-1.5 text-[10px] font-semibold transition-[background-color,color,transform] duration-150 active:scale-90 ${
            activeSection === "calculadora"
              ? "bg-accent/15 text-accent font-bold"
              : "text-muted hover:text-foreground"
          }`}
        >
          <span className="text-base leading-none mb-0.5">🧮</span>
          <span>{lang === "es" ? "Cotizar" : "Quote"}</span>
        </Link>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-ink shadow-md shadow-accent/25 transition-[transform,background-color] duration-150 active:scale-90 hover:bg-accent-strong ml-1"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
