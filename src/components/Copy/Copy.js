import { useContent } from '@/utils/i18n';

// Pinta un texto del contenido; si aún es `pending()`, lo marca como pendiente.
export function isPending(value) {
  return Boolean(value && typeof value === 'object' && 'pending' in value);
}

export default function Copy({ value }) {
  const { ui } = useContent();
  if (!isPending(value)) return value ?? null;

  return (
    <span className="pending">
      <span className="visually-hidden">{ui.pending}: </span>
      {value.pending}
    </span>
  );
}
