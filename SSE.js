const express = require('express');
const app = express();
const request = require('request');

// request.get('http://live-test-scores.herokuapp.com/scores').pipe(process.stdout);
var body = [];
request.get('http://live-test-scores.herokuapp.com/scores')
  .on('data', (chunk) => {
    body.push(chunk);
  });

setTimeout(function () {
  console.log(body.toString().split('\n\n'));

}, 15000);
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});