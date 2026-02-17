/*
Pattern – Binary Row-Start Alternating Triangle

Description:
Print a triangle where each row starts with either a 1 or a 0 based on the row number, then alternates for the remainder of that row.

Example(n = 6)

1
01
010
1010
10101
010101
*/

let n = 6;
let toggle = 1;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
