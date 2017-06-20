// groupBy:
// Splits a collection into sets, grouped by the result of running each value through 
// iteratee. If iteratee is a string instead of a function, groups by the property 
// named by iteratee on each of the values.

// Examples:

// _.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
// // returns {1: [1.3], 2: [2.1, 2.4]}

// _.groupBy(['one', 'two', 'three'], 'length');
// // returns {3: ["one", "two"], 5: ["three"]}

var _ = {};

_.groupBy = function(collection, iteratorOrstring) {
  // your code here!
  var result = {};
  
  collection.forEach(function(item) {
    if (typeof iteratorOrstring === 'function'){
      var key = iteratorOrstring(item);
    }
    else {
      var key = item[iteratorOrstring];
    }
    result[key] = result[key] || [];
    result[key].push(item);
  });
  
  return result;
};

console.log(_.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); }));
console.log(_.groupBy(['one', 'two', 'three'], 'length'));

// ***************** Student problem ********************
// groupBy:
// Splits a collection into sets, grouped by the result of running each value through 
// iteratee. If iteratee is a string instead of a function, groups by the property 
// named by iteratee on each of the values.

// Examples:

// _.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
// // returns {1: [1.3], 2: [2.1, 2.4]}

// _.groupBy(['one', 'two', 'three'], 'length');
// // returns {3: ["one", "two"], 5: ["three"]}

var _ = {};

_.groupBy = function(collection, iteratorOrstring) {
  // your code here!
};

/*
NOTES
-Initially confused about how to provided property to groupBy
-Doesn't use provided a lot of pseudocode, but talks through the code he does write
-Confused a little bit by hoisting of variable expression equals a function
-Completed string option for groupBy with relative ease
-Finished function option easily as well
-Biggest ORANGE FLAG: admits he struggles when he cannot fully comprehend what's going on in a problem
  -Sounds like he may have panicked during some portions of Underbar and gotten help from friends
-Overall: good command of JS fundamentals. Easily debugged his mistakes. Most concerning issue is not 
being comfortable with topics he initially doesn't understand
*/