import React, { PureComponent } from 'react';
import './style.scss';

class Square extends PureComponent {
  render() {
    const squareClass = this.props.value ? `square` : `empty-square square`;
    return (
      <div className={squareClass} onClick={this.props.handleClick}>
        <span className="mark">{this.props.value}</span>
      </div>
    );
  }
}

export default Square;
