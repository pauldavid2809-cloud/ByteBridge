"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { ClockIcon, LockIcon } from "@/components/icons/AppIcons";
import { whatsappLink } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import { useCurrency } from "@/context/CurrencyContext";

const tiposProyecto = [
  { id: "express", base: 100, nombre: { es: "Landing Page Express", en: "Landing Express" }, tiempo: "3 - 5 días" },
  { id: "full", base: 250, nombre: { es: "Página Web Completa", en: "Full Website" }, tiempo: "7 - 10 días" },
  { id: "custom", base: 800, nombre: { es: "Sistema / App a Medida", en: "Custom Web App" }, tiempo: "15 - 20 días" },
];

const opcionesExtra = [
  { id: "i18n", precio: 50, nombre: { es: "Soporte Multi-idioma (ES / EN)", en: "Multi-language (ES / EN)" } },
  { id: "seo", precio: 40, nombre: { es: "Optimización SEO Avanzada + Google", en: "Advanced SEO + Google Indexing" } },
  { id: "admin", precio: 100, nombre: { es: "Panel de Administración Editable", en: "Admin Dashboard / CMS" } },
  { id: "whatsapp", precio: 30, nombre: { es: "Integración WhatsApp & Catálogo", en: "WhatsApp & Catalog Integration" } },
  { id: "qr", precio: 60, nombre: { es: "Sistema de Entradas / Tickets QR", en: "QR Ticket & Pass System" } },
];

