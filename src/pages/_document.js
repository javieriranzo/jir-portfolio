import { Html, Head, Main, NextScript } from 'next/document';
import { localeFromPath } from '@/utils/i18n';

// El idioma del <html> sale de la ruta de la página: /va → valenciano, /en → inglés.
export default function Document({ __NEXT_DATA__ }) {
  return (
    <Html lang={localeFromPath(__NEXT_DATA__.page).lang}>
      <Head>
        <meta name="theme-color" content="#edefea" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
