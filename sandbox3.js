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

var counter = {};

for (var i = 1; i < 501; i++) {
  var result = magicNumber(i);
  if (counter[result]) {
    counter[result]++;
  } else {
    counter[result] = 1;
  }
}
console.log(counter);