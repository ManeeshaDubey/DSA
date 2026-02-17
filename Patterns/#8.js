/*
Pattern – Binary Alternating Triangle

Description: 
Print alternating 1s and 0s in each row, starting with 1. 
Each row $i$ contains exactly $i$ digits.
    
Example(n = 6)

1
10
101
1010
10101
101010
*/

let n = 6;
for (let i = 0; i < n; i++) {
  let row = "";
  let value = 0;
  for (let j = 0; j <= i; j++) {
    if (value === 1) {
      value = 0;
      row = row + value;
    } else {
      value = 1;
      row = row + value;
    }
  }
  console.log(row);
}
