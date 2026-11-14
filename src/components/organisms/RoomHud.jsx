import { useNavigate } from 'react-router-dom';
import { RetroButton } from '../atoms/RetroButton';
import { EggBadge } from '../atoms/EggBadge';

export function RoomHud({ isMuted, isPlayingBgm, hasEgg, onToggleAudio }) {
  const navigate = useNavigate();

  const audioLabel = isMuted
    ? 'AUDIO: OFF'
    : isPlayingBgm
      ? '♪ MAN: ON'
      : '♪ ACTIVAR MÚSICA';

  return (
    <header
      className="w-100 d-flex justify-content-between align-items-center gap-3 py-2"
      style={{ maxWidth: '760px' }}
    >
      <div className="d-flex align-items-center gap-3">
        <span
          className="text-secondary small"
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.65rem' }}
        >
          ROOM_MAN // ???
        </span>
        <EggBadge hasEgg={hasEgg} />
      </div>

      <div className="d-flex align-items-center gap-2">
        <RetroButton
          label={audioLabel}
          onClick={onToggleAudio}
          showSoul={false}
          variant="control"
        />
        <RetroButton
          label="SALIR"
          onClick={() => navigate('/')}
          showSoul={false}
          variant="control"
        />
      </div>
    </header>
  );
}