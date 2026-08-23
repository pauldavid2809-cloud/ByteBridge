"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { whatsappLink } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import { useCurrency } from "@/context/CurrencyContext";
import { dictionary } from "@/data/dictionary";

const inputClass =
  "w-full rounded-xl border border-line bg-background/80 px-4 py-3 text-base sm:text-sm " +
  "text-foreground placeholder:text-muted/60 transition-[border-color,box-shadow] duration-150 " +
  "hover:border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent/40 focus:outline-none";

type Estado = "idle" | "enviando" | "enviado" | "error";

export function Contact() {
  const { lang } = useLanguage();
  const { ocultarPrecios } = useCurrency();
  const t = dictionary.contact;

  const [estado, setEstado] = useState<Estado>("idle");
  const [errorValidacion, setErrorValidacion] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot anti-spam
    if (data.get("sitio_web")) return;

    const nombre = String(data.get("nombre") ?? "").trim();
    const negocio = String(data.get("negocio") ?? "").trim();
    const tipoProyecto = String(data.get("tipo_proyecto") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();

    // Validación básica: nombre y mensaje obligatorios
    if (!nombre || !mensaje) {
      setErrorValidacion(t.requiredError[lang]);
      return;
    }
    setErrorValidacion("");
    setEstado("enviando");

    const { getSupabase } = await import("@/lib/supabase");
    const supabase = getSupabase();
    if (!supabase) {
      setEstado("error");
      return;
    }

    const { error } = await supabase.from("leads").insert({
      nombre,
      negocio: negocio || null,
      tipo_proyecto: tipoProyecto || null,
      mensaje,
    });

    if (error) {
      setEstado("error");
      return;
    }
    form.reset();
    setEstado("enviado");
  }

  return (
    <Section
      id="contacto"
      eyebrow={t.eyebrow[lang]}
      title={t.title[lang]}
      subtitle={t.subtitle[lang]}
      className="pb-16 sm:pb-20 md:pb-24"
    >
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12 items-start">
        {/* Alternativa directa: WhatsApp */}
        <Card className="p-7 sm:p-8 space-y-4 rounded-[2rem] border-line bg-surface/80 card-bezel">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 text-accent">
            <WhatsAppIcon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-foreground">{t.directTitle[lang]}</h3>
          <p className="text-sm leading-relaxed text-muted">
            {t.directDesc[lang]}
          </p>
          <div className="pt-2">
            <Button href={whatsappLink()} size="lg" className="w-full shadow-lg shadow-accent/15">
              <WhatsAppIcon className="h-4.5 w-4.5" />
              {t.directBtn[lang]}
            </Button>
          </div>
          <p className="text-[11px] text-muted text-center pt-2">
            {lang === "es" ? "Respuesta promedio: menos de 15 minutos" : "Average reply: under 15 minutes"}
          </p>
        </Card>

        {/* Formulario */}
        {estado === "enviado" ? (
          <Card className="flex flex-col items-start justify-center gap-3 p-8 rounded-[2rem] border-accent/40 bg-accent/5 card-bezel-active">
            <p className="font-display text-2xl font-bold text-accent">
              {t.receivedTitle[lang]}
            </p>
            <p className="text-foreground/90">
              {t.receivedDesc[lang]}
            </p>
            <button
              type="button"
              onClick={() => setEstado("idle")}
              className="mt-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              {t.sendAnother[lang]}
            </button>
          </Card>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 p-7 sm:p-8 rounded-[2rem] border border-line bg-surface/70 card-bezel">
            {/* Honeypot */}
            <input
              type="text"
              name="sitio_web"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted">
                  {t.labelName[lang]} <span className="text-accent">*</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder={t.placeholderName[lang]}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="negocio" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted">
                  {t.labelBusiness[lang]}
                </label>
                <input
                  id="negocio"
                  name="negocio"
                  type="text"
                  placeholder={t.placeholderBusiness[lang]}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="tipo_proyecto" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted">
                {t.labelProjectType[lang]}
              </label>
              <select
                id="tipo_proyecto"
                name="tipo_proyecto"
                defaultValue="no sé todavía"
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                {t.types.map((tipo) => {
                  let labelTexto = tipo.label[lang];
                  if (ocultarPrecios) {
                    labelTexto = labelTexto.replace(/\s*\([^)]*\)/g, "");
                  }
                  return (
                    <option key={tipo.value} value={tipo.value} className="bg-surface text-foreground">
                      {labelTexto}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted">
                {t.labelMessage[lang]} <span className="text-accent">*</span>
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={4}
                placeholder={t.placeholderMessage[lang]}
                className={`${inputClass} resize-y`}
              />
            </div>

            {errorValidacion && (
              <p role="alert" className="text-sm font-semibold text-red-400">
                {errorValidacion}
              </p>
            )}

            {estado === "error" && (
              <div
                role="alert"
                className="rounded-2xl border border-red-400/30 bg-surface p-5"
              >
                <p className="text-sm text-foreground/90">
                  {t.connectionError[lang]}
                </p>
              </div>
            )}

            <Button type="submit" size="lg" disabled={estado === "enviando"} className="w-full sm:w-auto shadow-md">
              {estado === "enviando" ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-accent-ink border-t-transparent animate-spin" />
                  <span>{t.sending[lang]}</span>
                </>
              ) : (
                t.sendBtn[lang]
              )}
            </Button>
          </form>
        )}
      </div>
    </Section>
  );
}
