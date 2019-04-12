import React, { PureComponent } from 'react';
import './style.scss';
import Square from '../Square';

class Board extends PureComponent {
  handleClick = (row, col) => {
    //if board is not frozen (gameOver) and there is no value on that square, take a turn
    if (!this.props.frozen && this.props.board[row][col] === null) {
      this.props.handleTurn(row, col);
    }

    //if board is frozen, the square's value remains null
    if (this.props.frozen) {
      this.props.board[row][col] = null;
    }
  };

  render() {
    return (
      <div className="board">
        {this.props.board.map((row, rowIdx) => {
          return (
            <div className="row" key={`row${rowIdx}`}>
              {row.map((squareVal, colIdx) => {
                return (
                  <Square
                    handleClick={() => this.handleClick(rowIdx, colIdx)}
                    id={`square${rowIdx}${colIdx}`}
                    rowIdx={rowIdx}
                    colIdx={colIdx}
                    value={squareVal}
                    key={`square${rowIdx}${colIdx}`}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Board;
