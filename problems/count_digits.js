// Write a function that takes an integer as input and returns the count of digits present in the number.

function countDigits(num) {
  if (num === 0) return 1;
  let count = 0;
  num = Math.abs(num);
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

let result = countDigits(-9110360232);
console.log(result);

/*
corner cases
Handle negative numbers
To consider 0 has digit and return 1 or not.

Methods
Math.floor() → rounds down
Math.ceil() → rounds up
Math.round() → rounds to nearest integer
Math.abs() → removes the negative sign
*/
