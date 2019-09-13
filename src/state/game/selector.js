import { createSelector } from 'reselect';

const playersSelector = state => { console.log('state123', state); return state && state.game.players};

const nextPairSelector = state => state && state.game.nextPair;

const playerSelector = createSelector(
  playersSelector,
  nextPairSelector,
  (players, nextPair) => (index) => players && players.find(id => nextPair[index] === id) // eslint-disable-line security/detect-object-injection
);

export { playerSelector };
