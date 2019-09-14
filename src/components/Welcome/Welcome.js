import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Welcome = ({ startGame }) => {
  return (
    <Fragment>
        <h1>Welcome</h1>
        <button onClick={() => startGame()}>Start</button>
    </Fragment>
  )
};

Welcome.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default Welcome;
