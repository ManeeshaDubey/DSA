/*
Pattern 1 – Rectangle Star Pattern

Description: Print a solid rectangle of stars with n rows and m columns.

Example (n=5, m=5)

*****
*****
*****
*****
*****
*/

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5; j++) {
    row += "*";
  }
  console.log(row);
}
