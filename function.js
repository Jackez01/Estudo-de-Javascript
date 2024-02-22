//funções
// soma

const sum = function (number1, number2) {
  let total = number1 + number2
  return total
}

let number1 = 26
let number2 = 20

console.log (`o numero 1 é ${number1}`)
console.log (`o numero 2 é ${number2}`)
console.log (`a soma entre eles é ${sum(number1, number2)}`)

// function scope -------------------------------------------------------

let subject = 'create video'

// caso não tenha umobjeto no caso o (subject) ele vai pegar o de fora ent apareceria a mesma coisa
function createThink(subject) {
  subject = 'study'
  return subject
}

console.log (createThink(subject))
console.log (subject)

// Function Hoisting --------------------------------------------------------

sayMyName() 
  function sayMyName() {
    console.log ('Lucas')
}

// Arrow function --------------------------------------------------------------

// se tirar a palavra function e deixar uma seta, funcionará da mesma forma

const sayMyName = (name) => {
  console.log (name)
}

sayMyName('Caio')


// Callback function -------------------------------------------------------------------

// estou em uma função e vou chamar outra função de volta

function  sayMyName(name) {
  console.log('antes de executar a callback')

  name()

  console.log('depois de executar a callback')
}

sayMyName (
  () => {
    console.log('esotu em uma callback')
  }
)

// Funções construtoras----------------------------------------------------------------------
//expressão new
//criar um novo objeto
//this keyword
 

function Person (name) {
  this.name = name
  this.walk = function() {
    return this.name + " está andando"
  }
}

const Lucas = new Person("Lucas")
const Caio = new Person("Caio")
console.log (Lucas.walk())
console.log (Caio.walk())
