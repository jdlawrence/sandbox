// *******************************
Hae (Joosang) Dong Lee
// ******************************
console.log('hi');

// Using reduce, write a function that takes the following input
// and produces the following output. You may NOT modify the input.
//
// Input: An array of strings
// Output: An object where:
//   - the keys are the array index
//   - the object contains only key-value pairs of odd number indexes
//
// Example:
//
var exampleData = ['hi', 'bye', 'then', 'tiny', 'now']
//
// useReduce(exampleData)
// => {1: 'bye', 3: 'tiny'}
//

function useReduce(data) {
  var returnObj = {};
  
  //go through array. accumulator will be the array
  //add into returnobj if index is odd
  //
  returnObj = reduce(data, function(returnObj, val, idkey){
    if(idkey % 3 === 2){
      returnObj[idkey] = val;
    }
    return returnObj;
  },returnObj);
  return returnObj;
}
// var emptyArray = [];
// Uncomment this line + exampleData above
console.log(useReduce(exampleData));
  // console.log(useReduce(emptyArray));
/////////////////////////////////////////////////////////////////////////
// LIBRARY FUNCTIONS - DO NOT MODIFY ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function reduce(collection, iterator, accumulator) {
  each(collection, function(value, idxOrKey) {
    accumulator = iterator(accumulator, value, idxOrKey);
  });
  return accumulator;
}

function each(collection, iterator) {
  if (Array.isArray(collection)) {
    for (var idx = 0; idx < collection.length; idx++) {
      iterator(collection[idx], idx);
    }
  } else {
    for (var key in collection) {
      iterator(collection[key], key);
    }
  }
}

// Able to clearly understand what the prompt is asking for. Describes his thought process well. Asks clarifying questions if necessary. Good initial approach to prompt without running; a few small errors found. Once he ran his code, he quickly traced the source of the errors. Able to hypothesize about changes to the function would affect the output. Solid student.

// Only had one question following the interview: asked about dates of Thanksgiving and Christmas holiday. 



// *************************
// Troy Spielberg
// *************************


console.log('Hello');

// Using reduce, write a function that takes the following input
// and produces the following output. You may NOT modify the input.
//
// Input: An array of objects
// Output: An array of booleans which indicate if an object contains key X
//
// Example:
//

var exampleData = [{a: 1, b: 2}, {x: 0, y: 5, z: 4}, {b: 3, r: 5, x: 9}];
//
// useReduce(exampleData, 'b')
// => [true, false, true]
//

//console.log(exampleData[0].hasOwnProperty('a')) // return true
//console.log(exampleData[0].hasOwnProperty('j')) // return false

function useReduce(collection, desiredKey) {
  var exampleDataEval = [];
  exampleDataEval.push(reduce(collection, function(key) { return key.hasOwnProperty(desiredKey)}, false));
  return exampleDataEval;
  // your code here
}

// Uncomment this line + exampleData above
console.log(useReduce(exampleData, 'b'));

/////////////////////////////////////////////////////////////////////////
// LIBRARY FUNCTIONS - DO NOT MODIFY ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function reduce(collection, iterator, accumulator) {
  each(collection, function(value, idxOrKey) {
    accumulator = iterator(accumulator, value, idxOrKey);
  });
  return accumulator;
}

function each(collection, iterator) {
  if (Array.isArray(collection)) {
    for (var idx = 0; idx < collection.length; idx++) {
      iterator(collection[idx], idx);
    }
  } else {
    for (var key in collection) {
      iterator(collection[key], key);
    }
  }
}

//Student struggled from the start to understand how reduce worked, and the nature of using reduce inside another function. Was not able to debug why his output was not as intended. Was very dependent upon guidance to make even minimal progress. Needs more work on reduce and object usage. 

// **************************
// Colby Barthelmess
// ******************

console.log("Hi, Jamil")

// Using reduce, write a function that takes the following input
// and produces the following output. You may NOT modify the input.
//
// Input: An array of arrays
// Output: An array of array lengths
//
// Example:
//
var exampleData = [[15, 27, 17], [1, 2, 3, 4, 5], [6, 12, 24, 48]];
//
// useReduce(exampleData)
// => [3, 5, 4]
//
//accumulator.push(indArray.length);
  //    return accumulator;


