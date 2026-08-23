"use client";

import { useState, useEffect } from "react";
import QRCode from "qrcode";
import { TicketQrIcon } from "@/components/icons/AppIcons";

interface EventTier {
  id: string;
  name: string;
  price: number;
  perks: string;
  color: string;
}

const tiers: EventTier[] = [
  { id: "general", name: "General Pass", price: 15, perks: "Acceso General + 1 Bebida", color: "from-blue-600 to-indigo-600" },
  { id: "vip", name: "VIP Experience", price: 35, perks: "Zona Frontal + Barra Libre + Fast Pass", color: "from-amber-500 to-emerald-500" },
  { id: "backstage", name: "All-Access Backstage", price: 75, perks: "Meet & Greet + Lounge Privado + Merch", color: "from-purple-600 to-pink-600" },
];

export function TicketQrDemo() {
  const [tierSel, setTierSel] = useState<string>("vip");
  const [nombre, setNombre] = useState<string>("Carlos Méndez");
  const [cantidad, setCantidad] = useState<number>(1);
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [vista, setVista] = useState<"comprar" | "ticket" | "scanner">("ticket");

  // Estado del Escáner de Puerta
  const [escaneado, setEscaneado] = useState(false);
  const [fechaEscaneo, setFechaEscaneo] = useState<string | null>(null);
  const [escanerAnimando, setEscanerAnimando] = useState(false);

  const tierActual = tiers.find((t) => t.id === tierSel) || tiers[1];
  const ticketId = `BB-2026-${tierSel.toUpperCase()}-8921`;

  // Generar QR dinámico
  useEffect(() => {
    const payload = JSON.stringify({
      id: ticketId,
      tier: tierActual.name,
      holder: nombre || "Invitado",
      qty: cantidad,
      event: "Sunset Fest 2026",
      status: "VALID",
      issuedAt: new Date().toISOString(),
    });

    QRCode.toDataURL(payload, {
      margin: 1,
      width: 220,
      color: {
        dark: "#052e20",
        light: "#2ebd85",
      },
    })
      .then((url) => setQrDataUrl(url))
      .catch(() => setQrDataUrl(""));
  }, [ticketId, tierActual.name, nombre, cantidad]);

  const handleSimularEscaneo = () => {
    setEscanerAnimando(true);
    setTimeout(() => {
      setEscanerAnimando(false);
      if (!escaneado) {
        setEscaneado(true);
        const hora = new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        setFechaEscaneo(hora);
      }
    }, 1200);
  };

  const handleResetScanner = () => {
    setEscaneado(false);
    setFechaEscaneo(null);
  };

  return (
    <div className="rounded-2xl border border-line bg-background overflow-hidden">
      {/* Header del Evento */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-background px-5 py-4 border-b border-line flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 border border-accent/30 text-accent">
            <TicketQrIcon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Entradas & QR Validado</p>
            <h3 className="text-foreground font-bold text-base">Sunset Live Fest 2026</h3>
          </div>
        </div>

        {/* Switcher de Vistas del Demo */}
        <div className="flex rounded-xl border border-line bg-surface/90 p-1 text-xs">
          <button
            onClick={() => setVista("ticket")}
            className={`rounded-lg px-2.5 py-1 font-semibold transition-all ${
              vista === "ticket" ? "bg-accent text-accent-ink shadow-xs" : "text-muted hover:text-foreground"
            }`}
          >
            Entrada Digital
          </button>
          <button
            onClick={() => setVista("scanner")}
            className={`rounded-lg px-2.5 py-1 font-semibold transition-all ${
              vista === "scanner" ? "bg-accent text-accent-ink shadow-xs" : "text-muted hover:text-foreground"
            }`}
          >
            Escáner Puerta
          </button>
          <button
            onClick={() => setVista("comprar")}
            className={`rounded-lg px-2.5 py-1 font-semibold transition-all ${
              vista === "comprar" ? "bg-accent text-accent-ink shadow-xs" : "text-muted hover:text-foreground"
            }`}
          >
            Comprar
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {/* ── VISTA 1: ENTRADA DIGITAL CON QR ── */}
        {vista === "ticket" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* Boleto con diseño perforado y doppelrand */}
            <div className="relative mx-auto max-w-sm rounded-3xl border border-line bg-gradient-to-b from-surface via-surface/95 to-surface/80 p-5 shadow-2xl overflow-hidden card-bezel">
              {/* Muescas laterales de perforación de ticket */}
              <div className="absolute top-1/2 -left-3.5 h-7 w-7 -translate-y-1/2 rounded-full border border-line bg-background" />
              <div className="absolute top-1/2 -right-3.5 h-7 w-7 -translate-y-1/2 rounded-full border border-line bg-background" />

              {/* Encabezado del ticket */}
              <div className="flex items-center justify-between border-b border-line/80 pb-3.5">
                <div>
                  <span className="rounded-full bg-accent/15 border border-accent/30 px-2.5 py-0.5 text-[10px] font-bold text-accent">
                    {tierActual.name}
                  </span>
                  <h4 className="mt-1 text-base font-bold text-foreground">Sunset Live Fest</h4>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono text-muted">FECHA</p>
                  <p className="text-xs font-bold text-foreground">18 OCT · 20:00</p>
                </div>
              </div>

              {/* QR Code central interactivo */}
              <div className="my-4 flex flex-col items-center justify-center rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-4">
                {qrDataUrl ? (
                  <img
                    src={qrDataUrl}
                    alt="Código QR de la Entrada"
                    className="h-32 w-32 rounded-xl shadow-md transition-transform duration-200 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-accent text-accent-ink font-mono text-xs font-bold">
                    [QR CODE]
                  </div>
                )}

                <p className="mt-2.5 font-mono text-[11px] font-bold tracking-wider text-accent">
                  {ticketId}
                </p>
                <p className="text-[10px] text-muted">Muestra este código en la puerta de acceso</p>
              </div>

              {/* Detalles del Asistente */}
              <div className="grid grid-cols-2 gap-2 border-t border-line/80 pt-3 text-xs">
                <div>
                  <p className="text-[10px] text-muted uppercase">Titular</p>
                  <p className="font-bold text-foreground truncate">{nombre || "Carlos Méndez"}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted uppercase">Pases / Cantidad</p>
                  <p className="font-bold text-foreground">{cantidad} Entrada{cantidad > 1 ? "s" : ""}</p>
                </div>
                <div className="col-span-2 mt-1">
                  <p className="text-[10px] text-muted uppercase">Beneficios incluidos</p>
                  <p className="text-[11px] text-accent font-medium">{tierActual.perks}</p>
                </div>
              </div>

              {/* Barra de estado */}
              <div className="mt-4 flex items-center justify-between rounded-xl bg-background/80 px-3 py-2 border border-line">
                <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  {escaneado ? "UTILIZADO EN PUERTA" : "ENTRADA ACTIVA"}
                </span>
                <span className="font-mono text-[10px] text-muted">SEC: A-14</span>
              </div>
            </div>

            {/* Acciones directas */}
            <div className="flex gap-2 max-w-sm mx-auto">
              <button
                onClick={() => setVista("scanner")}
                className="flex-1 rounded-xl bg-accent py-2.5 text-xs font-bold text-accent-ink hover:bg-accent-strong transition-all shadow-md active:scale-95"
              >
                🔍 Probar Escáner en Puerta
              </button>
              <button
                onClick={() => setVista("comprar")}
                className="rounded-xl border border-line bg-surface px-4 py-2.5 text-xs font-semibold text-muted hover:text-foreground hover:border-accent/40 transition-all active:scale-95"
              >
                Cambiar Pase
              </button>
            </div>
          </div>
        )}

        {/* ── VISTA 2: SIMULADOR DE ESCÁNER EN PUERTA (STAFF VALIDATOR) ── */}
        {vista === "scanner" && (
          <div className="space-y-4 animate-in fade-in duration-200 max-w-sm mx-auto">
            <div className="relative rounded-3xl border border-line bg-surface/90 p-5 shadow-2xl overflow-hidden card-bezel text-center">
              {/* Visor de Cámara Simulado */}
              <div className="relative mx-auto h-48 w-48 rounded-2xl border-2 border-accent/60 bg-black/60 overflow-hidden flex flex-col items-center justify-center p-3">
                {/* Esquinas de enfoque */}
                <div className="absolute top-2 left-2 h-4 w-4 border-t-2 border-l-2 border-accent" />
                <div className="absolute top-2 right-2 h-4 w-4 border-t-2 border-r-2 border-accent" />
                <div className="absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-accent" />
                <div className="absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-accent" />

                {/* Láser de escaneo animado */}
                {escanerAnimando && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#34d399] animate-[fade-up_1.2s_ease-in-out_infinite]" />
                )}

                {/* Miniatura del QR en foco */}
                {qrDataUrl && (
                  <img
                    src={qrDataUrl}
                    alt="QR escaneado"
                    className={`h-24 w-24 rounded-lg opacity-80 transition-transform ${
                      escanerAnimando ? "scale-105" : "scale-95"
                    }`}
                  />
                )}

                <p className="mt-2 font-mono text-[10px] text-accent/80">
                  {escanerAnimando ? "Escaneando código..." : "Alinea el QR en el visor"}
                </p>
              </div>

              {/* Resultado de Validación */}
              <div className="mt-4">
                {escanerAnimando ? (
                  <div className="rounded-2xl border border-line bg-background/80 p-3 text-xs text-muted">
                    Verificando firma criptográfica en base de datos...
                  </div>
                ) : escaneado ? (
                  fechaEscaneo ? (
                    <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-3.5 space-y-1 text-left">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-emerald-400 text-xs flex items-center gap-1.5">
                          ✓ ACCESO AUTORIZADO
                        </span>
                        <span className="font-mono text-[10px] text-emerald-300">{fechaEscaneo}</span>
                      </div>
                      <p className="text-xs font-semibold text-foreground">
                        {nombre || "Carlos Méndez"} · <span className="text-accent">{tierActual.name}</span>
                      </p>
                      <p className="text-[10px] text-muted">Pase válido · 1 de 1 cupos utilizados</p>
                    </div>
                  ) : null
                ) : (
                  <div className="rounded-2xl border border-line bg-background/50 p-3 text-xs text-muted">
                    Listo para escanear. Presiona el botón inferior para simular la validación en puerta.
                  </div>
                )}
              </div>

              {/* Botón de Escanear */}
              <div className="mt-4 flex gap-2">
                <button
                  disabled={escanerAnimando}
                  onClick={handleSimularEscaneo}
                  className="flex-1 rounded-xl bg-accent py-3 text-xs font-bold text-accent-ink hover:bg-accent-strong transition-all shadow-md active:scale-95 disabled:opacity-50"
                >
                  {escanerAnimando
                    ? "Validando..."
                    : escaneado
                    ? "⚠️ Re-escanear (Prueba Anti-Fraude)"
                    : "⚡ Escanear y Validar QR"}
                </button>

                {escaneado && (
                  <button
                    onClick={handleResetScanner}
                    className="rounded-xl border border-line bg-surface px-3 py-3 text-xs font-semibold text-muted hover:text-foreground active:scale-95"
                    title="Reiniciar validador"
                  >
                    ↺
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── VISTA 3: COMPRAR / CONFIGURAR ENTRADA ── */}
        {vista === "comprar" && (
          <div className="space-y-4 animate-in fade-in duration-200 max-w-md mx-auto">
            {/* Selección de Categoría / Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                1. Tipo de Entrada
              </label>
              <div className="grid grid-cols-3 gap-2">
                {tiers.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTierSel(t.id)}
                    className={`rounded-xl border p-2.5 text-left transition-all ${
                      tierSel === t.id
                        ? "border-accent bg-accent/10 font-bold text-foreground ring-1 ring-accent/30"
                        : "border-line bg-surface text-muted hover:border-accent/40 hover:text-foreground"
                    }`}
                  >
                    <p className="text-xs font-bold truncate">{t.name}</p>
                    <p className="text-xs font-extrabold text-accent">${t.price} USD</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Nombre y Cantidad */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-1.5">
                  Nombre Asistente
                </label>
                <input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre completo"
                  className="w-full rounded-xl border border-line bg-surface px-3 py-2 text-xs text-foreground focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-1.5">
                  Cantidad
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                    className="h-8 w-8 rounded-lg border border-line text-sm font-bold hover:border-accent/60"
                  >
                    −
                  </button>
                  <span className="text-sm font-bold w-6 text-center">{cantidad}</span>
                  <button
                    onClick={() => setCantidad(Math.min(6, cantidad + 1))}
                    className="h-8 w-8 rounded-lg border border-line text-sm font-bold hover:border-accent/60"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => setVista("ticket")}
              className="w-full rounded-xl bg-accent py-3 text-xs font-bold text-accent-ink hover:bg-accent-strong transition-all shadow-md active:scale-95"
            >
              Generar Entrada con QR (${tierActual.price * cantidad} USD) →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
