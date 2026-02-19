/*
Remove Duplicates from Sorted Array and return uniques elements length
Problem link - https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
*/

function removeDuplicates(nums) {
  //To keep track of unique elements
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    // this condtion can also be written like this --> nums[i]>nums[k]
    if (nums[k] != nums[i]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k++;
}

let numbers = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5];
let result = removeDuplicates(numbers);
console.log(result);
