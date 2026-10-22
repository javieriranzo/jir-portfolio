import { site } from '@/content/shared';
import { useContent } from '@/utils/i18n';
import styles from './Footer.module.scss';

export default function Footer() {
  const { ui } = useContent();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.meta}>
          <p>
            © {new Date().getFullYear()} {site.fullName}
          </p>
          <a href="#contenido" className={styles.top}>
            {ui.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
