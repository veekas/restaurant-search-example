import React, { Component } from 'react';

import Stars from './Stars';

class RatingOption extends Component {

  handleClick = () => {
    this.props.onClick(this.props.value);
  }

  render() {
    const { value } = this.props;

    return (
      <li key={value} onClick={this.handleClick}>
        <Stars truncated_rating={value} />
      </li>
    );
  }
}

export default RatingOption;
