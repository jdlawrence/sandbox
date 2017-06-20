function countClouds(skyMap) {
  var count = 0;

  // Create an array to track visited positions
  var visited = [];
  for (var i = 0; i < skyMap.length; i++) {
    visited.push([]);
    for (var j = 0; j < skyMap[i].length; j++) {
      visited[i].push(false);
    }
  }

  // debugger;
  for (i = 0; i < skyMap.length; i++) {
    for (j = 0; j < skyMap[i].length; j++) {
      // If the current position is a '1' and it hasn't been visited, it's a cloud
      if (skyMap[i][j] == 1 && !visited[i][j]) {
        findNeighbors(skyMap, i, j);
        count++;
      }
    }
  }
  function findNeighbors(arr, i, j) {
    visited[i][j] = true;

    // For every position, check if it's in bounds, if it's a '1', and if it has been visited
    // check right
    if (j + 1 < arr[0].length && arr[i][j + 1] == 1 && !visited[i][j + 1]) {
      findNeighbors(arr, i, j + 1);
    }
    // check down
    if (i + 1 < arr.length && arr[i + 1][j] == 1 && !visited[i + 1][j]) {
      findNeighbors(arr, i + 1, j);
    }
    // check left
    if (j > 0 && arr[i][j - 1] == 1 && !visited[i][j - 1]) {
      findNeighbors(arr, i, j - 1);
    }
    // check up
    if (i > 0 && arr[i - 1][j] == 1 && !visited[i - 1][j]) {
      findNeighbors(arr, i - 1, j);
    }
  }
  return count;
}


var map = [[1, 0], [0, 0]];
var map2 = [[0, 0], [1, 0]];
var map3 = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];

var map4 = [
  ['0', '1', '1', '0', '1'],
  ['0', '1', '1', '1', '1'],
  ['0', '0', '0', '0', '1'],
  ['1', '0', '0', '1', '1'],
];

var map5 = [
  ['0', '1', '0', '0', '1'],
  ['0', '1', '1', '1', '1'],
  ['0', '0', '0', '0', '0'],
  ['1', '0', '0', '1', '1'],
];
countClouds(map5);