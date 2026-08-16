"use client";

import { useState, useRef, useEffect } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import { useLanguage } from "@/context/LanguageContext";
import { PAISES_LATAM } from "@/data/currencies";

export function CountrySelector() {
  const { pais, setPais, cargando } = useCurrency();
  const { lang } = useLanguage();
  const [abierto, setAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  // Cerrar al hacer clic fuera
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
      {/* Botón disparador */}
      <button
        onClick={() => setAbierto(!abierto)}
        className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1.5 text-xs font-semibold transition-all duration-200 hover:border-accent/50 hover:bg-surface"
        aria-label={lang === "es" ? "Cambiar país / moneda" : "Change country / currency"}
        title={lang === "es" ? "Precios en tu moneda" : "Prices in your currency"}
      >
        {cargando ? (
          <span className="h-3 w-3 rounded-full border-2 border-accent border-t-transparent animate-spin" />
        ) : (
          <span className="text-base leading-none">{pais.bandera}</span>
        )}
        <span className="hidden sm:inline text-muted">{pais.moneda}</span>
        <svg viewBox="0 0 10 6" className="h-2.5 w-2.5 text-muted" fill="none">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown */}
      {abierto && (
        <div className="absolute right-0 top-full mt-2 z-50 w-64 rounded-2xl border border-line bg-background shadow-2xl shadow-black/40 overflow-hidden">
          {/* Header del dropdown */}
          <div className="px-4 py-3 border-b border-line bg-surface">
            <p className="text-xs font-bold text-foreground mb-2">
              {lang === "es" ? "🌎 Tu país y moneda" : "🌎 Your country & currency"}
            </p>
            <input
              autoFocus
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder={lang === "es" ? "Buscar país..." : "Search country..."}
              className="w-full rounded-xl border border-line bg-background px-3 py-1.5 text-xs placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Lista de países */}
          <ul className="max-h-64 overflow-y-auto py-1">
            {paisesFiltrados.map((p) => (
              <li key={p.codigo}>
                <button
                  onClick={() => {
                    setPais(p);
                    setAbierto(false);
                    setBusqueda("");
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-surface ${
                    pais.codigo === p.codigo ? "bg-accent/10 font-semibold" : ""
                  }`}
                >
                  <span className="text-xl leading-none">{p.bandera}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate">{p.nombre}</p>
                    <p className="text-[10px] text-muted">{p.simbolo} {p.nombreMoneda}</p>
                  </div>
                  {pais.codigo === p.codigo && (
                    <span className="text-accent text-xs">✓</span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Nota de tasas */}
          <div className="px-4 py-2 border-t border-line bg-surface">
            <p className="text-[10px] text-muted text-center">
              {lang === "es"
                ? "💱 Tasas en tiempo real · Referencial"
                : "💱 Live exchange rates · Approximate"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
