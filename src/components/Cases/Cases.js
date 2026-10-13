import { cases } from '@/utils/content';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import styles from './Cases.module.scss';

const fields = [
  ['context', 'Contexto'],
  ['challenge', 'Reto'],
  ['approach', 'Enfoque'],
  ['outcome', 'Resultado'],
];

export default function Cases() {
  const hasDrafts = cases.some((item) => item.draft);

  return (
    <section id="casos" className={styles.section} aria-labelledby="casos-title">
      <div className={styles.inner}>
        <SectionHeader
          tone="paper"
          index="04"
          label="Casos de estudio"
          id="casos-title"
          title={<>Del problema al <em>resultado</em></>}
          intro="Cada caso se cuenta igual que un buen informe de bug: contexto, reto, enfoque y resultado comprobable."
        />

        {hasDrafts && (
          <p className={styles.notice} role="note" data-reveal>
            Casos de estudio en preparación.
          </p>
        )}

        <ol className={styles.list}>
          {cases.map((item, i) => (
            <li
              key={i}
              className={`${styles.case} ${item.draft ? styles.draft : ''}`}
              data-reveal
              style={{ '--reveal-delay': `${i * 80}ms` }}
            >
              <div className={styles.head}>
                <span className={styles.index}>
                  case_{String(i + 1).padStart(2, '0')}
                  {item.draft && <span className={styles.badge}>borrador</span>}
                </span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.sector}>{item.sector}</p>
              </div>

              <dl className={styles.fields}>
                {fields.map(([key, label]) => (
                  <div key={key} className={styles.field}>
                    <dt>{label}</dt>
                    <dd>{item[key]}</dd>
                  </div>
                ))}
              </dl>

              <ul className={styles.tags} aria-label="Etiquetas">
                {item.tags.map((tag, t) => (
                  <li key={t}>{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
