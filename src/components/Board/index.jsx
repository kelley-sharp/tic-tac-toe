import React, { Component } from 'react';
import './style.scss';
import Square from '../Square';

class Board extends Component {
  handleClick = (row, col) => {
    //if board is not frozen (gameOver) and there is no value on that square, take a turn.
    if (!this.props.frozen && this.props.board[row][col] === null) {
      this.props.handleTurn(row, col);
    }
  };

  render() {
    return this.props.board.map((row, rowIdx) => {
      return (
        <div className="row">
          {row.map((squareVal, colIdx) => {
            return (
              <Square
                handleClick={() => this.handleClick(rowIdx, colIdx)}
                id={`square${rowIdx}${colIdx}`}
                rowIdx={rowIdx}
                colIdx={colIdx}
                value={squareVal}
              />
            );
          })}
        </div>
      );
    });
  }
}

export default Board;
