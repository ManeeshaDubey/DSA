//Insertion Sort

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let previous = i - 1;
    while (current < arr[previous] && previous >= 0) {
      arr[previous + 1] = arr[previous];
      previous--;
    }
    arr[previous + 1] = current;
  }
  return arr;
}

let nums = [12, 4, 8, 3, 10];
let result = insertionSort(nums);
console.log(result);
