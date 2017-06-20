var Bluebird = require('bluebird');
var async = require('async');

function printOne(callback1) {
  setTimeout( () => {
    console.log('one');
    callback1();
  }, 6000);
  return true;
}

function printTwo(callback) {
  setTimeout( () => {
    console.log('two');
    callback();
  }, 4000);
  return true;
}

function printThree(callback) {
  setTimeout( () => {
    console.log('three');
    callback();
  }, 0);
  return true;
}

var promiseOne = Bluebird.promisify(printOne);
var promiseTwo = Bluebird.promisify(printTwo);
var promiseThree = Bluebird.promisify(printThree);

function forceAsync(func1, func2, func3) {
  func1( func2.bind(null, func3.bind(null, function() {})));
}

function forceAsyncP(printOne, promiseTwo, promiseThree) {
  promiseOne()
  .then(function(dummy) {
    promiseTwo();
  })
  .then(function(dummy) {
    promiseThree();
  }); 

}

function useAsync(func1, func2, func3) {
  async.series([func1, func2, func3]);
  // async.parallel([func1, func2, func3]);
}
// forceAsync(printOne, printTwo, printThree);
// forceAsync(promiseOne, promiseTwo, promiseThree);
useAsync(printOne, printTwo, printThree);

