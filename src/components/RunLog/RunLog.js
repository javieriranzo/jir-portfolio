import { useState } from 'react';
import { runLog } from '@/utils/content';
import styles from './RunLog.module.scss';

// Ejecución ilustrativa: cada comprobación pasa de pendiente a verde en cascada.
export default function RunLog() {
  const [run, setRun] = useState(1);

  return (
    <figure className={styles.panel} aria-label="Ejemplo ilustrativo de una ejecución de pruebas">
      <div className={styles.head}>
        <span className={styles.dots} aria-hidden="true">
          <i /><i /><i />
        </span>
        <span className={styles.branch}>qa-run · main</span>
        <button type="button" className={styles.rerun} onClick={() => setRun((n) => n + 1)}>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M13 8a5 5 0 1 1-1.5-3.6M13 2.5v2.5h-2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          Re-ejecutar
        </button>
      </div>

      <ol key={run} className={styles.list}>
        {runLog.map((check, i) => (
          <li key={check.name} className={styles.row} style={{ '--i': i }}>
            <span className={styles.status} aria-hidden="true">
              <span className={styles.pending} />
              <svg className={styles.pass} viewBox="0 0 12 12">
                <path d="M2 6.5l2.5 2.5L10 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </span>
            <span className={styles.suite}>{check.suite}</span>
            <span className={styles.name}>{check.name}</span>
          </li>
        ))}
        <li className={styles.summary} style={{ '--i': runLog.length }}>
          <span className={styles.bar} aria-hidden="true" />
          <span>
            <strong>{runLog.length} passed</strong> · 0 failed
          </span>
        </li>
      </ol>
      <figcaption className={styles.caption}>Ejecución ilustrativa</figcaption>
    </figure>
  );
}
