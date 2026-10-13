import { site } from '@/utils/content';
import Button from '@/components/Button/Button';
import RunLog from '@/components/RunLog/RunLog';
import styles from './Hero.module.scss';

const lines = [
  <>Que tu software</>,
  <>haga <em>exactamente</em></>,
  <>lo que promete.</>,
];

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <p className={`${styles.meta} ${styles.enter}`} style={{ '--d': '0ms' }}>
          <span>{site.name}</span>
          <span className={styles.sep} aria-hidden="true">/</span>
          <span>{site.role}</span>
          <span className={styles.status}>
            <span className={styles.pulse} aria-hidden="true" />
            {site.availability}
          </span>
        </p>

        <h1 id="hero-title" className={styles.title}>
          {lines.map((line, i) => (
            <span key={i} className={styles.line}>
              <span className={styles.lineInner} style={{ '--d': `${120 + i * 90}ms` }}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className={styles.body}>
          <p className={`${styles.lead} ${styles.enter}`} style={{ '--d': '480ms' }}>
            Calidad de software para equipos que necesitan desplegar con confianza y para
            particulares que quieren lanzar sin sorpresas: estrategia de QA, automatización de
            pruebas y revisiones antes de publicar.
          </p>

          <div className={`${styles.ctas} ${styles.enter}`} style={{ '--d': '600ms' }}>
            <Button href="#contacto-empresas">Soy una empresa</Button>
            <Button href="#contacto-particulares" variant="ghost">
              Soy particular
            </Button>
          </div>
        </div>

        <div className={`${styles.log} ${styles.enter}`} style={{ '--d': '700ms' }}>
          <RunLog />
        </div>

        <div className={styles.ruler} aria-hidden="true">
          <span className={styles.ticks} />
          <span className={styles.scroll}>§01 ↓</span>
        </div>
      </div>
    </section>
  );
}
