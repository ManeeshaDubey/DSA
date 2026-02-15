// Write a function that takes an array of numbers as input and returns the count of negative numbers present in the array.

function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count += 1;
    }
  }
  return count;
}

let numbers = [-3, 4, -1, 0, 7, -5];
let result = countNegatives(numbers);
console.log(result);
