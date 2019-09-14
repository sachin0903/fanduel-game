import React from 'react';
import PropTypes from 'prop-types';
import Guessing from '../../handlers/Guessing';
import Complete from "../../handlers/Complete";
import Welcome from '../../handlers/Welcome';

const Game = ({ step }) => {
  switch (step){
    case 'WELCOME':
      return <Welcome />
    case 'GUESSING':
      return <Guessing />;
    case 'GAME_COMPLETE':
      return <Complete />;
    default:
      return <div>Welcome</div>
  }
};

Game.propTypes = {
  step: PropTypes.string
};

export default Game;
