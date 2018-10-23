// practica de mejorar un método mal escrito.
// primero leer y entender el método.
// la condicion del while no debe ser true. se puede modificar con algo logico
// el return deberia, y puede, estar al ultimo.
// el incremento por dos (next += 2) esta ubicado en una zona no tan lógica
// el metodo nextOddNumber causa problemas si n=2, deberia retornar 3 pero retorna 5.
// toma al numero 3 como numero no primo, porque ceiling da 3 cuando se ingresa n=2
// pero 3 % 3 === 0, asi que toma a 3 como numero no primo.
// con una modificacion del metodo, se evita este caso pero sigue andando para el resto
// sin tener que tratar al 2 como caso especial.

function nextPrime (n) {
  let next = nextOddNumber(n);

  while (true) { // <-- HORRIBLE
    const ceiling = nextOddNumber(Math.floor((Math.sqrt(next))));
    let i;
    for (i = ceiling; i > 1; i -= 2) { // <-- aumento de dos en dos para no procesar numeros pares
      if (next % i === 0) { // <-- pero es necesario que i y ceiling sean impares
        break;
      }
    }
    if (i === 1) {
      return next; // <--- DEBERIA ESTAR AL FINAL DEL METODO
    }
    next += 2; // <-- NO DEBERIA ESTAR ACA
  }
}

const nextOddNumber = (n) => n % 2 === 0 ? n + 1 : n + 2;

console.log(nextPrime(2)); // ->3
console.log(nextPrime(3)); // ->5
console.log(nextPrime(5)); // ->7
console.log(nextPrime(452)); // ->457
console.log(nextPrime(20001)); // ->20011
