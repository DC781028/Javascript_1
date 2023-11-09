// tipo de dado
// booleanos

// conversao implicita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString) // comparação do número
console.log(numero === numeroString) // comparação do número e tipo
console.log(numero + numeroString) // apenas faz concatenação


// conversao explicita
// Number{}
//String{}

console.log(numero + Number(numeroString))

const numero2 = 456;
const numeroString2 = Number("456");
console.log(numero2 + numeroString2) // apenas faz concatenação
