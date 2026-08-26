import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { businessDemos, getDemoBySlug } from "@/data/demosData";
import { DemoPageClient } from "@/components/demos/DemoPageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return businessDemos.map((b) => ({ slug: b.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);
  if (!demo) return {};

  return {
    title: `${demo.name} — WebApp & Reservaciones`,
    description: `${demo.tagline}. Reserva con pase QR, menú digital interactivo y pedidos automatizados.`,
    openGraph: {
      title: `${demo.name} | WebApp Oficial`,
      description: `${demo.tagline}. Menú digital y reservaciones con código QR.`,
      images: [demo.logo],
    },
  };
}

export default async function DemoSlugPage({ params }: Props) {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);

  if (!demo) {
    notFound();
  }

  return <DemoPageClient demo={demo} />;
}
