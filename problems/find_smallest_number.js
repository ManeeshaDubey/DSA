// Write a function that takes an array of numbers as input and returns the smallest element present in the array.

function smallestNumber(arr) {
  let smallest = Infinity;
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let numbers = [8, 3, 12, 5, -2];
let result = smallestNumber(numbers);
console.log(result);
