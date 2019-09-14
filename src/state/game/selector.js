import { createSelector } from 'reselect';

const playersSelector = state =>  state && state.game.players;

const nextPairSelector = state => state && state.game.nextPair;

const playerSelector = createSelector(
  playersSelector,
  nextPairSelector,
  (players, nextPair) => (index) => players && players.find(({id}) => nextPair[index] === id)
);

export { playerSelector };
