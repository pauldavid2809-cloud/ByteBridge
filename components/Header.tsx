import Link from "next/link";
import { Logo, Wordmark } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/config";

/* Anclas absolutas (/#...) para que funcionen también desde /proyectos/[slug] */
const navLinks = [
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#contacto", label: "Contacto" },
];

/**
 * Barra de navegación fija: logo + anclas + CTA de WhatsApp.
 * En móvil se ocultan las anclas (la página es un scroll único)
 * y queda logo + botón de contacto.
 */
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/#inicio" className="flex items-center gap-2.5" aria-label="byte/bridge — inicio">
          <Logo className="h-4 w-auto text-accent" />
          <Wordmark className="text-lg text-foreground" />
        </Link>

        <nav aria-label="Secciones del sitio" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-accent-ink transition-colors duration-200 hover:bg-accent-strong"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          Escríbeme
        </a>
      </div>
    </header>
  );
}
