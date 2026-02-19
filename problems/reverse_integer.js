/*
Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
 

Constraints:
-231 <= x <= 231 - 1
*/

function reverseInteger(x) {
  let reverse = 0;
  let xCopy = x;
  while (x > 0) {
    let remainder = x % 10;
    reverse = reverse * 10 + remainder;
    x = Math.floor(x / 10);
  }
  // limit is 2 to the power of 31
  let limit = Math.pow(2, 31);
  if (reverse > limit || reverse < -limit) return 0;
  return xCopy < 0 ? -reverse : reverse;
}

let integer = 1234567892;
let result = reverseInteger(integer);
console.log(result);

/*
To find power of something
1. Math.pow(value, power value);
2. value**powerValue
*/
