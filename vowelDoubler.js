function vowelDoubler(arrOfChars) {
  var vowelCount = 0;
  var vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true, 
    U: true
  };

  var endIndex = arrOfChars.length - 1;

  // Count the number of vowels
  for (var i = 0; i < arrOfChars.length; i++) {
    if (vowels[arrOfChars[i]]) {
      arrOfChars.push('');
    }
  }
  
  for (var i = arrOfChars.length - 1; i >= 0; i--) {
    if (vowels[arrOfChars[endIndex]]) {
      arrOfChars[i] = arrOfChars[endIndex];
      arrOfChars[i - 1] = arrOfChars[endIndex];
      i--;
    } else {
      arrOfChars[i] = arrOfChars[endIndex];
    }
    endIndex--;
  }
  return arrOfChars;
}

console.log('arrOfChars', vowelDoubler(['a', 'c', 'u', 't', 'e']));