export function Calculator() {
  const { lang } = useLanguage();
  const { mostrarDual, pais, ocultarPrecios } = useCurrency();
  const [tipoSel, setTipoSel] = useState("express");
  const [extrasSel, setExtrasSel] = useState<string[]>(["whatsapp"]);

  const tipo = tiposProyecto.find((t) => t.id === tipoSel)!;

  const toggleExtra = (id: string) => {
    setExtrasSel((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const totalUSD = tipo.base + extrasSel.reduce((sum, id) => {
    const extra = opcionesExtra.find((e) => e.id === id);
    return sum + (extra?.precio ?? 0);
  }, 0);

  const extrasNombres = extrasSel
    .map((id) => opcionesExtra.find((e) => e.id === id)?.nombre[lang])
    .join(", ");

  const mensajeWhatsApp = lang === "es"
    ? `Hola! Usé la calculadora de tu web y quiero cotizar: ${tipo.nombre.es} (${extrasNombres ? `con ${extrasNombres}` : "sin extras"}).`
    : `Hi! I used your website calculator and want a quote for: ${tipo.nombre.en} (${extrasNombres ? `with ${extrasNombres}` : "no extras"}).`;

  return (
    <Section
      id="calculadora"
      eyebrow={lang === "es" ? "Cotizador inteligente" : "Smart Estimator"}
      title={lang === "es" ? "Calculadora de Presupuesto Transparente" : "Transparent Project Calculator"}
      subtitle={
        lang === "es"
          ? "Configura los requerimientos de tu proyecto y obtén un estimado claro e instantáneo en USD y tu moneda local."
          : "Configure your project needs and get an instant clear estimate in USD and your local currency."
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Opciones */}
        <div className="lg:col-span-7 space-y-7">
          {/* Tipo de proyecto */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-3.5">
              1. {lang === "es" ? "Selecciona el tipo de desarrollo" : "Select development type"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {tiposProyecto.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTipoSel(t.id)}
                  className={`flex flex-col items-start gap-2.5 rounded-2xl border p-4 text-left transition-all duration-150 active:scale-[0.97] ${
                    tipoSel === t.id
                      ? "border-accent bg-accent/10 shadow-lg shadow-accent/5 ring-1 ring-accent/40 scale-[1.01]"
                      : "border-line bg-surface/80 hover:border-accent/40 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.01]"
                  }`}
                >
                  <p className="text-sm font-bold text-foreground">{t.nombre[lang]}</p>
                  {!ocultarPrecios && (
                    <p className="text-xs text-accent font-extrabold">Desde ${t.base} USD</p>
                  )}
                  <p className="inline-flex items-center gap-1.5 text-[11px] text-muted">
                    <ClockIcon className="h-3.5 w-3.5 text-accent/80" />
                    {t.tiempo}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Módulos extras */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-3.5">
              2. {lang === "es" ? "Módulos y extras opcionales" : "Optional modules & add-ons"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {opcionesExtra.map((e) => {
                const activo = extrasSel.includes(e.id);
                return (
                  <button
                    key={e.id}
                    onClick={() => toggleExtra(e.id)}
                    className={`flex items-center justify-between rounded-2xl border p-3.5 text-left text-xs transition-all duration-150 active:scale-[0.97] ${
                      activo
                        ? "border-accent/80 bg-accent/10 font-bold text-foreground ring-1 ring-accent/30"
                        : "border-line bg-surface/80 text-muted hover:border-accent/40 hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-md border text-[10px] font-black transition-colors ${
                        activo ? "border-accent bg-accent text-accent-ink" : "border-muted/30 bg-background/50 text-transparent"
                      }`}>
                        ✓
                      </span>
                      <span className="truncate">{e.nombre[lang]}</span>
                    </div>
                    {!ocultarPrecios && (
                      <span className="text-accent font-extrabold shrink-0 ml-2">+${e.precio}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Resumen & CTA */}
        <div className="lg:col-span-5 rounded-[2rem] border border-accent/40 bg-gradient-to-b from-accent/10 via-surface/90 to-surface p-6 sm:p-8 space-y-6 shadow-2xl shadow-accent/10 card-bezel-active">
          <div>
            <span className="inline-block rounded-full bg-accent/15 border border-accent/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent mb-2">
              {lang === "es" ? "Resumen de Estimación" : "Estimated Quote"}
            </span>
            <h3 className="text-2xl font-bold text-foreground mt-1">{tipo.nombre[lang]}</h3>
            <p className="inline-flex items-center gap-1.5 text-xs text-muted mt-1">
              <ClockIcon className="h-3.5 w-3.5 text-accent" />
              {lang === "es" ? `Entrega estimada: ${tipo.tiempo}` : `Estimated delivery: ${tipo.tiempo}`}
            </p>
          </div>

          {!ocultarPrecios ? (
            <div className="py-4 border-y border-line/80 space-y-1">
              <p className="text-xs font-medium text-muted">{lang === "es" ? "Inversión total estimada:" : "Total estimated investment:"}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">${totalUSD}</span>
                <span className="text-xs font-bold text-muted uppercase">USD</span>
              </div>
              {pais.moneda !== "USD" && (
                <p className="text-xs sm:text-sm text-accent font-bold">
                  ≈ {mostrarDual(totalUSD).split("≈")[1]?.trim()} <span className="text-muted font-normal">{pais.moneda}</span>
                </p>
              )}
            </div>
          ) : (
            <div className="py-4 border-y border-line">
              <p className="text-sm font-semibold text-accent">{lang === "es" ? "Cotización personalizada a medida" : "Bespoke custom quote"}</p>
            </div>
          )}

          <a
            href={whatsappLink(mensajeWhatsApp)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-4 text-sm font-bold text-accent-ink hover:bg-accent-strong transition-all duration-200 active:scale-[0.97] shadow-lg shadow-accent/20"
          >
            <WhatsAppIcon className="h-4.5 w-4.5 transition-transform duration-200 group-hover:scale-110" />
            <span>{lang === "es" ? "Solicitar esta cotización por WhatsApp" : "Request this quote on WhatsApp"}</span>
          </a>

          <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-muted text-center">
            <LockIcon className="h-3.5 w-3.5 text-accent" />
            <span>{lang === "es" ? "50% inicial / 50% contra entrega · 30 días de garantía" : "50% upfront / 50% on delivery · 30-day warranty"}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}


