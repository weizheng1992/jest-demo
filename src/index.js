
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import rootSaga from './sagas/index';

import GlobalContainer from './containers/GlobalContainer';


const store = configureStore();

store.runSaga(rootSaga);
const Root = () => (
  <Provider store={store} >
    <GlobalContainer />
  </Provider >
)

render(<Root />, document.getElementById('root'));