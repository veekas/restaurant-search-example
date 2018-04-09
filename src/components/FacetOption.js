import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLI = styled.li`
  text-align: left;
`;

const StyledFilterElementContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;

  &--selected {
    background: #2897C5;
    border-radius: 3px;
    color: white;
  }'
`;

class FacetOption extends Component {

  handleClick = () => {
    this.props.onClick(this.props.name);
  }

  render() {
    const { name, count, isRefined } = this.props;
    const selectedStyle = isRefined ? '--selected' : '';

    return (
      <StyledLI key={name} onClick={this.handleClick}>
        <StyledFilterElementContainer className={selectedStyle}>
          <div>{name}</div>
          <div>{count}</div>
        </StyledFilterElementContainer>
      </StyledLI>
    );
  }
}

export default FacetOption;
