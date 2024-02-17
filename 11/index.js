/*Exercício 11

## Filtrando números

Declare um array contendo alguns números quaisquer.

Depois crie um novo array que contenha apenas os números do array original que estejam 
entre 10 e 20, incluindo esses números, ou que sejam maiores que 100. Ao final, imprima 
a variável que guarda o novo array.

#### Exemplo 1:

Para o array **original** abaixo:
*/


const original = [5, 7, 13, 17, 126, 14, 118, 245];

for (let item of original) {
    if (item >= 10 && item <= 20) {
        console.log(item);

    } if (item > 100) {
        console.log(item);


    }
}
