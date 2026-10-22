// Banderas sencillas de cada idioma, dibujadas en SVG (los emojis de bandera no se ven igual en
// todos los sistemas y no existe uno para la valenciana).
const flags = {
  es: (
    <>
      <rect width="30" height="20" fill="#AA151B" />
      <rect y="5" width="30" height="10" fill="#F1BF00" />
    </>
  ),
  // Real Senyera simplificada: franja azul junto al mástil y las cuatro barras, sin la corona.
  va: (
    <>
      <rect width="30" height="20" fill="#FCDD09" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} y={2.22 * (2 * i + 1)} width="30" height="2.22" fill="#DA121A" />
      ))}
      <rect width="6" height="20" fill="#0057B8" />
    </>
  ),
  // Lo que se sale de las diagonales lo recorta el propio <svg>; sin clipPath no hay ids que
  // se repitan cuando la bandera sale varias veces en la página.
  en: (
    <>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#C8102E" strokeWidth="1.6" />
      <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0v20M0 10h30" stroke="#C8102E" strokeWidth="3.6" />
    </>
  ),
};

export default function Flag({ code, height = 18, className }) {
  return (
    <svg
      viewBox="0 0 30 20"
      height={height}
      width={(height * 3) / 2}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {flags[code]}
    </svg>
  );
}
