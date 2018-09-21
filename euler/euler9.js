"use strict";
// a + b + c = 1000
// a*a + b*b - c*c = 0
//
// a      b       c      -1000
// a*a    b*b     -c*c   0
// => /a
// 1      b/a     c/     -1000/a
// a      b*b/a   -c*c/a  0

//  a       b       c       r
//  1       1       1       1000
//  a       b       -c      0

// --> -/a
//  a       b       c       r
//  1       1       1       1000
//  0       b-a     -c-a    -1000a

//  a       b       c           r
//  1       1       1           1000
//  0       1     -(c+a)/(b-a)  -1000a/(b-a)



// --> -/ (b-a)
//  a       b       c                    r
//  b-a       0     b + c                1000b
//  0       b-a    -(c+a)               -1000a

// --> -/ (b-a)
//  a       b       c                    r
//  -a      a       c+b                  1000b
//  -b      b       -c-a                -1000a

// --> -/ (b-a)
//  a       b       c                    r
//  -1      1       (1000-a)/a             1000b/a
//  1      -1       (1000-b)/b             1000a/b

// --> -/ (b-a)
//  a       b       c                      r
//  0       0       1                     (  1000b/a+1000a/b  )  / (  (1000a-1)+(1000b-1)  )
//  1      -1       0                     1000a/b  -  (  1000b/a+1000a/b  ) * (1000b-1)   / (  (1000a-1)+(1000b-1)  )



1000b/a+1000a/b
1000a + 1000b - 2



function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    // Good luck!
    return true;
}

console.time('time');
let result = specialPythagoreanTriplet(1000);
console.log(result);
console.timeEnd('time');