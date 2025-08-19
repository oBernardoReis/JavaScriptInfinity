// Solicita ao usuário dois números
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

// Variável que vamos usar para atribuição
let resultado = 0;

// Adição
resultado = num1 + num2;
console.log("Adição: " + resultado);

// Subtração usando operador de atribuição
resultado = num1;
resultado -= num2;
console.log("Subtração: " + resultado);

// Multiplicação usando operador de atribuição
resultado = num1;
resultado *= num2;
console.log("Multiplicação: " + resultado);

// Divisão usando operador de atribuição
resultado = num1;
resultado /= num2;
console.log("Divisão: " + resultado);

// Resto da divisão usando operador de atribuição
resultado = num1;
resultado %= num2;
console.log("Resto da divisão: " + resultado);
