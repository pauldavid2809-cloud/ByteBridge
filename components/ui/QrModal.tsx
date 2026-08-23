"use client";

import { useEffect, useState } from "react";
import { QRCodeDisplay } from "./QRCodeDisplay";

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  qrValue: string;
  tableOrContextLabel?: string;
}

export function QrModal({
  isOpen,
  onClose,
  title,
  subtitle,
  qrValue,
  tableOrContextLabel,
}: QrModalProps) {
  const [copied, setCopied] = useState(false);

  // Cerrar con Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyLink = () => {
    navigator.clipboard.writeText(qrValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop con desenfoque de cristal */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Card con física de resorte y doble borde */}
      <div className="relative z-10 w-full max-w-sm rounded-3xl border border-line bg-surface p-6 shadow-2xl popover-animate">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-background text-muted hover:border-accent/40 hover:text-foreground transition-colors"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {/* Encabezado */}
        <div className="text-center mb-6 pr-6">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/15 border border-accent/30 text-accent font-bold">
            📲
          </div>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          {subtitle && <p className="text-xs text-muted mt-1">{subtitle}</p>}
        </div>

        {/* Código QR Interactivo */}
        <div className="flex flex-col items-center justify-center py-2">
          <QRCodeDisplay value={qrValue} size={180} />

          {tableOrContextLabel && (
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              {tableOrContextLabel}
            </div>
          )}
        </div>

        {/* Indicaciones y Acciones */}
        <div className="mt-6 space-y-3 border-t border-line/60 pt-4 text-center">
          <p className="text-[11px] text-muted leading-relaxed">
            Apunta la cámara de tu teléfono al código para abrir y probar esta experiencia en tu dispositivo.
          </p>

          <div className="flex gap-2">
            <button
              onClick={copyLink}
              className="flex-1 rounded-xl border border-line bg-background py-2 text-xs font-semibold text-foreground hover:border-accent/40 transition-colors active:scale-95"
            >
              {copied ? "✓ Copiado" : "Copiar Enlace"}
            </button>
            <a
              href={qrValue}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl bg-accent py-2 text-xs font-bold text-accent-ink hover:bg-accent-strong transition-colors active:scale-95 text-center flex items-center justify-center"
            >
              Abrir Demo ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
