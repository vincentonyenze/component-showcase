// The starting point. React takes over the empty <div id="root"> in
// public/index.html and draws the <App /> component inside it.
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// StrictMode adds extra checks while developing (it can run some code
// twice on purpose, to catch mistakes). It does nothing in the real build.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
