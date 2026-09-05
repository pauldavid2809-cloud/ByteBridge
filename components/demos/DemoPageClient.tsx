"use client";

import { useState, useEffect } from "react";
import { BusinessDemo, CurrencyMode, MenuItem, BookingOption } from "@/data/demosData";
import { DemoHeader } from "@/components/demos/DemoHeader";
import { OwnerModeBanner } from "@/components/demos/OwnerModeBanner";
import { DemoHero } from "@/components/demos/DemoHero";
import { DemoIntro } from "@/components/demos/DemoIntro";
import { InteractiveBooking } from "@/components/demos/InteractiveBooking";
import { DigitalMenu } from "@/components/demos/DigitalMenu";
import { DemoLossAudit } from "@/components/demos/DemoLossAudit";
import { ManagerDashboard } from "@/components/demos/ManagerDashboard";
import { QrTicketModal } from "@/components/demos/QrTicketModal";
import { CartDrawer, CartItem } from "@/components/demos/CartDrawer";
import { LocationCard } from "@/components/demos/LocationCard";
import { ModuleTabsSelector } from "@/components/demos/ModuleTabsSelector";
import { DemoAboutDeveloper } from "@/components/demos/DemoAboutDeveloper";
import { DemoPricing } from "@/components/demos/DemoPricing";
import { DemoProcess } from "@/components/demos/DemoProcess";
import { DemoFaq } from "@/components/demos/DemoFaq";
import { DemoTestimonials } from "@/components/demos/DemoTestimonials";

type BookingData = {
  option: BookingOption;
  date: string;
  time: string;
  pax: number;
  name: string;
  phone: string;
  notes: string;
  totalUSD: number;
};

type Props = {
  demo: BusinessDemo;
};

