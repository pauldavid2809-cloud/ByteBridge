import { Wordmark } from "@/components/Logo";

export function Footer() {
  // pb extra en móvil para que el botón flotante de WhatsApp no tape el texto
  return (
    <footer className="border-t border-line px-5 pt-10 pb-24 sm:px-8 sm:pb-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <Wordmark className="text-base text-foreground" />
        <p>
          © {new Date().getFullYear()} · Hecho a medida, como todo lo que entrego
        </p>
      </div>
    </footer>
  );
}
