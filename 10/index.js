/*Exercício 10

## Para pensar um pouco mais

Declare um array com alguns números inteiros quaisquer.

Depois, faça um programa que calcule a maior diferença 
entre dois números desse array.
*/

const numeros = [8, 11, 4, 1];

let menor = Math.min.apply(Math, numeros);
let maior = Math.max.apply(Math, numeros);

let diferenca = maior - menor;
console.log(diferenca);
