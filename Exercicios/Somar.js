let number1 = prompt("Digite um número: ")
let number2 = prompt("Digite outro número: ")

// Para transformar uma string em number no alert usamos o Number
// Para usar uma string junto com um number precisa adicionar o + e colocar () para dar prioridade
let result = Number(number1) + Number(number2)
alert("O resultado final é: " + result)