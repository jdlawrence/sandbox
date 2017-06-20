var express = require('express')
var app = express()

var bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function(req, res){
  console.log('adf', req.params);
  res.send('adf')
})
app.get('/jamil/:peanut', function (req, res) {
  console.log('req', req.params.peanut);
  res.send('Hello Worldasdfasdfs!')
});

app.post('/something', function (req, res) {
  console.log('req.body', req.body);
  res.end(JSON.stringify(req.body.jamil));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});