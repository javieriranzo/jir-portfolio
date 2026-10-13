import Head from 'next/head';
import { site } from '@/utils/content';
import useReveal from '@/utils/useReveal';
import Nav from '@/components/Nav/Nav';
import Hero from '@/components/Hero/Hero';
import Problems from '@/components/Problems/Problems';
import Services from '@/components/Services/Services';
import Process from '@/components/Process/Process';
import Cases from '@/components/Cases/Cases';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  useReveal();

  return (
    <>
      <Head>
        <title>{site.title}</title>
        <meta name="description" content={site.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:type" content="website" />
      </Head>

      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Nav />
      <main id="contenido">
        <Hero />
        <Problems />
        <Services />
        <Process />
        <Cases />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
