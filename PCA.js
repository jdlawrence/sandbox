// Write a function, intersection, that creates an array of unique values that are 
// included in both arrays. The elements are compared using strict equals (===). 
// The order and references of result values are determined by the first array. 

// example use 
// console.log(intersection([1, 2, 3, 4, 5], [5, 2, 6, 8, 0]));
// returns [2, 5]

function intersection(arr1, arr2) {
  var result = [];
  var storage = {};
  // Go through all values in second array, adding them to an object
  for (var i = 0; i < arr2.length; i++) {
    storage[arr2[i]] = true;
  }

  // Go through value in first array, and if they're in the storage obj, push them to result
  for (i = 0; i < arr1.length; i++) {
    if (storage[arr1[i]]) {
      result.push(arr1[i]);
    }
  }
  return result;

}

// *******************************************************
// Write a function that calculates the digit sum of a number. Use a higher order function 
// (such as forEach, map, reduce) in your solution. 

// example use
// console.log(digitSum(1374));
// returns 15 (1 + 3 + 7 + 4 = 15)
function digitSum(num) {
  var numArr = num.toString().split('');

  return numArr.reduce((acc, currVal) => {
    acc += parseInt(currVal);
    return acc;
  }, 0);
}

// **************************************************************
// Write a function, intersectionBy. This method is like intersection except that it accepts 
// an iteratee which is invoked for each element of each array to generate the criterion 
// by which they're compared. The order and references of result values are determined by 
// the first array. The iteratee is invoked with one argument: (value). If no iteratee is
// given, use the identity function. 
// Please use at least one higher order function (for example: map, reduce, filter, forEach)
// to complete this function. 

// example use
// console.log(intersectionBy([187, 123, 142, 78, 143], [198, 303, 87], digitSum));
// for reference, the digit sums are [16, 6, 7, 15, 8] and [18, 6, 15]
// returns [123, 78]
function intersectionBy(arr1, arr2, callback) {
  var storage = {};

  arr2.forEach(val => {
    storage[callback(val)] = true;
  });

  return arr1.reduce((acc, currVal) => {
    if (storage[callback(currVal)]) {
      acc.push(currVal);
    }
    return acc;
  }, []);
}

// *****************************************************************
// Write a function that compares the (potentially deeply nested) keys of two objects to determine if 
// they contain the same keys. 

// example use
// debugger;
// console.log('***', sameKeys({ a: 1, b: { c: 2 } }, { a: 3, b: 2, c: 3 }));
// returns true
// debugger;

// console.log(sameKeys({ a: 1, b: 2, c: 3 }, { a: 3, b: 4 }));
// returns false

function combine(obj1, obj2) {
  for (var key in obj2) {
    if (!obj1.hasOwnProperty(key)) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}

function flatten(obj) {
  var flattened = {};
  for (var key in obj) {
    flattened[key] = true;
    if (typeof obj[key] === 'object') {
      var nested = flatten(obj[key]);
      combine(flattened, nested);
    }

  }
  return flattened;
}

function sameKeys(obj1, obj2) {
  // var result = true;
  var flattened1 = flatten(obj1);
  var flattened2 = flatten(obj2);

  // If all the keys in obj1 are not in obj2 
  for (var key in flattened1) {
    if (!flattened2.hasOwnProperty(key)) {
      return false;
    }
  }

  // Vice Versa
  for (var key in flattened2) {
    if (!flattened1.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
// console.log(flatten({ a: 1, b: { c: 3 } }));

// ***************************************************************************************
// This method is like intersection except that it accepts a comparator which is invoked to
// compare elements of arrays. The order and references of result values are determined by 
// the first array. The comparator is invoked with two arguments: (arrVal, othVal).

// example use
var data1 = [
  { a: 1, b: { c: 2, d: 3 } },
  { d: 4, e: 10, f: 14, g: 18 },
  { h: { a: 1, b: 2 } }
];
var data2 = [
  { a: 1, b: 10, c: 2, d: 3 },
  { d: 4, g: { f: { e: 10 } } },
  { h: { a: 1, c: 2 } },
  { i: 4, j: 10, k: 11 }
];
// debugger;
console.log(intersectionWith(data1, data2, sameKeys));
// returns [  { a: 1, b: {c: 2, d: 3} }, { d: 4, e: 10, f: 14, g: 18 } ]
function intersectionWith(data1, data2, callback) {
  var result = [];

  for (var i = 0; i < data1.length; i++) {
    for (var j = 0; j < data2.length; j++) {
      if (callback(data1[i], data2[j])) {
        result.push(data1[i]);
      }
    }
  }
  return result;
}

// 