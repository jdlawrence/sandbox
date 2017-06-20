function routine(count) {
  for (var i = 0; i < 3; i++) {
    if (count < 4) {
      routine(count + 1);
    }
  }
}
routine(0);

function fibo(n) {
  var nums = [0, 1];
  if (n === 0) {
    return nums[0];
  }
  if (n === 1) {
    return nums[1];
  }

  for (var j = 2; j <= n; j++) {
    var something = nums[j-1] + nums[j-2];
    nums.push(something); 
  }
  return nums[nums.length - 1];
}

console.log(fibo(10));