//Bubble Sort Algorithm

function bubbleSort(arr) {
  let swapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
        swapped = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        }
      if (swapped !== true) return arr;
    }
  }
  return arr;
}

let nums = [7,6,5,3,4,2,1];
let result = bubbleSort(nums);
console.log(result);
