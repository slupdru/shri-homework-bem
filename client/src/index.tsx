import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/allPages.scss';
import './styles/main.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { App as AppDesktop } from './App@desktop';
import isTouchDevice from './helpers/isTouchDevice';
import { App as AppTouch } from './App@mobile';
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
  {isTouchDevice() ? <AppTouch /> : <AppDesktop/>}
  </Provider>,
 document.getElementById('root')
);
