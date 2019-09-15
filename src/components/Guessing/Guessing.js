import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import PlayerOption from '../PlayerOption/PlayerOption';
import { getPlayer } from '../../utils/getPlayer';

const Guessing = ({ players, nextPair, loadPlayers, guessPlayer}) => {

  const [lastGuessedPlayerId, setLastGuessedPlayerId] = useState(null);
  const [hasGuessed, setHasGuessed] = useState(false);

  useEffect( () => {
    players.length === 0 && loadPlayers();
  }, [loadPlayers]);


  const guess = (player) => {
    setLastGuessedPlayerId(player.id);
    setHasGuessed(true);
  };

  const showButton = (players && nextPair) && nextPair.indexOf(lastGuessedPlayerId) > -1;

  const playerA = getPlayer(players, nextPair)(0);
  const playerB = getPlayer(players, nextPair)(1);

  const onClick = () => {
    guessPlayer(lastGuessedPlayerId);
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
  guessPlayer: PropTypes.func.isRequired
};

export default Guessing;
