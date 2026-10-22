import { useEffect, useRef, useState } from 'react';
import { experience } from '@/utils/content';
import Copy from '@/components/Copy/Copy';
import styles from './Timeline.module.scss';

// De la etapa actual a la más antigua.
const stages = [...experience].reverse();

// Cada etapa es un pliego de pruebas de imprenta colgado de una línea temporal con el
// año de inicio. En escritorio se alternan a izquierda y derecha y cada pliego empieza
// a media altura del anterior.
//
// Animación: el eje se dibuja hasta cada etapa al llegar a ella con el scroll y después
// aparecen su nodo, su rama y su pliego. Sin JavaScript o con movimiento reducido,
// todo se ve desde el principio.
export default function Timeline() {
  const list = useRef(null);
  // null: sin animar (render del servidor); si no, cuántas etapas se han mostrado.
  const [shown, setShown] = useState(null);
  const [spine, setSpine] = useState(0);

  useEffect(() => {
    const animate =
      'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!animate) {
      setShown(stages.length);
      return undefined;
    }

    setShown(0);
    const items = [...list.current.children];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          // Se muestran en orden: llegar a una etapa muestra también las anteriores.
          const index = items.indexOf(entry.target);
          setShown((count) => Math.max(count, index + 1));
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0.2 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  // Largo del eje: hasta el nodo de la última etapa mostrada.
  useEffect(() => {
    if (!shown) return undefined;

    const measure = () => {
      const node = list.current;
      const dotY = parseFloat(getComputedStyle(node).getPropertyValue('--dot-y'));
      setSpine(node.children[shown - 1].offsetTop + dotY);
    };

    // Se vuelve a medir si cambia el alto, p. ej. al desplegar unas skills.
    const observer = new ResizeObserver(measure);
    observer.observe(list.current);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <ol
      ref={list}
      className={styles.timeline}
      data-animate={shown === null ? undefined : ''}
      style={{ '--spine': `${spine}px` }}
    >
      {stages.map((stage, i) => {
        const tools = stage.tools ?? [];
        // Las herramientas pueden venir sueltas o agrupadas en { group, items }.
        const grouped = Boolean(tools[0]?.items);

        return (
          <li
            key={stage.start}
            className={`${styles.stage} ${stage.end ? '' : styles.current}`}
            style={{ '--row': i + 1 }}
            data-shown={shown === null || i < shown ? '' : undefined}
          >
            <span className={styles.year} aria-hidden="true">{stage.start.slice(0, 4)}</span>

            <div className={styles.sheet}>
              <span className={styles.marks} aria-hidden="true">
                <i /><i /><i /><i />
              </span>
              <ul className={styles.locations} aria-label="Ubicación">
                {stage.location.map((city) => (
                  <li key={city} className={styles.location}>
                    <span className={styles.pin} aria-hidden="true">📍</span>
                    {city}
                  </li>
                ))}
              </ul>
              <h3 className={styles.role}>{stage.role}</h3>
              <p className={styles.place}>
                {stage.logo && (
                  <img
                    className={`${styles.logo} ${stage.logo.width / stage.logo.height < 3 ? styles.logoTall : ''}`}
                    src={stage.logo.src}
                    alt=""
                    width={stage.logo.width}
                    height={stage.logo.height}
                  />
                )}
                <span>
                  {stage.place}, {stage.period}
                </span>
              </p>
              <p className={styles.text}>{stage.text}</p>
              {grouped ? (
                // Muchas competencias: cinco destacadas a la vista y el resto, agrupadas y
                // plegadas, para que el pliego siga siendo compacto.
                <div className={styles.skills}>
                  <ToolList label="Competencias destacadas" tools={highlights(stage)} />
                  <details className={styles.more}>
                    <summary
                      className={styles.summary}
                      style={stage.brand && { '--brand': stage.brand.bg, '--brand-fg': stage.brand.fg }}
                    >
                      <span className={styles.summaryIcon} aria-hidden="true">🧰</span>
                      Ver las {tools.reduce((total, { items }) => total + items.length, 0)} competencias
                    </summary>
                    {tools.map(({ group, items }, j) => (
                      <div key={group} className={styles.group} style={{ '--g': j }}>
                        <p className={styles.groupName}>{group}</p>
                        <ToolList label={group} tools={items} />
                      </div>
                    ))}
                  </details>
                </div>
              ) : (
                <div className={styles.skills}>
                  <ToolList label="Herramientas" tools={tools} />
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function ToolList({ label, tools }) {
  return (
    <ul className={styles.tools} aria-label={label}>
      {tools.map((tool, i) => (
        <li key={i}>
          <Copy value={tool} />
        </li>
      ))}
    </ul>
  );
}

// Las cinco competencias a la vista: las `highlights` de la etapa o, si no tiene, las
// cinco primeras.
function highlights(stage) {
  return stage.highlights ?? stage.tools.flatMap(({ items }) => items).slice(0, 5);
}
