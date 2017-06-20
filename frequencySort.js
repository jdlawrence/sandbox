var frequencySort = function(s) {
  var counter = {};

  // Find the frequency of each character
  for (var i = 0; i < s.length; i++) {
    if (counter[s[i]] === undefined) {
      counter[s[i]] = '';
    }
    counter[s[i]] += s[i];
  }   

  // Put the letters in an array so they can be sorted
  // Use a tuple with 0 index as characters and 1 index as frequency
  var frequencyArr = [];
  for (var letter in counter) {
    frequencyArr.push([counter[letter], counter[letter].length]); 
  }
  
  // sort the characters by character length
  frequencyArr.sort( (a, b) => {
    return b[1] - a[1];
  });

  // Join the characters in a string 
  return frequencyArr.map( tuple => {
    return tuple[0];
  }).join('');
};


console.log(frequencySort('tree'));
console.log(frequencySort('Aabb'));