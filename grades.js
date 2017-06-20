// Makes a grades super class with methods:
// lowestGrade, highestGrade, spread, and average

var Assignment = function(title, grades) {
  this.title = title;
  this.grades = grades;
};

Assignment.prototype.getLowestGrade = function() {
  var lowestGrade = Number.POSITIVE_INFINITY;
  
  for (var i = 0; i < this.grades.length; i++) {
    if (this.grades[i].grade < lowestGrade) {
      lowestGrade = this.grades[i].grade;
    }  
  }
  
  return lowestGrade;
};

Assignment.prototype.getHighestGrade = function() {
  var highestGrade = Number.NEGATIVE_INFINITY;
  for (var i = 0; i < this.grades.length; i++) {
    if (this.grades[i].grade > highestGrade) {
      highestGrade = this.grades[i].grade;
    }  
  }
  return highestGrade;
};

// Returns the range between the lowest and highest grades
Assignment.prototype.getSpread = function() {
  var delta = 0;

  for (var i = 0; i < this.grades.length; i++) {
    for (var j = i; j < this.grades.length; j++) {
      var currentDelta = Math.abs(this.grades[i].grade - this.grades[j].grade);
      console.log('currentDelta: ', currentDelta);
      if ( currentDelta > delta) {
        delta = currentDelta;
      }
    }
  }

  return delta;
};


var test = new Assignment('quadratic equations', [ 
  { name: 'jamil', grade: 74 },
  { name: 'beth', grade: 96 },
  { name: 'dan', grade: 87 }
]);

console.log('title: ', test.title);
console.log('lowest: ', test.getLowestGrade());
console.log('highest: ', test.getHighestGrade());
console.log('delta: ', test.getSpread());

// Makes a sorted grades subclass with 
// improved versions that are linear, and can also take a sorting
// function