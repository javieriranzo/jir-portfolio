import { process } from '@/utils/content';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import styles from './Process.module.scss';

export default function Process() {
  return (
    <section id="metodo" className={styles.section} aria-labelledby="metodo-title">
      <div className={styles.inner}>
        <SectionHeader
          index="03"
          label="Método"
          id="metodo-title"
          title={<>Un pipeline, no una <em>caja negra</em></>}
          intro="Cada encargo sigue las mismas cuatro etapas. Sabes en todo momento en qué punto estamos y qué viene después."
        />

        <ol className={styles.pipeline} data-reveal>
          {process.map((step, i) => (
            <li key={step.id} className={styles.stage} style={{ '--i': i }}>
              <span className={styles.node} aria-hidden="true" />
              <span className={styles.stageId}>
                stage {i + 1}/{process.length}
              </span>
              <h3 className={styles.stageTitle}>{step.title}</h3>
              <p className={styles.stageText}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
