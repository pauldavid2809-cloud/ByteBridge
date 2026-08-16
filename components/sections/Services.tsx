"use client";

import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { whatsappLink } from "@/lib/config";
import {
  mantenimientoMultiLang,
  notaPagoMultiLang,
  paquetesMultiLang,
} from "@/data/servicios";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";
import { useCurrency } from "@/context/CurrencyContext";

/** Check verde para las listas de "incluye" */
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
    >
      <path
        d="M3 8.5 6.5 12 13 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Paquetes y precios renovados (iniciando en $100) y bilingües.
 */
export function Services() {
  const { lang } = useLanguage();
  const { pais, mostrarDual, cargando } = useCurrency();
  const t = dictionary.services;

  // Precios base en USD para conversión
  const preciosUSD: Record<string, [number, number]> = {
    "Landing Express": [100, 180],
    "Full Website":    [250, 450],
    "Custom Web App":  [800, 800],
  };

  function getPrecioLocal(nombre: string): string | null {
    if (pais.moneda === "USD" || cargando) return null;
    const enKey = Object.keys(preciosUSD).find((k) =>
      nombre.toLowerCase().includes(k.split(" ")[0].toLowerCase()) ||
      k.toLowerCase().includes(nombre.split(" ")[0].toLowerCase())
    );
    const rango = enKey ? preciosUSD[enKey] : null;
    if (!rango) return null;
    const min = mostrarDual(rango[0]).split("≈")[1]?.trim() ?? "";
    const max = rango[1] !== rango[0] ? mostrarDual(rango[1]).split("≈")[1]?.trim() ?? "" : "";
    return max ? `≈ ${min} – ${max}` : `≈ ${min}`;
  }

  return (
    <Section
      id="servicios"
      eyebrow={t.eyebrow[lang]}
      title={t.title[lang]}
      subtitle={t.subtitle[lang]}
    >
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {paquetesMultiLang.map((paquete) => {
          const nombre = paquete.nombre[lang];
          const precio = paquete.precio[lang];
          const notaPrecio = paquete.notaPrecio[lang];
          const descripcion = paquete.descripcion[lang];
          const incluyeList = paquete.incluye[lang];
          const ctaMensaje = paquete.ctaMensaje[lang];
          const badgeText = paquete.badge ? paquete.badge[lang] : undefined;

          return (
            <Card
              key={nombre}
              className={`relative flex h-full flex-col p-7 ${
                paquete.destacado
                  ? "border-accent/60 bg-accent/[0.04] lg:-mt-4 lg:mb-[-1rem] lg:py-11 shadow-lg shadow-accent/5"
                  : ""
              }`}
            >
              {badgeText && (
                <span
                  className={`absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-semibold ${
                    paquete.destacado
                      ? "bg-accent text-accent-ink"
                      : "border border-accent/40 bg-surface text-accent"
                  }`}
                >
                  {badgeText}
                </span>
              )}

              <h3 className="text-xl font-semibold">{nombre}</h3>
              <p className="mt-3 font-display text-3xl font-bold text-foreground">
                {precio}
                <span className="ml-2 align-middle text-sm font-normal text-muted">
                  / {notaPrecio}
                </span>
              </p>
              {/* Precio en moneda local */}
              {getPrecioLocal(nombre) && (
                <p className="mt-1 text-sm font-semibold text-accent/80">
                  {getPrecioLocal(nombre)}
                  <span className="ml-1 text-xs font-normal text-muted">{pais.moneda}</span>
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-muted">{descripcion}</p>

              <div className="mt-6 font-medium text-xs text-muted uppercase tracking-wider">
                {t.includes[lang]}
              </div>
              <ul className="mt-3 flex flex-1 flex-col gap-3">
                {incluyeList.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-foreground/90">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                href={whatsappLink(ctaMensaje)}
                variant={paquete.destacado ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t.selectPackage[lang]}
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Mantenimiento mensual opcional */}
      <Card className="mt-10 flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-semibold">
            {mantenimientoMultiLang.nombre[lang]}{" "}
            <span className="ml-1 font-display text-accent">
              {mantenimientoMultiLang.precio[lang]}
            </span>
          </h3>
          <p className="mt-1.5 text-sm text-muted">
            {mantenimientoMultiLang.descripcion[lang]}
          </p>
        </div>
        <Button
          href={whatsappLink(mantenimientoMultiLang.ctaMensaje[lang])}
          variant="secondary"
          className="shrink-0"
        >
          {t.selectPackage[lang]}
        </Button>
      </Card>

      {/* Condiciones de pago */}
      <p className="mt-8 text-center text-sm text-muted">
        {notaPagoMultiLang[lang]}
      </p>
    </Section>
  );
}
