"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { whatsappLink } from "@/lib/config";

/** Opciones del select "¿Qué necesitas?" (coinciden con los paquetes) */
const tiposProyecto = [
  { value: "landing", label: "Landing page" },
  { value: "web completa", label: "Web completa" },
  { value: "sistema a medida", label: "Sistema a medida" },
  { value: "no sé todavía", label: "No sé todavía" },
];

/** Estilo compartido de inputs, select y textarea */
const inputClass =
  "w-full rounded-xl border border-line bg-background px-4 py-3 text-sm " +
  "text-foreground placeholder:text-muted/60 transition-colors duration-200 " +
  "hover:border-foreground/20";

type Estado = "idle" | "enviando" | "enviado" | "error";

export function Contact() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [errorValidacion, setErrorValidacion] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot anti-spam: campo invisible que solo llenan los bots
    if (data.get("sitio_web")) return;

    const nombre = String(data.get("nombre") ?? "").trim();
    const negocio = String(data.get("negocio") ?? "").trim();
    const tipoProyecto = String(data.get("tipo_proyecto") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();

    // Validación básica: nombre y mensaje obligatorios
    if (!nombre || !mensaje) {
      setErrorValidacion("Tu nombre y el mensaje son obligatorios.");
      return;
    }
    setErrorValidacion("");
    setEstado("enviando");

    // Import diferido: el cliente de Supabase (~85 KB) solo se descarga
    // cuando alguien envía el formulario, no en la carga inicial
    const { getSupabase } = await import("@/lib/supabase");
    const supabase = getSupabase();
    if (!supabase) {
      // Faltan variables de entorno → no romper: ofrecer WhatsApp
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
      eyebrow="Contacto"
      title="Cuéntame qué necesitas"
      subtitle="Respondo en menos de 24 horas con una propuesta concreta."
      className="pb-32 md:pb-36" /* aire extra para que el botón flotante no tape nada */
    >
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-14">
        {/* Alternativa directa: WhatsApp siempre visible */}
        <Card className="h-fit p-7">
          <h3 className="text-lg font-semibold">¿Prefieres directo?</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Sin formularios: escríbeme por WhatsApp y hablamos de tu proyecto
            hoy mismo.
          </p>
          <Button href={whatsappLink()} variant="secondary" className="mt-6 w-full">
            <WhatsAppIcon className="h-4 w-4 text-accent" />
            Escríbeme por WhatsApp
          </Button>
        </Card>

        {/* Formulario → tabla `leads` en Supabase */}
        {estado === "enviado" ? (
          <Card className="flex flex-col items-start justify-center gap-3 p-8">
            <p className="font-display text-2xl font-semibold text-accent">
              Recibido ✓
            </p>
            <p className="text-foreground/90">
              Gracias por escribir. Te respondo en menos de 24 horas.
            </p>
            <button
              type="button"
              onClick={() => setEstado("idle")}
              className="mt-2 text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              Enviar otro mensaje
            </button>
          </Card>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            {/* Honeypot: oculto para humanos, visible para bots */}
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
                  Nombre <span className="text-accent">*</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="negocio" className="mb-2 block text-sm font-medium">
                  Negocio
                </label>
                <input
                  id="negocio"
                  name="negocio"
                  type="text"
                  placeholder="Nombre de tu negocio"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="tipo_proyecto" className="mb-2 block text-sm font-medium">
                ¿Qué necesitas?
              </label>
              <select
                id="tipo_proyecto"
                name="tipo_proyecto"
                defaultValue="no sé todavía"
                className={`${inputClass} appearance-none`}
              >
                {tiposProyecto.map((tipo) => (
                  <option key={tipo.value} value={tipo.value} className="bg-surface">
                    {tipo.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="mb-2 block text-sm font-medium">
                Mensaje <span className="text-accent">*</span>
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={4}
                placeholder="Cuéntame de tu negocio y qué te gustaría lograr"
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
                  No se pudo enviar el mensaje (fallo de conexión). Escríbeme
                  directo por{" "}
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline underline-offset-4"
                  >
                    WhatsApp
                  </a>{" "}
                  y te atiendo igual.
                </p>
              </div>
            )}

            <Button type="submit" disabled={estado === "enviando"} className="sm:self-start">
              {estado === "enviando" ? "Enviando…" : "Enviar mensaje"}
            </Button>
          </form>
        )}
      </div>
    </Section>
  );
}
