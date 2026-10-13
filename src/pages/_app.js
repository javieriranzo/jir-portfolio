import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.scss';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['italic'],
  variable: '--font-instrument',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`app ${bricolage.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
