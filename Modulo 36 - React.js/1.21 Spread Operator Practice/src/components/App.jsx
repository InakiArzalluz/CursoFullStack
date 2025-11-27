import React, { useState } from "react";

function App() {
  let [inputNote, setInputNote] = useState("");
  let [notes, setNotes] = useState([]);

  function handleChange(event) {
    setInputNote(event.target.value);
  }

  function handleClick() {
    if (inputNote !== "") {
      setNotes((prevArray) => {
        return [...prevArray, inputNote];
      });
      setInputNote("");
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputNote} onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {notes.map((note) => {
            return <li>{note}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
