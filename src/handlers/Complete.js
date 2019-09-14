import { connect } from 'react-redux';
import Complete from '../components/Complete/Complete';
import { startGame } from '../state/game/actions';

export default connect(
  state => ({
    playerScore: state.game.playerScore,
    played: state.game.played + 1
  }),
  { startGame }
)(Complete);

