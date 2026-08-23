import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Soluciones } from "@/components/sections/Soluciones";
import { WhyCustom } from "@/components/sections/WhyCustom";
import { SITE_URL, WHATSAPP_NUMBER } from "@/lib/config";

/**
 * Datos estructurados (JSON-LD) para Google: negocio de servicios
 * profesionales de desarrollo web para clientes en Latinoamérica.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "byte/bridge",
  url: SITE_URL,
  description:
    "Desarrollo de páginas web, portales y sistemas a medida con Next.js y Supabase para negocios en Latinoamérica. Trabajo 100% remoto.",
  telephone: `+${WHATSAPP_NUMBER}`,
  areaServed: ["Latinoamérica", "México", "Colombia", "Argentina", "Chile", "Perú", "Ecuador", "Bolivia", "Uruguay", "Paraguay", "Costa Rica", "Panamá", "Guatemala", "Honduras", "El Salvador", "Nicaragua", "República Dominicana"],
  priceRange: "$100 - $1000+",
  knowsAbout: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
};

import { Calculator } from "@/components/sections/Calculator";
import { Faq } from "@/components/sections/Faq";
import { Testimonials } from "@/components/sections/Testimonials";
import { MobileNav } from "@/components/MobileNav";

/**
 * Página principal (one-page):
 * Hero → Proyectos → Soluciones → Servicios → Calculadora → Por qué a medida → Testimonios → Sobre mí → FAQ → Contacto
 */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Projects />
        <Soluciones />
        <Services />
        <Calculator />
        <WhyCustom />
        <Testimonials />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileNav />
    </>
  );
}


