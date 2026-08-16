import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/config";
import "./globals.css";

/*
 * Tipografía de marca:
 * - Montserrat: sans geométrica moderna, elegante y de alto impacto para títulos y wordmark.
 * - Plus Jakarta Sans: perfecta armonía con Montserrat para el cuerpo de texto en pantallas móviles.
 * next/font las sirve auto-hospedadas (self-hosted): cero requests externos, mejor Lighthouse.
 */
const displayFont = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/**
 * Metadata global del sitio (SEO + Open Graph + Twitter).
 * Las páginas de casos definen su propio title/description;
 * el template les agrega "— byte/bridge" automáticamente.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Página web a medida para tu negocio — byte/bridge",
    template: "%s — byte/bridge",
  },
  description:
    "Desarrollo web para Latinoamérica: páginas, portales y sistemas a medida con Next.js y Supabase. Diseño propio, carga en menos de 1 segundo, sin plantillas. Precios en USD, trabajo 100% remoto.",
  openGraph: {
    type: "website",
    locale: "es_419",
    siteName: "byte/bridge",
    title: "Página web a medida para tu negocio — byte/bridge",
    description:
      "Webs y sistemas a medida que convierten visitantes en clientes. Diseño propio, sin plantillas, carga en menos de 1 segundo. Servicio para toda Latinoamérica.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { LanguageProvider } from "@/context/LanguageContext";
import { CurrencyProvider } from "@/context/CurrencyContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <LanguageProvider>
          <CurrencyProvider>{children}</CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

