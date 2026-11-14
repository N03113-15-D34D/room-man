import { useNavigate } from 'react-router-dom';
import { RetroButton } from '../components/atoms/RetroButton';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="container-fluid bg-black text-white vh-100 d-flex flex-column justify-content-center align-items-center p-4">
      <div className="card bg-black text-white border border-4 border-white rounded-0 p-4 text-center w-100" style={{ maxWidth: '540px' }}>
        <h1 className="fs-3 text-danger mb-3" style={{ fontFamily: "'Press Start 2P', monospace" }}>
          404 // VACÍO
        </h1>
        <p className="fs-4 text-white mb-4" style={{ fontFamily: "'VT323', monospace" }}>
          * No hay ningún árbol aquí. Solo oscuridad.
        </p>
        <div className="d-flex justify-content-center">
          <RetroButton label="Volver al inicio" onClick={() => navigate('/')} />
        </div>
      </div>
    </main>
  );
}
