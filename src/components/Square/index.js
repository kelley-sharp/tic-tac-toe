import React, { Component } from 'react';
import './style.scss';

class Square extends Component {
  render() {
    return <div className={`square ${this.props.id}`}>Square</div>;
  }
}

export default Square;
