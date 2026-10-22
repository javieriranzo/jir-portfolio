import { useEffect, useState } from 'react';
import Link from 'next/link';
import Flag from '@/components/Flag/Flag';
import { site } from '@/content/shared';
import { locales, useLocale } from '@/utils/i18n';
import styles from './Nav.module.scss';

// Menú en una isla flotante centrada. La sección que ocupa el centro de la pantalla se marca
// en verde botella azulado; en móvil la isla solo muestra FJIR, el selector de idioma y el
// botón, y los enlaces se despliegan debajo.
export default function Nav() {
  const locale = useLocale();
  const { ui, sections } = locale.content;
  // Enlaces a cada sección de la página en este idioma ('/en#experience').
  const nav = Object.values(sections).map(({ id, nav: label }) => ({ id, label, href: `${locale.path}#${id}` }));
  const sectionIds = nav.map((item) => item.id).join(' ');
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    const sections = sectionIds
      .split(' ')
      .map((id) => document.getElementById(id))
      .filter(Boolean);
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
  }, [sectionIds]);

  return (
    <header className={styles.bar}>
      <nav className={`${styles.island} ${open ? styles.expanded : ''}`} aria-label={ui.navLabel}>
        <Link href={locale.path} className={styles.brand} onClick={() => setOpen(false)}>
          <span aria-hidden="true">{site.initials}</span>
          <span className="visually-hidden">
            {site.name}, {ui.home}
          </span>
        </Link>

        {/* Selector de idioma: cada idioma es otra página. A la vista va su bandera, la misma que
            en las tarjetas de idiomas, y el nombre en su propio idioma, para lectores de pantalla
            y como texto emergente. */}
        <ul className={styles.languages} aria-label={ui.languageLabel}>
          {locales.map((item) => (
            <li key={item.code}>
              <Link
                href={item.path}
                className={styles.language}
                hrefLang={item.lang}
                lang={item.lang}
                title={item.name}
                aria-current={item === locale ? 'page' : undefined}
              >
                <Flag code={item.code} height={14} className={styles.flag} />
                <span className="visually-hidden">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="visually-hidden">{open ? ui.closeMenu : ui.openMenu}</span>
          <span className={styles.burger} aria-hidden="true" />
        </button>

        <ul id="nav-links" className={`${styles.links} ${open ? styles.open : ''}`}>
          {nav.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={styles.link}
                aria-current={current === item.id ? 'location' : undefined}
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
