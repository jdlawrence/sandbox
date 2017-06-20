/*
* Scorecard Constructor
*/
console.log('test');
var actions = {
  'single': 1,
  'double': 2,
  'triple': 3,
  'homerun': 4,
  'out': 0
};

var ScoreCard = function() {
  this.away = [0, 0, 0, 0];
  this.home = [0, 0, 0, 0];
  this.awayOut = 0;
  this.homeOut = 0;
  this.awayAtBat = true;

};

var advance = function(arr, places) {

  var result = [];
  // Moves 
  for (var i = 0; i < arr.length; i++) {
    result[i + places] = arr[i];
  }

  // Fill displaced positions with zeroes
  for (var j = 0; j < places; j++) {
    result[j] = 0;
  }
  return result;
};

/*
* A public method accepting the result of an at-bat
* @param {string} entry - The result of an at-bat 
* Acceptable values: ('single', 'double', 'triple', 'homerun' or 'out') 
*/
ScoreCard.prototype.addEntry = function(entry) {
  var base = actions[entry];

  if (this.awayAtBat) {
    if (entry === 'out') {
      this.awayOut++;

      if (this.awayOut === 3) {
        this.awayAtBat = false;
        this.awayOut = 0;
      }

    }
    else {

      this.away = advance(this.away, base);

      this.away[base] = 1;
    }
  }
  else {
    if (entry === 'out') {
      this.homeOut++;

      if (this.homeOut === 3) {
        this.homeAtBat = false;
        this.homeOut = 0;
      }

    }
    else {
      
      this.home = advance(this.home, base);

      this.home[base] = 1;
    }
  }

};

/*
* A public method returning the current score
* Format: "Home: [HOME_SCORE] Away: [AWAY_SCORE]"
*/
ScoreCard.prototype.getScore = function() {
  console.log('slice: ', this.away.slice(3).reduce(function(a, b) {
    return a + b;
  }));
  var home = this.home.slice(3).reduce( function(a, b) {
    return a + b;
  });
  var away = this.away.slice(3).reduce( function(a, b) {
    return a + b;
  });

  return 'Home: ' + home + ' Away: ' + away;
};

var scoreCard = new ScoreCard();

scoreCard.addEntry('double');
scoreCard.addEntry('double');
scoreCard.addEntry('homerun');
scoreCard.addEntry('out');

console.log('away status: ', scoreCard.away);
console.log('score: ', scoreCard.getScore());