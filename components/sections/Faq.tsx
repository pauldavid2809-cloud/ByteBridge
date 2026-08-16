"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/context/LanguageContext";
import { useCurrency } from "@/context/CurrencyContext";

const faqs = [
  {
    id: "tiempo",
    q: {
      es: "¿En cuántos días entregan mi página web o sistema?",
      en: "How long does it take to deliver my website or system?",
    },
    a: {
      es: "Depende del paquete: una Landing Page Express está lista en 3 a 5 días; una Web Completa en 7 a 10 días; y un Sistema a Medida en 15 a 20 días. Todo con entregas por etapas para tu revisión.",
      en: "It depends on the package: a Landing Express is ready in 3-5 days; a Full Website in 7-10 days; and a Custom App in 15-20 days. Delivered in stages for your review.",
    },
  },
  {
    id: "pagos",
    q: {
      es: "¿Cómo son las formas de pago?",
      en: "What are the payment terms?",
    },
    a: {
      es: "Se trabaja con 50% de inicial al arrancar el diseño y desarrollo, y 50% restante contra entrega final una vez que revises y apruebes la web funcionando al 100%.",
      en: "Payment is structured as 50% upfront to start design and engineering, and the remaining 50% upon final delivery once you review and approve the live site.",
    },
  },
  {
    id: "metodos",
    q: {
      es: "¿Qué métodos de pago aceptan?",
      en: "Which payment methods do you accept?",
    },
    a: {
      es: "Aceptamos Binance Pay (USDT), Zelle, Tarjetas de crédito/débito (Visa, Mastercard, PayPal), Transferencia bancaria internacional en USD/EUR, y si estás en Venezuela también contamos con Pago Móvil a la tasa oficial del día.",
      en: "We accept Binance Pay (USDT), Zelle, Credit/Debit Cards (Visa, Mastercard, PayPal), USD/EUR international bank transfers, and local payment methods depending on your region.",
    },
  },
  {
    id: "dominio",
    q: {
      es: "¿El código y la página son 100% de mi propiedad?",
      en: "Is the website code 100% mine?",
    },
    a: {
      es: "Sí. A diferencia de plataformas cerradas como Shopify o Wix que te atan a mensualidades perpetuas, con byte/bridge el código fuente es 100% tuyo y no dependes de nadie.",
      en: "Yes. Unlike closed platforms like Shopify or Wix that lock you into lifetime monthly fees, with byte/bridge the source code is 100% yours with zero vendor lock-in.",
    },
  },
  {
    id: "soporte",
    q: {
      es: "¿Incluye soporte post-entrega si necesito ayuda?",
      en: "Does it include post-launch support if I need help?",
    },
    a: {
      es: "Absolutamente. Todos los proyectos incluyen 30 días de garantía y soporte técnico gratuito post-entrega para resolver dudas, realizar pequeños ajustes y garantizar que todo funcione perfecto.",
      en: "Absolutely. All projects include a 30-day post-launch warranty and free technical support to answer questions, apply small tweaks, and ensure flawless operation.",
    },
  },
];

export function Faq() {
  const { lang } = useLanguage();
  const [abiertos, setAbiertos] = useState<string[]>(["tiempo"]);

  const toggle = (id: string) => {
    setAbiertos((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <Section
      id="faq"
      eyebrow={lang === "es" ? "Resuelve tus dudas" : "FAQ"}
      title={lang === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
      subtitle={
        lang === "es"
          ? "Todo lo que necesitas saber antes de iniciar tu proyecto web."
          : "Everything you need to know before starting your web project."
      }
    >
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq) => {
          const abierto = abiertos.includes(faq.id);
          return (
            <div
              key={faq.id}
              className="rounded-2xl border border-line bg-surface/60 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-foreground hover:text-accent transition-colors"
              >
                <span>{faq.q[lang]}</span>
                <span className={`ml-3 text-lg font-bold text-accent transition-transform duration-200 shrink-0 ${abierto ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {abierto && (
                <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-muted leading-relaxed border-t border-line/40">
                  <p className="mt-3">{faq.a[lang]}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
