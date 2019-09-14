import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import PlayerOption from '../PlayerOption/PlayerOption';


const Guessing = ({ playerA, playerB, loadPlayers, guessPlayer}) => {

  const [lastGuessedPlayerId, setLastGuessedPlayerId] = useState(null);
  const [hasGuessed, setHasGuessed] = useState(false);

  useEffect( () => {
    loadPlayers();
  }, [loadPlayers]);


  const guess = (player) => {
    setLastGuessedPlayerId(player.id);
    setHasGuessed(true);
  };

  const showButton = (playerA.id === lastGuessedPlayerId || playerB.id === lastGuessedPlayerId);

  const onClick = () => {
    guessPlayer(lastGuessedPlayerId);
    setHasGuessed(false);
  };


  return (
    <Fragment>
      <PlayerOption player={playerA} guess={guess} altText="altText" hasGuessed = {hasGuessed}/>
      <PlayerOption player={playerB} guess={guess} altText="altText" hasGuessed = {hasGuessed}/>
      {showButton && <button onClick={() => onClick()}>NEXT PLAYERS</button>}
    </Fragment>
  )

};

Guessing.propTypes = {
  playerA: PropTypes.object.isRequired,
  playerB: PropTypes.object.isRequired,
  loadPlayers: PropTypes.func.isRequired,
  guessPlayer: PropTypes.func.isRequired
};

export default Guessing;
