"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BusinessDemo, MenuItem, BCV_RATE, CurrencyMode } from "@/data/demosData";

export type CartItem = {
  item: MenuItem;
  quantity: number;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  demo: BusinessDemo;
  items: CartItem[];
  currency: CurrencyMode;
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onClearCart: () => void;
};

export function CartDrawer({
  isOpen,
  onClose,
  demo,
  items,
  currency,
  onUpdateQuantity,
  onClearCart,
}: Props) {
  const [tableOrNote, setTableOrNote] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("Pago Móvil");

  if (!isOpen) return null;

  const totalUSD = items.reduce(
    (acc, curr) => acc + curr.item.priceUSD * curr.quantity,
    0
  );
  const totalVES = totalUSD * BCV_RATE;

  const handleSendOrder = () => {
    if (items.length === 0) return;

    let itemsText = "";
    items.forEach((ci) => {
      itemsText += `• ${ci.quantity}x ${ci.item.name} ($${ci.item.priceUSD * ci.quantity})\n`;
    });

    const msg =
      `🛒 *[DEMO ${demo.name.toUpperCase()}] NUEVA COMANDA / PEDIDO*\n\n` +
      (clientName ? `*Cliente:* ${clientName}\n` : "") +
      (tableOrNote ? `*Mesa / Ubicación:* ${tableOrNote}\n` : "") +
      `*Método de Pago:* ${paymentMethod}\n\n` +
      `*DESGLOSE DE ITEMS:*\n${itemsText}\n` +
      `*TOTAL:* $${totalUSD} USD (≈ ${totalVES.toLocaleString("es-VE", {
        maximumFractionDigits: 2,
      })} Bs a tasa BCV: ${BCV_RATE})\n\n` +
      `_Pedido digital generado desde la WebApp de demostración._`;

    const url = `https://wa.me/584121662998?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Panel lateral / inferior */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 flex h-full w-full max-w-md flex-col justify-between border-l border-white/10 bg-zinc-950 p-6 shadow-2xl"
        >
          {/* Cabecera del Carrito */}
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">🛒</span>
                <h3 className="text-lg font-bold text-white">Comanda Digital</h3>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-bold text-zinc-300">
                  {items.length} {items.length === 1 ? "ítem" : "ítems"}
                </span>
              </div>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-zinc-400 hover:bg-white/20 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Lista de Ítems */}
            <div className="mt-4 max-h-[42vh] space-y-3 overflow-y-auto pr-1 scrollbar-none">
              {items.length === 0 ? (
                <div className="py-12 text-center text-zinc-500">
                  <p className="text-3xl">🍽️</p>
                  <p className="mt-2 text-sm">Tu comanda está vacía</p>
                  <p className="mt-1 text-xs">Agrega platillos o bebidas del menú</p>
                </div>
              ) : (
                items.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-zinc-900/80 p-3"
                  >
                    <div className="flex-1 pr-3">
                      <h4 className="text-xs font-bold text-white sm:text-sm">
                        {item.name}
                      </h4>
                      <p className="text-xs font-semibold text-emerald-400">
                        ${item.priceUSD * quantity} USD
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-white transition-all active:scale-90"
                      >
                        -
                      </button>
                      <span className="w-5 text-center font-mono text-xs font-bold text-white">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-white transition-all active:scale-90"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Formulario y Checkout */}
          <div className="border-t border-white/10 pt-4">
            {items.length > 0 && (
              <div className="space-y-3 mb-4">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Tu Nombre"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Mesa # / Ubicación"
                    value={tableOrNote}
                    onChange={(e) => setTableOrNote(e.target.value)}
                    className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                {/* Métodos de Pago */}
                <div>
                  <label className="text-[11px] text-zinc-400">Método de pago:</label>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {["Pago Móvil", "Zelle", "Efectivo USD", "Punto / Tarjeta"].map(
                      (m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setPaymentMethod(m)}
                          className={`rounded-md px-2 py-1 text-[10px] font-semibold transition-all ${
                            paymentMethod === m
                              ? "bg-amber-400 text-black font-bold"
                              : "bg-white/5 text-zinc-400 hover:bg-white/10"
                          }`}
                        >
                          {m}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Total */}
            <div className="rounded-xl border border-white/10 bg-zinc-900 p-3">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>Subtotal:</span>
                <span>Tasa BCV: {BCV_RATE} Bs/$</span>
              </div>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="text-xl font-black text-white">
                  ${totalUSD} USD
                </span>
                <span className="font-mono text-xs font-bold text-emerald-400">
                  ≈ {totalVES.toLocaleString("es-VE", { maximumFractionDigits: 2 })} Bs
                </span>
              </div>
            </div>

            {/* Botón de Enviar Pedido a WhatsApp */}
            <div className="mt-3 space-y-2">
              <button
                onClick={handleSendOrder}
                disabled={items.length === 0}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-xs font-bold text-black shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.97] disabled:opacity-40"
              >
                <span>📲</span>
                <span>Enviar Comanda por WhatsApp</span>
              </button>

              {items.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="w-full py-1 text-center text-[10px] text-zinc-500 hover:text-red-400"
                >
                  Vaciar comanda
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
