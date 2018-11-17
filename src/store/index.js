import { createStore, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'store/reducers';

const store = (initialState = {}) => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(reduxPromise),
    window.devToolsExtension && window.devToolsExtension(),
  )
);

export default store;