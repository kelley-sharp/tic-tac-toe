import React, { Component } from 'react';
import './style.scss';
import Board from '../Board';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameOver: false,
      currentPlayer: 'X',
      turn: 1,
      message: '',
      buttonText: 'Start game',
      squares: [[null, null, null], [null, null, null], [null, null, null]],
      winner: null
    };
  }
  render() {
    return (
      <div className="board">
        <Board squares={this.state.squares} />
      </div>
    );
  }
}

export default App;
