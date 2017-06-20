/*
Write a function named difference, which takes two arrays as input, and
returns a new array as output. The output array should contain all (and 
only) the elements that appear in the first input array, but NOT the second. 
To determine equality, the elements should be compared using strict equals (===). 
The order of result values should match the order they appear within first array.
*/

// example use
function difference(arr1, arr2) {
  var result = [];
  var reference = {};

  // Iterate through the second array, storing its values in an object to reference later
  arr2.forEach(val => {
    reference[val] = true;
  });

  return arr1.reduce((accum, curr) => {
    // If the current value in array1 is not in arr2, push it into the accumulator
    if (!reference[curr]) {
      accum.push(curr);
    }
    return accum;
  }, []);
}
console.log(difference([1, 2, 3, 4, 5], [5, 2, 6, 8, 0]));
// returns [1, 3, 4]

/* 
Write a function named sameNumOfAs that takes two strings and returns true if the 
strings have the same number of 'a's (both 'A' and 'a' count as an a), and false otherwise.
Use a higher order function (such as forEach, map, reduce) in your solution.
*/

function sameNumOfAs(str1, str2) {

  // Helper function: takes in a string and returns an array with all the a's
  // Ex: getA('Alabama') returns ['A', 'a', 'a', 'a']
  function getA(str) {
    return str.split('').reduce((accum, letter) => {
      if (letter === 'a' || letter === 'A') {
        accum.push(letter);
      }
      return accum;
    }, []);
  }


  var str1A = getA(str1);
  var str2A = getA(str2)
  return str1A.length === str2A.length;
}
// example use
console.log('', sameNumOfAs('Area', 'management'))
// returns true, two 'a's in each
console.log('', sameNumOfAs('phone', 'home'))
// returns true, zero 'a's in each

/*
Write a function named differenceWith, which takes two arrays and a function
(referred to as the comparator). This method is like difference,
except that the comparator is invoked with two elements to compare the elements,
rather than using === to compare elements of the arrays.
The order and references of result values are determined by the first array. 
The comparator is invoked with two arguments: (arrVal, othVal). 
Please use at least one higher order function (for example: map, reduce, filter, 
every, forEach) to complete this function.
*/

function differenceWith(arr1, arr2, comparator) {
  // return arr1.filter(word1 => {
  //   return arr2.every(word2 => {
  //     return !comparator(word1, word2);
  //   });
  // });  

  // For every element in arr1, compare it with every element in arr2 using the callback function
  // If the comparison comes back false, do not add it to the final result.

}
// example use
console.log('', differenceWith(['Aardvark', 'apple', 'area'], ['home', 'create', 'snake'], sameNumOfAs));
// returns ['Aardvark', 'area']
// for reference, the number of As is [3, 1, 2] and [0, 1, 1]

/*
Write a function, named magicNumber, that takes a number as input 
and returns the 'magic number' for that number. The magic number 
is determined by adding the digits of a number together until a 
single digit is obtained. 
*/

function magicNumber(num) {
  var result = num.toString().split('').reduce((accum, curr) => {
    accum += parseInt(curr);
    return accum;
  }, 0)
  // return result;
  if (result.toString().length === 1) {
    return result;
  } else {
    return magicNumber(result);
  }
}
// example use
console.log('', magicNumber(84921652));
console.log('', magicNumber(14));
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

function differenceBy(arr1, arr2, iteratee) {
  var arr2Transformed = arr2.map(element => {
    return iteratee(element);
  });

  return arr1.reduce((accum, curr) => {

    if (arr2Transformed.indexOf(iteratee(curr)) === -1) {
      accum.push(curr);
    }
    return accum;
  }, []);
  
}
// example use
console.log('', differenceBy([123, 84921652, 13], [6, 81, 1], magicNumber));
// returns [13]
// for reference, the magic number is [6, 1, 4] and [6, 9, 1]