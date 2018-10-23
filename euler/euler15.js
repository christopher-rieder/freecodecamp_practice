'use strict';

// Brute recursion, extremely ineficient.
// function euler15LatticePathBrute (x, y, count) {
//   if (x == 0 || y == 0) {
//     count += 1;
//     return count;
//   }
//   count = euler15LatticePathBrute(x - 1, y, count);
//   count = euler15LatticePathBrute(x, y - 1, count);
//   return count;
// }

// using pascal triangle
function latticePaths (gridSize) {
  let grid = [];
  for (let i = 0; i <= gridSize; i++) {
    grid[i] = 1;
  }

  for (let i = 1; i <= gridSize; i++) {
    for (let j = 1; j <= gridSize; j++) {
      grid[j] = grid[j] + grid[j - 1];
    }
    // console.log(grid);
  }
  return grid[gridSize];
}

console.time('time');
let result = latticePaths(4);
console.log(result);
console.timeEnd('time');

/* pascal triangle
                   01
                 01  01
               01  02  01
             01  03  03  01
           01  04  06  04  01
         01  05  10  10  05  01
       01  06  15  20  15  06  01
     01  07  21  35  35  21  07  01
   01  08  28  56  70  56  28  08  01

rows calculated for grid = 4

                0      0
              1  ↘   ↙   1
            2  ↘   01  ↙   2
           3  ↘  01  01  ↙   3
         4  ↘  01  02  01  ↙   4
          ↘  01  03  03  01  ↙
           01  04  06  04  01
             05  10  10  05
               15  20  15
                 35  35
                   70

the array ends up like row 4. [1,5,15,35,70]
if we change the index in the first loop
after each for cycle the array ends up:
[ 1, 2, 3, 4, 5 ]
[ 1, 3, 6, 10, 15 ]
[ 1, 4, 10, 20, 35 ]
[ 1, 5, 15, 35, 70 ]
wich correspond to rows 1, 2, 3, 4 of the triangle.

we can obtain the lattice path count of non square grids
like 4x3, 4x2, 5x9, etc.
we calculate a "diamond" shaped part of the triangle
because it's what we need for square grids

*/
