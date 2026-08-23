"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
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
      eyebrow={lang === "es" ? "Presupuesto transparente" : "Transparent Pricing"}
      title={lang === "es" ? "Calculadora de Proyecto" : "Project Cost Calculator"}
      subtitle={
        lang === "es"
          ? "Selecciona lo que necesita tu negocio y obtén un estimado claro al instante."
          : "Select what your business needs and get a clear instant estimate."
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Opciones */}
        <div className="lg:col-span-7 space-y-6">
          {/* Tipo de proyecto */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-3">
              1. {lang === "es" ? "Selecciona el tipo de web" : "Select project type"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {tiposProyecto.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTipoSel(t.id)}
                  className={`flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-[border-color,background-color,transform,box-shadow] duration-150 active:scale-[0.97] ${
                    tipoSel === t.id
                      ? "border-accent bg-accent/10 shadow-sm ring-1 ring-accent/30"
                      : "border-line bg-surface hover:border-accent/40 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.01]"
                  }`}
                >
                  <p className="text-sm font-bold text-foreground">{t.nombre[lang]}</p>
                  {!ocultarPrecios && (
                    <p className="text-xs text-accent font-bold">Desde ${t.base} USD</p>
                  )}
                  <p className="text-[11px] text-muted">⏱️ {t.tiempo}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Módulos extras */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-3">
              2. {lang === "es" ? "Agrega módulos o extras (Opcional)" : "Add optional modules"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {opcionesExtra.map((e) => {
                const activo = extrasSel.includes(e.id);
                return (
                  <button
                    key={e.id}
                    onClick={() => toggleExtra(e.id)}
                    className={`flex items-center justify-between rounded-2xl border p-3.5 text-left text-xs transition-[border-color,background-color,transform] duration-150 active:scale-[0.97] ${
                      activo
                        ? "border-accent/80 bg-accent/10 font-semibold text-foreground ring-1 ring-accent/20"
                        : "border-line bg-surface text-muted hover:border-accent/40 hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-md border text-[10px] font-bold transition-colors ${
                        activo ? "border-accent bg-accent text-accent-ink" : "border-muted/40 bg-background text-transparent"
                      }`}>
                        ✓
                      </span>
                      <span className="truncate">{e.nombre[lang]}</span>
                    </div>
                    {!ocultarPrecios && (
                      <span className="text-accent font-bold shrink-0 ml-2">+${e.precio}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Resumen & CTA */}
        <div className="lg:col-span-5 rounded-3xl border border-accent/40 bg-gradient-to-b from-accent/10 via-surface to-surface p-6 sm:p-8 space-y-6 shadow-xl shadow-accent/5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              {lang === "es" ? "Resumen de Estimación" : "Estimated Quote"}
            </p>
            <h3 className="text-2xl font-bold text-foreground mt-1">{tipo.nombre[lang]}</h3>
            <p className="text-xs text-muted mt-1">⏱️ {lang === "es" ? `Entrega estimada: ${tipo.tiempo}` : `Estimated delivery: ${tipo.tiempo}`}</p>
          </div>

          {!ocultarPrecios ? (
            <div className="py-4 border-y border-line space-y-1">
              <p className="text-xs text-muted">{lang === "es" ? "Inversión estimada:" : "Estimated investment:"}</p>
              <p className="text-3xl font-extrabold text-foreground tracking-tight">${totalUSD} <span className="text-sm font-normal text-muted">USD</span></p>
              {pais.moneda !== "USD" && (
                <p className="text-sm text-accent font-semibold">
                  ≈ {mostrarDual(totalUSD).split("≈")[1]?.trim()} <span className="text-xs text-muted">{pais.moneda}</span>
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
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-3.5 text-sm font-bold text-accent-ink hover:bg-accent-strong transition-[background-color,transform] duration-150 active:scale-[0.97] shadow-md shadow-accent/15"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {lang === "es" ? "Solicitar esta cotización por WhatsApp" : "Request this quote on WhatsApp"}
          </a>

          <p className="text-[11px] text-muted text-center leading-relaxed">
            {lang === "es"
              ? "🔒 Sin compromiso · Incluye 30 días de soporte post-entrega"
              : "🔒 No obligation · Includes 30 days post-launch support"}
          </p>
        </div>
      </div>
    </Section>
  );
}

