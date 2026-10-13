import { problems } from '@/utils/content';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import styles from './Problems.module.scss';

export default function Problems() {
  return (
    <section id="problemas" className={styles.section} aria-labelledby="problemas-title">
      <div className={styles.inner}>
        <SectionHeader
          index="01"
          label="Lo que falla hoy"
          id="problemas-title"
          title={<>Problemas que <em>resuelvo</em></>}
          intro="Si alguno de estos te suena, no es mala suerte: es un proceso de calidad que se puede diseñar."
        />

        <ol className={styles.list}>
          {problems.map((problem, i) => (
            <li
              key={problem.fail}
              className={styles.item}
              data-reveal
              style={{ '--reveal-delay': `${i * 70}ms` }}
            >
              <span className={styles.icon} aria-hidden="true">
                <svg className={styles.cross} viewBox="0 0 12 12">
                  <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                <svg className={styles.check} viewBox="0 0 12 12">
                  <path d="M2 6.5l2.5 2.5L10 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
              <span className={styles.id}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.fail}>{problem.fail}</h3>
              <p className={styles.fix}>
                <span className={styles.fixLabel}>Solución</span>
                {problem.fix}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
