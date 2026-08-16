/**
 * ============================================================
 *  MONEDAS LATAM — Datos de países, monedas y banderas
 * ============================================================
 */

export type PaisMoneda = {
  codigo: string;       // ISO 3166-1 alpha-2
  nombre: string;
  bandera: string;      // emoji de bandera
  moneda: string;       // ISO 4217 currency code
  simbolo: string;      // símbolo de la moneda
  nombreMoneda: string; // nombre largo de la moneda
  decimales: number;    // decimales a mostrar
};

export const PAISES_LATAM: PaisMoneda[] = [
  { codigo: "MX", nombre: "México",              bandera: "🇲🇽", moneda: "MXN", simbolo: "$",   nombreMoneda: "Pesos MXN",        decimales: 0 },
  { codigo: "CO", nombre: "Colombia",            bandera: "🇨🇴", moneda: "COP", simbolo: "$",   nombreMoneda: "Pesos COP",        decimales: 0 },
  { codigo: "AR", nombre: "Argentina",           bandera: "🇦🇷", moneda: "ARS", simbolo: "$",   nombreMoneda: "Pesos ARS",        decimales: 0 },
  { codigo: "CL", nombre: "Chile",               bandera: "🇨🇱", moneda: "CLP", simbolo: "$",   nombreMoneda: "Pesos CLP",        decimales: 0 },
  { codigo: "PE", nombre: "Perú",                bandera: "🇵🇪", moneda: "PEN", simbolo: "S/",  nombreMoneda: "Soles PEN",        decimales: 0 },
  { codigo: "EC", nombre: "Ecuador",             bandera: "🇪🇨", moneda: "USD", simbolo: "$",   nombreMoneda: "Dólares USD",      decimales: 0 },
  { codigo: "BO", nombre: "Bolivia",             bandera: "🇧🇴", moneda: "BOB", simbolo: "Bs.", nombreMoneda: "Bolivianos BOB",   decimales: 0 },
  { codigo: "UY", nombre: "Uruguay",             bandera: "🇺🇾", moneda: "UYU", simbolo: "$",   nombreMoneda: "Pesos UYU",        decimales: 0 },
  { codigo: "PY", nombre: "Paraguay",            bandera: "🇵🇾", moneda: "PYG", simbolo: "₲",   nombreMoneda: "Guaraníes PYG",    decimales: 0 },
  { codigo: "BR", nombre: "Brasil",              bandera: "🇧🇷", moneda: "BRL", simbolo: "R$",  nombreMoneda: "Reales BRL",       decimales: 0 },
  { codigo: "DO", nombre: "Rep. Dominicana",     bandera: "🇩🇴", moneda: "DOP", simbolo: "RD$", nombreMoneda: "Pesos DOP",        decimales: 0 },
  { codigo: "GT", nombre: "Guatemala",           bandera: "🇬🇹", moneda: "GTQ", simbolo: "Q",   nombreMoneda: "Quetzales GTQ",    decimales: 0 },
  { codigo: "PA", nombre: "Panamá",              bandera: "🇵🇦", moneda: "USD", simbolo: "$",   nombreMoneda: "Dólares USD",      decimales: 0 },
  { codigo: "CR", nombre: "Costa Rica",          bandera: "🇨🇷", moneda: "CRC", simbolo: "₡",   nombreMoneda: "Colones CRC",      decimales: 0 },
  { codigo: "HN", nombre: "Honduras",            bandera: "🇭🇳", moneda: "HNL", simbolo: "L",   nombreMoneda: "Lempiras HNL",     decimales: 0 },
  { codigo: "SV", nombre: "El Salvador",         bandera: "🇸🇻", moneda: "USD", simbolo: "$",   nombreMoneda: "Dólares USD",      decimales: 0 },
  { codigo: "NI", nombre: "Nicaragua",           bandera: "🇳🇮", moneda: "NIO", simbolo: "C$",  nombreMoneda: "Córdobas NIO",     decimales: 0 },
  { codigo: "VE", nombre: "Venezuela",           bandera: "🇻🇪", moneda: "USD", simbolo: "$",   nombreMoneda: "Dólares USD",      decimales: 0 },
  { codigo: "US", nombre: "Estados Unidos",      bandera: "🇺🇸", moneda: "USD", simbolo: "$",   nombreMoneda: "Dólares USD",      decimales: 0 },
  { codigo: "ES", nombre: "España",              bandera: "🇪🇸", moneda: "EUR", simbolo: "€",   nombreMoneda: "Euros EUR",        decimales: 0 },
];

export function getPaisPorCodigo(codigo: string): PaisMoneda {
  return PAISES_LATAM.find((p) => p.codigo === codigo) ?? PAISES_LATAM.find((p) => p.codigo === "US")!;
}

/** Formatea un monto en la moneda local */
export function formatearPrecio(usd: number, tasa: number, pais: PaisMoneda): string {
  if (pais.moneda === "USD") return `$${usd.toLocaleString("en-US")}`;
  const local = Math.round(usd * tasa);
  if (local >= 1_000_000) {
    return `${pais.simbolo}${(local / 1_000_000).toFixed(1)}M`;
  }
  if (local >= 1_000) {
    return `${pais.simbolo}${local.toLocaleString("es-419")}`;
  }
  return `${pais.simbolo}${local}`;
}
