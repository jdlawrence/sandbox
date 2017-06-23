const express = require('express');
const app = express();
const request = require('request');
const fs = require('fs');
const wstream = fs.createWriteStream('data.txt');

function formatChunk(chunk) {
  let splitChunk = chunk.toString().split('\n\n');
  let result = [];
  splitChunk.forEach(score => {
    let beginning = score.indexOf('{');
    let end = score.indexOf('}');
    let scoreJSON = score.substring(beginning, end + 1);
    result.push(scoreJSON);
  });
  return result;
}
let body = [];
request.get('http://live-test-scores.herokuapp.com/scores')
  .on('data', (chunk) => {
    let formattedChunk = formatChunk(chunk);
    body = body.concat(formattedChunk);
  });

function calculateStats(scores) {
  let students = {};
  let exams = {};
  scores.forEach(score => {
    students[scores] = students[scores] || [];
    students[scores].push(score);
  });
  console.log('&&&&&&&&&&&&&&', students.scores);
}

setTimeout(function () {
  calculateStats(body);
  body.forEach(score => {
    if (score.length > 0) {
      wstream.write(score + '\n');
      console.log('scoreJSON', score);
    }
  });
}, 10000);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});