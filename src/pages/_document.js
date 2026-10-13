import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="theme-color" content="#0a1120" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Marca que hay JS antes del primer pintado para ocultar los reveals sin parpadeo */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
