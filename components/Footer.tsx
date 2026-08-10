"use client";

import { Wordmark } from "@/components/Logo";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";

export function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear().toString();
  const text = dictionary.footer.copyright[lang].replace("{year}", year);

  return (
    <footer className="border-t border-line px-5 pt-10 pb-24 sm:px-8 sm:pb-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <Wordmark className="text-base text-foreground" />
        <p>{text}</p>
      </div>
    </footer>
  );
}
