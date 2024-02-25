# ferramentas do java script (let(váriavel) e Alert)

let name = prompt("Digite seu nome")

alert("Olá," + name)


# Somar dois números (prompt(perguta))

alert("Iremos somar 2 números")

let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")
let result = Number(numberOne) + Number(numberTwo)

alert("Resultado final:" + result)

# Operações matemáticas (const(constante))

let firstNumber = prompt('Digite o primeiro número:')
let secondNumber = prompt('Digite o segundo número:')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restdiv = firstNumber % secondNumber

alert('Soma:' + sum)
alert('Subtração:' + sub)
alert('Multiplicação:' + multi)
alert('Divisão:' + div)
alert('Resto da divisão:' + restdiv)


# Calculando média de estudante (if e else)
let student = prompt("Qual e o nome do(a) aluno(a)?")
let n1 = prompt("Digite sua nota na primeira prova?")
let n2 = prompt("Digite sua nota na segunda prova?")
let n3 = prompt("Digite sua nota na terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) /3

let result = average > 6

average = average.toFixed(2)

if (result) {

  alert("parabéns," + student + " sua nota foi de:" + average) 

}else if (result < 3){
    alert("Reprovado")
}

else{
    alert(" Não desista " + student +", sua nota foi de: " + average + ", se esforce mais para a prova de recuperação")
}

# Estutura de dados (For e Array[])

let items = [];

for( let item = 0; item < 10; item++) {

    let itemName = prompt("digite o item" + (item + 1))

    items[item] = itemName
}

alert(items)

# jogo da adivinhação (randomNumber)

let result = prompt("Tente advinhar o número que estou pensando, entre 0 e 10:")
const randomNumber = Math.round (Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber) {
    result = prompt("Erro, Tente novamente:")
    xAttempts++
}

if(xAttempts > 1) {
    alert(`Parabéns, Você advinhou o número em ${xAttempts} tentativas`)
} else {
    alert(`Parabéns, Você advinhou o número em ${xAttempts} tentativa`)
}

# Criando uma lista

let option
let items = []
// let index = 0;//
while(option != 3) {
    option = Number(prompt(`
    Olá usuário! Digite o númeo da opção dessejada
    1. Cadastrar um item na lista
    2. Mostra itens caadastrados
    3. Sair do programa
    `))

   
    if(option == 1){
       let item = prompt("Digite o nome do item")
       items.push(item)
       //ou usar index++//
    }

    else if (option == 2) {

        if (items.length == 0) {
            alert("Não exitem itens cadastrados")
        }else {
        alert(items)
    }

}else{
        alert("Tchau")
    }
}

console.log(option,items)

- Ou também usar este código: 

let option
let items = []

while(option != 3) {
    option = Number(prompt(`
    Olá usuário! Digite o númeo da opção dessejada
    1. Cadastrar um item na lista
    2. Mostra itens caadastrados
    3. Sair do programa
    `))

   
    switch(option){
        case 1:
            let item = prompt("Digite o nome do item")
       items.push(item)
            break;
        case 2:
            if (items.length == 0) {
                alert("Não exitem itens cadastrados")
            }else {
            alert(items)
        }
        break;
        case 3:
            alert ("Tchau")
            break;
        default:
            alert("Opção inválida. Tente novamnte")
    }
}

# Mais um tipo de lista

const pacients = [
  {name: "luiz",
    age: 20,
    weight: 100,
    height: 190,},
    
    {name: "Clara",
    age: 24,
    weight: 65,
    height: 167,},

    {name: "Carlos",
    age: 43,
    weight: 73,
    height: 175,}

]

let pacientname = []
let pacientsage = []
let pacientsweight = []
let pacientsheight = []


/*for(let index = 0; index < pacients.length; index++) {
    pacientsNames[index] = pacients[index].name
}*/

for(let pacient of pacients) {
    pacientsNames.push(pacient.name)
    pacientsAge.push(pacient.age)
    pacientsWeight.push(pacient.weight)
    pacientsHeight.push(pacient.height)

}

for( let index = 0; index < patients.length; index++){
    alert(`O paciente que possui o nome ${patientsNames[index]}, tem ${patientsAge[index]} anos, pesa ${patientsWeight[index]} kg, e tem ${patientsHeight[index]} cm de altura.`)
}


# Como calcular o IMC
/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180
  },
]

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}
  `
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}

