import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Game from '../../handlers/Game';

const Welcome = ({ startGame }) => {
  return (
    <Fragment>
      <button onClick={() => startGame()} >Start</button>
      <Game />
    </Fragment>

  )
};

Welcome.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default Welcome;