export function DemoPageClient({ demo }: Props) {
  const [currency, setCurrency] = useState<CurrencyMode>("USD");
  const [isManagerMode, setIsManagerMode] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [activeTicket, setActiveTicket] = useState<BookingData | null>(null);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("admin") === "true" || params.get("gerente") === "true") {
        setIsManagerMode(true);
      }

      // Telemetría en tiempo real: Lead View Alert
      try {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const sourceParam = params.get("source");
        const originSource = sourceParam ? `Campaña ${sourceParam.toUpperCase()}` : (document.referrer ? document.referrer : "Directo / WhatsApp");
        fetch("/api/lead-view", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            slug: demo.slug,
            name: demo.name,
            device: isMobile ? "Móvil (Smartphone)" : "Escritorio (PC)",
            referrer: originSource,
            source: sourceParam || "direct",
            timestamp: Date.now(),
          }),
        }).catch(() => {});
      } catch {
        // Silencioso
      }
    }
  }, [demo.slug, demo.name]);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "USD" ? "VES" : "USD"));
  };

  const toggleManagerMode = () => {
    setIsManagerMode((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id
            ? { ...ci, quantity: ci.quantity + 1 }
            : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems((prev) => prev.filter((ci) => ci.item.id !== itemId));
    } else {
      setCartItems((prev) =>
        prev.map((ci) =>
          ci.item.id === itemId ? { ...ci, quantity: newQuantity } : ci
        )
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleGenerateQrTicket = (bookingData: BookingData) => {
    setActiveTicket(bookingData);
    setIsTicketModalOpen(true);
  };

  const scrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black">
      {/* Barra Superior Modo Propietario (Comensal vs Dueño) */}
      <OwnerModeBanner
        demo={demo}
        isManagerMode={isManagerMode}
        onToggleManagerMode={toggleManagerMode}
      />

      {/* Cabecera Adaptativa con Marca */}
      <DemoHeader
        demo={demo}
        currency={currency}
        onToggleCurrency={toggleCurrency}
        isManagerMode={isManagerMode}
        onToggleManagerMode={toggleManagerMode}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {isManagerMode ? (
        /* Vista de Gerente / Panel Administrativo */
        <ManagerDashboard
          demo={demo}
          onExitManagerMode={() => setIsManagerMode(false)}
        />
      ) : (
        /* Vista del Cliente */
        <main>
          {/* 1. Hero Principal */}
          <DemoHero
            demo={demo}
            onScrollToBooking={() => scrollTo("reservas")}
            onScrollToMenu={() => scrollTo("menu")}
            onScrollToLocation={() => scrollTo("ubicacion")}
          />

          {/* Selector Interactivo de Módulos Operativos */}
          <ModuleTabsSelector
            demo={demo}
            onSelectModule={(mod) => {
              if (mod === "table-ordering" || mod === "direct-delivery") {
                scrollTo("menu");
              } else {
                scrollTo("reservas");
              }
            }}
          />

          {/* 2. Sección Narrativa de Introducción y Diferenciales */}
          <DemoIntro
            demo={demo}
            onExploreBooking={() => scrollTo("reservas")}
            onExploreMenu={() => scrollTo("menu")}
          />

          {/* 3. Módulo de Reservaciones con QR */}
          <InteractiveBooking
            demo={demo}
            currency={currency}
            onGenerateQrTicket={handleGenerateQrTicket}
          />

          {/* 4. Menú Digital Interactivo */}
          <DigitalMenu
            demo={demo}
            currency={currency}
            onAddToCart={handleAddToCart}
          />

          {/* 5. Ubicación y Contacto */}
          <LocationCard demo={demo} />

          {/* 6. Micro-Calculadora de Fuga de Ingresos (Loss-Audit & ROI) */}
          <DemoLossAudit demo={demo} />

          {/* ═══ SECCIONES DE CONFIANZA ═══ */}

          {/* 7. Cómo Funciona — Proceso en 3 Pasos */}
          <DemoProcess demo={demo} />

          {/* 7. Inversión Transparente — Precios Visibles */}
          <DemoPricing demo={demo} />

          {/* 8. Testimonios de Clientes Reales */}
          <DemoTestimonials demo={demo} />

          {/* 9. Preguntas Frecuentes Operativas */}
          <DemoFaq demo={demo} />

          {/* 10. Quién Está Detrás — Identidad del Desarrollador */}
          <DemoAboutDeveloper demo={demo} />

          {/* Banner de Conversión Directa para Demo Universal */}
          {demo.slug === "demo-restaurante" && (
            <section className="mx-auto max-w-5xl px-4 py-8">
              <div className="relative overflow-hidden rounded-3xl border border-amber-400/40 bg-gradient-to-br from-amber-500/15 via-zinc-950 to-amber-900/20 p-6 sm:p-10 shadow-2xl">
                <div className="flex flex-col items-center text-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
                    <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                    ⚡ Implementación Express en 48 Horas
                  </span>
                  <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                    ¿Te gustaría tener esta WebApp con la carta y logo de tu restaurante?
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                    Te entregamos la plataforma lista para usar: con tus platos, fotos, zonas de mesas, cálculo automático a tasa oficial BCV y pedidos directos a tu WhatsApp con 0% de comisiones.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/584120308674?text=${encodeURIComponent(
                        "Hola Paul David! Estuve navegando la demo universal de ByteBridge y me gustaría adaptar esta WebApp para mi restaurante."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3.5 text-sm font-black text-black shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 hover:bg-amber-300"
                    >
                      <span>💬</span>
                      <span>Solicitar Adaptación por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Footer de la Demo */}
          <footer className="border-t border-white/10 bg-zinc-950 py-10 text-center text-xs text-zinc-500">
            <div className="mx-auto max-w-5xl px-4 space-y-2">
              <p className="font-medium text-zinc-400">
                © {new Date().getFullYear()} {demo.name} · WebApp Digital & Sistema de Reservas
              </p>
              <p className="text-[11px] text-zinc-500">
                Diseñado e implementado a medida por{" "}
                <a
                  href="https://wa.me/584120308674"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:text-white transition-colors"
                  style={{ color: demo.palette.accent }}
                >
                  ByteBridge
                </a>
              </p>
            </div>
          </footer>
        </main>
      )}

      {/* Modal de Pase / Boarding Pass con QR */}
      <QrTicketModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
        demo={demo}
        booking={activeTicket}
      />

      {/* Drawer de la Comanda Digital */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        demo={demo}
        items={cartItems}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
