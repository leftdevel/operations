import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import App from "./components/App";
import "./styles.css";
import "./styles.less";

const mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
