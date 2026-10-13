import { site } from '@/utils/content';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          © {new Date().getFullYear()} {site.name} · {site.role}
        </p>
        <p className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          build: passing
        </p>
        <a href="#inicio" className={styles.top}>
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
}
