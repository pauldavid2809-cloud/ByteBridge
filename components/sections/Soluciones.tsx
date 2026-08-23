"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  MenuIcon,
  CalendarClockIcon,
  TableReservationIcon,
  StoreIcon,
  DeliveryBikeIcon,
  AnalyticsIcon,
  TicketQrIcon,
} from "@/components/icons/AppIcons";
import { whatsappLink } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import { useCurrency } from "@/context/CurrencyContext";
import { MenuDemo } from "@/components/demos/MenuDemo";
import { CitasDemo } from "@/components/demos/CitasDemo";
import { ReservasDemo } from "@/components/demos/ReservasDemo";
import { CatalogoDemo } from "@/components/demos/CatalogoDemo";
import { DeliveryDemo } from "@/components/demos/DeliveryDemo";
import { DashboardDemo } from "@/components/demos/DashboardDemo";
import { TicketQrDemo } from "@/components/demos/TicketQrDemo";

const soluciones = [
  {
    id: "menu",
    icon: MenuIcon,
    color: "from-amber-500/20 to-orange-500/10",
    borderActive: "border-amber-500/60 bg-amber-500/5",
    precio: { es: "Desde $100", en: "From $100" },
    nombre: { es: "Menú Digital", en: "Digital Menu" },
    sectores: { es: "Restaurantes · Cafeterías · Bares", en: "Restaurants · Cafés · Bars" },
    descripcion: {
      es: "Tu menú siempre actualizado, con categorías, fotos, precios y pedido directo por WhatsApp. Adiós a las cartas impresas.",
      en: "Your menu always up to date with categories, photos, prices, and direct ordering via WhatsApp. Goodbye printed menus.",
    },
    ctaMensaje: {
      es: "Hola, me interesa un menú digital para mi restaurante.",
      en: "Hi! I'm interested in a digital menu for my restaurant.",
    },
    demo: <MenuDemo />,
  },
  {
    id: "citas",
    icon: CalendarClockIcon,
    color: "from-violet-500/20 to-purple-500/10",
    borderActive: "border-violet-500/60 bg-violet-500/5",
    precio: { es: "Desde $150", en: "From $150" },
    nombre: { es: "Agenda de Citas", en: "Appointment Booking" },
    sectores: { es: "Barberías · Salones · Spas · Clínicas", en: "Barbershops · Salons · Spas · Clinics" },
    descripcion: {
      es: "Tus clientes reservan su cita en segundos, eligen el profesional y el horario. Tú recibes la agenda organizada y recordatorios automáticos.",
      en: "Clients book in seconds, choose their professional and time slot. You get an organized schedule with automatic reminders.",
    },
    ctaMensaje: {
      es: "Hola, me interesa un sistema de citas para mi negocio.",
      en: "Hi! I'm interested in an appointment booking system for my business.",
    },
    demo: <CitasDemo />,
  },
  {
    id: "reservas",
    icon: TableReservationIcon,
    color: "from-emerald-500/20 to-teal-500/10",
    borderActive: "border-emerald-500/60 bg-emerald-500/5",
    precio: { es: "Desde $150", en: "From $150" },
    nombre: { es: "Reservas Online", en: "Online Reservations" },
    sectores: { es: "Restaurantes · Hoteles · Eventos · Coworkings", en: "Restaurants · Hotels · Events · Coworkings" },
    descripcion: {
      es: "Sistema completo de reserva de mesas, espacios o habitaciones. Con disponibilidad en tiempo real y confirmación automática por WhatsApp.",
      en: "Full booking system for tables, spaces, or rooms. With real-time availability and automatic WhatsApp confirmation.",
    },
    ctaMensaje: {
      es: "Hola, me interesa un sistema de reservas online para mi negocio.",
      en: "Hi! I'm interested in an online reservation system for my business.",
    },
    demo: <ReservasDemo />,
  },
  {
    id: "catalogo",
    icon: StoreIcon,
    color: "from-blue-500/20 to-indigo-500/10",
    borderActive: "border-blue-500/60 bg-blue-500/5",
    precio: { es: "Desde $200", en: "From $200" },
    nombre: { es: "Tienda / Catálogo", en: "Shop / Catalog" },
    sectores: { es: "Tiendas · Marcas · Distribuidores · Artesanos", en: "Stores · Brands · Distributors · Artisans" },
    descripcion: {
      es: "Catálogo visual de tus productos con filtros, carrito y pago directo. Vende mientras duermes, sin pagar comisiones a terceros.",
      en: "Visual product catalog with filters, cart, and direct checkout. Sell while you sleep, with no third-party commissions.",
    },
    ctaMensaje: {
      es: "Hola, me interesa una tienda online o catálogo para mi negocio.",
      en: "Hi! I'm interested in an online store or catalog for my business.",
    },
    demo: <CatalogoDemo />,
  },
  {
    id: "entradas",
    icon: TicketQrIcon,
    color: "from-cyan-500/20 to-emerald-500/10",
    borderActive: "border-cyan-400/60 bg-cyan-500/5",
    precio: { es: "Desde $250", en: "From $250" },
    nombre: { es: "Entradas & QR", en: "Tickets & QR" },
    sectores: { es: "Eventos · Conciertos · Discotecas · Cursos", en: "Events · Concerts · Clubs · Workshops" },
    descripcion: {
      es: "Venta de entradas online con generación de código QR único para cada asistente y validador de acceso en puerta para escanear y evitar fraudes.",
      en: "Online ticketing with unique QR code generation for each attendee and door scanner app to validate access and prevent fraud.",
    },
    ctaMensaje: {
      es: "Hola, me interesa un sistema de venta de entradas con códigos QR y escáner para mi evento.",
      en: "Hi! I'm interested in an event ticketing system with QR codes and door scanner.",
    },
    demo: <TicketQrDemo />,
  },
  {
    id: "delivery",
    icon: DeliveryBikeIcon,
    color: "from-red-500/20 to-orange-500/10",
    borderActive: "border-red-500/60 bg-red-500/5",
    precio: { es: "Desde $300", en: "From $300" },
    nombre: { es: "Sistema Delivery", en: "Delivery System" },
    sectores: { es: "Restaurantes · Dark Kitchens · Farmacias · Tiendas", en: "Restaurants · Dark Kitchens · Pharmacies · Stores" },
    descripcion: {
      es: "Panel de control para gestionar pedidos en tiempo real: recepción, estado de preparación, repartidor asignado y tracking para el cliente.",
      en: "Real-time order management panel: reception, preparation status, assigned driver, and customer tracking.",
    },
    ctaMensaje: {
      es: "Hola, me interesa un sistema de delivery con tracking para mi negocio.",
      en: "Hi! I'm interested in a delivery system with tracking for my business.",
    },
    demo: <DeliveryDemo />,
  },
  {
    id: "dashboard",
    icon: AnalyticsIcon,
    color: "from-slate-500/20 to-zinc-500/10",
    borderActive: "border-slate-400/60 bg-slate-500/5",
    precio: { es: "Desde $500", en: "From $500" },
    nombre: { es: "Dashboard Empresarial", en: "Business Dashboard" },
    sectores: { es: "PyMEs · Franquicias · Distribuidores · Startups", en: "SMBs · Franchises · Distributors · Startups" },
    descripcion: {
      es: "Panel de administración con métricas de ventas, inventario, clientes y actividad en tiempo real. Toma decisiones con datos, no con intuición.",
      en: "Admin panel with real-time sales metrics, inventory, customers, and activity. Make decisions with data, not gut feeling.",
    },
    ctaMensaje: {
      es: "Hola, me interesa un dashboard empresarial para mi negocio.",
      en: "Hi! I'm interested in a business dashboard for my company.",
    },
    demo: <DashboardDemo />,
  },
];

