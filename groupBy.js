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
NOTES Jason Stieder
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



/* Notes Jay Lim
- Pseudo is very vague and includes actual code instead of human instructions that
could be translated into code
- Struggling to articulate his thoughts
- Switches from an object to an array for his output variable (Good!)
- Iterating through an object to see if contains a key-value pair, indicating he doesn't 
know all the advantages of using an object
- Goes back and remove iteration through object. Realize he can just check if a property is defined or not
- Remains very uncommunicative about what he's coding unless prompted to explain
- Had a few typos but found these quicky when testing his code
OVERALL: Jay explained that he had trouble completing his precourse work due to an extreme time crunch in finishing
up at his current job, but I believe in his ability to demonstrate the necessary skills in immersive.
I would recommend that his pod staff encourages him to be as communicative as possible as he goes about his coding

*/

/* Notes Daesy Stephens
 - Initially struggled with adding the groupBy function to an empty object named underscore. She was trying to 
 use the object inside of her group by function
 - Does not make a new object to return. Tries instead to use the object that the groupBy function is attached to.
 - Adding the iteratorOrstring as a property of her final return object instead of using the iteratorOrstring on
 each element to create the key
 - Trying to use the dot property to access a variable that doesn't exist on each element in the collection. 
 - Tries to push a value into an array and assign it as the value to a key in the same line. Needs more familiarity with
 objects and arrays
 - Struggling to understand that she is overwriting the value for each key with a new object every time
 OVERALL: Struggled with javascript fundamentals, grasping the concept of what is supposed to be done in a problem, 
 formulating the code to match a particular solution, and executing a solution at a speedy pace. I'm concerned about 
 Daesy's ability to succeed in the program, and I recommend that she not join this upcoming cohort.

      ##### CODE #####
      // console.log('hi')

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
  
  var newObj = {};
  
  for ( var i = 0; i < collection.length; i++ ) {
      var newArray = [];
      if ( collection
      newArray.push(collection[i])
    
      newObj[collection[i][iteratorOrstring]] = newArray; 
  
  }
  return newObj;
};

console.log(_.groupBy(['one', 'two', 'three'], 'length'))
`
*/

/* ******************** Ashvin Patel *******************

 - Suggested a recursive approach to solve the problem, but when asked why moved away
 - Mostly quiet during his coding unless prompted to explain what he's doing
 - Has ideas about a strategy of what he should pursue, but struggling to turn his ideas into code
 - Has written a lot of code without testing
 - Using the dot notation when he needs the bracket notation to access a property on an object
 - Code indentation is very poor and cause unmatched braces error 
 - Eventually made it through "string" case of groupBy, but still had to work on function case
 OVERALL: Speed of execution is still very slow. Has some misunderstandings about object usage, 
 and his ability to turn strategies into code needs work. Despite time off that where he went 
 through preparation, I predict he will still struggle as a student in the program.

 ##### CODE ######


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
var arr = [];
_.groupBy = function(collection, iteratorOrstring) {
  console.log(iteratorOrstring)
  
  // get the length of the collection
  // for loop for each element in the colection
  // apply the function
  var obj = {};
  if(iteratorOrstring === Object){   
    console.log('object code')
    }else{
      for(let i  = 0; i < collection.length; i++){
        var prop = collection[i][iteratorOrstring]; 
        if(prop in obj)
          obj[prop].push(collection[i])
        else
          obj[prop] = [collection[i]];
        }
      console.log(obj)
    }

};
  
_.groupBy(['one', 'two', 'three'], 'length');
  

            

*/ 