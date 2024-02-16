/*Exercício 07

## Filtrando nomes com a letra A

Declare um array com alguns nomes quaisquer.

Depois, crie um novo array a partir do primeiro que 
contenha apenas os nomes que começam com a letra "A" 
ou "a"(maiúscula ou minúscula).
Ao final, imprima a variável que guarda o array.
*/

const nomes = ["Cna", "Joana", "Carlos", "Cmanda"];
let encontrado = false;
for (let nomesComA of nomes) {
    for (let i = 0; i < nomesComA.length; i++) {
        if (nomesComA[0] === 'A') {
            console.log(nomesComA);
            encontrado = true;
            break
        } else if (nomesComA[0] === 'a') {
            console.log(nomesComA);
            encontrado = true;
            break
        }
    }
} if (!encontrado === true) {
    console.log('Não á nomes com a letra A');
}