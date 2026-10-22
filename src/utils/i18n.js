import { useRouter } from 'next/router';
import es from '@/content/es';
import va from '@/content/va';
import en from '@/content/en';

// Idiomas de la web. Cada uno es una página estática propia (`path`); el castellano va en la
// raíz. `lang` es la etiqueta BCP 47 del <html> y del hreflang: el valenciano no tiene código
// propio y se marca como la variante valenciana del catalán. `og` es el locale de Open Graph.
export const locales = [
  { code: 'es', path: '/', lang: 'es', og: 'es_ES', label: 'ES', name: 'Español', content: es },
  { code: 'va', path: '/va', lang: 'ca-ES-valencia', og: 'ca_ES', label: 'VA', name: 'Valencià', content: va },
  { code: 'en', path: '/en', lang: 'en', og: 'en_GB', label: 'EN', name: 'English', content: en },
];

// Idioma de una ruta: '/en' o '/en/…' es inglés; lo que no lleve prefijo, castellano.
export function localeFromPath(pathname = '/') {
  const prefix = pathname.split('/')[1];
  return locales.find((locale) => locale.code === prefix && locale.path !== '/') ?? locales[0];
}

// Idioma de la página que se está mostrando, con su contenido.
export function useLocale() {
  return localeFromPath(useRouter().pathname);
}

export function useContent() {
  return useLocale().content;
}
