import React, { useState } from "react";

function CreateArea(props) {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  function handleAdd(event) {
    props.onAdd(title, content);
    setTitle("");
    setContent("");
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
