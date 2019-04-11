import React, { Component } from 'react';
import './style.scss';
import Square from '../Square';

class Board extends Component {
  render() {
    return this.props.board.map((row, rowIdx) => {
      return row.map((squareVal, colIdx) => {
        return (
          <Square
            id={`square${rowIdx}${colIdx}`}
            rowIdx={rowIdx}
            colIdx={colIdx}
            value={squareVal}
          />
        );
      });
    });
  }
}

export default Board;
