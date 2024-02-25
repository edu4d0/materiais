export default function Controls({
    buttonPause,
    buttonPlay,
    buttonStop
}){

    function play(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide') 
    }
    function pause(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function reset(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    return{
        reset,
        play,
        pause
    }
}