# Portfolio de Javier Iranzo

Portfolio personal de Javier Iranzo (FJIR), ingeniero de QA y desarrollador full stack. Es una
web estática de una sola página con presentación, trayectoria profesional, formación y aficiones.

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

## Secciones

Todo el contenido está en `/` y el menú salta a cada sección:

- **Presentación:** bio, contacto (email, WhatsApp, LinkedIn y GitHub) y descarga del CV
- **Experiencia profesional:** línea temporal con los proyectos y empresas
- **Formación y certificaciones:** titulaciones, certificaciones e idiomas
- **Aficiones:** contadas como casos de prueba
- **Contacto**

## Estructura

```
public/              favicon y logos de empresas y centros
src/
├── components/      componentes de la interfaz (Nav, Timeline, Contact, Seo…)
├── pages/           index.js (la página), 404.js, _app.js y _document.js
├── styles/          estilos globales, mixins y módulos SCSS de página
└── utils/
    └── content.js   todo el contenido editable del portfolio
docs/
└── design-direction.md   dirección artística: concepto, paleta y tipografía
```

## Editar el contenido

Los textos, la experiencia, la formación y los datos de contacto están en `src/utils/content.js`.
Lo que se marca con `pending()` aparece en la web como «pendiente» hasta que se sustituya por el
texto real.

Pendiente:

- Definir el dominio definitivo en `site.url` (para canonical y Open Graph)
- Subir el CV en PDF a `public/cv/javier-iranzo-cv.pdf`
