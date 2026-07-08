import Image from "next/image";
import { Logo } from "@/components/Logo";
import { Section } from "@/components/ui/Section";
import { sobreMi } from "@/data/sobre-mi";

/**
 * Sección "Sobre mí". Los textos, el stack y la foto
 * se editan en data/sobre-mi.ts — no aquí.
 */
export function About() {
  return (
    <Section id="sobre-mi" eyebrow="Sobre mí" title="Quién está detrás">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
        {/* Foto (o placeholder de marca mientras no haya foto) */}
        <div className="relative flex aspect-square w-40 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface sm:w-48">
          {sobreMi.foto ? (
            <Image
              src={sobreMi.foto}
              alt={`Foto de ${sobreMi.nombre}`}
              fill
              className="object-cover"
              sizes="192px"
            />
          ) : (
            <Logo className="h-10 w-auto text-accent/25" />
          )}
        </div>

        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold">{sobreMi.nombre}</h3>
          <p className="mt-1 text-sm text-muted">
            {sobreMi.rol} · {sobreMi.ubicacion}
          </p>

          <div className="mt-5 space-y-4">
            {sobreMi.bio.map((parrafo) => (
              <p key={parrafo} className="leading-relaxed text-foreground/90">
                {parrafo}
              </p>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {sobreMi.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
