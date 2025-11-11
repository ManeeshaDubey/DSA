/*
Pattern 2 – Right-Angled Triangle (Increasing Stars)

Description: Print stars in increasing order from 1 to n.

Example (n=5)

*
**
***
****
*****
*/

for (let i = 1; i < 6; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "*";
  }
  console.log(row);
}
