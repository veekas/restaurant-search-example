const algoliasearch = require('algoliasearch');
const algoliasearchHelper = require('algoliasearch-helper');

const applicationID = 'P2VVTFKAT9';
const apiKey = 'e2cd32673038db57ca1076f49ceb4a94';
const index = 'restaurants';

const client = algoliasearch(applicationID, apiKey);
const helper = algoliasearchHelper(client, index, {
  disjunctiveFacets: [ 'food_type', 'truncated_rating', 'payment_options']
});

export default helper;
