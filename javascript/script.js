let student = prompt("Qual e o nome do(a) aluno(a)?")
let n1 = prompt("Digite sua nota na primeira prova?")
let n2 = prompt("Digite sua nota na segunda prova?")

let average = (Number(n1) + Number(n2)) /2

let result = average > 6

average = average.toFixed(2)

if (result) {

  alert(`A média do(a) aluno(a) ${student} é: ${average}
  Parabéns,${student}! Você foi aprovado(a) no concurso!`
  
  ) }

else if(result < 6){
    alert(`A média do(a) aluno(a) ${student} é: ${average}
    Não foi dessa vez, ${student}! Tente novamente!`)
}