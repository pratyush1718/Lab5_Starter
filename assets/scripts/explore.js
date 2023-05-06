// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  console.log(synth)
  let voices = [];
  const selectElement = document.getElementById("voice-select")

  function populateVoiceList() {
    voices = synth.getVoices();
    console.log()
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      selectElement.appendChild(option);
    }
  }

  synth.onvoiceschanged = () => {
    populateVoiceList();
  }

  const button = document.querySelector("button");
  button.addEventListener('click', function(event){
    const inputText = document.getElementById("text-to-speak").value
    let utterance = new SpeechSynthesisUtterance(inputText)
    const voiceSelect = document.querySelector("select")
    const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    const images = document.getElementsByTagName('img');
    const emoji = images[0]
    emoji.src = 'assets/images/smiling-open.png'
    speechSynthesis.speak(utterance)

    utterance.onend = function(){
      emoji.src = 'assets/images/smiling.png'
    }
    

  })
  
  
}

