import React from "react";
import ReactDOM from "react-dom";

var name = "Iñaki";
var hackyNumber = 0.3;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your tricky number is 0.1: {hackyNumber - 0.2}</p>
  </div>,
  document.getElementById("root")
);
