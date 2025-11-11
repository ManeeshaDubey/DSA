/*
Pattern 3 – Right - Angled Number Pyramid(1 to row number)

Description: Each row prints numbers from 1 to that row number.

Example (n=5)

1
12
123
1234
12345
*/

for (let i = 1; i < 6; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}
