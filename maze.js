var myMaze = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var easyMaze = [
  [0, 1, 1, 1],
  [0, 0, 1, 0],
  [1, 0, 1, 1],
  [0, 0, 0, 2],
];

var simpleMaze = [
  [0, 0],
  [1, 0],
];

console.log('hiiiiiiiiiiiiiiiiiiiii');
function MazeSolver(maze) {
  var solMaze = [];
  for (var i = 0; i < maze.length; i++) {
    solMaze.push([]);
    for (var j = 0; j < maze[0].length; j++) {
      solMaze[i].push(0);
    }
  }
  console.log('object', solMaze);
  function sub(maze, solMaze, i, j) {
    var val = maze[i][j];

    // You've found the solution
    if (val === 2) {
      console.log(solMaze);
    }

    // Check if val is in bounds
    if (i < 0 || j < 0 || i >= maze.length || j >= maze[0].length) {
      return false;
    }

    // Check if current spot is a wall
    if (maze[i][j] === 1) {
      return false;
    }
    solMaze[i][j] = 1;

    // Check right
    sub(maze, solMaze, i, j + 1);
    // Check down
    sub(maze, solMaze, i + 1, j);
    // Check left
    sub(maze, solMaze, i, j - 1);
    // Check up
    sub(maze, solMaze, i - 1, j);
    solMaze[i][j] = 0;
  }
  sub(simpleMaze, solMaze, 0, 0);
}

MazeSolver(easyMaze);
