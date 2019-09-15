import { connect } from 'react-redux';
import Guessing from '../components/Guessing/Guessing';
import { loadPlayers, guessPlayer} from '../state/game/actions';
import {playerSelector} from "../state/game/selectors";
import PropTypes from "prop-types";

export default connect(
  state => ({
    ...state,
      players: state.game.players,
      nextPair: state.game.nextPair
  }),
  { loadPlayers, guessPlayer }
)(Guessing);