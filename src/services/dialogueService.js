import dialogueData from '../data/dialogue.json';

export function getDialogueNode(nodeId) {
  return dialogueData[nodeId] || dialogueData.start;
}

export function getInitialNodeId() {
  return 'start';
}
