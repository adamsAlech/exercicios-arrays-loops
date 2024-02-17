/*Exercício 12

## Fila do banco

Neste exercício iremos controlar a fila de um banco que tem um limite de pessoas que podem 
ficar do lado de dentro. Portanto, **enquanto** houver pessoas do lado de fora, e do lado de 
dentro ainda não tenha atingido o limite permitido, deveremos permitir a entrada.

Para isso, teremos dois arrays, um para controlar a fila do lado de dentro do banco e outro 
para controlar a fila do lado de fora. Estes serão arrays de strings onde cada elemento é o 
nome da pessoa que está na fila. Nossos arrays serão chamados de **filaDeDentro** e **filaDeFora**.

O limite de elementos para a **filaDeDentro** deverá ser **5 pessoas**.

Enquanto houver elementos na **filaDeFora** e espaços disponíveis dentro do limite na 
**filaDeDentro**, deveremos passar o primeiro elemento da **filaDeFora** para a última posição da **filaDeDentro**.

Ao final, imprima todos os elementos da **filaDeDentro** e em seguida imprima todos os elementos da **filaDeFora**
*/

const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

for (let i = 0; i <= 4; i++) {
    if (filaDeDentro.length <= 4) {
        filaDeDentro.push(filaDeFora[i]);
        filaDeFora.shift();
    }
}
console.log(filaDeDentro);
console.log(filaDeFora);