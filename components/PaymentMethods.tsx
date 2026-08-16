"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { useLanguage } from "@/context/LanguageContext";

export function PaymentMethods() {
  const { pais } = useCurrency();
  const { lang } = useLanguage();

  // Métodos de pago globales siempre disponibles
  const metodosGlobales = [
    {
      id: "binance",
      nombre: "Binance Pay",
      desc: { es: "Pagos en USDT sin comisiones", en: "USDT zero-fee payments" },
      icon: "🟡",
      destacado: true,
    },
    {
      id: "zelle",
      nombre: "Zelle",
      desc: { es: "Transferencia directa en USD", en: "Direct USD transfer" },
      icon: "🟩",
      destacado: false,
    },
    {
      id: "cards",
      nombre: lang === "es" ? "Tarjetas / PayPal" : "Cards / PayPal",
      desc: { es: "Visa, Mastercard, PayPal", en: "Visa, Mastercard, PayPal" },
      icon: "💳",
      destacado: false,
    },
    {
      id: "transfer",
      nombre: lang === "es" ? "Transferencia USD/EUR" : "USD/EUR Bank Transfer",
      desc: { es: "Cuentas internacionales (ACH / SWIFT)", en: "International bank accounts" },
      icon: "🏦",
      destacado: false,
    },
  ];

  // Método específico por país
  const metodosLocales: Record<string, { nombre: string; desc: { es: string; en: string }; icon: string }> = {
    VE: {
      nombre: "Pago Móvil",
      desc: { es: "Bolívares a la tasa oficial del día", en: "Venezuelan Bolivares at official rate" },
      icon: "🇻🇪",
    },
    MX: {
      nombre: "SPEI / Mercado Pago",
      desc: { es: "Transferencia bancaria local en México", en: "Local bank transfer in Mexico" },
      icon: "🇲🇽",
    },
    CO: {
      nombre: "Nequi / Daviplata",
      desc: { es: "Transferencia local en Colombia", en: "Local transfer in Colombia" },
      icon: "🇨🇴",
    },
    AR: {
      nombre: "Mercado Pago / CBU",
      desc: { es: "Pesos argentinos transferencia directa", en: "Direct ARS transfer" },
      icon: "🇦🇷",
    },
    CL: {
      nombre: "Webpay / Transferencia",
      desc: { es: "Pesos chilenos transferencia directa", en: "Direct CLP transfer" },
      icon: "🇨🇱",
    },
    PE: {
      nombre: "Yape / Plin / BCP",
      desc: { es: "Soles peruanos transferencia inmediata", en: "Direct PEN transfer" },
      icon: "🇵🇪",
    },
  };

  const local = metodosLocales[pais.codigo];

  return (
    <div className="mt-12 rounded-3xl border border-line bg-surface/50 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            {lang === "es" ? "Facilidad de Pago" : "Payment Options"}
          </p>
          <h3 className="text-xl font-bold mt-1">
            {lang === "es" ? "Métodos de Pago Aceptados" : "Accepted Payment Methods"}
          </h3>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-line bg-background px-3 py-1.5 text-xs text-muted">
          <span>{pais.bandera}</span>
          <span>{lang === "es" ? `Mostrando para ${pais.nombre}` : `Showing for ${pais.nombre}`}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Si hay método local específico para el país seleccionado (ej. Venezuela = Pago Móvil) */}
        {local && (
          <div className="flex items-start gap-3 rounded-2xl border border-accent/60 bg-accent/10 p-4">
            <span className="text-2xl leading-none">{local.icon}</span>
            <div>
              <p className="text-sm font-bold text-foreground flex items-center gap-1.5">
                {local.nombre}
                <span className="text-[10px] rounded-md bg-accent text-accent-ink px-1.5 py-0.5 font-bold uppercase">
                  Local
                </span>
              </p>
              <p className="text-xs text-muted mt-0.5">{local.desc[lang]}</p>
            </div>
          </div>
        )}

        {/* Métodos internacionales */}
        {metodosGlobales.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-3 rounded-2xl border p-4 transition-colors ${
              m.destacado ? "border-amber-500/50 bg-amber-500/5" : "border-line bg-background"
            }`}
          >
            <span className="text-2xl leading-none">{m.icon}</span>
            <div>
              <p className="text-sm font-semibold text-foreground">{m.nombre}</p>
              <p className="text-xs text-muted mt-0.5">{m.desc[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
