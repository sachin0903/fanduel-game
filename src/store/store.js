import { applyMiddleware, compose, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from '../state/rootReducer';


let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-underscore-dangle
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promise, thunk)),
);

export default store;
