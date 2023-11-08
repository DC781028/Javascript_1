const texto1 = "Olá mundo!";
const texto2 = 'Olá mundo';
const senha = "senhaSuperSegura234!";
const StringDeNumeros = "34567";

const citacao = "O meu nome é ";
const meuNome = "David"


//concatenacao (+)

console.log(citacao + meuNome)


//template string Ou template literal


// caracteres especiais -> Unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


//Para saber mais: Trabalhando com strings

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input2.toLowerCase();

console.log(cidade === inputMinusculo); // true


const senha_lenght = "minhaSenha123";
console.log(senha_lenght.length) // 13 caracteres



