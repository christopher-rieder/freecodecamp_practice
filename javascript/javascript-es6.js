// javascript - ES6 section

// USE REST OPERATORS
const sum = (function () {
  return function sum (...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

// ES6: USE THE SPREAD OPERATOR TO EVALUATE ARRAYS IN-PLACE
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
  'use strict';
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);

// ES6: USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM OBJECTS
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw (avgTemperatures) {
  'use strict';
  // change code below this line
  // {tomorrow: tempOfTomorrow} similar to
  // tomorrow as tempOfTomorrow
  const {tomorrow: tempOfTomorrow} = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

// ES6: USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM NESTED OBJECTS
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw (forecast) {
  'use strict';
  // change code below this line
  const { tomorrow: {max: maxOfTomorrow} } = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

// ES6: USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM ARRAYS
let a = 8;
let b = 6;
(() => {
  'use strict';
  // change code below this line
  [a, b] = [b, a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

// ES6: USE DESTRUCTURING ASSIGNMENT WITH THE REST OPERATOR TO REASSIGN ARRAY ELEMENTS
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo (list) {
  'use strict';
  // change code below this line
  const [,, ...arr] = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

// ES6: USE DESTRUCTURING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION'S PARAMETERS
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function () {
  'use strict'; // do not change this line

  // change code below this line
  return function half ({max, min}) {
    // use function argument destructuring
    return (max + min) / 2.0;
  };
  // change code above this line
})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
