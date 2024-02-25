//Variávies da Aplicação
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos 
btnTry.addEventListener('click', handTryClick)
btnReset.addEventListener('click', handResetClick)
document.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handResetClick()
    }
})
// Função callback
function handTryClick(event) {
    event.preventDefault() // não faça o padrão

    const inputNumber = document.querySelector("#inputNumber")
}
    if(Number(inputNumber.value) == randomNumber){
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
        
        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
    }
    
function handResetClick(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
