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
    // Dia 3
    ranchogalipan: "Hola equipo de Rancho Galipán, les habla Paul David de ByteBridge. Estuve analizando cómo optimizar el acceso a sus piscinas y cabañas campestres: les preparé un Reel comercial y una WebApp donde sus visitantes compran su Day Pass con código QR y reservan bohíos con parrillada al carbón sin hacer fila en entrada. Les adjunté el video y el link de prueba.",
    nomi_sakebar: "Konnichiwa equipo de Nomi Sake Bar, les saluda Paul David de ByteBridge. El ambiente de izakaya y ramen que tienen en Bella Vista es de lo más top de la ciudad. Les diseñé una WebApp con auto-pedido por código QR en mesa y barra robata, y maridaje guiado de sakes para acelerar la rotación de comensales. Miren el video adjunto y pruébenla en el enlace.",
    da_ettore: "Buonasera equipo de Da Ettore, habla Paul David de ByteBridge. Con más de 30 años de impecable tradición culinaria en Maracaibo, creamos una WebApp a la altura de su prestigio: reserva digital de mesas con plano de sala, carta interactiva de pastas frescas y sommelier digital de vinos italianos. Les comparto el video y la demo interactiva.",
    solemiocucinaebar: "Ciao equipo de O Sole Mio, les habla Paul David de ByteBridge. Su terraza en La Lago y sus pizzas napolitanas al horno de leña son una maravilla. Les armé una WebApp para reservar mesas al aire libre garantizadas y pedir pastas de autor con conversión automática a tasa oficial. Miren el video de 15 segundos y la demo.",
    somos_delish: "Hola equipo de Delish, les saluda Paul David de ByteBridge. Amamos sus cinnamon rolls y brunch en Tierra Negra. Para que dejen de pagar el 25% de comisión en apps de terceros y automaticen sus pedidos de cajas de regalo por WhatsApp con tasa BCV al día, les construí esta WebApp. Les dejo el video promocional y el link.",
    yellowstonemcbo: "Howdy equipo de Yellowstone, habla Paul David de ByteBridge. Su concepto de steakhouse western en La Lago tiene una vibra increíble. Les preparé una WebApp para vender pases VIP con código QR para sus noches de música en vivo y reservar mesas parrilleras sin colas en puerta. Échenle un ojo al video que les adjunté.",
    morecheese_mcbo: "Hola gente de More Cheese, les saluda Paul David de ByteBridge. El show de la piscina de queso cheddar en mesa es súper viral. Para eliminar las colas de espera en horas pico, les diseñé una WebApp con auto-pedido por código QR directo a cocina y combos de tequeñones XXL. Les comparto el video y la demo para que la prueben.",
    saloncanton_mcbo: "Ni hao equipo de Salón Cantón, habla Paul David de ByteBridge. Reconociendo su liderazgo en alta cocina cantonesa en Maracaibo, diseñamos una WebApp para reservar mesas giratorias imperiales y salones VIP climatizados, con menús de banquetes y pato Pekín. Les dejé el video y el link de prueba.",
    holysushi_mcbo: "Hola equipo de Holy Sushi, les saluda Paul David de ByteBridge. Sus rolls flameados y barcos para fiestas son de lo mejor. Les creamos una WebApp para potenciar su delivery: catálogo visual de barcos de 40 piezas, cálculo BCV automático y checkout directo a WhatsApp sin comisiones. Miren el video adjunto y la demo.",
    vivematcha: "Hola equipo de Vive Matcha, habla Paul David de ByteBridge. Su propuesta de bienestar y matcha ceremonial Uji en Cecilio Acosta es única en Maracaibo. Les construí una WebApp para auto-pedido en barra y pick-up express de matcha lattes y açaí bowls sin hacer fila. Les dejo el video vertical y el enlace.",
    // Dia 2
    estacionholidays: "Hola equipo de Estación Holidays, les habla Paul David de ByteBridge. Estuve viendo el concepto tan genial que tienen con las 3 estaciones de Asia, América y Europa, y les preparé un video y una WebApp interactiva que incluye un Pasaporte Digital con sellos para sus clientes. Miren el video adjunto y pruébenlo en el link que les dejé abajo sin ningún compromiso.",
    mosaico_mcbo: "Hola amigos de Mosaico, les saluda Paul David de ByteBridge. Sé lo que colapsa el WhatsApp al mediodía con la gente preguntando qué hay en el buffet y los papelitos en las noches de karaoke. Les armé una WebApp que automatiza el menú del día y organiza los turnos de canciones con código QR. Échenle un ojo al video que les adjunté.",
    incontrotrattoria: "Ciao equipo de Incontro, habla Paul David de ByteBridge. Diseñamos una propuesta digital a la altura de su cocina en Torre Tendencia: incluye un Sommelier Digital que le recomienda el vino perfecto para cada pasta y pizza, y reserva de mesas para ejecutivos. Les dejé el video comercial y la demo para que la prueben.",
    pinzulia: "Hola gente de PinZulia, les habla Paul David de ByteBridge. ¡Qué brutal les quedó la reapertura! Para evitar las colas de 2 horas los fines de semana, les construí una WebApp donde sus clientes pueden reservar pistas en vivo y pedir hamburguesas directo a su carril con QR. Miren el video y me cuentan qué les parece.",
    alfredscoffeebar: "Hola equipo de Alfred's, habla Paul David de ByteBridge. Analizamos el flujo en 5 de Julio y les creamos una WebApp que muestra el stock en tiempo real de su vitrina de donas de pistacho y permite a los oficinistas pedir para llevar sin hacer cola en barra. Les comparto el video y el link de prueba.",
    lakebistro: "Hola amigos de Lake Bistro, les saluda Paul David de ByteBridge. La vista al atardecer que tienen frente al Lago es de las mejores de la ciudad. Para evitar que las mesas de primera fila se queden vacías por no-shows, les diseñé un selector de mesas 3D con cobro de depósito consumible. Mírenlo en el video adjunto.",
    bromcbo: "Hola gente de BRO, habla Paul David de ByteBridge. Sé que meten cientos de personas en Cecilio Acosta con las raves y el freestyle, pero la mayoría de esos contactos se pierden. Les armé una WebApp para vender brazaletes QR de eventos y auto-pedidos en mesa. Les dejo el video de 15 segundos para que lo vean.",
    ahpresidente: "Hola equipo de AH Presidente, les saluda Paul David de ByteBridge. Tienen una comunidad gigante de más de 74.000 seguidores en Instagram. Para que no hagan fila bajo el sol comprando el Day Pass de piscina, les construí una WebApp con venta de boletos QR y pedidos desde las tumbonas. Miren el video adjunto.",
    mykonosconceptve: "Hola gente de Mykonos, habla Paul David de ByteBridge. Les armé una solución exclusiva para su lounge en el Tibisay: incluye un Cotizador Automático de Cumpleaños con botellas y shishas 24/7, y pases FastPass QR para entrar sin hacer fila. Les compartí el video vertical y el link para que lo jueguen.",
    terraza_restobar: "Hola equipo de Terraza Restobar, les saluda Paul David de ByteBridge. Su vista frontal al Puente al anochecer es su producto estrella. Les diseñé una WebApp con mapa interactivo para asegurar reservas de mesas mirador y carta dual de sushi y parrilla con conversión multimoneda. Échenle un ojo al video.",
    // Dia 1
    ecoland: "Hola equipo de Ecoland, les habla Paul David de ByteBridge. Diseñamos una WebApp integral para su complejo que permite comprar Day Pass de piscina con código QR, reservar cabañas VIP y gestionar suites de hotel en un solo lugar. Les adjunté el video promocional y la demo en vivo.",
    grandchef: "Hola amigos de Grand Chef, les saluda Paul David de ByteBridge. Preparamos una propuesta exclusiva para sus cenas frente al Puente: reserva de mesas en primera fila, maridaje con su carta de 40 vinos y cálculo automático a tasa oficial. Les comparto el video y el enlace.",
    zuhouse: "Hola equipo de Zu House, habla Paul David de ByteBridge. Les construí una WebApp pensada para sus tardes de after-work en 5 de Julio: reserva de mesas, comanda directa de cortes a la brasa y control de aforo en tiempo real. Miren el video que les adjunté.",
    tannous: "Hola amigos de Tannous, les saluda Paul David de ByteBridge. Creamos una WebApp optimizada para sus dos grandes fortalezas: reserva express de almuerzos corporativos en menos de 20 minutos y cotización automática para pedidas de mano y eventos privados con pase QR.",
    room101: "Hola gente de Room 101, habla Paul David de ByteBridge. Diseñamos una WebApp con su estética underground: reserva de lounges VIP, carta interactiva de shishas y cócteles insignia, y pases QR para noches temáticas sin cola en puerta. Mírenlo en el video.",
    labarraventura: "Hola equipo de La Barra Ventura, les saluda Paul David de ByteBridge. Para acelerar el acceso nocturno, les creamos un sistema de emisión de pases VIP express con código QR que su seguridad valida en 1 segundo con el móvil. Les dejo el video demostrativo.",
    ciaogastrobar: "Ciao amigos de Ciao Gastrobar, habla Paul David de ByteBridge. Diseñamos una WebApp para su restaurante en Terraza 77 con reserva de mesas al aire libre, carta interactiva de pastas frescas y pizzas al horno con maridaje de vinos. Miren la demo en el link.",
    blaomcbo: "Hola gente de BLAO, les saluda Paul David de ByteBridge. Les armé una WebApp interactiva para su concepto dual en Plaza 75: reservas rápidas de B-Lunch para ejecutivos al mediodía y mesas de terraza para las noches de Blaoke y fiesta. Miren el video adjunto.",
    pittsbowling: "Hola equipo de Pitts Bowling, les habla Paul David de ByteBridge. Como único centro federado en Costa Verde, les diseñamos una WebApp con reserva de pistas computarizadas por hora, alquiler de calzado y comanda de comida directo a la pista con QR.",
    corner: "Hola amigos de The Corner, habla Paul David de ByteBridge. Creamos una WebApp lúdica para su bar: catálogo digital con filtros de sus 50 juegos de mesa, carta de pociones y tragos con glitter, y reserva de salón privado para grupos. Échenle un vistazo."
  };

  const handleCopyPitch = (demo: BusinessDemo) => {
    navigator.clipboard.writeText(demo.whatsappPitchCopy);
    setCopiedSlug(demo.slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const dia3Slugs = [
    "ranchogalipan",
    "nomi_sakebar",
    "da_ettore",
    "solemiocucinaebar",
    "somos_delish",
    "yellowstonemcbo",
    "morecheese_mcbo",
    "saloncanton_mcbo",
    "holysushi_mcbo",
    "vivematcha",
  ];

  const dia2Slugs = [
    "estacionholidays",
    "mosaico_mcbo",
    "incontrotrattoria",
    "pinzulia",
    "alfredscoffeebar",
    "lakebistro",
    "bromcbo",
    "ahpresidente",
    "mykonosconceptve",
    "terraza_restobar",
  ];

  const dia1Slugs = [
    "ecoland",
    "grandchef",
    "zuhouse",
    "tannous",
    "room101",
    "labarraventura",
    "ciaogastrobar",
    "blaomcbo",
    "pittsbowling",
    "corner",
  ];

  const filteredDemos = demos.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (filter === "all") return true;
    if (filter === "dia3") return dia3Slugs.includes(d.slug);
    if (filter === "dia2") return dia2Slugs.includes(d.slug);
    if (filter === "dia1") return dia1Slugs.includes(d.slug);
    if (filter === "table-ordering") return d.archetype === "table-ordering";
    if (filter === "vip-access") return d.archetype === "vip-access";
    if (filter === "gourmet-booking") return d.archetype === "gourmet-booking";
    if (filter === "direct-delivery") return d.archetype === "direct-delivery";
    return true;
  });

  const countDia3 = demos.filter((d) => dia3Slugs.includes(d.slug)).length;
  const countDia2 = demos.filter((d) => dia2Slugs.includes(d.slug)).length;
  const countDia1 = demos.filter((d) => dia1Slugs.includes(d.slug)).length;
  const countTableOrder = demos.filter((d) => d.archetype === "table-ordering").length;
  const countVipPass = demos.filter((d) => d.archetype === "vip-access").length;
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
              30 Demos Comerciales + Reels en Remotion
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Catálogo de Propuestas, WebApps & Reels
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-zinc-400 sm:text-base">
              WebApps interactivas adaptadas a 4 arquetipos operativos: Auto-Pedido en Mesa, Pases VIP con QR, Reservas Gourmet y Delivery Directo sin comisiones.
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

          {/* Filtros por Categoría, Arquetipos y por Día */}
          <div className="mt-8 flex justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "all", label: `Todas (${demos.length})` },
              { id: "dia3", label: `🚀 Día 3 (${countDia3})` },
              { id: "dia2", label: `⚡ Día 2 (${countDia2})` },
              { id: "dia1", label: `🏛️ Día 1 (${countDia1})` },
              { id: "table-order", label: `📱 Auto-Pedido (${countTableOrder})` },
              { id: "vip-pass", label: `🎟️ Pases VIP (${countVipPass})` },
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
              const isDia3 = dia3Slugs.includes(demo.slug) || demo.batch === "dia3";
              const isDia2 = dia2Slugs.includes(demo.slug) || demo.batch === "dia2";

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
                            {isDia3 ? (
                              <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                                ✨ Día 3
                              </span>
                            ) : isDia2 ? (
                              <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                                ⚡ Día 2
                              </span>
                            ) : (
                              <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-2 py-0.5 text-[10px] font-bold text-blue-300">
                                🏛️ Día 1
                              </span>
                            )}
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

                      {demo.archetype === "table-ordering" && (
                        <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-300">
                          📱 Auto-Pedido
                        </span>
                      )}
                      {demo.archetype === "vip-access" && (
                        <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-[10px] font-bold text-amber-300">
                          🎟️ Pases QR
                        </span>
                      )}
                      {demo.archetype === "gourmet-booking" && (
                        <span className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2 py-1 text-[10px] font-bold text-purple-300">
                          🍷 Gourmet
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
