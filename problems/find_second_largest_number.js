// Write a function that takes an array of numbers as input and returns the second largest element in the array.

function secondLargestNumber(arr) {
  let largest = arr[0];
  let secondlargest;
  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      secondlargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondlargest) {
      secondlargest = arr[i];
    }
  }
  return secondlargest;
}

let numbers = [10, 5, 20, 18, 20, 14];
let result = secondLargestNumber(numbers);
console.log(result);
