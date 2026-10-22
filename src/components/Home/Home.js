import { site } from '@/content/shared';
import { useContent, useLocale } from '@/utils/i18n';
import Seo from '@/components/Seo/Seo';
import Layout from '@/components/Layout/Layout';
import BrandIcon from '@/components/BrandIcon/BrandIcon';
import Copy, { isPending } from '@/components/Copy/Copy';
import Flag from '@/components/Flag/Flag';
import Frame from '@/components/Frame/Frame';
import Timeline from '@/components/Timeline/Timeline';
import styles from '@/styles/Home.module.scss';

// Contacto en botones redondos solo con el icono de cada aplicación, en su color de marca
// (`bg`); el nombre va oculto para lectores de pantalla y como texto emergente.
const contactChips = [
  { icon: 'email', label: `Email: ${site.email}`, href: `mailto:${site.email}`, bg: '#6d4aff' },
  { icon: 'whatsapp', label: `WhatsApp: ${site.phone}`, href: site.whatsapp, bg: '#25d366' },
  { icon: 'linkedin', label: 'LinkedIn', href: site.linkedin, bg: '#0a66c2' },
  { icon: 'github', label: 'GitHub', href: site.github, bg: '#181717' },
];

// Todo el portfolio en una sola página: presentación y contacto, trayectoria, formación
// y proyectos. La navegación salta a cada sección por su id. La misma página sirve para los
// tres idiomas (pages/index.js, pages/va y pages/en): el texto sale del idioma de la ruta.
export default function Home() {
  const locale = useLocale();
  const { meta, ui, sections, about, projectStatus, projects, education, certifications, languages } = useContent();
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    alternateName: [site.fullName, site.initials],
    jobTitle: meta.jobTitle,
    email: `mailto:${site.email}`,
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universitat Jaume I' },
    knowsLanguage: ['es', 'ca', 'en'],
    ...(site.url && { url: `${site.url.replace(/\/$/, '')}${locale.path}` }),
    sameAs: [site.linkedin, site.github],
  };

  return (
    <Layout>
      <Seo path={locale.path} jsonLd={person} />
      <div className={styles.page}>
        <header className={styles.intro}>
          <h1 className={styles.title}>{about.lead}</h1>
          <ul className={styles.chips} aria-label={ui.contactLabel}>
            {contactChips.map(({ icon, label, href, bg }) => (
              <li key={icon} style={{ '--brand': bg }}>
                <a
                  className={styles.chip}
                  href={href}
                  title={label}
                  {...(href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
                >
                  <BrandIcon name={icon} size={16} color="#fff" />
                  <span className="visually-hidden">{label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.bio}>
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>
                <Copy value={paragraph} />
              </p>
            ))}
          </div>
          <a className={styles.cv} href={site.cv} download>
            <PdfIcon />
            {ui.downloadCv}
          </a>
          <Frame image={about.photo} placeholder={ui.photoPending} ratio="4 / 5" priority className={styles.photo} />
        </header>

        <section id={sections.experience.id} className={styles.section} aria-labelledby="experience-title">
          <SectionHead icon="💼" id="experience-title" title={sections.experience.title} />
          <Timeline />
        </section>

        <section
          id={sections.education.id}
          className={`${styles.section} ${styles.band}`}
          aria-labelledby="education-title"
        >
          <SectionHead icon="📚" id="education-title" title={sections.education.title} />
          <ul className={styles.degrees}>
            {education.map((item) => (
              // Mismo pliego que las tarjetas de experiencia.
              <li key={item.title} className={styles.degree}>
                <span className={styles.marks} aria-hidden="true">
                  <i /><i /><i /><i />
                </span>
                <p className={styles.location}>
                  <span aria-hidden="true">📍</span>
                  <span className="visually-hidden">{ui.location}: </span>
                  {item.location}
                </p>
                <p className={styles.years}>
                  <span className="visually-hidden">{ui.period}: {item.period}</span>
                  {item.period.split(/\s*–\s*/).map((year, i) => (
                    <span key={year} aria-hidden="true">
                      {i > 0 && <i className={styles.yearsLine} />}
                      {year}
                    </span>
                  ))}
                </p>
                <h3 className={styles.degreeTitle}>{item.title}</h3>
                <p className={styles.degreePlace}>
                  {item.logo && (
                    <img
                      className={`${styles.logo} ${item.logo.width / item.logo.height < 3 ? styles.logoTall : ''}`}
                      src={item.logo.src}
                      alt=""
                      width={item.logo.width}
                      height={item.logo.height}
                      loading="lazy"
                    />
                  )}
                  <span>{item.place}</span>
                </p>
              </li>
            ))}
          </ul>
          <div className={styles.extras}>
            <div>
              <h3 className={styles.subTitle}>{ui.courses}</h3>
              {/* Una cinta por tema que se desliza sola, como un rótulo de noticias. La copia
                  duplicada solo sirve para que el bucle no tenga corte. */}
              <div className={styles.tickers}>
                {certifications.map(({ group, items }, i) => (
                  <div key={group} className={styles.ticker}>
                    <h4 className={styles.tickerName}>{group}</h4>
                    <div className={styles.tickerWindow}>
                      <div className={`${styles.tickerTrack} ${i % 2 ? styles.reverse : ''}`}>
                        <ul className={styles.tickerList}>
                          {items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                          {/* Las cintas cortas se repiten para llenar el ancho sin dejar hueco. */}
                          {items.length < 8 &&
                            items.map((item) => (
                              <li key={`${item}-bis`} aria-hidden="true">
                                {item}
                              </li>
                            ))}
                        </ul>
                        <ul className={styles.tickerList} aria-hidden="true">
                          {[...items, ...(items.length < 8 ? items : [])].map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className={styles.subTitle}>{ui.languages}</h3>
              {/* Un pliego pequeño por idioma, con una barra que se llena según el nivel. */}
              <ul className={styles.languages}>
                {languages.map(({ name, level, flag }) => (
                  <li key={name} className={styles.language}>
                    <span className={styles.marks} aria-hidden="true">
                      <i /><i /><i /><i />
                    </span>
                    <Flag code={flag} height={28} className={styles.languageIcon} />
                    <p className={styles.level}>
                      <span className="visually-hidden">{ui.level}: </span>
                      {level === 'nativo' ? ui.native : level}
                    </p>
                    <p className={styles.languageName}>{name}</p>
                    <span className={styles.levelBar} style={{ '--fill': levelFill[level] }} aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id={sections.projects.id}
          className={`${styles.section} ${styles.band} ${styles.butter}`}
          aria-labelledby="projects-title"
        >
          <SectionHead icon="🧪" id="projects-title" title={sections.projects.title} />
          {/* Una tarjeta por proyecto, con el mismo pliego que las de formación. */}
          <ul className={styles.suites}>
            {projects.map((item) => (
              <li key={item.title} className={styles.suite}>
                <span className={styles.marks} aria-hidden="true">
                  <i /><i /><i /><i />
                </span>
                <p className={styles.status} data-status={isPending(item.status) ? undefined : item.status}>
                  <span className="visually-hidden">{ui.status}: </span>
                  {isPending(item.status) ? (
                    <Copy value={item.status} />
                  ) : (
                    <>
                      <span aria-hidden="true">{projectStatus[item.status].icon}</span>
                      {projectStatus[item.status].label}
                    </>
                  )}
                </p>
                <h3 className={styles.suiteTitle}>{item.title}</h3>
                <p className={styles.suiteText}>
                  <Copy value={item.text} />
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}

// Icono de documento PDF: hoja con la esquina doblada y la etiqueta roja.
function PdfIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path d="M6 2h8l5 5v15H6z" fill="#fff" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 2v5h5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="2" y="12" width="15" height="7" rx="1" fill="#d93025" />
      <text x="9.5" y="17.6" textAnchor="middle" fontSize="5.6" fontWeight="700" fontFamily="Arial, sans-serif" fill="#fff">
        PDF
      </text>
    </svg>
  );
}

// Cuánto se llena la barra de cada idioma: nativo, entero; los niveles del MCER, por sextos.
const levelFill = { A1: 1 / 6, A2: 2 / 6, B1: 3 / 6, B2: 4 / 6, C1: 5 / 6, C2: 1, nativo: 1 };

// Cabecera de sección: emoji y título.
function SectionHead({ icon, id, title }) {
  return (
    <header className={styles.sectionHead}>
      <span className={styles.sectionIcon} aria-hidden="true">
        {icon}
      </span>
      <h2 id={id} className={styles.sectionTitle}>{title}</h2>
    </header>
  );
}
