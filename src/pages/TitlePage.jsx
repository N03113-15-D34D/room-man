import { useNavigate } from 'react-router-dom';
import { RetroButton } from '../components/atoms/RetroButton';

export function TitlePage() {
  const navigate = useNavigate();

  return (
    <main className="container-fluid bg-black text-white vh-100 d-flex flex-column justify-content-center align-items-center p-4">
      <div className="card bg-black text-white border border-4 border-white rounded-0 p-4 text-center w-100" style={{ maxWidth: '580px' }}>
        <p className="text-secondary text-uppercase mb-2" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.65rem' }}>
          UN ENCUENTRO ENTRE HABITACIONES
        </p>
        <h1 className="fs-2 text-white mb-4" style={{ fontFamily: "'Press Start 2P', monospace", lineHeight: '1.5' }}>
          THE FORGOTTEN MAN&apos;S TREE
        </h1>
        <p className="fs-4 text-light mb-4" style={{ fontFamily: "'VT323', monospace" }}>
          * Hay un árbol carmesí esperando en algún lugar donde no debería haber nada.
        </p>
        <div className="d-flex justify-content-center">
          <RetroButton label="Entrar a la habitación" onClick={() => navigate('/room-man')} />
        </div>
      </div>
    </main>
  );
}
