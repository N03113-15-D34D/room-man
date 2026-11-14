import { createContext, useContext, useState } from 'react';
import dialogue from '../data/dialogue.json';
import { ROOM_STATES } from '../utils/constants';
import { storageService } from '../services/storageService';

const RoomContext = createContext(null);

export function RoomProvider({ children }) {
  const [eggCount, setEggCount] = useState(() => storageService.getEggCount());
  const [step, setStep] = useState(ROOM_STATES.IDLE);
  const [currentDialogue, setCurrentDialogue] = useState(dialogue.initial);

  const interactWithTree = () => {
    if (step === ROOM_STATES.IDLE) {
      setStep(ROOM_STATES.BEHIND_TREE);
      setCurrentDialogue(dialogue.behindPrompt);
    } else if (step === ROOM_STATES.BEHIND_TREE) {
      setStep(ROOM_STATES.OFFERING);
      setCurrentDialogue(dialogue.offerEgg);
    } else if (step === ROOM_STATES.OFFERING) {
      setStep(ROOM_STATES.EGG_RECEIVED);
      const nextCount = eggCount + 1;
      setEggCount(nextCount);
      storageService.setEggCount(nextCount);
      setCurrentDialogue(dialogue.receivedEgg);
    } else if (step === ROOM_STATES.EGG_RECEIVED) {
      setStep(ROOM_STATES.EMPTY);
      setCurrentDialogue(dialogue.afterEgg);
    } else {
      setStep(ROOM_STATES.IDLE);
      setCurrentDialogue(dialogue.initial);
    }
  };

  const resetRoom = () => {
    storageService.reset();
    setEggCount(0);
    setStep(ROOM_STATES.IDLE);
    setCurrentDialogue(dialogue.initial);
  };

  return (
    <RoomContext.Provider value={{ eggCount, step, currentDialogue, interactWithTree, resetRoom }}>
      {children}
    </RoomContext.Provider>
  );
}

export const useRoom = () => useContext(RoomContext);
