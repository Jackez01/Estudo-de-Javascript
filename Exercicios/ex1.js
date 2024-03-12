let numberOne = prompt ("Digite um número: ")
let numberTwo = prompt ("Digite outro número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let soma = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let res = numberOne % numberTwo

div = div.toFixed(2)

alert (` A soma é de: ${soma}
A Subtração é de: ${sub}
A Multiplicação é de: ${mult}
A Divisão é de: ${div}
o Resto é de: ${res}`)

if (soma % 2 == 0) {
  alert ("A soma entre eles é par")
} else {
  alert ("A soma entre eles é impar")
}

// Para verificar se os numeros sao iguais basta usar if e else. if(numberOne == NumberTwo) 