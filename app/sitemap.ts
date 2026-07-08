import type { MetadataRoute } from "next";
import { proyectos } from "@/data/proyectos";
import { SITE_URL } from "@/lib/config";

/** sitemap.xml generado automáticamente (home + un URL por caso) */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...proyectos.map((proyecto) => ({
      url: `${SITE_URL}/proyectos/${proyecto.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
