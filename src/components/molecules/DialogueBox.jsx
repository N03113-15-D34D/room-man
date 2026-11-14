import { RetroButton } from '../atoms/RetroButton';
import { useTypewriter } from '../../hooks/useTypewriter';

export function DialogueBox({ node, onSelectOption, onBlip, onSelectSound }) {
  const { displayedText, isDone, skip } = useTypewriter(
    node.text,
    30,
    () => onBlip(node.voice)
  );

  const handleBoxClick = () => {
    if (!isDone) {
      skip();
    }
  };

  const handleOptionClick = (e, option) => {
    e.stopPropagation();
    onSelectSound();
    onSelectOption(option);
  };

  return (
    <section
      className="card bg-black text-white border border-4 border-white rounded-0 w-100 shadow-lg"
      style={{ maxWidth: '760px', minHeight: '200px', cursor: 'pointer' }}
      onClick={handleBoxClick}
      role="region"
      aria-label="Caja de diálogo"
    >
      <div className="card-header bg-black border-bottom border-secondary rounded-0 d-flex justify-content-between align-items-center py-2 px-3">
        <span
          className="text-secondary text-uppercase small"
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.7rem' }}
        >
          {node.speaker}
        </span>
        {!isDone && (
          <span
            className="text-muted"
            style={{ fontFamily: "'VT323', monospace", fontSize: '1.1rem' }}
          >
            [Clic para acelerar]
          </span>
        )}
      </div>

      <div className="card-body d-flex flex-column justify-content-between p-3">
        <p
          className="card-text fs-3 lh-sm mb-3"
          style={{ fontFamily: "'VT323', monospace", minHeight: '3.4rem' }}
        >
          {displayedText}
        </p>

        {isDone && (
          <div className="d-flex flex-wrap gap-3 pt-1">
            {node.options.map((option) => (
              <RetroButton
                key={option.label}
                label={option.label}
                onClick={(e) => handleOptionClick(e, option)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}