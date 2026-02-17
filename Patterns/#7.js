/*Pattern – Right - Aligned Triangle

Description: 
Print a triangle where the stars are aligned to the right.
This requires printing leading spaces that decrease as the number of stars increases.

Example(n = 5)
    
    *
   **
  ***
 ****
*****
*/

let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  // adding empty spaces
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + " ";
  }
  //adding stars
  for (let k = 0; k <= i; k++) {
    row = row + "*";
  }
  console.log(row);
}
