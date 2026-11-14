import { useNavigate } from 'react-router-dom';
import { RetroButton } from '../components/atoms/RetroButton';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-vh-100 bg-black text-white font-monospace d-flex flex-column justify-content-center align-items-center text-center p-4">
      <h1 className="h3 mb-3">* Esta habitación no existe.</h1>
      <RetroButton onClick={() => navigate('/')}>VOLVER AL INICIO</RetroButton>
    </div>
  );
}
