"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BusinessDemo, MenuItem, BCV_RATE, CurrencyMode } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
  currency: CurrencyMode;
  onAddToCart: (item: MenuItem) => void;
};

export function DigitalMenu({ demo, currency, onAddToCart }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const filteredItems = demo.menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setRecentlyAddedId(item.id);
    setTimeout(() => setRecentlyAddedId(null), 1200);
  };

  return (
    <section
      id="menu"
      className="scroll-mt-20 border-b border-white/10 bg-zinc-950 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Título de la Sección */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: demo.palette.primary }}
            >
              Carta Digital & Pedidos
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Menú Digital Interactivo
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Explora nuestros platillos, bebidas y especialidades. Precios en tiempo real con conversión oficial.
            </p>
          </div>

          {/* Buscador de platillos */}
          <div className="w-full md:w-72">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar en el menú..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-white/15 bg-zinc-900/90 pl-9 pr-4 py-2 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
              />
              <span className="absolute left-3 top-2.5 text-sm text-zinc-500">
                🔍
              </span>
            </div>
          </div>
        </div>

        {/* Pestañas Horizontales de Categorías */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveCategory("all")}
            className={`relative whitespace-nowrap rounded-xl px-4 py-2 text-xs font-bold transition-all active:scale-95 ${
              activeCategory === "all"
                ? "bg-white text-black shadow-md"
                : "border border-white/10 bg-zinc-900/70 text-zinc-300 hover:bg-zinc-800"
            }`}
          >
            ✨ Todos ({demo.menuItems.length})
          </button>

          {demo.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative whitespace-nowrap rounded-xl px-4 py-2 text-xs font-bold transition-all active:scale-95 ${
                activeCategory === cat.id
                  ? "bg-white text-black shadow-md"
                  : "border border-white/10 bg-zinc-900/70 text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              {cat.icon && <span className="mr-1.5">{cat.icon}</span>}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid de Ítems del Menú */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isRecentlyAdded = recentlyAddedId === item.id;
              const priceUSD = item.priceUSD;
              const priceVES = priceUSD * BCV_RATE;
              const displayPrice =
                currency === "USD"
                  ? priceUSD === 0
                    ? "Incluido en Ludoteca"
                    : `$${priceUSD} USD`
                  : priceUSD === 0
                  ? "Incluido en Ludoteca"
                  : `${priceVES.toLocaleString("es-VE", {
                      maximumFractionDigits: 2,
                    })} Bs`;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                  key={item.id}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-900/80 p-5 backdrop-blur-md transition-all hover:border-white/20 hover:bg-zinc-900"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-white">
                          {item.name}
                        </h3>
                        {item.popular && (
                          <span className="rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                            ⭐ Popular
                          </span>
                        )}
                      </div>

                      {item.badge && (
                        <span
                          className="shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold text-white shadow-sm"
                          style={{ backgroundColor: demo.palette.primary }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                      {item.description}
                    </p>

                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                    <div>
                      <span className="text-base font-black text-white sm:text-lg">
                        {displayPrice}
                      </span>
                      {priceUSD > 0 && (
                        <p className="text-[10px] text-zinc-500">
                          {currency === "USD"
                            ? `≈ ${priceVES.toLocaleString("es-VE", {
                                maximumFractionDigits: 2,
                              })} Bs`
                            : `≈ $${priceUSD} USD`}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all active:scale-[0.96] ${
                        isRecentlyAdded
                          ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                          : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {isRecentlyAdded ? (
                        <>
                          <span>✓</span>
                          <span>¡Agregado!</span>
                        </>
                      ) : (
                        <>
                          <span>+</span>
                          <span>Pedir a Comanda</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-white/10 p-12 text-center text-zinc-400">
            <p className="text-lg">🔍 No se encontraron platillos o servicios</p>
            <p className="mt-1 text-xs text-zinc-500">
              Intenta buscar con otro término o selecciona otra categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
