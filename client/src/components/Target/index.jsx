import React from "react";

function Target(props) {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("transfer");

    const card = document.getElementById(card_id);
    e.target.appendChild(card);
  };
  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <td
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </td>
  );
}

export default Target;
