"use client";

import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";

export function WhatsAppFloat() {
  const { lang } = useLanguage();
  const t = dictionary.whatsappFloat;

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.ariaLabel[lang]}
      className="float-animate fixed right-4 bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] z-40 flex h-13 w-13 items-center justify-center rounded-full bg-accent text-accent-ink shadow-xl shadow-black/50 transition-[transform,background-color] duration-150 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] active:scale-90 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-110 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-accent-strong sm:right-6 sm:bottom-6 sm:h-12 sm:w-12"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
