// new - serve para criar um objeto

let date = new Date ('2020-12-01')
console.log(date.__proto__)

let name = new String ("Lucas")
name.surName = "Geraldi"
let age = new Number(23)
console.log(name.surName, age)

// Operadores Unarios - typeof (descobrir tipo de dado), delete (procurar uma propriedade dentro de um objeto e delete-la)
const person = {
  name: 'Lucas',
  age: 22,
}
delete person.age

console.log(person)

console.log(typeof "Lucas")

//Operadores aritimeticos
//multiplicação
console.log(3.2 * 5)
//divisão 
console.log(3.2 / 5)
//soma
console.log(3.2 + 5)
//subtração
console.log(3.2 - 5)
//resto de divisão %
let remainder
remainder = 11 % 10
console.log(remainder)
//incremento ++
let increment = 0
increment++
console.log(increment)
//decremento --
let decrement = 0
decrement --
console.log(decrement)
//exponencial **
console.log (3 ** 3)

//Operadores de comparação == e !=
let one = 1
let two = 2

console.log(two == one)
console.log(one == "1")

console.log(one != two)
console.log(one != 1)
console.log(one != "1")

//estritamente igual === estritamente diferente !==
console.log(one == "1")
console.log(one == 1)

console.log(two !== "2")
console.log(two !== 2)

// maior q
console.log(two > one)
console.log(one >= 1)
console.log(two >= 1)
console.log(one < two)
console.log(one <= two)
console.log(one <= 1)

//operadores de atribuição adição, subtração, multiplicação e divisao
let x 
x = 1

x += 2
x -= 1
x *= 2
x /=2

console.log(x)

//Operadores lógicos  AND && OR || NOT !
let presunto = true
let queijo = true

console.log(presunto && queijo)
console.log(presunto || queijo)
console.log(!queijo)

//Operador condicional (ternário)
//condição então valor 1 se não valor 2
//condition ? value1 : value2
let pao = true
let queijo = true
const niceBreakFast = pao && queijo ? 'café top' : 'café ruim'

console.log(niceBreakFast)

let age = 20
const canDrive = age >= 18 ? 'can drive' : 'cant drive'

console.log(canDrive)

//concatenação
let alpha = 'alpha'
console.log('alpha' + 'bet')

//Falsy (quando um valor é considerado false em contextos onde um booleano é obrigatorio
//como: false, 0, -0, "", null, undefined, nan) e truthy ( é o inverso: true, {}, [], 1, -1, infinity, -infinity)
console.log(NaN ? 'verdadeiro' : 'falso')
console.log(true ? 'verdadeiro' : 'falso')


//CONTROL FLOW
//if e else

let temperature = 36

if(temperature >= 37.5) {
  console.log('Febre alta')
} else if (temperature < 37.5 && temperature >= 37) {
  console.log('Febre')
}
 else {
  console.log('Saudavel')
}
// OU
let temperature = 38
let hightemperature = temperature >= 37.5
let mediumtemperature = temperature < 37.5 && temperature >= 37

if (hightemperature) {
console.log ('Febre alta')
}
else if (mediumtemperature) {
  console.log ('Febre moderada')
}
else {
  console.log('Saudavel')
}


//Switch
function calculate (number1, operator, number2) {
let result 

  switch (operator) {
    case '+':
      result = number1 + number2
      break

      case '-':
        result = number1 - number2
        break

        case '*':
      result = number1 * number2
      break

      case '/':
      result = number1 / number2
      break

      default: 
      console.log('não implementado')
      break
  }

  return result
}

console.log(calculate(4, '+', 10))

//Throw
function sayMyName (name = ''){
  if (name === '') {
  throw 'Nome é obrigatório'
  }
  
  console.log(name)
}
//try... catch
try {
  sayMyName('Lucas')
} catch(e) {
  console.log(e)
}

console.log('após o try/catch')

//ESTRUTURAS DE REPETIÇÃO
//for

for (let i = 10; i > 0; i--) {
  if (i===5) {
    //o continue pula algo, mas pode substituir pelo break para que pare em determinado momento
    continue;
  }
  console.log(i)
}

//While
let i = 0
while(i < 10) {
  console.log(i)
  i++
}

//For of

let name = 'Lucas'
let names = ['Pedro', 'joão', 'Paulo']

for (let name of names) {
  console.log(name)
}

//for in - criar um loop em cima de um objeto

let person = {
  name: 'John',
  age: 30,
  weight: 70
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
}