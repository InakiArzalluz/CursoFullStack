import React from "react";
import Login from "./Login";

let isLoggedIn = true;
let currentHour = new Date().getHours();

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {currentHour > 12 && <p>why are you still working?</p>}
    </div>
  );
}

export default App;
