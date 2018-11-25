// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one
// of the two given arrays, but not both. In other words, return the symmetric
// difference of the two arrays.

// arr1.filter(  el1 => arr2.every(  el2 => el2 !== el1)))
// for each el1, check that ALL the elements from arr2 are different.
// if any item of arr2 is equal to el1, el1 doesn't pass the filter

// another way to express this is by negating some()
// arr1.filter(  el1 => !arr2.some(  el2 => el2 === el1)))
// wich makes more sense semantically: if any/some element is equal to el1, it doesn't pass the filter
// but the negation add a posible point of confusion too

// NOTE: this predicate:         el1 => arr2.every(el2 => el2 !== el1))
// is functionally the same as:  el1 => !arr2.includes(el1)

// el1: element from arr1
// el2: element from arr2
function diffArray (arr1, arr2) {
  var newArr = []
    .concat(
      arr1.filter(
        el1 => arr2.every(
          el2 => el2 !== el1))) // if ANY element of arr2 is equal to el1, el1 doesn't pass the filter.
    .concat(
      arr2.filter(
        el2 => arr1.every(
          el1 => el1 !== el2))); // if ANY element of arr1 is equal to el2, el2 doesn't pass the filter.
  console.log(newArr);

  return newArr;
  // Same, same; but different.
}

