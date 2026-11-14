export function ForgottenTreeScene({ isPeeking, manGone, onTreeClick }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 w-100 position-relative">
      <button
        type="button"
        className="btn btn-link border-0 p-0 text-decoration-none"
        onClick={onTreeClick}
        title="Examinar el árbol"
        aria-label="Habitación del árbol en Deltarune"
      >
        <svg
          width="360"
          height="320"
          viewBox="0 0 240 215"
          style={{ imageRendering: 'pixelated' }}
          aria-hidden="true"
        >
          {/* Plataforma morada de la habitación (Egg_room) */}
          <rect x="82" y="42" width="76" height="14" fill="#5c285c" />
          <rect x="64" y="56" width="112" height="58" fill="#5c285c" />
          <rect x="82" y="114" width="76" height="16" fill="#5c285c" />
          {/* Camino vertical inferior */}
          <rect x="102" y="130" width="36" height="85" fill="#5c285c" />

          {/* Silueta del Hombre detrás del árbol */}
          {!manGone && (
            <g
              style={{
                transform: isPeeking ? 'translateX(14px)' : 'translateX(0px)',
                transition: 'transform 0.35s steps(4)',
              }}
            >
              <rect x="128" y="84" width="8" height="8" fill="#d8d8e8" />
              <rect x="127" y="92" width="10" height="18" fill="#8b8ba3" />
              <rect x="133" y="87" width="2" height="2" fill="#000000" />
            </g>
          )}

          {/* Tronco retorcido con contorno magenta y raíces (Man_overworld_tree) */}
          <g>
            {/* Contorno magenta del tronco y raíces */}
            <path
              fill="#b8007a"
              d="M118 76h12v10h12v-4h16v3h-12v7h-14v8h-16v4h-6v8h12v3H88v-3h8v-6h6v-9h12v-7h4V76z"
            />
            {/* Relleno oscuro del tronco */}
            <path
              fill="#181425"
              d="M120 77h8v10h14v-4h12v1h-10v7h-14v8h-16v4h-6v8h10v2H90v-2h8v-6h6v-9h12v-7h4V77z"
            />
            {/* Detalles de raíces */}
            <rect x="96" y="111" width="2" height="4" fill="#b8007a" />
            <rect x="102" y="109" width="2" height="6" fill="#b8007a" />
            <rect x="108" y="110" width="2" height="5" fill="#b8007a" />
            <rect x="114" y="111" width="2" height="4" fill="#b8007a" />
          </g>

          {/* Copa del árbol (bloques redondeados fieles al sprite) */}
          {/* Capa púrpura oscuro (#8f0066) */}
          <rect x="86" y="34" width="28" height="24" rx="4" fill="#8f0066" />
          <rect x="78" y="48" width="38" height="28" rx="4" fill="#8f0066" />
          <rect x="116" y="64" width="46" height="16" rx="4" fill="#8f0066" />
          <rect x="148" y="56" width="24" height="18" rx="4" fill="#8f0066" />

          {/* Capa rojo carmesí brillante (#e61938) */}
          <rect x="134" y="16" width="22" height="10" rx="3" fill="#e61938" />
          <rect x="120" y="24" width="22" height="10" rx="3" fill="#e61938" />
          <rect x="94" y="26" width="22" height="12" rx="3" fill="#e61938" />
          <rect x="90" y="34" width="74" height="14" rx="4" fill="#e61938" />
          <rect x="112" y="42" width="70" height="22" rx="4" fill="#e61938" />
          <rect x="112" y="54" width="42" height="16" rx="4" fill="#e61938" />
          <rect x="68" y="48" width="22" height="8" rx="3" fill="#e61938" />
          <rect x="96" y="68" width="24" height="12" rx="3" fill="#e61938" />
          <rect x="114" y="76" width="18" height="12" rx="3" fill="#e61938" />

          {/* Manchas interiores magenta (#b8007a) */}
          <rect x="126" y="35" width="18" height="8" rx="3" fill="#b8007a" />
          <rect x="82" y="54" width="16" height="7" rx="3" fill="#b8007a" />
          <rect x="103" y="57" width="12" height="10" rx="3" fill="#b8007a" />
          <rect x="158" y="61" width="20" height="9" rx="3" fill="#b8007a" />

          {/* Kris de espaldas en el camino */}
          <g transform="translate(111, 152)">
            {/* Cabello oscuro */}
            <rect x="3" y="0" width="12" height="11" fill="#0d0b1a" />
            <rect x="2" y="2" width="14" height="8" fill="#0d0b1a" />
            <rect x="4" y="11" width="10" height="2" fill="#0d0b1a" />
            {/* Bufanda rosa/morada y hombrera plateada */}
            <rect x="2" y="12" width="4" height="4" fill="#a8d8ea" />
            <rect x="6" y="12" width="9" height="3" fill="#b565a7" />
            <rect x="13" y="14" width="4" height="4" fill="#b565a7" />
            {/* Capa y armadura */}
            <rect x="3" y="15" width="12" height="6" fill="#3a506b" />
            <rect x="5" y="15" width="8" height="5" fill="#70a1d7" />
            {/* Guantes y pantalones oscuros */}
            <rect x="1" y="18" width="2" height="3" fill="#a8d8ea" />
            <rect x="15" y="18" width="2" height="3" fill="#a8d8ea" />
            <rect x="4" y="21" width="4" height="5" fill="#0d0b1a" />
            <rect x="10" y="21" width="4" height="5" fill="#0d0b1a" />
            {/* Botas */}
            <rect x="3" y="26" width="5" height="3" fill="#70a1d7" />
            <rect x="10" y="26" width="5" height="3" fill="#70a1d7" />
          </g>
        </svg>
      </button>
    </div>
  );
}
