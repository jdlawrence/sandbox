var Foo = function (a) {
  this.a = a;

  this.bar = function () {
    return a;
  }

  this.baz = function () {
    return a;
  };
};


Foo.prototype = {
  biz: function () {
    return this.a;
  }
};

var f = new Foo(7);
f.bar(); //output? undefined NoMethod
f.baz(); //output? undefined 7
f.biz(); //output? undefined

// ********************************************
// Given
var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

// Result
[
  { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
  { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
  { skill: 'html', user: ['Sue'], count: 1 }
];

function transform(arr) {
  var result = [];
  var hash = {};

  for (var i = 0; i < endorsements.length; i++) {
    if (hash[endorsements[i].skill] === undefined) {
      hash[endorsements[i].skill] = {
        skill: endorsements[i].skill,
        user: [endorsements[i].user],
        count: 1
      }
    } else {
      hash[endorsements[i].skill].user.push(endorsements[i].user);
      hash[endorsements[i].skill].count++;
    }

  }

  for (var key in hash) {
    result.push({
      skill: hash[key].skill,
      user: hash[key].user,
      count: hash[key].count
    })
  }
  return result.sort((a, b) => {
    return b.count - a.count;
  });
};

var result = transform(endorsements);
console.log('result', result);
// a = {'hello': 'world'}
// b = {'helloagain': a}
// c = [a]

// a["this"] = "not this"







