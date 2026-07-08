import { NextResponse } from "next/server";

/**
 * Keep-alive de Supabase.
 *
 * El plan gratis de Supabase pausa los proyectos tras ~7 días sin
 * actividad en la API. Un cron de Vercel (ver vercel.json) llama a
 * esta ruta una vez al día: la consulta cuenta como actividad y el
 * proyecto nunca se pausa.
 *
 * La consulta es inofensiva: por Row Level Security la clave pública
 * no puede leer leads, así que siempre devuelve una lista vacía —
 * pero el "ping" a la base de datos es lo que mantiene el proyecto activo.
 */
export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return NextResponse.json(
      { ok: false, error: "Faltan variables de entorno de Supabase" },
      { status: 500 }
    );
  }

  const res = await fetch(`${url}/rest/v1/leads?select=id&limit=1`, {
    headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` },
    // Sin caché: el objetivo es que la petición llegue siempre a Supabase
    cache: "no-store",
  });

  return NextResponse.json({ ok: res.ok, status: res.status });
}
