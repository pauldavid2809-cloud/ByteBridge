import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getProyecto, proyectos } from "@/data/proyectos";
import { whatsappLink } from "@/lib/config";

type Props = { params: Promise<{ slug: string }> };

/** Genera estáticamente una página por cada caso de data/proyectos.ts */
export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

/** Solo existen las rutas de los casos definidos (404 para el resto) */
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = getProyecto(slug);
  if (!proyecto) return {};
  // El layout agrega "— byte/bridge" al title vía template
  return {
    title: proyecto.nombre,
    description: proyecto.descripcion,
    openGraph: {
      title: proyecto.nombre,
      description: proyecto.resultado,
    },
  };
}

/** Bloque Problema / Solución / Resultado con etiqueta y número visibles */
function Bloque({
  numero,
  etiqueta,
  children,
}: {
  numero: string;
  etiqueta: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative border-l border-line pb-12 pl-8 last:pb-0 sm:pl-10">
      {/* Punto verde sobre la línea vertical */}
      <span
        aria-hidden="true"
        className="absolute top-1 -left-[5px] h-2.5 w-2.5 rounded-full bg-accent"
      />
      <p className="font-display text-sm font-medium tracking-widest text-accent uppercase">
        <span className="mr-2 text-muted">{numero}</span>
        {etiqueta}
      </p>
      <div className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg">
        {children}
      </div>
    </div>
  );
}

export default async function ProyectoPage({ params }: Props) {
  const { slug } = await params;
  const proyecto = getProyecto(slug);
  if (!proyecto) notFound();

  return (
    <>
      <Header />
      <main className="px-5 pt-16 sm:px-8">
        <article className="mx-auto w-full max-w-4xl py-16 md:py-24">
          {/* Volver al grid de proyectos */}
          <Link
            href="/#proyectos"
            className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
          >
            ← Todos los proyectos
          </Link>

          <header className="mt-8">
            <div className="flex flex-wrap gap-2">
              {proyecto.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-3xl font-semibold text-balance sm:text-5xl">
              {proyecto.nombre}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">{proyecto.descripcion}</p>
            
            {proyecto.demo && (
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={proyecto.demo} variant="secondary">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-accent"
                  />
                  Ver demo en vivo
                </Button>
              </div>
            )}
          </header>

          {/* Imagen del caso (o placeholder de marca) */}
          <div className="relative mt-12 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface">
            {proyecto.imagen ? (
              <Image
                src={proyecto.imagen}
                alt={`Captura del proyecto ${proyecto.nombre}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            ) : (
              <Logo className="h-16 w-auto text-accent/20" />
            )}
          </div>

          {/* Problema → Solución → Resultado */}
          <div className="mt-16">
            <Bloque numero="01" etiqueta="El problema">
              {proyecto.problema}
            </Bloque>
            <Bloque numero="02" etiqueta="La solución">
              {proyecto.solucion}
            </Bloque>
            <Bloque numero="03" etiqueta="El resultado">
              <p>{proyecto.resultadoDetalle}</p>
              {proyecto.metricas && proyecto.metricas.length > 0 && (
                <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                  {proyecto.metricas.map((metrica) => (
                    <Card key={metrica.etiqueta} className="flex flex-col p-5">
                      <dt className="order-2 mt-1 block text-sm text-muted">
                        {metrica.etiqueta}
                      </dt>
                      <dd className="font-display text-3xl font-semibold text-accent">
                        {metrica.valor}
                      </dd>
                    </Card>
                  ))}
                </dl>
              )}
            </Bloque>
          </div>

          {/* Credenciales de Acceso Demo (si existen) */}
          {proyecto.credencialesDemo && (
            <div className="mt-16 border-t border-line pt-12">
              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-ink font-bold text-sm">
                    🔑
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                      Credenciales de Acceso para la Demo
                    </h2>
                    <p className="text-xs text-muted">
                      {proyecto.credencialesDemo.nota ||
                        "Usa estos datos para iniciar sesión y explorar el panel administrativo:"}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-line/60 bg-surface p-4">
                    <span className="block text-xs text-muted">URL de Acceso</span>
                    <a
                      href={proyecto.credencialesDemo.url || proyecto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block font-mono text-xs text-accent hover:underline break-all"
                    >
                      {proyecto.credencialesDemo.url || proyecto.demo} ↗
                    </a>
                  </div>
                  <div className="rounded-xl border border-line/60 bg-surface p-4">
                    <span className="block text-xs text-muted">Email Demo</span>
                    <span className="mt-1 block font-mono text-xs text-foreground select-all font-semibold">
                      {proyecto.credencialesDemo.email}
                    </span>
                  </div>
                  <div className="rounded-xl border border-line/60 bg-surface p-4">
                    <span className="block text-xs text-muted">Contraseña Demo</span>
                    <span className="mt-1 block font-mono text-xs text-foreground select-all font-semibold">
                      {proyecto.credencialesDemo.password}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Módulos y Enlaces Directos (si existen) */}
          {proyecto.modulos && proyecto.modulos.length > 0 && (
            <div className="mt-16 border-t border-line pt-12">
              <h2 className="text-xl font-semibold sm:text-2xl">Módulos y Enlaces del Proyecto</h2>
              <p className="mt-2 text-sm text-muted">
                Acceso directo a todos los entornos funcionales y recursos del proyecto:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {proyecto.modulos.map((modulo) => (
                  <a
                    key={modulo.url}
                    href={modulo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card interactive className="flex h-full flex-col justify-between p-5">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                            {modulo.nombre}
                          </h3>
                          <span className="text-xs text-muted group-hover:text-accent transition-colors">↗</span>
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-muted">
                          {modulo.descripcion}
                        </p>
                      </div>
                      <span className="mt-4 font-mono text-[11px] text-accent/80 break-all">
                        {modulo.url}
                      </span>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Características Destacadas (si existen) */}
          {proyecto.caracteristicas && proyecto.caracteristicas.length > 0 && (
            <div className="mt-16 border-t border-line pt-12">
              <h2 className="text-xl font-semibold sm:text-2xl">Características Destacadas</h2>
              <ul className="mt-6 grid gap-3">
                {proyecto.caracteristicas.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-line/60 bg-surface/50 p-4 text-sm text-foreground/90"
                  >
                    <span className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stack usado */}
          <p className="mt-14 text-sm text-muted">
            <span className="font-medium text-foreground">Construido con:</span>{" "}
            {proyecto.stack.join(" · ")}
          </p>

          {/* CTA final del caso */}
          <Card className="mt-14 flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">¿Tu negocio necesita algo así?</h2>
              <p className="mt-1.5 text-sm text-muted">
                Cuéntame tu caso y te digo qué construiría y cuánto costaría.
              </p>
            </div>
            <Button
              href={whatsappLink(
                `Hola, vi el caso "${proyecto.nombre}" y quiero algo así para mi negocio.`
              )}
              className="shrink-0"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Hablemos
            </Button>
          </Card>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
