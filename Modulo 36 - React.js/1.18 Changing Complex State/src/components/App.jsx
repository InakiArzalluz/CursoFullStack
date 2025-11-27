import React, { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let [isMouseOut, setIsMouseOut] = useState(true);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleMouseOver() {
    setIsMouseOut(false);
  }
  function handleMouseOut() {
    setIsMouseOut(true);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        value={name}
        onChange={handleChange}
      />
      <button
        style={{ backgroundColor: isMouseOut ? "white" : "black" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
