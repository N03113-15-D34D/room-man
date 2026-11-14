import { useNavigate } from 'react-router-dom';
import { useRoom } from '../context/RoomContext';
import { useAudioSynth } from '../hooks/useAudioSynth';
import { RoomHud } from '../components/organisms/RoomHud';
import { ForgottenTreeScene } from '../components/organisms/ForgottenTreeScene';
import { DialogueBox } from '../components/molecules/DialogueBox';
import { RoomTemplate } from '../components/templates/RoomTemplate';

export function RoomManPage() {
  const navigate = useNavigate();
  const { eggCount, step, currentDialogue, interactWithTree, resetRoom } = useRoom();
  const { muted, toggleMute, playBlip } = useAudioSynth();

  return (
    <RoomTemplate
      hud={
        <RoomHud
          eggCount={eggCount}
          muted={muted}
          onToggleMute={toggleMute}
          onReset={resetRoom}
          onExit={() => navigate('/')}
        />
      }
      scene={<ForgottenTreeScene step={step} onInteract={interactWithTree} />}
      dialogue={
        <DialogueBox
          text={currentDialogue}
          onBlip={() => playBlip(380, 0.04)}
          onAdvance={interactWithTree}
        />
      }
    />
  );
}
