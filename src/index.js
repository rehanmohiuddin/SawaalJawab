import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextProvider from "./context";
import ToastContainer from "../src/Components/Toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ContextProvider>
      <App />
      <ToastContainer />
    </ContextProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
