import React from 'react';
import { Provider } from 'react-redux';
import Welcome from './handlers/Welcome';
import store from './store/store';
import './style.css';

const App = () => {
    return(
      <Provider store={store}>
        <Welcome />
      </Provider>
    );
};
export default App;
