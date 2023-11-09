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
console.log(numero2 + numeroString2) // soma


// String()
let telefone_2 = 12341234;
console.log("O telefone é " + String(telefone_2)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
console.log("O telefone é " + telefone_2.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.


// Number()
// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação

let largura_2 = "10";
let altura_2 = "5";
console.log( + largura_2 * + altura_2); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado_2 = false;
console.log(Number(usuarioConectado_2)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado_3 = true;
console.log(Number(usuarioConectado_3)); // agora teremos a conversão de true (verdadeiro) para o número 1.

