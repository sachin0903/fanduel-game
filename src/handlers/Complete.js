import { connect } from 'react-redux';
import Complete from '../components/Complete/Complete';
import { startGame } from '../state/game/actions';

export default connect(
  state => ({
    playerScore: state.game.score.playerScore,
    played: state.game.score.played
  }),
  { startGame }
)(Complete);

