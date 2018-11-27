import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'components/App';

import store from 'store';

const root = ({ initialState={} }) => {
  return (
    <BrowserRouter>
      <Provider store={store(initialState)}>
        <Route component={App} />
      </Provider>
    </BrowserRouter>
  );
};

export default root;