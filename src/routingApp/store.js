/* @flow */

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer } from "./login.reducer";

const logger = createLogger({ duration: true });

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
