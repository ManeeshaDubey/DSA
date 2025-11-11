/*
Pattern 5 – Inverted Right Star Triangle

Description: Start from n stars and decrease to 1.

Example (n=5)

*****
****
***
**
*
*/

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 5; j > i; j--) {
    row += "*";
  }
  console.log(row);
}
