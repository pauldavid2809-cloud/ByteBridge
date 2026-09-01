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
  const [modalTab, setModalTab] = useState<"pitch" | "voice" | "admin">("pitch");

  const voiceScripts: Record<string, string> = {
    lolapopspaleteria: "Hola equipo de Lola Pops, les habla Paul David de ByteBridge. En horas pico, explicar sabores, baños y toppings por WhatsApp quita tiempo valioso. Les construimos una WebApp interactiva con 'Paleta Builder' donde sus clientes arman su combinación en 3 clics y cotizan el carrito de eventos con tasa BCV en tiempo real. Miren la demo en el enlace adjunto.",
    keponke_ve: "Hola equipo de Ke Ponke, les habla Paul David de ByteBridge. Cuadrar dedicatorias, sabores de ponquecitos y horas de entrega por WhatsApp puede volverse un dolor de cabeza. Creamos para ustedes una WebApp con 'Gift Customizer' donde sus clientes arman su caja, escriben la dedicatoria y agendan el delivery en un minuto. Pruébenla en el enlace.",
    dolcezza_ve: "Hola equipo de Dolcezza, les habla Paul David de ByteBridge. Preguntar por WhatsApp qué porciones quedan en vitrina hace perder ventas todos los días. Les diseñamos una WebApp de Delivery Directo y Encargos donde sus clientes ven las tortas disponibles, eligen porción o entera y pagan a tasa BCV al instante. Vean la demo en el link.",
    tostaca_ve: "Hola equipo de Tostaca, les habla Paul David de ByteBridge. Vender bultos de platanitos al mayor por WhatsApp enviando listas en PDF retrasa pedidos de bodegones. Les armamos una WebApp con catálogo mayorista que calcula descuentos por volumen y tasa BCV en automático. Prueben la demo en el enlace.",
    elvarfoodandcoffee: "Hola equipo de El VAR, les habla Paul David de ByteBridge. En días de Champions o Clásicos, los clientes se desesperan esperando salonero para pedir otra ronda de cervezas. Creamos una WebApp con reserva por partido y auto-pedido en mesa por QR con tasa BCV automática. Vean la demo en el enlace adjunto.",
    sweetgiftve: "Hola equipo de Sweet Gift, les habla Paul David de ByteBridge. ¿Su equipo pierde horas coordinando dedicatorias, toppings y direcciones por WhatsApp? Con nuestra WebApp con personalizador interactivo, sus clientes diseñan su arreglo, programan la fecha exacta de entrega y pagan en 3 clics desde Maracaibo o el exterior. Miren la demo en el link.",
    olis_burger: "Hola equipo de Oli's Burger, les habla Paul David de ByteBridge. Si su salón se llena los fines de semana y el delivery les cobra 25% de comisión, con nuestra WebApp sus comensales piden y pagan desde su mesa con código QR, y reciben pedidos de delivery directo sin intermediarios. Vean la demo interactiva.",
    pokemolokai: "Hola equipo de Poke Molokai, les habla Paul David de ByteBridge. Con nuestra WebApp con constructor interactivo, sus clientes arman su Poke bowl paso a paso, eligen su proteína y salsas favoritas y ordenan en segundos sin enredos de mensajes por chat. Precisión total en cocina y más ventas al día. Chequeen la demo.",
    barako_rest: "Estimado equipo de Barako, les habla Paul David de ByteBridge. Para que la experiencia en su restaurante sea impecable desde antes de que el comensal pise su terraza, creamos una WebApp donde sus clientes VIP reservan su mesa, eligen su corte prime y reciben su confirmación digital con código QR. Miren la demo.",
    portovenerehotel: "Estimada gerencia de Hotel Portovenere, les habla Paul David de ByteBridge. Con nuestra WebApp VIP, sus clientes compran su Day Pass de piscina con pase QR, reservan suites al instante y piden servicio a la habitación desde su celular con tasa BCV al día. Miren la demo en el link.",
  };

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
    if (filter === "customizer") return d.archetype === "gift-customizer" || d.archetype === "item-builder";
    if (filter === "wholesale") return d.archetype === "wholesale-catalog";
    if (filter === "table-order") return d.archetype === "table-ordering";
    if (filter === "vip-pass") return d.archetype === "vip-access" || d.archetype === "match-booking";
    if (filter === "gourmet") return d.archetype === "gourmet-booking";
    if (filter === "delivery") return d.archetype === "direct-delivery";
    return true;
  });

  const countCustomizer = demos.filter((d) => d.archetype === "gift-customizer" || d.archetype === "item-builder").length;
  const countWholesale = demos.filter((d) => d.archetype === "wholesale-catalog").length;
  const countTableOrder = demos.filter((d) => d.archetype === "table-ordering").length;
  const countVipPass = demos.filter((d) => d.archetype === "vip-access" || d.archetype === "match-booking").length;
  const countGourmet = demos.filter((d) => d.archetype === "gourmet-booking").length;
  const countDelivery = demos.filter((d) => d.archetype === "direct-delivery").length;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black">
      <Header />

      <main className="px-4 pt-28 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header del Hub */}
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-bold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              10 Demos Comerciales Especializadas + Reels en Remotion
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Propuestas & WebApps a Medida
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-zinc-400 sm:text-base">
              Soluciones digitales adaptadas a cada modelo de negocio: Constructores de Regalos, Personalizador de Paletas & Pokes, Catálogo Mayorista B2B, Reservas Deportivas y Hospitalidad.
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

          {/* Filtros por Solución Especializada */}
          <div className="mt-8 flex justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "all", label: `Todas (${demos.length})` },
              { id: "customizer", label: `🎁 Regalos & Creadores (${countCustomizer})` },
              { id: "wholesale", label: `📦 Mayorista B2B (${countWholesale})` },
              { id: "vip-pass", label: `🎟️ Pases VIP & Hotel (${countVipPass})` },
              { id: "table-order", label: `📱 Auto-Pedido QR (${countTableOrder})` },
              { id: "gourmet", label: `🍷 Gourmet (${countGourmet})` },
              { id: "delivery", label: `🛵 Delivery 0% (${countDelivery})` },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all active:scale-95 whitespace-nowrap ${
                  filter === f.id
                    ? "bg-white text-black shadow-lg"
                    : "border border-white/10 bg-zinc-900/80 text-zinc-400 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid de las Tarjetas de Demos */}
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
                          <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="text-base font-bold text-white tracking-tight">
                              {demo.name}
                            </h2>
                            <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/15 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                              🌟 Solución a Medida
                            </span>
                          </div>
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

                    <div className="mt-4 flex items-center gap-2 flex-wrap">
                      <span
                        className="inline-block rounded-md px-2.5 py-1 text-[11px] font-semibold"
                        style={{
                          backgroundColor: `${demo.palette.accent}20`,
                          color: demo.palette.accent,
                        }}
                      >
                        {demo.category}
                      </span>

                      {demo.archetype === "gift-customizer" && (
                        <span className="rounded-md border border-pink-500/30 bg-pink-500/10 px-2 py-1 text-[10px] font-bold text-pink-300">
                          🎁 Regalos & Dedicatorias
                        </span>
                      )}
                      {demo.archetype === "item-builder" && (
                        <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-[10px] font-bold text-cyan-300">
                          🍧 Creador Interactivo
                        </span>
                      )}
                      {demo.archetype === "wholesale-catalog" && (
                        <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-[10px] font-bold text-amber-300">
                          📦 Mayorista B2B
                        </span>
                      )}
                      {demo.archetype === "match-booking" && (
                        <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-300">
                          ⚽ Reserva Partidos
                        </span>
                      )}
                      {demo.archetype === "table-ordering" && (
                        <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-300">
                          📱 Auto-Pedido
                        </span>
                      )}
                      {demo.archetype === "vip-access" && (
                        <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-[10px] font-bold text-amber-300">
                          🎟️ Pases VIP & Hotel
                        </span>
                      )}
                      {demo.archetype === "gourmet-booking" && (
                        <span className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2 py-1 text-[10px] font-bold text-purple-300">
                          🍷 Gourmet & Cava
                        </span>
                      )}
                      {demo.archetype === "direct-delivery" && (
                        <span className="rounded-md border border-rose-500/30 bg-rose-500/10 px-2 py-1 text-[10px] font-bold text-rose-300">
                          🛵 Delivery 0%
                        </span>
                      )}

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

      {/* Modal para ver el Outreach Kit (Copy WhatsApp, Guión de Voz 20s, y Admin Follow-up) */}
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
              className="relative z-10 w-full max-w-xl rounded-3xl border border-white/20 bg-zinc-950 p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎯</span>
                  <h3 className="text-base font-bold text-white">
                    Kit de Outreach para {selectedPitchDemo.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPitchDemo(null)}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-zinc-400 hover:bg-white/20 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Selector de Pestañas del Modal */}
              <div className="mt-4 flex gap-2 border-b border-white/10 pb-2">
                <button
                  onClick={() => setModalTab("pitch")}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                    modalTab === "pitch"
                      ? "bg-white text-black"
                      : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  💬 Copy WhatsApp
                </button>
                <button
                  onClick={() => setModalTab("voice")}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                    modalTab === "voice"
                      ? "bg-amber-400 text-black"
                      : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  🎙️ Guión de Voz (20s)
                </button>
                <button
                  onClick={() => setModalTab("admin")}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                    modalTab === "admin"
                      ? "bg-purple-500 text-white"
                      : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  ⚙️ Seguimiento 24h (Admin)
                </button>
              </div>

              {/* Contenido según la pestaña */}
              {modalTab === "pitch" && (
                <div>
                  <p className="mt-3 text-xs text-zinc-400">
                    Mensaje de texto formateado listo para enviar junto con el video vertical:
                  </p>
                  <div className="mt-2 rounded-2xl border border-white/10 bg-zinc-900/90 p-4 font-mono text-xs leading-relaxed text-zinc-200 whitespace-pre-wrap selection:bg-amber-400 selection:text-black">
                    {selectedPitchDemo.whatsappPitchCopy}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
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
                          ? "¡Texto Copiado!"
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
                </div>
              )}

              {modalTab === "voice" && (
                <div>
                  <p className="mt-3 text-xs text-amber-300 font-medium">
                    🎙️ Lee este texto en una nota de voz de 20 segundos con tono tranquilo y cercano:
                  </p>
                  <div className="mt-2 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-xs leading-relaxed text-zinc-200 font-sans italic selection:bg-amber-400 selection:text-black">
                    "{voiceScripts[selectedPitchDemo.slug] || `Hola equipo de ${selectedPitchDemo.name}, les habla Paul David de ByteBridge. Estuve analizando su propuesta y les preparé este video de 15 segundos y una WebApp interactiva a su medida. Miren el video adjunto y pruébenlo en el link sin ningún compromiso.`}"
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        const text = voiceScripts[selectedPitchDemo.slug] || "";
                        navigator.clipboard.writeText(text);
                        setCopiedSlug("voice-" + selectedPitchDemo.slug);
                        setTimeout(() => setCopiedSlug(null), 2000);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-amber-400 py-3 text-xs font-bold text-black shadow transition-all active:scale-95 hover:bg-amber-300"
                    >
                      <span>{copiedSlug === "voice-" + selectedPitchDemo.slug ? "✓" : "📋"}</span>
                      <span>
                        {copiedSlug === "voice-" + selectedPitchDemo.slug
                          ? "¡Guión Copiado!"
                          : "Copiar Guión de Audio"}
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {modalTab === "admin" && (
                <div>
                  <p className="mt-3 text-xs text-purple-300 font-medium">
                    ⚙️ Mensaje de seguimiento a las 24 horas para mostrar el panel de control:
                  </p>
                  <div className="mt-2 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4 text-xs leading-relaxed text-zinc-200 font-mono whitespace-pre-wrap selection:bg-purple-400 selection:text-black">
{`Hola equipo de ${selectedPitchDemo.name}! ¿Pudieron ver el video que les envié ayer?

Les comparto además el enlace a la vista de administración para que vean cómo su gerente puede cambiar precios en dólares y bolívares a tasa oficial en 1 segundo y ver las reservas del día:
👉 https://byte-bridge-tau.vercel.app/demos/${selectedPitchDemo.slug}?admin=true

¿Les gustaría que les muestre cómo funciona en 5 minutos?`}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        const adminCopy = `Hola equipo de ${selectedPitchDemo.name}! ¿Pudieron ver el video que les envié ayer?\n\nLes comparto además el enlace a la vista de administración para que vean cómo su gerente puede cambiar precios en dólares y bolívares a tasa oficial en 1 segundo y ver las reservas del día:\n👉 https://byte-bridge-tau.vercel.app/demos/${selectedPitchDemo.slug}?admin=true\n\n¿Les gustaría que les muestre cómo funciona en 5 minutos?`;
                        navigator.clipboard.writeText(adminCopy);
                        setCopiedSlug("admin-" + selectedPitchDemo.slug);
                        setTimeout(() => setCopiedSlug(null), 2000);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-purple-500 py-3 text-xs font-bold text-white shadow transition-all active:scale-95 hover:bg-purple-400"
                    >
                      <span>{copiedSlug === "admin-" + selectedPitchDemo.slug ? "✓" : "📋"}</span>
                      <span>
                        {copiedSlug === "admin-" + selectedPitchDemo.slug
                          ? "¡Mensaje Copiado!"
                          : "Copiar Mensaje de Seguimiento"}
                      </span>
                    </button>
                    <Link
                      href={`/demos/${selectedPitchDemo.slug}?admin=true`}
                      target="_blank"
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold text-white transition-all hover:bg-white/20"
                    >
                      <span>Probar Admin</span>
                      <span>↗</span>
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
