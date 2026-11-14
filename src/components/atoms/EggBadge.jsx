export function EggBadge({ hasEgg }) {
  if (!hasEgg) return null;

  return (
    <span
      className="badge bg-black text-warning border border-2 border-warning rounded-0 d-inline-flex align-items-center gap-2 px-2 py-2 font-monospace"
      title="No es demasiado importante, ni demasiado poco importante."
    >
      <svg width="14" height="18" viewBox="0 0 16 20" aria-hidden="true">
        <path
          fill="#fffdd0"
          d="M6 2h4v2h2v4h2v6h-2v2h-2v2H6v-2H4v-2H2V8h2V4h2V2z"
        />
      </svg>
      <span>HUEVO x1</span>
    </span>
  );
}