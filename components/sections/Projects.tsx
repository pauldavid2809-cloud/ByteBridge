import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { proyectos } from "@/data/proyectos";

/**
 * Grid de casos. El contenido vive en data/proyectos.ts —
 * este componente solo lo pinta.
 */
export function Projects() {
  return (
    <Section
      id="proyectos"
      eyebrow="Proyectos"
      title="Casos reales, resultados reales"
      subtitle="Cada proyecto se construyó desde cero para resolver un problema concreto de un negocio."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((proyecto) => (
          <Link
            key={proyecto.slug}
            href={`/proyectos/${proyecto.slug}`}
            className="group rounded-2xl"
          >
            <Card interactive className="flex h-full flex-col overflow-hidden">
              {/* Imagen del caso, o placeholder con el logo si no hay */}
              <div className="relative flex aspect-[16/10] items-center justify-center border-b border-line bg-background">
                {proyecto.imagen ? (
                  <Image
                    src={proyecto.imagen}
                    alt={`Captura del proyecto ${proyecto.nombre}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <Logo className="h-12 w-auto text-accent/20 transition-colors duration-200 group-hover:text-accent/40" />
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{proyecto.nombre}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {proyecto.resultado}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {proyecto.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
