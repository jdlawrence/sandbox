function permutation(str, prefix) {
  if (str.length === 0) {
    console.log('prefix', prefix);
  } else {
    for (var i = 0; i < str.length; i++) {
      var rem = str.substring(0, i) + str.substring(i+1);
      permutation(rem, prefix + str[i]);
    }
  }
}

// permutation('abc', '');

function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];
    
    if (arr.length === 0) { 
      results.push(memo);
    }

    for (var i = 0; i < arr.length; i++) {
      // cur = arr.splice(i, 1); // Takes out a character
      var temp = arr.slice(i+1);
      // console.log('***', temp);
      var newArr = arr.slice(0, i).concat(arr.slice(i + 1));
      // console.log(newArr);
      var newMemo = memo + arr[i];

      // If there are no characters left, you have found a perm
      // Call your function with the rest of the string and characters used so far
      // permute(arr.slice(), memo.concat(cur));
      permute(newArr, newMemo);

      // After finishing the permutation, put the character back in it's place??
      // arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}

var answer = permutator(['a', 'b', 'c', 'd']);
console.log(answer);

/* 
Get an element out
Generate all permutations on all other elements
Stick the element as the head of every permutation
We repeat all above until we all elements have got their chances to be heads
*/

// function perms(str) {
//   var arrStr = str.split('');
//   function subroutine(arr, head) {
//     for (var i = 0; i < arr.length; i++) {
//       var char = arr.splice(i, 1);
//       subroutine(arr.slice(), char);      
//     }
//   }
//   subroutine(arrStr);
// }

// perms('abc');











