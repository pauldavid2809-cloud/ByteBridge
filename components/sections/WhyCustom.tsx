import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

/**
 * Sección "Por qué a medida": señales que el dueño de negocio
 * reconoce en su web actual, en tono de diagnóstico.
 * ✏️ EDITA AQUÍ los textos si quieres ajustar el mensaje.
 */
const señales = [
  {
    señal: "Tu página tarda en abrir",
    diagnostico:
      "Cada segundo de espera son visitantes que cierran la pestaña antes de ver lo que ofreces. Las plantillas cargan código que tu negocio no usa.",
    aMedida: "Una web a medida carga solo lo necesario: menos de 1 segundo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
        <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 13l3.5-3.5M12 2v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    señal: "Se parece a la de tu competencia",
    diagnostico:
      "Cuando el diseño sale de un catálogo, otros negocios de tu rubro tienen el mismo. El cliente no distingue quién es quién.",
    aMedida: "El diseño propio hace que tu marca se reconozca a la primera.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
        <rect x="3" y="3" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 21h10a2 2 0 0 0 2-2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    señal: "No apareces en Google",
    diagnostico:
      "Si tus clientes te buscan y encuentran a otro, la web no está haciendo su trabajo. La estructura de una plantilla no ayuda a posicionar.",
    aMedida: "Código limpio y rápido que Google entiende y premia.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
        <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    señal: "No puede crecer contigo",
    diagnostico:
      "Llega el momento de recibir pedidos, reservas o pagos en línea, y la plantilla se queda corta o te cobra por cada función.",
    aMedida: "El código es tuyo y se extiende: hoy una web, mañana un sistema.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
        <path d="M4 20V10m6 10V4m6 16v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M20 20V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function WhyCustom() {
  return (
    <Section
      id="por-que-a-medida"
      eyebrow="Por qué a medida"
      title="¿Reconoces alguna de estas señales?"
      subtitle="No es culpa tuya ni de tu negocio: es el límite natural de las webs genéricas."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {señales.map((item) => (
          <Card key={item.señal} className="p-7">
            <div className="text-accent">{item.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{item.señal}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.diagnostico}</p>
            <p className="mt-4 border-t border-line pt-4 text-sm text-foreground/90">
              <span className="font-medium text-accent">A medida: </span>
              {item.aMedida}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
