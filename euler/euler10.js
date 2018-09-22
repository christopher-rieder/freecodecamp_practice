function primeSummationBrute(n) {
    let sum = 2; //special case
    let prime = 3;

    while (prime < n) {
        sum += prime
        prime = nextPrime(prime);
    }
    return sum;
}

function primeSummation(n) {
    let ceiling = Math.sqrt(n);
    let sieve = []
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sieve.push(true);
    }

    for (let i = 2; i < ceiling; i++) {
        if (sieve[i]) {
            for (let j = i * i; j < n; j+=i) {
                sieve[j] = false;
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if (sieve[i]) {
            sum += i;
        }
    }

    return sum;
}

function nextPrime(n) {
    let next = nextOddNumber(n);

    while (true) {
        let ceiling = Math.floor((Math.sqrt(next)));
        ceiling = nextOddNumber(ceiling);
        let i;
        for (i = ceiling; i > 1; i -= 2) {
            if (next % i === 0) {
                break;
            }
        }
        if (i === 1) {
            return next;
        }
        next += 2;
    }
}

const nextOddNumber = (n) => n % 2 === 0 ? n + 1 : n + 2;

console.time('time');
let result = primeSummation(2000000);
console.log(result);
console.timeEnd('time');