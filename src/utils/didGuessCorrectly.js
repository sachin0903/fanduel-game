const didGuessCorrectly = (players, guessedPlayerID, currentPairIDs) => {
  return players
      .filter(element => currentPairIDs.includes(element.id))
      .reduce((accumulator, currentValue) => {
          return accumulator.id === guessedPlayerID
            ? accumulator.fppg > currentValue.fppg
            : currentValue.fppg > accumulator.fppg;
  });
/*
  const guessedPlayerFPPG = players.find(({ id }) => guessedPlayerID === id).fppg;
  const otherPlayerID = currentPairIDs.find(id => id !== guessedPlayerID);
  const otherPlayerFPPG = players.find(({ id }) => otherPlayerID === id).fppg;
  return guessedPlayerFPPG > otherPlayerFPPG;*/
};

export { didGuessCorrectly };
