// Lista de alunos
const listStudents = [
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


// função de média
function calculaMedia (scoreOne, scoreTwo) {
  let media = (scoreOne + scoreTwo) / 2
  return media
}


// aprovado ou reprovado
for (let student of listStudents) {
  mediaIndividual = calculaMedia (student.scoreOne, student.scoreTwo)
  let aprovadoOuNao =   mediaIndividual < 7 ? `Infelizmente não foi dessa vez.` : `Parabéns pela aprovação`

  alert (`A média de ${student.name} é ${mediaIndividual} 
  ${aprovadoOuNao}`)
}