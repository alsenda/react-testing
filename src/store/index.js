import { createStore } from 'redux';
import reducers from 'store/reducers';

const store = (initialState = {}) => createStore(
  reducers,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;