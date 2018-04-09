import React, { Component } from 'react';
import styled from 'styled-components';

import FacetOption from './FacetOption';
import StyledUL from './StyledUL';
import Header from './Header';
import { getRandomKey } from '../utils';

const StyledFilter = styled.div`
  margin-bottom: 1.25rem;
`;

class Facet extends Component {

  handleFacetClick = option => {
    this.props.onClick(this.props.facet, option);
  }

  render() {
    const { title, options } = this.props;

    const facetOptions = options.map(option => {
      return (
        <FacetOption {...option}
          key={getRandomKey()}
          onClick={this.handleFacetClick} />
      );
    });

    return (
      <StyledFilter>
        <Header>{title}</Header>
        {<StyledUL>
          {facetOptions}
        </StyledUL>}
      </StyledFilter>
    );
  }
}

export default Facet;
