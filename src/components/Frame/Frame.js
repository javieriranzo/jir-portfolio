import styles from './Frame.module.scss';

// Imagen dentro de un pliego como los de la experiencia. Sin imagen, deja el hueco marcado
// como pendiente.
export default function Frame({ image, placeholder = 'Captura pendiente', ratio = '4 / 3', priority = false, className = '' }) {
  return (
    <figure className={`${styles.frame} ${className}`} style={{ '--ratio': ratio }}>
      <span className={styles.marks} aria-hidden="true">
        <i /><i /><i /><i />
      </span>
      <span className={styles.media}>
        {image ? (
          <img
            className={styles.image}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        ) : (
          <span className={styles.empty}>
            <span className="pending">{placeholder}</span>
          </span>
        )}
      </span>
    </figure>
  );
}
