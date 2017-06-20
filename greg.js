var imageSearch = require('node-google-image-search');

var results = imageSearch('milk', callback, 0, 5);

function callback(results) {
  console.log('results', results);
}