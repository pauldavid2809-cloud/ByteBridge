import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { WhyCustom } from "@/components/sections/WhyCustom";
import { SITE_URL, WHATSAPP_NUMBER } from "@/lib/config";

/**
 * Datos estructurados (JSON-LD) para Google: negocio de servicios
 * profesionales de desarrollo web con base en Venezuela.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "byte/bridge",
  url: SITE_URL,
  description:
    "Desarrollo de páginas web, portales y sistemas a medida con Next.js y Supabase para negocios en Venezuela y Latinoamérica.",
  telephone: `+${WHATSAPP_NUMBER}`,
  areaServed: ["Venezuela", "Latinoamérica"],
  priceRange: "$150 - $1000+",
  knowsAbout: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
};

/**
 * Página principal (one-page):
 * Hero → Proyectos → Servicios → Por qué a medida → Sobre mí → Contacto
 */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <WhyCustom />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
