import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./styles/styles.css";
import "./styles/styles.less";

const mountNode = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  mountNode
);
