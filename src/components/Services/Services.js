import { services } from '@/utils/content';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Button from '@/components/Button/Button';
import styles from './Services.module.scss';

function Track({ track, tone }) {
  return (
    <article className={`${styles.track} ${styles[tone]}`} data-reveal>
      <header className={styles.trackHead}>
        <h3 className={styles.trackTitle}>{track.label}</h3>
        <p className={styles.trackIntro}>{track.intro}</p>
      </header>
      <ol className={styles.items}>
        {track.items.map((item, i) => (
          <li key={item.title} className={styles.item}>
            <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h4 className={styles.itemTitle}>{item.title}</h4>
              <p className={styles.itemText}>{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <Button href={track.cta.href} variant={tone === 'primary' ? 'ink' : 'outlineInk'}>
        {track.cta.label}
      </Button>
    </article>
  );
}

export default function Services() {
  return (
    <section id="servicios" className={styles.section} aria-labelledby="servicios-title">
      <div className={styles.inner}>
        <SectionHeader
          tone="paper"
          index="02"
          label="Servicios"
          id="servicios-title"
          title={<>Dos formas de <em>trabajar</em> juntos</>}
          intro="El mismo rigor, adaptado a la escala: equipos con producto en marcha o personas con un proyecto propio."
        />
        <div className={styles.tracks}>
          <Track track={services.empresas} tone="primary" />
          <Track track={services.particulares} tone="secondary" />
        </div>
      </div>
    </section>
  );
}
