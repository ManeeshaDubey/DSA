// Sum of all odd numbers in an array

function sumOfOdd(n) {
  let isOdd = num[n] % 2 !== 0;
  if (n == 0) {
    return isOdd ? num[n] : 0;
  }
  return (isOdd ? num[n] : 0) + sumOfOdd(n - 1);
}

let num = [5, 3, 2, 0, 1];
console.log(sumOfOdd(num.length - 1));
