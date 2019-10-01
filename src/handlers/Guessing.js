import { connect } from 'react-redux';
import Guessing from '../components/Guessing/Guessing';
import { loadPlayers, guessPlayer, seenPlayers, setScore, gameOver} from '../state/game/actions';
import {playerSelector, seenPlayersSelector} from "../state/game/selectors";


export default connect(
  state => ({
    ...state,
      players: state.game.players,
      nextPair: playerSelector(state),
      seenPlayerIDs: state.game.seenPlayerIDs
  }),
  { loadPlayers, guessPlayer, seenPlayers, setScore, gameOver }
)(Guessing);