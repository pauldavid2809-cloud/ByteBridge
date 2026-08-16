"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { type PaisMoneda, PAISES_LATAM, getPaisPorCodigo } from "@/data/currencies";

interface CurrencyContextType {
  pais: PaisMoneda;
  setPais: (pais: PaisMoneda) => void;
  tasas: Record<string, number>;
  cargando: boolean;
  ocultarPrecios: boolean;
  convertir: (usd: number) => string;
  mostrarDual: (usd: number) => string; // "$100 USD ≈ $1,700 MXN"
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [pais, setPaisState] = useState<PaisMoneda>(getPaisPorCodigo("US"));
  const [tasas, setTasas] = useState<Record<string, number>>({});
  const [cargando, setCargando] = useState(true);
  const [ocultarPrecios, setOcultarPrecios] = useState(false);

  // 1. Detectar parámetro de URL noprice / noprices / prices=false
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nopriceParam = params.get("noprice") || params.get("noprices") || params.get("hideprice");
    const pricesParam = params.get("prices");

    if (nopriceParam === "true" || nopriceParam === "1" || pricesParam === "false" || pricesParam === "0") {
      setOcultarPrecios(true);
      sessionStorage.setItem("bytebridge_noprice", "true");
    } else if (pricesParam === "true" || pricesParam === "1") {
      setOcultarPrecios(false);
      sessionStorage.removeItem("bytebridge_noprice");
    } else if (sessionStorage.getItem("bytebridge_noprice") === "true") {
      setOcultarPrecios(true);
    }
  }, []);

  // 2. Detectar país por IP al montar
  useEffect(() => {
    const savedCode = localStorage.getItem("bytebridge_pais");
    if (savedCode) {
      setPaisState(getPaisPorCodigo(savedCode));
    } else {
      fetch("https://ipapi.co/json/")
        .then((r) => r.json())
        .then((data) => {
          const found = getPaisPorCodigo(data.country_code ?? "US");
          setPaisState(found);
          localStorage.setItem("bytebridge_pais", found.codigo);
        })
        .catch(() => {
          setPaisState(getPaisPorCodigo("US"));
        });
    }
  }, []);

  // 2. Obtener tasas de cambio desde API abierta (sin key requerida)
  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((r) => r.json())
      .then((data) => {
        setTasas(data.rates ?? {});
      })
      .catch(() => {
        // Tasas de respaldo aproximadas si la API falla
        setTasas({
          MXN: 17.2, COP: 4050, ARS: 1050, CLP: 920, PEN: 3.75,
          BOB: 6.9, UYU: 40, PYG: 7600, BRL: 5.1, DOP: 59,
          GTQ: 7.8, CRC: 520, HNL: 25, NIO: 36.5, EUR: 0.92,
          USD: 1,
        });
      })
      .finally(() => setCargando(false));
  }, []);

  const setPais = (nuevoPais: PaisMoneda) => {
    setPaisState(nuevoPais);
    localStorage.setItem("bytebridge_pais", nuevoPais.codigo);
  };

  const tasa = tasas[pais.moneda] ?? 1;

  const convertir = (usd: number): string => {
    if (pais.moneda === "USD") return `$${usd.toLocaleString("en-US")} USD`;
    const local = Math.round(usd * tasa);
    if (local >= 1_000_000) {
      return `${pais.simbolo}${(local / 1_000_000).toFixed(1)}M ${pais.moneda}`;
    }
    return `${pais.simbolo}${local.toLocaleString("es-419")} ${pais.moneda}`;
  };

  const mostrarDual = (usd: number): string => {
    if (pais.moneda === "USD") return `$${usd.toLocaleString("en-US")} USD`;
    const local = Math.round(usd * tasa);
    const localStr = local >= 1_000_000
      ? `${pais.simbolo}${(local / 1_000_000).toFixed(1)}M`
      : `${pais.simbolo}${local.toLocaleString("es-419")}`;
    return `$${usd} USD ≈ ${localStr} ${pais.moneda}`;
  };

  return (
    <CurrencyContext.Provider value={{ pais, setPais, tasas, cargando, ocultarPrecios, convertir, mostrarDual }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    return {
      pais: getPaisPorCodigo("US"),
      setPais: () => {},
      tasas: {},
      cargando: false,
      ocultarPrecios: false,
      convertir: (usd: number) => `$${usd} USD`,
      mostrarDual: (usd: number) => `$${usd} USD`,
    };
  }
  return ctx;
}
