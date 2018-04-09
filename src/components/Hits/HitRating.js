import React from 'react';
import styled from 'styled-components';

import Stars from '../Ratings/Stars';

const HitRatingContainer = styled.div`
  grid-area: rating;
  padding: 0.25rem;
`;

const HitRating = props => {
  const { rating, reviews } = props;

  return (
    <HitRatingContainer>
      <span>{rating}</span>
      <Stars truncated_rating={rating} />
      <span>({reviews} reviews)</span>
    </HitRatingContainer>
  );
}

export default HitRating;
