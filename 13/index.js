/*Exercício 13

## Verificando disjuntores

Precisamos verificar em uma caixa de disjuntores quais estão ligados.

A caixa de disjuntores é representada por um array onde, cada item do 
array é um disjuntor. Nesse array o índice do item é a identificação do 
disjuntor (começando em 0) e o valor do item, um `boolean`, é a indicação 
se o disjuntor está ligado ou não. Imprima no console a posição **apenas 
dos disjuntores que estão ligados**, se possível, utilizar o conceito de **_truthiness_**.

*/

const disjuntores = [false, false, true, false, false, true, false, false];

let disjuntoresLigados = [];

let verificaDisjutoresLigados = disjuntores.indexOf(true);

while (verificaDisjutoresLigados != -1) {
    disjuntoresLigados.push(verificaDisjutoresLigados);
    verificaDisjutoresLigados = disjuntores.indexOf(true, verificaDisjutoresLigados + 1);

} console.log(disjuntoresLigados);