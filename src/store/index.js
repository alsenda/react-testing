import { createStore, applyMiddleware, compose } from 'redux';
import async from 'middlewares/async';
import reducers from 'store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = (initialState = {}) => createStore(
  reducers,
  initialState,
  composeEnhancers(
    applyMiddleware(async)
  )
);

export default store;