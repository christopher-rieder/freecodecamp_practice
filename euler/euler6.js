"use strict";
function sumSquareDifference(number) {
    const sum = number * (number + 1) / 2;

    let sumSquares = 0;
    let square = 0;
    let i = 1;
    while(i < number * 2){
        square += i;
        sumSquares += square;
        i += 2;
    }

    return sum * sum - sumSquares;
}

console.time('time');
let result = sumSquareDifference(100);
console.log(result);
console.timeEnd('time');