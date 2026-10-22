import { useEffect, useState } from 'react';
import Link from 'next/link';
import { nav, site } from '@/utils/content';
import styles from './Nav.module.scss';

// Ids de las secciones a las que apunta el menú ('/#experiencia' → 'experiencia').
const sectionIds = nav.map((item) => item.href.split('#')[1]);

// Menú en una isla flotante centrada. La sección que ocupa el centro de la pantalla se marca
// en verde botella azulado; en móvil la isla solo muestra FJIR y el botón, y los enlaces se
// despliegan debajo.
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) return undefined;

    // Una franja fina en mitad de la pantalla: la sección que la cruza es la actual.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setCurrent(entry.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => observer.observe(section));

    // Por encima de la primera sección (la presentación) no hay ninguna marcada.
    const onScroll = () => window.scrollY < sections[0].offsetTop - window.innerHeight / 2 && setCurrent(null);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className={styles.bar}>
      <nav className={`${styles.island} ${open ? styles.expanded : ''}`} aria-label="Principal">
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span aria-hidden="true">{site.initials}</span>
          <span className="visually-hidden">{site.name}, inicio</span>
        </Link>

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
          {nav.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={styles.link}
                aria-current={current === sectionIds[i] ? 'location' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
