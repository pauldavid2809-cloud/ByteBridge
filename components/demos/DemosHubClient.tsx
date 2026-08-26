"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { BusinessDemo } from "@/data/demosData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type Props = {
  demos: BusinessDemo[];
};

export function DemosHubClient({ demos }: Props) {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const handleCopyLink = (slug: string, name: string) => {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://bytebridge.cloud";
    const fullUrl = `${origin}/demos/${slug}`;
    const pitchText = `Hola, te comparto la propuesta y demo interactiva que preparamos especialmente para ${name}: ${fullUrl}`;

    navigator.clipboard.writeText(pitchText);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const filteredDemos = demos.filter((d) => {
    if (filter === "all") return true;
    if (filter === "gastro") {
      return (
        d.slug === "grandchef" ||
        d.slug === "zuhouse" ||
        d.slug === "tannous" ||
        d.slug === "ciaogastrobar"
      );
    }
    if (filter === "night") {
      return (
        d.slug === "room101" ||
        d.slug === "labarraventura" ||
        d.slug === "blaomcbo"
      );
    }
    if (filter === "ent") {
      return (
        d.slug === "ecoland" ||
        d.slug === "pittsbowling" ||
        d.slug === "corner"
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black">
      <Header />

      <main className="px-4 pt-28 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header del Hub */}
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-bold text-amber-300">
              ⚡ 10 Demos Interactivas Desarrolladas
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Catálogo de Propuestas & Demos Comerciales
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-zinc-400 sm:text-base">
              WebApps personalizadas con reservas por código QR, menú digital con conversión a tasa oficial y modo gerente en tiempo real.
            </p>
          </div>

          {/* Filtros de Categoría */}
          <div className="mt-10 flex justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "all", label: "✨ Todas (10)" },
              { id: "gastro", label: "🍽️ Restaurantes & Gourmet (4)" },
              { id: "night", label: "🍸 Restobares & Rumba (3)" },
              { id: "ent", label: "🎳 Hotel & Entretenimiento (3)" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all active:scale-95 ${
                  filter === f.id
                    ? "bg-white text-black shadow-lg"
                    : "border border-white/10 bg-zinc-900/80 text-zinc-400 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid de las 10 Tarjetas de Demos */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDemos.map((demo) => {
              const isCopied = copiedSlug === demo.slug;

              return (
                <motion.div
                  key={demo.slug}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-md transition-all hover:border-white/20 hover:bg-zinc-900/90 shadow-xl"
                >
                  <div>
                    {/* Cabecera de la Tarjeta */}
                    <div className="flex items-center gap-3.5">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-white/20 shadow-md">
                        <Image
                          src={demo.logo}
                          alt={demo.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <h2 className="text-base font-bold text-white tracking-tight">
                          {demo.name}
                        </h2>
                        <span className="text-xs text-zinc-400">
                          @{demo.handle}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="inline-block rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-amber-300">
                        {demo.category}
                      </span>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-zinc-300 line-clamp-2">
                      {demo.tagline}
                    </p>

                    {/* Características clave */}
                    <div className="mt-4 space-y-1.5 border-t border-white/5 pt-3 text-[11px] text-zinc-400">
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-400">✓</span>
                        <span className="text-zinc-200">{demo.bookingTitle}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-400">✓</span>
                        <span>Menú con {demo.menuItems.length} platillos/servicios</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-400">✓</span>
                        <span>Modo Gerente & Escáner QR</span>
                      </div>
                    </div>
                  </div>

                  {/* Acciones de la Tarjeta */}
                  <div className="mt-6 flex flex-col gap-2.5 border-t border-white/10 pt-4">
                    <Link
                      href={`/demos/${demo.slug}`}
                      className="flex items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-xs font-bold text-black shadow transition-all active:scale-[0.97] hover:bg-zinc-200"
                    >
                      <span>Abrir Demo en Vivo</span>
                      <span>→</span>
                    </Link>

                    <button
                      onClick={() => handleCopyLink(demo.slug, demo.name)}
                      className={`flex items-center justify-center gap-1.5 rounded-xl border py-2 text-xs font-semibold transition-all active:scale-[0.97] ${
                        isCopied
                          ? "border-emerald-500 bg-emerald-500/20 text-emerald-300"
                          : "border-white/15 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span>{isCopied ? "✓" : "📋"}</span>
                      <span>
                        {isCopied
                          ? "¡Mensaje y Enlace Copiado!"
                          : "Copiar Enlace para WhatsApp"}
                      </span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
