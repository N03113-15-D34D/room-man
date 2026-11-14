import { useNavigate } from 'react-router-dom';
import { RetroButton } from '../components/atoms/RetroButton';

export function TitlePage() {
  const navigate = useNavigate();

  return (
    <div className="min-vh-100 bg-black text-white font-monospace d-flex flex-column justify-content-center align-items-center text-center p-4">
      <p className="text-danger small mb-2">DELTARUNE // ROOM_MAN</p>
      <h1 className="display-6 fw-bold mb-3">THE FORGOTTEN MAN&apos;S TREE</h1>
      <p className="text-secondary mb-4" style={{ maxWidth: '460px' }}>
        Entre habitaciones que no deberían existir, un árbol carmesí aguarda en silencio.
      </p>
      <RetroButton onClick={() => navigate('/room')}>
        ENTRAR A LA HABITACIÓN
      </RetroButton>
    </div>
  );
}
