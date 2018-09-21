"use strict";

function largestPrimeFactor(number) {
    let i = 2;

    while (i <= number) {
        if (number % i === 0) {
            number /= i;
        } else {
            i += 1;
        }
    }
    return i;
}

console.time('time');
let result = largestPrimeFactor(13195);
console.log(result);
console.timeEnd('time');

// if 13195 % 5 === 0
//  13195 /= 5
//  number is now 2639
// if 2639 % 7 == 0
//  2639 /= 7
//  number is now 377
// if 377 % 13 == 0
//  377 /= 13
//  number is now 29
// if 29 % 29 == 0
//  29 /= 29
//  number is now 1
//  i is now 29
// return i