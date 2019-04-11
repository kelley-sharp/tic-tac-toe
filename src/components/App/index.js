import React, { Component } from 'react';
import './style.scss';
import Board from '../Board';
import { didWin } from '../../helpers/didWin';

const getDefaultState = () => ({
  gamePending: true,
  gameOver: false,
  currentPlayer: 'X',
  turn: 1,
  message: '',
  buttonText: 'Start game',
  board: [[null, null, null], [null, null, null], [null, null, null]],
  winner: null,
  emptySquareVal: 'P'
});

function processTurn(board, position, player, turn) {
  //make a deep copy of the current board.
  let updatedBoard = board.map(row => row.map(val => val));

  //put the player mark in place in the new board
  updatedBoard[position.row][position.col] = player;

  //change the player mark to the next player
  let nextPlayer = player === 'X' ? 'O' : 'X';

  //update the message
  let nextMessage =
    player === 'O'
      ? 'Player one - make your move!'
      : 'Player two - make your move!';

  //update the turn
  let nextTurn = turn + 1;

  //return an object containing updated state information
  return { updatedBoard, nextPlayer, nextMessage, nextTurn };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getDefaultState();
  }

  handleTurn = (row, col) => {
    let { updatedBoard, nextPlayer, nextMessage, nextTurn } = processTurn(
      this.state.board,
      { row, col },
      this.state.currentPlayer,
      this.state.turn
    );
    //if the updated board shows someone winning, save that info in related variables
    let winner = null;
    let gameOver = false;
    let nextButtonText = 'End game';

    if (didWin(updatedBoard)) {
      winner = this.state.currentPlayer;
      gameOver = true;
      nextMessage = `${this.state.currentPlayer} wins!`;
      nextButtonText = 'Play again';
    }

    //if all the squares are filled, no one wins
    if (nextTurn === 10) {
      gameOver = true;
      nextMessage = "It's a scratch, no one wins.";
      nextButtonText = 'Play again';
    }

    //Update the state with new information
    this.setState({
      board: updatedBoard,
      currentPlayer: nextPlayer,
      message: nextMessage,
      turn: nextTurn,
      winner: winner,
      gameOver: gameOver,
      buttonText: nextButtonText,
      frozen: gameOver
    });
  };

  handleGameBegin = () => {
    this.setState({
      gamePending: false,
      message: 'Player one - make the first mark!',
      buttonText: 'End game'
    });
  };

  resetGame = () => {
    this.setState(getDefaultState);
  };

  render() {
    return (
      <div className="app">
        {/* <div className="header">
          <p>Tic Tac Toe</p>
        </div> */}
        {this.state.gamePending ? (
          <div>
            <button
              className="pending-game-button"
              onClick={this.handleGameBegin}
            >
              {this.state.buttonText}
            </button>
            <div className="message">
              <p>{this.state.message}</p>
            </div>
            <div className="board-placeholder" />
          </div>
        ) : (
          <div className="board-button-container">
            <button onClick={this.resetGame}>{this.state.buttonText}</button>
            <div className="message">
              <p>{this.state.message}</p>
            </div>
            <div className="board">
              <Board
                emptySquareVal={this.state.emptySquareVal}
                board={this.state.board}
                frozen={this.state.gameOver}
                handleTurn={this.handleTurn}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
