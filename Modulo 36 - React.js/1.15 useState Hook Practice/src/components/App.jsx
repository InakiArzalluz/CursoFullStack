import React, { useState } from "react";

function App() {
  let [time, setTime] = useState(new Date().toTimeString().split(" ")[0]);
  let started = false;

  function updateTime() {
    let newTime = new Date().toTimeString().split(" ")[0];
    setTime(newTime);
  }

  function startUpdatingTime() {
    if (!started) {
      setInterval(updateTime, 1000);
    }
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={startUpdatingTime}>Get Time</button>
    </div>
  );
}

export default App;
