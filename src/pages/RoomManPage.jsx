import { useRoom } from '../context/RoomContext';
import { useAudioSynth } from '../hooks/useAudioSynth';
import { RoomTemplate } from '../components/templates/RoomTemplate';
import { RoomHud } from '../components/organisms/RoomHud';
import { ForgottenTreeScene } from '../components/organisms/ForgottenTreeScene';
import { DialogueBox } from '../components/molecules/DialogueBox';

export function RoomManPage() {
  const { currentId, currentNode, hasEgg, manGone, selectOption, peekBehindTree } = useRoom();
  const { isMuted, isPlayingBgm, startBgm, toggleMute, playBlip, playSelect } = useAudioSynth();

  const handleSelectOption = (option) => {
    startBgm();
    selectOption(option);
  };

  const handleTreeClick = () => {
    startBgm();
    if (peekBehindTree()) playSelect();
  };

  const isPeeking = currentId === 'behind_tree' || currentId === 'who_are_you';

  return (
    <RoomTemplate
      onFirstInteraction={startBgm}
      hud={<RoomHud isMuted={isMuted} isPlayingBgm={isPlayingBgm} hasEgg={hasEgg} onToggleAudio={toggleMute} />}
      scene={<ForgottenTreeScene isPeeking={isPeeking} manGone={manGone} onTreeClick={handleTreeClick} />}
      dialogue={<DialogueBox node={currentNode} onSelectOption={handleSelectOption} onBlip={playBlip} onSelectSound={playSelect} />}
    />
  );
}
