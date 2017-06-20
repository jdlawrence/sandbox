/*
Write a function named difference, which takes two arrays as input, and
returns a new array as output. The output array should contain all (and 
only) the elements that appear in the first input array, but NOT the second. 
To determine equality, the elements should be compared using strict equals (===). 
The order of result values should match the order they appear within first array.
*/

function difference(arr1, arr2) {
  var arr2Values = {};
  arr2.forEach(val => {
    arr2Values[val] = true;
  });

  var result = [];
  arr1.forEach(val => {
    if (!arr2Values[val]) {
      result.push(val);
    }
  });

  return result;
}

// example use
console.log('object', difference([1, 2, 3, 4, 5], [5, 2, 6, 8, 0]));
// returns [1, 3, 4]


/* 
Write a function named sameNumOfAs that takes two strings and returns true if the 
strings have the same number of 'a's (both 'A' and 'a' count as an a), and false otherwise.
Use a higher order function (such as forEach, map, reduce) in your solution.
*/
function sameNumOfAs(word1, word2) {
  const word1Count = countAs(word1);
  const word2Count = countAs(word2);

  function countAs(word) {
    var wordArr = word.toLowerCase().split('');
    return wordArr.reduce((accum, next) => {
      accum += (next === 'a') ? 1 : 0;
      return accum;
    }, 0);
  }
  return word1Count === word2Count;
}
// example use
console.log('first', sameNumOfAs('Area', 'management'));
// returns true, two 'a's in each
console.log('object', sameNumOfAs('phone', 'home'));
console.log('object2', sameNumOfAs('phaone', 'hAaome'));
// returns true, zero 'a's in each

/*
Write a function named differenceWith, which takes two arrays and a function
(referred to as the comparator). This method is like difference,
except that the comparator is invoked with two elements to compare the elements,
rather than using === to compare elements of the arrays.
The order and references of result values are determined by the first array. 
The comparator is invoked with two arguments: (arrVal, othVal). 
Please use at least one higher order function (for example: map, reduce, filter, 
forEach) to complete this function.
*/
function differenceWith(arr1, arr2, comparator) {
  var result = [];
  arr1.forEach(val1 => {
    var match = false;
    arr2.forEach(val2 => {
      if (comparator(val1, val2)) {
        match = true;
      }
    });
    if (!match) {
      result.push(val1);
    }
  });
  return result;
}

// example use
differenceWith(['Aardvark', 'apple', 'area'], ['home', 'create', 'snake'], sameNumOfAs)
// returns ['Aardvark', 'area']
// for reference, the number of As is [3, 1, 2] and [0, 1, 1]

/*
Write a function, named magicNumber, that takes a number as input 
and returns the 'magic number' for that number. The magic number 
is determined by adding the digits of a number together until a 
single digit is obtained. 
*/


function magicNumber(num) {
  if (num.toString().length === 1) {
    return num;
  } else {
    var sum = num.toString().split('').reduce((a, b) => {
      a += parseInt(b);
      return a;
    }, 0);
    // debugger;
    return magicNumber(sum)
  }
}
// example use
console.log('num', magicNumber(84921652));
// returns 1
// 8 + 4 + 9 + 2 + 1 + 6 + 5 + 2 = 37, 3 + 7 = 10, 1 + 0 = 1


/*
Write a function named differenceBy, which takes two arrays and a function
(referred to as the iteratee). This method is like difference,
except that when determining equality of two elements, each element is
first transformed using the iteratee function before being compared. While 
the comparison is performed using the transormed values, the original values
are added to the result array. The order and references of result 
values are determined by the first array. The iteratee is invoked with 
one argument: (value).
*/

function differenceBy(arr1, arr2, cb) {
  var arr2Values = {};
  arr2.forEach(val => {
    arr2Values[cb(val)] = true;
  });
  var result = [];
  arr1.forEach(val => {
    if (!arr2Values[cb(val)]) {
      result.push(val);
    }
  });
  
  debugger;
  return result;
}
// example use
differenceBy([123, 84921652, 13], [6, 81, 1], magicNumber)
// returns [13]
// for reference, the magic number is [6, 1, 4] and [6, 9, 1]