import React from 'react';
import { Provider } from 'react-redux';
import Game from './handlers/Game';
import store from './store/store';
import './style.css';

const App = () => {
    return(
      <Provider store={store}>
        <Game />
      </Provider>
    );
};
export default App;