export function Soluciones() {
  const { lang } = useLanguage();
  const { mostrarDual, pais, cargando, ocultarPrecios } = useCurrency();
  const [activa, setActiva] = useState("menu");
  const idx = soluciones.findIndex((s) => s.id === activa);
  const solucionActiva = soluciones[idx];

  // Precio base en USD por solución para conversión
  const preciosBase: Record<string, number> = {
    menu: 100, citas: 150, reservas: 150, catalogo: 200, entradas: 250, delivery: 300, dashboard: 500,
  };

  function getPrecioLocal(id: string): string | null {
    if (ocultarPrecios || pais.moneda === "USD" || cargando) return null;
    const base = preciosBase[id];
    if (!base) return null;
    return mostrarDual(base).split("≈")[1]?.trim() ?? null;
  }

  const prev = () => setActiva(soluciones[(idx - 1 + soluciones.length) % soluciones.length].id);
  const next = () => setActiva(soluciones[(idx + 1) % soluciones.length].id);

  return (
    <Section
      id="soluciones"
      eyebrow={lang === "es" ? "Sistemas a medida en vivo" : "Live custom systems"}
      title={lang === "es" ? "Demos Interactivos: Pruébalos en Vivo" : "Interactive Demos: Test Live"}
      subtitle={
        lang === "es"
          ? "Sistemas 100% funcionales y listos para implementar en tu negocio. Elige una solución e interactúa con ella."
          : "100% functional systems ready to deploy. Pick a solution and interact with it in real time."
      }
    >
      {/* ── SELECCIÓN DE DEMOS — Carrusel táctil snap en móvil, grid adaptativo en desktop ── */}
      <div className="flex gap-2.5 overflow-x-auto pb-4 pt-1 px-1 -mx-2 sm:mx-0 sm:grid sm:grid-cols-4 lg:grid-cols-7 sm:gap-2.5 sm:overflow-visible sm:pb-0 mb-8 scrollbar-hide snap-x snap-mandatory touch-manipulation">
        {soluciones.map((s, i) => {
          const IconComp = s.icon;
          const isActiva = activa === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiva(s.id)}
              className={`group relative flex min-w-[130px] sm:min-w-0 flex-1 shrink-0 snap-center flex-col items-center gap-2 rounded-2xl border p-3 sm:p-4 text-center transition-all duration-200 active:scale-[0.95] ${
                isActiva
                  ? `${s.borderActive} shadow-xl shadow-accent/10 ring-1 ring-accent/40 scale-[1.02] bg-surface`
                  : "border-line bg-surface/80 hover:border-accent/40 hover:bg-surface [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.02]"
              }`}
            >
              {/* Indicador de posición / estado activo */}
              {isActiva ? (
                <span className="absolute top-2.5 right-2.5 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
              ) : (
                <span className="absolute top-2.5 right-2.5 text-[10px] font-mono text-muted/40">
                  0{i + 1}
                </span>
              )}

              <div
                className={`flex h-10 w-10 sm:h-10 sm:w-10 items-center justify-center rounded-xl transition-all duration-200 ${
                  isActiva
                    ? "bg-accent text-accent-ink shadow-md shadow-accent/20 scale-105"
                    : "bg-background/90 text-muted group-hover:text-foreground"
                }`}
              >
                <IconComp className="h-5 w-5" />
              </div>

              <p
                className={`text-xs font-bold leading-tight transition-colors ${
                  isActiva ? "text-foreground" : "text-muted group-hover:text-foreground"
                }`}
              >
                {s.nombre[lang]}
              </p>

              {!ocultarPrecios ? (
                <>
                  <p className={`text-[11px] font-extrabold ${isActiva ? "text-accent" : "text-muted/70"}`}>
                    {s.precio[lang]}
                  </p>
                  {/* Precio local si aplica */}
                  {getPrecioLocal(s.id) && (
                    <p className="text-[10px] text-accent/80 font-semibold leading-none">
                      ≈ {getPrecioLocal(s.id)}
                    </p>
                  )}
                </>
              ) : (
                <p className={`text-[10px] font-semibold ${isActiva ? "text-accent" : "text-muted/60"}`}>
                  {lang === "es" ? "A medida" : "Bespoke"}
                </p>
              )}
            </button>
          );
        })}
      </div>

      {/* ── PANEL DEL DEMO: VITRINA 'APP STUDIO' ── */}
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-10 lg:items-start">
        {/* Info de la solución activa con micro-detalles de venta */}
        <div className="lg:w-84 lg:shrink-0 space-y-4">
          <div
            className={`rounded-3xl bg-gradient-to-br ${solucionActiva.color} border border-line p-6 transition-all duration-300 card-bezel`}
          >
            <div className="flex items-center gap-3.5 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface/90 border border-line text-accent shadow-sm">
                <solucionActiva.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{solucionActiva.nombre[lang]}</h3>
                {!ocultarPrecios ? (
                  <>
                    <p className="text-xs font-bold text-accent">{solucionActiva.precio[lang]}</p>
                    {getPrecioLocal(solucionActiva.id) && (
                      <p className="text-xs text-accent/90 font-semibold">
                        ≈ {getPrecioLocal(solucionActiva.id)}{" "}
                        <span className="text-muted font-normal">{pais.moneda}</span>
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-xs font-semibold text-accent">
                    {lang === "es" ? "Desarrollo a medida" : "Custom development"}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-2 inline-flex items-center rounded-full border border-line bg-background/50 px-2.5 py-0.5 text-[10px] font-semibold text-muted">
              {solucionActiva.sectores[lang]}
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">{solucionActiva.descripcion[lang]}</p>
          </div>

          <a
            href={whatsappLink(solucionActiva.ctaMensaje[lang])}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-3.5 text-sm font-bold text-accent-ink hover:bg-accent-strong transition-all duration-200 shadow-lg shadow-accent/20 active:scale-[0.97]"
          >
            <WhatsAppIcon className="h-4.5 w-4.5 transition-transform duration-200 group-hover:scale-110" />
            <span>{lang === "es" ? "Quiero este para mi negocio" : "I want this for my business"}</span>
          </a>

          {/* Navegación anterior / siguiente */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={prev}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-surface/60 py-2 text-xs font-semibold text-muted hover:border-accent/40 hover:text-foreground transition-all active:scale-[0.97]"
            >
              ← {lang === "es" ? "Anterior" : "Previous"}
            </button>
            {/* Dots */}
            <div className="flex gap-1.5">
              {soluciones.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiva(s.id)}
                  className={`rounded-full transition-all duration-200 ${
                    activa === s.id ? "w-5 h-1.5 bg-accent" : "w-1.5 h-1.5 bg-line hover:bg-muted"
                  }`}
                  aria-label={s.nombre[lang]}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-surface/60 py-2 text-xs font-semibold text-muted hover:border-accent/40 hover:text-foreground transition-all active:scale-[0.97]"
            >
              {lang === "es" ? "Siguiente" : "Next"} →
            </button>
          </div>

          <p className="text-center text-xs font-mono text-muted/70">
            {lang === "es"
              ? `Solución ${idx + 1} de ${soluciones.length}`
              : `Solution ${idx + 1} of ${soluciones.length}`}
          </p>
        </div>

        {/* Demo interactivo en marco de dispositivo App Studio */}
        <div className="flex-1 min-w-0">
          <div className="rounded-[2rem] border border-line bg-surface/90 p-2 sm:p-3 shadow-2xl backdrop-blur-2xl card-bezel">
            <div className="flex items-center justify-between border-b border-line px-3 py-2 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
                <span className="ml-2 font-mono text-[11px] text-muted">
                  demo.{solucionActiva.id}.bytebridge.app
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                {lang === "es" ? "Interactúa en vivo" : "Live preview"}
              </span>
            </div>

            <div key={solucionActiva.id} className="relative transition-opacity duration-300">
              {solucionActiva.demo}
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-muted">
            {lang === "es"
              ? "Prueba las funciones del demo interactivo en tiempo real"
              : "Test all live interactive demo features in real time"}
          </p>
        </div>
      </div>
    </Section>
  );
}

