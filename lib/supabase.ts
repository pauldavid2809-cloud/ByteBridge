import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Cliente de Supabase para el navegador.
 * Usa la clave pública (anon): la tabla `leads` solo permite INSERT
 * vía Row Level Security, así que nadie puede leer los datos con ella.
 *
 * Devuelve null si faltan las variables de entorno — el formulario
 * lo detecta y ofrece WhatsApp como alternativa en vez de romperse.
 */
export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return createClient(url, anonKey);
}
