const readline = require('readline');

var board = [
  [' ', '|', ' ', '|', ' '],
  ['-', ' ', '-', ' ', '-'],
  [' ', '|', ' ', '|', ' '],
  ['-', ' ', '-', ' ', '-'],
  [' ', '|', ' ', '|', ' ']
];

var pieces = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

console.log('winner', checkForWinner(pieces, 'X'));
function checkForWinner(board, piece) {
  var result = false;

  // Rows
  function checkRow(row) {
    return row[0] === piece && row[1] === piece && row[2] === piece;
  }

  for (var i = 0; i < 3; i++) {
    if (checkRow(board[i])) {
      result = true;
    }
  }

  // Columns
  function checkCol(col) {
    return board[0][col] === piece && board[1][col] === piece && board[2][col] === piece;

  }
  for (var j = 0; j < 3; j++) {
    if (checkCol(j)) {
      result = true;
    }
  }

  // Diagonals
  // Main diagonal
  if (board[0][0] === piece && board[1][1] === piece && board[2][2] === piece) {
    result = true;
  }

  if (board[0][2] === piece && board[1][1] === piece && board[2][0] === 'X') {
    result = true;
  }
  return result;
}

function fillInPieces(board, pieces) {
  for (var i = 0, pieceI = 0; i <= board.length; i += 2, pieceI++) {
    for (var j = 0, pieceJ = 0; j < board[0].length; j += 2, pieceJ++) {
      board[i][j] = pieces[pieceI][pieceJ];
    }
  }
}

fillInPieces(board, pieces);

function printBoard(board) {
  for (var i = 0; i < board.length; i++) {
    var row = ''
    for (var j = 0; j < board[0].length; j++) {
      row += board[i][j];
    }
    console.log(row);
  }
}

printBoard(board);

var xTurn = true;
var moves = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function getPosition() {

  rl.question('Enter a row and column using zero-based indices: ', (position) => {
    var row = position.split(' ')[0];
    var col = position.split(' ')[1];

    // Check if row and column are not already filled
    if (pieces[row][col] !== ' ') {
      console.log('You entered a position that has already been played');
      getPosition();
      return;
    }
    if (xTurn) {
      pieces[row][col] = 'X';
      xTurn = false;
    } else {
      pieces[row][col] = 'O';
      xTurn = true;
    }
    if (checkForWinner(pieces, 'X')) {
      console.log('X wins!');
      process.exit(0);
      return;
    }

    if (checkForWinner(pieces, 'O')) {
      console.log('O wins!');
      process.exit(0);
      // r1.close();
    }

    fillInPieces(board, pieces);
    printBoard(board);
    moves++;
    if (moves < 9) {
      getPosition();
    } else {
      console.log('TIE GAME!!');
      rl.close();
    }
  });
}

getPosition();