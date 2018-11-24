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

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
