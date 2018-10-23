'use strict';
function divisibleTriangleNumber (n) {
  let add = 2;
  let divisible = 1;
  let divisors = 0;

  while (divisors < n) {
    divisible += add; // sequential triangle number
    add++;
    divisors = numDivisors(factors(divisible));
  }

  return divisible;
}

function factors (n) {
  let i = 2;
  let factors = [];

  while (i <= n) {
    if (n % i === 0) {
      n /= i;
      factors.push(i);
    } else {
      i += 1;
    }
  }
  return factors;
}

function numDivisors (factors) {
  let exp = [];
  let n = 2;
  let factor = factors.shift();

  while (factor) {
    if (factors.includes(factor)) {
      n++;
    } else {
      exp.push(n);
      n = 2;
    }
    factor = factors.shift();
  }

  return exp.reduce((acc, n) => acc * n);
}

console.time('time');
let result = divisibleTriangleNumber(374);// 76576500
console.log(result);
console.timeEnd('time');
