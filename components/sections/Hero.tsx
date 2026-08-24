"use client";

import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { HeroSimulator } from "@/components/sections/HeroSimulator";
import { whatsappLink } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";

/**
 * Hero: responde en 5 segundos qué hago, qué gana el cliente y genera confianza inmediata.
 * Calibración tipográfica de alta jerarquía + simulador interactivo de rendimiento.
 */
export function Hero() {
  const { lang } = useLanguage();
  const t = dictionary.hero;

  return (
    <section
      id="inicio"
      className="relative flex min-h-[92svh] items-center overflow-hidden px-5 pt-24 sm:pt-28 md:pt-32 pb-16 sm:px-8"
    >
      {/* Resplandor verde muy sutil y radial detrás del titular */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 h-[520px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-accent/[0.08] blur-[140px]"
      />

      {/* Símbolo de marca gigante, apenas visible, como textura de fondo */}
      <Logo className="pointer-events-none absolute -right-28 -bottom-16 h-80 w-auto text-accent/[0.03] sm:h-[420px]" />

      <div className="relative mx-auto w-full max-w-6xl py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Columna Izquierda: Copy + CTAs + Trust Points */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Badge de rendimiento y disponibilidad */}
            <div className="hero-animate hero-animate-1 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/90 px-4 py-1.5 text-xs text-muted shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-semibold text-foreground/90">{t.badge[lang]}</span>
            </div>

            {/* Titular Principal con negative tracking */}
            <h1 className="hero-animate hero-animate-2 text-3xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl sm:leading-[1.08] text-foreground">
              {t.titleLine1[lang]}{" "}
              <span className="bg-gradient-to-r from-accent to-emerald-300 bg-clip-text text-transparent">
                {t.titleHighlight[lang]}
              </span>
            </h1>

            {/* Subtítulo enfocado en beneficios comerciales directos */}
            <p className="hero-animate hero-animate-3 max-w-xl text-base text-muted sm:text-lg leading-relaxed">
              {t.subtitle[lang]}
            </p>

            {/* CTAs con arquitectura de impacto */}
            <div className="hero-animate hero-animate-4 flex flex-col gap-3.5 sm:flex-row sm:items-center pt-2">
              <Button href={whatsappLink()} size="lg" className="w-full sm:w-auto shadow-xl shadow-accent/20">
                <WhatsAppIcon className="h-4.5 w-4.5" />
                {t.ctaWhatsapp[lang]}
              </Button>
              <Button href="#proyectos" variant="secondary" size="lg" className="w-full sm:w-auto">
                {t.ctaProjects[lang]}
              </Button>
            </div>

            {/* Micro-puntos de confianza y conversión */}
            <div className="hero-animate hero-animate-4 pt-2 border-t border-line/60 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 sm:grid sm:grid-cols-3 text-[11px] sm:text-xs text-muted">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-accent font-bold">✓</span>
                <span>{lang === "es" ? "Entrega en 3-5 días" : "3-5 days delivery"}</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-accent font-bold">✓</span>
                <span>{lang === "es" ? "Código 100% tuyo" : "100% your code"}</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-accent font-bold">✓</span>
                <span>{lang === "es" ? "Sin suscripciones" : "0 monthly fees"}</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Simulador Interactivo con Doble Bisel */}
          <div className="hero-animate hero-animate-3 lg:col-span-5">
            <SpotlightCard className="p-1.5 card-bezel rounded-[2rem]">
              <HeroSimulator />
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}

