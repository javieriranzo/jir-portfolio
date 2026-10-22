import Seo from '@/components/Seo/Seo';
import Layout from '@/components/Layout/Layout';
import Button from '@/components/Button/Button';
import { useContent } from '@/utils/i18n';
import styles from '@/styles/Page.module.scss';

// Una sola página de error para toda la web, en castellano (su ruta no lleva idioma).
export default function NotFound() {
  const { notFound } = useContent();

  return (
    <Layout>
      <Seo title={notFound.title} path="/404" noindex />
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.title}>{notFound.heading}</h1>
          <p className={styles.lead}>{notFound.text}</p>
          <Button href="/">{notFound.back}</Button>
        </header>
      </div>
    </Layout>
  );
}
