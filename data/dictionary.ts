/**
 * ============================================================
 *  DICCIONARIO DE TRADUCCIONES — Bilingüe (Español / Inglés)
 * ============================================================
 */

export const dictionary = {
  header: {
    projects: { es: "Proyectos", en: "Projects" },
    solutions: { es: "Soluciones", en: "Solutions" },
    services: { es: "Servicios y Precios", en: "Services & Pricing" },
    calculator: { es: "Calculadora", en: "Calculator" },
    whyCustom: { es: "Por qué a medida", en: "Why Custom" },
    about: { es: "Sobre mí", en: "About" },
    faq: { es: "FAQ", en: "FAQ" },
    contact: { es: "Contacto", en: "Contact" },
    whatsappCta: { es: "Escríbeme", en: "Chat with me" },
  },
  hero: {
    badge: {
      es: "Esta página carga en menos de 1s · Lighthouse 90+",
      en: "Loads in under 1 second · Lighthouse 90+",
    },
    titleLine1: {
      es: "Webs y sistemas a medida que convierten visitantes en ",
      en: "Custom web apps and sites that convert visitors into ",
    },
    titleHighlight: {
      es: "clientes",
      en: "customers",
    },
    subtitle: {
      es: "Páginas web y sistemas desde cero, sin plantillas lentas ni intermediarios. Carga en menos de 1 segundo, diseño único y código 100% tuyo. Servicio para toda Latinoamérica.",
      en: "Websites and custom systems built from scratch, without slow templates or middlemen. Instant load speed under 1 second, custom design, and 100% code ownership. Serving Latin America.",
    },
    ctaWhatsapp: {
      es: "Cotizar por WhatsApp",
      en: "Get quote on WhatsApp",
    },
    ctaProjects: {
      es: "Ver proyectos",
      en: "View portfolio",
    },
  },
  projects: {
    eyebrow: { es: "Casos reales", en: "Featured Work" },
    title: { es: "Proyectos recientes", en: "Recent Projects" },
    subtitle: {
      es: "Proyectos reales construidos a medida para negocios de Latinoamérica.",
      en: "Real custom projects built for businesses across Latin America.",
    },
    viewDemo: { es: "Ver demo en vivo", en: "View live demo" },
    backToHome: { es: "← Volver a inicio", en: "← Back to home" },
    quiniela: {
      nombre: { es: "Quiniela Mundial 2026", en: "World Cup 2026 Predictor" },
      resultado: {
        es: "104 partidos, puntos y ranking calculados solos: cero planillas, cero disputas",
        en: "104 matches, automatic scoring & live ranking: zero spreadsheets, zero disputes",
      },
      tags: {
        es: ["Sistema a medida", "App web"],
        en: ["Custom System", "Web App"],
      },
      descripcion: {
        es: "App de predicciones construida desde cero para el Mundial 2026: cada participante predice marcadores exactos, el sistema puntúa solo y el ranking se actualiza en vivo durante todo el torneo.",
        en: "World Cup 2026 prediction web app built from scratch: players submit exact score guesses, points calculate automatically, and the leaderboard updates live in real-time.",
      },
      problemaTitle: { es: "El problema", en: "The Challenge" },
      problema: {
        es: "Las quinielas entre amigos y comunidades se manejaban con planillas de Excel y capturas por WhatsApp: resultados cargados a mano, errores de cálculo, disputas por puntos y predicciones enviadas tarde.",
        en: "Community prediction leagues relied on manual Excel sheets and WhatsApp screenshots: manual score keeping, calculation errors, point disputes, and late predictions.",
      },
      solucionTitle: { es: "La solución", en: "The Solution" },
      solucion: {
        es: "Una app web a medida con login propio, predicciones de marcador exacto para los 104 partidos, y una lógica de puntos hecha a la medida. Cada fase se bloquea automáticamente al arrancar, el ranking se recalcula solo, hay trivia para mantener el engagement y un panel de administración completo. Construida con Next.js y Supabase.",
        en: "A tailored web app featuring user authentication, exact score predictions for all 104 matches, and custom scoring rules. Match locks automatically kick in, rankings update live, trivia engages users between rounds, and a complete admin dashboard manages the tournament. Powered by Next.js & Supabase.",
      },
      resultadoTitle: { es: "El resultado", en: "The Result" },
      resultadoDetalle: {
        es: "Los participantes juegan desde el teléfono, cada partido finalizado marca al instante quién acertó y cuántos puntos ganó. Cero disputas: las reglas las aplica el sistema de forma transparente.",
        en: "Players participate right from their phones. Upon match end, points and ranks update instantly with zero disputes: system rules enforce total transparency.",
      },
      metricas: [
        {
          valor: "104",
          etiqueta: {
            es: "partidos con predicción y puntaje automático",
            en: "matches with automated scoring & predictions",
          },
        },
        {
          valor: "0",
          etiqueta: {
            es: "planillas de Excel ni cálculos a mano",
            en: "Excel sheets or manual calculations",
          },
        },
        {
          valor: "En vivo / Live",
          etiqueta: {
            es: "ranking actualizado tras cada partido",
            en: "leaderboard updated after every match",
          },
        },
      ],
    },
  },
  services: {
    eyebrow: { es: "Planes y Precios", en: "Packages & Pricing" },
    title: { es: "Precios claros desde el primer día", en: "Clear pricing from day one" },
    subtitle: {
      es: "Sin cargos ocultos ni sorpresas. Programación limpia enfocada en conseguirte clientes.",
      en: "No hidden fees or surprises. Clean code focused on getting you customers.",
    },
    recommended: { es: "Recomendado", en: "Recommended" },
    includes: { es: "Qué incluye:", en: "What's included:" },
    selectPackage: { es: "Cotizar este plan", en: "Get quote for this plan" },
    optionalMaintenance: { es: "Mantenimiento opcional:", en: "Optional maintenance:" },
  },
  whyCustom: {
    eyebrow: { es: "Por qué a medida", en: "Why Custom" },
    title: { es: "¿Te pasa algo de esto con tu web actual?", en: "Struggling with your current website?" },
    subtitle: {
      es: "Por qué las plantillas lentas de WordPress o Wix hacen que pierdas clientes.",
      en: "Why slow WordPress or Wix templates lose you potential clients.",
    },
    customLabel: { es: "Con código a medida: ", en: "With custom code: " },
    signals: [
      {
        señal: { es: "Tu página tarda en cargar", en: "Your page takes long to load" },
        diagnostico: {
          es: "Si tarda más de 3 segundos, los visitantes cierran la pestaña antes de ver lo que ofreces. Las plantillas traen código pesado innecesario.",
          en: "If it takes over 3 seconds, visitors close the tab before seeing your offer. Templates carry heavy unused code.",
        },
        aMedida: {
          es: "Carga en menos de 1 segundo al incluir solo lo que tu proyecto necesita.",
          en: "Loads in under 1 second by including only what your project needs.",
        },
      },
      {
        señal: { es: "Se ve igual a las de tus competidores", en: "It looks just like competitors" },
        diagnostico: {
          es: "Al usar plantillas genéricas de catálogo, otros negocios terminan usando el mismo diseño. Tu negocio no destaca.",
          en: "When using stock templates, competitors end up looking identical. Your brand doesn't stand out.",
        },
        aMedida: {
          es: "Diseño propio creado para que tu negocio sea reconocido al instante.",
          en: "Custom design built so your business stands out immediately.",
        },
      },
      {
        señal: { es: "No apareces en las búsquedas de Google", en: "Not ranking on Google search" },
        diagnostico: {
          es: "Si te buscan y aparece tu competencia, tu web no funciona. El código pesado de las plantillas perjudica tu SEO.",
          en: "If prospects search and find competitors instead, your site fails. Heavy template code hinders your SEO.",
        },
        aMedida: {
          es: "Código limpio, rápido y estructurado que Google posiciona mejor.",
          en: "Clean, fast, structured code that Google ranks higher.",
        },
      },
      {
        señal: { es: "No puedes agregarle funciones nuevas", en: "Can't add new custom features" },
        diagnostico: {
          es: "Cuando necesitas recibir reservas, catálogo interactivo o pagos, la plantilla se rompe o te exige plugins costosos.",
          en: "When you need bookings, custom catalogs, or payments, templates break or demand expensive plugins.",
        },
        aMedida: {
          es: "El código es tuyo: puedes expandirlo cuando tu negocio lo necesite.",
          en: "You own the code: expand it whenever your business needs it.",
        },
      },
    ],
  },
  about: {
    eyebrow: { es: "Sobre mí", en: "About Me" },
    title: { es: "Sin intermediarios ni agencias costosas", en: "Direct work, zero agencies" },
    subtitle: {
      es: "Hablas directamente con el desarrollador que diseña, programa y entrega tu proyecto.",
      en: "You speak directly with the developer who designs, codes, and delivers your project.",
    },
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    location: { es: "Latinoamérica · Trabajo 100% remoto", en: "Latin America · 100% Remote Work" },
    bio1: {
      es: "Construyo webs y sistemas desde cero, sin plantillas. Al contratarme tratas directamente conmigo: la persona que escribe el código y resuelve lo que necesitas.",
      en: "I build websites and custom systems from scratch, without templates. When you hire me, you deal directly with the developer writing the code and solving your needs.",
    },
    bio2: {
      es: "Esta misma página es mi carta de presentación: prueba lo rápido que carga. Ese mismo estándar aplico a tu proyecto.",
      en: "This website is my proof: test how fast it loads. That's the exact standard I bring to your project.",
    },
  },
  contact: {
    eyebrow: { es: "Contacto", en: "Contact" },
    title: { es: "Cuéntame qué necesitas", en: "Tell me about your project" },
    subtitle: {
      es: "Respondo en menos de 24 horas con una propuesta concreta.",
      en: "I'll get back to you within 24 hours with a clear proposal.",
    },
    directTitle: { es: "¿Prefieres hablar directo?", en: "Prefer direct messaging?" },
    directDesc: {
      es: "Sin formularios: escríbeme por WhatsApp y hablamos de tu proyecto hoy mismo. Trabajo con clientes de toda Latinoamérica.",
      en: "Skip the form: message me on WhatsApp to discuss your project today. I work with clients across Latin America.",
    },
    directBtn: { es: "Escríbeme por WhatsApp", en: "Chat on WhatsApp" },
    receivedTitle: { es: "Recibido ✓", en: "Message Received ✓" },
    receivedDesc: {
      es: "Gracias por escribir. Te respondo en menos de 24 horas.",
      en: "Thank you for reaching out. I will reply within 24 hours.",
    },
    sendAnother: { es: "Enviar otro mensaje", en: "Send another message" },
    labelName: { es: "Nombre", en: "Name" },
    labelBusiness: { es: "Negocio / Empresa", en: "Business / Company" },
    labelProjectType: { es: "¿Qué necesitas?", en: "What service do you need?" },
    labelMessage: { es: "Mensaje", en: "Message" },
    placeholderName: { es: "Tu nombre", en: "Your name" },
    placeholderBusiness: { es: "Nombre de tu negocio", en: "Your business name" },
    placeholderMessage: {
      es: "Cuéntame de tu negocio y qué te gustaría lograr",
      en: "Tell me about your business and your goals",
    },
    requiredError: {
      es: "Tu nombre y el mensaje son obligatorios.",
      en: "Your name and message are required.",
    },
    connectionError: {
      es: "No se pudo enviar el mensaje por problemas de conexión. Escríbeme directo por WhatsApp.",
      en: "Could not send form due to connection error. Please text me on WhatsApp.",
    },
    sending: { es: "Enviando…", en: "Sending…" },
    sendBtn: { es: "Enviar mensaje", en: "Send message" },
    types: [
      { value: "landing", label: { es: "Landing Express (desde $100)", en: "Landing Express (from $100)" } },
      { value: "web completa", label: { es: "Web Completa ($250–$450)", en: "Full Website ($250–$450)" } },
      { value: "sistema a medida", label: { es: "Sistema a Medida ($800+)", en: "Custom Web App ($800+)" } },
      { value: "no sé todavía", label: { es: "No sé todavía", en: "Not sure yet" } },
    ],
  },
  footer: {
    copyright: {
      es: "© {year} · byte/bridge · Desarrollo web para Latinoamérica",
      en: "© {year} · byte/bridge · Web development for Latin America",
    },
  },
  whatsappFloat: {
    ariaLabel: { es: "Escribir por WhatsApp", en: "Chat on WhatsApp" },
  },
};
