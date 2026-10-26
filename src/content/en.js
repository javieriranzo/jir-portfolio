// English content, with the same shape as es.js. British spelling.
import { degrees, stages } from './shared';

const en = {
  meta: {
    title: 'Javier Iranzo (FJIR), QA engineer and developer',
    description:
      'Portfolio of Javier Iranzo (FJIR): software quality engineer with a background as a full stack developer. API and web test automation, functional testing and requirements.',
    jobTitle: 'Software QA Engineer',
  },

  ui: {
    skipLink: 'Skip to content',
    navLabel: 'Main',
    home: 'home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Language',
    contactLabel: 'Contact details',
    downloadCv: 'Download full CV (PDF)',
    photoPending: 'Photo pending',
    pending: 'Pending',
    location: 'Location',
    period: 'Period',
    status: 'Status',
    level: 'Level',
    native: 'Native',
    courses: 'Courses and certifications',
    languages: 'Languages',
    highlights: 'Key skills',
    tools: 'Tools',
    allSkills: (count) => `See all ${count} skills`,
    backToTop: 'Back to top',
  },

  sections: {
    experience: { id: 'experience', nav: 'Experience', title: 'Professional experience' },
    education: { id: 'education', nav: 'Education', title: 'Education and certifications' },
    projects: { id: 'projects', nav: 'Projects', title: 'Projects' },
    contact: { id: 'contact', nav: 'Contact' },
  },

  about: {
    lead: 'Hi, I’m Javier.',
    paragraphs: [
      'I’m a computer engineer specialising in QA (software quality assurance) and full stack development.',
      'I currently focus on API and web application test automation, working to improve software quality and make testing processes more efficient and reliable. In this area I have also started leading teams, helping to organise the work and improve automation practices.',
      'I also have experience in functional testing and requirements validation, working with the business side and end users to make sure applications meet the needs and expectations of each project.',
      'Throughout my career I have worked on banking, industrial, research and public administration projects, always in agile environments and in close contact with development teams. This has given me insight into different ways of working and an overall view of the development process, with a particular focus on software quality.',
    ],
    photo: null,
  },

  projectStatus: {
    idea: { icon: '💡', label: 'Idea' },
    development: { icon: '🛠️', label: 'In development' },
    production: { icon: '🚀', label: 'In production' },
    maintenance: { icon: '🔧', label: 'In maintenance' },
    paused: { icon: '⏸️', label: 'Paused' },
    archived: { icon: '📦', label: 'Archived' },
  },

  projects: [
    {
      title: 'Samuel Reina website',
      status: 'development',
      text: 'Official website of singer and voice actor Samuel Reina, a showcase for his music and artistic career.',
    },
    {
      title: 'Invoicely App',
      status: 'development',
      text: 'Management app for small businesses covering the day-to-day essentials: products, customers and invoicing.',
    },
    {
      title: 'FJIR Portfolio',
      status: 'development',
      text: 'The website you are looking at: my personal portfolio, bringing together my career, education and projects on a single page.',
    },
    {
      title: 'Wedding RSVP forms',
      status: 'maintenance',
      text: 'Web app that lets each couple create their own RSVP form, fully customisable and with integrations so that no wedding detail slips through the cracks.',
    },
    {
      title: 'Valentín Bou Franch website',
      status: 'production',
      text: 'Academic website for a professor of Public International Law and International Relations, bringing together his education, professional career and research.',
    },
    {
      title: 'María Carro Pitarch website',
      status: 'production',
      text: 'Academic website for an assistant professor at the “Adolfo Miaja de la Muela” Department of International Law, specialising in International and European Union Law.',
    },
    {
      title: 'Bukowski Craft Beer Bar',
      status: 'idea',
      text: 'End-to-end project for a craft beer bar: an informative website with its story, location and online bookings, plus an interactive beer board where bar staff update the beers on offer and their prices in real time.',
    },
    {
      title: 'Mr.Ops',
      status: 'paused',
      text: 'End-to-end project management tool powered by AI agents: documentation, deliveries, sprints, epics, code management and, above all, testing.',
    },
  ],

  experience: [
    {
      ...stages.gva,
      location: ['Valencia'],
      period: '2013',
      role: 'Junior Application Developer, internship',
      place: 'Generalitat Valenciana',
      text: 'Migration of legal databases from Microsoft Access to open-source software using SQL, in a team of six. Development in Java and C#, Bash scripts to automate internal processes, and technical support and incident resolution for public administration users.',
      highlights: ['Database migration', 'SQL', 'Java', 'C#', 'User technical support'],
      tools: [
        { group: 'Databases', items: ['SQL', 'Microsoft Access', 'Database migration'] },
        { group: 'Programming and scripting', items: ['Java', 'C#', 'Bash Scripting'] },
        { group: 'Systems and support', items: ['User technical support', 'Incident resolution'] },
        {
          group: 'Professional skills',
          items: ['Teamwork', 'Problem solving', 'Support for public administration users'],
        },
      ],
    },
    {
      ...stages.freelance,
      location: ['Valencia'],
      period: '2014 – 2018',
      role: 'Junior Full Stack Developer',
      place: 'Freelance',
      text: 'Bespoke solutions for clients, from requirements analysis to production release. Websites built with CMSs such as WordPress and PrestaShop with custom themes and features, responsive web interfaces with Angular and Node.js, desktop applications with databases and Android apps.',
      highlights: [
        'CMS website development',
        'WordPress',
        'Angular',
        'Responsive web design',
        'Client requirements analysis',
      ],
      tools: [
        {
          group: 'Web development',
          items: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'Angular',
            'Web interface design and development',
            'Responsive web design',
            'CMS integration',
            'Database integration',
          ],
        },
        {
          group: 'CMS and websites',
          items: [
            'CMS website development',
            'Theme and feature customisation',
            'Web content management',
            'Website maintenance and updates',
            'Releasing web applications to production',
          ],
        },
        {
          group: 'Client work',
          items: [
            'Client requirements analysis',
            'Gathering and defining needs',
            'Planning and developing bespoke solutions',
          ],
        },
        {
          group: 'Technologies and tools',
          items: ['Java', 'Node.js', 'MySQL', 'Bootstrap', 'WordPress', 'PrestaShop', 'Android Studio', 'Trello'],
        },
      ],
    },
    {
      ...stages.ntt,
      location: ['Valencia', 'Barcelona', 'Alicante'],
      period: '2018 – 2021',
      role: 'Full Stack Developer & Software QA Engineer',
      place: 'NTT DATA Europe & Latam',
      text: 'Development of Java microservices and APIs and Angular web applications for international banking and the European Patent Office. Unit, functional, integration and acceptance testing, validation of requirements and user stories, and code quality monitoring with SonarQube. Deployment validation and production on-call duty, including incident diagnosis.',
      highlights: ['Java', 'Microservices development', 'Angular', 'Integration testing', 'SonarQube'],
      tools: [
        {
          group: 'Quality and testing',
          items: [
            'Software quality assurance (QA)',
            'Test case analysis and design',
            'Functional testing',
            'Unit testing',
            'Regression testing',
            'Integration testing',
            'Acceptance testing',
            'Usability and user experience testing (UX/UI)',
            'Functional requirements validation',
            'User story analysis',
            'Defect management and tracking',
            'Root cause analysis',
            'Post-deployment validation',
            'Testing in production and pre-production environments',
            'Code quality and maintainability',
          ],
        },
        {
          group: 'Backend development',
          items: [
            'Java',
            'Java EE',
            'Microservices development',
            'Backend service design and development',
            'Code refactoring and optimisation',
            'API and web service development',
            'Maven',
            'MySQL',
            'Object-oriented programming (OOP)',
            'Backend unit testing',
            'JUnit',
            'Mockito',
          ],
        },
        {
          group: 'Frontend development',
          items: [
            'JavaScript',
            'Angular',
            'Node.js',
            'HTML5',
            'CSS3',
            'Web application development',
            'Frontend unit testing',
            'Jasmine',
            'Karma',
          ],
        },
        {
          group: 'Code quality and monitoring',
          items: [
            'SonarQube',
            'Kibana',
            'Log analysis',
            'Application monitoring',
            'Performance metrics analysis',
            'Incident detection and diagnosis',
          ],
        },
        {
          group: 'Methodology and documentation',
          items: ['Agile methodologies', 'Scrum / Kanban', 'Jira', 'Functional and technical documentation'],
        },
      ],
    },
    {
      ...stages.iti,
      location: ['Valencia'],
      period: '2021 – present',
      role: 'Software QA Automation & Functional Engineer',
      place: 'ITI, Instituto Tecnológico de Informática',
      text: 'Quality strategy and API and UI test automation with Playwright, Cypress and Wakamiti, integrated into CI/CD. Functional, regression and UX/UI testing, requirements validation with the business and end users, and test design assisted by generative AI, on industrial and research projects.',
      highlights: ['Quality assurance strategy', 'API test automation', 'Playwright', 'Wakamiti', 'AI-assisted testing'],
      tools: [
        {
          group: 'Core skills',
          items: [
            'Quality assurance strategy',
            'Test planning and design',
            'Risk-based testing',
            'Functional and non-functional testing',
            'Exploratory testing',
            'Regression testing',
            'Smoke and sanity testing',
            'End-to-end (E2E) testing',
            'Test case design and execution',
            'Defect management and root cause analysis',
            'Agile / Scrum / Kanban',
          ],
        },
        {
          group: 'Test automation',
          items: [
            'Automation framework design',
            'UI test automation',
            'API test automation',
            'Integration testing',
            'Test data management',
            'Page Object Model (POM)',
            'BDD (Behavior-Driven Development)',
            'Automation strategy and maintenance',
          ],
        },
        {
          group: 'Artificial intelligence',
          items: [
            'AI-assisted testing',
            'Test design with generative AI',
            'AI-driven test case generation',
            'Smart test data generation',
          ],
        },
        {
          group: 'API and backend testing',
          items: [
            'REST API testing',
            'API Contract Testing',
            'HTTP and web services',
            'Authentication and authorisation testing',
            'SQL and database validation',
          ],
        },
        {
          group: 'Programming and scripting',
          items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'Bash / shell scripting'],
        },
        {
          group: 'Automation and testing tools',
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
          group: 'CI/CD and DevOps',
          items: [
            'Git',
            'GitHub Actions',
            'GitLab CI/CD',
            'Jenkins',
            'Docker',
            'Continuous testing',
            'Automated test pipelines',
            'Build and release validation',
          ],
        },
        { group: 'Databases and observability', items: ['MySQL', 'Grafana', 'Kibana'] },
        {
          group: 'Test management and collaboration',
          items: ['Jira', 'Xray', 'TestRail', 'Confluence', 'GitHub / GitLab', 'Collaboration in agile teams'],
        },
        {
          group: 'Senior skills',
          items: [
            'Quality engineering',
            'Technical leadership',
            'Mentoring and knowledge transfer',
            'Collaboration with cross-functional teams',
            'Risk assessment and mitigation',
            'Continuous improvement',
            'Quality metrics and reporting',
            'Release readiness assessment',
            'Stakeholder communication',
            'Shift-left testing',
            'Quality ownership',
          ],
        },
      ],
    },
  ],

  education: [
    {
      ...degrees.uji,
      title: 'Bachelor’s Degree in\nComputer Engineering',
      place: 'Universitat Jaume I',
      location: 'Castellón',
    },
    {
      ...degrees.serpis,
      title: 'Higher Technician in Multiplatform\nApplication Development',
      place: 'IES Serpis',
      location: 'Valencia',
    },
  ],

  certifications: [
    {
      group: 'Programming and testing',
      items: [
        'Cypress: automation masterclass',
        'Selenium with Java and Cucumber',
        'Advanced Python',
        'Advanced Java',
        'AngularJS essentials',
        'Practical AngularJS',
        'Web layout',
        'Programming and algorithm fundamentals',
      ],
    },
    {
      group: 'Agile methodologies',
      items: [
        'Advanced Scrum',
        'Learn Scrum',
        'Scrum: roles',
        'Scrum: anti-patterns',
        'Become an agile methodologies specialist for programming',
        'Agile software development',
        'Introduction to Agile',
        'Kanban fundamentals for software development',
        'Extreme Programming fundamentals for software development',
        'Lean fundamentals for software development',
        'Learn to use the Lean methodology',
      ],
    },
    {
      group: 'Quality and tools',
      items: [
        'Six Sigma fundamentals',
        'Six Sigma fundamentals: Green Belt',
        'DevOps essentials',
        'Introduction to Jira workshop',
      ],
    },
  ],

  languages: [
    { name: 'Spanish', level: 'nativo', flag: 'es' },
    { name: 'Valencian', level: 'nativo', flag: 'va' },
    { name: 'English', level: 'B2', flag: 'en' },
  ],

  contact: {
    title: 'Shall we talk?',
    text: 'Write to me if you have a project in hand, would like to collaborate or think I could be a good fit for your team. A couple of lines of context is enough.',
    legend: 'What would you like to talk about?',
    write: 'Write an email',
    topics: [
      { id: 'proyecto', label: 'A project', subject: 'A project' },
      { id: 'colaboracion', label: 'A collaboration', subject: 'A collaboration' },
      { id: 'oportunidad', label: 'A job opportunity', subject: 'A job opportunity' },
      { id: 'otra', label: 'Something else', subject: 'Hello, Javier' },
    ],
  },

  notFound: {
    title: 'Page not found',
    heading: 'This page does not exist.',
    text: 'The link may be mistyped or the page may have moved. From the home page you can reach everything else.',
    back: 'Back to home',
  },
};

export default en;
