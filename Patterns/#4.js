/*
Pattern 4 – Right-Angled Number Pyramid (repeat row number)

Description: Each row prints the same number equal to the row number.

Example (n=5)

1
22
333
4444
55555
*/

for (let i = 1; i < 6; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += i;
  }
  console.log(row);
}
