//Sum of all numbers in an array

function Sum(n) {
  if (n == 0) {
    return num[n];
  }
  return num[n] + Sum(n - 1);
}

let num = [5, 3, 2, 0, 1];
console.log(Sum(num.length - 1));
