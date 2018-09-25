"use strict";
function sumSquareDifference(number) {
    const sum = number * (number + 1) / 2;

    let sumSquares = 0;
    let square = 0;
    let i = 1;

    // this begs an explanation...
    // series of odd numbers:                   |  1|  3|  5|  7|  9| 11| 13| 15| 17| 19| 21| 23|
    // series of sum of odd numbers = squares:  |  1|  4|  9| 16| 25| 36| 49| 64| 81|100|121|144|
    // series of sum of squares:                |  1|  5| 14| 20| 45| 81|130|194|275|375|496|640|

    while (i < number * 2 ) {  //| remove '* 2' if using i*i;
        square += i;
        sumSquares += square;
        i += 2;
        //sumSquares += i*i;   //| not really much of a diference in terms of performance
        //i++;                 //| i keep it to remember that sum of odd numbers = square
    }

    return sum * sum - sumSquares;
}

console.time('time');
let result = sumSquareDifference(100);
console.log(result);
console.timeEnd('time');