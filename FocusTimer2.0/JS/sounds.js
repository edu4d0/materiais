export default function(){
   const treeAudio = new Audio ("../assets/Floresta.wav")
   const rainAudio = new Audio ("../assets/Chuva.wav")
   const coffeeShopAudio = new Audio ("../assets/Cafeteria.wav")
   const fireplaceAudio = new Audio ("../assets/Lareira.wav")

   function playTreeSound(){
      pauseAll()
      treeAudio.play()
   }
   
   function playrainSound(){
      pauseAll()
      rainAudio.play()
   }

   function playcoffeeshopSound(){
      pauseAll()
      coffeeShopAudio.play()
   }

   function playfireplaceSound(){
      pauseAll()
      fireplaceAudio.play()
   }

   function pauseAll(){
      treeAudio.pause()
      rainAudio.pause()
      coffeeShopAudio.pause()
      fireplaceAudio.pause()
   }


   return {
      playTreeSound,
      playrainSound,
      playcoffeeshopSound,
      playfireplaceSound,
      pauseAll,
   }
}

