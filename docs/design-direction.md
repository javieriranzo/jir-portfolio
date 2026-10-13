# Dirección artística — Portfolio Senior QA Engineer

## 1. Tres conceptos

### A · «Informe de ejecución» (elegido)
La web se lee como un informe de calidad editorial: anotaciones en monoespaciada,
identificadores de sección tipo suite (`§01 · problemas`), casos de prueba que pasan de
✕ a ✓, y un pipeline que se ilumina al avanzar. El verde lima **no es decoración**:
significa «en verde», el estado que un QA persigue. El blanco cálido aporta el tono
editorial (papel, revista técnica) y el azul noche, la seriedad.

- **Fortalezas**: el lenguaje visual *es* el oficio; cada gráfico comunica método.
  Sirve a empresas (rigor) y a particulares (claridad, «te lo explico en verde o rojo»).
- **Riesgo**: caer en la estética de terminal. Se mitiga con tipografía display
  expresiva, serif itálica para acentos y mucho espacio negativo.

### B · «Plano técnico»
Estética de blueprint: retícula milimetrada, cotas, coordenadas, diagramas de
arquitectura. Muy preciso, pero frío y más próximo a un arquitecto de software que a
alguien que protege la experiencia del usuario final. Poco cálido para particulares.

### C · «Señal y ruido»
Oscuro inmersivo, formas de onda, glitch controlado: el bug como ruido y el QA como
filtro. Memorable, pero exige animación continua (coste de rendimiento y de
accesibilidad) y el glitch transmite inestabilidad, lo contrario de lo que se vende.

**Decisión: A.** Es el único concepto en el que la metáfora visual coincide con la
promesa comercial (software que se comporta como se prometió), escala bien a móvil y
apenas necesita movimiento continuo.

## 2. Paleta

| Token           | Valor      | Uso |
|-----------------|------------|-----|
| `--night-950`   | `#0A1120`  | Fondo principal |
| `--night-900`   | `#0F1A2E`  | Superficies elevadas |
| `--night-700`   | `#22314F`  | Bordes, reglas |
| `--paper`       | `#F3EFE6`  | Texto sobre noche · fondo de secciones editoriales |
| `--paper-2`     | `#E9E3D6`  | Etiquetas y fondos secundarios sobre papel |
| `--paper-dim`   | `#A9B1C2`  | Texto secundario sobre noche (8,8:1) |
| `--ink`         | `#0A1120`  | Texto sobre papel |
| `--ink-dim`     | `#4A5469`  | Texto secundario sobre papel (6,6:1) |
| `--lime`        | `#C8F542`  | Estado «pass», CTA principal, foco |
| `--lime-ink`    | `#4D6B00`  | Lima legible sobre papel (5,3:1) |
| `--fail`        | `#FF6B57`  | Solo para estados «fail» ilustrativos |

Regla: el lima nunca se usa como texto sobre papel (contraste insuficiente);
se usa `--lime-ink`.

## 3. Tipografía

- **Display / cuerpo**: *Bricolage Grotesque* (variable): grotesca con carácter y
  ópticas variables; firme en titulares y legible en cuerpo.
- **Acento editorial**: *Instrument Serif* itálica: una o dos palabras por titular.
- **Meta / técnico**: *JetBrains Mono*: etiquetas, IDs, estados, datos de casos.

Escala fluida (clamp), ratio ~1.25 en móvil → ~1.333 en escritorio:
`--fs-xs .78rem · --fs-sm .9rem · --fs-base 1.05rem · --fs-md 1.3rem ·
--fs-lg 1.75rem · --fs-xl 2.6rem · --fs-2xl 4rem · --fs-hero 6.5rem` (máximos).

## 4. Espaciado y retícula

Base 4 px: `--s-1 4 · --s-2 8 · --s-3 12 · --s-4 16 · --s-5 24 · --s-6 32 ·
--s-7 48 · --s-8 64 · --s-9 96 · --s-10 144`.
Retícula de 12 columnas, ancho máximo 1320 px, gutter lateral 16 px (móvil) → 48 px.
Composición asimétrica: titulares en columnas 1–8, anotaciones desplazadas a 9–12;
las secciones alternan alineación para generar ritmo y aire.

## 5. Estructura

1. **Hero**: nombre + rol en mono, titular con acento serif, subtítulo, dos CTA
   (empresas / particulares) y un *run log* que ejecuta comprobaciones de forma
   escalonada.
2. **§01 Problemas**: lo que falla hoy, escrito como tests en rojo; al pasar el
   cursor o enfocarlos se muestra cómo se resuelve.
3. **§02 Servicios**: dos columnas editoriales diferenciadas, Empresas y Particulares,
   con lista numerada (no tarjetas).
4. **§03 Método**: pipeline de 4 etapas que se ilumina al hacer scroll.
5. **§04 Casos de estudio**: filas editoriales (contexto · reto · enfoque · resultado).
   Contenido en borrador hasta completarlo con proyectos reales.
6. **§05 Contacto**: dos caminos explícitos con asunto prellenado.

## 6. Sistema de componentes

`Nav` · `Button` (primary · ghost · ink · outlineInk) · enlaces con subrayado que crece ·
`SectionHeader` (índice + etiqueta mono + titular) · `useReveal` (IntersectionObserver,
una sola vez) · `RunLog` · `Problems` · `Process` (pipeline) · `Cases` · `Contact`.

## 7. Movimiento

- Entrada del hero escalonada (etiqueta → titular por líneas → texto → CTA → run log),
  ≤ 900 ms en total, solo `transform` y `opacity`.
- Reveal al hacer scroll: desplazamiento de 16 px + fade, una vez por elemento.
- Microinteracciones: flecha que avanza en botones, subrayado en enlaces, test ✕→✓.
- `prefers-reduced-motion: reduce` → sin desplazamientos ni animaciones; todo visible
  desde el inicio.
- Sin librerías de animación: CSS + un único `IntersectionObserver`.

## 8. Contenido pendiente (no inventado)

Los casos de estudio, el email, LinkedIn y los servicios concretos están centralizados
en `src/utils/content.js`. Los casos se muestran marcados como **borrador** hasta que
se rellenen con proyectos reales.
