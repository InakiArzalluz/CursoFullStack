import React, { useState } from "react";

function App() {
  let nameInput = "";
  let [name, setName] = useState("");
  let [isMouseOut, setIsMouseOut] = useState(true);

  function handleMouseOver() {
    setIsMouseOut(false);
  }
  function handleMouseOut() {
    setIsMouseOut(true);
  }
  function setNameInput(nameFromInput) {
    nameInput = nameFromInput;
  }

  function handleClick() {
    setName(nameInput);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={(event) => setNameInput(event.target.value)}
      />
      <button
        style={{ "background-color": isMouseOut ? "white" : "black" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
