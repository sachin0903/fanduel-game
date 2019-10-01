export const GAME = 'GAME';
export const PLAYERS = 'PLAYERS';
export const SEEN_PLAYERS = 'SEEN_PLAYERS';
export const SCORE = 'SCORE';

export const startGame = () => ({
  type: GAME,
  step: "GUESSING"
});

export const playersLoaded = (players) => ({
  type: PLAYERS,
  players
});


export const guessPlayer = (id) => ({
  step: "GUESSING",
  type: GAME,
  id
});

export const game = (id, players) => ({
  step: "GAME_COMPLETE",
  type: GAME,
  id,
  players
});

export const seenPlayers = (ids) => ({
  type: SEEN_PLAYERS,
  ids
});

export const setScore = (guessedCorrectly) => ({
  type: SCORE,
  guessedCorrectly
});

export const gameOver = () => ({
  step: "GAME_COMPLETE",
  type: GAME
});



export const loadPlayers = () => {
  return dispatch => {
     return fetch('../../../data/game.json')
        .then(response => response.json())
        .then(json => dispatch(playersLoaded(json.players)));
  }
};
