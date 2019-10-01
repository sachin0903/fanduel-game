import { handleActions} from 'redux-actions';
import { combineReducers } from 'redux';

import {
    GAME,
    PLAYERS,
    SEEN_PLAYERS,
    SCORE
} from './actions';

const defaultState = {step: "WELCOME", nextPair: []};


const stage = handleActions({
    [GAME]: (state, action) => {
        return {
        ...state,
        id: action.id,
        step: action.step
    }}
}, defaultState);

const players = handleActions({
    [PLAYERS]: (state, action) => action.players }, []);

const seenPlayerIDs = handleActions({
    [SEEN_PLAYERS]: (state, action) => {
        return [...state, ...action.ids]
    }
}, []);

const score = handleActions({
    [SCORE]: (state, action) => {
        return {played: state.played + 1, playerScore: state.playerScore + Number(action.guessedCorrectly) }
    }
}, {played:0, playerScore:0});


/*
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

        if (gameComplete(players, newSeenPlayerIDs)) {
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
*/



// export {startGame, playersLoaded, guessPlayer}

const game = combineReducers({
    stage,
    players,
    seenPlayerIDs,
    score
});

export { stage, players, seenPlayerIDs, score }

export default game;