# byte/bridge — sitio web

Sitio de portafolio y ventas. Next.js + Tailwind CSS + Supabase, listo para Vercel.

## Correr localmente

```bash
npm install
npm run dev     # http://localhost:3000
```

Para que el formulario de contacto funcione, copia `.env.example` como `.env.local` y rellena las credenciales de Supabase.

## Dónde editar el contenido

| Qué                            | Archivo                |
| ------------------------------ | ---------------------- |
| Número de WhatsApp y mensajes  | `lib/config.ts`        |
| Casos / proyectos              | `data/proyectos.ts`    |
| Paquetes y precios             | `data/servicios.ts`    |
| Sobre mí (bio, foto, stack)    | `data/sobre-mi.ts`     |
| Copy del Hero                  | `components/sections/Hero.tsx` |
| Señales de "Por qué a medida"  | `components/sections/WhyCustom.tsx` |

Imágenes: capturas de proyectos en `public/proyectos/`, tu foto en `public/sobre-mi.jpg`.

## Supabase

- SQL de la tabla `leads`: `supabase/schema.sql` (RLS: solo INSERT anónimo).
- Los leads se leen en el Dashboard → Table Editor → `leads`.
- `/api/keep-alive` + cron de Vercel (`vercel.json`) hacen un ping diario para que el plan gratis no pause el proyecto.

## Deploy en Vercel

1. Sube el repo a GitHub e impórtalo en Vercel.
2. Configura las variables de entorno (Production):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Deploy. El cron de keep-alive se registra automáticamente.
4. Con dominio propio: actualiza `SITE_URL` en `lib/config.ts`.
