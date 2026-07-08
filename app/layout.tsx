import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SITE_URL } from "@/lib/config";
import "./globals.css";

/*
 * Tipografía de marca:
 * - Space Grotesk: sans geométrica con personalidad, para títulos y wordmark.
 * - Inter: cuerpo de texto, máxima legibilidad en móvil.
 * next/font las sirve auto-hospedadas (self-hosted): cero requests externos, mejor Lighthouse.
 */
const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Metadata global del sitio (SEO + Open Graph + Twitter).
 * Las páginas de casos definen su propio title/description;
 * el template les agrega "— byte/bridge" automáticamente.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Página web a medida en Venezuela — byte/bridge",
    template: "%s — byte/bridge",
  },
  description:
    "Desarrollo web en Venezuela: páginas, portales y sistemas a medida con Next.js y Supabase. Diseño propio, carga en menos de 1 segundo, sin plantillas. Precios en USD para Venezuela y Latinoamérica.",
  openGraph: {
    type: "website",
    locale: "es_VE",
    siteName: "byte/bridge",
    title: "Página web a medida en Venezuela — byte/bridge",
    description:
      "Webs y sistemas a medida que convierten visitantes en clientes. Diseño propio, sin plantillas, carga en menos de 1 segundo.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
