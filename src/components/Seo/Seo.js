import Head from 'next/head';
import { site } from '@/content/shared';
import { locales, useContent, useLocale } from '@/utils/i18n';

// `path` es la ruta de la página en su idioma ('/', '/va', '/en'). En la portada se enlazan
// también las otras versiones (hreflang), que necesitan el dominio definitivo en `site.url`.
export default function Seo({ title, description, path = '/', noindex = false, jsonLd }) {
  const locale = useLocale();
  const { meta } = useContent();
  const fullTitle = title ? `${title} – ${site.name}` : meta.title;
  const base = site.url.replace(/\/$/, '');
  const url = base ? `${base}${path}` : null;
  const alternates = base && !noindex && locales.some((item) => item.path === path);

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description ?? meta.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={site.name} />
      {noindex && <meta name="robots" content="noindex" />}
      {url && <link rel="canonical" href={url} />}
      {alternates &&
        locales.map((item) => <link key={item.code} rel="alternate" hrefLang={item.lang} href={`${base}${item.path}`} />)}
      {alternates && <link rel="alternate" hrefLang="x-default" href={`${base}/`} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description ?? meta.description} />
      <meta property="og:type" content={locales.some((item) => item.path === path) ? 'profile' : 'website'} />
      <meta property="og:locale" content={locale.og} />
      {locales
        .filter((item) => item !== locale)
        .map((item) => <meta key={item.code} property="og:locale:alternate" content={item.og} />)}
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary" />
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </Head>
  );
}
