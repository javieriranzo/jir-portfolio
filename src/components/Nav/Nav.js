import { useEffect, useState } from 'react';
import { nav, site } from '@/utils/content';
import styles from './Nav.module.scss';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`${styles.bar} ${scrolled || open ? styles.scrolled : ''}`}>
      <nav className={styles.inner} aria-label="Principal">
        <a href="#inicio" className={styles.brand} onClick={() => setOpen(false)}>
          <svg viewBox="0 0 20 20" aria-hidden="true" className={styles.mark}>
            <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.4" />
          </svg>
          <span>{site.name}</span>
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="visually-hidden">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
          <span className={styles.burger} aria-hidden="true" />
        </button>

        <ul id="nav-links" className={`${styles.links} ${open ? styles.open : ''}`}>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.link} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
