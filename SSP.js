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


var arr1 = [{a:1}, {b:2}]
var arr2 = [{a:1}, {b:2}]

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

// ********************** Tyler Carson ***********************

console.log('This is Tyler');

/*
Write a function named difference, which takes two arrays as input, and
returns a new array as output. The output array should contain all (and 
only) the elements that appear in the first input array, but NOT the second. 
To determine equality, the elements should be compared using strict equals (===). 
The order of result values should match the order they appear within first array.
*/

// example use
console.log(difference([1, 2, 3, 4, 5], [5, 2, 6, 8, 0]));
// returns [1, 3, 4]

function difference(arr1, arr2) {
  var different = [];
  // iterate through first array
  for (var i = 0; i < arr1.length; i++) {
    // if current element is not present in arr2
    if (arr2.indexOf(arr1[i]) === -1) {
    // push to result
      different.push(arr1[i]); 
    }
  }
  //
  return different;
}

/* 
Write a function named sameNumOfAs that takes two strings and returns true if the 
strings have the same number of 'a's (both 'A' and 'a' count as an a), and false otherwise.
Use a higher order function (such as forEach, map, reduce) in your solution.
*/

// example use
console.log(sameNumOfAs('Area', 'management'));
// returns true, two 'a's in each
console.log(sameNumOfAs('phone', 'homearea'));
// returns true, zero 'a's in each

function sameNumOfAs (str1, str2) {
  var str1count = 0;
  var str2count = 0;
  
  // make each string into lowercase array
  var array1 = str1.toLowerCase().split('');
  var array2 = str2.toLowerCase().split('');
  // use forEach to increase corresponding count if element is an a
  array1.forEach(function(letter) {
   if (letter === 'a') {
     str1count++;
   }
  });
    
  array2.forEach(function(letter) {
   if (letter === 'a') {
     str2count++;
   }
  });
  
  return str1count === str2count;
}


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


// example use
differenceWith(['Aardvark', 'apple', 'area'], ['home', 'create', 'snake'], sameNumOfAs)
// returns ['Aardvark', 'area']
// for reference, the number of As is [3, 1, 2] and [0, 1, 1]

function differenceWith(arr1, arr2, comparator) {
  //create a new array to fill
  var different = [];
  //iterate first array
  
    //if function returns true for current element and any element in other array, don't keep
  //return new array
  
  
  
  
  
}

// ********************* Thomas Johannes ********************************
/*
Write a function named difference, which takes two arrays as input, and
returns a new array as output. The output array should contain all (and 
only) the elements that appear in the first input array, but NOT the second. 
To determine equality, the elements should be compared using strict equals (===). 
The order of result values should match the order they appear within first array.
*/

// example use
difference([1, 2, 3, 4, 5], [5, 2, 6, 8, 0])
// returns [1, 3, 4]

// ******************** Joshua Glandorf *********************************
/*
Write a function named difference, which takes two arrays as input, and
returns a new array as output. The output array should contain all (and 
only) the elements that appear in the first input array, but NOT the second. 
To determine equality, the elements should be compared using strict equals (===). 
The order of result values should match the order they appear within first array.
*/

// example use
difference([1, 2, 3, 4, 5], [5, 2, 6, 8, 0])
// returns [1, 3, 4]

//make a new array
//make a nested for loop
//check the values in the first array compared to the second
// if they aren't equal, add to the array
//return that array

function difference(array1, array2){
  var finalArray = [];
  
  for (var i = 0; i < array1.length; i++){
    var ele1 = array1[i];
    
    for (var j = 0; j < array2.length; j++){
      var ele2 = array2[j];
      
      
    }
    if (ele1 !== ele2  && array2.includes(ele1) === false){
        finalArray.push(ele1);
      }
  }
  
  return finalArray;
}

//[1, 2, 3].includes(2);     // true

console.log(difference([1, 2, 3, 4, 5], [5, 2, 6, 8, 0]));

/* 
Write a function named sameNumOfAs that takes two strings and returns true if the 
strings have the same number of 'a's (both 'A' and 'a' count as an a), and false otherwise.
Use a higher order function (such as forEach, map, reduce) in your solution.
*/

// example use
sameNumOfAs('Area', 'management')
// returns true, two 'a's in each
sameNumOfAs('phone', 'home')
// returns true, zero 'a's in each

// [1, 2, 3, 4].forEach(function(num) {
//    console.log(num * 2);
// });

//use forEach to check if the string has "A"
// declare a counter variable
// if so, add 1 to our counter

//return a boolean

// *************************** Easak Hong ********************
//console.log('hello world');

/*
Write a function named intersection, which takes two arrays as input, and
returns a new array as output. The output array should contain all (and 
only) the elements that appear in both input arrays. To determine equality,
the elements should be compared using strict equals (===). The order of 
result values should match the order they appear within first array.
*/

// example use 
console.log(intersection([1, 2, 3, 4, 5], [5, 2, 6, 8, 0]));
// returns [2, 5]


//I: two arrays
//O: new array which contains only the elements that appear in both arrays
function intersection(arr1, arr2) {
  //create a resulting array
  var resultingArray = [];
  //loop through the first array here
    //loop through second array here
      //check if value from the second array is in the first array
        //if so, push to reuslting array
  //return the resulting array
  
  var arr3 = arr1.concat(arr2);
  var freq = {};
  for (var i = 0; i < arr3.length; i++) {
    if (freq[arr3[i]]) {
      freq[arr3[i]]++;
    } else {
      freq[arr3[i]] = 1;
    }
  }
  for (var key in freq) {
    if (freq[key] > 1) {
      var number = parseInt(key);
      resultingArray.push(number);
    }
  }
  return resultingArray;
}

/* 
Write a function named sameNumOfAs that takes two strings and returns true if the 
strings have the same number of 'a's (both 'A' and 'a' count as an a), and false otherwise.
Use a higher order function (such as forEach, map, reduce) in your solution.
*/

// example use
console.log(sameNumOfAs('Area', 'management'));
// returns true, two 'a's in each
console.log(sameNumOfAs('phone', 'home'));
// returns true, zero 'a's in each
console.log(sameNumOfAs('aaa', 'abc'));

//I: two strings
//O: boolean, checking if A/a count is the same
function sameNumOfAs(str1, str2) {
  var splitString1 = str1.toLowerCase().split('');
  var splitString2 = str2.toLowerCase().split('');
  
  var string1ACount = 0;
  var string2ACount = 0;
  
  splitString1.forEach(function(letter) {
    if (letter === 'a') {
      string1ACount++;
    }
  });
  
  splitString2.forEach(function(letter) {
    if (letter === 'a') {
      string2ACount++;
    }
  });
  
  if (string1ACount === string2ACount) {
    return true;
  } else {
    return false;
  }                    
    
}

/*
Write a function, named magicNumber, that takes a number as input 
and returns the 'magic number' for that number. The magic number 
is determined by adding the digits of a number together until a 
single digit is obtained. 
*/

// example use
magicNumber(84921652)
// returns 1
// 8 + 4 + 9 + 2 + 1 + 6 + 5 + 2 = 37, 3 + 7 = 10, 1 + 0 = 1


//I: number
//O: magic number
function magicNumber(num) {
  //while the number length > 1
    //reduce the number
      //by adding
  
  var numbersArray = num.toString().split('');
  
  while (numbersArray.length > 1) {
    numbersArray.reduce(function(acc, val) {
      return acc + val;
    });
}

