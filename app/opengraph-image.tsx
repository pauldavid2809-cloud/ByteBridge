import { ImageResponse } from "next/og";

/**
 * Imagen Open Graph de marca (1200x630) generada en el build.
 * Aparece al compartir el link por WhatsApp, Instagram, etc.
 * Se hereda en todas las rutas del sitio.
 */

export const alt = "byte/bridge — webs y sistemas a medida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Descarga el subset de Space Grotesk necesario para el texto (solo en build) */
async function loadGoogleFont(text: string): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (resource) {
    const res = await fetch(resource[1]);
    if (res.ok) return res.arrayBuffer();
  }
  throw new Error("No se pudo descargar la fuente para la imagen OG");
}

export default async function OgImage() {
  const texto = "byte/bridge · Webs y sistemas a medida";
  const font = await loadGoogleFont(texto);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 48,
          backgroundColor: "#0A0E0D",
          fontFamily: "Space Grotesk",
        }}
      >
        {/* Símbolo: puente/corchete de la marca */}
        <svg width="200" height="104" viewBox="0 0 448 232" fill="none">
          <path
            d="M46 208 V118 Q46 46 118 46 H330 Q402 46 402 118 V208"
            stroke="#2EBD85"
            strokeWidth="46"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        <div style={{ display: "flex", fontSize: 88, letterSpacing: "-0.02em" }}>
          <span style={{ color: "#F5F5F5" }}>byte</span>
          <span style={{ color: "#2EBD85" }}>/</span>
          <span style={{ color: "#F5F5F5" }}>bridge</span>
        </div>

        <div style={{ display: "flex", fontSize: 34, color: "#9CA3AF" }}>
          Webs y sistemas a medida
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Space Grotesk", data: font, style: "normal" }] }
  );
}
