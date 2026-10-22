import Nav from '@/components/Nav/Nav';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import { useContent } from '@/utils/i18n';

export default function Layout({ children }) {
  const { ui } = useContent();

  return (
    <>
      <a href="#contenido" className="skip-link">
        {ui.skipLink}
      </a>
      <Nav />
      <main id="contenido">
        {children}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
