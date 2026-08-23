"use client";

import { useState, useRef, useEffect } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import { useLanguage, type Language } from "@/context/LanguageContext";
import { PAISES_LATAM } from "@/data/currencies";

/**
 * Panel unificado de preferencias: bandera/moneda + idioma (ES|EN)
 * Todo en un solo dropdown compacto, sin saturar el header.
 */
export function PreferencesPanel() {
  const { pais, setPais, cargando } = useCurrency();
  const { lang, setLang } = useLanguage();
  const [abierto, setAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setAbierto(false);
        setBusqueda("");
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const paisesFiltrados = PAISES_LATAM.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.moneda.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="relative" ref={ref}>
      {/* Botón disparador — compacto, solo bandera + código */}
      <button
        onClick={() => setAbierto(!abierto)}
        className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
          abierto
            ? "border-accent/60 bg-accent/5 text-foreground"
            : "border-line bg-surface text-muted hover:border-accent/40 hover:text-foreground"
        }`}
        aria-label="Preferencias de idioma y moneda"
      >
        {cargando ? (
          <span className="h-3 w-3 rounded-full border-2 border-accent border-t-transparent animate-spin" />
        ) : (
          <span className="text-base leading-none">{pais.bandera}</span>
        )}
        <span className="text-[11px] font-bold uppercase">{lang}</span>
        <svg
          viewBox="0 0 10 6"
          className={`h-2 w-2 transition-transform duration-200 ${abierto ? "rotate-180" : ""}`}
          fill="none"
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown unificado — Modal centrado en móvil, dropdown anclado en desktop con popover-animate */}
      {abierto && (
        <>
          {/* Backdrop en móvil para detectar toque fuera */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs sm:hidden"
            onClick={() => setAbierto(false)}
          />

          <div className="popover-animate fixed top-16 left-4 right-4 mx-auto z-50 max-w-xs rounded-2xl border border-line bg-background/95 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden max-h-[80vh] flex flex-col sm:absolute sm:top-full sm:right-0 sm:left-auto sm:mx-0 sm:w-72 sm:max-w-none">
            {/* ── Sección Idioma ── */}
            <div className="px-4 pt-4 pb-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2">
                {lang === "es" ? "Idioma" : "Language"}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {(["es", "en"] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-[border-color,background-color,transform] duration-150 active:scale-[0.97] ${
                      lang === l
                        ? "border-accent bg-accent/10 font-bold text-accent shadow-xs"
                        : "border-line text-muted hover:border-accent/40 hover:text-foreground"
                    }`}
                  >
                    <span className="text-base">{l === "es" ? "🇪🇸" : "🇺🇸"}</span>
                    <span>{l === "es" ? "Español" : "English"}</span>
                    {lang === l && <span className="ml-auto text-accent text-xs">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-line" />

            {/* ── Sección País / Moneda ── */}
            <div className="px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2">
                {lang === "es" ? "País y moneda" : "Country & currency"}
              </p>
              <input
                autoFocus
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder={lang === "es" ? "Buscar país o moneda..." : "Search country or currency..."}
                className="w-full rounded-xl border border-line bg-surface px-3 py-1.5 text-xs text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors mb-1"
              />
            </div>

            <ul className="max-h-48 overflow-y-auto pb-2 divide-y divide-line/30">
              {paisesFiltrados.map((p) => (
                <li key={p.codigo}>
                  <button
                    onClick={() => {
                      setPais(p);
                      setAbierto(false);
                      setBusqueda("");
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-left transition-[background-color] duration-150 hover:bg-surface active:bg-accent/10 ${
                      pais.codigo === p.codigo ? "bg-accent/5 font-medium" : ""
                    }`}
                  >
                    <span className="text-lg leading-none">{p.bandera}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate text-foreground">{p.nombre}</p>
                      <p className="text-[10px] text-muted">{p.simbolo} {p.nombreMoneda}</p>
                    </div>
                    {pais.codigo === p.codigo && (
                      <span className="text-accent text-xs font-bold shrink-0">✓</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Nota de tasas */}
            <div className="mx-4 mb-3 mt-1 rounded-xl bg-surface/70 border border-line px-3 py-2">
              <p className="text-[10px] text-muted text-center leading-relaxed">
                {lang === "es"
                  ? "💱 Tasas en tiempo real · Precios referenciales en USD"
                  : "💱 Live exchange rates · USD is base price"}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export const CountrySelector = PreferencesPanel;
