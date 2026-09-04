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

  const baseUrl = "https://byte-bridge-tau.vercel.app";
  const ogImage = demo.coverImage?.startsWith("http")
    ? demo.coverImage
    : `${baseUrl}${demo.coverImage || demo.logo}`;

  return {
    title: `${demo.name} — WebApp & Reservaciones`,
    description: `${demo.tagline}. Reserva con pase QR, menú digital interactivo y pedidos automatizados.`,
    openGraph: {
      title: `${demo.name} | WebApp Oficial & Reservas`,
      description: `${demo.tagline}. Menú digital y reservaciones con código QR sin comisiones.`,
      url: `${baseUrl}/demos/${demo.slug}`,
      siteName: "ByteBridge",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: demo.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${demo.name} | WebApp Oficial`,
      description: `${demo.tagline}. Reserva en 1 clic.`,
      images: [ogImage],
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
