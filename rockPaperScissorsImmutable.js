const { List } = require('immutable');
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
var rockPaperScissorsArr = function (rounds, play, results) {
  // TODO: your solution here
  var plays = ['rock', 'paper', 'scissors'];

  results = results || [];
  
  
  play = play || [];

  if (play.length === rounds) {
    results.push(play.slice());
  }
  else {
    for (var i = 0; i < plays.length; i++) {
      // results = rockPaperScissorsArr(rounds, play.concat(plays[i]), results);
      play.push(plays[i]);
      results = rockPaperScissorsArr(rounds, play, results);
      play.pop();
    }
  }
  return results;
};

var rockPaperScissorsImm = function (rounds, play, results) {
  // TODO: your solution here
  var plays = ['rock', 'paper', 'scissors'];

  results = results || List();
  
  play = play || List();

  if (play.size === rounds) {
    results = results.push(play);
    // results = results.set(results.size, play);
  }
  else {
    for (var i = 0; i < plays.length; i++) {
      play = play.push(plays[i]);
      // results = rockPaperScissorsImm(rounds, play.concat(plays.get(i)), results);
      results = rockPaperScissorsImm(rounds, play, results);
      play = play.pop();
    }
  }
  return results;
};

var start = new Date().getTime();
// debugger;
var a = rockPaperScissorsArr(10);
// debugger;
// console.log('a', a);
var end = new Date().getTime();
var time = end - start;
console.log('time', time);
var start2 = new Date().getTime();
// debugger;
var b = rockPaperScissorsImm(10);
// console.log('rifh', b);
var end2 = new Date().getTime();
var time2 = end2 - start2;
console.log('time2', time2);

