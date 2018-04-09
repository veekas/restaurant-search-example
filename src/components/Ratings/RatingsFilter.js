import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Rating from './Rating';
import StyledUL from '../StyledUL';
import { getRandomKey } from '../../utils';

const StyledRatingsFilterContainer = styled.div`
  margin-bottom: 1.25rem;
`;

class RatingsFilter extends Component {

  handleClick = value => {
    this.props.onClick('truncated_rating', value);
  }

  render() {
    const { selected } = this.props;

    const optionsArray = [0, 1, 2, 3, 4, 5];
    const optionsMap = optionsArray.map(n => {
      return (
        <Rating
          onClick={this.handleClick}
          selected={n === selected}
          value={n}
          key={getRandomKey()}
        />
      );
    });

    return (
      <StyledRatingsFilterContainer>
        <Header>
          Ratings
        </Header>
        <StyledUL>
          {optionsMap}
        </StyledUL>
      </StyledRatingsFilterContainer>
    );
  }
}

export default RatingsFilter;
