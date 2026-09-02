"use client";

import { useState, useEffect } from "react";
import { BusinessDemo, CurrencyMode, MenuItem, BookingOption } from "@/data/demosData";
import { DemoHeader } from "@/components/demos/DemoHeader";
import { DemoHero } from "@/components/demos/DemoHero";
import { DemoIntro } from "@/components/demos/DemoIntro";
import { InteractiveBooking } from "@/components/demos/InteractiveBooking";
import { DigitalMenu } from "@/components/demos/DigitalMenu";
import { ManagerDashboard } from "@/components/demos/ManagerDashboard";
import { QrTicketModal } from "@/components/demos/QrTicketModal";
import { CartDrawer, CartItem } from "@/components/demos/CartDrawer";
import { LocationCard } from "@/components/demos/LocationCard";
import { RemotionReelModal } from "@/components/demos/RemotionReelModal";
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
  const [isReelOpen, setIsReelOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("admin") === "true" || params.get("gerente") === "true") {
        setIsManagerMode(true);
      }
    }
  }, []);

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
          {/* 1. Hero Principal con trigger de Reel */}
          <DemoHero
            demo={demo}
            onScrollToBooking={() => scrollTo("reservas")}
            onScrollToMenu={() => scrollTo("menu")}
            onScrollToLocation={() => scrollTo("ubicacion")}
            onOpenReel={() => setIsReelOpen(true)}
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

          {/* ═══ SECCIONES DE CONFIANZA ═══ */}

          {/* 6. Cómo Funciona — Proceso en 3 Pasos */}
          <DemoProcess demo={demo} />

          {/* 7. Inversión Transparente — Precios Visibles */}
          <DemoPricing demo={demo} />

          {/* 8. Testimonios de Clientes Reales */}
          <DemoTestimonials demo={demo} />

          {/* 9. Preguntas Frecuentes Operativas */}
          <DemoFaq demo={demo} />

          {/* 10. Quién Está Detrás — Identidad del Desarrollador */}
          <DemoAboutDeveloper demo={demo} />

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

      {/* Modal de Reel / Video Promocional Programático de Remotion */}
      <RemotionReelModal
        isOpen={isReelOpen}
        onClose={() => setIsReelOpen(false)}
        demo={demo}
      />

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
