// Lista de pacientes

const pacients = [
{
  name: "Caio",
  age: 28,
  weight: 89,
  height: 180,
}, 

{
  name: "Isabella",
  age: 18,
  weight: 60,
  height: 150,
},

{
  name: "Marcelo",
  age: 35,
  weight: 40,
  height: 186,
},  
]


let pacientsNames = []

 /* for (let index = 0; index < pacients.length; index++) {
  pacientsNames[index] = pacients[index].name
} */

for (let pacient of pacients) {
  pacientsNames.push (`${pacient.name} tem ${pacient.age} anos ${pacient.height} cm de altura e ${pacient.weight} Kg.` )
}


alert ( pacientsNames)