import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  let [isSelected, setIsSelected] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setIsSelected(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isSelected && (<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />)}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          onClick={() => {setIsSelected(true)}}
          placeholder="Take a note..."
          rows={isSelected ? "3": "1"}
        />
        <Zoom in={isSelected}>
          <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
