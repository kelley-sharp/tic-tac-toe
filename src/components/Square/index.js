import React, { Component } from 'react';
import './style.scss';

class Square extends Component {
  render() {
    return (
      <div>
        {this.props.value ? (
          //if the square has been clicked, place player's mark.
          <div
            className={`square ${this.props.id}`}
            onClick={this.props.handleClick}
          >
            {this.props.value}
          </div>
        ) : (
          //else, have invisible placeholder letter retain proper square size.
          <div
            className={`empty-square square ${this.props.id}`}
            onClick={this.props.handleClick}
          >
            {this.props.emptySquareVal}
          </div>
        )}
      </div>
    );
  }
}

export default Square;
