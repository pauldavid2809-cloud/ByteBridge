import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/config";

/**
 * Hero: responde en 5 segundos qué hago y qué gana el cliente.
 * ✏️ EDITA AQUÍ el titular y subtítulo si quieres ajustar el copy.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden px-5 pt-16 sm:px-8"
    >
      {/* Resplandor verde muy sutil detrás del titular (decorativo) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[120px]"
      />
      {/* Símbolo de marca gigante, apenas visible, como textura de fondo */}
      <Logo className="pointer-events-none absolute -right-24 -bottom-16 h-72 w-auto text-accent/[0.03] sm:h-96" />

      <div className="relative mx-auto w-full max-w-6xl py-24 md:py-32">
        {/* Badge de rendimiento: predicar con el ejemplo */}
        <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Esta página carga en menos de 1s · Lighthouse 90+
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold text-balance sm:text-5xl md:text-6xl">
          Webs y sistemas a medida que convierten visitantes en{" "}
          <span className="text-accent">clientes</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
          Construyo tu página desde cero con tecnología moderna. Nada de
          plantillas: diseño propio, carga instantánea y código que es tuyo.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href={whatsappLink()} size="lg">
            <WhatsAppIcon className="h-4.5 w-4.5" />
            Cotiza por WhatsApp
          </Button>
          <Button href="#proyectos" variant="secondary" size="lg">
            Ver proyectos
          </Button>
        </div>
      </div>
    </section>
  );
}
