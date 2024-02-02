//Exercício 02

// Contando letras

//Declare uma nova variável que contem um array contendo algumas letras.

//Faça um programa que conta quantas letras "E" ou "e" existem nesse array.

//Imprima mensagens bonitinhas para mostrar o resultado, por favor. Inclusive quando nenhuma letra for encontrada.

const letras = ["A", "a", "B", "C", "E", "e"];

let encontrado = false;

for (let letra of letras) {
    if (letra === 'E' || letra === 'e') {
        console.log(`A letra ${letra} foi encontrada`);
        encontrado = true;
    }
}
if (!encontrado) {
    console.log(`A letra não foi encontrada`);
}