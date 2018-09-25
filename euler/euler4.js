"use strict";

const getPalindrome =
    (n) =>
    Number(String(n) + String(n).split("").reverse().join(""));

function largestPalindromeProduct(digit) {
    const ceiling = (10 ** digit) - 1; //10^3 - 1  === 999
    const floor = 10 ** (digit - 1);   //10^(3-1)  === 100
    for (let i = ceiling - 1; i >= floor; i -= 1) {
        //for 999..100 we get the corresponding palindrome;; 999=>999999 ; 998=>998899 ; 997=>997799
        const palindrome = getPalindrome(i);

        for (let j = ceiling; j >= floor; j--) {
            //for 999..100 we check if palindrome it's divisible and if its two divisors are below 999
            if (palindrome % j === 0 && (palindrome / j) < ceiling) {
                console.log(`n: ${palindrome} = ${j}*${palindrome / j}, modulo: ${palindrome % j}`);
                return palindrome;
            }
        }
    }
}

console.time('time');
let result = largestPalindromeProduct(3);
console.log(result);
console.timeEnd('time');