/*
Pattern 6 – Inverted Number Pyramid

Description: Print decreasing numbers per row.

Example (n=5)

12345
1234
123
12
1
*/

for (let i = 5; i > 0; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}
