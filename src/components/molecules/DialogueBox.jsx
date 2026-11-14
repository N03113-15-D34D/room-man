import { useTypewriter } from '../../hooks/useTypewriter';

export function DialogueBox({ text, onBlip, onAdvance }) {
  const { displayed, isDone, skip } = useTypewriter(text, 28, onBlip);

  const handleClick = () => {
    if (!isDone) {
      skip();
    } else if (onAdvance) {
      onAdvance();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
      className="border border-4 border-white bg-black text-white font-monospace p-3 p-md-4 w-100 user-select-none"
      style={{ minHeight: '120px' }}
    >
      <p className="fs-5 mb-0">{displayed}</p>
    </div>
  );
}
