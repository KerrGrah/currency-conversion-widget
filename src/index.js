import React from "react";
import ReactDOM from "react-dom";
import Widget from "./Widget";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";
import { injectGlobal } from "styled-components";

ReactDOM.render(
  <Provider store={store}>
    <Widget />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400');
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
    padding: 0;
    margin: 0;
    background: #444;
    font-family: 'Roboto', sans-serif;
    user-select: none;
}`;