function useReduce(collection) {
  // accumulator will be an empty array
    //iterate over a single array
  var accumulator = [];
  return  reduce(collection,                                  function(accumulator,indArray){
           _.reduce(indArray, function(largest, curr){
            if(largest < curr) {
                   largest = curr;}
               return  largest;
       }, largest)
       accumulator.push(largest);
       return accumulator;
  }, [])
      //determine its length
      //push the value of its length to the accumulator
  //return the accumulator
}

// Uncomment this line + exampleData above
console.log(useReduce(exampleData));

/////////////////////////////////////////////////////////////////////////
// LIBRARY FUNCTIONS - DO NOT MODIFY ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function reduce(collection, iterator, accumulator) {
  each(collection, function(value, idxOrKey) {
    accumulator = iterator(accumulator, value, idxOrKey);
  });
  return accumulator;
}

function each(collection, iterator) {
  if (Array.isArray(collection)) {
    for (var idx = 0; idx < collection.length; idx++) {
      iterator(collection[idx], idx);
    }
  } else {
    for (var key in collection) {
      iterator(collection[key], key);
    }
  }


//Student struggled through completion of basic prompt, but when I posed a small manipulation of the prompt, he was unable to complete it due to many syntactical errors. Does not fully demonstrate a knowledge of reduce. I would say he's close but would not admit him. He needs more practice debugging and use of higher order functions. Also, stylistically, his code was very poor and hard to follow.

// ***********************
// Michelle Carter
// *****************

console.log("It's Monday!");

// Using reduce, write a function that takes the following input
// and produces the following output. You may NOT modify the input.
//
// Input: An object with object values
// Output: An array of those object values' key counts
//
// Example:
//
var exampleData = {a: {z: 1, y: 2}, b: {z: 9, y: 8, x: 7, w: 6}, c: {z: 3}};

// useReduce(exampleData)
// => [2, 4, 1]

// console.log(reduce([1,2,3,4], function(accumulator, value, idxOrKey){}, 0));

function useReduce() {
  //use reduce to count keys inside of each key in an object.
  //create an array to hold the counts for each key, push accumulator to the array
  var reducedArray = [];
  for (key in exampleData) {
  //first get reduce to access key a, then work on the next keys
  reduce(exampleData, function(accumulator, value, idxOrKey) {
    for(idxOrKey in exampleData[key]) {
      accumulator += 1;
    }
    return accumulator;
    }, 0);
  reducedArray.push(accumulator);
  }
    
    return reducedArray; 
}

  
  // function(key) {
    // if(key in exampleData[key]) {
    //   accumulator +=1;
    // };
    // return reducedArray.push(accumulator);
// Uncomment this line + exampleData above
console.log(useReduce(exampleData));

/////////////////////////////////////////////////////////////////////////
// LIBRARY FUNCTIONS - DO NOT MODIFY ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function reduce(collection, iterator, accumulator) {
  each(collection, function(value, idxOrKey) {
    accumulator = iterator(accumulator, value, idxOrKey);
  });
  return accumulator;
}

function each(collection, iterator) {
  if (Array.isArray(collection)) {
    for (var idx = 0; idx < collection.length; idx++) {
      iterator(collection[idx], idx);
    }
  } else {
    for (var key in collection) {
      iterator(collection[key], key);
    }
  }
}

// Got stuck many times on both syntactical and conceptual errors. Ask for clarifying details that could be found in the provided code. Made multiple changes to code without testing whether or not what she did was working. Had a lot of trouble using higher order functions and following the parameters that are passed in to each one.


// ****************************
// Patrick Shen
// *******************************

console.log("connected")

// Using reduce, write a function that takes the following input
// and produces the following output. You may NOT modify the input.
//
// Input: An array of booleans
// Output: An object where:
//   - the keys are the array index
//   - the object contains only key-value pairs of odd number indexes
//
// Example:
//
var exampleData = [true, false, false, true, false]
//
// useReduce(exampleData)
// => {1: false, 3: true}
//

function useReduce(input) {
  
  
  //obj[odd key] = input[oddkey]
  
  reduce(input, function(accumulator, current, index) {
    if (!(index % 2 == 0)) {
      accumulator[index] = current;
    }
  }, {})
    
    return accumulator;
  
};



                


console.log(useReduce(exampleData));

/////////////////////////////////////////////////////////////////////////
// LIBRARY FUNCTIONS - DO NOT MODIFY ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function reduce(collection, iterator, accumulator) {
  each(collection, function(value, idxOrKey) {
    accumulator = iterator(accumulator, value, idxOrKey);
  });
  return accumulator;
}

