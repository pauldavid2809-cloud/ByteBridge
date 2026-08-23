"use client";

import { useState } from "react";

const categorias = [
  { id: "entradas", label: "Entradas" },
  { id: "principales", label: "Platos Principales" },
  { id: "bebidas", label: "Bebidas" },
  { id: "postres", label: "Postres" },
];

const platos = [
  { id: 1, cat: "entradas", nombre: "Ceviche Clásico", precio: 8.5, desc: "Mariscos frescos, limón, cilantro y ají", emoji: "🦐" },
  { id: 2, cat: "entradas", nombre: "Tequeños Artesanales", precio: 5.0, desc: "Masa criolla rellena de queso blanco", emoji: "🧀" },
  { id: 3, cat: "principales", nombre: "Pollo a la Brasa", precio: 14.0, desc: "Pollo marinado, papas fritas y ensalada", emoji: "🍗" },
  { id: 4, cat: "principales", nombre: "Lomo Saltado", precio: 16.5, desc: "Carne salteada con papas, tomate y cebolla", emoji: "🥩" },
  { id: 5, cat: "principales", nombre: "Pasta al Pesto", precio: 12.0, desc: "Espagueti con pesto casero y parmesano", emoji: "🍝" },
  { id: 6, cat: "bebidas", nombre: "Limonada Natural", precio: 3.0, desc: "Limón fresco, agua y azúcar de caña", emoji: "🍋" },
  { id: 7, cat: "bebidas", nombre: "Jugo de Maracuyá", precio: 3.5, desc: "Fruta de temporada recién exprimida", emoji: "🥤" },
  { id: 8, cat: "postres", nombre: "Tres Leches", precio: 5.5, desc: "Bizcocho esponjoso bañado en tres leches", emoji: "🍰" },
  { id: 9, cat: "postres", nombre: "Brownie con Helado", precio: 6.0, desc: "Chocolate caliente y vainilla artesanal", emoji: "🍫" },
];

export function MenuDemo() {
  const [catActiva, setCatActiva] = useState("entradas");
  const [carrito, setCarrito] = useState<{ id: number; cantidad: number }[]>([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const platosVisibles = platos.filter((p) => p.cat === catActiva);

  const agregarAlCarrito = (id: number) => {
    setCarrito((prev) => {
      const existente = prev.find((i) => i.id === id);
      if (existente) return prev.map((i) => i.id === id ? { ...i, cantidad: i.cantidad + 1 } : i);
      return [...prev, { id, cantidad: 1 }];
    });
  };

  const totalItems = carrito.reduce((a, b) => a + b.cantidad, 0);
  const totalPrecio = carrito.reduce((a, b) => {
    const plato = platos.find((p) => p.id === b.id);
    return a + (plato?.precio ?? 0) * b.cantidad;
  }, 0);

  return (
    <div className="rounded-2xl border border-line bg-background overflow-hidden">
      {/* Header del restaurante */}
      <div className="bg-gradient-to-r from-amber-900/80 to-orange-900/80 px-5 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-amber-300 font-medium uppercase tracking-wider">Menú Digital</p>
          <h3 className="text-white font-bold text-lg">La Casa Criolla</h3>
        </div>
        <button
          onClick={() => setMostrarCarrito(!mostrarCarrito)}
          className="relative flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-white text-sm hover:bg-white/20 transition-colors"
        >
          Pedido
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-accent text-accent-ink text-xs font-bold flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Carrito */}
      {mostrarCarrito && (
        <div className="border-b border-line bg-surface px-5 py-4">
          <p className="text-sm font-semibold mb-3">Tu pedido:</p>
          {carrito.length === 0 ? (
            <p className="text-xs text-muted">Aún no has agregado nada.</p>
          ) : (
            <>
              {carrito.map((item) => {
                const plato = platos.find((p) => p.id === item.id)!;
                return (
                  <div key={item.id} className="flex justify-between text-sm py-1">
                    <span>{item.cantidad}× {plato.emoji} {plato.nombre}</span>
                    <span className="text-accent font-medium">${(plato.precio * item.cantidad).toFixed(2)}</span>
                  </div>
                );
              })}
              <div className="mt-3 pt-3 border-t border-line flex justify-between font-bold text-sm">
                <span>Total</span>
                <span className="text-accent">${totalPrecio.toFixed(2)}</span>
              </div>
              <button className="mt-3 w-full rounded-xl bg-accent py-2 text-accent-ink text-sm font-semibold hover:bg-accent-strong transition-colors">
                Confirmar pedido por WhatsApp
              </button>
            </>
          )}
        </div>
      )}

      {/* Categorías */}
      <div className="flex gap-2 overflow-x-auto px-4 py-3 border-b border-line scrollbar-hide">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCatActiva(cat.id)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
              catActiva === cat.id
                ? "bg-accent text-accent-ink"
                : "bg-surface text-muted border border-line hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Platos */}
      <div className="grid gap-3 p-4 sm:grid-cols-2 max-h-72 overflow-y-auto">
        {platosVisibles.map((plato) => {
          const enCarrito = carrito.find((i) => i.id === plato.id);
          return (
            <div key={plato.id} className="flex items-center gap-3 rounded-xl border border-line bg-surface p-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background text-2xl">
                {plato.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{plato.nombre}</p>
                <p className="text-xs text-muted truncate">{plato.desc}</p>
                <p className="mt-0.5 text-sm font-bold text-accent">${plato.precio.toFixed(2)}</p>
              </div>
              <button
                onClick={() => agregarAlCarrito(plato.id)}
                className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-ink text-lg font-bold hover:bg-accent-strong transition-all hover:scale-110"
              >
                {enCarrito ? `${enCarrito.cantidad}+` : "+"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
