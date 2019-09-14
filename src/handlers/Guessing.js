import { connect } from 'react-redux';
import Guessing from '../components/Guessing/Guessing';
import { loadPlayers, guessPlayer} from '../state/game/actions';
import {playerSelector} from "../state/game/selector";

export default connect(
  state => ({
    ...state,
    playerA: state.game.players.find(({id}) => state.game.nextPair[0] === id),
    playerB: state.game.players.find(({id}) => state.game.nextPair[1] === id)
  }),
  { loadPlayers, guessPlayer }
)(Guessing);

