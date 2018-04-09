import React from 'react';
import styled from 'styled-components';

import filledStar from '../../graphics/stars-plain.png';
import emptyStar from '../../graphics/star-empty.png';

const StyledStarImg = styled.img`
  height: 1rem;
  vertical-align: middle;
`;

const StyledStarContainer= styled.div`
  display: inline-block;
`;

const starPositions = new Array(5).fill(0);
const fiveStars = starPositions.map(star => <StyledStarImg src={filledStar} alt="filled stars" />);
const zeroStars = starPositions.map(star => <StyledStarImg src={emptyStar} alt="empty stars" />);

const Stars = props => {
  const { truncated_rating } = props;

  return (
    <StyledStarContainer>
      {fiveStars.slice(0, truncated_rating)}
      {zeroStars.slice(truncated_rating)}
    </StyledStarContainer>
  );
}

export default Stars;
