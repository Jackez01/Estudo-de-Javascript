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

  function IMC(weight, height) {
  return (weight / ((height / 100) **2)).toFixed(2)
  }

  function printPacientIMC(pacient) {
    return `
    Paciente ${pacient.name} possui o IMC de: 
    ${IMC(pacient.weight, pacient.height)}
    `
  }

  for (let pacient of pacients) {
    let IMCmessage = printPacientIMC (pacient)
    alert (IMCmessage)
  }

/*
printPacientsIMC (pacients[0])
printPacientsIMC (pacients[1])
printPacientsIMC (pacients[2]) */   