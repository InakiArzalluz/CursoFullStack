import React, { useState } from "react";

/*export default function ToDoItem(props) {
  let [striked, setStriked] = useState(false);
  function handleClick() {
    setStriked(!striked);
  }
  return (
    <li
      style={{ textDecoration: striked ? "line-through" : "none" }}
      onClick={handleClick}
    >
      {props.item}
    </li>
  );
}*/

export default function ToDoItem(props) {
  return <li onClick={() => props.onClick(props.id)}>{props.item}</li>;
}
