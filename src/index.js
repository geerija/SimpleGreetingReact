import React from "react";
import ReactDom from "react-dom";
import "./index.css";

let t = new Date();
t = t.getHours();
let greetings = " ";
let cssStyle = {};

if (t >= 1 && t < 12) {
  greetings = "Good Morning";
  cssStyle.color = "Yellow";
} else if (t >= 12 && t < 19) {
  greetings = "Good Afternoon";
  cssStyle.color = "Orange";
} else {
  greetings = "Good Night";
  cssStyle.color = "Red";
}

ReactDom.render(
  <>
    <div>
      <h1>
        {" "}
        Hello Sir, <span style={cssStyle}>{greetings}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
