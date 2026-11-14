import { useState, useEffect, useCallback, useMemo } from 'react';
import { ROOM_STATES } from '../../utils/constants';

// Coordenadas exactas del suelo púrpura dentro del viewBox (230 x 185)
function isWalkable(x, y) {
  // Claro superior alrededor del árbol (x: 64..158, y: 42..104)
  const inClearing =
    x >= 64 && x <= 158 &&
    y >= 42 && y <= 104;

  // Pasillo vertical inferior (x: 98..122, y: 100..168)
  const inCorridor =
    x >= 98 && x <= 122 &&
    y >= 100 && y <= 168;

  // Base del tronco del árbol (para no atravesarlo por encima)
  const hitsTrunk =
    x >= 102 && x <= 126 &&
    y >= 74 && y <= 92;

  return (inClearing || inCorridor) && !hitsTrunk;
}

export function ForgottenTreeScene({ step, onInteract }) {
  const [pos, setPos] = useState({ x: 110, y: 145 });
  const [dir, setDir] = useState('up');
  const [walkFrame, setWalkFrame] = useState(0);

  const showManSilhouette =
    step === ROOM_STATES.BEHIND_TREE || step === ROOM_STATES.OFFERING;

  const krisSprites = useMemo(() => ({
    up: ['/krisA1.png', '/krisA2.png', '/krisA1.png', '/krisA3.png'],
    down: ['/kris1.png', '/kris2.png', '/kris1.png', '/kris3.png'],
    left: ['/krisL1.png', '/krisL2.png', '/krisL1.png', '/KrisL3.png'],
    right: ['/krisD1.png', '/KrisD2.png', '/krisD1.png', '/KrisD3.png'],
  }), []);

  const moveKris = useCallback((dx, dy, nextDir) => {
    setDir(nextDir);
    setWalkFrame((f) => (f + 1) % 4);
    setPos((prev) => {
      const nx = prev.x + dx;
      const ny = prev.y + dy;
      return isWalkable(nx, ny) ? { x: nx, y: ny } : prev;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(key)) {
        e.preventDefault();
      }
      if (key === 'arrowup' || key === 'w') moveKris(0, -4, 'up');
      else if (key === 'arrowdown' || key === 's') moveKris(0, 4, 'down');
      else if (key === 'arrowleft' || key === 'a') moveKris(-4, 0, 'left');
      else if (key === 'arrowright' || key === 'd') moveKris(4, 0, 'right');
      else if (key === 'z' || key === 'enter') onInteract();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveKris, onInteract]);

  return (
    <div className="d-flex flex-column align-items-center w-100 my-2">
      <div
        role="button"
        tabIndex={0}
        onClick={onInteract}
        aria-label="Habitación del árbol"
        className="position-relative bg-black overflow-hidden user-select-none"
        style={{ width: '460px', height: '370px', cursor: 'pointer' }}
      >
        <svg
          width="460"
          height="370"
          viewBox="0 0 230 185"
          shapeRendering="crispEdges"
          className="w-100 h-100 d-block"
        >
          <rect width="230" height="185" fill="#000000" />
          <g fill="#5b285c">
            <rect x="76" y="34" width="76" height="14" />
            <rect x="60" y="48" width="102" height="36" />
            <rect x="60" y="84" width="96" height="12" />
            <rect x="74" y="96" width="76" height="12" />
            <rect x="94" y="108" width="32" height="62" />
          </g>

          {showManSilhouette && (
            <g>
              <rect x="136" y="66" width="10" height="22" fill="#180d24" />
              <rect x="138" y="59" width="6" height="7" fill="#231433" />
            </g>
          )}
        </svg>

        <img
          src={krisSprites[dir][walkFrame]}
          alt={`Kris caminando ${dir}`}
          className="position-absolute"
          style={{
            width: '26px',
            height: 'auto',
            imageRendering: 'pixelated',
            left: `${pos.x * 2}px`,
            top: `${pos.y * 2}px`,
            transform: 'translate(-50%, -85%)',
            pointerEvents: 'none',
          }}
        />

        <img
          src="/forgottentree.png"
          alt="Árbol carmesí de room_man"
          className="position-absolute top-0 start-50 translate-middle-x mt-3"
          style={{
            width: '185px',
            height: 'auto',
            imageRendering: 'pixelated',
            pointerEvents: 'none'
          }}
        />
      </div>

      <div className="d-flex align-items-center gap-2 mt-2 font-monospace small text-secondary">
        <span>Mover: Flechas / WASD</span>
        <span>|</span>
        <span>Interactuar: Z / Enter / Clic</span>
      </div>
    </div>
  );
}
