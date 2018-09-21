"use strict";
function fiboEvenSum(number) {
    return fiboRecurse(1, 1, number, 0, 0);
}

function fiboRecurse(a, b, ceiling, sum, count) {
    if (count > ceiling) {
        return sum;
    }
    if (b % 2 === 0) {
        sum += b;
    }
    count += 1;
    return fiboRecurse(b, a + b, ceiling, sum, count);
}

console.time('time');
let result = fiboEvenSum(10);
console.log(result);
console.timeEnd('time');