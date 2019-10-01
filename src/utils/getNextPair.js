const randomNumberUpTo = (max) => {
  return Math.floor(Math.random() * max);
};

const getNextPair = (allPlayers, seenPlayerIDs = []) => {
  if (allPlayers.length > 0) {
    const validPlayers = allPlayers.filter(
        ({id}) => !seenPlayerIDs.includes(id)
    );
    const playerA = validPlayers[randomNumberUpTo(validPlayers.length)];
    const validPlayersWithoutA = validPlayers.filter(
        player => player !== playerA
    );

    const playerB =
        validPlayersWithoutA[randomNumberUpTo(validPlayersWithoutA.length)];

    return [playerA.id, playerB.id];
  } else
  {
    return [];
  }
};

export { getNextPair };
