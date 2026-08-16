"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
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
  const [activa, setActiva] = useState("menu");

  const solucionActiva = soluciones.find((s) => s.id === activa)!;

  return (
    <Section
      id="soluciones"
      eyebrow={lang === "es" ? "Lo que puedo construir" : "What I can build"}
      title={lang === "es" ? "Demos en vivo · Pruébalos ahora" : "Live Demos · Try them now"}
      subtitle={
        lang === "es"
          ? "No son mockups: son demos funcionales. Interactúa con cada uno y luego pídeme el tuyo."
          : "These aren't mockups: they're functional demos. Interact with each one and then order yours."
      }
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
        {/* Lista de soluciones */}
        <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:w-72 lg:shrink-0 lg:overflow-x-visible lg:pb-0">
          {soluciones.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiva(s.id)}
              className={`shrink-0 flex items-start gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-200 lg:w-full ${
                activa === s.id
                  ? "border-accent bg-accent/5 shadow-sm"
                  : "border-line hover:border-accent/40 hover:bg-surface"
              }`}
            >
              <span className="text-2xl leading-none mt-0.5">{s.icon}</span>
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">{s.nombre[lang]}</p>
                <p className="text-xs text-muted truncate hidden lg:block">{s.sectores[lang]}</p>
                <p className={`text-xs font-bold mt-0.5 ${activa === s.id ? "text-accent" : "text-muted"}`}>
                  {s.precio[lang]}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Panel derecho: descripción + demo */}
        <div className="flex-1 min-w-0">
          <div className="mb-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{solucionActiva.icon}</span>
              <div>
                <h3 className="text-xl font-bold">{solucionActiva.nombre[lang]}</h3>
                <p className="text-xs text-muted">{solucionActiva.sectores[lang]}</p>
              </div>
              <span className="ml-auto rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                {solucionActiva.precio[lang]}
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xl">
              {solucionActiva.descripcion[lang]}
            </p>
            <a
              href={whatsappLink(solucionActiva.ctaMensaje[lang])}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-ink hover:bg-accent-strong transition-colors duration-200"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {lang === "es" ? "Quiero este para mi negocio" : "I want this for my business"}
            </a>
          </div>

          {/* Demo interactivo */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-accent/5 blur-xl pointer-events-none" />
            <div className="relative">
              {solucionActiva.demo}
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-muted">
            {lang === "es"
              ? "👆 Demo interactivo — pruébalo tú mismo"
              : "👆 Interactive demo — try it yourself"}
          </p>
        </div>
      </div>
    </Section>
  );
}
