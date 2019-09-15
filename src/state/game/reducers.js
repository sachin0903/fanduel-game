import { handleActions} from 'redux-actions';
import reduceReducers from 'reduce-reducers';

import {
    START_GAME,
    PLAYERS_LOADED,
    GUESS_PLAYER
} from './actions';
import {gameOver, getNextPair, getPlayerScoreAndPlayedCount} from "../../utils";

const startGame = handleActions({
       [START_GAME]: (state) => ({
           ...state,
           step: "GUESSING",
           playerScore: 0,
           played: 0,
           seenPlayerIDs: [],
        })
    },
    {step: 'WELCOME', players:[]}
);

const playersLoaded = handleActions({

    [PLAYERS_LOADED]:( state, action) => ({
            ...state,
            players: [...action.players],
            seenPlayerIDs: [],
            nextPair: getNextPair(action.players),
            playerScore: 0,
            played: 0
        })
    },
    {}
);

const guessPlayer = handleActions({
    [GUESS_PLAYER]: (state, action ) => {
        const {seenPlayerIDs, nextPair, players } = state;
        const playerData = getPlayerScoreAndPlayedCount(state, action);

        const newSeenPlayerIDs = [...seenPlayerIDs, ...nextPair];

        if (gameOver(players, newSeenPlayerIDs)) {
            return {
                ...state,
                ...playerData,
                step: "GAME_COMPLETE"
            };
        }
        const newNextPair = getNextPair(players, newSeenPlayerIDs);
        return {
            ...state,
            ...playerData,
            seenPlayerIDs: newSeenPlayerIDs,
            nextPair: newNextPair
        }
    }
}, {});


const game = reduceReducers(
    startGame,
    playersLoaded,
    guessPlayer
);

export {startGame, playersLoaded, guessPlayer}

export default game;