/*
Below is a function difference, which takes two arrays as input, and
returns a new array as output. The output array should contain all (and 
only) the elements that appear in the first input array, but NOT the second. 
To determine equality, the elements should be compared using strict equals (===). 
The order of result values should match the order they appear within first array.
*/

// FIX THIS FUNCTION
function difference(arr1, arr2) {
  return arr1.reduce((accumulator, currentElement) => {
    var found = false;
    arr2.forEach(element => {
      if (currentElement === element) {
        found = true;
      }
    });
    if (found) {
      accumulator.push(currentElement);
    }
    return accumulator;
  }, []);
}
// example use
console.log(difference([1, 2, 3, 4, 5], [5, 2, 6, 8, 0]));
// logs [1, 3, 4] (when implemented correctly)

/*
Write a function, named magicNumber, that takes a number as input 
and returns the 'magic number' for that number. The magic number 
is determined by adding the digits of a number together until a 
single digit is obtained. 
*/

function magicNumber(num) {

}
// example use
console.log('', magicNumber(14));
// logs 5
// 1 + 4 = 5
console.log('', magicNumber(84921652));
// logs 1
// 8 + 4 + 9 + 2 + 1 + 6 + 5 + 2 = 37, 3 + 7 = 10, 1 + 0 = 1

/*
Write a function named differenceBy, which takes two arrays and a function
(referred to as the iteratee). This method is like difference,
except that when determining equality of two elements, each element is
first transformed using the iteratee function before being compared. While 
the comparison is performed using the transformed values, the original values
are added to the result array. The order and references of result 
values are determined by the first array. The iteratee is invoked with 
one argument: (value).
*/

function differenceBy(arr1, arr2, iteratee) {

}
// example use
console.log('', differenceBy([123, 84921652, 13], [6, 81, 1], magicNumber));
// logs [13]
// for reference, the magic number is [6, 1, 4] and [6, 9, 1]