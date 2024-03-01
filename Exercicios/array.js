// Lista de compra 10 itens
/*
let items = [];

for (let item = 0; item < 10; item++ ) {
  let itemName= prompt ("Digite o item:" + (item + 1))

  items[item] = itemName
}

alert(items)
*/
// Gerando numero aleatorio
let result = prompt ("Adivinhe o numero que estou pensando, está entre 0 e 10")
const randomNumber =  Math.round(Math.random() * 10)

xAttempts = 1;

while (Number(result) != randomNumber) {
  result = prompt ("erro, tente novamente: ")
  xAttempts++
}

alert ("Parabéns voce acertou em " + xAttempts + " tentativas")