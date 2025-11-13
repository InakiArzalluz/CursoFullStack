import React from "react";
import ReactDOM from "react-dom";

// Practice about inline Styling
// In JSX, the style attribute expect a mapping (an object),
// instead of a string representing that mapping.
// and every attribute goes from kebab-case to camelCase
headingStyle = {
  color: "red",
  fontSize: "20px", // font-size --> fontSize
};

ReactDOM.render(
  <h1 style={headingStyle}>
    Hello World! this is very long so that ESlint doesn't change it!
  </h1>,
  document.getElementById("root")
);
