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
import { PaymentMethods } from "@/components/PaymentMethods";


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
  const { pais, mostrarDual, cargando, ocultarPrecios } = useCurrency();
  const t = dictionary.services;

  // Precios base en USD para conversión
  const preciosUSD: Record<string, [number, number]> = {
    "Landing Express": [100, 180],
    "Full Website":    [250, 450],
    "Custom Web App":  [800, 800],
  };

  function getPrecioLocal(nombre: string): string | null {
    if (ocultarPrecios || pais.moneda === "USD" || cargando) return null;
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
      <div className="grid items-stretch gap-6 lg:grid-cols-3">
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
              className={`relative flex h-full flex-col p-7 sm:p-8 transition-all duration-300 rounded-[2rem] ${
                paquete.destacado
                  ? "border-accent bg-surface/95 lg:-mt-4 lg:mb-[-1rem] lg:py-10 shadow-2xl shadow-accent/15 ring-2 ring-accent/30 card-bezel-active"
                  : "border-line bg-surface/80 hover:border-accent/40 card-bezel"
              }`}
            >
              {badgeText && (
                <span
                  className={`absolute -top-3.5 left-8 rounded-full px-3.5 py-1 text-xs font-bold shadow-md ${
                    paquete.destacado
                      ? "bg-accent text-accent-ink ring-2 ring-background"
                      : "border border-accent/40 bg-surface text-accent"
                  }`}
                >
                  {badgeText}
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-foreground">{nombre}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-3xl sm:text-4xl font-black text-foreground">
                    {ocultarPrecios ? (lang === "es" ? "A medida" : "Custom quote") : precio}
                  </span>
                  {!ocultarPrecios && (
                    <span className="text-xs font-medium text-muted">
                      / {notaPrecio}
                    </span>
                  )}
                </div>

                {/* Precio en moneda local */}
                {getPrecioLocal(nombre) && (
                  <p className="mt-1 text-xs font-bold text-accent">
                    {getPrecioLocal(nombre)}
                    <span className="ml-1 text-[11px] font-normal text-muted">{pais.moneda}</span>
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-muted">{descripcion}</p>
              </div>

              <div className="mt-6 border-t border-line/60 pt-5">
                <div className="font-bold text-xs text-foreground/80 uppercase tracking-wider mb-3">
                  {t.includes[lang]}
                </div>
                <ul className="flex flex-1 flex-col gap-3">
                  {incluyeList.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-tight">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Button
                  href={whatsappLink(ctaMensaje)}
                  variant={paquete.destacado ? "primary" : "secondary"}
                  className="w-full shadow-md"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {t.selectPackage[lang]}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Mantenimiento mensual opcional */}
      <Card className="mt-10 flex flex-col gap-4 p-6 sm:p-7 sm:flex-row sm:items-center sm:justify-between rounded-3xl border-line bg-surface/70 card-bezel">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-foreground">
            {mantenimientoMultiLang.nombre[lang]}{" "}
            {!ocultarPrecios && (
              <span className="ml-1 font-display text-accent font-extrabold">
                {mantenimientoMultiLang.precio[lang]}
              </span>
            )}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-muted">
            {mantenimientoMultiLang.descripcion[lang]}
          </p>
        </div>
        <Button
          href={whatsappLink(mantenimientoMultiLang.ctaMensaje[lang])}
          variant="secondary"
          className="shrink-0 text-xs sm:text-sm"
        >
          {t.selectPackage[lang]}
        </Button>
      </Card>

      {/* Métodos de pago adaptables según país */}
      <PaymentMethods />
    </Section>
  );
}
