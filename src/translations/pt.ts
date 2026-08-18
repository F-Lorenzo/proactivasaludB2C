import type { Translations } from './es'

const pt: Translations = {
  nav: {
    home: 'Início',
    program: 'O programa',
    plans: 'Planos',
    club: 'Clube +50',
    about: 'Quem somos',
    mainSite: 'Site Principal',
    cta: 'Participe já',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },

  hero: {
    eyebrow: 'Proactiva Salud',
    headlineLine1: 'Sua melhor fase',
    headlineHighlight: 'não terminou.',
    headlineLine3: 'Está apenas começando.',
    subheadline:
      'Programa de bem-estar integral para maiores de 50 anos. Nutrição, movimento, saúde emocional e acompanhamento profissional — tudo a partir de casa.',
    ctaPrimary: 'Participar do programa de bem-estar integral',
    ctaSecondary: 'Ver o programa',
    bannerBold: 'Fale com um profissional hoje, de casa.',
    bannerRest: 'Sem filas, sem espera, com acompanhamento real.',
  },

  emotionalHook: {
    eyebrow: 'Por que Proactiva Salud?',
    items: [
      {
        title: 'Continuar sendo você mesmo',
        description:
          'Independência, energia e vontade de fazer planos. Você não quer ser cuidado — quer se cuidar bem.',
      },
      {
        title: 'Aproveitar o que importa',
        description:
          'Esta é a sua fase! Com mais tempo, mais liberdade e mais vontade do que nunca. Viaje, ria, aproveite cada momento com a energia e a vitalidade que você merece.',
      },
      {
        title: 'Prevenir, não esperar',
        description:
          'Hábitos saudáveis aumentam a energia, a vitalidade e a qualidade de vida. Investir em saúde hoje é ganhar independência para o futuro.',
      },
    ],
  },

  pillars: {
    eyebrow: 'Os 5 pilares do programa',
    titleLine1: 'Um programa completo,',
    titleLine2: 'pensado para você',
    benefitsLabel: 'Benefícios',
    items: {
      '01': {
        title: 'Nutrição Saudável',
        description:
          'Comer bem depois dos 50 não é fazer dieta. É dar ao seu corpo o que ele precisa para ter energia, vitalidade e aproveitar cada refeição.',
        benefits: [
          'Mais energia e vitalidade no dia a dia',
          'Massa muscular e mobilidade preservadas',
          'Sistema imunológico mais forte',
          'Melhor saúde emocional e concentração',
        ],
        format: 'Acompanhamento contínuo com nutricionista especializado +50',
      },
      '02': {
        title: 'Bem-estar Físico',
        description:
          'Movimentar-se bem é o seu maior seguro de independência. Não se trata da academia — se trata de o seu corpo te levar aonde você quer ir, sem dor.',
        benefits: [
          'Mais mobilidade e equilíbrio no dia a dia',
          'Prevenção de quedas e lesões',
          'Melhor sono à noite',
          'Mais energia para aproveitar o dia',
        ],
        format: 'Plano mensal personalizado + acompanhamento por teleconsulta',
      },
      '03': {
        title: 'Saúde Emocional',
        description:
          'Você tem um espaço profissional e acolhedor para processar cada etapa da vida e seguir em frente com força, equilíbrio e confiança.',
        benefits: [
          'Menos estresse e ansiedade no dia a dia',
          'Mais autoestima e motivação',
          'Vínculos familiares mais fortes',
          'Ferramentas para se adaptar às mudanças',
        ],
        format: 'Psicologia comportamental + coaching emocional',
      },
      '04': {
        title: 'Teleconsultas em Casa',
        description:
          'Sem deslocamentos, sem salas de espera. Seus profissionais atendem você no conforto da sua casa, com a mesma qualidade de uma consulta presencial.',
        benefits: [
          'Atendimento profissional sem sair de casa',
          'Horários definidos e respeitados',
          'Acompanhamento contínuo dos seus programas',
          'Conforto, segurança e apoio real',
        ],
        format: 'Todas as consultas do programa por teleconsulta',
      },
      '05': {
        title: 'Coaching e Bem-estar',
        description:
          'Encontros virtuais de coaching ontológico que trazem ferramentas concretas para aproveitar esta fase com propósito, clareza e confiança.',
        benefits: [
          'Desenvolvimento pessoal e autoconhecimento',
          'Ferramentas para melhorar seus relacionamentos',
          'Propósito e motivação renovados',
          'Comunidade de pessoas na sua mesma fase',
        ],
        format: 'Encontros virtuais em grupo mensais',
      },
    },
  },

  healthStats: {
    eyebrow: 'Resultados comprovados',
    titleLine1: 'O que conquistam os que',
    titleLine2: 'cuidam da saúde',
    description:
      'Programas de bem-estar integral para maiores de 50 anos mostram resultados consistentes em poucas semanas de acompanhamento profissional.',
    chartAlt:
      'Gráfico de resultados: energia diária +73%, qualidade do sono +62%, dor nas articulações -54%, marcadores de estresse -58%',
    trendLabel: 'Evolução da qualidade de vida · primeiras 12 semanas',
    trendAriaLabel:
      'Gráfico de evolução da qualidade de vida em 12 semanas, com tendência de alta',
    weeks: ['Sem 0', 'Sem 3', 'Sem 6', 'Sem 9', 'Sem 12'],
    footnote:
      '* Dados baseados em estudos de programas de bem-estar integral para maiores de 50 anos.',
    runnerBadgeNumber: '+50',
    runnerBadgeText: 'anos, mais qualidade de vida',
    nutritionCaptionLine1: 'Nutrição',
    nutritionCaptionLine2: 'consciente',
    attentionCaptionLine1: 'Atendimento',
    attentionCaptionLine2: 'profissional',
    communityLabel: 'Comunidade',
    communityHeadline: 'Cerque-se de pessoas na sua mesma fase',
  },

  plans: {
    eyebrow: 'Escolha seu plano',
    title: 'Um plano para cada fase',
    description: 'Todos incluem teleconsultas a partir de casa.',
    perMonth: '/mês',
    internationalNote: 'Valor internacional',
    arsReference: '≈ {amount} pesos argentinos',
    cta: 'Garantir minha vaga',
    footnoteQuestion: 'Ainda tem dúvidas sobre qual escolher?',
    footnoteLink: 'Um consultor te orienta sem compromisso',
    items: {
      care: {
        tagline: 'Primeiros passos rumo ao bem-estar',
        persona: 'Para quem está dando o primeiro passo',
        features: [
          '1 consulta de Nutrição por mês',
          'Plano de Atividade Física mensal',
          'Encontros Virtuais de Bem-estar',
          'Acompanhamento de agente digital',
          'Centro digital de bem-estar Proactiva',
        ],
      },
      plus: {
        tagline: 'Acompanhamento completo e integral',
        persona: 'Ideal para uma mudança real',
        badge: 'Mais escolhido',
        features: [
          '1 consulta de Nutrição por mês',
          '1 plano de Atividade Esportiva + acompanhamento',
          '1 sessão de Bem-estar Emocional por mês',
          'Encontros Virtuais de Coaching',
          'Acompanhamento contínuo por teleconsulta',
          'Centro digital de bem-estar Proactiva',
        ],
      },
      prime: {
        tagline: 'Acompanhamento total e personalizado',
        persona: 'Para quem quer o máximo',
        features: [
          '2 consultas de Nutrição por mês',
          'Plano de Atividade Física + acompanhamentos frequentes',
          'Sessões de Bem-estar Emocional ampliadas',
          'Coaching ontológico',
          'Prioridade na agenda e suporte estendido',
          'Relatórios de progresso mensais',
          'Centro digital de bem-estar Proactiva',
        ],
      },
    },
  },

  testimonials: {
    eyebrow: 'Comunidade Proactiva · Clube +50',
    titleLine1: 'Você não está sozinho',
    titleLine2: 'nesse caminho',
    description:
      'O Clube +50 é o espaço de encontro de todas as pessoas que escolhem viver esta fase com mais energia, propósito e conexão.',
    membersLabel: 'Membros do clube',
    andCountingLine1: 'e',
    andCountingLine2: 'contando',
    intro:
      'Fazer parte do Clube +50 significa ter um grupo de pessoas que te acompanha, te entende e compartilha seus mesmos objetivos de saúde e bem-estar.',
    features: [
      {
        title: 'Rede de pares',
        description:
          'Conecte-se com pessoas na mesma fase. Compartilhar o caminho faz toda a diferença.',
      },
      {
        title: 'Apoio de verdade',
        description: 'Um espaço onde seu bem-estar emocional importa tanto quanto sua saúde física.',
      },
      {
        title: 'Encontros e conversas',
        description:
          'Atividades em grupo virtuais, conversas com especialistas e espaços de troca.',
      },
      {
        title: 'Motivação constante',
        description:
          'O grupo te impulsiona. A comunidade sustenta a mudança quando a motivação individual falha.',
      },
    ],
    clubTitle: 'Clube +50',
    clubDescription:
      'Incluído em todos os planos da Proactiva Salud. Quando você entra no programa, você entra na comunidade.',
    clubCta: 'Quero fazer parte',
  },

  ctaSection: {
    eyebrow: 'Comunidade Proactiva · Clube +50',
    titleLine1: 'Junte-se à comunidade',
    titleLine2: '+50 mais saudável',
    titleLine3: 'do mundo',
    description:
      'Deixe seus dados e te contamos como fazer parte da comunidade Proactiva e do Clube +50.',
    bullets: [
      'Uma comunidade de pessoas que escolhem viver melhor',
      'Acesso a profissionais, conteúdos e atividades em grupo',
      'Entraremos em contato em breve para te dar as boas-vindas',
    ],
    formTitle: 'Preencha seus dados',
    labels: {
      nombre: 'Nome',
      apellido: 'Sobrenome',
      email: 'E-mail',
      telefono: 'Telefone',
      ciudad: 'Cidade',
      plan: 'Plano de interesse',
    },
    placeholders: {
      nombre: 'Seu nome',
      apellido: 'Seu sobrenome',
      email: 'voce@email.com',
      telefono: '+55 11 9...',
      ciudad: 'Sua cidade',
    },
    planDefaultOption: 'Ainda não sei — quero orientação',
    planOptionPrefix: 'Plano',
    submit: 'Participar do programa de bem-estar integral',
    sending: 'Enviando...',
    errorMessage: 'Não conseguimos enviar seus dados. Tente novamente em alguns segundos.',
    planNotSpecified: 'Não especificado',
    nameValidationHint: 'Somente letras, entre 1 e 32 caracteres.',
    phoneValidationHint: 'Somente números de telefone, com ou sem código do país (ex: +55 11 91234-5678).',
    disclaimer: 'Ao enviar, você concorda que a Proactiva Salud entre em contato com informações do programa.',
    successTitle: 'Obrigado, {name}!',
    successMessage:
      'Um consultor da Proactiva Salud vai entrar em contato em breve para te dar as boas-vindas à comunidade +50 mais saudável do mundo.',
  },

  footer: {
    tagline: 'A comunidade +50 mais saudável do mundo. Bem-estar integral para maiores de 50.',
    programHeading: 'Programa',
    navUnirme: 'Participar',
    contactHeading: 'Contato',
    contactText: 'Preencha o formulário e entraremos em contato em breve.',
    formLink: 'Ir para o formulário →',
    copyright: '© {year} Proactiva Salud. Todos os direitos reservados.',
  },

  whatsapp: {
    bubbleMessage: 'Tem alguma dúvida sobre a Proactiva?',
    closeAria: 'Fechar mensagem',
    openAria: 'Falar no WhatsApp',
    prefilledMessage: 'Olá! Quero tirar uma dúvida sobre a Proactiva Salud.',
  },

  quienesSomos: {
    metaTitle: 'Quem somos — Proactiva Salud',
    metaDescription:
      'Conheça a equipe da Proactiva Salud: profissionais comprometidos com a prevenção e o bem-estar integral para maiores de 50.',
    eyebrow: 'Quem somos',
    headingPre: 'Acreditamos no poder das',
    headingHighlight: 'pequenas mudanças',
    headingPost: 'que duram a vida toda.',
    intro:
      'Nos dedicamos a acompanhar as pessoas em cada etapa da vida, com atenção especial ao cuidado e à qualidade de vida na maturidade.',
    ctaButton: 'Participar do programa de bem-estar integral',
    badgeNumber: '+50',
    badgeText: 'anos, mais qualidade de vida',
    bodyParagraph1:
      'Sabemos que se sentir bem, manter-se ativo e preservar a autonomia é fundamental, e por isso trabalhamos para oferecer ferramentas que ajudem a alcançar isso.',
    bodyParagraph2:
      'Somos uma equipe de profissionais comprometidos com a prevenção e o bem-estar integral, oferecendo orientação, acompanhamento contínuo e propostas adaptadas a cada pessoa. Nossa abordagem busca antecipar problemas de saúde, promovendo hábitos saudáveis, bem-estar físico e equilíbrio emocional.',
    bodyParagraph3:
      'Acreditamos que nunca é tarde para começar a se cuidar melhor. Por isso, na Proactiva Salud oferecemos um acompanhamento próximo, claro e confiável, ajudando cada pessoa a viver com mais energia, tranquilidade e bem-estar.',
    quote: 'Nunca é tarde para começar a se cuidar melhor.',
    valuesEyebrow: 'Nossos valores',
    valuesTitle: 'O que nos guia todos os dias',
    values: {
      cercania: {
        title: 'Acompanhamento próximo',
        description:
          'Oferecemos um acompanhamento contínuo, claro e confiável, adaptado a cada pessoa e à sua etapa de vida.',
      },
      prevencion: {
        title: 'Prevenção em primeiro lugar',
        description:
          'Nossa abordagem antecipa os problemas de saúde promovendo hábitos saudáveis antes que eles apareçam.',
      },
      equipo: {
        title: 'Equipe profissional',
        description:
          'Somos uma equipe multidisciplinar comprometida com o bem-estar físico, emocional e social de cada pessoa.',
      },
      bienestar: {
        title: 'Bem-estar integral',
        description:
          'Trabalhamos nutrição, movimento, saúde emocional e autonomia para uma qualidade de vida plena.',
      },
    },
    ctaTitle: 'Comece hoje a viver com mais energia e bem-estar',
    ctaDescription: 'Junte-se à Proactiva Salud e comece a cuidar do seu bem-estar integral hoje.',
    ctaButton2: 'Participar do programa de bem-estar integral',
  },
}

export default pt
