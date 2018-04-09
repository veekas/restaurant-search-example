import React from 'react';
import styled from 'styled-components';

import RatingsFilter from './Ratings/RatingsFilter';
import Facet from './Facet';

const StyledFacetsContainer = styled.div`
  grid-area: facets;
  height: 100%;
  width: 100%;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #D3D3D3;
`;

const Facets = props => {
  const { onRatingClick, filters, onFacetClick, facets } = props;
  return (
    <StyledFacetsContainer>
      <Facet
        facet="food_type"
        onClick={onFacetClick}
        options={facets.food_type}
        title="Cuisine/Food Type"
      />
      <RatingsFilter
        onClick={onRatingClick}
        selected={filters.truncated_rating}
      />
      <Facet
        facet="payment_options"
        onClick={onFacetClick}
        options={facets.payment_options}
        title="Payment Options"
      />
    </StyledFacetsContainer>
  );
}

export default Facets;
