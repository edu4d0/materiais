import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {
  buttonPlay,
    buttonPause,
    buttonStop,
    buttonMais,
    buttonMenos,
    minutesDisplay,
    secondsDisplay,
    treeSound,
    rainSound,
    coffeeShopSound,
    fireplaceSound
} from "./elements.js"

const chk = document.getElementById('chk')

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
})

buttonStop.addEventListener('click', function(){
    controls.reset()
    timer.reset()
})
    
buttonMais.addEventListener('click', function(){
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
})

buttonMenos.addEventListener('click', function(){
  minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
})

treeSound.addEventListener('click', function(){
  sound.playTreeSound()
})

rainSound.addEventListener('click', function(){
  sound.playrainSound()
})

coffeeShopSound.addEventListener('click', function(){
  sound.playcoffeeshopSound()
})

fireplaceSound.addEventListener('click', function(){
  sound.playfireplaceSound()
})

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})