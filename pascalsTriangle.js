function pascalsTriangle(numRows) {
  var base = [
    [1],
    [1, 1],
  ];

  if (numRows === 0) {
    return [];
  }
  else if (numRows === 1) {
    return [base[0]];
  }

  else if (numRows === 2) {
    return base;
  }

  else {
    var currentRow = 3;
    var currentArray = [];
    while (currentRow <= numRows) {
      if (currentArray.length === currentRow - 1) {
        currentArray.push(1);
        base.push(currentArray.slice());
        currentArray = [];
        currentRow++;
      }
      if (currentArray.length === 0) {
        currentArray.push(1);
      }
      else {
        var index = currentArray.length;
        var value = base[currentRow - 2][index] + base[currentRow - 2][index - 1];
        currentArray.push(value);
      }
    }
    return base;
  }
}


// var test1 = pascalsTriangle(1);
// var test2 = pascalsTriangle(2);
// debugger;
var test3 = pascalsTriangle(2);
debugger;