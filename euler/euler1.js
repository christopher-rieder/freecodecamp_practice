'use strict';

// sumOfMultiples (3,30) === (3+6+9+12+15+18+21+24+27+30)
// 3 * (1+2+3+4+5+6+7+8+9+10)
// (1+2+3+4+5+6+7+8+9+10) = 10 * (10+1) / 2
// 3 * (1+2+3+4+5+6+7+8+9+10) = 3 * 10 * 11 / 2
const sumOfMultiples = (number, ceiling) =>
  number *
    Math.floor(ceiling / number) *
    Math.floor((ceiling / number) + 1) /
    2;

const add = (a, b) => a + b;

function multiplesOf3and5 (number) {
  const ceiling = number - 1;
  let n = [3, 5, -15];
  return n.map(x => sumOfMultiples(x, ceiling))
    .reduce(add);
}

console.time('time');
let result = multiplesOf3and5(1000);
console.log(result);
console.timeEnd('time');
