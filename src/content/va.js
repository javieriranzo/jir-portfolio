// Contingut en valencià, amb la mateixa forma que es.js. Segueix la norma de l’AVL.
import { degrees, stages } from './shared';

const va = {
  meta: {
    title: 'Javier Iranzo (FJIR), enginyer de QA i desenvolupador',
    description:
      'Portfolio de Javier Iranzo (FJIR): enginyer de qualitat de programari amb un passat de desenvolupador full stack. Automatització de proves d’API i webs, proves funcionals i requisits.',
    jobTitle: 'Enginyer de QA de programari',
  },

  ui: {
    skipLink: 'Anar al contingut',
    navLabel: 'Principal',
    home: 'inici',
    openMenu: 'Obrir el menú',
    closeMenu: 'Tancar el menú',
    languageLabel: 'Idioma',
    contactLabel: 'Dades de contacte',
    downloadCv: 'Descarregar el CV complet (PDF)',
    photoPending: 'Foto pendent',
    pending: 'Pendent',
    location: 'Ubicació',
    period: 'Període',
    status: 'Estat',
    level: 'Nivell',
    native: 'Natiu',
    courses: 'Cursos i certificacions',
    languages: 'Idiomes',
    highlights: 'Competències destacades',
    tools: 'Ferramentes',
    allSkills: (count) => `Veure les ${count} competències`,
    backToTop: 'Tornar amunt',
  },

  sections: {
    experience: { id: 'experiencia', nav: 'Experiència', title: 'Experiència professional' },
    education: { id: 'formacio', nav: 'Formació', title: 'Formació i certificacions' },
    projects: { id: 'projectes', nav: 'Projectes', title: 'Projectes' },
    contact: { id: 'contacte', nav: 'Contacte' },
  },

  about: {
    lead: 'Hola, soc Javier.',
    paragraphs: [
      'Soc enginyer informàtic especialitzat en QA (assegurament de la qualitat del programari) i desenvolupament full stack.',
      'Actualment, estic centrat en l’automatització de proves d’API i aplicacions web, treballant per a millorar la qualitat del programari i fer que els processos de testing siguen més eficients i fiables. En este àmbit, també he començat a liderar equips, participant en l’organització del treball i en la millora de les pràctiques d’automatització.',
      'A més, tinc experiència en proves funcionals i validació de requisits, col·laborant amb l’àrea de negoci i els usuaris finals per a assegurar que les aplicacions complixen les necessitats i expectatives del projecte.',
      'Al llarg de la meua trajectòria, he treballat en projectes de banca, indústria, investigació i administració pública, sempre en entorns àgils i en contacte directe amb els equips de desenvolupament. Açò m’ha permés conéixer diferents maneres de treballar i tindre una visió global del procés de desenvolupament, amb especial atenció a la qualitat del programari.',
    ],
    photo: null,
  },

  projectStatus: {
    idea: { icon: '💡', label: 'Idea' },
    development: { icon: '🛠️', label: 'En desenvolupament' },
    production: { icon: '🚀', label: 'En producció' },
    maintenance: { icon: '🔧', label: 'En manteniment' },
    paused: { icon: '⏸️', label: 'Pausat' },
    archived: { icon: '📦', label: 'Arxivat' },
  },

  projects: [
    {
      title: 'Web de Samuel Reina',
      status: 'development',
      text: 'Web oficial del cantant i actor de doblatge Samuel Reina, aparador de la seua música i la seua carrera artística.',
    },
    {
      title: 'Invoicely App',
      status: 'development',
      text: 'Aplicació de gestió per a xicotetes empreses que cobrix allò essencial del dia a dia: productes, clients i facturació.',
    },
    {
      title: 'FJIR Portfolio',
      status: 'development',
      text: 'La web que estàs veient: el meu portfolio personal, que reunix en una sola pàgina la meua trajectòria professional, la meua formació i els meus projectes.',
    },
    {
      title: 'Formularis per a bodes',
      status: 'maintenance',
      text: 'Aplicació web perquè cada parella cree el seu propi formulari de confirmació d’assistència, totalment personalitzable i amb integracions perquè no se n’escape cap detall de la boda.',
    },
    {
      title: 'Web de Valentín Bou Franch',
      status: 'production',
      text: 'Web acadèmica d’un catedràtic de Dret Internacional Públic i Relacions Internacionals, que reunix la seua formació, la seua carrera professional i la seua trajectòria investigadora.',
    },
    {
      title: 'Web de María Carro Pitarch',
      status: 'production',
      text: 'Web acadèmica d’una professora ajudant doctora del Departament de Dret Internacional «Adolfo Miaja de la Muela», especialitzada en Dret Internacional i de la Unió Europea.',
    },
    {
      title: 'Bukowski Craft Beer Bar',
      status: 'idea',
      text: 'Projecte complet per a un bar de cervesa artesanal: una web informativa amb la seua història, la seua ubicació i reserves en línia, i una pissarra de cerveses interactiva en què els cambrers actualitzen al moment l’oferta i els preus.',
    },
    {
      title: 'Mr.Ops',
      status: 'paused',
      text: 'Ferramenta de gestió de projectes de principi a fi, recolzada en agents d’IA: documentació, lliuraments, sprints, èpiques, gestió del codi i, sobretot, testing.',
    },
  ],

  experience: [
    {
      ...stages.gva,
      location: ['València'],
      period: '2013',
      role: 'Junior Application Developer, pràctiques',
      place: 'Generalitat Valenciana',
      text: 'Migració de bases de dades jurídiques de Microsoft Access a programari lliure amb SQL, en un equip de sis persones. Desenvolupament en Java i C# i scripts en Bash per a automatitzar processos interns, i suport tècnic i resolució d’incidències per a usuaris de l’Administració Pública.',
      highlights: ['Migració de bases de dades', 'SQL', 'Java', 'C#', 'Suport tècnic a usuaris'],
      tools: [
        { group: 'Bases de dades', items: ['SQL', 'Microsoft Access', 'Migració de bases de dades'] },
        { group: 'Programació i scripting', items: ['Java', 'C#', 'Bash Scripting'] },
        { group: 'Sistemes i suport', items: ['Suport tècnic a usuaris', 'Resolució d’incidències'] },
        {
          group: 'Competències professionals',
          items: ['Treball en equip', 'Resolució de problemes', 'Suport a usuaris de l’Administració Pública'],
        },
      ],
    },
    {
      ...stages.freelance,
      location: ['València'],
      period: '2014 – 2018',
      role: 'Junior Full Stack Developer',
      place: 'Freelance',
      text: 'Solucions a mida per a clients, de l’anàlisi de requisits a la posada en producció. Llocs web amb CMS com WordPress i PrestaShop, amb temes i funcionalitats personalitzats, interfícies web adaptables amb Angular i Node.js, aplicacions d’escriptori amb bases de dades i apps per a Android.',
      highlights: [
        'Desenvolupament de llocs web amb CMS',
        'WordPress',
        'Angular',
        'Disseny web adaptable (Responsive Design)',
        'Anàlisi de requisits del client',
      ],
      tools: [
        {
          group: 'Desenvolupament web',
          items: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'Angular',
            'Disseny i desenvolupament d’interfícies web',
            'Disseny web adaptable (Responsive Design)',
            'Integració de CMS',
            'Integració amb bases de dades',
          ],
        },
        {
          group: 'CMS i llocs web',
          items: [
            'Desenvolupament de llocs web amb CMS',
            'Personalització de temes i funcionalitats',
            'Gestió de continguts web',
            'Manteniment i actualització de llocs web',
            'Publicació i posada en producció d’aplicacions web',
          ],
        },
        {
          group: 'Treball amb clients',
          items: [
            'Anàlisi de requisits del client',
            'Recopilació i definició de necessitats',
            'Planificació i desenvolupament de solucions a mida',
          ],
        },
        {
          group: 'Tecnologies i ferramentes',
          items: ['Java', 'Node.js', 'MySQL', 'Bootstrap', 'WordPress', 'PrestaShop', 'Android Studio', 'Trello'],
        },
      ],
    },
    {
      ...stages.ntt,
      location: ['València', 'Barcelona', 'Alacant'],
      period: '2018 – 2021',
      role: 'Full Stack Developer & Software QA Engineer',
      place: 'NTT DATA Europe & Latam',
      text: 'Desenvolupament de microservicis i API en Java i d’aplicacions web amb Angular per a banca internacional i l’Oficina Europea de Patents. Proves unitàries, funcionals, d’integració i d’acceptació, validació de requisits i històries d’usuari, i seguiment de la qualitat del codi amb SonarQube. Validació de desplegaments i guàrdies en producció, amb diagnòstic d’incidències.',
      highlights: ['Java', 'Desenvolupament de microservicis', 'Angular', 'Proves d’integració', 'SonarQube'],
      tools: [
        {
          group: 'Qualitat i proves',
          items: [
            'Assegurament de la qualitat del programari (QA)',
            'Anàlisi i disseny de casos de prova',
            'Proves funcionals',
            'Proves unitàries',
            'Proves de regressió',
            'Proves d’integració',
            'Proves d’acceptació',
            'Proves d’usabilitat i experiència d’usuari (UX/UI)',
            'Validació de requisits funcionals',
            'Anàlisi d’històries d’usuari',
            'Gestió i seguiment de defectes',
            'Anàlisi de causa arrel',
            'Validació post-desplegament',
            'Proves en entorns productius i preproductius',
            'Qualitat i mantenibilitat del codi',
          ],
        },
        {
          group: 'Desenvolupament backend',
          items: [
            'Java',
            'Java EE',
            'Desenvolupament de microservicis',
            'Disseny i desenvolupament de servicis backend',
            'Refactorització i optimització de codi',
            'Desenvolupament d’API i servicis web',
            'Maven',
            'MySQL',
            'Programació orientada a objectes (POO)',
            'Proves unitàries de backend',
            'JUnit',
            'Mockito',
          ],
        },
        {
          group: 'Desenvolupament frontend',
          items: [
            'JavaScript',
            'Angular',
            'Node.js',
            'HTML5',
            'CSS3',
            'Desenvolupament d’aplicacions web',
            'Proves unitàries de frontend',
            'Jasmine',
            'Karma',
          ],
        },
        {
          group: 'Qualitat de codi i monitoratge',
          items: [
            'SonarQube',
            'Kibana',
            'Anàlisi de logs',
            'Monitoratge d’aplicacions',
            'Anàlisi de mètriques de rendiment',
            'Detecció i diagnòstic d’incidències',
          ],
        },
        {
          group: 'Metodologia i documentació',
          items: ['Metodologies àgils', 'Scrum / Kanban', 'Jira', 'Documentació funcional i tècnica'],
        },
      ],
    },
    {
      ...stages.iti,
      location: ['València'],
      period: '2021 – actualitat',
      role: 'Software QA Automation & Functional Engineer',
      place: 'ITI, Institut Tecnològic d’Informàtica',
      text: 'Estratègia de qualitat i automatització de proves d’API i d’interfície amb Playwright, Cypress i Wakamiti, integrades en CI/CD. Proves funcionals, de regressió i d’UX/UI, validació de requisits amb negoci i usuaris finals, i disseny de proves assistit per IA generativa, en projectes industrials i d’investigació.',
      highlights: [
        'Estratègia d’assegurament de la qualitat',
        'Automatització de proves d’API',
        'Playwright',
        'Wakamiti',
        'Proves assistides per intel·ligència artificial',
      ],
      tools: [
        {
          group: 'Competències principals',
          items: [
            'Estratègia d’assegurament de la qualitat',
            'Planificació i disseny de proves',
            'Proves basades en riscos',
            'Proves funcionals i no funcionals',
            'Proves exploratòries',
            'Proves de regressió',
            'Proves de fum (smoke) i sanity',
            'Proves end-to-end (E2E)',
            'Disseny i execució de casos de prova',
            'Gestió de defectes i anàlisi de causa arrel',
            'Agile / Scrum / Kanban',
          ],
        },
        {
          group: 'Automatització de proves',
          items: [
            'Disseny de frameworks d’automatització',
            'Automatització de proves d’interfície (UI)',
            'Automatització de proves d’API',
            'Proves d’integració',
            'Gestió de dades de prova',
            'Page Object Model (POM)',
            'BDD (Behavior-Driven Development)',
            'Estratègia i manteniment de l’automatització',
          ],
        },
        {
          group: 'Intel·ligència artificial',
          items: [
            'Proves assistides per intel·ligència artificial',
            'Disseny de proves mitjançant IA generativa',
            'Generació de casos de prova mitjançant IA',
            'Generació intel·ligent de dades de prova',
          ],
        },
        {
          group: 'Proves d’API i backend',
          items: [
            'Proves d’API REST',
            'API Contract Testing',
            'HTTP i servicis web',
            'Proves d’autenticació i autorització',
            'Validació de SQL i bases de dades',
          ],
        },
        {
          group: 'Programació i scripting',
          items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'Bash / scripts de shell'],
        },
        {
          group: 'Ferramentes d’automatització i proves',
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
          group: 'CI/CD i DevOps',
          items: [
            'Git',
            'GitHub Actions',
            'GitLab CI/CD',
            'Jenkins',
            'Docker',
            'Proves contínues',
            'Pipelines de proves automatitzades',
            'Validació de builds i releases',
          ],
        },
        { group: 'Bases de dades i observabilitat', items: ['MySQL', 'Grafana', 'Kibana'] },
        {
          group: 'Gestió de proves i col·laboració',
          items: ['Jira', 'Xray', 'TestRail', 'Confluence', 'GitHub / GitLab', 'Col·laboració en equips àgils'],
        },
        {
          group: 'Competències de perfil sènior',
          items: [
            'Enginyeria de qualitat',
            'Lideratge tècnic',
            'Mentoria i transferència de coneixement',
            'Col·laboració amb equips multidisciplinaris',
            'Avaluació i mitigació de riscos',
            'Millora contínua',
            'Mètriques i informes de qualitat',
            'Avaluació de la preparació de releases',
            'Comunicació amb les parts interessades',
            'Proves shift-left',
            'Responsabilitat sobre la qualitat',
          ],
        },
      ],
    },
  ],

  education: [
    {
      ...degrees.uji,
      title: 'Grau en\nEnginyeria Informàtica',
      place: 'Universitat Jaume I',
      location: 'Castelló',
    },
    {
      ...degrees.serpis,
      title: 'Tècnic Superior en Desenvolupament\nd’Aplicacions Multiplataforma',
      place: 'IES Serpis',
      location: 'València',
    },
  ],

  certifications: [
    {
      group: 'Programació i proves',
      items: [
        'Cypress: màster en automatització',
        'Selenium amb Java i Cucumber',
        'Python avançat',
        'Java avançat',
        'AngularJS essencial',
        'AngularJS pràctic',
        'Maquetació web',
        'Fonaments de programació i algorítmia',
      ],
    },
    {
      group: 'Metodologies àgils',
      items: [
        'Scrum avançat',
        'Aprén Scrum',
        'Scrum: rols',
        'Scrum: antipatrons',
        'Convertix-te en especialista de metodologies àgils per a programació',
        'Desenvolupament àgil de programari',
        'Introducció a Agile',
        'Fonaments de Kanban per a desenvolupament de programari',
        'Fonaments d’Extreme Programming per a desenvolupament de programari',
        'Fonaments de Lean per a desenvolupament de programari',
        'Aprén a usar la metodologia Lean',
      ],
    },
    {
      group: 'Qualitat i ferramentes',
      items: [
        'Fonaments de Six Sigma',
        'Fonaments de Six Sigma: Green Belt',
        'DevOps essencial',
        'Workshop Introducció a Jira',
      ],
    },
  ],

  languages: [
    { name: 'Castellà', level: 'nativo', flag: 'es' },
    { name: 'Valencià', level: 'nativo', flag: 'va' },
    { name: 'Anglés', level: 'B2', flag: 'en' },
  ],

  contact: {
    title: 'Parlem?',
    text: 'Escriu-me si tens un projecte entre mans, vols que col·laborem o creus que encaixe en el teu equip. Amb un parell de línies de context és suficient.',
    legend: 'De què vols parlar?',
    write: 'Escriure un correu',
    topics: [
      { id: 'proyecto', label: 'Un projecte', subject: 'Un projecte' },
      { id: 'colaboracion', label: 'Una col·laboració', subject: 'Una col·laboració' },
      { id: 'oportunidad', label: 'Una oportunitat laboral', subject: 'Una oportunitat laboral' },
      { id: 'otra', label: 'Una altra cosa', subject: 'Hola, Javier' },
    ],
  },

  notFound: {
    title: 'Pàgina no trobada',
    heading: 'Esta pàgina no existix.',
    text: 'Pot ser que l’enllaç estiga mal escrit o que la pàgina s’haja mogut. Des de l’inici pots arribar a tota la resta.',
    back: 'Tornar a l’inici',
  },
};

export default va;
