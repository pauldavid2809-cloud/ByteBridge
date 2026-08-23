"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { useLanguage } from "@/context/LanguageContext";
import { CryptoIcon, BankIcon, CreditCardIcon, LockIcon } from "@/components/icons/AppIcons";

export function PaymentMethods() {
  const { pais } = useCurrency();
  const { lang } = useLanguage();

  // Métodos de pago globales siempre disponibles
  const metodosGlobales = [
    {
      id: "binance",
      nombre: "Binance Pay / USDT",
      desc: { es: "Cero comisiones, acreditación inmediata", en: "Zero fees, instant settlement" },
      icon: CryptoIcon,
      destacado: true,
    },
    {
      id: "zelle",
      nombre: "Zelle / ACH",
      desc: { es: "Transferencia directa en USD", en: "Direct USD transfer" },
      icon: LockIcon,
      destacado: false,
    },
    {
      id: "cards",
      nombre: lang === "es" ? "Tarjetas / Stripe" : "Cards / Stripe",
      desc: { es: "Visa, Mastercard, débito y crédito", en: "Visa, Mastercard, debit & credit" },
      icon: CreditCardIcon,
      destacado: false,
    },
    {
      id: "transfer",
      nombre: lang === "es" ? "Transferencia Bancaria" : "Bank Transfer",
      desc: { es: "Cuentas en USD y EUR (SWIFT / SEPA)", en: "USD and EUR accounts (SWIFT / SEPA)" },
      icon: BankIcon,
      destacado: false,
    },
  ];

  // Método específico por país
  const metodosLocales: Record<string, { nombre: string; desc: { es: string; en: string }; badge: string }> = {
    VE: {
      nombre: "Pago Móvil / Bolívares",
      desc: { es: "A la tasa oficial BCV del día", en: "At official BCV central bank rate" },
      badge: "VE",
    },
    MX: {
      nombre: "SPEI / Mercado Pago",
      desc: { es: "Transferencia bancaria local en México", en: "Local bank transfer in Mexico" },
      badge: "MX",
    },
    CO: {
      nombre: "Nequi / Daviplata / Bancolombia",
      desc: { es: "Transferencia local en Colombia", en: "Local transfer in Colombia" },
      badge: "CO",
    },
    AR: {
      nombre: "Mercado Pago / CBU",
      desc: { es: "Pesos argentinos transferencia directa", en: "Direct ARS transfer" },
      badge: "AR",
    },
    CL: {
      nombre: "Webpay / Transferencia",
      desc: { es: "Pesos chilenos transferencia directa", en: "Direct CLP transfer" },
      badge: "CL",
    },
    PE: {
      nombre: "Yape / Plin / BCP",
      desc: { es: "Soles peruanos transferencia inmediata", en: "Direct PEN transfer" },
      badge: "PE",
    },
  };

  const local = metodosLocales[pais.codigo];

  return (
    <div className="mt-12 rounded-3xl border border-line bg-surface/50 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold">
            {lang === "es" ? "Métodos de pago aceptados" : "Accepted payment methods"}
          </h3>
          <p className="text-xs text-muted mt-0.5">
            {lang === "es" ? "Facilidad de cobro y facturación internacional" : "International invoicing and seamless payments"}
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-line bg-background px-3.5 py-1.5 text-xs text-muted">
          <span>{pais.bandera}</span>
          <span className="font-medium">{lang === "es" ? `Mostrando para ${pais.nombre}` : `Showing for ${pais.nombre}`}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Si hay método local específico para el país seleccionado */}
        {local && (
          <div className="flex items-start gap-3 rounded-2xl border border-accent/60 bg-accent/10 p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent font-mono font-bold text-xs">
              {local.badge}
            </div>
            <div>
              <p className="text-sm font-bold text-foreground flex items-center gap-1.5">
                {local.nombre}
                <span className="text-[9px] rounded-md bg-accent text-accent-ink px-1.5 py-0.2 font-bold uppercase">
                  Local
                </span>
              </p>
              <p className="text-xs text-muted mt-0.5">{local.desc[lang]}</p>
            </div>
          </div>
        )}

        {/* Métodos internacionales */}
        {metodosGlobales.map((m) => {
          const IconComp = m.icon;
          return (
            <div
              key={m.id}
              className={`flex items-start gap-3 rounded-2xl border p-4 transition-[border-color,background-color,transform] duration-150 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.01] ${
                m.destacado ? "border-accent/40 bg-accent/5 hover:border-accent/70" : "border-line bg-background hover:border-accent/30"
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface border border-line text-accent">
                <IconComp className="h-4.5 w-4.5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{m.nombre}</p>
                <p className="text-xs text-muted mt-0.5">{m.desc[lang]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

