import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const currentHour = currentDate.getHours();
var headingText = "Good morning";
var headingStyle = { color: "red" };

if (currentHour >= 12 && currentHour < 18) {
  headingText = "Good afternoon";
  headingStyle.color = "green";
} else {
  if (currentHour >= 18) {
    headingText = "Good evening";
    headingStyle.color = "blue";
  }
}

ReactDOM.render(
  <h1 style={headingStyle}>{headingText}</h1>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
