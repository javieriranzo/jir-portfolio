// Contenido editable del portfolio. Fuente: CV de Javier Iranzo (FJIR).
// Todo lo que pasa por `pending()` se muestra marcado como «pendiente» en la web
// hasta que se sustituya por un texto real. No hay datos inventados.

export const pending = (hint) => ({ pending: hint });

export const site = {
  name: 'Javier Iranzo',
  fullName: 'Francisco Javier Iranzo Rebenaque',
  initials: 'FJIR',
  role: 'Ingeniero de QA y desarrollador',
  title: 'Javier Iranzo (FJIR), ingeniero de QA y desarrollador',
  description:
    'Portfolio de Javier Iranzo (FJIR): ingeniero de calidad de software con pasado de desarrollador full stack. Automatización de pruebas de APIs y webs, pruebas funcionales y requisitos.',
  url: '', // TODO: dominio definitivo (p. ej. https://fjir.dev) para canonical y Open Graph
  email: 'javieriranzo@proton.me',
  phone: '+34 666 305 652',
  whatsapp: 'https://wa.me/34666305652',
  cv: '/cv/javier-iranzo-cv.pdf', // TODO: subir el PDF del CV a public/cv/
  linkedin: 'https://www.linkedin.com/in/fjir',
  github: 'https://github.com/javieriranzo',
};

export const nav = [
  { href: '/#experiencia', label: 'Experiencia' },
  { href: '/#formacion', label: 'Formación' },
  { href: '/#aficiones', label: 'Aficiones' },
  { href: '/#contacto', label: 'Contacto' },
];
export const about = {
  lead: 'Hola, soy Javier.',
  paragraphs: [
    'Soy ingeniero informático especializado en QA (aseguramiento de la calidad del software) y desarrollo full stack.',
    'Actualmente, estoy centrado en la automatización de pruebas de API y aplicaciones web, trabajando para mejorar la calidad del software y hacer que los procesos de testing sean más eficientes y fiables. En este ámbito, también he empezado a liderar equipos, participando en la organización del trabajo y en la mejora de las prácticas de automatización.',
    'Además, tengo experiencia en pruebas funcionales y validación de requisitos, colaborando con el área de negocio y los usuarios finales para asegurar que las aplicaciones cumplen con las necesidades y expectativas del proyecto.',
    'A lo largo de mi trayectoria, he trabajado en proyectos de banca, industria, investigación y administración pública, siempre en entornos ágiles y en contacto directo con los equipos de desarrollo. Esto me ha permitido conocer distintas formas de trabajar y tener una visión global del proceso de desarrollo, con especial atención a la calidad del software.',
  ],
  // Aficiones, contadas como casos de prueba: el toque canalla de la página.
  offDuty: {
    title: 'Fuera del horario laboral',
    cases: [
      {
        id: 'CP-01',
        icon: '🍺',
        title: 'Cerveza artesanal',
        text: 'Pruebas exploratorias de IPAs, stouts y lo que haya en el grifo de temporada. Ningún lote se da por bueno sin una segunda ronda de validación.',
        status: 'Pasa, con espuma',
      },
      {
        id: 'CP-02',
        icon: '🦇',
        title: 'Fútbol (Valencia CF)',
        text: 'Pruebas de regresión cada fin de semana en Mestalla: mismo escudo, mismos nervios y una fe que no hay bug que la rompa.',
        status: 'Sufre, pero Amunt',
      },
      {
        id: 'CP-03',
        icon: '🏎️',
        title: 'Fórmula 1',
        text: 'Pruebas de rendimiento a más de 300 km/h. Los domingos de Gran Premio están bloqueados en el calendario y no admiten reuniones.',
        status: 'Bloqueante',
      },
    ],
  },
  photo: null, // { src, alt, width, height }
};

