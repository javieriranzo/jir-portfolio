// Contenido editable del portfolio.
// Todo lo marcado con TODO debe sustituirse por datos reales antes de publicar.

export const site = {
  name: 'Javier Iranzo',
  role: 'Senior QA Engineer',
  title: 'Javier Iranzo — Senior QA Engineer',
  description:
    'Calidad de software para empresas y particulares: estrategia de QA, automatización de pruebas y revisiones antes de lanzar.',
  email: 'contacto@example.com', // TODO: email real
  linkedin: 'https://www.linkedin.com/', // TODO: URL de perfil
  availability: 'Disponible para nuevos proyectos', // TODO: ajustar según disponibilidad
};

export const nav = [
  { href: '#problemas', label: 'Problemas' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#metodo', label: 'Método' },
  { href: '#casos', label: 'Casos' },
  { href: '#contacto', label: 'Contacto' },
];

// Comprobaciones ilustrativas del hero (no son resultados reales).
export const runLog = [
  { suite: 'checkout', name: 'el pago rechazado muestra un error comprensible' },
  { suite: 'auth', name: 'la sesión caduca sin perder el formulario' },
  { suite: 'api', name: 'el contrato v2 sigue siendo compatible con v1' },
  { suite: 'a11y', name: 'el menú se puede usar solo con teclado' },
  { suite: 'release', name: 'la regresión completa corre en cada PR' },
];

export const problems = [
  {
    fail: 'Cada release rompe algo que ya funcionaba',
    fix: 'Una suite de regresión automatizada que se ejecuta antes de cada despliegue, no después.',
  },
  {
    fail: 'Las pruebas manuales frenan el ritmo de entrega',
    fix: 'Automatizar lo repetitivo y dejar las pruebas exploratorias para lo que de verdad aporta.',
  },
  {
    fail: 'Hay tests, pero nadie se fía de ellos',
    fix: 'Tests estables, legibles y con fallos que explican qué se ha roto y por qué.',
  },
  {
    fail: 'Vas a lanzar y no sabes qué puede fallar',
    fix: 'Una revisión previa al lanzamiento con un informe claro y priorizado por riesgo.',
  },
];

export const services = {
  empresas: {
    label: 'Para empresas',
    intro: 'Equipos de producto que necesitan entregar más rápido sin perder confianza en cada despliegue.',
    items: [
      {
        title: 'Estrategia de QA',
        text: 'Análisis del proceso actual, riesgos y una hoja de ruta de calidad realista para tu equipo.',
      },
      {
        title: 'Automatización de pruebas',
        text: 'Pruebas E2E, de API y de regresión mantenibles, integradas en tu pipeline de CI/CD.',
      },
      {
        title: 'QA integrado en el equipo',
        text: 'Acompañamiento continuo dentro de tus sprints: criterios de aceptación, pruebas y revisión.',
      },
    ],
    cta: { label: 'Hablemos de tu equipo', href: '#contacto-empresas' },
  },
  particulares: {
    label: 'Para particulares',
    intro: 'Personas con una web, una app o un producto propio que quieren lanzarlo con tranquilidad.',
    items: [
      {
        title: 'Revisión antes de lanzar',
        text: 'Pruebo tu web o app como lo haría un usuario exigente y te entrego un informe accionable.',
      },
      {
        title: 'Auditoría puntual',
        text: 'Un diagnóstico acotado de un flujo concreto: pagos, registro, formularios o rendimiento percibido.',
      },
      {
        title: 'Mentoría en QA',
        text: 'Sesiones para aprender testing y automatización con casos prácticos de tu propio proyecto.',
      },
    ],
    cta: { label: 'Cuéntame tu proyecto', href: '#contacto-particulares' },
  },
};

export const process = [
  { id: 'diagnostico', title: 'Diagnóstico', text: 'Entiendo el producto, el equipo y dónde está el riesgo real.' },
  { id: 'estrategia', title: 'Estrategia', text: 'Qué probar, cómo y en qué orden. Por escrito y priorizado.' },
  { id: 'ejecucion', title: 'Ejecución', text: 'Pruebas y automatización integradas en vuestro flujo de trabajo.' },
  { id: 'traspaso', title: 'Traspaso', text: 'Documentación y formación para que la calidad no dependa de mí.' },
];

// TODO: sustituir por proyectos reales. Mientras `draft` sea true se muestran como borrador.
export const cases = [
  {
    draft: true,
    sector: 'Sector · por definir',
    title: 'Título del caso de estudio',
    context: 'Contexto del proyecto y del equipo.',
    challenge: 'Problema de calidad que había que resolver.',
    approach: 'Enfoque y decisiones técnicas tomadas.',
    outcome: 'Resultado verificable. Sin cifras que no se puedan respaldar.',
    tags: ['etiqueta', 'etiqueta'],
  },
  {
    draft: true,
    sector: 'Sector · por definir',
    title: 'Título del caso de estudio',
    context: 'Contexto del proyecto y del equipo.',
    challenge: 'Problema de calidad que había que resolver.',
    approach: 'Enfoque y decisiones técnicas tomadas.',
    outcome: 'Resultado verificable. Sin cifras que no se puedan respaldar.',
    tags: ['etiqueta', 'etiqueta'],
  },
  {
    draft: true,
    sector: 'Sector · por definir',
    title: 'Título del caso de estudio',
    context: 'Contexto del proyecto y del equipo.',
    challenge: 'Problema de calidad que había que resolver.',
    approach: 'Enfoque y decisiones técnicas tomadas.',
    outcome: 'Resultado verificable. Sin cifras que no se puedan respaldar.',
    tags: ['etiqueta', 'etiqueta'],
  },
];

export const contact = {
  empresas: {
    id: 'contacto-empresas',
    label: 'Empresas',
    title: 'Mejorar la calidad de tu producto',
    text: 'Cuéntame el contexto de tu equipo y qué te preocupa. Te respondo para concertar una primera conversación.',
    cta: 'Escribir como empresa',
    subject: 'Consulta de empresa — QA',
  },
  particulares: {
    id: 'contacto-particulares',
    label: 'Particulares',
    title: 'Revisar tu web o app',
    text: 'Envíame el enlace y qué te gustaría comprobar. Te digo cómo puedo ayudarte y en qué plazo.',
    cta: 'Escribir como particular',
    subject: 'Revisión de proyecto personal',
  },
};
