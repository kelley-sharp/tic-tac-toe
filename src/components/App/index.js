import React, { Component } from 'react';
import './style.scss';
import Board from '../Board';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gamePending: true,
      gameOver: false,
      currentPlayer: 'X',
      turn: 1,
      message: '',
      buttonText: 'Start game',
      board: [[null, null, null], [null, null, null], [null, null, null]],
      winner: null
    };

    this.handleGameBegin = () => {
      this.setState({
        gamePending: false,
        message: 'Player one, make your first mark!'
      });
    };
  }
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
              <Board board={this.state.board} />
            </div>
            <button onClick={this.resetGame}>{this.state.buttonText}</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
