import { connect } from 'react-redux';
import Guessing from '../components/Guessing/Guessing';
import { loadPlayers, guessPlayer} from '../state/game/actions';
import {playerSelector} from "../state/game/selectors";

export default connect(
  state => {console.log('state', state); return ({
      playerA: playerSelector(state)(0),
      playerB: playerSelector(state)(1)
  })},
  { loadPlayers, guessPlayer }
)(Guessing);