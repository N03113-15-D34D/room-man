export function EggBadge({ count }) {
  return (
    <span className={`badge rounded-0 border font-monospace ${count > 0 ? 'border-light text-light bg-dark' : 'border-secondary text-secondary bg-black'}`}>
      EGG: {count}
    </span>
  );
}
