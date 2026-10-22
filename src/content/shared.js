// Datos del portfolio que no cambian con el idioma: contacto, logotipos, colores y fechas.
// Los textos de cada idioma están en es.js, va.js y en.js y se apoyan en esto.
// Todo lo que pasa por `pending()` se muestra marcado como «pendiente» en la web hasta que
// se sustituya por un texto real. No hay datos inventados.

export const pending = (hint) => ({ pending: hint });

export const site = {
  name: 'Javier Iranzo',
  fullName: 'Francisco Javier Iranzo Rebenaque',
  initials: 'FJIR',
  url: '', // TODO: dominio definitivo (p. ej. https://fjir.dev) para canonical, hreflang y Open Graph
  email: 'javieriranzo@proton.me',
  phone: '+34 666 305 652',
  whatsapp: 'https://wa.me/34666305652',
  cv: '/cv/javier-iranzo-cv.pdf', // TODO: subir el PDF del CV a public/cv/
  linkedin: 'https://www.linkedin.com/in/fjir',
  github: 'https://github.com/javieriranzo',
};

// Cada etapa de la trayectoria, en orden cronológico. Fechas del CV en formato 'AAAA-MM';
// `end: null` es la actualidad. `logo` (opcional) es el logotipo oficial en /public/logos.
// `brand` (opcional) es el color de la empresa, { bg, fg }, para el botón de competencias;
// sin él, el botón va en tinta.
export const stages = {
  gva: {
    start: '2013-03',
    end: '2013-06',
    logo: { src: '/logos/gva.svg', alt: 'Generalitat Valenciana', width: 494, height: 236 },
    brand: { bg: '#c80f2e', fg: '#fff' },
  },
  freelance: {
    start: '2014-06',
    end: '2018-01',
    brand: { bg: 'var(--lime)', fg: 'var(--ink)' }, // sin empresa: el lima, la marca propia
  },
  ntt: {
    start: '2018-01',
    end: '2021-04',
    logo: { src: '/logos/ntt-data.svg', alt: 'NTT DATA', width: 340, height: 70 },
    brand: { bg: '#0072bc', fg: '#fff' },
  },
  iti: {
    start: '2021-04',
    end: null,
    logo: { src: '/logos/iti.svg', alt: 'ITI', width: 444, height: 86 },
    brand: { bg: '#ea8215', fg: 'var(--ink)' },
  },
};

export const degrees = {
  uji: { period: '2014 – 2018', logo: { src: '/logos/uji.png', width: 626, height: 104 } },
  serpis: { period: '2011 – 2013', logo: { src: '/logos/ies-serpis.png', width: 158, height: 150 } },
};
