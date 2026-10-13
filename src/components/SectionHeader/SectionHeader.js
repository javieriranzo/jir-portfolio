import styles from './SectionHeader.module.scss';

export default function SectionHeader({ index, label, title, intro, id, tone = 'night' }) {
  return (
    <header className={`${styles.header} ${styles[tone]}`}>
      <p className={styles.meta} data-reveal>
        <span className={styles.index}>§{index}</span>
        <span className={styles.rule} aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 id={id} className={styles.title} data-reveal style={{ '--reveal-delay': '80ms' }}>
        {title}
      </h2>
      {intro && (
        <p className={styles.intro} data-reveal style={{ '--reveal-delay': '160ms' }}>
          {intro}
        </p>
      )}
    </header>
  );
}
