import { connect } from 'react-redux';
import Game from '../components/Game/Game';

export default connect(
  state =>  ({
    ...state,
    step: state.game.step
  })
)(Game);

