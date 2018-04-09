import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.input`
  background: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  min-height: 2.5rem;
  padding: 0 0.75rem;
  width: 90%;
`;

class SearchBar extends Component {

  handleChange = e => {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <StyledSearchBar
        type="text"
        onChange={this.handleChange}
        placeholder="Search for Restaurants by Name, Cuisine, Location"
      />
    );
  }
};

export default SearchBar;
