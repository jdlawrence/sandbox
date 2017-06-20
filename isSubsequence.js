var isSubsequence = function(s, t) {
  if (s === '') {
    return true;
  }
  // Create a substring index 
  // Iterate through the given string
    // If the character at i matches the character at the substring index
    // advance the substring index
    // If the substring index is at the length of the substring, return true
  // If your reach this far, the substring is not contained in the given string, so return false 

  var substringIndex = 0;

  for (var i = 0; i < t.length; i++) {
    if (t[i] === s[substringIndex]) {
      substringIndex++;
    }
    if (substringIndex === s.length) {
      return true
    }
  } 
  return false;
};

console.log(isSubsequence('ace', 'abcde'));
console.log(isSubsequence('aec', 'ahbgdc'));
console.log(isSubsequence('leet', 'leeet'));