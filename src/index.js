import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

//hydrate is for server-side rendering
ReactDOM.hydrate(
  <App />,
  document.getElementById("mountNode"),
);