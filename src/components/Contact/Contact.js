import { contact, site } from '@/utils/content';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Button from '@/components/Button/Button';
import styles from './Contact.module.scss';

function mailto(subject) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

function Path({ path, variant, delay }) {
  return (
    <article
      id={path.id}
      className={`${styles.path} ${styles[variant]}`}
      aria-labelledby={`${path.id}-title`}
      data-reveal
      style={{ '--reveal-delay': delay }}
    >
      <p className={styles.label}>{path.label}</p>
      <h3 id={`${path.id}-title`} className={styles.title}>
        {path.title}
      </h3>
      <p className={styles.text}>{path.text}</p>
      <Button href={mailto(path.subject)} variant={variant === 'lime' ? 'ink' : 'primary'}>
        {path.cta}
      </Button>
    </article>
  );
}

export default function Contact() {
  return (
    <section id="contacto" className={styles.section} aria-labelledby="contacto-title">
      <div className={styles.inner}>
        <SectionHeader
          index="05"
          label="Contacto"
          id="contacto-title"
          title={<>¿Lo dejamos <em>en verde</em>?</>}
          intro="Elige el camino que mejor encaja contigo. Ambos llegan a mi bandeja de entrada, con el contexto adecuado."
        />

        <div className={styles.paths}>
          <Path path={contact.empresas} variant="lime" delay="0ms" />
          <Path path={contact.particulares} variant="outline" delay="100ms" />
        </div>

        <p className={styles.alt} data-reveal>
          También en{' '}
          <a href={site.linkedin} className={styles.link} target="_blank" rel="noopener noreferrer">
            LinkedIn
            <span className="visually-hidden"> (se abre en una pestaña nueva)</span>
          </a>
          {' '}o directamente en{' '}
          <a href={`mailto:${site.email}`} className={styles.link}>
            {site.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
