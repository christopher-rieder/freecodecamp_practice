'use strict';
function nthPrime (number) {
  let count = 1;
  let prime = 2;
  while (count < number) {
    prime = nextPrime(prime);
    count++;
  }
  // Good luck!
  return prime;
}

// expects n > 1
function nextPrime (n) {
  let next = oddNumber(n) + 2; // always an odd number
  let i;

  while (i !== 1) {
    const ceiling = oddNumber(Math.floor((Math.sqrt(next)))); // FIXME: HOW TO CHAIN IN A BETTER WAY ??
    for (i = ceiling; i > 1; i -= 2) {
      if (next % i === 0) {
        next += 2; // not a prime, divisible by 'i', evaluate next odd number.
        break; // break for loop, continue next while loop iteration.
      }
    }
  }
  return next;
}

const oddNumber = n => n % 2 === 0 ? n - 1 : n;

console.time('time');
let result = nthPrime(10001); // 104743
console.log(result);
console.timeEnd('time');
