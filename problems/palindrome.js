/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

function palindrome(x) {
  if (x < 0) return false;
  let reverse = 0;
  let xCopy = x;
  while (x > 0) {
    remainder = x % 10;
    reverse = reverse * 10 + remainder;
    x = Math.floor(x / 10);
  }
  //Instead of writing Ifelse condition it can be written in one line like this.
  return reverse === xCopy;
}

let number = 1221;
let result = palindrome(number);
console.log(result);
