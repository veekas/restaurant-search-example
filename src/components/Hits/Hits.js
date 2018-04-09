import React from 'react';
import styled from 'styled-components';

import HitMap from './HitMap';
import Header from '../Header';
import ShowMore from '../ShowMore';
import { inSeconds } from '../../utils';

const StyledHitsContainer = styled.div`
  grid-area: hits;
  margin: 1.5rem 0;
  padding: 0;
`;

const Hits = props => {
  const { hitCount, queryTime, results } = props;
  const sec = inSeconds(queryTime);

  return (
    <StyledHitsContainer>
      <Header>
        <span>
          <strong>{hitCount} results found</strong> in {sec} seconds
          </span>
      </Header>
      <HitMap results={results} />
      <ShowMore />
    </StyledHitsContainer>
  );
};

export default Hits;
