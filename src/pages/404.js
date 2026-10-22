import Seo from '@/components/Seo/Seo';
import Layout from '@/components/Layout/Layout';
import Button from '@/components/Button/Button';
import styles from '@/styles/Page.module.scss';

export default function NotFound() {
  return (
    <Layout>
      <Seo title="Página no encontrada" noindex />
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.title}>Esta página no existe.</h1>
          <p className={styles.lead}>
            Puede que el enlace esté mal escrito o que la página se haya movido. Desde el inicio puedes llegar a
            todo lo demás.
          </p>
          <Button href="/">Volver al inicio</Button>
        </header>
      </div>
    </Layout>
  );
}
