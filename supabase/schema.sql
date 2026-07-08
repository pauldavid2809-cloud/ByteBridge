-- ============================================================
-- Tabla de leads del formulario de contacto — byte/bridge
-- Ejecutar en Supabase: Dashboard → SQL Editor → New query
-- ============================================================

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  negocio text,
  tipo_proyecto text,
  mensaje text not null,
  created_at timestamptz not null default now()
);

-- Row Level Security: sin políticas, nadie con la clave pública
-- puede hacer nada sobre la tabla.
alter table public.leads enable row level security;

-- Única política: permitir INSERT anónimo (el formulario del sitio).
-- No hay política de SELECT/UPDATE/DELETE → los leads solo se leen
-- desde el Dashboard de Supabase (o con la service key privada).
create policy "leads_insert_anon"
  on public.leads
  for insert
  to anon
  with check (true);
