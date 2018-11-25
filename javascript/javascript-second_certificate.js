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
