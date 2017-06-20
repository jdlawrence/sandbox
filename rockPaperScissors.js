const { Set } = require('immutable');
/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (rounds, play, results) {
  // TODO: your solution here
  var plays = ['rock', 'paper', 'scissors'];

  results = results || [];
  
  
  play = play || [];

  if (play.length === rounds) {
    results.push(play);
  }
  else {
    for (var i = 0; i < plays.length; i++) {
      results = rockPaperScissors(rounds, play.concat(plays[i]), results);
    }
  }
  return results;
};




// debugger;
var start = new Date().getTime();


var a = rockPaperScissors(10);
var end = new Date().getTime();
var time = end - start;
console.log('time', time);
// debugger;
// console.log(rockPaperScissors(3));

