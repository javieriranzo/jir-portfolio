import { site } from '@/utils/content';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.meta}>
          <p>
            © {new Date().getFullYear()} {site.fullName}
          </p>
          <a href="#contenido" className={styles.top}>
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
}
