import Head from 'next/head';
import { site } from '@/utils/content';

export default function Seo({ title, description = site.description, path = '/', noindex = false, jsonLd }) {
  const fullTitle = title ? `${title} – ${site.name}` : site.title;
  const url = site.url ? `${site.url.replace(/\/$/, '')}${path}` : null;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={site.name} />
      {noindex && <meta name="robots" content="noindex" />}
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={path === '/' ? 'profile' : 'website'} />
      <meta property="og:locale" content="es_ES" />
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary" />
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </Head>
  );
}
