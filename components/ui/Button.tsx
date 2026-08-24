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
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold " +
  "transition-[background-color,border-color,color,transform,box-shadow] duration-150 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] select-none " +
  "active:scale-[0.97] " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  /* CTA principal: verde de marca con texto oscuro, resplandor sutil y hover responsivo */
  primary:
    "bg-accent text-accent-ink shadow-md shadow-accent/20 hover:bg-accent-strong hover:shadow-lg hover:shadow-accent/25",
  /* CTA secundario: superficie con borde sutil y reflejo interior */
  secondary:
    "border border-line bg-surface/60 text-foreground hover:border-accent/60 hover:text-accent-strong hover:bg-surface active:bg-accent/5",
  /* Enlaces con forma de botón, sin borde */
  ghost: "text-muted hover:text-foreground active:text-accent",
};

const sizes = {
  md: "h-11 px-6 text-sm",
  lg: "h-12 sm:h-13 px-7 sm:px-8 text-sm sm:text-base",
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
