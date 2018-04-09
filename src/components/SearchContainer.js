import React from 'react';
import styled from 'styled-components';

import SearchBar from './SearchBar';

const StyledSearchContainer = styled.div`
  grid-area: search;
  background-color: #00688c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = props => (
  <StyledSearchContainer>
    <SearchBar onChange={props.onChange} />
  </StyledSearchContainer>
)

export default SearchContainer;
