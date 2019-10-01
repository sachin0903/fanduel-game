export const gameComplete = (allPlayers, seenPlayers) => {
  return allPlayers.length - seenPlayers.length < 2;
};
