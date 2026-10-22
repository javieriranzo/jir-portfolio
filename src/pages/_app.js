import { useEffect } from 'react';
import { Bricolage_Grotesque, Newsreader } from 'next/font/google';
import { useLocale } from '@/utils/i18n';
import '@/styles/globals.scss';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['wdth', 'opsz'],
  variable: '--font-bricolage',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  // _document fija el idioma del <html> al generar cada página; al cambiar de idioma desde el
  // selector la navegación es en el navegador, así que hay que actualizarlo aquí.
  const { lang } = useLocale();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`app ${bricolage.variable} ${newsreader.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
