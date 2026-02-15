/* Write a function that searches for a given element in an array.
If the element is found, return the index of its first occurrence.
If the element is not present in the array, return -1.
*/

function searchElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

let elements = [9, 3, 8, 10, 24, 28, 7, 12];

console.log(searchElement(elements, 23));
