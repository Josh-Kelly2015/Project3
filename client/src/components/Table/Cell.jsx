import React from "react";
// I should have as many Cells as I do DAY
const Cell = props => (
  <div className="col" project={props.project}>
    This is a cell
  </div>
);
export default Cell;