// Trayectoria en orden cronológico. Fechas del CV en formato 'AAAA-MM'; `end: null` es la actualidad.
// `tools` son las competencias de la etapa, agrupadas en { group, items }; `highlights`, las
// cinco que se ven sin desplegar (deben estar también en `tools`).
// `logo` (opcional) es el logotipo oficial en /public/logos.
// `brand` (opcional) es el color de la empresa, { bg, fg }, para el botón de competencias;
// sin él, el botón va en tinta.
export const experience = [
  {
    start: '2013-03',
    end: '2013-06',
    logo: { src: '/logos/gva.svg', alt: 'Generalitat Valenciana', width: 494, height: 236 },
    brand: { bg: '#c80f2e', fg: '#fff' },
    location: ['Valencia'],
    period: '2013',
    role: 'Junior Application Developer, prácticas',
    place: 'Generalitat Valenciana',
    text: 'Migración de bases de datos jurídicas de Microsoft Access a software libre con SQL, en un equipo de seis personas. Desarrollo en Java y C# y scripts en Bash para automatizar procesos internos, y soporte técnico y resolución de incidencias para usuarios de la Administración Pública.',
    highlights: [
      'Migración de bases de datos',
      'SQL',
      'Java',
      'C#',
      'Soporte técnico a usuarios',
    ],
    tools: [
      {
        group: 'Bases de datos',
        items: [
          'SQL',
          'Microsoft Access',
          'Migración de bases de datos',
        ],
      },
      {
        group: 'Programación y scripting',
        items: [
          'Java',
          'C#',
          'Bash Scripting',
        ],
      },
      {
        group: 'Sistemas y soporte',
        items: [
          'Soporte técnico a usuarios',
          'Resolución de incidencias',
        ],
      },
      {
        group: 'Competencias profesionales',
        items: [
          'Trabajo en equipo',
          'Resolución de problemas',
          'Soporte a usuarios de la Administración Pública',
        ],
      },
    ],
  },
  {
    start: '2014-06',
    end: '2018-01',
    location: ['Valencia'],
    period: '2014 – 2018',
    role: 'Junior Full Stack Developer',
    place: 'Freelance',
    brand: { bg: 'var(--lime)', fg: 'var(--ink)' }, // sin empresa: el lima, la marca propia
    text: 'Soluciones a medida para clientes, del análisis de requisitos a la puesta en producción. Sitios web con CMS como WordPress y PrestaShop, con temas y funcionalidades personalizados, interfaces web adaptables con Angular y Node.js, aplicaciones de escritorio con bases de datos y apps para Android.',
    highlights: [
      'Desarrollo de sitios web con CMS',
      'WordPress',
      'Angular',
      'Diseño web adaptable (Responsive Design)',
      'Análisis de requisitos del cliente',
    ],
    tools: [
      {
        group: 'Desarrollo web',
        items: [
          'HTML5',
          'CSS3',
          'JavaScript',
          'Angular',
          'Diseño y desarrollo de interfaces web',
          'Diseño web adaptable (Responsive Design)',
          'Integración de CMS',
          'Integración con bases de datos',
        ],
      },
      {
        group: 'CMS y sitios web',
        items: [
          'Desarrollo de sitios web con CMS',
          'Personalización de temas y funcionalidades',
          'Gestión de contenidos web',
          'Mantenimiento y actualización de sitios web',
          'Publicación y puesta en producción de aplicaciones web',
        ],
      },
      {
        group: 'Trabajo con clientes',
        items: [
          'Análisis de requisitos del cliente',
          'Recopilación y definición de necesidades',
          'Planificación y desarrollo de soluciones a medida',
        ],
      },
      {
        group: 'Tecnologías y herramientas',
        items: [
          'Java',
          'Node.js',
          'MySQL',
          'Bootstrap',
          'WordPress',
          'PrestaShop',
          'Android Studio',
          'Trello',
        ],
      },
    ],
  },
  {
    start: '2018-01',
    end: '2021-04',
    logo: { src: '/logos/ntt-data.svg', alt: 'NTT DATA', width: 340, height: 70 },
    brand: { bg: '#0072bc', fg: '#fff' },
    location: ['Valencia', 'Barcelona', 'Alicante'],
    period: '2018 – 2021',
    role: 'Full Stack Developer & Software QA Engineer',
    place: 'NTT DATA Europe & Latam',
    text: 'Desarrollo de microservicios y API en Java y de aplicaciones web con Angular para banca internacional y la Oficina Europea de Patentes. Pruebas unitarias, funcionales, de integración y de aceptación, validación de requisitos e historias de usuario, y seguimiento de la calidad del código con SonarQube. Validación de despliegues y guardias en producción, con diagnóstico de incidencias.',
    highlights: [
      'Java',
      'Desarrollo de microservicios',
      'Angular',
      'Pruebas de integración',
      'SonarQube',
    ],
    tools: [
      {
        group: 'Calidad y pruebas',
        items: [
          'Aseguramiento de la calidad del software (QA)',
          'Análisis y diseño de casos de prueba',
          'Pruebas funcionales',
          'Pruebas unitarias',
          'Pruebas de regresión',
          'Pruebas de integración',
          'Pruebas de aceptación',
          'Pruebas de usabilidad y experiencia de usuario (UX/UI)',
          'Validación de requisitos funcionales',
          'Análisis de historias de usuario',
          'Gestión y seguimiento de defectos',
          'Análisis de causa raíz',
          'Validación post-despliegue',
          'Pruebas en entornos productivos y preproductivos',
          'Calidad y mantenibilidad del código',
        ],
      },
      {
        group: 'Desarrollo backend',
        items: [
          'Java',
          'Java EE',
          'Desarrollo de microservicios',
          'Diseño y desarrollo de servicios backend',
          'Refactorización y optimización de código',
          'Desarrollo de API y servicios web',
          'Maven',
          'MySQL',
          'Programación orientada a objetos (POO)',
          'Pruebas unitarias de backend',
          'JUnit',
          'Mockito',
        ],
      },
      {
        group: 'Desarrollo frontend',
        items: [
          'JavaScript',
          'Angular',
          'Node.js',
          'HTML5',
          'CSS3',
          'Desarrollo de aplicaciones web',
          'Pruebas unitarias de frontend',
          'Jasmine',
          'Karma',
        ],
      },
      {
        group: 'Calidad de código y monitorización',
        items: [
          'SonarQube',
          'Kibana',
          'Análisis de logs',
          'Monitorización de aplicaciones',
          'Análisis de métricas de rendimiento',
          'Detección y diagnóstico de incidencias',
        ],
      },
      {
        group: 'Metodología y documentación',
        items: [
          'Metodologías ágiles',
          'Scrum / Kanban',
          'Jira',
          'Documentación funcional y técnica',
        ],
      },
    ],
  },
  {
    start: '2021-04',
    end: null,
    logo: { src: '/logos/iti.svg', alt: 'ITI, Instituto Tecnológico de Informática', width: 444, height: 86 },
    brand: { bg: '#ea8215', fg: 'var(--ink)' },
    location: ['Valencia'],
    period: '2021 – hoy',
    role: 'Software QA Automation & Functional Engineer',
    place: 'ITI, Instituto Tecnológico de Informática',
    text: 'Estrategia de calidad y automatización de pruebas de API e interfaz con Playwright, Cypress y Wakamiti, integradas en CI/CD. Pruebas funcionales, de regresión y de UX/UI, validación de requisitos con negocio y usuarios finales, y diseño de pruebas asistido por IA generativa, en proyectos industriales y de investigación.',
    highlights: [
      'Estrategia de aseguramiento de la calidad',
      'Automatización de pruebas de API',
      'Playwright',
      'Wakamiti',
      'Pruebas asistidas por inteligencia artificial',
    ],
    tools: [
      {
        group: 'Competencias principales',
        items: [
          'Estrategia de aseguramiento de la calidad',
          'Planificación y diseño de pruebas',
          'Pruebas basadas en riesgos',
          'Pruebas funcionales y no funcionales',
          'Pruebas exploratorias',
          'Pruebas de regresión',
          'Pruebas de humo (smoke) y sanity',
          'Pruebas end-to-end (E2E)',
          'Diseño y ejecución de casos de prueba',
          'Gestión de defectos y análisis de causa raíz',
          'Agile / Scrum / Kanban',
        ],
      },
      {
        group: 'Automatización de pruebas',
        items: [
          'Diseño de frameworks de automatización',
          'Automatización de pruebas de interfaz (UI)',
          'Automatización de pruebas de API',
          'Pruebas de integración',
          'Gestión de datos de prueba',
          'Page Object Model (POM)',
          'BDD (Behavior-Driven Development)',
          'Estrategia y mantenimiento de la automatización',
        ],
      },
      {
        group: 'Inteligencia artificial',
        items: [
          'Pruebas asistidas por inteligencia artificial',
          'Diseño de pruebas mediante IA generativa',
          'Generación de casos de prueba mediante IA',
          'Generación inteligente de datos de prueba',
        ],
      },
      {
        group: 'Pruebas de API y backend',
        items: [
          'Pruebas de API REST',
          'API Contract Testing',
          'HTTP y servicios web',
          'Pruebas de autenticación y autorización',
          'Validación de SQL y bases de datos',
        ],
      },
      {
        group: 'Programación y scripting',
        items: [
          'TypeScript',
          'JavaScript',
          'Python',
          'Java',
          'SQL',
          'Bash / scripts de shell',
        ],
      },
      {
        group: 'Herramientas de automatización y pruebas',
        items: [
          'Wakamiti',
          'Playwright',
          'Cypress',
          'Selenium WebDriver',
          'WebdriverIO',
          'Postman',
          'REST Assured',
          'Cucumber',
        ],
      },
      {
        group: 'CI/CD y DevOps',
        items: [
          'Git',
          'GitHub Actions',
          'GitLab CI/CD',
          'Jenkins',
          'Docker',
          'Pruebas continuas',
          'Pipelines de pruebas automatizadas',
          'Validación de builds y releases',
        ],
      },
      {
        group: 'Bases de datos y observabilidad',
        items: [
          'MySQL',
          'Grafana',
          'Kibana',
        ],
      },
      {
        group: 'Gestión de pruebas y colaboración',
        items: [
          'Jira',
          'Xray',
          'TestRail',
          'Confluence',
          'GitHub / GitLab',
          'Colaboración en equipos ágiles',
        ],
      },
      {
        group: 'Competencias de perfil sénior',
        items: [
          'Ingeniería de calidad',
          'Liderazgo técnico',
          'Mentoría y transferencia de conocimiento',
          'Colaboración con equipos multidisciplinares',
          'Evaluación y mitigación de riesgos',
          'Mejora continua',
          'Métricas e informes de calidad',
          'Evaluación de la preparación de releases',
          'Comunicación con las partes interesadas',
          'Pruebas shift-left',
          'Responsabilidad sobre la calidad',
        ],
      },
    ],
  },
];

