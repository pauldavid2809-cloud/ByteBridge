"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");

  useEffect(() => {
    // Parámetro URL tiene prioridad: ?lang=en o ?lang=es
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang") as Language;
    if (urlLang === "es" || urlLang === "en") {
      setLangState(urlLang);
      localStorage.setItem("bytebridge_lang", urlLang);
      return;
    }
    // Si no hay parámetro, usar lo guardado en localStorage
    const saved = localStorage.getItem("bytebridge_lang") as Language;
    if (saved === "es" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("bytebridge_lang", newLang);
  };

  const toggleLang = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Retorno por defecto seguro si se usa fuera del proveedor durante SSR o estático
    return {
      lang: "es" as Language,
      setLang: () => {},
      toggleLang: () => {},
    };
  }
  return context;
}
