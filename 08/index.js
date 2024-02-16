/*Encontrando o maior

Declare um array com alguns números quaisquer.

Depois, faça um programa que encontre o maior número 
desse array e o imprima no console.
*/

const numeros = [3, 24, 1, 8, 11, 7, 15];
let maior = 0;
for (let item of numeros) {
    if (item > maior) {
        maior = item;
    }
} console.log(maior);