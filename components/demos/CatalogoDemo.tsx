"use client";

import { useState } from "react";

const categorias = ["Todo", "Ropa", "Accesorios", "Calzado"];

const productos = [
  { id: 1, cat: "Ropa", nombre: "Polo Premium", precio: 25, emoji: "👕", tag: "Nuevo" },
  { id: 2, cat: "Ropa", nombre: "Jeans Slim", precio: 45, emoji: "👖", tag: "" },
  { id: 3, cat: "Ropa", nombre: "Hoodie Urban", precio: 38, emoji: "🧥", tag: "Popular" },
  { id: 4, cat: "Accesorios", nombre: "Gorra Snapback", precio: 18, emoji: "🧢", tag: "" },
  { id: 5, cat: "Accesorios", nombre: "Mochila Táctica", precio: 55, emoji: "🎒", tag: "Popular" },
  { id: 6, cat: "Accesorios", nombre: "Reloj Casual", precio: 75, emoji: "⌚", tag: "Nuevo" },
  { id: 7, cat: "Calzado", nombre: "Sneakers Air", precio: 90, emoji: "👟", tag: "Popular" },
  { id: 8, cat: "Calzado", nombre: "Botas Urban", precio: 110, emoji: "👢", tag: "" },
];

export function CatalogoDemo() {
  const [catActiva, setCatActiva] = useState("Todo");
  const [carrito, setCarrito] = useState<{ id: number; cantidad: number }[]>([]);
  const [vista, setVista] = useState<"catalogo" | "carrito">("catalogo");

  const productosFiltrados = catActiva === "Todo"
    ? productos
    : productos.filter((p) => p.cat === catActiva);

  const agregar = (id: number) => {
    setCarrito((prev) => {
      const ex = prev.find((i) => i.id === id);
      if (ex) return prev.map((i) => i.id === id ? { ...i, cantidad: i.cantidad + 1 } : i);
      return [...prev, { id, cantidad: 1 }];
    });
  };

  const quitar = (id: number) => {
    setCarrito((prev) => prev
      .map((i) => i.id === id ? { ...i, cantidad: i.cantidad - 1 } : i)
      .filter((i) => i.cantidad > 0)
    );
  };

  const totalItems = carrito.reduce((a, b) => a + b.cantidad, 0);
  const totalPrecio = carrito.reduce((a, b) => {
    const p = productos.find((pr) => pr.id === b.id);
    return a + (p?.precio ?? 0) * b.cantidad;
  }, 0);

  return (
    <div className="rounded-2xl border border-line bg-background overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/80 to-indigo-900/80 px-5 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-blue-300 font-medium uppercase tracking-wider">Tienda Online</p>
          <h3 className="text-white font-bold text-lg">🛒 Urban Store</h3>
        </div>
        <button
          onClick={() => setVista(vista === "catalogo" ? "carrito" : "catalogo")}
          className="relative flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-white text-sm hover:bg-white/20 transition-colors"
        >
          {vista === "catalogo" ? "🛒 Carrito" : "← Catálogo"}
          {totalItems > 0 && vista === "catalogo" && (
            <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-accent text-accent-ink text-xs font-bold flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {vista === "carrito" ? (
        <div className="p-4">
          <p className="text-sm font-semibold mb-3">Tu carrito ({totalItems} items)</p>
          {carrito.length === 0 ? (
            <p className="text-sm text-muted py-6 text-center">Tu carrito está vacío.</p>
          ) : (
            <>
              <div className="space-y-3 max-h-52 overflow-y-auto">
                {carrito.map((item) => {
                  const p = productos.find((pr) => pr.id === item.id)!;
                  return (
                    <div key={item.id} className="flex items-center gap-3 rounded-xl border border-line bg-surface p-3">
                      <span className="text-2xl">{p.emoji}</span>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{p.nombre}</p>
                        <p className="text-xs text-accent font-bold">${p.precio}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <button onClick={() => quitar(item.id)} className="h-6 w-6 rounded-full border border-line flex items-center justify-center hover:border-accent/60">−</button>
                        <span className="font-bold w-4 text-center">{item.cantidad}</span>
                        <button onClick={() => agregar(item.id)} className="h-6 w-6 rounded-full border border-line flex items-center justify-center hover:border-accent/60">+</button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t border-line">
                <div className="flex justify-between text-sm font-bold mb-3">
                  <span>Total</span>
                  <span className="text-accent text-lg">${totalPrecio.toFixed(2)}</span>
                </div>
                <button className="w-full rounded-xl bg-accent py-3 text-accent-ink text-sm font-bold hover:bg-accent-strong transition-colors">
                  Pagar ahora →
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <>
          {/* Filtros */}
          <div className="flex gap-2 overflow-x-auto px-4 py-3 border-b border-line">
            {categorias.map((c) => (
              <button
                key={c}
                onClick={() => setCatActiva(c)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  catActiva === c
                    ? "bg-accent text-accent-ink"
                    : "bg-surface text-muted border border-line hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Productos */}
          <div className="grid grid-cols-2 gap-3 p-4 max-h-72 overflow-y-auto sm:grid-cols-4">
            {productosFiltrados.map((p) => {
              const enCarrito = carrito.find((i) => i.id === p.id);
              return (
                <div key={p.id} className="rounded-xl border border-line bg-surface p-3 flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <span className="text-3xl">{p.emoji}</span>
                    {p.tag && (
                      <span className={`text-xs rounded-full px-2 py-0.5 font-semibold ${
                        p.tag === "Nuevo" ? "bg-accent/20 text-accent" : "bg-blue-500/20 text-blue-400"
                      }`}>{p.tag}</span>
                    )}
                  </div>
                  <p className="text-xs font-semibold leading-tight">{p.nombre}</p>
                  <p className="text-sm font-bold text-accent">${p.precio}</p>
                  <button
                    onClick={() => agregar(p.id)}
                    className={`w-full rounded-lg py-1.5 text-xs font-semibold transition-all duration-200 ${
                      enCarrito
                        ? "bg-accent text-accent-ink"
                        : "border border-line hover:border-accent/60 hover:bg-accent/5"
                    }`}
                  >
                    {enCarrito ? `✓ En carrito (${enCarrito.cantidad})` : "Agregar"}
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
