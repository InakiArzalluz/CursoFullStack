import React from "react";
import ReactDOM from "react-dom";

const fullName = "Iñaki Arzálluz";
const currentDate = new Date();

ReactDOM.render(
  <div>
    <p>Created by {fullName}</p>
    <p>Copyright {currentDate.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
