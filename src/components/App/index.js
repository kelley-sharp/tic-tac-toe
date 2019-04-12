import React, { Component } from 'react';
import './style.scss';
import Board from '../Board';
import didWin from '../../helpers/didWin';
import processTurn from '../../helpers/processTurn';

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

    const hasWinner = didWin(updatedBoard);
    if (hasWinner) {
      winner = this.state.currentPlayer;
      gameOver = true;
      nextMessage = `${this.state.currentPlayer} wins!`;
      nextButtonText = 'Play again';
    } else if (!hasWinner && nextTurn === 10) {
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
      message: 'Player one (X) - make the first mark!',
      buttonText: 'End game'
    });
  };

  resetGame = () => {
    this.setState(getDefaultState);
  };

  render() {
    return (
      <div className="app">
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
            <Board
              board={this.state.board}
              frozen={this.state.gameOver}
              handleTurn={this.handleTurn}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
