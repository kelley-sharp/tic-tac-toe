import React, { Component } from 'react';
import './style.scss';
import Board from '../Board';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameOver: false,
      currentPlayer: 1,
      message: '',
      buttonText: 'Start game'
    };
  }
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
