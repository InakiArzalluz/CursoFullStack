import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";

function App() {
  let [notas, setNotas] = useState([]);

  function addNote(title, content) {
    setNotas([...notas, { id: notas.length, title: title, content: content }]);
    // Cancelar default del form
  }

  function deleteNote(id) {
    setNotas(
      notas.filter((nota) => {
        return nota.id != id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notas.map((note) => {
        let id = uuidv4();
        return (
          <Note
            key={id}
            id={id}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
