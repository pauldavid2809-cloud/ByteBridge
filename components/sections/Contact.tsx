"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { whatsappLink } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";

const inputClass =
  "w-full rounded-xl border border-line bg-background px-4 py-3 text-sm " +
  "text-foreground placeholder:text-muted/60 transition-colors duration-200 " +
  "hover:border-foreground/20";

type Estado = "idle" | "enviando" | "enviado" | "error";

export function Contact() {
  const { lang } = useLanguage();
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
      className="pb-32 md:pb-36"
    >
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-14">
        {/* Alternativa directa: WhatsApp */}
        <Card className="h-fit p-7">
          <h3 className="text-lg font-semibold">{t.directTitle[lang]}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {t.directDesc[lang]}
          </p>
          <Button href={whatsappLink()} variant="secondary" className="mt-6 w-full">
            <WhatsAppIcon className="h-4 w-4 text-accent" />
            {t.directBtn[lang]}
          </Button>
        </Card>

        {/* Formulario */}
        {estado === "enviado" ? (
          <Card className="flex flex-col items-start justify-center gap-3 p-8">
            <p className="font-display text-2xl font-semibold text-accent">
              {t.receivedTitle[lang]}
            </p>
            <p className="text-foreground/90">
              {t.receivedDesc[lang]}
            </p>
            <button
              type="button"
              onClick={() => setEstado("idle")}
              className="mt-2 text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              {t.sendAnother[lang]}
            </button>
          </Card>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
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
                <label htmlFor="nombre" className="mb-2 block text-sm font-medium">
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
                <label htmlFor="negocio" className="mb-2 block text-sm font-medium">
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
              <label htmlFor="tipo_proyecto" className="mb-2 block text-sm font-medium">
                {t.labelProjectType[lang]}
              </label>
              <select
                id="tipo_proyecto"
                name="tipo_proyecto"
                defaultValue="no sé todavía"
                className={`${inputClass} appearance-none`}
              >
                {t.types.map((tipo) => (
                  <option key={tipo.value} value={tipo.value} className="bg-surface">
                    {tipo.label[lang]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="mb-2 block text-sm font-medium">
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
              <p role="alert" className="text-sm text-red-400">
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

            <Button type="submit" disabled={estado === "enviando"} className="sm:self-start">
              {estado === "enviando" ? t.sending[lang] : t.sendBtn[lang]}
            </Button>
          </form>
        )}
      </div>
    </Section>
  );
}
