function larger(num1, num2) {
  if (num1 >= num2) {
    return num1;
  }
  else if (num2 > num1) {
    return num2;
  }
}

function smaller(num1, num2) {
  if (num1 >= num2) {
    return num2;
  }
  else if (num2 > num1) {
    return num1;
  }
}

// console.log('larger: ', larger(9, 9));
console.log('smaller: ', smaller(9, 91));

function largest(...arr) {
  if (arr.length === 0) {
    return;
  }
  else {
    // flatten the array
    arr = flatten(arr);

    // take the largest as the first
    var largest = arr[0];
    for (var i = 0; i < arr.length; i++) {
      largest = larger(largest, arr[i]);
      // }
    }
    return largest;
  }
}

function smallest(...arr) {
  if (arr.length === 0) {
    return;
  }
  else {
    // flatten the array
    arr = flatten(arr);

    // take the smallest as the first
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
      smallest = smaller(smallest, arr[i]);
    }
    return smallest;
  }
}

function flatten(...args) {
  var results = []; 
  for (var i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      results = results.concat(flatten.apply(null, args[i]));
    }
    else {
      results.push(args[i]);
    }
  }
  return results;
}

function most(comp, ...args) {
  if (arr.length === 0) {
    return;
  }
  else {
    // flatten the array
    arr = flatten(arr);

    // take the most as the first
    var most = arr[0];
    for (var i = 0; i < arr.length; i++) {
      most = comp(most, arr[i]);
    }
    return most;
  }

}

function makeMostFunc(compFunc) {
  return function(...arr) {
    if (arr.length === 0) {
      return;
    }
    else {
      arr = flatten(arr);

      var most = arr[0];
      for (var i = 0; i < arr.length; i++) {
        most = compFunc(most, arr[i]);
      }
      return most;
    }
  };
}

var smallest2 = makeMostFunc(smaller);

var dummy = [ 1, 2, [ 3, [4, [5]]], 6];
console.log('flatten: ', flatten(dummy));
console.log('testing: ', [ 4, 5, 6].concat([7, [8, 9]]));
console.log('max: ', largest([ 5, 127, 52, -3, 12]));
console.log('min: ', smallest([ 5, 127, 52, -3, 12]));
console.log('max2: ', largest([1, 2], [3, 4], [5, 6]));
console.log('min2: ', smallest([1, 2], [3, 4], [5, 6]));
console.log('min3: ', smallest2([1, 2], [3, 4], [5, 6]));

function moreWords(word1, word2) {
  return word1.split(" ").length > word2.split(" ").length ? word1 : word2;
}


// function makeMostFunction(comparisonFunction) {
//   // your work here
// }


var mostWords = makeMostFunc(moreWords);


console.assert(typeof mostWords === "function", "makeMostFunction should return a new function");
console.assert(mostWords("two words", "this has four words") === "this has four words", "mostWords should return the string with the most words");
console.assert(mostWords(["two words", "this has four words"]) === "this has four words", "mostWords should return the array element with the most words");


function makeLeastFunc(compFunc) {
  return function(...arr) {
    if (arr.length === 0) {
      return;
    }
    else {
      arr = flatten(arr);

      var most = arr[0];
      for (var i = 0; i < arr.length; i++) {

        if (compFunc(most, arr[i]) === most) {
          most = arr[i];
        }
      }
      return most;
    }
  };

}

var leastWords = makeLeastFunc(moreWords);


console.assert(typeof leastWords === "function", "makeLeastFunction should return a new function");
console.assert(leastWords("two words", "this has four words") === "two words", "leastWords should return the string with the least words");
console.assert(leastWords(["two words", "this has four words"]) === "two words", "leastWords should return the array element with the least words");