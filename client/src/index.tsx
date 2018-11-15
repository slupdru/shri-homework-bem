import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { App as AppDesktop } from "./App@desktop";
import { App as AppTouch } from "./App@mobile";
import isTouchDevice from "./helpers/isTouchDevice";
import reducer from "./reducers";
const store = createStore(
  reducer,
  applyMiddleware(thunk),
);
ReactDOM.render(
  <Provider store={store}>
  {isTouchDevice() ? <AppTouch /> : <AppDesktop/>}
  </Provider>,
 document.getElementById("root"),
);
