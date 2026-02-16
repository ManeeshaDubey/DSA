// Write a function that takes an array of numbers as input and returns the second largest element in the array.

function secondLargestNumber(arr) {
  if (arr.length < 2) return null;

  let largest = arr[0];
  let secondlargest;

  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      secondlargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondlargest && arr[i] != largest) {
      secondlargest = arr[i];
    }
  }
  return secondlargest;
}

let numbers = [-10, 5, 20, -18, 20, 14];
let result = secondLargestNumber(numbers);
console.log(result);

/* Corner Cases handled
1. Array has duplicates
2. Array of length less than 2
3. Negative Numbers
4. Array is empty
*/
