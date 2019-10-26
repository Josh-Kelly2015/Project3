import React from "react";
import Employee from "../Employee";
function Card(props) {
  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = e => {
    e.stopPropagation();
  };
  return (
    <Employee
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </Employee>
  );
}

export default Card;
