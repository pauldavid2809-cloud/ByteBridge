"use client";

import { useState } from "react";
import { BusinessDemo, CurrencyMode, MenuItem, BookingOption } from "@/data/demosData";
import { DemoHeader } from "@/components/demos/DemoHeader";
import { DemoHero } from "@/components/demos/DemoHero";
import { InteractiveBooking } from "@/components/demos/InteractiveBooking";
import { DigitalMenu } from "@/components/demos/DigitalMenu";
import { ManagerDashboard } from "@/components/demos/ManagerDashboard";
import { QrTicketModal } from "@/components/demos/QrTicketModal";
import { CartDrawer, CartItem } from "@/components/demos/CartDrawer";
import { LocationCard } from "@/components/demos/LocationCard";

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
      {/* Cabecera Adaptativa */}
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
          <DemoHero
            demo={demo}
            onScrollToBooking={() => scrollTo("reservas")}
            onScrollToMenu={() => scrollTo("menu")}
            onScrollToLocation={() => scrollTo("ubicacion")}
          />

          <InteractiveBooking
            demo={demo}
            currency={currency}
            onGenerateQrTicket={handleGenerateQrTicket}
          />

          <DigitalMenu
            demo={demo}
            currency={currency}
            onAddToCart={handleAddToCart}
          />

          <LocationCard demo={demo} />

          {/* Footer de la Demo */}
          <footer className="border-t border-white/10 bg-zinc-950 py-8 text-center text-xs text-zinc-500">
            <p className="text-zinc-400">
              © {new Date().getFullYear()} {demo.name} · WebApp Digital & Sistema de Reservas
            </p>
            <p className="mt-1 text-[11px]">
              Diseñado e implementado a medida por{" "}
              <a
                href="https://wa.me/584121662998"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 underline hover:text-amber-300"
              >
                ByteBridge
              </a>
            </p>
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
