'use strict';
// a+b+c=1000
// aa+bb=cc
// replace c in pythagoras theorem ;; c=1000-a-b

// aa+bb=(1000-a-b)*(1000-a-b)
// aa+bb=1000000-1000a-1000b-1000a+aa+ab-1000b+ab+bb
// 0=1000000-2000a-2000b+2ab
// 1000a+1000b-ab=500000
// 1000*(a+b-500)=ab  --> [ a+b > 500 ] --> [c < 500]
// a<b<c<500

function specialPythagoreanTriplet (n) {
  let iter = 0;

  for (let a = 1; a < n / 2; a += 1, iter++) {
    for (let b = n / 2 - a; b < n - a - b; b += 1, iter++) { // b<c --> c= n-a-b
      console.log(`a: ${a}, b: ${b}`);
      if (n * (a + b - n / 2) === a * b) { // 1000*(a+b-500)=ab
        let c = n - a - b;
        console.log(`a: ${a}, b: ${b}, c: ${c}; a*b*c= ${a * b * c} after ${iter} iterations`);
        console.log(`aa: ${a * a}, bb: ${b * b}, cc: ${c * c}`);
        return a * b * c;
      }
    }
  }
  return false;
}

console.time('time');
let result = specialPythagoreanTriplet(1000);// 200, 375, 425
console.log(result);
console.timeEnd('time');