function diffArraySimple (arr1, arr2) {
  var newArr = []
    .concat(
      arr1.filter(el1 => !arr2.includes(el1))) // if ANY element of arr2 is equal to el1, el1 doesn't pass the filter.
    .concat(
      arr2.filter(el2 => !arr1.includes(el2))); // if ANY element of arr1 is equal to el2, el2 doesn't pass the filter.
  console.log(newArr);

  return newArr;
  // Same, same; but different.
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArraySimple([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of
// the same value as these arguments.

function destroyer (arr, ...values) {
  // Remove all the values
  return []
    .concat(
      arr.filter(
        el1 => values.every(
          el2 => el2 !== el1))); // if ANY element of arr2 is equal to el1, el1 doesn't pass the filter.
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/** Returns an array that is the intersection of the two arrays passed by parameter.
 * @param {Array} arr1 first array
 * @param {Array} arr2 second array
 */
function intersection (arr1, arr2) {
  return [].concat(arr1.filter(el1 => arr2.includes(el1)));
}

function whatIsInAName (collection, source) {
  var sourceKeys = Object.keys(source);
  return collection.filter(el1 => {
    var el1Keys = Object.keys(el1);
    return el1Keys.length >= sourceKeys.length && sourceKeys.every(key => el1[key] === source[key]);
  });
}

console.log(
  whatIsInAName([{ 'apple': 1, 'bat': 2 }, { 'bat': 2 }, { 'apple': 1, 'bat': 2, 'cookie': 2 }],
    { 'apple': 1, 'bat': 2 })
);

console.log(
  whatIsInAName([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' })
);

// Intermediate Algorithm Scripting: Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

/**
  * @param {String} str A string
 */
function spinalCase (str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.split(/[\W_-]/) // split by nowords characters, '-' and '_'
    .join('-')
    .replace(/([a-z])([A-Z])/g, '$1-$2') // add a dash between a lowercase and a uppercase letter
    .toLowerCase();
}
console.log('Intermediate Algorithm Scripting: Spinal Tap Case');
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('AllThe-small Things'));

// Intermediate Algorithm Scripting: Pig Latin

function translatePigLatin (str) {
  if (str[0].match(/[aeiou]/)) {
    return str + 'way';
  }
  let consonants = str.match(/[^aeiou]+/);

  return str.substring(consonants[0].length).concat(consonants, 'ay');
}
console.log(
  translatePigLatin('consonant')
);

// Intermediate Algorithm Scripting: Search and Replace

function myReplace (str, before, after) {
  let regexp = new RegExp(before, 'i');
  let match = str.match(regexp);
  let firstLetter = match[0][0];
  if (firstLetter === firstLetter.toUpperCase()) {
    after = after[0].toUpperCase() + after.substring(1);
  }

  return str.replace(regexp, after);
}
console.log(
  myReplace('A quick brown fox Jumped over the lazy dog', 'jumped', 'leaped')
);

// Intermediate Algorithm Scripting: DNA Pairing

/**
 * @param {String} str A string
 */
function pairElement (str) {
  return str.split('')
    .map(char => {
      switch (char) {
        case 'G':
          return ['G', 'C'];
        case 'C':
          return ['C', 'G'];
        case 'A':
          return ['A', 'T'];
        case 'T':
          return ['T', 'A'];
      }
    });
}

pairElement('GCG');

// Intermediate Algorithm Scripting: Missing letters

function fearNotLetter (str) {
  let charCode;
  let charCodes = str.split('').map(char => char.charCodeAt(0));
  charCodes.forEach((char, index, arr) => {
    if (char + 1 !== arr[index + 1] && arr[index + 1]) {
      charCode = char + 1;
    }
  });

  if (charCode) {
    return String.fromCharCode(charCode);
  }
}

console.log(fearNotLetter('abce'));

// Intermediate Algorithm Scripting: Sorted Union

function uniteUnique (...arrs) {
  let newArr = [];
  arrs.forEach(nestedArray => {
    nestedArray.forEach(el => {
      if (!newArr.includes(el)) {
        newArr.push(el);
      }
    });
  });

  return newArr;
}

console.log(
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
);

// Intermediate Algorithm Scripting: Convert HTML Entities

function convertHTML (str) {
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

convertHTML('Dolce & Gabbana');

// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

function sumFibs (num) {
  let a = 1;
  let b = 1;
  let fibo = [1];

  while (b <= num) {
    fibo.push(b);
    [a, b] = [b, a + b];
  }

  return fibo.filter(n => n % 2 === 1).reduce((a, b) => a + b);
}

console.log(sumFibs(75025));

// Intermediate Algorithm Scripting: Sum All Primes

// expects n > 1
// returns the next prime, as the name implies.
const nextPrime = function (n) {
  if (n < 2) {
    return 2;
  }
  let next = oddNumber(n) + 2; // always an odd number
  let i;
  while (i !== 1) {
    const ceiling = compose(oddNumber, Math.floor, Math.sqrt)(next);
    for (i = ceiling; i > 1; i -= 2) {
      if (next % i === 0) {
        next += 2; // not a prime, divisible by 'i', evaluate next odd number.
        break; // break for loop, continue next while loop iteration.
      }
    }
  }
  return next;
};

// returns the same number or the previous number if the input is an even number.
// 6-->5 ; 7-->7 ; 8-->7; 9-->9;
const oddNumber = n => n % 2 === 0 ? n - 1 : n;
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

function sumPrimes (num) {
  let primes = [];
  let prime = 2;
  while (prime <= num) {
    primes.push(prime);
    prime = nextPrime(prime);
  }
  return primes.reduce((a, b) => a + b);
}

console.log(sumPrimes(977));

// Intermediate Algorithm Scripting: Smallest Common Multiple

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

/* Returns an array with all the prime factors of n, ordered in ascending order.
 * Returns repeated prime numbers for every prime factor that is exponential.
 * Example: for 16 it will return [2,2,2,2]
 */
const primeFactors = function (n) {
  let i = 2;
  let factors = [];

  while (i <= n) {
    if (n % i === 0) {
      n /= i;
      factors.push(i);
    } else { // This else is for avoiding returning only one time a exponential prime factor.
      i += 1;
    }
  }
  return factors;
};

const smallestCommonMultiple = function (numbers) {
  let factors = [];

  let num = numbers.pop();
  while (num !== undefined) {
    let numFactors = primeFactors(num);

    // For every factor of num, we divide each of number of the numbers array.
    // example: for 20, the factors are 2, 2 and 5.
    // so we divide the numbers array with 2, 2 again and then 5.
    numFactors.forEach(numFactor => {
      numbers = numbers
        .map(n => n % numFactor === 0 ? n / numFactor : n)
        .filter(n => n > 1); // we remove all the 1s generated with the division, if they exist.
      factors.push(numFactor);
    });

    num = numbers.pop(); // we process the next number in the numbers array.
  }
  console.log(factors);
  return factors.reduce(multiply);
};

function smallestCommons (arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let nums = [];
  for (let i = min; i <= max; i++) {
    nums.push(i);
  }

  return smallestCommonMultiple(nums);
}

smallestCommons([1, 5]);

// Intermediate Algorithm Scripting: Drop it

function dropElements (arr, func) {
  let idx = 0;
  while (!func(arr[idx])) {
    idx++;
  }
  return arr.slice(idx);
}

dropElements([1, 2, 3], function (n) { return n < 3; });

// Intermediate Algorithm Scripting: Steamroller

function steamrollArray (arr) {
  // I'm a steamroller, baby
  let flattened = [];
  function _flatten (arr) {
    arr.forEach(el => {
      if (el instanceof Array) {
        _flatten(el);
      } else {
        flattened.push(el);
      }
    });
    return flattened;
  }

  return _flatten(arr);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

// Intermediate Algorithm Scripting: Binary Agents

function binaryAgent (str) {
  return str
    .split(' ')
    .map(e => String.fromCharCode(parseInt(e, 2)))
    .join('');
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
