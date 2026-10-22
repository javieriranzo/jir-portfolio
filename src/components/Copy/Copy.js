// Pinta un texto de content.js; si aún es `pending()`, lo marca como pendiente.
export function isPending(value) {
  return Boolean(value && typeof value === 'object' && 'pending' in value);
}

export default function Copy({ value }) {
  if (!isPending(value)) return value ?? null;

  return (
    <span className="pending">
      <span className="visually-hidden">Pendiente: </span>
      {value.pending}
    </span>
  );
}
