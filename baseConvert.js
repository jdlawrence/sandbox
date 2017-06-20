function convert(num, base, place) {
  place = place || 0;

  if (place < 0 || num === 0 && place === 0) {
    return '';
  }
  // Calculate a power of the base  
  var divisor = Math.pow(base, place);

  if (num < divisor && place > 0) {
    return '0' + convert(num, base, place - 1);
  }
  // Check to see if num / divisor > base
  // If it is, increase the divisor by an order of magnitude 
  while ( num / divisor >= base) {
    divisor *= base;
    place++;
  }

  var resultSoFar = Math.floor(num / divisor);

  return parseInt('' + resultSoFar + convert(num % divisor, base, place - 1));

}

console.log(convert(51, 7, 0));
console.log(convert(32, 5, 0));