function each(collection, iterator) {
  if (Array.isArray(collection)) {
    for (var idx = 0; idx < collection.length; idx++) {
      iterator(collection[idx], idx);
    }
  } else {
    for (var key in collection) {
      iterator(collection[key], key);
    }
  }
}

// Was able to verbally state how to create a solid strategy for solving the problem, but struggled with the details of his iterator function inside reduce. Although I prompted him several times to tell me what he was thinking, he remained silent for long periods of time. Needs more work with higher order functions. Recommending a redo.

// *******************************
// Vandeth Nop
// *******************************

//console.log('hi');

// Using reduce, write a function that takes the following input
// and produces the following output. You may NOT modify the input.
//
// Input: An array of objects
// Output: An array of objects containing a key of X
//
// Example:
//
 var exampleData = [{a: 1, b: 2}, {x: 0, y: 5, z: 4}, {b: 3, r: 5, x: 9}];
//
// useReduce(exampleData, 'b')
// => [{a: 1, b: 2}, {b: 3, r: 5, x: 9}]
//

function useReduce(collection, target) {
  return reduce(collection, function(memo, obj) {
    var result;
    var keyCollection = Object.keys(obj);
    result = reduce(keyCollection, function(final, item) {
      if(item === target) {
       final = true; 
      }
      return final;
    }, false);
    if(result) {
      memo.push(obj);
    }
    return memo;
  }, []);
}

// Uncomment this line + exampleData above
 console.log(useReduce(exampleData, 'b'));

/////////////////////////////////////////////////////////////////////////
// LIBRARY FUNCTIONS - DO NOT MODIFY ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function reduce(collection, iterator, accumulator) {
  each(collection, function(value, idxOrKey) {
    accumulator = iterator(accumulator, value, idxOrKey);
  });
  return accumulator;
}

function each(collection, iterator) {
  if (Array.isArray(collection)) {
    for (var idx = 0; idx < collection.length; idx++) {
      iterator(collection[idx], idx);
    }
  } else {
    for (var key in collection) {
      iterator(collection[key], key);
    }
  }
}

// Strong fundamentals and logic. Worked through requirements of problem in  about 10 mins. Explained his thinking very clearly, and quickly corrected any small mistakes he made. Challenged him to complete a portion of the problem using another invocation of reduce, which he also completed. Recommended for admission.


// ******************************** 
// Jared Spencer 
// ********************************

// Jared Spencer
// lemeilleurmec@gmail.com


var videos = [
{'id': 70111470,
'title': 'Die Hard',
'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
'rating': 4.0,
},
{'id': 654356453,
'title': 'Bad Boys',
'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
'rating': 5.0,
},
{'id': 65432445,
'title': 'The Chamber',
'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
'rating': 4.0,
},
{'id': 675465,
'title': 'Fracture',
'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
'rating': 5.0,
}
];
var bookmarks = [
{id: 470, time: 23432},
{id: 453, time: 234324},
{id: 445, time: 987834}
// {id: 459, time: 868697}
];
  
// Use a for loop to traverse the videos and bookmarks array at the same time. 
// For each video and bookmark pair, create a {videoId, bookmarkId} pair 
// and add it to the pairs array.
var newObj = {};
var pairs = [];
var len = Math.min(videos.length, bookmarks.length);
for (var i = 0; i < len; i++) {
  newObj["videoId"] = videos[i].id;
  newObj["bookmarkId"] = bookmarks[i].id;
  pairs.push(newObj);
  newObj = {};
};
// Sample output: [{videoId: 70111470, bookmarkId: 470}]
console.log(pairs.length === len);

//console.log(pairs[0].videoId === 70111470 && pairs[0].bookmarkId === 470); //{videoId: 70111470, bookmarkId: 470}); // [{videoId: 70111470, bookmarkId: 470}]

// zip(videos, bookmarks, function(left, right) {
//   return {videoUri: left.uri, bookmarkTime: right.time, bookmarkId: };
// });


function zip(arr1, arr2, combinerFunc) {
  pairs.push()
};
  
  var pairs = [];
  var newObj = {};
  var len = Math.min(arr1.length, arr2.length);
  for (var i = 0; i < len; i++) {
  newObj[key1]
  }
  
}) {

}

