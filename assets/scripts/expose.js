// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select")
  const image = document.querySelector("img[src='assets/images/no-image.png']");
  const audioFile = document.getElementsByClassName("hidden");
  const playButton = document.querySelector("button")
  const audio = new Audio(audioFile.src)
  var hornType = ''
  const jsConfetti = new JSConfetti()

  hornSelect.addEventListener('change', function(event){
    image.src = 'assets/images/' + String(event.target.value) + '.svg'
    audioFile.src = 'assets/audio/' + String(event.target.value) + '.mp3'
    hornType = event.target.value;
  })

  playButton.addEventListener('click', function(event){
    if (hornType == 'party-horn'){ 
      jsConfetti.addConfetti()
    }
    audio.src = audioFile.src
    audio.play();
  })

  const volume = document.getElementById('volume')
  const speakerImage = document.querySelector("#volume-controls img")
  volume.addEventListener('input', function(event){
    if (event.target.value == 0){
      speakerImage.src = 'assets/icons/volume-level-0.svg'
    }
    else if (event.target.value < 33){
      speakerImage.src = 'assets/icons/volume-level-1.svg'
    }
    else if (event.target.value < 67){
      speakerImage.src = 'assets/icons/volume-level-2.svg'
    }
    else{
      speakerImage.src = 'assets/icons/volume-level-3.svg'
    }
    audio.volume = event.target.value/100
  })
  
}