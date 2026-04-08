//Insertion Sort

function insertionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j > 0; j--){
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}

let nums = [12, 4, 8, 3, 10];
let result = insertionSort(nums);
console.log(result);