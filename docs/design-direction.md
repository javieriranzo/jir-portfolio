# Dirección artística: portfolio personal de Javier Iranzo

## 1. Qué fallaba en la versión anterior

La web «Informe de ejecución» estaba bien construida, pero hablaba como una consultora:

- **Discurso de captación**: «Problemas que resuelvo», «Servicios», CTA «Soy una empresa / Soy
  particular». El visitante tenía que clasificarse como cliente antes de saber quién era yo.
- **Ninguna presencia personal**: sin «sobre mí», sin trayectoria y sin proyectos reales. Solo había
  casos de estudio de plantilla.
- **Estética de terminal**: monoespaciada en todas las etiquetas, índices `§01`, «build: passing»,
  un *run log* simulado… Era el lenguaje de la herramienta, no el de la persona.
- **Recursos genéricos**: etiquetas en mayúsculas sobre cada titular, una palabra en serif itálica
  en cada título, flecha en cada botón y *fade-up* en cada bloque.

Se conserva lo que funcionaba: la estructura técnica (pages router, SCSS modules, contenido
centralizado en `content.js`), Bricolage Grotesque, el azul noche y el lima, el método en cuatro
pasos, la accesibilidad (skip link, foco visible, `prefers-reduced-motion`) y el contacto por `mailto`.

## 2. Concepto: «corrector de pruebas»

En español, *pruebas* son también las galeradas de imprenta que un corrector revisa antes de
imprimir. El trabajo de QA es el mismo oficio con otro papel: encontrar el error antes de la tirada.

La web adopta las marcas del corrector como lenguaje visual. Son marcas que aportan información, no
decoración:

- **Tachado y corrección a lápiz** en el titular del inicio: «~~después~~ *antes* que tus usuarios».
  Es el único momento animado de la web.
- **Notas al margen** en serif itálica azul: la voz que comenta y opina junto al texto.
- **Marcas de corte** alrededor de las imágenes, como en un pliego. Al pasar el cursor se cierran
  sobre la imagen.
- **Fluorescente lima** para subrayar lo que se señala (enlaces al pasar el cursor, selección).

## 3. Paleta

| Token        | Valor     | Uso |
|--------------|-----------|-----|
| `--paper`    | `#EDEFEA` | Fondo: papel frío, no crema |
| `--paper-2`  | `#E1E4DC` | Huecos de imagen |
| `--rule`     | `#C5CAC0` | Filetes |
| `--ink`      | `#0A1120` | Texto (el azul noche anterior) |
| `--ink-dim`  | `#4A5469` | Texto secundario |
| `--pencil`   | `#2340E0` | Lápiz azul del corrector: correcciones, notas, foco |
| `--lime`     | `#C8F542` | Fluorescente; nunca como color de texto sobre papel |
| `--night`    | `#0A1120` | Banda de contacto y pie |

En la banda oscura, `--pencil` pasa a `--lime` porque el azul no tiene contraste sobre noche.

## 4. Tipografía

- **Bricolage Grotesque** (ejes `wdth` y `opsz`): todo el texto. Los titulares usan la anchura
  estrecha (78 %) y un peso alto. Ese gesto tipográfico es el que reconoce la marca.
- **Newsreader itálica**: solo para la voz del corrector (notas, correcciones y contenido pendiente).

Sin monoespaciada ni etiquetas en mayúsculas.

## 5. Estructura

Todo el portfolio está en una sola página, `/`, y el menú salta a cada sección:

- Presentación («Hola, soy Javier»), datos de contacto y descarga del CV.
- `#experiencia`: línea temporal con una tarjeta por etapa y sus competencias.
- `#formacion`: banda de otro tono con los títulos como diplomas y los cursos e idiomas en pastillas.
- `#aficiones`: «Fuera del horario laboral», las aficiones como casos de prueba.
- `#contacto`: elección del tema (proyecto, colaboración, oportunidad u otra cosa), que rellena el
  asunto del email.

## 6. Contenido pendiente

Nada se inventa. Lo que falta está en `src/utils/content.js` envuelto en `pending()`. En la web
aparece con borde discontinuo azul, para que sea imposible publicarlo por descuido.
