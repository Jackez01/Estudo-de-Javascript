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

// ----------------------------------------MANIPULANDO DADOS ---------------


// Type conversion coersion ----------------

 console.log(Number('9') + 5)

 let string = "123"
 console.log(Number(string))

 // agora passar um numero para uma string

 let number = 321
 console.log(String(number))

// Para contar quantas letras existem

 let word = "Paralelepipedo"
 console.log(word.length)

 // Para saber quantos números existem mudamos de number para string

 let number = 1234
 console.log(String(number).length)

 

// Para colocar duas casas decimais e trocar ponto por virgula, porem quando colocar virgula ele deixa de ser um numero
 let number = 432.4679
 console.log(number.toFixed(2).replace(".", ","))


// Transformando letras maiusculas em minusculas e ao contrario para subtituir toUpperCase para toLowerCase
let word = "programar é legal"
console.log(word.toUpperCase())


//Separando a frase em uma array depois separando o texto com _
let phrase = "eu quero viver"
let myArray = phrase.split(" ")
let phraseWithUnderScore = myArray.join ("_")
console.log(phraseWithUnderScore)

 
 // Verificar se tem alguma palavra especifica
 let phrase = "eu escuto música"
 console.log(phrase.includes("escuto"))


 //Criar array com construtor, caso eu coloque apenas um numero vai crair uma lista vazia com o total de espaços
 //let myArray = new Array (10)
  let myArray = new Array ('a', 'b', 'c')
 console.log(myArray)

   
  // contar elementos de um array
  console.log(['a', 'b', 'c'].length)


  //transformar uma cadeia de caracteres em um elemento de array
  let word ="manipulação"
  console.log(Array.from(word))
    

  //manipulando array
  let techs = ['html', 'css', 'js']
  //adicionando um item ao final
  techs.push ("nodejs")
  // adicionando no começo
  techs.unshift("sql")
  //remover do fim - se usar essa função mais de uma vez vai continuar removendo
  //techs.pop()
  //remover do começo
  //techs.shift()
  //pegar somente algum elemento do array
  //console.log(techs.slice(1, 3))

  //remover 1 ou mais itens (qual vc quer tirar, depois quantos quer tirar)
  //techs.splice(1, 1)

  //encontrar a posição de um elemento no array
  let index = techs.index0f('html')  
  techs.splice(index, 1)
  console.log(techs)