import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { whatsappLink } from "@/lib/config";
import { mantenimiento, notaPago, paquetes } from "@/data/servicios";

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
 * Paquetes y precios. El contenido vive en data/servicios.ts —
 * este componente solo lo pinta.
 */
export function Services() {
  return (
    <Section
      id="servicios"
      eyebrow="Servicios"
      title="Precios claros, sin sorpresas"
      subtitle="Tres formas de trabajar juntos. Todas incluyen diseño propio y una web que carga al instante."
    >
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {paquetes.map((paquete) => (
          <Card
            key={paquete.nombre}
            className={`relative flex h-full flex-col p-7 ${
              paquete.destacado
                ? "border-accent/60 bg-accent/[0.04] lg:-mt-4 lg:mb-[-1rem] lg:py-11"
                : ""
            }`}
          >
            {paquete.destacado && (
              <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-ink">
                Recomendado
              </span>
            )}

            <h3 className="text-lg font-semibold">{paquete.nombre}</h3>
            <p className="mt-3 font-display text-3xl font-semibold text-foreground">
              {paquete.precio}
              <span className="ml-2 align-middle text-sm font-normal text-muted">
                {paquete.notaPrecio}
              </span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{paquete.descripcion}</p>

            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {paquete.incluye.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-foreground/90">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              href={whatsappLink(paquete.ctaMensaje)}
              variant={paquete.destacado ? "primary" : "secondary"}
              className="mt-8 w-full"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Cotizar este paquete
            </Button>
          </Card>
        ))}
      </div>

      {/* Mantenimiento mensual */}
      <Card className="mt-10 flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-semibold">
            {mantenimiento.nombre}{" "}
            <span className="ml-1 font-display text-accent">{mantenimiento.precio}</span>
          </h3>
          <p className="mt-1.5 text-sm text-muted">{mantenimiento.descripcion}</p>
        </div>
        <Button
          href={whatsappLink(mantenimiento.ctaMensaje)}
          variant="secondary"
          className="shrink-0"
        >
          Me interesa
        </Button>
      </Card>

      {/* Condiciones de pago — visibles, sin letra pequeña escondida */}
      <p className="mt-8 text-center text-sm text-muted">{notaPago}</p>
    </Section>
  );
}
