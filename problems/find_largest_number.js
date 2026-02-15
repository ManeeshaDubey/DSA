// Write a function that takes an array of numbers as input and returns the largest element present in the array.

function largestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// Another way of solving while handling edge cases
function greatestNumber(arr) {
  let greatest = -Infinity;
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > greatest) {
      greatest = arr[i];
    }
  }
  return greatest;
}

let numbers = [12, 5, 8, -21, 3, -42];
let result = greatestNumber(numbers);
console.log(result);
