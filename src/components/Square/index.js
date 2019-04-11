import React, { Component } from 'react';
import './style.scss';

class Square extends Component {
  render() {
    return (
      <div
        className={`square ${this.props.id}`}
        onClick={this.props.handleClick}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Square;
