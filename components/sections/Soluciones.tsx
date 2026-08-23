"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import { useCurrency } from "@/context/CurrencyContext";
import { MenuDemo } from "@/components/demos/MenuDemo";
import { CitasDemo } from "@/components/demos/CitasDemo";
import { ReservasDemo } from "@/components/demos/ReservasDemo";
import { CatalogoDemo } from "@/components/demos/CatalogoDemo";
import { DeliveryDemo } from "@/components/demos/DeliveryDemo";
import { DashboardDemo } from "@/components/demos/DashboardDemo";

const soluciones = [
  {
    id: "menu",
    icon: "🍽️",
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
    icon: "💈",
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
    icon: "🍷",
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
    icon: "🛒",
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
    id: "delivery",
    icon: "🛵",
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
    icon: "📊",
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
    menu: 100, citas: 150, reservas: 150, catalogo: 200, delivery: 300, dashboard: 500,
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
      eyebrow={lang === "es" ? "Lo que puedo construir" : "What I can build"}
      title={lang === "es" ? "Demos en vivo · Pruébalos ahora" : "Live Demos · Try them now"}
      subtitle={
        lang === "es"
          ? "Demos 100% funcionales. Elige cualquier opción y pruébala en vivo."
          : "100% functional live demos. Select any option and test it out."
      }
    >
      {/* ── GRID DE SELECCIÓN — visible completo en móvil y desktop ── */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3 sm:grid-cols-6 mb-10">
        {soluciones.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActiva(s.id)}
            className={`group relative flex flex-col items-center gap-2 rounded-2xl border p-3 sm:p-4 text-center transition-[border-color,background-color,transform,box-shadow] duration-200 active:scale-[0.96] ${
              activa === s.id
                ? `${s.borderActive} shadow-lg shadow-accent/5 scale-[1.03]`
                : "border-line bg-surface/80 hover:border-accent/40 hover:bg-surface [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.02]"
            }`}
          >
            {/* Número de posición — visible en inactivos para que sea obvio que hay más */}
            {activa !== s.id && (
              <span className="absolute top-1.5 right-2 text-[10px] font-bold text-muted/50">
                {i + 1}
              </span>
            )}
            {activa === s.id && (
              <span className="absolute top-1.5 right-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
            )}
            <span className="text-2xl sm:text-3xl leading-none transition-transform duration-200 group-hover:scale-110">{s.icon}</span>
            <p className={`text-[11px] sm:text-xs font-semibold leading-tight transition-colors ${
              activa === s.id ? "text-foreground" : "text-muted group-hover:text-foreground"
            }`}>
              {s.nombre[lang]}
            </p>
            {!ocultarPrecios && (
              <p className={`text-[10px] font-bold ${activa === s.id ? "text-accent" : "text-muted/60"}`}>
                {s.precio[lang]}
              </p>
            )}
            {/* Precio local si aplica */}
            {getPrecioLocal(s.id) && (
              <p className="text-[9px] text-accent/70 font-medium leading-none">
                ≈ {getPrecioLocal(s.id)}
              </p>
            )}
          </button>
        ))}
      </div>

      {/* ── PANEL DEL DEMO ── */}
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 lg:items-start">

        {/* Info de la solución activa */}
        <div className="lg:w-80 lg:shrink-0 space-y-4">
          <div className={`rounded-2xl bg-gradient-to-br ${solucionActiva.color} border border-line p-5 transition-all duration-300`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{solucionActiva.icon}</span>
              <div>
                <h3 className="text-lg font-bold text-foreground">{solucionActiva.nombre[lang]}</h3>
                {!ocultarPrecios && (
                  <p className="text-xs text-accent font-bold">{solucionActiva.precio[lang]}</p>
                )}
                {getPrecioLocal(solucionActiva.id) && (
                  <p className="text-xs text-accent/80 font-semibold">
                    ≈ {getPrecioLocal(solucionActiva.id)}{" "}
                    <span className="text-muted font-normal">{pais.moneda}</span>
                  </p>
                )}
              </div>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-1">{solucionActiva.sectores[lang]}</p>
            <p className="text-sm text-foreground/90 leading-relaxed">{solucionActiva.descripcion[lang]}</p>
          </div>

          <a
            href={whatsappLink(solucionActiva.ctaMensaje[lang])}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-accent-ink hover:bg-accent-strong transition-[background-color,transform] duration-150 active:scale-[0.97]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {lang === "es" ? "Quiero este para mi negocio" : "I want this for my business"}
          </a>

          {/* Navegación anterior / siguiente */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={prev}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-surface/50 py-2.5 text-sm text-muted hover:border-accent/50 hover:text-foreground transition-[color,border-color,transform] duration-150 active:scale-[0.97]"
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
                    activa === s.id ? "w-5 h-2 bg-accent" : "w-2 h-2 bg-line hover:bg-muted"
                  }`}
                  aria-label={s.nombre[lang]}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-surface/50 py-2.5 text-sm text-muted hover:border-accent/50 hover:text-foreground transition-[color,border-color,transform] duration-150 active:scale-[0.97]"
            >
              {lang === "es" ? "Siguiente" : "Next"} →
            </button>
          </div>

          <p className="text-center text-xs text-muted">
            {lang === "es"
              ? `Solución ${idx + 1} de ${soluciones.length}`
              : `Solution ${idx + 1} of ${soluciones.length}`}
          </p>
        </div>

        {/* Demo interactivo con contenedor de transición suave */}
        <div className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-accent/5 blur-xl pointer-events-none" />
            <div key={solucionActiva.id} className="relative transition-opacity duration-300">
              {solucionActiva.demo}
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-muted">
            {lang === "es"
              ? "👆 Demo 100% interactivo — pruébalo tú mismo"
              : "👆 100% interactive demo — try it yourself"}
          </p>
        </div>
      </div>
    </Section>
  );
}

