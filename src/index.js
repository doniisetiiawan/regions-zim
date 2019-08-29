/* @flow */

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.routing.auth";

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<App />, root);
}
