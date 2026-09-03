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
    // Dia 8
    rutarestaurante: "Hola equipo de RUTA Restaurante, les habla Paul David. ¿Cuántos comensales se impacientan en mesa esperando que un mesonero les tome otra ronda de cervezas o hamburguesas cuando el salón se llena en horas pico? Les armé una solución directa con su menú para que cada mesa pida con código QR, vea el total en bolívares a tasa oficial y la orden les llegue lista a cocina. ¿Les muestro cómo se vería en 5 minutos?",
    vistabarccs: "Hola equipo de Vista Bar Caracas, les habla Paul David. ¿Cuántos clientes VIP se les quedan sin mesa para el atardecer o la noche de fin de semana porque el chat de WhatsApp se satura y no dan abasto para confirmar? Les armé una propuesta donde el cliente reserva su mesa en primera fila frente al Ávila, recibe su pase digital con código QR y entra sin colas. ¿Les muestro en 5 minutos cómo funciona?",
    vizio_ristorante: "Hola equipo de Vizio Ristorante, les habla Paul David. ¿Cuántas reservas de cenas familiares o de negocios se les quedan sin atender los fines de semana cuando el chat de WhatsApp se llena? Les armé una propuesta donde sus comensales reservan su mesa, exploran las pastas frescas con maridaje de vinos y reciben confirmación automática con pase digital. ¿Les muestro en 5 minutos cómo funciona?",
    crepusculobistro: "Hola equipo de Crepúsculo Bistró, les habla Paul David. En las mañanas de desayuno o en la tarde cuando la terraza se llena, ¿cuántos clientes se impacientan esperando que el mesonero les acerque la carta o tome su pedido de café y tostadas? Les preparé una prueba directa para que el comensal ordene desde su mesa con código QR y pague a tasa oficial sin esperas. ¿Les muestro cómo funciona en 5 minutos?",
    humosbistro_bar: "Hola equipo de Humos Bistro & Bar, les habla Paul David. ¿Cuánto tiempo pierden sus clientes en mesa esperando otra ronda de tragos o carnes cuando la sala y la terraza se llenan los fines de semana? Les preparé un ejemplo con sus carnes ahumadas para que cada mesa pida con código QR directo a parrilla y divida la cuenta al instante. ¿Les muestro en 5 minutos cómo funciona?",
    lafelicittave: "Hola equipo de La Felicittà, les habla Paul David. ¿Cuántos clientes se van o pierden tiempo en la fila de vitrina los fines de semana preguntando qué sabores quedan o cómo armar sus copas y cajas de helado? Les creé un personalizador visual para que sus clientes elijan sabores y barquillas desde el teléfono y retiren sin hacer cola. ¿Les muestro cómo funciona en 5 minutos?",
    aprile_ccs: "Estimado equipo de Aprile Ristorante, les habla Paul David. ¿Cuántas solicitudes de almuerzos corporativos o cenas en salones privados se demoran en coordinar por mensajes de texto entre asistentes y el maitre? Les preparé una propuesta digital sobria donde sus clientes ejecutivos eligen su salón privado y confirman con pase formal con código QR. ¿Cuándo tendrían 5 minutos para ver cómo funciona?",
    rutac4_: "Hola equipo de Ruta C4, les habla Paul David. ¿Cuánto dinero se les va al mes en comisiones de apps de delivery o cuántos clientes se van porque tardan en responder el WhatsApp en pleno fin de semana? Les preparé un catálogo directo con sus burgers para que el cliente pida en 30 segundos a tasa oficial y el pedido les llegue listo a WhatsApp sin intermediarios. ¿Les muestro en 5 minutos cómo funciona?",
    tepuy_360: "Hola equipo de Tepuy 360, les habla Paul David. ¿Cuántos clientes que suben al mirador se quedan sin mesa o se van frustrados porque el chat de reservas colapsa y no confirman a tiempo los turnos de atardecer? Les preparé una solución donde sus visitantes eligen su mesa con vista 360 garantizada y reciben su pase con código QR para entrar directo. ¿Les muestro en 5 minutos cómo funciona?",

    // Dia 7
    sybarisrest: "Hola equipo de Sybaris, les habla Paul David. Una pregunta rápida: ¿cuántas reservas de terraza se les quedan en el aire un viernes o sábado simplemente porque el WhatsApp colapsa en horas pico? Les armé un ejemplo exacto con sus cortes y menú para que sus comensales reserven su mesa solos y reciban su confirmación de inmediato sin que ustedes pierdan ventas por no contestar a tiempo. ¿Les muestro cómo se vería en 5 minutos?",
    srtruhan: "Qué tal, gente de Sr. Truhán, les habla Paul David. En noches de comedia o música con la sala llena, ¿cuánto tiempo pierden sus clientes esperando que un mesonero les tome otra ronda de tragos o tapas? Les monté un ejemplo con su propia carta donde cada mesa pide directo al bartender por código QR sin colas ni demoras. ¿Les muestro cómo se vería en 5 minutos?",
    crispys_ve: "Hola equipo de Crispy's, les habla Paul David. ¿Cuánto dinero se les está yendo al mes pagando comisiones abusivas en apps de delivery por cada combo que venden? Les preparé un catálogo directo con sus buckets y tenders para que el cliente pida en 30 segundos, calcule en bolívares a tasa oficial y el pedido les llegue limpio a su WhatsApp con 0% de comisiones. ¿Les muestro en 5 minutos cómo funciona?",
    enigmacafe_sc: "Hola gente de Enigma Café, les habla Paul David. ¿Cuánto tiempo pierde su equipo en las mañanas respondiendo audios y mensajes explicando cómo armar las tostadas o qué lleva cada bowl de açaí? Les preparé un personalizador visual con sus opciones para que el cliente elija sus ingredientes paso a paso y la orden entre lista a barra sin confusiones. ¿Les muestro cómo funciona en 5 minutos?",
    beaucoffee_sc: "Hola equipo de Beau Coffee, les saluda Paul David. En las mañanas, ¿cuántos clientes se impacientan en la fila de caja solo para pedir un café y un croissant? Les armé una solución para que los comensales se sienten en su mesa, escaneen el menú, vean qué bollería está recién horneada y pidan de inmediato sin hacer fila. ¿Les muestro cómo se vería en 5 minutos?",
    bruselas_sc: "Hola equipo de Bruselas, les habla Paul David. En las tardes, cuando un cliente quiere wafles con tres toppings distintos, baño de chocolate y helado, ¿cuántos mensajes tienen que responder antes de cerrar la venta? Les monté un constructor donde el cliente elige masa, coberturas y frutas en pantalla con precio exacto al instante. ¿Les muestro cómo se vería en 5 minutos?",
    momentossc: "Hola equipo de Momentos, les habla Paul David. Cuando alguien les pide cotizar un cumpleaños o desayuno sorpresa, ¿cuánto tiempo tardan preguntando dedicatoria, globos, fecha y hora de entrega por mensajes sueltos? Les creé un cotizador con sus paquetes donde el cliente agenda su fecha, redacta su dedicatoria y paga en 3 clics. ¿Les muestro en 5 minutos cómo funciona?",
    fratellopizzas_sc: "Buenas noches equipo de Fratello Pizzas, les habla Paul David. Los viernes y sábados por la noche, ¿cuántas ventas de pizzas se les caen porque el chat se llena de mensajes preguntando precios, sabores y la tasa del día? Les armé un catálogo directo con sus pizzas al horno de piedra donde el cliente pide solo con cálculo a tasa oficial en tiempo real. ¿Les muestro cómo se vería en 5 minutos?",
    kala_cafesc: "Buenas tardes equipo de Kala Café, les habla Paul David. En las tardes cuando la terraza mirador está llena, ¿cuántos comensales esperan de más porque el mesonero está atendiendo otra mesa? Les monté un sistema simple donde el cliente escanea el código en su mesa, pide sus cafés andinos y tortas y paga sin esperar que nadie se acerque. ¿Les muestro cómo se vería en 5 minutos?",
    pa_picar_mas: "Hola equipo de Pa' Picar Más, les saluda Paul David. Cuando alguien les pide cotizar pasapalos para una fiesta de 50 o 100 personas, ¿cuántos mensajes intercambian para definir cantidades de tequeños, pastelitos, salsas y hora de entrega? Les armé un cotizador directo con sus bandejas donde el cliente elige el combo y agenda el despacho en un minuto. ¿Les muestro cómo funciona en 5 minutos?",

    // Dia 6
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
    if (filter === "dia8") return d.batch === "dia8";
    if (filter === "dia7") return d.batch === "dia7";
    if (filter === "dia6") return d.batch === "dia6";
    if (filter === "customizer") return d.archetype === "gift-customizer" || d.archetype === "item-builder";
    if (filter === "wholesale") return d.archetype === "wholesale-catalog";
    if (filter === "table-order") return d.archetype === "table-ordering";
    if (filter === "vip-pass") return d.archetype === "vip-access" || d.archetype === "match-booking";
    if (filter === "gourmet") return d.archetype === "gourmet-booking";
    if (filter === "delivery") return d.archetype === "direct-delivery";
    return true;
  });

  const countDia8 = demos.filter((d) => d.batch === "dia8").length;
  const countDia7 = demos.filter((d) => d.batch === "dia7").length;
  const countDia6 = demos.filter((d) => d.batch === "dia6").length;
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
              {demos.length} Demos Comerciales Especializadas + Reels en Remotion
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Propuestas & WebApps a Medida
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-zinc-400 sm:text-base">
              Soluciones digitales adaptadas a cada modelo de negocio: Constructores de Regalos, Personalizador de Paletas & Pokes, Catálogo Mayorista B2B, Reservas Deportivas, Pizzerías y Gastrobistrós.
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

          {/* Filtros por Solución Especializada y por Lote */}
          <div className="mt-8 flex justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "all", label: `Todas (${demos.length})` },
              { id: "dia8", label: `🔥 Día 8 · Ccs & Bqto (${countDia8})` },
              { id: "dia7", label: `🌟 Día 7 · Táchira & Mcbo (${countDia7})` },
              { id: "dia6", label: `✨ Día 6 (${countDia6})` },
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
