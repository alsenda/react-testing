import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

const root = ({ children, initialState={} }) => {
  return (
    <Provider store={store(initialState)}>
      {children}
    </Provider>
  );
};

export default root;