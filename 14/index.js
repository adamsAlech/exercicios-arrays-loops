/*Exercício 14

## Imprima os menores

Considerando que temos dois arrays do mesmo tamanho (mesma quantidade de itens) e que todos os 
itens de ambos os arrays são números, deveremos, para cada respectiva posição, imprimir o menor 
valor encontrado entre os dois arrays.

Inicialmente, ambos os arrays terão 5 itens.
*/

const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] < arrayB[i]) {
        console.log(arrayA[i]);
    }

    if (arrayB[i] < arrayA[i]) {
        console.log(arrayB[i]);
    }
}