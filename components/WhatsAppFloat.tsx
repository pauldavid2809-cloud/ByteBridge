"use client";

import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";

export function WhatsAppFloat() {
  const { lang } = useLanguage();
  const t = dictionary.whatsappFloat;

  return (
    <div className="fixed right-4 bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] z-40 sm:right-6 sm:bottom-6">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.ariaLabel[lang]}
        className="group relative float-animate flex h-13 w-13 items-center justify-center rounded-full bg-accent text-accent-ink shadow-2xl shadow-accent/25 transition-all duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] active:scale-90 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-110 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-accent-strong ring-4 ring-background"
      >
        {/* Indicador de disponibilidad en línea con pulso */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5 -mt-0.5 -mr-0.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-400" />
        </span>

        <WhatsAppIcon className="h-6 w-6 transition-transform duration-200 group-hover:rotate-6" />
      </a>
    </div>
  );
}
