import React, { Component } from "react";
import Board from "./Board";
import BoardModal from "./BoardModal";
import * as APICall from "../api";

class Boards extends Component {
  state = { boards: [] };

  componentDidMount() {
    APICall.getBoards().then((data) => {
      const newBoards = data;
      this.setState({ boards: newBoards });
    });
  }

  createBoard = async (name) => {
    await APICall.createBoard(name);
    APICall.getBoards().then((data) => {
      const newBoards = data;
      this.setState({ boards: newBoards });
    });
  };

  render() {
    return (
      <div className="home-container">
        <div className="side-bar">
          <ul className="side-bar-list">
            <li>Boards</li>
            <li>Templates</li>
            <li>Home</li>
          </ul>
        </div>
        <div className="boards-main-container">
        <h1 className="boards-header">Your Workspace</h1>
        <div className="boards-container">
           
           {this.state.boards.map((eachBoard) => (
             <Board key={eachBoard.id} eachBoard={eachBoard} />
           ))}
           <BoardModal createBoard={this.createBoard} />
         </div>
        </div>
       
      </div>
    );
  }
}

export default Boards;
