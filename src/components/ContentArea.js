import React, { Component } from 'react';
import styled from 'styled-components';

import Hits from './Hits/Hits';
import Facets from './Facets';
import SearchContainer from './SearchContainer';
import helper from '../algoliaClient.js';

const StyledContentArea = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: #FDFDFD;
  overflow: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: grid;

  grid-template-columns: 1fr 3fr;
  grid-template-rows: minmax(90px, 1fr) 6fr;
  grid-template-areas:
    "search search"
    "facets hits";

  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    grid-template-columns: auto;
    grid-template-rows: minmax(90px, 1fr) auto 6fr;
    grid-template-areas:
      "search"
      "facets"
      "hits"
  }
`;

class ContentArea extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      hitCount: 0,
      queryTime: 0,
      results: [],
      filters: {
        truncated_rating: 0
      },
      facets: {
        food_type: [],
        payment_options: []
      },
    }
  }

  componentDidMount() {
    helper.on('result', this.handleResponse);

    navigator.geolocation.getCurrentPosition(location => {
      const { latitude, longitude } = location.coords;
      helper
        .setQueryParameter('aroundLatLng', `${latitude}, ${longitude}`)
        .search();
    }, err => console.error(err));

    helper
    .setQueryParameter('aroundPrecision', 100) // 100 meters
    .setQueryParameter('aroundRadius', 160935) // 100 miles
    .setQueryParameter('maxValuesPerFacet', 5)
    .setQueryParameter('hitsPerPage', 3)
      .search();
  }

  handleQuery = input => {
    this.setState({ query: input });
    helper.setQuery(input).search();
  }

  handleResponse = res => {
    const food_type = res.getFacetValues('food_type');
    const payment_options = res.getFacetValues('payment_options');

    this.setState({
      results: res.hits,
      facets: {
        food_type: food_type,
        payment_options: payment_options
      },
      hitCount: res.nbHits,
      queryTime: res.processingTimeMS,
    });
  }

  handleFacetClick = (facet, option) => {
    helper
      .removeDisjunctiveFacetRefinement(facet)
      .addDisjunctiveFacetRefinement(facet, option)
      .search();
  }

  handleRatingClick = (name, value) => {
    this.setState(state => ({
      filters: {
        ...state.filters,
        [name]: value
      }
    }));

    helper
      .removeDisjunctiveFacetRefinement(name)
      .addDisjunctiveFacetRefinement(name, value)
      .search();
  }

  render() {
    const { filters, facets, hitCount, queryTime, results } = this.state;

    return (
      <StyledContentArea>
        <SearchContainer onChange={this.handleQuery} />
        <Facets
          onRatingClick={this.handleRatingClick}
          filters={filters}
          facets={facets}
          onFacetClick={this.handleFacetClick}
          selected={filters.truncated_rating}
        />
        <Hits
          hitCount={hitCount}
          queryTime={queryTime}
          results={results}
        />
      </StyledContentArea>
    );
  }
}

export default ContentArea;
