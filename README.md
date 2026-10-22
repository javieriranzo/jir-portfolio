# Portfolio de Javier Iranzo

Portfolio personal de Javier Iranzo (FJIR), ingeniero de QA y desarrollador full stack. Es una
web estática de una sola página con presentación, trayectoria profesional, formación y proyectos,
en castellano, valenciano e inglés.

## Tecnologías

- [Next.js 16](https://nextjs.org/) (pages router) con exportación estática (`output: 'export'`)
- React 19
- Sass con CSS Modules
- Tipografías Bricolage Grotesque y Newsreader

## Puesta en marcha

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:3000
npm run build    # genera la web estática en out/
npm start        # sirve out/ en local con `serve`
```

## Idiomas

Cada idioma es una página estática propia: castellano en `/`, valenciano en `/va` e inglés en
`/en`. El selector del menú (ES · VA · EN) enlaza las tres. El idioma se deduce de la ruta
(`src/utils/i18n.js`), y de él salen los textos, el `lang` del `<html>` y el locale de Open Graph.

## Secciones

Todo el contenido está en la portada de cada idioma y el menú salta a cada sección:

- **Presentación:** bio, contacto (email, WhatsApp, LinkedIn y GitHub) y descarga del CV
- **Experiencia profesional:** línea temporal con los proyectos y empresas
- **Formación y certificaciones:** titulaciones, certificaciones e idiomas
- **Proyectos:** tarjetas con cada proyecto y su fase
- **Contacto**

## Estructura

```
public/              favicon y logos de empresas y centros
src/
├── components/      componentes de la interfaz (Home, Nav, Timeline, Contact, Seo…)
├── content/
│   ├── shared.js    datos comunes a los tres idiomas: contacto, fechas, logos y colores
│   └── es.js, va.js, en.js   textos de cada idioma, con la misma forma
├── pages/           index.js, va/ y en/ (la portada en cada idioma), 404.js, _app.js y _document.js
├── styles/          estilos globales, mixins y módulos SCSS de página
└── utils/
    └── i18n.js      idiomas de la web y el contenido del idioma de cada página
docs/
└── design-direction.md   dirección artística: concepto, paleta y tipografía
```

## Editar el contenido

Los textos de cada idioma están en `src/content/es.js`, `va.js` y `en.js`; los datos que no
cambian con el idioma (contacto, fechas, logos y colores), en `src/content/shared.js`. Un cambio de
texto hay que hacerlo en los tres ficheros. Lo que se marca con `pending()` aparece en la web como
«pendiente» hasta que se sustituya por el texto real.

Pendiente:

- Definir el dominio definitivo en `site.url` (para canonical, hreflang y Open Graph)
- Subir el CV en PDF a `public/cv/javier-iranzo-cv.pdf`
