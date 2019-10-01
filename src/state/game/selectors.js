import { createSelector } from 'reselect';
import { getNextPair } from '../../utils/getNextPair';

const playersSelector = state =>  {
    return state.game && state.game.players;
};

const nextPairSelector = state => state.game && [...state.game.stage.nextPair, ...state.game.seenPlayerIDs];

const playerSelector = createSelector(
  playersSelector,
  nextPairSelector,
    (players, nextPair) => (players && nextPair) && getNextPair(players, nextPair)
);

const seenPlayersSelector = state => state.game && [...state.game.seenPlayerIDs, ...state.game.stage.nextPair];


export { playerSelector, seenPlayersSelector };
