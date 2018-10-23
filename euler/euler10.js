'use strict';

function primeSummationBrute (n) {
  let sum = 0; // special case
  let prime = 2;

  while (prime < n) {
    sum += prime;
    prime = nextPrime(prime);
  }
  return sum;
}

function primeSummation (n) {
  let ceiling = Math.sqrt(n);
  let sieve = [];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sieve.push(true);
  }

  for (let i = 4; i < n; i += 2) {
    sieve[i] = false;
  }

  for (let i = 3; i <= ceiling; i += 2) {
    if (sieve[i]) {
      for (let j = i * i; j < n; j += i * 2) {
        sieve[j] = false;
      }
    }
  }

  for (let i = 2; i < n; i++) {
    if (sieve[i]) {
      sum += i;
    }
  }

  return sum;
}

// expects n > 1
function nextPrime (n) {
  let next = oddNumber(n) + 2; // always an odd number
  let i;

  while (i !== 1) {
    const ceiling = getCeiling(next);
    for (i = ceiling; i > 1; i -= 2) {
      if (next % i === 0) {
        next += 2; // not a prime, divisible by 'i', evaluate next odd number.
        break; // break for loop, continue next while loop iteration.
      }
    }
  }
  return next;
}

const oddNumber = n => n % 2 === 0 ? n - 1 : n; // returns the same number or the number minus one if it's even
const pipe = (...fns) => fns.reduce((a, b) => (arg) => b(a(arg))); // variadic piping
const getCeiling = pipe(Math.sqrt, Math.floor, oddNumber);

console.time('time');
let result = primeSummation(2000000);
console.log(result);
console.timeEnd('time');
console.time('time');
console.log(primeSummationBrute(2000000));
console.timeEnd('time');
