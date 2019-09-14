import {
  START_GAME,
  PLAYERS_LOADED,
  GUESS_PLAYER
} from './actions';
import { getNextPair, getPlayerScoreAndPlayedCount, gameOver } from '../../utils';
import jsonData from '../../../data/game.json';

const initialData = JSON.parse(JSON.stringify(jsonData));

const game = (state = {...initialData, step: 'WELCOME'}, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        step: "GUESSING",
        playerScore: 0,
        played: 0,
        seenPlayerIDs: [],
        nextPair: getNextPair(state.players)
      };
    case PLAYERS_LOADED:
      return {
        ...state,
        players: [...action.players],
        seenPlayerIDs: [],
        nextPair: getNextPair(action.players),
        playerScore: 0,
        played: 0
      };
    case GUESS_PLAYER:
      const playerData = getPlayerScoreAndPlayedCount(state, action);

      const newSeenPlayerIDs = [...state.seenPlayerIDs, ...state.nextPair];

      if (gameOver(state.players, newSeenPlayerIDs)) {
        return {
          ...state,
          ...playerData,
          step: "GAME_COMPLETE"
        };
      }
      const newNextPair = getNextPair(state.players, newSeenPlayerIDs);
      return {
        ...state,
        ...playerData,
        seenPlayerIDs: newSeenPlayerIDs,
        nextPair: newNextPair
      };
    default:
      return state;
  }
};



export default game;
