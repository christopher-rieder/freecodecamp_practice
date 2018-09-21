"use strict";

//This method is somewhat inspired in the erathostenes sieve.
//TODO: this can be generalized for random numbers in any order with some extra code.
//for each number shifted, we factor, we divide the array with each factor and then
//we put the factors of the number shifted into the main factors array

//the factors will be ordered, but with a^n we can expect 'a'
//'2' after 31 (would be 2^5, 32), 61 (would be 2^6, 64) or 127 (would be 2^7, 128)

//with a result variable the method is a little faster, but with a factors array,
//we can print and see all the factors.
function smallestMult(n) {
    let factors = []; //let result = 1;
    let numbers = [];

    //fill array
    for (let i = 2; i <= n; i++) {
        numbers.push(i);
    }

    let num = numbers.shift();
    while (num !== undefined) {
        //we divide by num each item of array, but only if the item is divisible by num
        //so if we divide by two, we only divide even numbers, ignoring odd numbers
        numbers = numbers.map(n => n % num === 0 ? n / num : n)
            .filter(n => n > 1);
        factors.push(num); //result *= num;
        //with ordered sucesive numbers [1..20] every time we shift we ALWAYS
        //obtain a prime number after the map & filter operations.
        num = numbers.shift();
    }
    console.log(factors);
    return factors.reduce((a, b) => a * b); //return result;
}

console.time('time');
let result = smallestMult(20); //232792560
console.log(result);
console.timeEnd('time');