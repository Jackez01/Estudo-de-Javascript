// Lista de alunos
const students = [
  {
  name: "Lucas",
  scoreOne: 6,
  scoreTwo: 2,
  },

  {
    name: "Caio",
    scoreOne: 8,
    scoreTwo: 9,
  },

  {
    name: "Julia",
    scoreOne: 7,
    scoreTwo: 10,
  },
]



function media (scoreOne, scoreTwo) {
  return ((scoreOne + scoreTwo) / 2).toFixed(2)
}

function printScore(student) {
  return `O estudante ${student.name} ficou com a média de: ${media}`
}

for (students = 0; students <= 3; students++) {
  if  (media < 7) {
    alert (`Está reprovado!`)
  } else {
    alert(`Está aprovado`)
  }
}