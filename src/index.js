import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Component1 from "./Component1";
import Component2 from "./Component2";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
    <Router>
      <Component1 path='/' />
      <Component2 path='/2' />
    </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
