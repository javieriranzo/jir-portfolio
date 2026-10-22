import Link from 'next/link';
import styles from './Button.module.scss';

export default function Button({ href, variant = 'ink', children, ...rest }) {
  const className = `${styles.button} ${styles[variant]}`;
  const isInternal = href.startsWith('/') || href.startsWith('#');

  if (isInternal) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  );
}
