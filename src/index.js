import React from "react";
import ReactDOM from "react-dom";
import Converter from "./Converter";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";
import { injectGlobal } from "styled-components";

ReactDOM.render(
  <Provider store={store}>
    <Converter />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto:200,300,400');
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
    padding: 0;
    margin: 0;
    background: #333;
    font-family: 'Roboto', sans-serif;
    user-select: none;
}`;
