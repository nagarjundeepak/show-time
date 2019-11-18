import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {loadState, saveState} from './localStorage';
import RootReducer from './reducers/rootReducer';

const middleware = [thunk];
const presistedState = loadState ();

const store = createStore (
  RootReducer,
  presistedState,
  compose (applyMiddleware (...middleware))
);

store.subscribe (() => {
  saveState (store.getState ());
});

export default store;
