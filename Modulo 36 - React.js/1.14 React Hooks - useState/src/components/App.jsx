import React, { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
