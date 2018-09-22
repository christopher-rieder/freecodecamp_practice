"use strict";
//a+b+c=1000
//aa+bb=cc
//replace c in pythagoras theorem ;; c=1000-a-b

//aa+bb=(1000-a-b)*(1000-a-b)
//aa+bb=1000000-1000a-1000b-1000a+aa+ab-1000b+ab+bb
//0=1000000-2000a-2000b+2ab
//1000a+1000b-ab=500000
//1000*(a+b-500)=ab  --> [ a+b > 500 ] --> [c < 500]
//a<b<c<500

function specialPythagoreanTriplet(n) {
    const sumOfabc = n;
    const half = Math.floor(sumOfabc / 2);
    let a, b, c, iter = 0;

    for (a = 1; a < half; a += 1, iter++) {
        for (b = half - a; b < sumOfabc - a - b; b += 1, iter++) {// b<c
            if (sumOfabc * (a + b - half) === a * b) { //1000*(a+b-500)=ab
                c = sumOfabc - a - b;
                console.log(`a: ${a}, b: ${b}, c: ${c}; a*b*c= ${a * b * c} after ${iter} iterations`);
                console.log(`aa: ${a * a}, bb: ${b * b}, cc: ${c * c}`);
                return a * b * c;
            }
        }
    }
    return false;
}

console.time('time');
let result = specialPythagoreanTriplet(1000);//200, 375, 425
console.log(result);
console.timeEnd('time');