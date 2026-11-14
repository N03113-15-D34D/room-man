import { SoulCursor } from './SoulCursor';

export function RetroButton({ children, onClick, variant = 'outline-light', className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn btn-${variant} rounded-0 border-2 font-monospace d-inline-flex align-items-center ${className}`}
    >
      <SoulCursor />
      <span>{children}</span>
    </button>
  );
}
