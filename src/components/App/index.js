import React, { Component } from 'react';
import './style.scss';
import Board from '../Board';
import didWin from '../../helpers/didWin';

const getDefaultState = () => ({
  gamePending: true,
  gameOver: false,
  currentPlayer: 'X',
  turn: 1,
  message: '',
  buttonText: 'Start game',
  board: [[null, null, null], [null, null, null], [null, null, null]],
  winner: null
});

function processTurn(board, position, player, turn) {
  //make a deep copy of the current board.
  let updatedBoard = board.map(row => row.map(val => val));

  //put the player mark in place in the new board.
  updatedBoard[position.row][position.col] = player;

  //change the player mark to the next player.
  let nextPlayer = player === 'X' ? 'O' : 'X';

  //update the turn.
  let nextTurn = turn + 1;

  //return an object containing updated state information.
  return { updatedBoard, nextPlayer, nextTurn };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getDefaultState();
  }

  handleTurn = (row, col) => {
    let { updatedBoard, nextPlayer, nextTurn } = processTurn(
      this.state.board,
      { row, col },
      this.state.currentPlayer,
      this.state.turn
    );
    //if the updated board shows someone winning, save that info in related variables.
    let winner = null;
    let gameOver = false;

    // if (didWin(updatedBoard)) {
    //   winner = this.state.currentPlayer;
    //   gameOver = true;
    // }

    //Update the state with new information.
    this.setState({
      board: updatedBoard,
      currentPlayer: nextPlayer,
      turn: nextTurn,
      winner: winner,
      gameOver: gameOver
    });
  };

  handleGameBegin = () => {
    this.setState({
      gamePending: false,
      message: 'Player one, make your first mark!',
      buttonText: 'End game'
    });
  };

  resetGame = () => {
    this.setState(getDefaultState);
  };

  render() {
    return (
      <div className="app">
        <div className="message">
          <p>{this.state.message}</p>
        </div>
        {this.state.gamePending ? (
          <div>
            <button onClick={this.handleGameBegin}>
              {this.state.buttonText}
            </button>
          </div>
        ) : (
          <div>
            <div className="board">
              <Board
                board={this.state.board}
                frozen={this.state.over}
                handleTurn={this.handleTurn}
              />
            </div>
            <button onClick={this.resetGame}>{this.state.buttonText}</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