// En `title`, \n marca dónde parte la línea, para que los dos títulos ocupen dos líneas.
export const education = [
  {
    title: 'Grado en\nIngeniería Informática',
    place: 'Universitat Jaume I',
    location: 'Castellón',
    period: '2014 – 2018',
    logo: { src: '/logos/uji.png', width: 626, height: 104 },
  },
  {
    title: 'Técnico Superior en Desarrollo\nde Aplicaciones Multiplataforma',
    place: 'IES Serpis',
    location: 'Valencia',
    period: '2011 – 2013',
    logo: { src: '/logos/ies-serpis.png', width: 158, height: 150 },
  },
];

// Cursos del CV y certificaciones de LinkedIn, agrupados por tema.
export const certifications = [
  {
    group: 'Programación y pruebas',
    items: [
      'Cypress: máster en automatización',
      'Selenium con Java y Cucumber',
      'Python avanzado',
      'Java avanzado',
      'AngularJS esencial',
      'AngularJS práctico',
      'Maquetación web',
      'Fundamentos de programación y algoritmia',
    ],
  },
  {
    group: 'Metodologías ágiles',
    items: [
      'Scrum avanzado',
      'Aprende Scrum',
      'Scrum: roles',
      'Scrum: antipatrones',
      'Conviértete en especialista de metodologías ágiles para programación',
      'Desarrollo ágil de software',
      'Introducción a Agile',
      'Fundamentos de Kanban para desarrollo de software',
      'Fundamentos de Extreme Programming para desarrollo de software',
      'Fundamentos de Lean para desarrollo de software',
      'Aprende a usar la metodología Lean',
    ],
  },
  {
    group: 'Calidad y herramientas',
    items: [
      'Fundamentos de Six Sigma',
      'Fundamentos de Six Sigma: Green Belt',
      'DevOps esencial',
      'Workshop Introducción a Jira',
    ],
  },
];

// `level` es 'nativo' o un nivel del MCER (A1 … C2); de él sale la barra de cada tarjeta.
// `flag` es el código de la bandera de la esquina de cada tarjeta (ver components/Flag).
export const languages = [
  { name: 'Español', level: 'nativo', flag: 'es' },
  { name: 'Valenciano', level: 'nativo', flag: 'va' },
  { name: 'Inglés', level: 'B2', flag: 'en' },
];

export const contact = {
  topics: [
    { id: 'proyecto', label: 'Un proyecto', subject: 'Un proyecto' },
    { id: 'colaboracion', label: 'Una colaboración', subject: 'Una colaboración' },
    { id: 'oportunidad', label: 'Una oportunidad laboral', subject: 'Una oportunidad laboral' },
    { id: 'otra', label: 'Otra cosa', subject: 'Hola, Javier' },
  ],
};
