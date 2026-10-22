import Nav from '@/components/Nav/Nav';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Layout({ children }) {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
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
