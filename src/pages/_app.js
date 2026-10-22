import { Bricolage_Grotesque, Newsreader } from 'next/font/google';
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
  return (
    <div className={`app ${bricolage.variable} ${newsreader.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
