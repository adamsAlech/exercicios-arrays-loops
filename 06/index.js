/*Exercício 06

## Soma dos pares

Declare um array com alguns números inteiros quaisquer.

Depois, percorra este array e calcule a **soma dos números pares** 
presentes nesse array.
*/

const numeros = [3, 4, 7, 8, 20, 6, 5, 10];

let somaPares = 0;

for (let pares of numeros) {
    if (pares % 2 === 0) {
        somaPares += pares;
    }
} console.log(somaPares);