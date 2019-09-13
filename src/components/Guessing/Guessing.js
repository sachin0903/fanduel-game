import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import PlayerOption from '../PlayerOption/PlayerOption';


const Guessing = ({ playerA, playerB, loadPlayers, guessPlayer}) => {

  const [lastGuessedPlayerId, setLastGuessedPlayerId] = useState(null);

  useEffect(() => {
    console.log('123');

    Promise.all([loadPlayers()])
      .then(() => {
        console.log('done');
      })
      .catch((e) => {
        console.log(e);
      });
  });

  const onNextClick = () => {
    guessPlayer();
  };

  const guess = (player) => {
    setLastGuessedPlayerId(player.id);
  };

  return (
    <Fragment>
      <PlayerOption player={playerA} guess={guess} altText="altText" hasGuessed = { playerA.id === lastGuessedPlayerId}/>
      <PlayerOption player={playerB} guess={guess} altText="altText" hasGuessed = { playerB.id === lastGuessedPlayerId}/>
      <button onClick={() => onNextClick()}>NEXT PLAYERS</button>
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
