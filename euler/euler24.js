'use strict';

const numbersToPermutate = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var acu = [];
var cont = 0;

console.log(numbersToPermutate);

function permutator () {
  if (acu.length >= numbersToPermutate.length) {
    cont += 1;
    if (cont === 1000000) {
      console.log(acu.join(''), cont);
    }
    return;
  }

  for (let num of numbersToPermutate) {
    if (!acu.includes(num)) {
      acu.push(num);
      permutator();
      acu.pop();
    }
  }
}

permutator();
