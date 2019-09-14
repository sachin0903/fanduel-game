import {didGuessCorrectly} from "./didGuessCorrectly";

export const getPlayerScoreAndPlayedCount = (state, action) => {
    const guessedCorrectly = didGuessCorrectly(
        state.players,
        action.id,
        state.nextPair
    );

    const playerScore = state.playerScore + Number(guessedCorrectly);
    const played = state.played + 1;

    return {playerScore, played}
};