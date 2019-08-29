/* @flow */

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import { reducer } from "./counter.reducer.js";

const logger = createLogger({ diff: true, duration: true });

export const store =
  process.env.NODE_ENV === "development"
    ? createStore(reducer, applyMiddleware(logger))
    : createStore(reducer);
