const fs = require('fs');
const path = require('path');
const algoliasearch = require('algoliasearch');
require('dotenv').config();

const appID = process.env.ALGOLIA_APP_ID;
const apiKey = process.env.ALGOLIA_ADMIN_API_KEY;
const indexName = process.env.ALGOLIA_INDEX_NAME;
const client = algoliasearch(appID, apiKey);
const index = client.initIndex(indexName);

const restaurants = JSON.parse(fs.readFileSync(
  path.join(__dirname, 'cleanRestaurants.json'),
  'utf8'
));

index.addObjects(restaurants, (err, content) => {
  err ? console.error(err) : console.log('indexing successful');
});

// TODO: implement custom rule: cheap == less than $15

// const cheapRule = {
//   objectID: 'cheapRule',
//   condition: {
//     pattern: 'cheap',
//     anchoring: 'contains'
//   },
//   consequence: {
//     params: {
//       query: {
//         remove: 'cheap'
//       },
//       filters: 'price < 1'
//     }
//   }
// };

// index.saveRule(cheapRule, function (err, content) {
//   if (err) throw err;
//   console.log(content);
// });

// index.saveRule(cheapRule, { forwardToReplicas: true }, function (err, content) {
//   if (err) throw err;
//   console.log(content);
// });
