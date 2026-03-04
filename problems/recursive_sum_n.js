/*
Write a program that calculates the sum of the first N natural numbers using recursion.
The program should take an integer N as input and recursively compute the sum:

1+2+3+...+𝑁

Use a recursive function where the base case handles the smallest input and the recursive case reduces the problem size.
*/

let count = 0;
function sumFirstNRecursion(num) {
  if (num == 0) {
    return count;
  }
  count = count + num;
  num--;
  return sumFirstNRecursion(num);
}

const n = 5;
const result = sumFirstNRecursion(n);
console.log("result", result);
