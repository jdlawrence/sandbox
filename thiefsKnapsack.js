/*
A Thief has a knapsack that can hold X lbs of stolen goods
Each stolen good is worth a certain amount of cash, but
the stolen good also weighs a certain weight. This means that
the thief has to pick an optimal combination of items!
The Thief can't pick the same item twice.

What is the maximum worth of goods that the thief can steal?
*/
// I: list of goods
// O: array of the goods
var knapsack = function (goods, maxWeight) {
  var maxVal = 0;
  var maxGoods = [];

  function findMax(takenGoods, remainingGoods, maxWeight) {
    // Iterate through goods list, slicing out a good from remainingGoods
    var currentWeight = findQuantity(takenGoods, 'weight');
    var currentValue = findQuantity(takenGoods, 'value');
    var rest;
    for (var i = 0; i < remainingGoods.length; i++) {
      var currentGood = remainingGoods[i];
      var potentialLoot = takenGoods.concat(currentGood);
      var potentialWeight = findQuantity(potentialLoot, 'weight');
      var potentialValue = findQuantity(potentialLoot, 'value');
      if (potentialWeight <= maxWeight) {
        rest = remainingGoods.slice(0, i).concat(remainingGoods.slice(i + 1));
        if (potentialValue > maxVal) {
          maxVal = potentialValue;
          maxGoods = potentialLoot;
        }
        findMax(potentialLoot, rest, maxWeight);
      }
    }
    // Check if takenGoods + currentGood is less than maxWeight and currentVal > maxVal
    // if so, take out current good, recurse on takenGoods + currentGood
    return takenGoods;
  }

  function findQuantity(goods, quantity) {
    var total = 0;
    goods.forEach(good => {
      total += good[quantity];
    });
    return total;
  }
  debugger;
  findMax([], goods, maxWeight);
  console.log('loot', maxGoods);
  return maxVal;
}

var house1 = [
  { value: 1, weight: 1 },
  { value: 4, weight: 3 },
  { value: 5, weight: 4 },
  { value: 7, weight: 5 },

];
// TODO: Write test cases!
console.log(knapsack(house1, 7));