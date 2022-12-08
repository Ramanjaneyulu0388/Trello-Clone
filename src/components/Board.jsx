import React from "react";

function Board(props) {
  return <div className="each-board">
      {props.eachBoard.name}
      </div>;
}

export default Board;
