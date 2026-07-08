/**
 * Símbolo de byte/bridge: puente/corchete abierto hacia abajo,
 * trazo grueso redondeado, en verde de marca.
 *
 * ⚠️ Placeholder SVG fiel a los PNG de Instagram. Cuando subas los
 * PNG definitivos a /public, puedes reemplazar este componente por
 * un <Image>, o dejar el SVG (escala mejor y pesa menos).
 */
export function Logo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 448 232"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M46 208 V118 Q46 46 118 46 H330 Q402 46 402 118 V208"
        stroke="currentColor"
        strokeWidth="46"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Wordmark de la marca: "byte/bridge" con la barra en verde.
 * Úsalo siempre que se escriba el nombre de la marca.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-medium tracking-tight ${className}`}>
      byte<span className="text-accent">/</span>bridge
    </span>
  );
}
