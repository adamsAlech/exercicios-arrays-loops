/*Exercício 05

## Filtrando apenas os pares

Declare um array com alguns números inteiros quaisquer.

Depois, percorra este array, filtrando apenas os números **pares** e 
os armazenando em um novo array.

Ao final, imprima a variável do array contendo apenas os números 
pares no console.*/

const original = [2, 4, 12, 21, 54, 88, 81];

for (let pares of original) {
    if (pares % 2 === 0) {
        console.log(pares);
    }
}