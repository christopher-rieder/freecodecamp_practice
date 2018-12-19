// Algorithms: Find the Symmetric Difference
// Create a function that takes two or more arrays and returns an array of the
// symmetric difference (△ or ⊕) of the provided arrays.

// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the
// mathematical term "symmetric difference" of two sets is the set of elements
// which are in either of the two sets, but not in both (A △ B = C = {1, 4}).
// For every additional symmetric difference you take (say on a set D = {2, 3}),
// you should get the set with elements which are in either of the two the sets
// but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array
// must contain only unique values (no duplicates).

function sym (...args) {
  let resultArr = [];

  for (let i = 0; i < args.length; i++) {
    new Set(args[i]) // remove duplicates
      .forEach(n => {
        if (resultArr.includes(n)) { // remove elements present in both arrays
          const index = resultArr.findIndex(e => e === n);
          resultArr.splice(index, 1);
        } else {
          resultArr.push(n); // otherwise, add the element ot the result array
        }
      });
  }

  return resultArr;
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));

// Algorithms: Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D
// array of a fresh delivery. Update the current existing inventory item
// quantities (in arr1). If an item cannot be found, add the new item and
// quantity into the inventory array. The returned inventory array should be
// in alphabetical order by item.

function updateInventory (arr1, arr2) {
  const COUNT = 0;
  const STRING = 1;

  let newArr = [...arr1];
  arr2.forEach(el2 => {
    const index = newArr.findIndex(el1 => el1[STRING] === el2[STRING]);
    if (index !== -1) {
      newArr[index][COUNT] += el2[COUNT];
    } else {
      newArr.push(el2);
    }
  });
  return newArr.sort((obj1, obj2) => obj1[1].localeCompare(obj2[1]));
}

console.log(updateInventory([[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']], [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']]));

// Algorithms: No Repeats Please
// Return the number of total permutations of the provided string that don't
// have repeated consecutive letters. Assume that all characters in the
// provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations
// (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba)
// don't have the same letter (in this case a) repeating.

function permAlone (stringToPermutate) {
  let count = 0;
  let acu = [];
  let charsToPermutate = stringToPermutate.split('');
  let passed = [];
  var regex = /([\w\d])\1{1,}/g;

  function _permutator () {
    if (acu.length === charsToPermutate.length) {
      if (!acu.join('').match(regex)) {
        count++;
      }
    // exit function
    } else {
      for (let i = 0; i < charsToPermutate.length; i++) {
        if (!passed[i]) {
          passed[i] = true;
          acu.push(charsToPermutate[i]);
          _permutator();
          acu.pop();
          passed[i] = false;
        }
      }
    }
  }

  _permutator();
  return count;
}

console.log(permAlone('abfdefa'));

// Algorithms: Pairwise
// Given an array arr, find element pairs whose sum equal the second argument
// arg and return the sum of their indices.
//
// You may use multiple pairs that have the same numeric elements but different
// indices. Each pair should use the lowest possible available indices. Once an
// element has been used it cannot be reused to pair with another element. For
// instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at indice
// 0 rather than the 1 at indice 1, because 0+2 < 1+2.
//
// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum
// to 20 are [7, 13] and [9, 11]. We can then write out the array with their
// indices and values.
//
// Index    0    1    2    3    4
// Value    7    9    11   13   15
// Below we'll take their corresponding indices and add them.
//
// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

/**
 *
 * @param {Array} arr
 * @param {Number} arg
 */
function pairwise (arr, arg) {
  let sumOfIndexes = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    delete arr[i];
    let idx = arr.findIndex(n => n + num === arg);
    if (idx !== -1) {
      sumOfIndexes += i;
      sumOfIndexes += idx;
      delete arr[idx];
    }
  }
  return sumOfIndexes;
}

console.log(pairwise([1, 1, 1], 2));

// Algorithms: Implement Bubble Sort
function bubbleSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

// Algorithms: Implement Selection Sort
function selectionSort (array) {
  for (let i = 0; i < array.length; i++) {
    let minIdx = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIdx];
    array[minIdx] = temp;
  }
  return array;
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

function insertionSort (array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      const temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
      j--;
    }
  }
  return array;
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

function quickSort (array) {
  if (array.length <= 1) { return array; } // base case

  let left = []; // elements <= than pivot
  let right = []; // elements > than pivot
  const pivot = array.pop(); // last element is pivot, for simplicity

  // a for is more performant than two Array.filter() calls
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

function mergeSort (array) {
  if (array.length <= 1) { return array; }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
