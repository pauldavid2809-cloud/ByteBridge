"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

interface QRCodeDisplayProps {
  value: string;
  size?: number;
  className?: string;
  label?: string;
}

export function QRCodeDisplay({
  value,
  size = 200,
  className = "",
  label,
}: QRCodeDisplayProps) {
  const [svgString, setSvgString] = useState<string>("");

  useEffect(() => {
    let isMounted = true;
    QRCode.toString(value, {
      type: "svg",
      margin: 1,
      width: size,
      color: {
        dark: "#052e20", // Verde profundo de marca
        light: "#2ebd85", // Verde esmeralda vibrante
      },
    })
      .then((svg) => {
        if (isMounted) setSvgString(svg);
      })
      .catch((err) => console.error("Error generating QR:", err));

    return () => {
      isMounted = false;
    };
  }, [value, size]);

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Contenedor del código QR con esquinas redondeadas y marco de hardware */}
      <div className="relative overflow-hidden rounded-2xl border border-accent/40 bg-accent/10 p-3 shadow-xl shadow-accent/10">
        {/* Esquinas de escaneo estilo cámara de smartphone */}
        <div className="pointer-events-none absolute top-2 left-2 h-3.5 w-3.5 border-t-2 border-l-2 border-accent" />
        <div className="pointer-events-none absolute top-2 right-2 h-3.5 w-3.5 border-t-2 border-r-2 border-accent" />
        <div className="pointer-events-none absolute bottom-2 left-2 h-3.5 w-3.5 border-b-2 border-l-2 border-accent" />
        <div className="pointer-events-none absolute bottom-2 right-2 h-3.5 w-3.5 border-b-2 border-r-2 border-accent" />

        {svgString ? (
          <div
            className="flex items-center justify-center [&>svg]:rounded-xl [&>svg]:max-w-full"
            dangerouslySetInnerHTML={{ __html: svgString }}
          />
        ) : (
          <div
            style={{ width: size, height: size }}
            className="flex items-center justify-center bg-accent/20 animate-pulse rounded-xl"
          >
            <span className="text-xs font-mono text-accent">Generando QR...</span>
          </div>
        )}
      </div>

      {label && (
        <p className="mt-3 text-center text-xs font-medium text-muted">
          {label}
        </p>
      )}
    </div>
  );
}
