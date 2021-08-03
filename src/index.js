import React from "react";
import "./index.css";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "./helpers/store";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
reportWebVitals();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
