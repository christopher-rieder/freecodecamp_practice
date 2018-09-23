"use strict";

function longestCollatzSequence(limit) {
    let longestChain = 0;
    let longestChainNumber = 0;
    let knownChains = [];

    for (let i = 2; i < limit; i++) {
        let currChain = 1;
        let n = i;
        while (n !== 1) {
            if (n < limit && knownChains[n]) { //look ma, no arrayOutOfBounds
                currChain = currChain + knownChains[n] - 1;
                break;
            }
            currChain++;
            //n = n % 2 === 0 ? n / 2 : 3 * n + 1;
            //next collatz sequence
            //there is some room to optimization here, bypassing even numbers.
            //but i have to see how it will play with my loop
            //it may even use less of the knownChains array, saving only odd numbers.

            if (n % 2 === 0) {
                n = n / 2;
            } else {
                n = (3 * n + 1) / 2; //--> an even number, we divide by two.
                currChain++;
            }
        }
        if (currChain > longestChain) {
            longestChain = currChain;
            longestChainNumber = i;
        }
        knownChains[i] = currChain;
    }

    console.log("Longest chain: " + longestChain);
    console.log("Number: " + longestChainNumber);
    return longestChainNumber;
}

console.time('time');
let result = longestCollatzSequence(1000000);
console.log(result);
console.timeEnd('time');