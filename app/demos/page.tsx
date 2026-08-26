import type { Metadata } from "next";
import { businessDemos } from "@/data/demosData";
import { DemosHubClient } from "@/components/demos/DemosHubClient";

export const metadata: Metadata = {
  title: "Catálogo de Demos Comerciales — ByteBridge",
  description:
    "10 WebApps y sistemas de reservaciones interactivos desarrollados a medida para negocios gastronómicos, hoteleros y de entretenimiento en Maracaibo.",
};

export default function DemosHubPage() {
  return <DemosHubClient demos={businessDemos} />;
}
