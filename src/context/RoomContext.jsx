import { createContext, useContext, useState } from 'react';
import { getDialogueNode, getInitialNodeId } from '../services/dialogueService';

const RoomContext = createContext(null);

export function RoomProvider({ children }) {
  const [currentId, setCurrentId] = useState(getInitialNodeId());
  const [hasEgg, setHasEgg] = useState(false);
  const [manGone, setManGone] = useState(false);

  const currentNode = getDialogueNode(currentId);

  const selectOption = (option) => {
    if (option.reset) {
      setHasEgg(false);
      setManGone(false);
      setCurrentId(getInitialNodeId());
      return;
    }
    const nextNode = getDialogueNode(option.next);
    if (nextNode.giveEgg) setHasEgg(true);
    if (nextNode.manGone) setManGone(true);
    setCurrentId(nextNode.id);
  };

  const peekBehindTree = () => {
    if (currentId === 'start' && !manGone) {
      setCurrentId('behind_tree');
      return true;
    }
    return false;
  };

  return (
    <RoomContext.Provider value={{ currentId, currentNode, hasEgg, manGone, selectOption, peekBehindTree }}>
      {children}
    </RoomContext.Provider>
  );
}

export function useRoom() {
  const context = useContext(RoomContext);
  if (!context) throw new Error('useRoom debe usarse dentro de RoomProvider');
  return context;
}
