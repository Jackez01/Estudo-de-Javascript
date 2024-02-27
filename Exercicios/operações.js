let firstNumber = prompt('Digite um número:')
let secondNumber = prompt('Digite outro número:')

firstNumber = Number(firstNumber)
secondNumber = Number (secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('multiplicação: ' + mult)
alert('Divisão: ' + div)
alert('Resto: ' + rest)