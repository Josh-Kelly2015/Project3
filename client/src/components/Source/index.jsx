import React from "react";

function Draggable(props) {
  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData("transfer", target.id);
  };

  const dragOver = e => {
    e.stopPropagation();
  };
  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

export default Draggable;
