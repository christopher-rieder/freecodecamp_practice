"use strict";
function fiboEvenSum(number) {
    console.log(fiboRecurse(1, 1, number, 0, 0));
    return fiboLoop(number);
}

function fiboRecurse(a, b, ceiling, sum, count) {
    if (count > ceiling || sum === Infinity) {
        return sum;
    }
    if (b % 2 === 0) {
        sum += b;
    }
    count += 1;
    return fiboRecurse(b, a + b, ceiling, sum, count);
}

function fiboLoop(ceiling) {
    let count = 0, sum = 0, a = 1, b = 1;

    while (count <= ceiling && sum !== Infinity) {
        if (b % 2 === 0) {
            sum += b;
        }
        const temp = a;
        a = b;
        b = temp + b;
        count += 1;
    }
    return sum;
}

console.time('time');
let result = fiboEvenSum(1000);
console.log(result);
console.timeEnd('time');