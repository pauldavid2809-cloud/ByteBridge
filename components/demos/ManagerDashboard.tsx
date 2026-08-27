"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BusinessDemo, MenuItem, BCV_RATE } from "@/data/demosData";

type Props = {
  demo: BusinessDemo;
  onExitManagerMode: () => void;
};

type StaffUser = {
  id: string;
  name: string;
  email: string;
  role: "Gerente General" | "Game Master" | "Barra / Cocina" | "Validador Puerta";
  status: "Activo" | "Inactivo";
  lastLogin: string;
};

type ClientRecord = {
  id: string;
  name: string;
  phone: string;
  visits: number;
  totalSpentUSD: number;
  favoriteItem: string;
  lastVisit: string;
};

export function ManagerDashboard({ demo, onExitManagerMode }: Props) {
  const [activeTab, setActiveTab] = useState<"overview" | "menu" | "users" | "crm" | "settings">("overview");

  // State para Reservas
  const [bookings, setBookings] = useState(demo.sampleBookings);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{
    code: string;
    name: string;
    plan: string;
    pax: number;
    status: string;
  } | null>(null);

  // State para Menú / Catálogo (CRUD)
  const [menuItems, setMenuItems] = useState<MenuItem[]>(demo.menuItems);
  const [showAddMenuModal, setShowAddMenuModal] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [newItemCategory, setNewItemCategory] = useState(demo.categories[0]?.id || "platos");
  const [newItemDesc, setNewItemDesc] = useState("");

  // State para Usuarios & Roles
  const [staffUsers, setStaffUsers] = useState<StaffUser[]>([
    {
      id: "USR-01",
      name: "Paul David (Gerente)",
      email: "gerencia@thecornermcbo.com",
      role: "Gerente General",
      status: "Activo",
      lastLogin: "Hace 5 min",
    },
    {
      id: "USR-02",
      name: "Andrea Colina",
      email: "andrea@thecornermcbo.com",
      role: "Game Master",
      status: "Activo",
      lastLogin: "Hoy 04:30 PM",
    },
    {
      id: "USR-03",
      name: "Marcos Villalobos",
      email: "marcos@thecornermcbo.com",
      role: "Barra / Cocina",
      status: "Activo",
      lastLogin: "Ayer 11:20 PM",
    },
    {
      id: "USR-04",
      name: "Validador Puerta (Turno Noche)",
      email: "puerta@thecornermcbo.com",
      role: "Validador Puerta",
      status: "Inactivo",
      lastLogin: "Hace 2 días",
    },
  ]);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserRole, setNewUserRole] = useState<StaffUser["role"]>("Game Master");

  // State para Clientes (CRM)
  const [clients, setClients] = useState<ClientRecord[]>([
    {
      id: "CLI-101",
      name: "Carlos Mendoza",
      phone: "+58 412 5551234",
      visits: 6,
      totalSpentUSD: 240,
      favoriteItem: "Catan + Poción Mana Blue",
      lastVisit: "Hoy · 08:00 PM",
    },
    {
      id: "CLI-102",
      name: "Mariana Albornoz",
      phone: "+58 414 7894561",
      visits: 4,
      totalSpentUSD: 185,
      favoriteItem: "Reserva Salón Cumpleaños",
      lastVisit: "Ayer",
    },
    {
      id: "CLI-103",
      name: "Luis Ignacio Torres",
      phone: "+58 424 1239874",
      visits: 9,
      totalSpentUSD: 360,
      favoriteItem: "Mesa Gamer + Nachos Volcánicos",
      lastVisit: "Hace 3 días",
    },
    {
      id: "CLI-104",
      name: "Sofía Arrieta",
      phone: "+58 412 9998877",
      visits: 2,
      totalSpentUSD: 70,
      favoriteItem: "Codenames Party",
      lastVisit: "Semana pasada",
    },
  ]);

  // State para Configuración
  const [bcvRateInput, setBcvRateInput] = useState(BCV_RATE.toString());
  const [customWhatsApp, setCustomWhatsApp] = useState("04120308674");
  const [savedSettingsMsg, setSavedSettingsMsg] = useState(false);

  const handleUpdateStatus = (
    id: string,
    newStatus: "confirmada" | "en_mesa" | "pendiente"
  ) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  const handleSimulateScan = () => {
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        code: `PASS-${Math.floor(1000 + Math.random() * 9000)}`,
        name: "Carlos Mendoza",
        plan: demo.bookingOptions[0]?.name || "Reserva VIP Gamer",
        pax: 4,
        status: "Pase Válido y Activo",
      });
    }, 1400);
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName || !newItemPrice) return;

    const newItem: MenuItem = {
      id: `item-${Date.now()}`,
      name: newItemName,
      priceUSD: parseFloat(newItemPrice) || 0,
      category: newItemCategory,
      description: newItemDesc || "Nuevo ítem agregado desde el panel administrativo.",
      badge: "Nuevo",
      popular: true,
    };

    setMenuItems((prev) => [newItem, ...prev]);
    setNewItemName("");
    setNewItemPrice("");
    setNewItemDesc("");
    setShowAddMenuModal(false);
  };

  const handleDeleteItem = (id: string) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName || !newUserEmail) return;

    const newUser: StaffUser = {
      id: `USR-0${staffUsers.length + 1}`,
      name: newUserName,
      email: newUserEmail,
      role: newUserRole,
      status: "Activo",
      lastLogin: "Recién Creado",
    };

    setStaffUsers((prev) => [...prev, newUser]);
    setNewUserName("");
    setNewUserEmail("");
    setShowAddUserModal(false);
  };

  const handleToggleUserStatus = (id: string) => {
    setStaffUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Activo" ? "Inactivo" : "Activo" }
          : u
      )
    );
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSettingsMsg(true);
    setTimeout(() => setSavedSettingsMsg(false), 2500);
  };

  const todaySalesVES = demo.managerKpis.todaySalesUSD * BCV_RATE;

  return (
    <section className="min-h-screen bg-zinc-950 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Cabecera del Panel de Gerente */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span
                className="rounded-md px-2.5 py-1 text-xs font-black text-black uppercase tracking-wider"
                style={{ backgroundColor: demo.palette.accent }}
              >
                Panel de Administración
              </span>
              <h2 className="text-xl font-black text-white sm:text-2xl">
                Administración · {demo.name}
              </h2>
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              Sistema integral de control: Gestión de menú/juegos, usuarios y roles, clientes y reservaciones en tiempo real.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onExitManagerMode}
              className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-white/20 active:scale-95"
            >
              ← Ver Vista del Cliente
            </button>
          </div>
        </div>

        {/* Barra de Pestañas de Navegación del Backend */}
        <div className="mt-6 flex gap-2 overflow-x-auto border-b border-white/10 pb-3 scrollbar-none">
          {[
            { id: "overview", label: "📊 Resumen & Reservas QR", badge: `${bookings.length}` },
            { id: "menu", label: "🎲 Menú & Catálogo de Juegos", badge: `${menuItems.length}` },
            { id: "users", label: "👥 Usuarios & Roles", badge: `${staffUsers.length}` },
            { id: "crm", label: "📇 Directorio de Clientes", badge: `${clients.length}` },
            { id: "settings", label: "⚙️ Configuración & Tasa BCV" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`relative flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-bold transition-all active:scale-95 ${
                  isActive
                    ? "bg-white text-black shadow-lg"
                    : "border border-white/10 bg-zinc-900/80 text-zinc-400 hover:text-white"
                }`}
              >
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono font-bold ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-white/10 text-zinc-300"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* PESTAÑA 1: RESUMEN Y RESERVAS QR */}
        {/* ============================================================ */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* KPIs del Día */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
                <span className="text-xs text-zinc-400">Reservas Activas</span>
                <p className="mt-1 text-2xl font-black text-white">
                  {bookings.length}
                </p>
                <span className="text-[10px] font-semibold text-emerald-400">
                  ● 3 confirmadas en sala
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
                <span className="text-xs text-zinc-400">Aforo en Sala</span>
                <p
                  className="mt-1 text-2xl font-black"
                  style={{ color: demo.palette.accent }}
                >
                  {demo.managerKpis.capacityPercentage}%
                </p>
                <span className="text-[10px] text-zinc-400">Capacidad óptima</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
                <span className="text-xs text-zinc-400">Ventas Estimadas Hoy</span>
                <p className="mt-1 text-2xl font-black text-emerald-400">
                  ${demo.managerKpis.todaySalesUSD} USD
                </p>
                <span className="font-mono text-[10px] text-zinc-400">
                  ≈ {todaySalesVES.toLocaleString("es-VE", { maximumFractionDigits: 0 })} Bs
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
                <span className="text-xs text-zinc-400">Ticket Promedio</span>
                <p className="mt-1 text-2xl font-black text-white">
                  ${demo.managerKpis.avgTicketUSD} USD
                </p>
                <span className="text-[10px] text-emerald-400">+18% vs semana anterior</span>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-12">
              {/* Feed de Reservas en Vivo */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300">
                    Reservas & Pases del Día:
                  </h3>
                  <span className="text-xs font-semibold text-zinc-400">
                    Tasa BCV: {BCV_RATE} Bs/$
                  </span>
                </div>

                <div className="space-y-3">
                  {bookings.map((b) => (
                    <motion.div
                      key={b.id}
                      layout
                      className="rounded-2xl border border-white/10 bg-zinc-900/90 p-4.5 transition-all hover:border-white/20"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span
                              className="font-mono text-xs font-bold"
                              style={{ color: demo.palette.accent }}
                            >
                              #{b.id}
                            </span>
                            <h4 className="text-sm font-bold text-white">
                              {b.clientName}
                            </h4>
                          </div>
                          <p className="mt-1 text-xs text-zinc-300">{b.details}</p>
                          <p className="mt-0.5 text-[11px] text-zinc-500">
                            Hora estimada: {b.time} · {b.pax} Personas
                          </p>
                        </div>

                        <div className="text-right">
                          <span className="font-mono text-sm font-bold text-emerald-400">
                            ${b.totalUSD} USD
                          </span>
                          <div className="mt-1">
                            <span
                              className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                                b.status === "en_mesa"
                                  ? "bg-emerald-500/20 text-emerald-300"
                                  : b.status === "confirmada"
                                  ? "bg-blue-500/20 text-blue-300"
                                  : "bg-amber-500/20 text-amber-300"
                              }`}
                            >
                              {b.status === "en_mesa"
                                ? "En Sala / Mesa"
                                : b.status === "confirmada"
                                ? "Confirmada"
                                : "Pendiente"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Acciones de Estado del Gerente */}
                      <div className="mt-3 flex items-center gap-2 border-t border-white/5 pt-3">
                        <button
                          onClick={() => handleUpdateStatus(b.id, "en_mesa")}
                          className="rounded-lg bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400 hover:bg-emerald-500/20 active:scale-95"
                        >
                          ✓ Marcar en Mesa
                        </button>
                        <button
                          onClick={() => handleUpdateStatus(b.id, "confirmada")}
                          className="rounded-lg bg-blue-500/10 px-2.5 py-1 text-[11px] font-semibold text-blue-400 hover:bg-blue-500/20 active:scale-95"
                        >
                          Confirmar
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Lector Óptico / Escáner QR de Puerta */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300">
                  Escáner Óptico de Pases QR:
                </h3>

                <div className="rounded-2xl border border-white/15 bg-zinc-900/90 p-5 text-center shadow-xl">
                  {/* Visor de Cámara Simulado */}
                  <div className="relative mx-auto flex h-48 w-full max-w-xs items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-white/20 bg-black">
                    {isScanning ? (
                      <>
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-bounce" />
                        <span className="text-xs font-mono text-emerald-400 animate-pulse">
                          Escaneando código QR...
                        </span>
                      </>
                    ) : scanResult ? (
                      <div className="p-3 text-center">
                        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="mt-1 font-mono text-xs font-bold text-emerald-400">
                          {scanResult.code}
                        </p>
                        <p className="text-xs font-bold text-white">{scanResult.name}</p>
                        <p className="text-[10px] text-zinc-400">
                          {scanResult.plan} · {scanResult.pax} pax
                        </p>
                      </div>
                    ) : (
                      <div className="text-zinc-500">
                        <svg
                          className="mx-auto h-8 w-8 text-zinc-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <p className="mt-2 text-xs text-zinc-400">Visor de Escaneo QR Listo</p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleSimulateScan}
                    disabled={isScanning}
                    className="mt-4 w-full rounded-xl py-3 text-xs font-bold text-black shadow-lg transition-all active:scale-95 disabled:opacity-50"
                    style={{
                      backgroundColor: demo.palette.accent,
                      boxShadow: `0 8px 20px -4px ${demo.palette.glow}`,
                    }}
                  >
                    {isScanning ? "Validando en sistema..." : "Simular Escaneo de Pase en Puerta"}
                  </button>

                  <p className="mt-3 text-[11px] text-zinc-500">
                    Permite al personal de puerta o capitanes de mesoneros validar pases en menos de 1 segundo desde cualquier celular.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ============================================================ */}
        {/* PESTAÑA 2: GESTIÓN DE MENÚ Y JUEGOS DE MESA (CRUD) */}
        {/* ============================================================ */}
        {activeTab === "menu" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-6 space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Catálogo de Juegos de Mesa & Carta de Tragos/Comida
                </h3>
                <p className="text-xs text-zinc-400">
                  Agrega, edita precios o activa/desactiva productos en tiempo real sin tocar código.
                </p>
              </div>

              <button
                onClick={() => setShowAddMenuModal(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-black shadow-lg shadow-emerald-500/20 transition-all active:scale-95 hover:bg-emerald-400"
              >
                <span>+ Agregar Nuevo Juego / Trago</span>
              </button>
            </div>

            {/* Tabla / Grid de Ítems del Catálogo */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/80 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-zinc-300">
                  <thead className="border-b border-white/10 bg-black/50 text-[11px] uppercase tracking-wider text-zinc-400">
                    <tr>
                      <th className="px-4 py-3">Nombre del Ítem / Juego</th>
                      <th className="px-4 py-3">Categoría</th>
                      <th className="px-4 py-3">Precio USD</th>
                      <th className="px-4 py-3">Tasa en Bs (BCV)</th>
                      <th className="px-4 py-3">Estado</th>
                      <th className="px-4 py-3 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-medium">
                    {menuItems.map((item) => {
                      const priceVES = item.priceUSD * BCV_RATE;
                      return (
                        <tr key={item.id} className="hover:bg-white/5 transition-colors">
                          <td className="px-4 py-3">
                            <div className="font-bold text-white">{item.name}</div>
                            <div className="text-[11px] text-zinc-400 line-clamp-1 max-w-xs">
                              {item.description}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-zinc-200 uppercase">
                              {item.category}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-mono font-bold text-white">
                            {item.priceUSD === 0 ? "Incluido" : `$${item.priceUSD} USD`}
                          </td>
                          <td className="px-4 py-3 font-mono text-emerald-400">
                            {item.priceUSD === 0
                              ? "—"
                              : `≈ ${priceVES.toLocaleString("es-VE", {
                                  maximumFractionDigits: 0,
                                })} Bs`}
                          </td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                              ● Disponible
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="inline-flex items-center gap-2">
                              <button
                                onClick={() => handleDeleteItem(item.id)}
                                className="rounded-lg bg-red-500/10 px-2 py-1 text-[11px] font-semibold text-red-400 hover:bg-red-500/20 active:scale-95"
                                title="Eliminar ítem"
                              >
                                Eliminar
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* ============================================================ */}
        {/* PESTAÑA 3: GESTIÓN DE USUARIOS Y ROLES (STAFF) */}
        {/* ============================================================ */}
        {activeTab === "users" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-6 space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Equipo de Trabajo & Permisos de Acceso
                </h3>
                <p className="text-xs text-zinc-400">
                  Asigna accesos diferenciados para Gerentes, Game Masters, Personal de Barra y Validadores de Puerta.
                </p>
              </div>

              <button
                onClick={() => setShowAddUserModal(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-bold text-black shadow-lg shadow-amber-400/20 transition-all active:scale-95 hover:bg-amber-300"
              >
                <span>+ Invitar Nuevo Usuario</span>
              </button>
            </div>

            {/* Tabla de Usuarios */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/80 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-zinc-300">
                  <thead className="border-b border-white/10 bg-black/50 text-[11px] uppercase tracking-wider text-zinc-400">
                    <tr>
                      <th className="px-4 py-3">Nombre & Correo</th>
                      <th className="px-4 py-3">Rol / Nivel de Acceso</th>
                      <th className="px-4 py-3">Estado</th>
                      <th className="px-4 py-3">Último Acceso</th>
                      <th className="px-4 py-3 text-right">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-medium">
                    {staffUsers.map((u) => (
                      <tr key={u.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3">
                          <div className="font-bold text-white">{u.name}</div>
                          <div className="text-[11px] text-zinc-400 font-mono">{u.email}</div>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                              u.role === "Gerente General"
                                ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                                : u.role === "Game Master"
                                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                : "bg-zinc-800 text-zinc-300 border border-white/10"
                            }`}
                          >
                            {u.role}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => handleToggleUserStatus(u.id)}
                            className={`rounded-full px-2 py-0.5 text-[10px] font-bold transition-all ${
                              u.status === "Activo"
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            ● {u.status}
                          </button>
                        </td>
                        <td className="px-4 py-3 text-zinc-400">{u.lastLogin}</td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={() => handleToggleUserStatus(u.id)}
                            className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300 hover:bg-white/10 hover:text-white"
                          >
                            {u.status === "Activo" ? "Desactivar" : "Activar"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* ============================================================ */}
        {/* PESTAÑA 4: DIRECTORIO DE CLIENTES (CRM) */}
        {/* ============================================================ */}
        {activeTab === "crm" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-6 space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Base de Datos de Clientes & Historial de Visitas
                </h3>
                <p className="text-xs text-zinc-400">
                  Registro automático de clientes que han generado reservas o pedidos para campañas de fidelización.
                </p>
              </div>

              <button
                onClick={() => alert("Simulación: Descargando reporte de clientes en formato CSV/Excel")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold text-white transition-all active:scale-95 hover:bg-white/20"
              >
                <span>📥 Exportar a Excel (CSV)</span>
              </button>
            </div>

            {/* Tabla CRM */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/80 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-zinc-300">
                  <thead className="border-b border-white/10 bg-black/50 text-[11px] uppercase tracking-wider text-zinc-400">
                    <tr>
                      <th className="px-4 py-3">Cliente</th>
                      <th className="px-4 py-3">WhatsApp</th>
                      <th className="px-4 py-3">Visitas Totales</th>
                      <th className="px-4 py-3">Gasto Acumulado</th>
                      <th className="px-4 py-3">Preferencia / Favorito</th>
                      <th className="px-4 py-3 text-right">Contacto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-medium">
                    {clients.map((c) => (
                      <tr key={c.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3">
                          <div className="font-bold text-white">{c.name}</div>
                          <div className="text-[10px] font-mono text-zinc-500">{c.id}</div>
                        </td>
                        <td className="px-4 py-3 font-mono text-zinc-300">{c.phone}</td>
                        <td className="px-4 py-3 font-bold text-white">
                          ⭐ {c.visits} visitas
                        </td>
                        <td className="px-4 py-3 font-mono font-bold text-emerald-400">
                          ${c.totalSpentUSD} USD
                        </td>
                        <td className="px-4 py-3 text-zinc-300">{c.favoriteItem}</td>
                        <td className="px-4 py-3 text-right">
                          <a
                            href={`https://wa.me/${c.phone.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-1 text-[11px] font-bold text-emerald-400 hover:bg-emerald-500/30 active:scale-95"
                          >
                            <span>📲 Abrir Chat</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* ============================================================ */}
        {/* PESTAÑA 5: CONFIGURACIÓN & TASA BCV */}
        {/* ============================================================ */}
        {activeTab === "settings" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-6 max-w-2xl space-y-6"
          >
            <div>
              <h3 className="text-lg font-bold text-white">
                Ajustes Operativos & Tasa de Cambio
              </h3>
              <p className="text-xs text-zinc-400">
                Configura los números de recepción de comandas y el valor referencial de la divisa.
              </p>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900/80 p-6">
              <div>
                <label className="text-xs font-semibold text-zinc-300">
                  Tasa de Cambio Oficial (Bs / USD):
                </label>
                <div className="mt-1.5 flex items-center gap-2">
                  <input
                    type="number"
                    step="0.01"
                    value={bcvRateInput}
                    onChange={(e) => setBcvRateInput(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-black px-3.5 py-2.5 text-sm font-mono text-white focus:border-amber-400 focus:outline-none"
                  />
                  <span className="text-xs font-bold text-zinc-400">Bs/$</span>
                </div>
                <p className="mt-1 text-[11px] text-zinc-500">
                  Todos los precios de la carta y reservas se recalculan automáticamente en base a este valor.
                </p>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300">
                  WhatsApp Oficial para Recibir Comandas y Reservas:
                </label>
                <input
                  type="text"
                  value={customWhatsApp}
                  onChange={(e) => setCustomWhatsApp(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-black px-3.5 py-2.5 text-sm font-mono text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300">
                  Horarios de Atención al Público:
                </label>
                <input
                  type="text"
                  defaultValue={demo.hours}
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-black px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-black shadow transition-all active:scale-95 hover:bg-zinc-200"
                >
                  Guardar Cambios
                </button>

                {savedSettingsMsg && (
                  <span className="ml-3 text-xs font-bold text-emerald-400 animate-pulse">
                    ✓ ¡Configuración guardada exitosamente!
                  </span>
                )}
              </div>
            </form>
          </motion.div>
        )}
      </div>

      {/* MODAL: Agregar Ítem al Menú / Catálogo */}
      <AnimatePresence>
        {showAddMenuModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddMenuModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 bg-zinc-950 p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h4 className="text-base font-bold text-white">
                  + Agregar Ítem o Juego al Catálogo
                </h4>
                <button
                  onClick={() => setShowAddMenuModal(false)}
                  className="text-xs font-bold text-zinc-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddItem} className="mt-4 space-y-3">
                <div>
                  <label className="text-[11px] font-semibold text-zinc-400">
                    Nombre del Juego / Trago / Comida:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Juego Dixit / Smash Burger"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-semibold text-zinc-400">
                      Precio USD ($):
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      required
                      placeholder="0 (si es juego) o 12"
                      value={newItemPrice}
                      onChange={(e) => setNewItemPrice(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-zinc-400">
                      Categoría:
                    </label>
                    <select
                      value={newItemCategory}
                      onChange={(e) => setNewItemCategory(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                    >
                      {demo.categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-zinc-400">
                    Descripción / Detalles:
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Detalles de preparación o reglas de jugadores..."
                    value={newItemDesc}
                    onChange={(e) => setNewItemDesc(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="mt-4 flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddMenuModal(false)}
                    className="rounded-xl px-4 py-2 text-xs text-zinc-400 hover:text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-black shadow active:scale-95 hover:bg-emerald-400"
                  >
                    Guardar en Catálogo
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL: Agregar Usuario / Staff */}
      <AnimatePresence>
        {showAddUserModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddUserModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 bg-zinc-950 p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h4 className="text-base font-bold text-white">
                  + Invitar Nuevo Usuario / Empleado
                </h4>
                <button
                  onClick={() => setShowAddUserModal(false)}
                  className="text-xs font-bold text-zinc-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddUser} className="mt-4 space-y-3">
                <div>
                  <label className="text-[11px] font-semibold text-zinc-400">
                    Nombre Completo:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Daniel Castillo"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-zinc-400">
                    Correo Electrónico para Acceso:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="daniel@thecornermcbo.com"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-zinc-400">
                    Rol Asignado:
                  </label>
                  <select
                    value={newUserRole}
                    onChange={(e) => setNewUserRole(e.target.value as StaffUser["role"])}
                    className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Game Master">Game Master (Control de Ludoteca y Mesas)</option>
                    <option value="Gerente General">Gerente General (Acceso Total)</option>
                    <option value="Barra / Cocina">Barra / Cocina (Recepción de Comandas)</option>
                    <option value="Validador Puerta">Validador Puerta (Solo Escáner QR)</option>
                  </select>
                </div>

                <div className="mt-4 flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddUserModal(false)}
                    className="rounded-xl px-4 py-2 text-xs text-zinc-400 hover:text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-amber-400 px-4 py-2 text-xs font-bold text-black shadow active:scale-95 hover:bg-amber-300"
                  >
                    Crear Usuario
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
