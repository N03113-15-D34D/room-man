import { useState } from 'react';
import { SoulCursor } from './SoulCursor';

export function RetroButton({ label, onClick, showSoul = true, variant = 'choice' }) {
  const [hovered, setHovered] = useState(false);

  if (variant === 'control') {
    return (
      <button
        type="button"
        className="btn btn-outline-light border-2 rounded-0 font-monospace small px-3 py-2"
        onClick={onClick}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`btn btn-link text-decoration-none rounded-0 d-inline-flex align-items-center gap-2 fs-4 px-2 py-1 ${
        hovered ? 'text-warning' : 'text-white'
      }`}
      style={{ fontFamily: "'VT323', monospace" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={onClick}
    >
      {showSoul && (
        <span className={hovered ? 'opacity-100' : 'opacity-0'}>
          <SoulCursor />
        </span>
      )}
      <span>{label}</span>
    </button>
  );
}