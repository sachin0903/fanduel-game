import React from 'react';
import PropTypes from 'prop-types';
import Guessing from '../../handlers/Guessing';
import Complete from "../../handlers/Complete";

const Game = ({ step }) => {
  switch (step){
    case 'GUESSING':
      return <Guessing />;
    case 'GAME_COMPLETE':
      return <Complete />;
    default:
      return <div>Error</div>
  }
};

Game.propTypes = {
  step: PropTypes.string
};

export default Game;
