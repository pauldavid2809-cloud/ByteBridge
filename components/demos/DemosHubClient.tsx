"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { BusinessDemo } from "@/data/demosData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RemotionReelModal } from "@/components/demos/RemotionReelModal";

type Props = {
  demos: BusinessDemo[];
};

export function DemosHubClient({ demos }: Props) {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeReelDemo, setActiveReelDemo] = useState<BusinessDemo | null>(null);
  const [selectedPitchDemo, setSelectedPitchDemo] = useState<BusinessDemo | null>(null);

  const handleCopyPitch = (demo: BusinessDemo) => {
    navigator.clipboard.writeText(demo.whatsappPitchCopy);
    setCopiedSlug(demo.slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const filteredDemos = demos.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (filter === "all") return true;
    if (filter === "gastro") {
      return [
        "grandchef",
        "zuhouse",
        "tannous",
        "ciaogastrobar",
        "estacionholidays",
        "mosaico_mcbo",
        "incontrotrattoria",
        "lakebistro",
        "bromcbo",
      ].includes(d.slug);
    }
    if (filter === "night") {
      return [
        "room101",
        "labarraventura",
        "blaomcbo",
        "mykonosconceptve",
        "terraza_restobar",
      ].includes(d.slug);
    }
    if (filter === "ent") {
      return [
        "ecoland",
        "pittsbowling",
        "corner",
        "pinzulia",
        "alfredscoffeebar",
        "ahpresidente",
      ].includes(d.slug);
    }
    return true;
  });

  const countGastro = demos.filter((d) =>
    [
      "grandchef",
      "zuhouse",
      "tannous",
      "ciaogastrobar",
      "estacionholidays",
      "mosaico_mcbo",
      "incontrotrattoria",
      "lakebistro",
      "bromcbo",
    ].includes(d.slug)
  ).length;

  const countNight = demos.filter((d) =>
    [
      "room101",
      "labarraventura",
      "blaomcbo",
      "mykonosconceptve",
      "terraza_restobar",
    ].includes(d.slug)
  ).length;

  const countEnt = demos.filter((d) =>
    [
      "ecoland",
      "pittsbowling",
      "corner",
      "pinzulia",
      "alfredscoffeebar",
      "ahpresidente",
    ].includes(d.slug)
  ).length;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black">
      <Header />

      <main className="px-4 pt-28 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header del Hub */}
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-bold text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              20 Demos Comerciales + Reels en Remotion
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Catálogo de Propuestas, WebApps & Reels
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-zinc-400 sm:text-base">
              WebApps interactivas con reservaciones por código QR, menú digital multimoneda (USD/Bs), panel de control y **videos verticales (Reels) generados con Remotion**.
            </p>

            {/* Buscador de Demos */}
            <div className="mx-auto mt-6 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar por negocio o sector..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border border-white/15 bg-zinc-900/90 pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                />
                <svg
                  className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Filtros por Categoría */}
          <div className="mt-8 flex justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "all", label: `Todas (${demos.length})` },
              { id: "gastro", label: `Restaurantes & Gourmet (${countGastro})` },
              { id: "night", label: `Restobares & Sunset (${countNight})` },
              { id: "ent", label: `Hotel, Bowling & Café (${countEnt})` },
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
                    <div className="flex items-center justify-between">
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

                      {/* Botón rápido para abrir el Reel */}
                      <button
                        onClick={() => setActiveReelDemo(demo)}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-amber-300 shadow transition-all active:scale-90 hover:bg-amber-400/20"
                        title="Ver Reel en Video"
                      >
                        <span className="text-xs">▶️</span>
                      </button>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <span
                        className="inline-block rounded-md px-2.5 py-1 text-[11px] font-semibold"
                        style={{
                          backgroundColor: `${demo.palette.accent}20`,
                          color: demo.palette.accent,
                        }}
                      >
                        {demo.category}
                      </span>

                      <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-zinc-300">
                        🎬 Reel 15s
                      </span>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-zinc-300 line-clamp-2">
                      {demo.tagline}
                    </p>

                    {/* Características clave */}
                    <div className="mt-4 space-y-1.5 border-t border-white/5 pt-3 text-[11px] text-zinc-400">
                      <div className="flex items-center gap-1.5">
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          style={{ color: demo.palette.accent }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-zinc-200">{demo.bookingTitle}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          style={{ color: demo.palette.accent }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Menú con {demo.menuItems.length} platillos/servicios</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          style={{ color: demo.palette.accent }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Reel en Video + Modo Gerente</span>
                      </div>
                    </div>
                  </div>

                  {/* Acciones de la Tarjeta */}
                  <div className="mt-6 flex flex-col gap-2.5 border-t border-white/10 pt-4">
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/demos/${demo.slug}`}
                        className="flex items-center justify-center gap-1.5 rounded-xl bg-white py-2.5 text-xs font-bold text-black shadow transition-all active:scale-[0.97] hover:bg-zinc-200"
                      >
                        <span>Abrir Demo</span>
                        <span>→</span>
                      </Link>

                      <button
                        onClick={() => setActiveReelDemo(demo)}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-amber-400/40 bg-amber-400/10 py-2.5 text-xs font-bold text-amber-300 transition-all active:scale-[0.97] hover:bg-amber-400/20"
                      >
                        <span>▶️</span>
                        <span>Ver Reel</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleCopyPitch(demo)}
                        className={`flex items-center justify-center gap-1 rounded-xl border py-2 text-[11px] font-semibold transition-all active:scale-[0.97] ${
                          isCopied
                            ? "border-emerald-500 bg-emerald-500/20 text-emerald-300"
                            : "border-white/15 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span>{isCopied ? "✓" : "📋"}</span>
                        <span>{isCopied ? "¡Copiado!" : "Copiar Copy"}</span>
                      </button>

                      <button
                        onClick={() => setSelectedPitchDemo(demo)}
                        className="flex items-center justify-center gap-1 rounded-xl border border-white/15 bg-white/5 py-2 text-[11px] font-semibold text-zinc-300 transition-all active:scale-[0.97] hover:bg-white/10 hover:text-white"
                      >
                        <span>💬</span>
                        <span>Ver Mensaje</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Modal de Remotion Player activo */}
      {activeReelDemo && (
        <RemotionReelModal
          isOpen={!!activeReelDemo}
          onClose={() => setActiveReelDemo(null)}
          demo={activeReelDemo}
        />
      )}

      {/* Modal para ver y copiar el Copy de WhatsApp completo */}
      <AnimatePresence>
        {selectedPitchDemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPitchDemo(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative z-10 w-full max-w-lg rounded-3xl border border-white/20 bg-zinc-950 p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">💬</span>
                  <h3 className="text-base font-bold text-white">
                    Copy de WhatsApp para {selectedPitchDemo.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPitchDemo(null)}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-zinc-400 hover:bg-white/20 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-900/90 p-4 font-mono text-xs leading-relaxed text-zinc-200 whitespace-pre-wrap selection:bg-amber-400 selection:text-black">
                {selectedPitchDemo.whatsappPitchCopy}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(selectedPitchDemo.whatsappPitchCopy);
                    setCopiedSlug(selectedPitchDemo.slug);
                    setTimeout(() => setCopiedSlug(null), 2000);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-xs font-bold text-black shadow transition-all active:scale-95 hover:bg-zinc-200"
                >
                  <span>{copiedSlug === selectedPitchDemo.slug ? "✓" : "📋"}</span>
                  <span>
                    {copiedSlug === selectedPitchDemo.slug
                      ? "¡Mensaje Copiado!"
                      : "Copiar al Portapapeles"}
                  </span>
                </button>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    selectedPitchDemo.whatsappPitchCopy
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs font-bold text-black shadow transition-all active:scale-95 hover:bg-emerald-400"
                >
                  <span>📲</span>
                  <span>Abrir en WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
