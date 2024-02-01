const numeros = [2, 3, 4, 6];
let soma = 0
// i=0 marca de onde quero começar a contagem do loop
// i<numeros.length é o tamanho da lista (array)
// i++ é forma de contar do for, ou seja 0+1, 1+1, 2+1, 3+1 ...
for (let i = 0; i < numeros.length; i++) {
    // soma dos numeros da lista um a um primeiro+segundo+terceiro...
    soma += numeros[i];
}
//imprime na tema a operação desejada.
console.log(soma);