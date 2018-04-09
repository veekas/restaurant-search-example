import React from 'react';
import styled from 'styled-components';

import HitRating from './HitRating';
import StyledImg from '../StyledImg';

const StyledHitContainer = styled.div`
  height: 10vh;
  margin-bottom: 2rem;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1.5fr 1fr 1fr;
  grid-template-areas:
    "image name"
    "image rating"
    "image meta"
`;

const StyledName = styled.h4`
  font-size: 1rem;
  margin: 0.25rem 0.75rem 0 0.25rem;
  grid-area: name;
`;

const StyledBody = styled.div`
  width: 100%;
`;

const StyledMetaInfo = styled.div`
  color: #707070;
  font-size: 0.875rem;
  grid-area: meta;
  padding: 0.25rem;
`;

const ImgContainer = styled.div`
  grid-area: image;
`;

const Hit = props => {
  const { food_type, image_url, neighborhood, name, price_range, stars_count, reviews_count } = props;

  return (
    <StyledHitContainer>
      <ImgContainer>
        <StyledImg src={image_url} alt="product image" />
      </ImgContainer>
      <StyledBody>
        <StyledName>
          {name}
        </StyledName>
        <HitRating rating={stars_count} reviews={reviews_count} />
        <StyledMetaInfo>
          {food_type} | {neighborhood} | {price_range}
        </StyledMetaInfo>
      </StyledBody>
    </StyledHitContainer>
  );
}

export default Hit;
