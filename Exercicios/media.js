let nota1 = prompt ('Digite sua primeira nota: ')
let nota2 = prompt ('Digite sua segunda nota: ')
let nota3 = prompt ('Digite sua terceira nota: ')

nota1 = Number(nota1)
nota2 = Number(nota2)
nota3 = Number(nota3)

let media = (nota1 + nota2 + nota3) / 3
result = media > 6

media = media.toFixed(2)

if (result) {
  alert('Você passou. Sua média é: ' + media)

}

else {
  alert('Você reprovou. Sua media é: ' + media)
}