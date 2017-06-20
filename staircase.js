var fs = require('fs');

var result = fs.readFileSync('./crap.txt');

fs.readFile('./crap.txt', 'utf-8', function(err, data) {
  console.log('data: ', data);
});

console.log('result', result.toString());