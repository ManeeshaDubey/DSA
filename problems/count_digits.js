// Write a function that takes an integer as input and returns the count of digits present in the number.

function countDigits(num) {
  let number = num.toString();
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    count++;
  }
  return count;
}

let result = countDigits(9110360232);
console.log(result);
