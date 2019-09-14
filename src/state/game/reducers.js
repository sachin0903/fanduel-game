import { handleAction, handleActions} from 'redux-actions';
import reduceReducers from 'reduce-reducers';

import {
    START_GAME,
    PLAYERS_LOADED,
    GUESS_PLAYER
} from './actions';
import {gameOver, getNextPair, getPlayerScoreAndPlayedCount} from "../../utils";
import jsonData from "../../../data/game";
const initialData = JSON.parse(JSON.stringify(jsonData));

const startGame = handleActions({
       [START_GAME]: (state) => ({
           ...state,
           step: "GUESSING",
           playerScore: 0,
           played: 0,
           seenPlayerIDs: [],
           nextPair: getNextPair(state.players)
        })
    },
    {step: 'WELCOME', players: initialData.players}
);

const playersLoaded = handleAction(
    'PLAYERS_LOADED',
    ( state, action) => (

        {
            ...state,
            players: [...action.players],
            seenPlayerIDs: [],
            nextPair: getNextPair(action.players),
            playerScore: 0,
            played: 0
        }
    ),
    {}
);

const guessPlayer = handleActions({
    [GUESS_PLAYER]: (state, action ) => {
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
        }
    }
}, {}
);

const game = reduceReducers(
    startGame,
    playersLoaded,
    guessPlayer
);

export {startGame, playersLoaded, guessPlayer}

export default game;