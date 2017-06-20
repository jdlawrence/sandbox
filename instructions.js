/*Your school has hired you to keep track of the score at baseball games. Unfortunately you tend to be 
rather absent minded because most nights you stay up late playing video games and coding. Let's create a program that will keep track of the score for us.

We'll need to create a constructor ScoreCard that has two public functions: addEntry and getScore.

addEntry - Takes in the result of an at-bat. This result can be single, double, triple, homerun, or out.

getScore - Returns the score in the format Home: [HOME_SCORE] Away: [AWAY_SCORE]

To keep things simple, base runners will advance the amount of bases equal to that of the batter's hit (i.e. if the batter hits a double, each base-runner will advance two bases).

A few important baseball rules:

The Away team bats first.
There are three outs in an inning.
After three outs the opposing team hits.
The hits single, double, triple and homerun correspond to the batter reaching bases first, second, third and home respectively.
Base runners start at home and then cycle through the bases first, second, third and home.
Runners score for their team after they reach home. */
var ScoreCard = function() {
  this.team = 0; // 0 is away, 1 is home
  this.bases = this.initalizeBases();
  this.score = [0, 0];
  this.outs = 0;
  this.field = {
    'single': 1,
    'double': 2,
    'triple': 3,
    'homerun': 4 
  }
}

/*
* A public method accepting the result of an at-bat
* @param {string} entry - The result of an at-bat 
* Acceptable values: ('single', 'double', 'triple', 'homerun' or 'out') 
*/
ScoreCard.prototype.addEntry = function(entry) {
  if(entry === 'out' && this.out < 2) {
    this.out++; 
  } else if(entry === 'out' && this.out === 2) {
    this.team = this.team === 0 ? 1 : 0;
    this.bases = this.initalizeBases();
    this.outs = 0;
  } else {
    this.advanceRunners(this.field[entry]);
    this.placeBatter(this.field[entry]);
  }
  // if out and out < 2
    // increment out counter and return
  // if out and out === 2
   // toggle batter (from 0 to 1 or 1 to 0) and clear bases array (all F) and return
  // update bases array with advanced runners
    // move all T elements forward by hit

    // if at third index or later, add one to score and remove
  // update bases array with batter
};
ScoreCard.prototype.initalizeBases = function() {
  return [null, false, false, false];
}
ScoreCard.prototype.placeBatter = function(numberToAdvance) {
  if(numberToAdvance === 4) {
    this.score[this.team]++;
  } else {
    this.bases[numberToAdvance] = true;
  }
}
ScoreCard.prototype.advanceRunners = function(numberToAdvance) {
  //[T, T, T]
  //[T, T, F]
  for(var i = this.bases.length; i >= 0; i--) {
    if(this.bases[i]) {
      console.log(i, numberToAdvance);
      var newBase = i + numberToAdvance; 
      if(newBase >= 4) {
        this.score[this.team]++;
        this.bases[i] = false;
      } else {
        this.bases[newBase] = true;
        this.bases[i] = false;
      }
    }
  }
  // starting at the end of the array, for any true element, add numberToAdvance to the index => newBase
  // if newBase is less than 3, update that basesArray at newBase with a T, at element, update with a F
  // if newBase is 3 or greater, add one to score, at element, update with a F
}

/*
* A public method returning the current score
* Format: "Home: [HOME_SCORE] Away: [AWAY_SCORE]"
*/
ScoreCard.prototype.getScore = function() {
  return `Home: ${this.score[1]} Away ${this.score[0]}`;
};
var scoreCard = new ScoreCard();
scoreCard.addEntry('double');
scoreCard.addEntry('double');
scoreCard.addEntry('homerun');

console.log('score: ', scoreCard.getScore()); // Outputs "Home: 0 Away: 3"