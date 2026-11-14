import { EggBadge } from '../atoms/EggBadge';

export function RoomHud({ eggCount, muted, onToggleMute, onReset, onExit }) {
  return (
    <header className="d-flex justify-content-between align-items-center w-100 py-2 px-3 border-bottom border-secondary font-monospace">
      <div className="d-flex align-items-center gap-2">
        <span className="text-secondary small">ROOM_MAN</span>
        <EggBadge count={eggCount} />
      </div>
      <div className="d-flex gap-2">
        <button type="button" onClick={onToggleMute} className="btn btn-sm btn-outline-light rounded-0">
          AUDIO: {muted ? 'OFF' : 'ON'}
        </button>
        <button type="button" onClick={onReset} className="btn btn-sm btn-outline-secondary rounded-0">
          RESET
        </button>
        <button type="button" onClick={onExit} className="btn btn-sm btn-outline-danger rounded-0">
          SALIR
        </button>
      </div>
    </header>
  );
}
