import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  /** Si se pasa href, el botón se renderiza como enlace (interno o externo) */
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-colors duration-200 select-none " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  /* CTA principal: verde de marca con texto oscuro (contraste AA) */
  primary: "bg-accent text-accent-ink hover:bg-accent-strong",
  /* CTA secundario: borde sutil que se enciende en hover */
  secondary:
    "border border-line text-foreground hover:border-accent/60 hover:text-accent-strong",
  /* Enlaces con forma de botón, sin borde */
  ghost: "text-muted hover:text-foreground",
};

const sizes = {
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
