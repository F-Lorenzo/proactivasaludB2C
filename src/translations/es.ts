// Source of truth for UI copy. en.ts and pt.ts must mirror this exact shape
// (Translations = typeof es), so add new keys here first.
const es = {
  nav: {
    home: 'Inicio',
    program: 'El programa',
    plans: 'Planes',
    club: 'Club +50',
    about: 'Quiénes somos',
    mainSite: 'Página Central',
    cta: 'Sumate ahora',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },

  hero: {
    eyebrow: 'Proactiva Salud',
    headlineLine1: 'Tu mejor etapa',
    headlineHighlight: 'no terminó.',
    headlineLine3: 'Acaba de empezar.',
    subheadline:
      'Programa de bienestar integral para mayores de 50. Nutrición, movimiento, salud emocional y acompañamiento profesional — todo desde tu hogar.',
    ctaPrimary: 'Unirme al programa de bienestar integral',
    ctaSecondary: 'Ver el programa',
    bannerBold: 'Hablá con un profesional hoy, desde tu casa.',
    bannerRest: 'Sin turnos, sin esperas, con seguimiento real.',
  },

  emotionalHook: {
    eyebrow: '¿Por qué Proactiva Salud?',
    items: [
      {
        title: 'Seguir siendo vos mismo',
        description:
          'Independencia, energía y ganas de hacer planes. No querés que te cuiden — querés cuidarte bien.',
      },
      {
        title: 'Disfrutar lo que importa',
        description:
          '¡Esta es tu etapa! Con más tiempo, más libertad y más ganas que nunca. Viajá, reíte, disfrutá cada momento con la energía y la vitalidad que merecés.',
      },
      {
        title: 'Prevenir, no esperar',
        description:
          'Los hábitos saludables aumentan la energía, la vitalidad y la calidad de vida. Invertir en salud hoy es ganar independencia para el futuro.',
      },
    ],
  },

  pillars: {
    eyebrow: 'Los 5 pilares del programa',
    titleLine1: 'Un programa completo,',
    titleLine2: 'diseñado para vos',
    benefitsLabel: 'Beneficios',
    items: {
      '01': {
        title: 'Nutrición Saludable',
        description:
          'Comer bien después de los 50 no es hacer dieta. Es darle a tu cuerpo lo que necesita para tener energía, vitalidad y disfrutar cada comida.',
        benefits: [
          'Más energía y vitalidad en el día a día',
          'Masa muscular y movilidad preservadas',
          'Sistema inmune más fuerte',
          'Mejor salud emocional y concentración',
        ],
        format: 'Seguimiento continuo con nutricionista especializado +50',
      },
      '02': {
        title: 'Bienestar Físico',
        description:
          'Moverte bien es tu mayor seguro de independencia. No se trata del gimnasio — se trata de que tu cuerpo te lleve adonde querés ir, sin dolor.',
        benefits: [
          'Más movilidad y equilibrio cotidiano',
          'Prevención de caídas y lesiones',
          'Mejor descanso nocturno',
          'Mayor energía para disfrutar el día',
        ],
        format: 'Plan mensual personalizado + seguimiento por teleconsulta',
      },
      '03': {
        title: 'Salud Emocional',
        description:
          'Tenés un espacio profesional y cálido para procesar cada etapa de la vida y seguir adelante con fuerza, equilibrio y confianza.',
        benefits: [
          'Menos estrés y ansiedad cotidiana',
          'Más autoestima y motivación',
          'Vínculos familiares más fuertes',
          'Herramientas para adaptarte a los cambios',
        ],
        format: 'Psicología conductual + coaching emocional',
      },
      '04': {
        title: 'Teleconsultas en Casa',
        description:
          'Sin traslados, sin salas de espera. Tus profesionales te atienden desde la comodidad de tu hogar, con la misma calidad que una consulta presencial.',
        benefits: [
          'Atención profesional sin salir de casa',
          'Horarios preestablecidos y respetados',
          'Seguimiento continuo de tus programas',
          'Comodidad, seguridad y acompañamiento real',
        ],
        format: 'Todas las consultas del programa vía teleconsulta',
      },
      '05': {
        title: 'Coaching y Bienestar',
        description:
          'Charlas virtuales de coaching ontológico que te dan herramientas concretas para disfrutar esta etapa con propósito, claridad y confianza.',
        benefits: [
          'Desarrollo personal y autoconocimiento',
          'Herramientas para mejorar tus relaciones',
          'Propósito y motivación renovados',
          'Comunidad de personas en tu misma etapa',
        ],
        format: 'Charlas virtuales grupales mensuales',
      },
    },
  },

  healthStats: {
    eyebrow: 'Resultados comprobados',
    titleLine1: 'Lo que logran quienes',
    titleLine2: 'cuidan su salud',
    description:
      'Programas de bienestar integral para adultos mayores de 50 muestran resultados consistentes en pocas semanas de seguimiento profesional.',
    chartAlt:
      'Gráfico de resultados: energía diaria +73%, calidad de sueño +62%, dolor articular -54%, marcadores de estrés -58%',
    trendLabel: 'Evolución de calidad de vida · primeras 12 semanas',
    trendAriaLabel:
      'Gráfico de evolución de calidad de vida en 12 semanas, mostrando tendencia ascendente',
    weeks: ['Sem 0', 'Sem 3', 'Sem 6', 'Sem 9', 'Sem 12'],
    footnote:
      '* Datos basados en estudios de programas de bienestar integral para adultos mayores de 50 años.',
    runnerBadgeNumber: '+50',
    runnerBadgeText: 'años, mejor calidad de vida',
    nutritionCaptionLine1: 'Nutrición',
    nutritionCaptionLine2: 'consciente',
    attentionCaptionLine1: 'Atención',
    attentionCaptionLine2: 'profesional',
    communityLabel: 'Comunidad',
    communityHeadline: 'Rodeate de personas en tu misma etapa',
  },

  plans: {
    eyebrow: 'Elegí tu plan',
    title: 'Un plan para cada etapa',
    description: 'Todos incluyen teleconsultas desde tu hogar.',
    perMonth: '/mes',
    cta: 'Solicitar mi lugar',
    footnoteQuestion: '¿Tenés dudas sobre cuál elegir?',
    footnoteLink: 'Un asesor te orienta sin compromiso',
    items: {
      care: {
        tagline: 'Primeros pasos hacia el bienestar',
        persona: 'Para quienes dan el primer paso',
        features: [
          '1 consulta de Nutrición por mes',
          'Plan de Actividad Física mensual',
          'Charlas Virtuales de Bienestar',
          'Acompañamiento de agente digital',
          'Centro de bienestar Proactiva',
        ],
      },
      plus: {
        tagline: 'Seguimiento completo e integral',
        persona: 'Ideal para un cambio real',
        badge: 'Más elegido',
        features: [
          '1 consulta de Nutrición por mes',
          '1 plan de Actividad Deportiva + seguimiento',
          '1 sesión de Bienestar Emocional por mes',
          'Charlas Virtuales de Coaching',
          'Seguimiento continuo por teleconsulta',
          'Centro de bienestar Proactiva',
        ],
      },
      prime: {
        tagline: 'Acompañamiento total y personalizado',
        persona: 'Para quienes quieren lo máximo',
        features: [
          '2 consultas de Nutrición por mes',
          'Plan de Actividad Física + seguimientos frecuentes',
          'Sesiones de Bienestar Emocional ampliadas',
          'Coaching ontológico',
          'Prioridad en agenda y soporte extendido',
          'Informes de progreso mensuales',
          'Centro de bienestar Proactiva',
        ],
      },
    },
  },

  testimonials: {
    eyebrow: 'Comunidad Proactiva · Club +50',
    titleLine1: 'No estás solo en',
    titleLine2: 'este camino',
    description:
      'El Club +50 es el espacio de encuentro de todas las personas que eligen vivir esta etapa con más energía, propósito y conexión.',
    membersLabel: 'Miembros del club',
    andCountingLine1: 'y',
    andCountingLine2: 'sumando',
    intro:
      'Ser parte del Club +50 significa tener un grupo humano que te acompaña, te entiende y comparte tus mismos objetivos de salud y bienestar.',
    features: [
      {
        title: 'Red de pares',
        description:
          'Conectate con personas que están en la misma etapa. Compartir el camino hace toda la diferencia.',
      },
      {
        title: 'Contención real',
        description: 'Un espacio donde tu bienestar emocional importa tanto como tu salud física.',
      },
      {
        title: 'Charlas y encuentros',
        description:
          'Actividades grupales virtuales, charlas con especialistas y espacios de intercambio.',
      },
      {
        title: 'Motivación constante',
        description:
          'El grupo te impulsa. La comunidad sostiene el cambio cuando la motivación individual flaquea.',
      },
    ],
    clubTitle: 'Club +50',
    clubDescription:
      'Incluido en todos los planes de Proactiva Salud. Cuando te sumás al programa, te sumás a la comunidad.',
    clubCta: 'Quiero ser parte',
  },

  ctaSection: {
    eyebrow: 'Comunidad Proactiva · Club +50',
    titleLine1: 'Unite a la comunidad',
    titleLine2: '+50 más saludable',
    titleLine3: 'del mundo',
    description:
      'Dejanos tus datos y te contamos cómo ser parte de la comunidad Proactiva y el Club +50.',
    bullets: [
      'Una comunidad de personas que eligen vivir mejor',
      'Acceso a profesionales, contenidos y actividades grupales',
      'Te contactamos a la brevedad para darte la bienvenida',
    ],
    formTitle: 'Completá tus datos',
    labels: {
      nombre: 'Nombre',
      apellido: 'Apellido',
      email: 'Email',
      telefono: 'Teléfono',
      ciudad: 'Ciudad',
      plan: 'Plan de interés',
    },
    placeholders: {
      nombre: 'Tu nombre',
      apellido: 'Tu apellido',
      email: 'tu@email.com',
      telefono: '+54 9 11...',
      ciudad: 'Tu ciudad',
    },
    planDefaultOption: 'No sé todavía — me orientarán',
    planOptionPrefix: 'Plan',
    submit: 'Unirme al programa de bienestar integral',
    sending: 'Enviando...',
    errorMessage: 'No pudimos enviar tus datos. Probá de nuevo en unos segundos.',
    planNotSpecified: 'No especificado',
    disclaimer: 'Al enviar aceptás que Proactiva Salud te contacte con información del programa.',
    successTitle: '¡Gracias, {name}!',
    successMessage:
      'Un asesor de Proactiva Salud se comunicará con vos pronto para darte la bienvenida a la comunidad +50 más saludable del mundo.',
  },

  footer: {
    tagline: 'La comunidad +50 más saludable del mundo. Bienestar integral para mayores de 50.',
    programHeading: 'Programa',
    navUnirme: 'Unirme',
    contactHeading: 'Contacto',
    contactText: 'Completá el formulario y te contactamos a la brevedad.',
    formLink: 'Ir al formulario →',
    copyright: '© {year} Proactiva Salud. Todos los derechos reservados.',
  },

  whatsapp: {
    bubbleMessage: '¿Tenés alguna consulta sobre Proactiva?',
    closeAria: 'Cerrar mensaje',
    openAria: 'Hablar por WhatsApp',
    prefilledMessage: '¡Hola! Quiero hacer una consulta sobre Proactiva Salud.',
  },

  quienesSomos: {
    metaTitle: 'Quiénes somos — Proactiva Salud',
    metaDescription:
      'Conocé al equipo de Proactiva Salud: profesionales comprometidos con la prevención y el bienestar integral para mayores de 50.',
    eyebrow: 'Quiénes somos',
    headingPre: 'Creemos en el poder de los',
    headingHighlight: 'pequeños cambios',
    headingPost: 'que perduran toda la vida.',
    intro:
      'Nos dedicamos a acompañar a las personas en cada etapa de la vida, con especial atención en el cuidado y la calidad de vida en la adultez.',
    ctaButton: 'Unirme al programa de bienestar integral',
    badgeNumber: '+50',
    badgeText: 'años, mejor calidad de vida',
    bodyParagraph1:
      'Sabemos que sentirse bien, mantenerse activo y conservar la autonomía es fundamental, y por eso trabajamos para brindar herramientas que ayuden a lograrlo.',
    bodyParagraph2:
      'Somos un equipo de profesionales comprometidos con la prevención y el bienestar integral, ofreciendo orientación, seguimiento continuo y propuestas adaptadas a cada persona. Nuestro enfoque busca anticiparse a los problemas de salud, promoviendo hábitos saludables, bienestar físico y el equilibrio emocional.',
    bodyParagraph3:
      'Creemos que nunca es tarde para empezar a cuidarse mejor. Por eso, en Proactiva Salud brindamos un acompañamiento cercano, claro y confiable, ayudando a cada persona a vivir con más energía, tranquilidad y bienestar.',
    quote: 'Nunca es tarde para empezar a cuidarse mejor.',
    valuesEyebrow: 'Nuestros valores',
    valuesTitle: 'Lo que nos guía cada día',
    values: {
      cercania: {
        title: 'Acompañamiento cercano',
        description:
          'Brindamos un seguimiento continuo, claro y confiable, adaptado a cada persona y su etapa de vida.',
      },
      prevencion: {
        title: 'Prevención primero',
        description:
          'Nuestro enfoque se anticipa a los problemas de salud promoviendo hábitos saludables antes de que aparezcan.',
      },
      equipo: {
        title: 'Equipo profesional',
        description:
          'Somos un equipo multidisciplinario comprometido con el bienestar físico, emocional y social de cada persona.',
      },
      bienestar: {
        title: 'Bienestar integral',
        description:
          'Trabajamos sobre nutrición, movimiento, salud emocional y autonomía para una calidad de vida plena.',
      },
    },
    ctaTitle: 'Empezá hoy a vivir con más energía y bienestar',
    ctaDescription: 'Sumate a Proactiva Salud y empezá a cuidar tu bienestar integral hoy.',
    ctaButton2: 'Unirme al programa de bienestar integral',
  },
}

export default es
export type Translations = typeof es
