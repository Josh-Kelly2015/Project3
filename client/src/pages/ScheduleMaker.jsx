import React from "react";
import Board from "../components/Board";
import Card from "../components/Card";
import ListItem from "../components/DropDownButton";

function ScheduleMaker() {
  return (
    <div className="App">
      <main className="flexbox">
        {/* First Board with Card One  */}
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <ListItem>Drop Down Button</ListItem>
          </Card>
          <Card id="card-2" className="card" draggable="true">
            <ListItem>Drop Down Button</ListItem>
          </Card>
        </Board>

        {/* Second Board with Card Two */}
        <Board id="board-2" className="board"></Board>
      </main>
    </div>
  );
}

export default ScheduleMaker;
