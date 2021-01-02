import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import App from "./components/App";
import "./styles.css";
import "./styles.less";

const history = createBrowserHistory();

const mountNode = document.getElementById("app");
ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  mountNode
);
