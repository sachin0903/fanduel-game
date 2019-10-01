import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import PlayerOption from '../PlayerOption/PlayerOption';
import { getPlayer } from '../../utils/getPlayer';
import {gameComplete, didGuessCorrectly, getPlayerScoreAndPlayedCount} from "../../utils";

const Guessing = ({ players, nextPair, loadPlayers, guessPlayer, played, playerScore, seenPlayers, setScore, gameOver, seenPlayerIDs}) => {

  const [lastGuessedPlayerId, setLastGuessedPlayerId] = useState(null);
  const [hasGuessed, setHasGuessed] = useState(false);

  useEffect( () => {
    players.length === 0 && loadPlayers();
  }, [loadPlayers]);


  const guess = (player) => {
    setLastGuessedPlayerId(player.id);
    setHasGuessed(true);
  };


  const showButton = (players.length > 0 && nextPair.length > 0) && nextPair.indexOf(lastGuessedPlayerId) > -1;

  const playerA = getPlayer(players, nextPair)(0);
  const playerB = getPlayer(players, nextPair)(1);


  const onClick = () => {
    const newSeenPlayerIDs = [...seenPlayerIDs, ...nextPair];
    if (gameComplete(players, newSeenPlayerIDs)) {
      return gameOver();
    }
    const guessedCorrectly = didGuessCorrectly(players, lastGuessedPlayerId, nextPair);
    guessPlayer(lastGuessedPlayerId);
    seenPlayers(nextPair);
    setScore(guessedCorrectly);
    setHasGuessed(false);
  };


  return (
    (players.length > 0) ?
      <Fragment>
        <PlayerOption player={playerA} guess={guess} altText="altText" hasGuessed={hasGuessed}/>
        <PlayerOption player={playerB} guess={guess} altText="altText" hasGuessed={hasGuessed}/>
        {showButton && <button onClick={onClick}>NEXT PLAYERS</button>}
      </Fragment> : null
  )

};

Guessing.propTypes = {
  players: PropTypes.array,
  nextPair: PropTypes.array,
  loadPlayers: PropTypes.func.isRequired,
  guessPlayer: PropTypes.func.isRequired,
  seenPlayers: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
  gameOver: PropTypes.func.isRequired,
  seenPlayerIDs: PropTypes.array
};

export default Guessing;
